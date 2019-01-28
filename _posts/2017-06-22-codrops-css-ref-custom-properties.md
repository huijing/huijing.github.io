---
layout: post
title: "Codrops CSS reference: Custom Properties"
date: Jun 22, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/custom-properties/
external_site: codrops
---
<div class="ct-cssref-description">
  <p>
    Custom properties define a new value type in CSS that allows for the use of variables through the var() function.
  </p>
  <p>
    One of the most commonly cited reasons for using CSS preprocessors like Sass or Less is the ability to use variables in your style sheets, because nobody likes to scour through thousands of lines of CSS just to change a hex code or a margin value. Even with search and replace, odds are we may end up missing one or two declarations. Using variables allows us to make the change in one place and be assured that change will propagate throughout our code.
  </p>
  <p>
    The thing about CSS preprocessors is that they need to be compiled into CSS before the browser can recognize your code. Since they have to be compiled, these "variables" are essentially static, they cannot be updated dynamically.
  </p>
  <p>
    <strong>CSS custom properties allow us to have true dynamic variables, that can be modified at run-time.</strong> This implies that as their values change, the browser will repaint as required. In addition, they are native to CSS, removing the need for compilation. We can also make use of standard CSS behavior like inheritance and cascade, something we could not with preprocessor variables.
  </p>
  <h3 id="section_custom-property-syntax">Custom property value syntax</h3>
  <p>
    With CSS custom properties, developers can assign arbitrary values to a property with a name of their choice. Officially, a custom property is any valid identifier that starts with two dashes, for example <code>--quux</code>. They are case-sensitive, which means <code>--quux</code> and <code>--QUUX</code> do not refer to the same value.
  </p>
  <p>
    This is a simple example of how to define and use a CSS custom property that we define as <code>--primary-color</code>.
  </p>
  <pre><code>:root {
  --primary-color: #0099cc;
}

h1 {
  color: var(--primary-color);
}

a {
  color: var(--primary-color);
}</code></pre>
  <p>
    Changing the value of <code>--primary-color</code> will change the value of the header and links as well.
  </p>
  <p>
    Custom properties can be declared on any element in the document and are resolved as per normal inheritance and cascade rules. You can see that from the example below:
  </p>
  [playground_embed height="300px" width="100%" user="huijing" hash="5t8Q4Zjj" panels="result,html,css" codepanels=""]
  <h3 id="section_var-function-syntax"><code>var()</code> function notation</h3>
  <p>
    The <code>var()</code> function is what makes CSS variables work, as it is how the browser will substitute and insert the assigned value as the value of a property. The syntax looks like this:
  </p>
  <pre><code>var() = var( &lt;custom-property-name&gt; [, &lt;declaration-value&gt; ]? )</code></pre>
  <p>
    It <strong>cannot</strong> be used as a property name, selector or anything other than a property value. The following are examples of invalid uses of the <code>var() function</code>:
  </p>
  <pre><code>/* Variables cannot be used as property names */
.baz {
  --side: padding-left;
  var(--side): 1em;
}

/* Variables cannot be used as part of a property */
.qux {
  --gap: 0.5;
  margin-left: var(--gap)em;
}</code></pre>
  <p>
    As a variable, it can be used in place of any value in any CSS property of an element. The first argument supplied is the name of the custom property to be substituted, and the second argument is the fallback value, used if the custom property specified is invalid.
  </p>
  <pre><code>p {
  margin: var(--margin, 1em 2em);
}</code></pre>
  <p>
    One thing to note is that <code>var()</code> functions are substituted at computed-value time. This means that if the result of the <code>var()</code> function is invalid during substitution, the CSS declaration itself is invalid at computed-value time.
  </p>
  <p>
    Another gotcha was pointed out by <a href="http://lea.verou.me/">Lea Verou</a> in her talk at CSSConf. The <code>url() function</code> is the only function where CSS variables do not work properly due to its odd parsing behavior.
  </p>
  <pre><code>/* This does NOT work */
.element {
  --img: "sad";
  background: url("img/" var(--img) ".jpg") center / cover;
}

/* But this does */
.element {
  --img: url("img/cat.jpg");
  background: var(--img) center / cover;
}</code></pre>
</div>
<div class="ct-cssref-examples">
  <h2>Examples</h2>
  <p>
    Custom properties introduce an element of versatility to CSS that we never had before. For example, we can utilize them to make internationalization easier to maintain by separating out strings from where they are used.
  </p>
  <pre><code>:root,
:root:lang(en) {
  --external-link: "external link";
}

:root:lang(de) {
  --external-link: "Externer Link";
}

a[href^="http"]::after {
  content: " (" var(--external-link) ")";
}</code></pre>
  <p>
    Even though custom properties cannot be used as part of another property, they can be used within <code>calc()</code> functions as well to build up new values in a programmatic way.
  </p>
  <pre><code>:root {
  --spacing: 20; 
}

.cell {
  margin-bottom: calc(var(--spacing + 10px));    
}</code></pre>
  <p>
    Another advantage of using custom properties is that its dynamic nature allows us to have contextual styling. Let's say we have a standard button style as well as slight modifications depending on where the button appears.
  </p>
  <p>
    Without custom properties, a common approach is to utilize the concept of descendant selectors for such contextual styling. But this results in an increased complexity when it comes to managing specificity and leads to maintenance issues as the project grows larger. Perhaps there will come a time when a button in the header needs to look another way.
  </p>
  <pre><code>.o-btn {
  background: #30abd5;
  border: 1px solid #30abd5;
  color: #fff;
}

.c-header .o-btn {
  background: transparent;
  border: 1px solid #237dac;
  color: #237dac;
}</code></pre>
  <p>
    Custom properties negate the specificity issue by not locking in the button component within the header to a specific style, but rather changing the context in which the button component exists. In the below example, the header has a set of values for button styles that its descendants can use, because of the cascade, but these values are very simple to change, if necessary.
  </p>
  <pre><code>.o-btn {
  background: var(--btn-bg, #30abd5);
  border: 1px solid var(--btn-border, #30abd5);
  color: var(--btn-txt, #fff);
}

.c-header {
  --btn-bg: transparent;
  --btn-border: #237dac;
  --btn-txt: #237dac;
}</code></pre>
</div>
<div class="ct-cssref-demo">
  <h2>Live Demo</h2>
  <p>
    The following demo demonstrate the theming example explained in the previous section.
  </p>
  [playground_embed height="500px" width="100%" user="huijing" hash="r8i3rhVH" panels="result,html,css" codepanels=""]
  <p>
    Custom properties allow CSS variables to be used in <a href="https://tympanus.net/codrops/css_reference/media-queries/">media queries</a>, something that was not possible with preprocessor variables. In the following example, you can vary the spacing between elements, as well as utilize variables to adjust the number of columns in your layout. Open the demo in a new window and try resizing the result panel:
  </p>
  [playground_embed height="700px" width="100%" user="huijing" hash="L9HQse2F" panels="result,html,css" codepanels=""]
</div>
<div class="ct-cssref-support" id="browser-support">
  <h2>Browser Support</h2> [caniuse feature="css-variables"]
</div>
<div class="ct-cssref-further-reading">
  <h2>Further Reading</h2>
  <ul>
    <li>
      <a href="https://www.w3.org/TR/css-variables-1/">CSS Custom Properties for Cascading Variables Module Level 1</a>
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables">Using CSS variables</a>
    </li>
    <li>
      <a href="http://kizu.ru/en/fun/conditions-for-css-variables/">Conditions for CSS Variables</a>
    </li>
    <li>
      <a href="https://una.im/local-css-vars/">Locally Scoped CSS Variables: What, How, and Why</a>
    </li>
    <li>
      <a href="https://www.youtube.com/watch?v=2an6-WVPuJU">Lea Verou - CSS Variables: var(--subtitle);</a>
    </li>
  </ul>
</div>
