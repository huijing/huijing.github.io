---
layout: post
title: "Codrops CSS reference: text-orientation"
date: May 19, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/text-orientation/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>text-orientation</code> property specifies the orientation of characters within a line of content. It only applies to vertical typographic modes.
    </p>

    <p>
        East Asian languages like Chinese or Japanese can be written both horizontally, flowing from top-to-bottom or vertically, flowing from right-to-left. Traditional Mongolian script is written vertically, flowing from left-to-right. Even though the <strong>block flow direction</strong> is vertical, each individual glyph remains upright by default.
    </p>

     <p>
        Often, web pages in East Asian languages will have Latin-based characters and numerals mixed in the content as well. Every Unicode character by default has an orientation based on the characteristics of their respective writing systems, and pages with characters from multiple languages will still display in the correct orientations.
    </p>

    <p>
        Latin-based languages, when displayed vertically with the <code>writing-mode</code> property have their glyphs displayed sideways, allowing the inline text to be read normally, albeit with the page turned 90 degrees clockwise on its side. We can, however, make each character display upright with the <code>text-orientation</code> property.
    </p>


</div>

<div class="ct-cssref-info" id="official-syntax">
    <h2>Official Syntax</h2>
    <ul>
        <li>
           <strong>Syntax: </strong>
           <pre>text-orientation: mixed | upright | sideways</pre>
        </li>
        <li>
            <strong>Initial: </strong>  mixed
        </li>
        <li>
           <strong>Applies To: </strong> All elements except table row groups, rows, column groups, and columns
        </li>
        <li>
           <strong>Animatable: </strong> No
        </li>
    </ul>
</div>

<div class="ct-cssref-values">
    <h2>Values</h2>
    <dl>
        <dt>mixed</dt>
        <dd>
            <strong>This is the initial value.</strong> Scripts that are horizontal-only will have their characters typeset sideways (rotated 90° clockwise) while vertical scripts will be typeset upright.
            <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/mixed-300x193.png" alt="mixed" width="300" height="193" class="alignnone size-medium wp-image-31079" />
        </dd>
    </dl>
    <dl>
        <dt>upright</dt>
        <dd>
            All text will be typeset upright, with each character in their standard horizontal orientation.
            <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/upright-300x202.png" alt="upright" width="300" height="202" class="alignnone size-medium wp-image-31081" />
        </dd>
    </dl>
    <dl>
        <dt>sideways</dt>
        <dd>
            All text will be typeset sideways (rotated 90° clockwise), as if in a horizontal layout. 
            <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/sideways-300x205.png" alt="sideways" width="300" height="205" class="alignnone size-medium wp-image-31080" />
        </dd>
    </dl>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>
        The <code>text-orientation</code> property only has an effect on content that has a vertical writing mode. By default, the browser already displays each character in the orientation that is native to their respective writing systems, but there may be instances when we want to change that orientation. For example, making Latin-based characters or numerals upright when lines of content are flowing sideways. 
    </p>

    <p>Take this example markup:</p>

    <pre><code>&lt;p&gt;Painter and theorist Barnett Newman was one of the most intellectual artists of the New York School. In &lt;span&gt;1933&lt;/span&gt;, he ran for mayor of his city on a write-in ticket with a cultural platform, and he maintained a keen awareness of such modern horrors as Nazism and the atomic bomb.&lt;/p&gt;</code></pre>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/initial-300x286.png" alt="initial" width="300" height="286" class="alignnone size-medium wp-image-31088" />

    <p>By default, the numerals 1933 will display sideways, just like the rest of the characters when writing mode is set to vertical, but we can make them upright by changing the <code>text-orientation</code> value of the span.</p>

    <pre><code>p {
 writing-mode: vertical-rl;
}

span {
  text-orientation: upright;
}</code></pre>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/modified-300x289.png" alt="modified" width="300" height="289" class="alignnone size-medium wp-image-31089" />   

</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>The following example uses a font, <a href="https://djr.com/bungee/">Bungee</a>, specially designed for vertical text. There are not many Latin-based fonts that are optimised for vertical display though, so it may be necessary to tweak the spacing between characters with the <code>letter-spacing</code> property. Given such layouts would mostly be for short lines of display text, the effort required to make those adjustments should not be too insurmountable.</p>
    https://jsfiddle.net/huijing/gz8y62jc/
</div>

<div class="ct-cssref-support" id="browser-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-text-orientation"]
    <p>The <code>mixed</code> and <code>upright</code> values have been supported since Chrome 48 and Firefox 41. Support for the <code>sideways</code> value is only supported in Firefox 44.</p>
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://www.w3.org/TR/css-writing-modes-3/#intro-text-layout">CSS Writing Modes Level 3</a> 
        </li>
        <li>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/text-orientation">MDN text-orientation</a> 
        </li>
    </ul>
</div>
