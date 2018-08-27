---
layout: post
title: "Refactoring an inherited codebase"
date: Aug 27, 2018
tags: [css, html, javascript]
---
So for 2018, I got myself some gainful employment doing full-time frontend development work. You know, the kind where you go to an office, and have colleagues and bosses? Also, pay cheques and CPF (that's the Singapore equivalent of a retirement fund), love those. <span class="emoji" role="img" tabindex="0" aria-label="money bag">&#x1F4B0;</span><span class="emoji" role="img" tabindex="0" aria-label="money bag">&#x1F4B0;</span><span class="emoji" role="img" tabindex="0" aria-label="money bag">&#x1F4B0;</span>

Anyhow, one of my responsibilities was to refactor and clean-up the frontend codebase for the company's existing products. It's not that I've never refactored codebases before, half my career was built on refactoring legacy projects, but these were a bit larger and messier than my previous projects. And note that I used the word products, with an ‘s’.

But first, some back-story.

<ol>
  <li class="no-margin">Start-up founder has great idea.</li>
  <li class="no-margin">Start-up founder throws together prototype with some interns to show potential clients</li>
  <li class="no-margin">Potential clients become actual clients</li>
  <li class="no-margin">Actual clients make feature requests</li>
  <li class="no-margin">Interns add features the best they can</li>
  <li class="no-margin">Product</li>
</ol>

I believe such a situation is far from uncommon, and pretty much every start-up you throw a stone at has some similar history. So I'm not throwing shade at my employer at all. In fact, I admire the fact that they executed a great idea with limited resources, and managed to on-board actual paying clients. Much kudos for that.

## Assessing the situation

To be fair, I was informed, before joining the organisation, that the code base needed work. Things worked, but under the hood, it was getting unmanageably messy with increased throughput and piling feature requests. That being said, a general strategy was in order before any actual coding and refactoring was to take place. I thought a 3-phase approach could work for this instance.

<figure>
    <figcaption>General strategy and approach</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/plan-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/plan-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/plan-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/plan-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/plan-640.png" alt="A three-phase plan">
</figure>

At the end of my engagement, *phase 3* was still quite far away because there significant architectural changes required for the entirety of the application, but *phase 2* (clean-up) was a significant endeavour in of itself.

I hadn't had much experience with Python applications prior to this, but I've come to realise that certain patterns are prevalent when it comes to web applications. The product that I had to tackle was built on [Flask](http://flask.pocoo.org/), and since I was hired for a frontend role, almost all my work took place exclusively in the `static` and `templates` folders. Almost.

<pre><code class="language-bash"># Structure of a basic Flask application
PROJECT_FOLDER/
    |-- yourapplication.py
    |-- static/
    |   `-- style.css
    `-- templates/
        |-- layout.html
        |-- index.html
        |-- login.html
        `-- …</code></pre>

Given that I was the first dedicated frontend role they ever hired, it was no surprise that the state of the project's frontend was, how shall we put this, left wanting. Apparently, the backend of things wasn't much prettier, but again, I doubt most start-ups have well-architected codebases until later on in their lifespan.

### Preliminary site assessment

Before diving into the code proper, I did a basic click-around, to get an idea of the look and feel of the site, and what it did. To me, this is a pretty important step, because you can only encounter a site *for the first time*, once in your life. And I took notes. Notes on things that took me a while to figure out, places where I had to ask “hmmm, now what does this even mean?”, functionality that required extra cognitive effort to comprehend.

<figure>
    <figcaption>Not sure what those do…</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/unknown-inputs-480.jpg 480w, {{ site.url }}/assets/images/posts/refactoring/unknown-inputs-640.jpg 640w, {{ site.url }}/assets/images/posts/refactoring/unknown-inputs-960.jpg 960w, {{ site.url }}/assets/images/posts/refactoring/unknown-inputs-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/unknown-inputs-640.jpg" alt="Mysterious inputs without labels">
</figure>

As someone who has been building interfaces for a living for the past 5 years, believe me when I say, people who work on the product itself on a daily basis are the worst group to do user testing with. Because we interact with the product, bugs and all, way more frequently than normal users.

Hence, we inadvertently become blind to numerous usability issues simply because whatever we do to workaround the issue, has been committed to muscle memory. Even if it's something unintuitive, like having to click certain things in a specific sequence for it to work.

All of this was documented into a trusty spreadsheet. I don't know about you, but I'm rather fond of spreadsheets as an organisational tool. To me, it's the easiest way to organise data into useful, information. But that's just me. You do you.

<figure>
    <figcaption>What can I say, I like spreadsheets</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/tracker-480.jpg 480w, {{ site.url }}/assets/images/posts/refactoring/tracker-640.jpg 640w, {{ site.url }}/assets/images/posts/refactoring/tracker-960.jpg 960w, {{ site.url }}/assets/images/posts/refactoring/tracker-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/tracker-640.jpg" alt="Compiling findings into a Google Sheets document">
</figure>

### Site analysis with tools

The most basic analysis can be done via DevTools in any of the major browsers from the *Network* tab. It's more of a personal preference, but I prefer how Chrome and Firefox do it, where both of them tell you the number of requests, size of transfer, time it takes to finish loading, and when `DOMContentLoaded` is fired.

<figure>
    <figcaption>Hmmm, a bit on the heavy-side here</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/performance-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/performance-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/performance-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/performance-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/performance-640.png" alt="Chrome's network tab">
</figure>

After working through the entire product, I came up to a total of 24 different pages, some ranging from pure textual content to some with a whole lot of business logic for creating complex rules and conditions. I tossed my findings into the aforementioned spreadsheet and ended up with the following statistics:

<ul>
  <li class="no-margin">Average number of requests: 76</li>
  <li class="no-margin">Average page weight: 6.017mb</li>
  <li class="no-margin">Total number of external JS libraries: 49</li>
  <li>Total number of external CSS files: 30</li>
</ul>

Chrome also has [a nifty code coverage tool](https://developers.google.com/web/updates/2017/04/devtools-release-notes) that gives you a general idea of how much redundant code is present in your application. Usually the biggest source of redundant code comes from external libraries, but sometimes this is inevitable, so it's necessary to look deeper than just the raw numbers themselves.

<figure>
    <figcaption>That's quite a lot of unused code</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/coverage-480.jpg 480w, {{ site.url }}/assets/images/posts/refactoring/coverage-640.jpg 640w, {{ site.url }}/assets/images/posts/refactoring/coverage-960.jpg 960w, {{ site.url }}/assets/images/posts/refactoring/coverage-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/coverage-640.jpg" alt="Chrome's coverage tool">
</figure>

### Evaluating audit results

It became clear that any attempt to refactor the code would take significantly more time and effort than I could afford with my one-woman team. I call this the *one-brain-two-hands* problem, i.e. Hui Jing only has 1 brain and 2 hands.

Data from the backend was being passed to the frontend via Jinja variables. However, the variables sometimes were not simply raw data, but contained preformatted strings and values that made it tricky to change the way things were implemented.

<figure>
    <figcaption>This was painful to go through, to be honest</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/messy-code-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/messy-code-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/messy-code-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/messy-code-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/messy-code-640.png" alt="Mish-mash of HTML, CSS, Javascript and Jinja variables">
</figure>

There was a large amount of inline Javascript in the template files themselves which used Jinja variables as part of the Javascript functions. That was a hard no for me, and I insisted on extracting all Javascript into separate `.js` files and keeping the templates clean of inline styles and scripts.

## Burn it down, build it up

<p>To be honest, I wouldn't recommend this approach lightly. But given the circumstances, that:</p>
<ul style="list-style:upper-alpha">
    <li class="no-margin">it wasn't too large an application</li>
    <li class="no-margin">there was no proper HTML structure at all</li>
    <li class="no-margin">external libraries were outdated and installed inconsistently</li>
    <li class="no-margin">the code was a hodgepodge of Jinja variables in inline scripts and inline styles and</li>
    <li>the fact that <em>my youth was slipping away</em>,</li>
</ul>

I decided to rip out all the styles and scripts and rewrite them from scratch, only including external Javascript libraries like [Moment.js](https://momentjs.com/) and [Chart.js](https://www.chartjs.org/) where necessary.

Keeping in mind that I had a team of 1, I was reasonably confident I could pull this off because I can CSS faster than most developers I know, so the look-and-feel wouldn't take long. From a UI functionality perspective, things didn't appear to be overly complicated.

Even so, it probably took **5 full man-months** worth of effort to finish up the initial rewrite, housekeeping and documentation work. In the meantime, there were also demos to be built (for tradeshows and the like), as well as my own non-employer related commitments. So it's safe to say I kept busy for the past 8 months.

### Function matching

I'd like to say there were functional requirements that I could refer to when doing the rewrite, unfortunately, there were none. Or at least none that was updated to reflect what the product was currently. But if all was well, I wouldn't have gotten the job now, would I?

Plan B: run an instance of the application that tracked the current master release and match all observable functionality as I rewrote every page of the application. I would like to reiterate that this worked only because the application was of a manageable size to begin with.

<figure>
    <figcaption>Original on the left, rewrite on the right</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/before-after-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/before-after-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/before-after-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/before-after-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/before-after-640.png" alt="Before and After look and feel">
</figure>

This approach also flushed out a large number of implementation issues. for example, there were limited REST APIs by which to access information stored in the database, because the previous implementation used Jinja variables directly into inline Javascript functions. See exhibit below:

<pre><code class="language-markup">&lt;script&gt;
  (function() {
    $(document).ready(function() {
      $('input[name="is_activated"]').bootstrapSwitch();

      var formData = &lcub;&lcub; formData|tojson &rcub;&rcub;;
      &lcub;% if name %&rcub;
      $("#rule_form_name_input").val(htmlTextToString("&lcub;&lcub; name &rcub;&rcub;"));
      &lcub;% endif %&rcub;
      &lcub;% if description %&rcub;
      $("#comments-text").val(unescapeJs("&lcub;&lcub; description|escapejs &rcub;&rcub;"));
      &lcub;% endif %&rcub;

      var editorHelpers = EditorHelpers();

      &lcub;% for field in fields %&rcub;editorHelpers.addSelectData("field", "&lcub;&lcub; field['name']|safe &rcub;&rcub;", "&lcub;&lcub; field['display_name']|safe &rcub;&rcub;", &lcub;&lcub; field['filter_equivalence_classes']|tojson &rcub;&rcub;);&lcub;% endfor %&rcub;
      &lcub;% for operator in operators %&rcub;editorHelpers.addSelectData("operator", "&lcub;&lcub; operator['name']|safe &rcub;&rcub;", "&lcub;&lcub; operator['display_name']|safe &rcub;&rcub;", &lcub;&lcub; operator['filter_equivalence_classes']|tojson &rcub;&rcub;);&lcub;% endfor %&rcub;
      &lcub;% for value in values %&rcub;editorHelpers.addSelectData("value", "&lcub;&lcub; value['name']| replace('\r\n', ' ') &rcub;&rcub;", "&lcub;&lcub; value['display_name']| replace('\r\n', ' ') &rcub;&rcub;", &lcub;&lcub; value['filter_equivalence_classes']|tojson &rcub;&rcub;);&lcub;% endfor %&rcub;

      if (formData!=null) {
        var formAlert = formData["alert"]
        if (formAlert) {
          editorHelpers.populateAllAlertData(formAlert);
        }
      }
      var groupObjs = [];
      /* Another 200 plus lines of this */
&lt;/script&gt;</code></pre>

There was also several instances where the data passed to the frontend contained markup embedded in it, which sort of forced me to modify the Python application files to remove the unwanted pre-processing. So much for leaving the backend alone. <span class="kaomoji">¯\\\_(ツ)_/¯</span>

### Re-evaluating site performance

When the smoke cleared, the statistics of the site were as follows:

<ul>
  <li class="no-margin">Average number of requests: 30</li>
  <li class="no-margin">Average page weight: 311kb</li>
  <li class="no-margin">Total number of external JS libraries: 15</li>
  <li>Total number of external CSS files: 4</li>
</ul>

A lot of the weight came from full-featured external libraries whose functionalities were barely used. A large amount of that was either replaced with lightweight alternatives or rewritten from scratch.

<figure>
    <figcaption>Loaded code from 5.1mb down to 291kb</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/coverage2-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/coverage2-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/coverage2-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/coverage2-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/coverage2-640.png" alt="Coverage tool results after rewrite">
</figure>

The only external CSS loaded were for datepickers and datatables, and even those were already customised to include only the relevant styles, so there were a lot of savings on the CSS side of things as well.

<figure>
    <figcaption>From 83 requests at 7.5mb down to 40 requests at 563kb, with room for improvement</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/refactoring/performance2-480.png 480w, {{ site.url }}/assets/images/posts/refactoring/performance2-640.png 640w, {{ site.url }}/assets/images/posts/refactoring/performance2-960.png 960w, {{ site.url }}/assets/images/posts/refactoring/performance2-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/refactoring/performance2-640.png" alt="Page weight after rewrite">
</figure>

As a preliminary assessment, this was a relatively good outcome. There is further room for improvement for a second-pass refactoring, both on the Javascript side as well as the CSS side, but that portion of work will probably fall to the next person who takes over this project.

## Wrapping up

The best analogy I had for this experience was swapping engines on the a flying plane. But I don't think such situations are an uncommon occurrence, especially in the world of start-ups. I did learn quite a lot from the experience (even picked up a little Python along the way), and not just from a coding perspective.

Paying off technical debt is not a trivial endeavour at all, and it highlights the importance of having a solid architecture in place before any lines of code are even written. As several experienced seniors have once advised me:

> The best code is the code not written

Documentation appears to be another thing that takes a back-seat in start-ups, but the fact is that people will come and go. In an environment with a relatively high attrition rate, proper documentation and handover becomes even more critical to ensure continuity and consistency of the software you're building.

In an ideal world where unicorns shit rainbows, we wouldn't have to do such major rewrites or refactoring projects, however, given that every organisation has their own set of constraints, sometimes it is just an inevitable part of the product development process.

Here's to constant improvement, and may the code you write always be better than what you wrote yesterday. <span class="emoji" role="img" tabindex="0" aria-label="tumbler glass">&#x1F943;</span>
