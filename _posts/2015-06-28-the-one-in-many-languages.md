---
layout: post
title: "The one in many languages"
date: June 28, 2015
project: SFO China
image: project-10
tags: [client-work, drupal7, i18n]
---
I've always heard that Drupal did multi-language well, but you know when you hear about something and think, I know of it, but I don't know much else about it? That's exactly how multi-lingual Drupal was for me. Until we got to work on the [SFO China site](http://www.flysfo.cn/), which by the way, is one of the finalists for [Acquia's 2015 Partner Site of The Year](https://www.acquia.com/blog/acquia%27s-2015-partner-site-of-the-year-finalists/26/06/2015/3285191).

<img src="{{ site.url }}/assets/images/posts/sfo/sfo.jpg" alt="flysfo.cn"/>

At the time, the main SFO site was a single-language implementation. There was some form of multi-language support, but it did not take advantage of Drupal's multi-lingual infrastructure. We were brought in to build the entire Chinese language site, as well as ensure the infrastructure was in place so additional languages could be implemented easily.

We worked very closely with the team who built the original SFO site, [Proof Integrated Communications](http://www.proofic.com/) (Proof IC). As we were in different timezones, we established a work-flow that allowed both teams to collaborate and keep each other updated on the work we were doing. It really helped that all the developers, who were elbows-deep in code, had direct access to each other. We were also willing to compromise when it came to meetings and skype calls, where we would come in early and they would stay a little later or vice versa. 

## Homepage redesign

<div class="figure-wrapper">
    <figure class="multiple">
        <figcaption>English site on flysfo.com</figcaption>
        <img src="{{ site.url }}/assets/images/posts/sfo/sfo-hp.jpg" alt="flysfo.com homepage"/>
    </figure>
    <figure class="multiple">
        <figcaption>China site on flysfo.cn</figcaption>
        <img src="{{ site.url }}/assets/images/posts/sfo/sfo-hp2.jpg" alt="flysfo.cn homepage"/>
    </figure>
</div>
There were slight differences in the functionality available for the Chinese site and as a result we redesigned the home page for the Chinese site. We laid out the most commonly used links in three panels on the homepage for ease of access. The three major categories in each of these panels were flight information, passenger information and transport information. 

## Importing Chinese content

The structure of the Chinese site would almost mirror English site, with a few minor differences. Not all the English content would have Chinese counterparts. The sections marked for translation would be translated accordingly. These translations would be imported via feeds. All the content for each content type was formatted into their respective XML files. It took about a week of testing, troubleshooting and tweaking to make sure the translations imported correctly. 

The preparation of the XML files was done by Proof IC, and here was were the close collaboration really paid off. As we set up and tested the feed, we constantly updated Proof IC with tweaks that needed to be made to the XML file.

- *&lt;nid&gt;* was required for each XML item to act as a unique feed import identifier. We also used it to map the new Chinese nodes back to the original English ones.
- Every item needed a *&lt;language&gt;zh-hans&lt;/language&gt;* field. The *&lt;language&gt;* field was a convenience tag, which reduced the effort needed to set language of the imported nodes after the fact. 
- Every item needed a *&lt;url&gt;* field. The *&lt;url&gt;* field for each Chinese node would directly mirror its English counterpart. This was to prevent having Chinese characters in the URL, and ensure that after switching languages, the URL of the page remained the same, except with a different domain.
- Image fields had to have the format *&lt;image&gt;http://url.image.jpg&lt;/image&gt;*
- Each content type had its own XML file. This was because each content type had their own set of fields.
- Taxonomy terms were imported in English. This was to prevent the creation of new terms (in Chinese) on import. Taxonomy terms were translated through the system, using the **Multilingual Taxonomy** (i18n_taxonomy) module.

## Translation gotchas

1. **Nodes must have a language assigned (by default, language is set to neutral), otherwise they cannot be translated.** For this case, as the main site was in English, all the nodes were set to *en*. Sample query for setting language as follows, rename *CONTENT_TYPE* as required:
    <pre><code class="language-bash">update node set language = 'en' where type = 'CONTENT_TYPE'</code></pre>
    <p class="no-margin">If, for some reason, some of the nodes need to be in another language or remain as neutral, the query will need additional conditions. The following is an example for setting language on language neutral basic pages, excluding certain specific pages. (This was a special case scenario):</p>
    <pre><code class="language-bash">UPDATE `node` SET `language` = 'en' WHERE `type` = 'page' AND `language` = 'und' AND `nid` NOT IN ('3593', '3600', '3602')</code></pre>

2. **Translated nodes need to be manually linked to their original counterparts via SQL command.** The solution was based off [this post on Drupal Answers](http://drupal.stackexchange.com/questions/69763/using-feeds-to-import-multiple-languages). As this approach involves updating the database, it is prudent to backup the database before proceeding.
    <ul>
    <li class="no-margin">Export the <em>feeds_items</em> table to CSV</li>
    <li class="no-margin">Add the following line to an empty column
    <pre><code class="language-bash">=CONCATENATE("UPDATE `node` SET tnid = """,G2,""" WHERE nid in (""",G2,""",""",B2,""");")</code></pre></li>
    <li class="no-margin">Copy the values in aforementioned column into a separate column, by using <em>Paste Special -> Values</em> to generate the SQL queries</li>
    <li class="no-margin">Copy the queries and run them to link the nodes in the database</li>
    <li class="no-margin">Run the following query to ensure the nodes which require translation to english are set accordingly:
    <pre><code class="language-bash">UPDATE `node` SET `language` = 'en' WHERE `tnid` = `nid`</code></pre></li>
    </ul>

3. <strong>There may be instances where your views title is still displaying in the default language even though the title has been translated.</strong> I'm not exactly sure what the cause of this bug is, but I spent quite some time debugging this. And hence, my documented resolution was as follows:

    <p class="no-margin"><strong><em>ヽ(#`Д´)ﾉ So your view title is still in English</em></strong></p>
    <ul>
    <li class="no-margin">Go to the offending view, and click on <em>Advanced</em></li>
    <li class="no-margin">Click on <em>Theme: Information</em></li>
    <li class="no-margin">Click on <em>Rescan Template files</em></li>
    <li class="no-margin">Go back to your view page and Command+Shift+R</li>
    <li class="no-margin">Pray hard that it works, otherwise you have permission to flip your table <span class="kaomoji">(╯°□°）╯︵ ┻━┻</span></li></ul>
    <p class="no-margin">And yes, my boss let me get away with kaomojis in my issue tickets, because he's awesome like that.</p>

4. **Always use t() function for custom string creation to allow stock multilanguage support**. This is especially relevant for sites that have custom strings in modules or template files. Sample code with t() function as follows:
    <pre><code class="language-php">$widget->widget = str_replace("/>",' placeholder="' . t('Search') . '" />',$widget->widget);</code></pre>

5. **Refresh strings is the "Did you try turning it on and off again?" solution for string translation issues.** If the string that needs to be translated just refuses to show up in the *Translate interface*, make sure you have visited the page where the string is rendered, then refresh strings. Somehow the system needs to "register" those strings before they can be recognised for translation.

## Conclusion

This is one of my favourite projects to work on, despite the amount of tricky issues we encountered. It was one of those projects where the client was a pleasure to work with, and everyone was on the same page. The amount of R&D we did for this project set us up with a lot of valuable knowledge and experience for future multi-language sites as well. With Drupal 8 having even [better multilingual support](http://www.drupal8multilingual.org/), I can see how Drupal can become the platform of choice for multilanguage sites moving forward.
