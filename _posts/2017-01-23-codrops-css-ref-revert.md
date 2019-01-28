---
layout: post
title: "Codrops CSS reference: revert"
date: January 23, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/revert/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>revert</code> CSS keyword rolls back the cascade, meaning the property behaves as if there were no styles in the current style origin.
    </p>

    <p>
        This is different from the <code>initial</code> keyword. For this to make sense, we need to fully understand the "Cascading" in "Cascading Style Sheets". A HTML element can have multiple declared values for a given property. Most of us are probably familiar with specificity when it comes to determining which declaration wins out. However, if we refer back to the <a href="https://drafts.csswg.org/css-cascade/#cascading">W3C specification on Cascading</a>, we'll discover that before specificity comes into play, the declaration's origin comes first.
    </p>

    <p>
        In general, there are 3 source origins for CSS declarations, in descending order of priority (first one takes precedence):
        <ul>
            <li>the author stylesheet, which is written by the developer of the website</li>
            <li>the user stylesheet, which is written by the user of the browser used to view the website</li>
            <li>the user-agent stylesheet, which is written by the browser vendor</li>
        </ul>
        User stylesheets may not be all that common, but it is possible to get a browser to use a custom stylesheet you defined on your local machine. This allows you to modify the display of a website, particularly useful for people with low vision disabilities who'd like to have different font sizes, contrast and so on to read comfortably. Every browser does this differently, and you can refer to <a href="http://web.archive.org/web/20160310225720/http://www.commercetuned.co.uk/accessibility/user-style-sheets.php">this article on User style sheets</a> for instructions for most of the major browsers.
    </p>

    <p>
        So when we use the <code>revert</code> keyword in our author stylesheet, the property will take on the declared value from the user stylesheet. If none exist, then it will take on the declared value from the user-agent stylesheet.
    </p>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>Given we have this simple list of links and some basic styling:</p>
    <pre>&lt;ul&gt;
  &lt;li&gt;&lt;a href="http://www.typeisbeautiful.com/"&gt;Type is Beautiful&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a class="revert" href="http://www.typeroom.eu/"&gt;typeroom&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="https://blog.29lt.com/"&gt;29Letters Blog&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</pre>

    <pre>a {
  color: orange;
}

.revert {
  color: revert;
}</pre>

    <p>
        The link with the "revert" class will render in the default browser blue that is defined by the user-agent stylesheet. If we have an user stylesheet in use that contains the following rule:

    <pre>a {
  color: green;
}</pre>

        Now the link with the "revert" class will render in green instead.
    </p>
</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>
        This demo will only work in Safari 10 onwards, and iOS Safari 9.3 onwards as of January 2017.
    </p>
https://jsfiddle.net/huijing/kr3Lbk0u/
</div>

<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-revert-value"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
            <a href="https://www.w3.org/TR/css-cascade-4/#defaulting">CSS Cascading and Inheritance Level 4</a>
        </li>
        <li>
            <a href="https://bitsofco.de/the-effect-of-importance-and-origin-on-specificity/">The Effect of Importance and Origin on CSS Specificity</a> by Ire Aderinokun
        </li>
        
    </ul>
</div>
