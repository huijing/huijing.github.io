---
layout: post
title: "Handling external posts on your own Jekyll site"
date: Jan 29, 2019
tags: [github-pages, jekyll]
---
I write a lot of stuff on my own blog, and occasionally I will contribute to some external publications. But I do like to have a list of all my writing in one place. My website is built using [Jekyll](https://jekyllrb.com/) and has been for a while now.

Using a static site generator does require some level of effort to set up the relevant templates correctly to ensure your site ends up how you expect. Jekyll uses the [Liquid templating language](https://shopify.github.io/liquid/) and your content can be written in Markdown or spruced up with HTML and CSS.

Most publications expect contributors to give the publication exclusivity of the article for a certain amount of time before republishing because traffic is paramount to these publications' ability to earn money. It is important to respect this requirement, especially if the publication is paying you for the article.

Due to a lack of conscientiousness on my part, I found that I had violated this requirement when I tried to include external posts in my list of writings on my own site <span class="emoji" role="img" tabindex="0" aria-label="pensive face">&#x1F614;</span>. So I'd like to share the steps I took to rectify the mistake and maybe it'll be helpful to people who want to do something similar.

## TL;DR

- Set additional custom variables on Front Matter of external post, which will be used in the subsequent points:
    ```yaml
    external_url: https://PATH_TO_THE_CANONICAL_VERSION
    external_site: PUB_NAME
    ```
- Make sure canonical link in `<head>` points to original source:
    ```html
    {% raw %}{% if page.external_url %}
    <link rel="canonical" href="{{ page.external_url }}">
    {% else %}
    <link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
    <link rel="alternate" type="application/atom+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}">
    {% endif %}{% endraw %}
    ```
- Replace all links to internal post URL with original source URL. For listings, you can add a conditional:
    ```html
    {% raw %}{% if post.external_url %}
    <a href="{{ post.external_url }}">{{ post.title }}</a>
    {% else %}
    <a href="{{ post.url }}">{{ post.title }}</a>
    {% endif %}{% endraw %}
   ```
- Include visual cues to indicate that links to the article redirect to the original source
- Remove external posts from RSS feed, if applicable. The following example requires posts to be excluded have an additional custom variable in the Front Matter:
    ```yaml
    nofeed: true
    ```
    It is possible to use some other existing custom variable that is unique to external posts as the conditional as well. Add conditional to `feed.xml` as follows: 
    ```xml
    {% raw %}{% for post in site.posts limit:15 %}
      {% unless post.nofeed %}
      <item>
        <title>{{ post.title | xml_escape }}</title>
        <description>{{ post.content | xml_escape | truncatewords:120}}</description>
        <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
        <link>{{ site.url }}{{ post.url }}</link>
        <guid isPermaLink="true">{{ site.url }}{{ post.url }}</guid>
      </item>
      {% endunless %}
    {% endfor %}{% endraw %}
    ```
- To make things clear, add a note where the article was originally published, if you include post content as a truncated summary on listings.
- Consider adding a `noindex` to the `<head>` of external posts, if you don't want the internal post URL to end up on search engines at all, but this is a bit of an overkill because as long as the canonical URL is set, this shouldn't affect the SEO of the original content. I think.
- Use a random string as the source filename to minimise the odds people will manually type the internal URL, also part of the overkill suite.

## Jekyll posts

With Jeykll, each post is a single text file which is then processed into a proper blog. It is probably possible to utilise data files to somehow intersperse external links with internal posts but it's too much for my little brain to figure out, so I even with external posts, I create a post file for each.

Since I already have the file, I just write my draft into that markdown file as I would any other post on my site. When my post gets released on the external publication, I will also “publish” the link on my site. Because we can replace the internal link with an external one anywhere a link to the article needs to show up.

And here's where I messed up.

Even though I had set it up such that any internal links to the article body were replaced with the external URL of the published article, I had failed to change the canonical link metatag on the post <span class="emoji" role="img" tabindex="0" aria-label="cross mark">&#x274C;</span>, and included them in my RSS feed <span class="emoji" role="img" tabindex="0" aria-label="cross mark">&#x274C;</span>.

## Canonical links

[Canonical links](https://yoast.com/rel-canonical/), I recently learned, are very important for search engine optimisation. Yes, you may judge me for being in this industry for years without really understanding SEO. Judge away, my friends. A canonical URL specifies the preferred version of a web page, often this should be the original source of the content.

When there are multiple versions of similar content, search engines won't know which one to display in their search results. By picking and indicating which version is canonical, this solves the duplicate content problem.

We do this by setting a `rel=canonical` in the `<head>` of all other non-canonical versions as follows:

```html
<link rel="canonical" href="https://PATH_TO_THE_CANONICAL_VERSION">
```
With this additional metatag, search engines will count links to other versions of the content to the canonical version. If and when you decide you want to republish anything, remember to set this correctly on your post.

Currently in version v3.8.5, Jekyll installs with a gem-based theme called Minima. For gem-based themes, the template files exist within the theme's gem, and you won't be able to see them directly. However, any of these theme defaults can be overriden, or you can create your own custom theme directly.

To replace any of these theme files, create the relevant files and folders in your project. The [Jekyll documentation](https://jekyllrb.com/docs/themes/) gives you step by step instructions and I suggest going through it.

To distinguish between an external post and an internal post, you'll have to add some [Front Matter](https://jekyllrb.com/docs/front-matter/) to the external post that the template can use as an identifier. In my case, I add 2 variables, `external_site` and `external_url`, to all external posts.

```yaml
external_url: https://PATH_TO_THE_CANONICAL_VERSION
external_site: PUB_NAME
```
These 2 variables will be used in a number of places, one of which is the default template to make sure the canonical link is set correctly:

```html
{% raw %}{% if page.external_url %}
<link rel="canonical" href="{{ page.external_url }}">
{% else %}
<link rel="canonical" href="{{ page.url | replace:'index.html','' | prepend: site.baseurl | prepend: site.url }}">
<link rel="alternate" type="application/atom+xml" title="{{ site.title }}" href="{{ "/feed.xml" | prepend: site.baseurl | prepend: site.url }}">
{% endif %}{% endraw %}
```

## Replacing internal URLs with external URLs

With the 2 custom variables defined in the Front Matter of the post, we can also replace any instances of the internal post URL with the proper external URL. Usually this occurs in listings, either on your main page, or blog/writing page.

The template for listing posts usually looks like this:
```html
<ul>
  {% raw %}{% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a>
    </li>
  {% endfor %}{% endraw %}
</ul>
```
Swapping out the URLs can be done with a conditional:
```html
<ul>
  {% raw %}{% for post in site.posts %}
    <li>
      {% if post.external_url %}
      <a href="{{ post.external_url }}">{{ post.title }}</a>
      {% else %}
      <a href="{{ post.url }}">{{ post.title }}</a>
      {% endif %}
    </li>
  {% endfor %}{% endraw %}
</ul>
```

## Visual cues for external links

We can use the `external_site`, custom variable to add a relevant CSS class for styling the external link. 

```html
{% raw %}<a class="{{ post.external_site }} external-url" href="{{ post.external_url }}">{{ post.title }}</a>{% endraw %}
```
which generates the following markup:

```html
<a class="PUB_NAME external-url" href="https://PATH_TO_THE_CANONICAL_VERSION">The title of your article</a>
```
I chose to use pseudo-elements to prepend the logo of the publication to my link, and an icon that indicates a link-out to the end of the link.

```css
.external-url::before,
.external-url::after {
  content: '';
  display: inline-block;
  height: 0.8em;
  width: 0.8em;
}

.external-url::before {
  margin-right: 0.25em;
  background-size: cover;
}

.external-url::after {
  background: url('/assets/images/icons/icon-link.svg') no-repeat;
  background-size: cover;
  margin-left: 0.25em;
}

.PUB_NAME::before {
  background: url('/assets/images/icons/PUB_LOGO.svg') no-repeat;
  background-size: cover;
}
```
If you write for a number of different publications, then you'll have to add more classes for each publication and their corresponding logo.

## Generated RSS feed

Jekyll has an official plugin for generating RSS feeds called [jekyll-feed](https://github.com/jekyll/jekyll-feed), and to activate it, you'll have to add it to your `_config_yml` file. This plugin works if your site is hosted on GitHub Pages as well, and automatically generates an Atom feed at `/feed.xml`.

To override the default template, you can create your own `feed.xml` file in the root of your project. The key is to add a conditional to exclude certain posts. I added another custom Front Matter variable called `nofeed` to my external posts.

```yaml
nofeed: true
```

Then, used it as a conditional in the part of `feed.xml` that generates the list of items:

```xml
{% raw %}{% for post in site.posts limit:15 %}
  {% unless post.nofeed %}
  <item>
    <title>{{ post.title | xml_escape }}</title>
    <description>{{ post.content | xml_escape | truncatewords:120}}</description>
    <pubDate>{{ post.date | date_to_rfc822 }}</pubDate>
    <link>{{ site.url }}{{ post.url }}</link>
    <guid isPermaLink="true">{{ site.url }}{{ post.url }}</guid>
  </item>
  {% endunless %}
{% endfor %}{% endraw %}
```

## Additional things you could do

If you include a snippet of truncated content as a summary on your listings, it might be nice to add a note right at the top that indicates where the article was originally published.

You may also consider adding a `noindex` metatag to the `<head>` of external posts, if you don’t want the internal post URL to end up on search engines at all, but this might be a bit of an overkill because as long as the canonical URL is set, this shouldn’t affect the SEO of the original content. I think.

Another thing to try is to use a random string as the source filename to minimise the odds people will manually type the internal URL, again, this might be overkill after everything else you already did.

## Wrapping up

Well, this sums up the stuff I learned about dealing with external posts on Jekyll. Maybe it'll help someone out. Stay conscientious, my friends.

## Related reading

<ul>
  <li class="no-margin"><a href="https://yoast.com/rel-canonical/">rel=canonical: the ultimate guide</a></li>
  <li class="no-margin"><a href="https://jekyllrb.com/docs/themes/">Jekyll documentation: Themes</a></li>
  <li class="no-margin"><a href="https://robots.thoughtbot.com/external-posts-in-jekyll">External Posts In Jekyll </a></li>
  <li class="no-margin"><a href="https://brightpixels.blog/2017/11/exclude-posts-from-rss-in-jekyll/">Exclude Posts From RSS in Jekyll</a></li>
  <li><a href="https://learningnerd.com/2017/05/30/">Liz Krane’s notes on Jekyll</a></li>
</ul>