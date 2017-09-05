---
layout: post
title: "Drupal 101: Setting up basic i18n"
date: April 13, 2016
tags: [drupal7, i18n, site-building]
category: planet-drupal
---
One of the best things about Drupal is its robust multilingual support. If you need to build a website that supports multiple languages, Drupal should definitely be an option to consider.

<p class="no-margin"><strong>Required modules</strong></p>
<ul>
    <li class="no-margin">Locale <em>(core module)</em></li>
    <li class="no-margin">Content translation <em>(core module)</em></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/i18n">Internationalization</a></li>
    <li><a href="https://www.drupal.org/project/variable">Variable</a><em> (dependency for Internationalization)</em></li>
</ul>

## Making your site multi-lingual

1. Install and enable the required modules.
    <pre><code class="language-bash">drush en i18n i18n_node -y</code></pre>
    This will enable i18n and its dependencies. The i18n module comes with a number of sub-modules, which you can enable based on your requirements. For now, just enable `i18n_node` for content translation. Go [here](http://evolvingweb.ca/story/drupal-7-multilingual-whats-new-i18n) for a comprehensive write-up of all the sub-modules.

2. Go to `admin/config/regional/language` and add the languages you want to support. You can select from a list of predefined languages as well as add your own custom language.
    
    <img srcset="{{ site.url }}/images/posts/drupal-i18n/add-lang-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/add-lang-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/add-lang-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/add-lang-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/add-lang-640.jpg" alt="Add language" />

3. You can add as many languages as you need to support, and manage them from the *Languages* admin interface.

    <img srcset="{{ site.url }}/images/posts/drupal-i18n/lang-list-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/lang-list-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/lang-list-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/lang-list-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/lang-list-640.jpg" alt="List of languages" />

4. There are several options for accessing each of the translated versions of the site. The most common method is via URL, either by domain or by path prefix, and Drupal 7, out-of-the-box, supports both these options.

    <img srcset="{{ site.url }}/images/posts/drupal-i18n/lang-select-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/lang-select-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/lang-select-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/lang-select-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/lang-select-640.jpg" alt="Language selection" />

## Translating content

1. If you started out on a brand new site with no content, then this issue won't apply to you, but if your site already had content before you turned on multi-lingual support, you may see your existing content being assigned as *Language neutral*.

2. Every content type, by default, has multilingual support turned off. Changing this to *Enabled* will give you the option to set the default language for a particular piece of content, while changing it to *Enabled, with translation* will add a *Translate* tab when you're editing that piece of content.

    <div class="figure-wrapper">
        <figure class="multiple">
            <figcaption>Enable content translation</figcaption>
            <img src="{{ site.url }}/images/posts/drupal-i18n/enable-content.jpg" srcset="{{ site.url }}/images/posts/drupal-i18n/enable-content@2x.jpg 2x" />
        </figure>
        <figure class="multiple">
            <figcaption>Additional translate tab</figcaption>
            <img src="{{ site.url }}/images/posts/drupal-i18n/trns-content.jpg" srcset="{{ site.url }}/images/posts/drupal-i18n/trns-content@2x.jpg 2x" />
        </figure>
    </div>

3. The *Translate* tab shows all the translations of a particular piece of content. Each translation is a separate node, but they are all recognised as translations of the source content by a `tnid` in the database.
    
    <img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-640.jpg" alt="Translate interface" />

## Translating other parts of the site

There's a lot more content that requires translation other than just plain content from nodes, from menus, to taxonomy terms to views and that's the reason there are so many sub-modules for the i18n module. The translation functionality has been modularised in this manner for ease of customisation.

Translation is always tricky to implement, and there are certain gotchas that may trip you up, especially if your site is more complicated. Trust me, I've been there so I wrote up a couple of [translation gotchas]({{ site.url }}/blog/the-one-in-many-languages/#translation-gotchas) from a previous project.

### Menu translation

Activating this sub-module will turn on *Translation sets* as well, and you will see additional *Translate* tabs and *Multilingual options* interfaces when you edit your menus.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-menu-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-menu-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-menu-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-menu-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-menu-640.jpg" alt="Translate menu" />

Setting your menus to *Translate and localise* let's you translate the menu links and they will appear in their respective languages specified, if a translation was provided.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-menu2-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-menu2-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-menu2-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-menu2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-menu2-640.jpg" alt="Translate menu options" />

### Taxonomy translation

Turning this sub-module on allows you to provide translations for your taxonomy terms. The difference between *localise* and *translate* is that localisation uses the same taxonomy ID across languages while translating creates a new taxonomy term altogether.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/taxonomy-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/taxonomy-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/taxonomy-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/taxonomy-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/taxonomy-640.jpg" alt="Translate taxonomy" />

### Views translation

Views is an indispensable module for many sites and it is possible to translate every part of your content created from views. It is also possible to filter your views content based on language so if a particular piece of content does not have a corresponding translation, it will not show up in the view.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-view-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-view-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-view-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-view-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-view-640.jpg" alt="Translate views option" />

The translate views interface lets you translate elements that are generated by views like buttons, links and custom content entered into the views header or footer.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-view2-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-view2-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-view2-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-view2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-view2-640.jpg" alt="Translate views interface" />

### String translation

This sub-module allows you to translate user-defined strings. Depending on which other sub-modules are enabled (e.g. menu or panels or views), different sets of texts are made available to be translated.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-string-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-string-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-string-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-string-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-string-640.jpg" alt="Translate strings interface" />

You will be able to see the original string, and enter an appropriate translation to that string.

<img srcset="{{ site.url }}/images/posts/drupal-i18n/translate-string2-480.jpg 480w, {{ site.url }}/images/posts/drupal-i18n/translate-string2-640.jpg 640w, {{ site.url }}/images/posts/drupal-i18n/translate-string2-960.jpg 960w, {{ site.url }}/images/posts/drupal-i18n/translate-string2-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/images/posts/drupal-i18n/translate-string2-640.jpg" alt="Translate a string" />


## Wrapping up

This post has merely skimmed the surface of building a multi-lingual site with Drupal, and if your project requires a multi-lingual implementation, Drupal is definitely an option worth considering. It may not be perfect, but it does the job reasonably well compared to its competition.

## Further reading

<ul>
  <li class="no-margin"><a href="http://evolvingweb.ca/story/drupal-7-multilingual-whats-new-i18n">Drupal 7 Multilingual: What’s new in i18n</a></li>
  <li><a href="https://www.drupal.org/resource-guides/configuring-multilingual-site">Resource Guide: Configuring a Multilingual Site</a></li>
</ul>
