---
layout: post
title: "Codrops CSS reference: Attribute Selectors"
date: January 05, 2017
tags: [codrops]
external_url: https://tympanus.net/codrops/css_reference/attribute-selectors/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        Attribute selectors let us select elements with certain attributes or attributes of a certain value.
    </p>
    <p>
        HTML elements can have attributes, which are additional values for configuration or modifying their behaviour. There is a long list of HTML attributes and not all of them are applicable to all elements. Attributes that are not relevant to an element simply has no effect on it.
    </p>
    <p>
        Regardless of whether the attribute is correctly applied or not, you can still select it via CSS. But it is really bad practice to have invalid HTML anywhere on your site, simply because different browsers interpret invalid HTML differently. Then you can't blame the browsers for rendering your site weird, they're simply trying to fill the gaps to account for your incorrect code.
    </p>
    <p>
        Attribute values must be identifiers or strings. The specification is rather ambiguous as it states that the case-sensitivity of attribute names and values in selectors depends on the document language. Compounded by the fact that browser behaviour is inconsistent, your safest bet is to ensure that the case used is consistent between your CSS and HTML.
    </p>
    <p>
        Attribute selectors can be matched in 7 ways (as of the CSS3 Specification):
    </p>

    <dl>
        <dt>[&lt;attr&gt;]</dt>
        <dd>
            Targets elements that contain the &lt;attr&gt; attribute, regardless of its value.
            <pre><code>&lt;div data-colour="green"&gt;&lt;/div&gt;
&lt;div data-colour="blue"&gt;&lt;/div&gt;
&lt;div data-colour="yellow"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;=&lt;val&gt;]</dt>
        <dd>
            Targets elements where the &lt;attr&gt;'s value is exactly &lt;val&gt;.
            <pre><code>&lt;div data-colour="green"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour="green"] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;~=&lt;val&gt;]</dt>
        <dd>
            Targets elements with the &lt;attr&gt; attribute whose value is a list of white space separated words, one of which must be &lt;val&gt;.
            &lt;val&gt; itself cannot contain white space, and neither can it be an empty string.
            <pre><code>&lt;div data-colour="green yellow blue"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour~="green"] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;|=&lt;val&gt;]</dt>
        <dd>
            Targets elements with the &lt;attr&gt; attribute whose value is exactly &lt;val&gt; or starts with &lt;val&gt; immediately followed by a "-".
            Primary use-case being for language subcode matching, like "en", "en-US" and "en-UK".
            <pre><code>&lt;div data-colour="green-table"&gt;&lt;/div&gt;
&lt;div data-colour="green-chair"&gt;&lt;/div&gt;
&lt;div data-colour="green-bottle"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour|="green"] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;^=&lt;val&gt;]</dt>
        <dd>
            A substring matching selector. Targets elements with the &lt;attr&gt; attribute whose value starts with &lt;val&gt;.
            &lt;val&gt; cannot be an empty string.
            <pre><code>&lt;div data-colour="greenish-yellow"&gt;&lt;/div&gt;
&lt;div data-colour="greengoblin"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour^="green"] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;=&lt;val&gt;]</dt>
        <dd>
            A substring matching selector. Targets elements with the &lt;attr&gt; attribute whose value ends with &lt;val&gt;.
            &lt;val&gt; cannot be an empty string.
            <pre><code>&lt;div data-colour="yellowish-green"&gt;&lt;/div&gt;
&lt;div data-colour="seagreen"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour$="green"] { /* some properties */ }</code></pre>
        </dd>

        <dt>[&lt;attr&gt;*=&lt;val&gt;]</dt>
        <dd>
            A substring matching selector. Targets elements with the &lt;attr&gt; attribute whose value contains an instance of &lt;val&gt;.
            &lt;val&gt; cannot be an empty string.
            <pre><code>&lt;div data-colour="goblingreenish"&gt;&lt;/div&gt;</code></pre>
            <pre><code>[data-colour*="green"] { /* some properties */ }</code></pre>
        </dd>
    </dl>

    <h3>Combining attribute selectors</h3>

    <p>
        Attribute selectors have the same specificity level as classes and pseudo-classes. For a handy reference, check out <a href="https://specificity.keegan.st/">Specificity Calculator</a> by <a href="https://keegan.st/">Keegan Street</a>. You can combine attribute selectors with other selectors like elements, classes or IDs.
        <pre><code>div[data-colour="green"] {
  /* has a specificity of 11 */
}

.swatch[data-colour="green"] {
  /* has a specificity of 20 */
}

#tile25[data-colour="green"] {
  /* has a specificity of 110 */
}</code></pre>
    </p>

    <p>
        You can also combine multiple attribute selectors to match specific patterns. For example, if you wanted to target only 2x images with alt text containing the word "green", your selector would look like this:
        <pre><code>img[srcset~="2x"][alt*="green"] { /* some properties */ }</code></pre>
    </p>

    <h2>Trivia &amp; Notes</h2>
    <p>
        In the initial draft version of the CSS2 specification back in 1997, there were only 3 ways to match selectors, <code>[&lt;attr&gt;]</code>, <code>[&lt;attr&gt;=&lt;val&gt;]</code> and <code>[&lt;attr&gt;~=&lt;val&gt;]</code>. By the third published working draft, <code>[&lt;attr&gt;|=&lt;val&gt;]</code> was added as well. The Selectors Level 3 specification then added the substring matching selectors of <code>[&lt;attr&gt;^=&lt;val&gt;]</code>, <code>[&lt;attr&gt;=&lt;val&gt;]</code> and <code>[&lt;attr&gt;*=&lt;val&gt;]</code>.
    </p>
    <p>
        Also, because attribute values are read as strings, you don't have to worry about escaping special characters to make them match, unlike classes or IDs. This means we are free to have things like these:
        <pre><code>[data-emotion="&#128526;"] {
  /* some properties */ 
}

[data-emotion="¯\_(&#12484;)_/¯"] {
  /* some properties */
}</code></pre>
    </p>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <h4>Example #1</h4>
    <p>
        Being able to target elements based on attribute values can come in quite handy. Say your design calls for all links pointing to a particular URL be styled a certain way. Rather than applying a special class to each of those links, you can write a rule like this:
        <pre><code>a[href="http://www.pixelthoughts.co/"]::before,
a[href="http://www.pixelthoughts.co/"]::after {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 3.5em;
  height: 3.5em;
  border: 1em solid rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  content: '';
  opacity: 0;
  transition: transform 0.3s, opacity 0.3s;
  transform: translateX(-50%) translateY(-50%) scale(0.2);
}

a[href="http://www.pixelthoughts.co/"]::after {
  content: '\01F31F';
  border-width: 0.25em;
  transform: translateX(-50%) translateY(-50%) scale(0.8);
}

a[href="http://www.pixelthoughts.co/"]:hover::before,
a[href="http://www.pixelthoughts.co/"]:hover::after {
  opacity: 1;
  transform: translateX(-50%) translateY(-50%) scale(1);
}</code></pre>
        The CSS adds some special hover effects to links the Pixel Thoughts website, while all other links remain normal. You can see how this works out in the Live Demo below.
    </p>

    <h4>Example #2</h4>
    <p>
        We can also leverage the attribute for diagnostic purposes. Maybe you inherited an old code base that has some inline-styles in the markup. We can quickly target those elements and outline them in a bright colour to see where they are on the page, and whether it could be the inline-style that is causing an issue.
        <pre><code>[style] {
  outline: 2px solid green; 
}</code></pre>
    </p>
</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <h4>Example #1 Live Demo</h4>
    https://jsfiddle.net/huijing/f0cb748z/
    <h4>Example #2 Live Demo</h4>
    https://jsfiddle.net/huijing/wg7agmr0/
</div>

<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    <p>
        All the above combinators are supported in Chrome, Firefox, Safari, Opera 9.5+, Internet Explorer 9+, and on Android and iOS.
    </p>
[caniuse feature="css-sel3"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
            <a href="http://www.w3.org/TR/css3-selectors/#attribute-selectors">CSS Selectors Level 3</a>
        </li>
    </ul>
</div>
