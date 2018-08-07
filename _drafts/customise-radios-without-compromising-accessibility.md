---
layout: post
title: "Customise radio buttons without compromising accessibility"
date: Aug 07, 2018
tags: [css, html]
hascaniuse: true
---
I realised I've been missing the mark on titles recently when one of my interns asked me about the title of my last talk. It was *Not in Kansas anymore: a new frontier for web design*, and the question was, “What does that mean? Isn't Kansas a city?” <span class="kaomoji">¯\\\_(ツ)_/¯</span>

Naming things is hard, my friends. But anyway, my latest adventure in layout involved building some toggles on a configuration page. Nothing too complicated, just some souped up radio buttons for a Cordova-based demo at work.

## Hiding the radio input

With talks from Web Directions Code still fresh in my mind, I was particularly cognizant of the fact that default radio buttons worked great with keyboard controls and whatever fanciness I was planned to come up with **must not** break that.

Fortunately, it's not rocket science to ensure keyboard navigation works with fancy radio buttons. The concept behind styling radio buttons hinges on the magic of HTML attributes, which allows us to link input elements to their labels. So you can hide away that default blue circle, spruce up the label element however you want, and still interact with the input element via the label. Who knew?! (I'm being sarcastic here, in case it wasn't clear enough)

Most of us mess up the keyboard navigation portion of things when we hide the input element. There are several ways to make something invisible or hidden:

1. `clip-path: polygon(0 0)`
2. `display: none`
3. `opacity: 0`
4. `visibility: hidden`

This article on [WebAIM](https://webaim.org/) discusses [invisible content just for screen reader users](https://webaim.org/techniques/css/invisiblecontent/), and is a pretty useful read. Of the four techniques I listed above, only option 2 hides the input in a way that doesn't take up space.

The other 3 techniques render the element invisible, but they still take up the original amount of space they occupied. We'll have to pair them with a `position: absolute` so they are taken out of the normal document flow, and the rest of your content isn't disrupted.

For custom radios (or checkboxes), option 2 and 4 are **not recommended** because screen readers won't be able to read the default radio element. This also prevents us from using the `:focus` pseudo-element on the hidden input, so those are out of the picture.

Which leaves us with option 1 and option 3. I sort of like option 1, because `clip-path` is fun. Clip-path creates a clipping region which defines what portion of an element is visible. This clipping region can be a basic shape or a url referencing a clipping path element.

In this case, using `polygon(0 0)` is still legitimate (according to the validator I checked), because the specification says:

> At least three vertices are required to define a polygon with an area. This means that (for this specification) polygons with less than three vertices (or with three or more vertices arranged to enclose no area) result in an empty float area.

By defining a polygon with only 1 vertex, I've created an empty float area. An empty float area (where the shape encloses no area) has no effect on line boxes. Brilliant.

What's not so brilliant is the sad state of affairs when it comes to browser support for `clip-path`.

<p class="ciu_embed" data-feature="css-clip-path" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=css-clip-path">Can I Use css-clip-path?</a> Data on support for the css-clip-path feature across the major browsers from caniuse.com.
</p>

That's how I decided to go with option 3, a good ole' `opacity: 0` coupled with a `position: absolute`. Hidden but still focusable, well-supported across browsers. Just what we're looking for.

## Visual indicators on the labels

Adjacent sibling selectors only work forwards and not backwards, so the label has to come **after** the input element in the source order. Also, the input element must have an `id` attribute to link it to its label via the `for` attribute. The HTML for my spruced up radio buttons looks like this:

<pre class="language-markup"><code>&lt;input id="nric" type="radio" name="id-type" value="nric" checked&gt;
&lt;label for="nric" class="config-select"&gt;
  &lt;span class="emoji" role="img" aria-label="Singapore"&gt;&#x1F1F8;&#x1F1EC;&lt;/span&gt;
  &lt;span&gt;NRIC&lt;/span&gt;
&lt;/label&gt;

&lt;input id="ektp" type="radio" name="id-type" value="ektp"&gt;
&lt;label for="ektp" class="config-select id-config-wrapper"&gt;
  &lt;span class="emoji" role="img" aria-label="Indonesia"&gt;&#x1F1EE;&#x1F1E9;&lt;/span&gt;
  &lt;span&gt;eKTP&lt;/span&gt;
&lt;/label&gt;</code></pre>

And the default radio input was hidden like so:

<pre class="language-css"><code>input[type=radio] {
  opacity: 0;
  position: absolute;
}</code></pre>

To add the glowy blue halo around focused elements, the CSS is as follows:

<pre class="language-css"><code>input[type=radio]:focus + label {
  outline: rgb(77, 97, 171) auto 5px;
}</code></pre>

For this particular instance, I chose to use one of the accent colours on the project for the outline, but you don't necessarily have to use `outline` to indicate focus state. As long as you got the selector right, you can be free to change background colours, border colours, box shadows, gradients, anything you feel like.

## Laying out the toggles

As this was a Cordova-based demo meant to be installed on Android tablets, I had no way of knowing if the device was updated to a browser that supported Grid, so it was probably a good idea to start off with a base layout that used Flexbox.

The structure of the page was meant to look something like this:

<figure>
    <figcaption>There's an extra set of radios that gets toggled</figcaption>
    <img src="{{ site.url }}/assets/images/posts/custom-radios/layout.svg" alt="Page layout sketch" />
</figure>

