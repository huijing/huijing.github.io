---
layout: post
title: "Drupal 101: Creating an iTunes podcast feed"
date: May 04, 2015
tags: [drupal7, site-building]
category: planet-drupal
---
Podcast listenership has been steadily increasing in recent years, and some are even predicting that we're on the verge of a [podcasting explosion](http://contently.com/strategist/2014/10/21/4-predictions-from-top-media-minds/). With that being said, it's pretty likely you'll get tasked with creating an iTunes podcast feed. Luckily, it's quite simple to create one on your Drupal site with Views.

### Required modules

<ul>
    <li class="no-margin"><a href="https://www.drupal.org/project/views">Views</a></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/views_rss">Views RSS</a></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/views_rss_itunes">Views RSS: iTunes Elements</a></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/libraries">Libraries</a><em> (dependency for getID3())</em></li>
    <li><a href="https://www.drupal.org/project/getid3">getID3()</a><em> (dependency for Views RSS: iTunes Elements)</em></li>
</ul>

## Create/Modify content type for feed

1. Install and enable the required modules.
    <pre><code class="language-bash">drush en views views_ui views_rss views_rss_core views_rss_itunes libraries getid3 -y</code></pre>
    - Create a new folder in your libraries folder like so: <code class="language-bash">sites/all/libraries/getid3</code>.
    - Go to [http://www.getid3.org/](http://www.getid3.org/) and download the appropriate version based on your web server's PHP version.
    - Make sure <code class="language-bash">write.php</code> is in <code class="language-bash">sites/all/libraries/getid3/getid3</code>.
2. Your content type should have fields that can be mapped to the [recommended iTunes RSS tags](https://www.apple.com/sg/itunes/podcasts/specs.html#rss). Apple kindly provided a very helpful graphic for this.

    <img src="https://www.apple.com/sg/itunes/podcasts/images/itunes-podcast-display.jpg" alt="Common iTunes tags">

    <p class="no-margin">Not all the tags are required. But it's good practice to include the following (as shown in the image above) so your podcast shows up nicely on the iTunes store:</p>
    <ul>
        <li class="no-margin">channel &lt;itunes:author&gt;</li>
        <li class="no-margin">channel &lt;itunes:image&gt;</li>
        <li class="no-margin">channel &lt;title&gt;</li>
        <li class="no-margin">channel &lt;itunes:summary&gt;</li>
        <li class="no-margin">item &lt;title&gt;</li>
        <li class="no-margin">item &lt;itunes:duration&gt;</li>
        <li class="no-margin">item &lt;pubDate&gt;</li>
        <li class="no-margin">item &lt;itunes:subtitle&gt;</li>
        <li class="no-margin">item &lt;itunes:summary&gt;</li>
    </ul>

3. <p class="no-margin">Create a content type with at least the following fields:</p>
    <ul>
        <li class="no-margin">Title</li>
        <li class="no-margin">Description <em>(just repurpose the Body field)</em></li>
        <li class="no-margin">Image</li>
        <li>Audio - Use the <em>File</em> field</li>
    </ul>

    If you already have a content type that has an audio file field, you can skip this. Otherwise, when creating the new file field, make sure you change the allowed file extensions accordingly. iTunes accepts m4a, mp3, mov, mp4, m4v, pdf, epub.

    <img src="{{ site.url }}/images/posts/itunes/file-types.jpg" alt="Allowed file extensions"/>

## Create the Feed view

For this example, I'll be recreating the sample feed from the [Making a Podcast](https://www.apple.com/sg/itunes/podcasts/specs.html) guide by Apple.

1. Create a new view for your content type.
 
    <img src="{{ site.url }}/images/posts/itunes/new-view.jpg" alt="Create new view"/>
2. Add a feed view display. Specify the file name of your feed file, <code class="language-bash">podcast.rss</code> is a good option.

    <img src="{{ site.url }}/images/posts/itunes/feed-display.jpg" alt="Create feed display"/>
3. Under *Format*, select *RSS Feed - Fields* as the format. The Views add-on for iTunes elements provides fields for all the available tags, and you can decide which ones you want to use. The module also helpfully points out which ones are required by Apple. For now, just click *Apply* on the *Settings* interface because we need to add the necessary fields first.
4. There are quite a number of fields to add and I'll go through each one as some of them need tweaking to ensure the feed will validate properly. For all the fields, uncheck *Create a label*.
    - **Content: Title** maps to **item &lt;title&gt;**  
    This field is present by default. Ensure that *Link this field to the original piece of content* is unchecked. **a** tags are not allowed in the title field.
    - **Content: Body** maps to **&lt;itunes:subtitle&gt;** and **&lt;itunes:summary&gt;**  
    Add the Content: Body field and set the format to trimmed. Adjust the trim length as required. Under *Rewrite results*, ensure *Strip HTML tags* is checked. HTML tags are not allowed in the *&lt;itunes:subtitle&gt;* or *&lt;itunes:summary&gt;* fields.
    - **Content: Path** maps to **item &lt;link&gt;**  
    Add the Content: Path field and under *Rewrite results*, ensure *Use absolute link (begins with "http://")* is checked. The link field must contain full URLs.
    - **Content: Post date** maps to **item &lt;pubDate&gt;**  
    Before you add the field, you need to add a RFC-822 date format to your site. Go to <code class="language-bash">/admin/config/regional/date-time/formats</code> and adding the Format string: **D, d M Y H:i:s O**. Then, go to <code class="language-bash">/admin/config/regional/date-time</code> and add a date type using this new format.  
    Add the Content: Post date field and set the *Date format* to the RFC 822 format you just created. The pubDate field must be in the RFC 822 format.

    <p class="no-margin">The next three fields are duplicates, just formatted differently.</p>

    - **Content: Audio** maps to **item &lt;enclosure&gt;**  
    Add the Content: Audio field and set the *Formatter* to *RSS &lt;enclosure&gt; element*. I strongly suggest changing the *Administrative title* (under More) to something like Content: Audio (enclosure) for easier identification.
    - **Content: Audio** maps to **item &lt;itunes:duration&gt;**  
    Add another Content: Audio field and set the *Formatter* to *RSS &lt;itunes:duration&gt; element*. Change the *Administrative title* (under More) to something like Content: Audio (duration) for easier identification.
    - **Content: Audio** maps to **item &lt;guid&gt;**  
    Add another Content: Audio field and set the *Formatter* to *URL to file*. Change the *Administrative title* (under More) to something like Content: Audio (guid) for easier identification.
5. Under *Format*, click on *Settings*. This is where you map your fields to their respective tags.

    - For *Channel elements: core*, fill in the following fields:
        <ul>
        <li class="no-margin">description -> description of the entire podcast</li>
        <li class="no-margin">language -> language code for the channel</li>
        <li class="no-margin">category -> multiple categories allowed</li>
        </ul>
    - For *Channel elements: itunes*, fill in the following fields:
        <ul>
        <li class="no-margin">subtitle -> subtitle for the entire podcast</li>
        <li class="no-margin">summary -> brief summary for the entire podcast</li>
        <li class="no-margin">category -> multi-select field of iTunes categories</li>
        <li class="no-margin">image -> enter a URL for the image</li>
        <li class="no-margin">explicit -> select either yes, no or clean</li>
        <li class="no-margin">owner -> format is: john.smith@example.com, John Smith</li>
        </ul>
    - For *Item elements: core*, map the following fields:
        <ul>
        <li class="no-margin">title -> Content: Title</li>
        <li class="no-margin">link -> Content: Path</li>
        <li class="no-margin">description -> Content: Body</li>
        <li class="no-margin">enclosure -> Content: Audio (enclosure)</li>
        <li class="no-margin">guid -> Content: Audio (guid)</li>
        <li class="no-margin">pubDate -> Content: Post date</li>
        </ul>
    - For *Item elements: itunes*, map the following fields:
        <ul>
        <li class="no-margin">subtitle -> Content: Body</li>
        <li class="no-margin">summary -> Content: Body</li>
        <li class="no-margin">duration -> Content: Audio (duration)</li>
        </ul>
6. If you scroll down to the Preview panel, you should see a nice XML file ready to be sent over to iTunes. But before that, we need to make sure our feed passes validation.

## Testing your feed file

1. There are a couple ways you can do this. I exported my podcast.rss file and hosted it on my GitHub account, but you can host it anywhere you want. If you have a staging site to deploy to for testing, even better. Go to [Cast Feed Validator](http://castfeedvalidator.com/) and enter the URL to your feed file.
2. If all goes well, you should see something like this:

    <img src="{{ site.url }}/images/posts/itunes/validation.jpg" alt="Feed validation"/>
3. Note that if you exported your podcast.rss file from local development, and your site domain isn't a legit domain (I use **.dev** on my local), your feed will not validate. But this can be ignored because once you deploy to an actual site, this issue will be resolved.

## If you run into AJAX errors...

I'm not too sure if this is a localised issue or not, so I'm just adding on what I did to resolve the AJAX issues I encountered.

- Downgrade the getid3 module to version 7.x-1.0
- Double-check that Drupal recognises the getid3 library by checking Status Report
- Make sure the getid3 library path matches the actual folder name in your Libraries folder

## Wrap-up

And that's pretty much it. Your feed should be ready for submission to the iTunes store. I suggest using the [Making a Podcast](https://www.apple.com/sg/itunes/podcasts/specs.html) documentation as a checklist just to ensure everything is in order. Happy podcasting!

