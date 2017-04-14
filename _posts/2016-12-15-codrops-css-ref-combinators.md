---
layout: post
title: "Codrops CSS reference: Combinators"
date: December 15, 2016
tags: [codrops]
external_url: https://tympanus.net/codrops/css_reference/combinators/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>Selectors can contain multiple simple selectors, but between each simple selector, there has to be a combinator. There are several combinators we can use and each describes the relationship between the selectors.</p>
    
    <h3>Descendant combinator</h3>
    <p>
        A descendant combinator targets any element that is nested within another element. The nesting can be as many levels deep as possible, i.e. child, grandchild and beyond. Descendant combinators will match every instance of an element under its ancestor, and can be chained to increase specificity. Each selector in the chain is separated by a single whitespace. 
    </p>
    <p>
        Say you have some HTML that looks like this:
        <pre><code>&lt;article&gt;
  &lt;h2&gt;Lollipop muffin sweet cake&lt;/h2&gt;
  &lt;p&gt;Chocolate cookie tootsie roll tiramisu tart lemon drops chocolate cake cheesecake biscuit.&lt;/p&gt;

  &lt;aside&gt;
    &lt;h2&gt;Tiramisu sweet roll ice cream&lt;/h2&gt;
    &lt;p&gt;Cake jelly-o jelly-o sweet roll powder muffin marshmallow dragée.&lt;/p&gt;
  &lt;/aside&gt;

  &lt;p&gt;Cake chocolate cake brownie brownie marshmallow biscuit. Chocolate bar chocolate cake sugar plum.&lt;/p&gt;
&lt;/article&gt;</code></pre>
        Descendant selectors will match any instance of the selector regardless of where it is nested within the document tree. If we apply styles to <code>article h2</code>, then both headings, including the one in the <code>aside</code> element will match.

        <svg width="40%" viewBox="0 0 788 560"><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M244 0h300v96H244z"/><text transform="translate(258 76)" font-family="Courier" font-size="64">article</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M0 232h112v96H0z"/><text transform="translate(17.094 295)" font-family="Courier" font-size="64">h2</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M213 232h77v96h-77z"/><text transform="translate(232.297 295)" font-family="Courier" font-size="64">p</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M356 464h112v96H356z"/><text transform="translate(373.094 527)" font-family="Courier" font-size="64">h2</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M569 464h77v96h-77z"/><text transform="translate(588.297 527)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M711 232h77v96h-77z"/><text transform="translate(730.297 295)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M391 232h219v96H391z"/><text transform="translate(404.484 295)" font-family="Courier" font-size="64">aside</text><path fill="none" stroke="#979797" stroke-width="6" d="M394 96v68m-338 0v68m196-68v68m249-68v68m249-68v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M56 164h694" stroke-linecap="square"/><path fill="none" stroke="#979797" stroke-width="6" d="M501 329v68m-89 0v68m196-68v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M412 396h196" stroke-linecap="square"/></svg>

        Browsers read selectors from right to left, and we don't want to over-qualify selectors. It's not necessary to write selectors like <code>html body article aside h2</code>, because it's safe to assume the <code>article</code> element will be in the <code>body</code> which will definitely be in the <code>html</code>. Also, if you have to chain more than 2 selectors, you might want to consider just applying a class instead.
    </p>

    <h3>Child combinators (>)</h3>
    <p>
        A child combinator targets the direct descendant of a parent element and uses the greater-than (>) sign as the separator between elements. The parent element must always be on the left of the ">". Only immediate child elements in the document tree will be matched.
    </p>
    <p>
        With reference to the same HTML used in the descendant selector example, say we have the following styles:
        <pre><code>article > h2 {
  background-image: linear-gradient(to right, #4776E6, #8E54E9);
  color: transparent;
  -webkit-background-clip: text;
}</code></pre>
        Only the first <code>h2</code> would be targeted because there is an <code>aside</code> element between the <code>article</code> and the second <code>h2</code> element in the document tree.

        <svg width="40%" viewBox="0 0 788 560"><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M244 0h300v96H244z"/><text transform="translate(258 76)" font-family="Courier" font-size="64">article</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M0 232h112v96H0z"/><text transform="translate(17.094 295)" font-family="Courier" font-size="64">h2</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M213 232h77v96h-77z"/><text transform="translate(232.297 295)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M356 464h112v96H356z"/><text transform="translate(373.094 527)" font-family="Courier" font-size="64">h2</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M569 464h77v96h-77z"/><text transform="translate(588.297 527)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M711 232h77v96h-77z"/><text transform="translate(730.297 295)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M391 232h219v96H391z"/><text transform="translate(404.484 295)" font-family="Courier" font-size="64">aside</text><path fill="none" stroke="#979797" stroke-width="6" d="M394 96v68m-338 0v68m196-68v68m249-68v68m249-68v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M56 164h694" stroke-linecap="square"/><path fill="none" stroke="#979797" stroke-width="6" d="M501 329v68m-89 0v68m196-68v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M412 396h196" stroke-linecap="square"/></svg>

    <h3>Sibling combinators</h3>
    <p>
        There are 2 types of sibling combinators, the general sibling combinator and the adjacent sibling combinator. Both handle elements that exist on the same level.
    </p>

    <h4>General sibling combinator (~)</h4>
    <p>
        A general sibling combinator targets elements that appear anywhere after the simple selector within the same parent, and uses the tilde (~) as the separator between elements.
    </p>
    <p>
        Say we had a set of radio buttons like so:
        <pre><code>&lt;label&gt;
  &lt;input type="radio" name="fruit" value="apple"&gt;
  &lt;span&gt;Option 1&lt;/span&gt;
  &lt;img src="img/apple.jpg" alt="A red apple"&gt;
  &lt;span&gt;Apple&lt;/span&gt;
&lt;/label&gt;

&lt;label&gt;
  &lt;input type="radio" name="fruit" value="banana"&gt;
  &lt;span&gt;Option 2&lt;/span&gt;
  &lt;img src="img/banana.jpg" alt="A yellow banana"&gt;
  &lt;span&gt;Banana&lt;/span&gt;
&lt;/label&gt;

&lt;label&gt;
  &lt;input type="radio" name="fruit" value="cherry"&gt;
  &lt;span&gt;Option 3&lt;/span&gt;
  &lt;img src="img/cherry.jpg" alt="Pair of red cherries"&gt;
  &lt;span&gt;Cherry&lt;/span&gt;
&lt;/label&gt;</code></pre>

        The general sibling selector can be used to style the text in the label after the radio button when an option is checked.

        <pre><code>input:checked ~ span {
  color: #860038;
}</code></pre>

        <svg width="50%" viewBox="0 0 1093 331"><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M397 0h300v96H397z"/><text transform="translate(448 76)" font-family="Courier" font-size="64">label</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M0 234h254v96H0z"/><text transform="translate(31.484 297)" font-family="Courier" font-size="64">input</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M628 235h168v96H628z"/><text transform="translate(654.89 298)" font-family="Courier" font-size="64">img</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M874 235h219v96H874z"/><text transform="translate(906.688 298)" font-family="Courier" font-size="64">span</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M332 233h219v96H332z"/><text transform="translate(364.688 296)" font-family="Courier" font-size="64">span</text><path fill="none" stroke="#979797" stroke-width="6" d="M547 96v68m-420-1v68m315-64v68m273-68v68m269-68v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M127 164h857" stroke-linecap="square"/></svg>

    </p>

    <h4>Adjacent sibling combinator (+)</h4>
    <p>
        An adjacent sibling combinator targets the element that appears immediately after the simple selector within the same parent, and uses the plus sign (+) as the separator between elements.
    </p>

    <p>
        There are a couple use cases where the adjacent sibling selector comes in really handy. For example, it's quite common to see feature articles with the first paragraph styled differently from the rest of the article. Assuming the title is marked up as a <code>h1</code> element, the CSS will look like this:

        <pre><code>h1 + p {
  font-size: 125%;
  font-style: italic;
}</code></pre>
        
        <svg width="50%" viewBox="0 0 788 328"><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M244 0h300v96H244z"/><text transform="translate(258 76)" font-family="Courier" font-size="64">article</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M0 232h112v96H0z"/><text transform="translate(17.094 295)" font-family="Courier" font-size="64">h2</text><path fill="#B8E986" stroke="#979797" stroke-width="2" d="M260 232h77v96h-77z"/><text transform="translate(279.297 295)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M711 232h77v96h-77z"/><text transform="translate(730.297 295)" font-family="Courier" font-size="64">p</text><path fill="#E7E7E7" stroke="#979797" stroke-width="2" d="M486 232h77v96h-77z"/><text transform="translate(505.297 295)" font-family="Courier" font-size="64">p</text><path fill="none" stroke="#979797" stroke-width="6" d="M394 96v68m-338 0v68m246-67v68m221-68v68m227-69v68"/><path fill="none" stroke="#979797" stroke-width="6" d="M56 164h694" stroke-linecap="square"/></svg>

    </p>

    <h2>Trivia &amp; Notes</h2>
    <p>
        Descendant selectors were originally called <a href="https://www.w3.org/TR/REC-CSS1-961217#contextual-selectors">contextual selectors</a> in the original W3C recommendation for the CSS level 1 back in 17 December 1996. The first working draft of the CSS2 specification in 4 November 1997 retained the term contextual selectors and introduced the concept of parent-child relationships, as well as sibling relationships between selectors. Sibling selectors were originally called sequential selectors.
    </p>
    <p>
        That working draft specified the use of the tilde (~) for parent-child selectors and a rather complex syntax for sequential selectors. The equivalent to a general sibling selector today was a forward slash preceding the first selector and immediately after the second selector, which looked like this:
        <pre><code>/H1 H2/ { margin-top: -5mm }</code></pre>

        The equivalent to an adjacent sibling selector today applied if there was a tilde between the 2 selectors, and looked like this:
        <pre><code>/H1~P/ { font-size: 125% }</code></pre>

        What we know as the first-child pseudo-class was first proposed under sequential selectors as well. The syntax is unrecognisable now but it involved having a double-forward slash before the first selector, looking like this:
        <pre><code>//P/ EM { font-weight : bold }</code></pre>

        By the time the next working draft was released in 28 Jan 1998, the terms had been updated to become descendant selectors, child selectors and adjacent selectors, with the general sibling selector deferred to Level 3 of the CSS specification instead.
    </p>
</div>
<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>
        Say we have this HTML:

        <pre><code>&lt;h1&gt;Chinese language on the web&lt;/h1&gt;
&lt;p&gt;The most common text layout on the web is horizontal top-to-bottom, as is the case for Latin-based scripts. However, East Asian scripts like Chinese and Japanese are traditionally laid out vertically, from right-to-left.&lt;/p&gt;
&lt;p&gt;This article will explore the history of the Chinese writing system and how to use CSS to lay out text for vertical scripts.&lt;/p&gt;
&lt;h2&gt;Table of contents&lt;/h2&gt;
&lt;ul&gt;
  &lt;li&gt;&lt;a href="#some-background-and-history"&gt;Some background and history&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#chinese-fonts-offline-and-online"&gt;Chinese fonts, offline and online&lt;/a&gt;&lt;/li&gt;
  &lt;li&gt;&lt;a href="#laying-out-chinese-fonts"&gt;Laying out Chinese fonts on the web&lt;/a&gt;
    &lt;ul&gt;
      &lt;li&gt;&lt;a href="#basic-terminology"&gt;Basic terminology&lt;/a&gt;
      &lt;/li&gt;
      &lt;li&gt;&lt;a href="#writing-mode-property"&gt;writing-mode property&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#text-orientation-property"&gt;text-orientation property&lt;/a&gt;&lt;/li&gt;
      &lt;li&gt;&lt;a href="#text-combine-upright-property"&gt;text-combine-upright property&lt;/a&gt;&lt;/li&gt;
    &lt;/ul&gt;
  &lt;/li&gt;
  &lt;li&gt;&lt;a href="#wrapping-up"&gt;Wrapping up&lt;/a&gt;&lt;/li&gt;
&lt;/ul&gt;</code></pre>

        We can make the opening paragraph italicised and slightly larger than the rest of the text in the article, with the use of an adjacent sibling selector as follows:

        <pre><code>h1 + p {
  font-size: 125%;
  font-style: italic;
}</code></pre>

        Using a combination of both a general sibling selector and a child selector, allows us to target just the top level list items. This rule would not apply to the nested list items because their parent <code>ul</code> does not have a preceding <code>h2</code> sibling.

        <pre><code>h2 ~ ul > li {
  margin-bottom: 1em;
}</code></pre>


        If we want only the nested list items to be italicised and have a serif font, the following rule will do the job, because only the inner <code>ul</code> would have another <code>ul</code> as its parent.

        <pre><code>ul ul {
  font-family: serif;
  font-style: italic;
}</code></pre>

        You can see the code in action in the live demo below.
    </p>
</div>
<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    https://jsfiddle.net/huijing/tea3kyfp/
</div>
<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    <p>
        All the above combinators are supported in Chrome, Firefox, Safari, Opera 9.5+, Internet Explorer 9+, and on Android and iOS.
    </p>
    <iframe src="http://caniuse.com/css-sel3/embed/"></iframe>
</div>
<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
            <a href="https://www.w3.org/TR/css3-selectors/#combinators">CSS Selectors Level 3</a>
        </li>
        <li>
            <a href="https://drafts.csswg.org/selectors-4/#combinators">CSS Selectors Level 4</a>
        </li>
    </ul>
</div>
