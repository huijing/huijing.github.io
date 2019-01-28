---
layout: post
title: "Codrops CSS reference: unset"
date: January 23, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/unset/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>unset</code> CSS keyword can act as either <code>initial</code> or <code>inherit</code> depending on what the property's default behaviour is. If the property is an inherited property, it will be treated as <code>inherit</code>, taking the computed value of its parent element. If not, it will be treated as <code>initial</code>, and the property's initial value becomes its specified value.
    </p>

    <p>
        As both the <code>initial</code> and <code>inherit</code> keywords can be used on any CSS property, the <code>unset</code> keyword can be applied to any CSS property, including the CSS shorthand <code>all</code>.
    </p>

    <p>
        This keyword acts as a reset, by erasing all declared values on the element applied earlier up the cascade, restoring them to their original behaviour and inheritance, as if no styles were applied. This applies to user-agent styles as well. For example, applying <code>all: unset</code> to the <code>body</code> element will remove the default 8px margin set by almost all user-agent stylesheets.
    </p>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>

    <p>
        Some commonly used CSS properties that are inherited properties include <code>font-family</code> and <code>color</code>. The <code>background-color</code> property, on the other hand, is not inherited. Say we have the following HTML, with some simple styles applied to the elements.
    </p>

    <pre>&lt;body&gt;
  &lt;div&gt;Hello, world!&lt;/div&gt;
  &lt;div class="unset"&gt;Hello, monkey!&lt;/div&gt;
  &lt;div&gt;Hello, watermelon!&lt;/div&gt;
&lt;/body&gt;</pre>

    <pre>body {
  background-color: #F5F5F5;
  color: #555;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
}

div {
  background-color: #C0C0C0;
  color: #006400;
  font-family: Georgia, Times, Times New Roman, serif;
}</pre>

    <p>
        If we add the property <code>all: unset</code> to the element with the class "unset", then check its computed CSS property values (from the browser's Developer Tools), we will see that the inherited properties of <code>color</code> and <code>font-family</code> inherit from the <code>body</code> element, while the <code>background-color</code> gets set back to the initial value of <code>transparent</code>.
    </p>
</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
https://jsfiddle.net/huijing/8czht67o/
</div>

<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-unset-value"]

    <h3>Notes</h3>
    <p>
        The <code>unset</code> value is supported in Microsoft Edge.
    </p>
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
            <a href="https://www.w3.org/TR/css-cascade-3/#defaulting">CSS Cascading and Inheritance Level 3</a>
        </li>
        <li>
            <a href="https://www.w3.org/TR/css-values-3/#common-keywords">CSS Values and Units Module Level 3</a>
        </li>
    </ul>
</div>
