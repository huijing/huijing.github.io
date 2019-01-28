---
layout: post
title: "Codrops CSS reference: backdrop-filter"
date: May 03, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/backdrop-filter/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>backdrop-filter</code> property allows us to apply filter effects to the content behind an element using CSS. 
    </p>

    <p>
        This property is an extension to the Filter Effects Module Level 1 that defines the <a href="https://tympanus.net/codrops/css_reference/filter/"><code>filter</code> property</a>. It uses the same syntax as the <code>filter</code> property except that the effects are applied to the backdrop of the element instead. Such effects are commonly seen in the interfaces for devices running iOS7 and above, as well as OS X Yosemite and above. Without this property, this effect could only be achieved by editing the background image itself, then applying clipping and positioning techniques to achieve the desired effect.
    </p>

    <p>
        For the property to have any visible effect, there needs to be 2 elements stacked on top of each other along the z-axis, from either nested elements or absolute positioning. And the background of the element which <code>backdrop-filter</code> is applied needs to be semi-transparent. <code>backdrop-filter</code> works by making the browser engine target the content behind the styled element, and not the background of the element itself. The filter effect is then applied to that content, and the backdrop is composited with other elements on the page in the final rendering.
    </p>

    <p>
        Applying <code>backdrop-filter</code> to an element also creates a new stacking context, just like when <code>opacity</code> is applied.
    </p>

    <p>
        Note that use of this property does have an adverse effect on performance, especially when applied to a large number of elements or a large area of the page, and should be used with careful consideration.
    </p>

</div>

<div class="ct-cssref-info" id="official-syntax">
    <h2>Official Syntax</h2>
    <ul>
        <li>
           <strong>Syntax: </strong> backdrop-filter: none | &lt;filter-function-list&gt;
        </li>
        <li>
            <strong>Initial: </strong> none
        </li>
        <li>
           <strong>Applies To: </strong> All elements. In SVG, it applies to container elements without the defs element and all graphics elements
        </li>
        <li>
           <strong>Animatable: </strong> Yes
        </li>
    </ul>
</div>

<div class="ct-cssref-values">
    <h2>Values</h2>
    <dl>
        <dt>none</dt>
        <dd>
            <strong>This is the initial value.</strong> No filter effect is applied to the backdrop.
        </dd>
    </dl>
    <dl>
        <dt>&lt;filter-function-list&gt;</dt>
        <dd>
            A space-separated list of filter functions, applied in the order in which they are declared. The following is the list of filter functions available, which are the same as those for the <a href="https://tympanus.net/codrops/css_reference/filter/"><code>filter</code> property</a>.
            <ul>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_blur">blur()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_brightness">brightness()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_contrast">contrast()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_grayscale">grayscale()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_hue-rotate">hue-rotate()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_invert">invert()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_opacity">opacity()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_saturate">saturate()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_sepia">sepia()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_drop-shadow">drop-shadow()</a></li>
                <li><a href="https://tympanus.net/codrops/css_reference/filter#section_url">url()</a></li>
            </ul>
        </dd>
    </dl>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>
        The following is a simple example of using the <code>backdrop-filter</code> property to create a frosted glass effect. The markup is an image and a <code>div</code> containing the text for its caption.
    </p>
    <pre><code>&lt;div class="container"&gt;
  &lt;img src="https://ichef.bbci.co.uk/images/ic/976x549_b/p0121stm.jpg"&gt;
  &lt;div class="caption"&gt;
    &lt;h3&gt;Morgana&lt;/h3&gt;
    &lt;p&gt;played by Katie McGrath&lt;/p&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>

    <p>The caption is absolutely positioned over the bottom of the image and the <code>backdrop-filter</code> applied to it.</p>
    <pre><code>.caption {
  padding: 0.5em 1em;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(4px);
  background-color: rgba(255, 255, 255, 0.5);
}</code></pre>
    
    <p>The final effect should look like this: <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/background-filter_eg.jpg" alt="background-filter_eg" class="alignnone size-medium wp-image-30876" /></p>

</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>
        This property is currently only supported (and thus viewable) in Safari 9 onwards. It is possible to enable this CSS property on Chrome and Opera by enabling the ”Experimental Web Platform Features” flag.
    </p>

    <p>
        The following demo is an example of how we can adjust the text colour depending on the background colour, i.e. have light text on a dark background and vice versa, by applying the <code>inverse()</code> filter to the text, then re-inverting the background behind the filter with <code>backdrop-filter</code>.
        https://jsfiddle.net/huijing/51wvdege/
    </p>

    <p>
        This demo is an example of how we can create a night-mode effect toggle using the <code>inverse()</code> filter.
        https://jsfiddle.net/huijing/kz0jhkw6/
    </p>
    
    <p>
        We can also make use of the <code>blur()</code> filter to create a graphic content toggle.
        https://jsfiddle.net/huijing/u5drtsu2/
    </p>
</div>

<div class="ct-cssref-support" id="browser-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-backdrop-filter"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://drafts.fxtf.org/filters-2/">Filter Effects Module Level 2 Editor's Draft</a> 
        </li>
        <li>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter">MDN backdrop-filter</a> 
        </li>
        <li>
           <a href="https://webkit.org/blog/3632/introducing-backdrop-filters/">Introducing Backdrop Filters</a>
        </li>
    </ul>
</div>
