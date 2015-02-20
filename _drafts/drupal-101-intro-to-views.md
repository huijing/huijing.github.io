---
layout: post
title: "Drupal 101: Introduction to views"
date: February 19, 2015
tags: [drupal, site-building]
category: drupal-planet
---
[Views](https://www.drupal.org/project/views) is an extremely popular Drupal module. As of time of writing, it has been downloaded 6,275,549 times and reported to be used in 876,607 sites. It's so popular, in fact, that it has been included in core for the Drupal 8. So why is Views such an essential module?

If you're not one of the 6,275,549 people who downloaded Views, or if you did but somehow just couldn't grok it and just uninstalled it again, you may be wondering what the fuss is all about. Fact is, I almost fell into the latter category. Even though using Views is pretty intuitive to me now, I can still remember when it felt as complicated as trying to land Curiosity on Mars. Let me try to sum it up in three words.

Views make lists. 

That's essentially what people use Views for. All the content created on Drupal is stored in a database, and Views allows us to filter and pull selected content from that database and display it in the form of a list.

Let's start off by installing this module. You can download it from the [Views project page](https://www.drupal.org/project/views) on Drupal.org. Refer to [Installing modules (Drupal 7)](https://www.drupal.org/documentation/install/modules-themes/modules-7) if you need help installing Drupal modules. As there is a dependency on the [Chaos Tools Suite](http://drupal.org/project/ctools) or CTools, you'll have to install that module too. You have to enable the following 3 modules to use Views:
<ul>
<li class="no-margin">Views</li>
<li class="no-margin">Views UI --> If you miss this, you'll end up wondering why you can't get to the Views admin page</li>
<li>Chaos Tools Suite</li>
</ul>

If you use [Drush](https://github.com/drush-ops/drush), use the following command to download and enable Views:
<pre><code class="language-bash">
drush dl views
drush en views views_ui -y
</code></pre>
This will install and enable all the required modules, including CTools, for you automatically.

Go to the Views administration page and you will see a list of Views that come out of the box with the module. They will all be greyed out as they are disabled by default. The only one that I actually use is Taxonomy Term but most of the time I create my own Views. 
<img src="{{ site.url }}/images/posts/views-admin.jpg" alt="Views admin"/>

Here's some terminology to get straight. A view is the selected content you pull from your database. Once you create a view, you can choose how to present this content through a variety of displays. We'll call them view displays.
<img src="{{ site.url }}/images/posts/views-diagram.jpg" alt="Views diagram"/>

Clicking on &#10133; Add new view will take you to the View creation wizard. It's sort of a simplified version of the main Views editor. Here you can enter the name of your view and its description. For me, I tend to create views for each content type, as that's how I structure my site data. But regardless, it's always advisable to name your views in an understandable manner. It also helps to fill in the description to supplement your name. There are also basic filters you can apply. 
<img src="{{ site.url }}/images/posts/views-wizard.jpg" alt="Views wizard"/>

Remember when I said Drupal stores all your content in a database? Well, a database is made up of lots of tables, so the Show dropdown lets you choose which base table your view will filter from.  The most commonly used option will be Content, which are your nodes. I have also used Taxonomy terms and Users quite often, less so for the others. Depending on which base table you chose, there will be more settings and options you can choose.

You can also choose to create a page or a block right off the bat and be done with it by clicking Save & exit. But odds are, you need to do some more to get the view looking exactly how you want it. So go ahead and click Continue & edit to get to the big boy editor.

If you did not choose page or block from the wizard, you'll arrive at this screen, with Master* as the selected view display. This simply means that anything you set here, will be the default settings for any new displays created. And once you create a view display, the Master panel will not be displayed anymore.
<img src="{{ site.url }}/images/posts/views-master.jpg" alt="Views master display"/>

You get 4 types of view displays out of the box:

1. **Attachment**
    
    A view attachment allows you to attach one view display to another and use it on your site as though it was a single view.

2. **Block**
    
    A view block allows your list to be displayed as a block, which you can move around and position accordingly from the block admin page.

3. **Feed**
    
    A view feed allows your list to be rendered in an RSS feed format, which is good if you need to submit content to aggregators or want to allow people to subscribe to content on your site.   

4. **Page**
    
    A view page basically turns your list of content into a page, complete with it's own unique path. 

###Views main editor

There are a lot of options and settings available here. Remember the Master* panel earlier? Whenever you apply an option or setting, you can choose to apply them to All displays (except overridden), which modifies the Master display and will affect all other displays as well. Or you can apply it just to the current display.

- **Display name**

    Naming the display will help when you have lots of displays for the same view. It will not be shown on the actual content display.

- **Title**
    
    This will be displayed with the view. Enter &lt;none&gt; if you don't want the title to display.

- **Format**
    
    Views come with default templates so you have a choice in how your content is displayed. You can choose to override them through your theme template files. The options are:

    - Grid &rarr; displays your content in columns; uses <code class="language-markup">&lt;table&gt;</code> tags
    - HTML list &rarr; displays your content in lists using HTML tags; uses <code class="language-markup">&lt;ul&gt;</code> or <code class="language-markup">&lt;ol&gt;</code> tags
    - Jump menu &rarr; creates a dropdown menu from the list of content, only works with fields, uses <code class="language-markup">&lt;form&gt;</code> and <code class="language-markup">&lt;select&gt;</code> tags
    - Table &rarr; displays your content in a table, only works with fields, uses <code class="language-markup">&lt;table&gt;</code> tags
    - Unformatted list &rarr; displays your content in generic divs, uses <code class="language-markup">&lt;div&gt;</code> tags

- **Show**

    You can show content based on how it's displayed on the node, or you can choose which individual fields you want to display.

- **Fields**
    
    Select the fields you want displayed. They will appear in the order listed, so you can rearrange the order by clicking on the downward triangle next to the Add button to reveal the Rearrange option. This option is not available if you chose Content as the display mode.

- **Filter criteria**

    You can further fine-tune your list of content based on various conditions. You can use multiple criteria.

- **Sort criteria**
    
    Similarly, you can determine how the list will be sorted based on various conditions as well. You can use multiple criteria for this as well.
