---
layout: post
title: "Codrops CSS reference: Media Queries"
date: October 27, 2016
tags: [codrops]
external_url: https://tympanus.net/codrops/css_reference/media-queries/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        A <code>media query</code> limits the scope of CSS styles to only apply when certain media conditions are met.
    </p>
    <p>
        Think of them as if-else statements for the browser to interpret. Media queries are logical expressions that evaluate to true or false. A media query consists of an optional media type, zero or more media features and logical keywords that allow the construction of more complex expressions. The syntax is as follows:
    </p>
    <pre class="brush:css">@media [not | only] &lt;media-type&gt; [and] (&lt;media-condition&gt;);</pre>

    <h3>Media types</h3>
    <p>
        A media type is a broad category of user-agent devices which can display HTML documents. The list of media types has been revised in the <a href="https://www.w3.org/TR/mediaqueries-4/#media-types">Media Queries Level 4 specification</a>. The deprecated media types are recognised as valid, but will not match any devices, i.e. your media query will still apply but across all devices as if no media type had been specified.
    </p>
    <dl>
        <dt>all</dt>
        <dd>
            Matches all devices.
        </dd>

        <dt>print</dt>
        <dd>
            Matches printers, and devices intended to reproduce a printed display, such as a web browser showing a document in “Print Preview”.
        </dd>

        <dt>screen</dt>
        <dd>
            Matches all devices that aren’t matched by print or speech.
        </dd>

        <dt>speech</dt>
        <dd>
            Matches screenreaders and similar devices that “read out” a page.
        </dd>
    </dl>

    <h3>Media features</h3>
    <p>
        Media features are a more granular condition that media types, in that it targets a single, specific feature of the device in question. The syntax of a media feature is the same as a CSS property, consisting of a feature name, a colon and the value to test for.
    </p>
    <p>
        The list of media features has also changed from Media Queries Level 3 to Media Queries Level 4. The deprecated features have been kept in the specification for backward compatibility but it has been stressed that they must not be used in new stylesheets. User agents will still continue to support them as specified.
    </p>
    <ul>
        <li>
            <strong>Screen/Device dimensions</strong>
            <ul>
                <li><code>width</code></li>
                <li><code>height</code></li>
                <li><code>aspect-ratio</code></li>
                <li><code>orientation</code></li>
            </ul>
        </li>
        <li>
            <strong>Display quality</strong>
            <ul>
                <li><code>resolution</code></li>
                <li><code>scan</code></li>
                <li><code>grid</code></li>
                <li><code>update</code></li>
                <li><code>overflow-block</code></li>
                <li><code>overflow-inline</code></li>
            </ul>
        </li>
        <li>
            <strong>Color</strong>
            <ul>
                <li><code>color</code></li>
                <li><code>color-index</code></li>
                <li><code>monochrome</code></li>
                <li><code>color-gamut</code></li>
            </ul>
        </li>
        <li>
            <strong>Interaction</strong>
            <ul>
                <li><code>pointer</code></li>
                <li><code>hover</code></li>
                <li><code>any-pointer</code> and <code>any-hover</code></li>
            </ul>
        </li>
        <li>
            <strong>Scripting</strong>
            <ul>
                <li><code>scripting</code></li>
            </ul>
        </li>
    </ul>

    <h2>Using media queries for responsive design</h2>
    <p>
        The idea behind responsive design is to deliver a great experience across a variety of devices using the same code base. This means the code we write should be device-agnostic. Executing responsive design well is no small task, and requires us to embrace the fluidity of the Web rather than struggle to control it. And media queries are an integral part of the implementation of a responsive design.
    </p>
    <p>
        The extensible nature of media queries allows for all kinds of complex media expressions but the most commonly used ones in the context of responsive design are those that target <code>width</code> and to a smaller extent, <code>height</code>.
    </p>
    <p>
        Broadly speaking, there are 2 ways you can structure such media queries. We tend to refer to <code>min-width</code>-based media queries as mobile-first. This means the base styles target the smallest viewport, and additional styles are applied as the viewport gets larger. Conversely, <code>max-width</code>-based media queries take the largest viewport size as the default, and apply additional styles to cater for smaller viewport sizes.
    </p>

    <h4>Simple min-width example</h4>
    <p>
        Say we want a 2 column layout with a main content section taking up 3/4 of the page, and a sidebar on the right taking up 1/4 of the page. Then, on a device with a narrow viewport, like a mobile phone, we want this same web page to render the content of the sidebar below the main content instead.
    </p>
    https://jsfiddle.net/huijing/45bfp7fr/
    <p>
        In the above example, the query used is:
    </p>
    <pre class="brush:css">@media (min-width: 35em) {
  /* Some CSS properties */
}</pre>
    <p>
        In plain English, this tells the browser, when the screen is <strong>greater or equal to</strong> 35em wide, apply the styles contained within this block. While using min-width media queries, our base styles (i.e. default styles when the media condition is not in effect) will kick in at the narrow screen sizes.
    </p>
    <p>
        For this particular scenario, we don't even have to write any base styles because the main element and the aside element are block elements, and browsers will render the main element on top, and the aside element below it by default. This is one of the reasons why some developers advocate using min-width media queries for responsive design. Often times, you'll be writing less code.
    </p>
    <h4>Simple max-width example</h4>
    <p>
        Let's code the same scenario using max-width queries instead. The media query used in this case will be:
    </p>
    <pre class="brush:css">@media (max-width: 35em) {
  /* Some CSS properties */
}</pre>
    <p>
        Conversely, the plain English translation of this rule becomes, when the screen is <strong>less than or equal to</strong> 35em wide, apply the styles contained within this block. This implies that your base styles will take effect at wider screen sizes.
    </p>
    <p>
        As such, you will need to write the base styles that render the <code>main</code> element on the left and the <code>aside</code> element on the right. Then undo those styles in the media query to cater for narrow screen sizes. Hence for this particular scenario, it would make more sense to use the `min-width` media query.
    </p>
    https://jsfiddle.net/huijing/s1z8xo9u/
    <p>
        There will be other scenarios where a `max-width` media query would make sense, like for tables. The default display for a table works well on wide screens, but on smaller screens, we may want to apply a `display: block;` to the table rows and table cells so the content reads better on a narrow screen.
    </p>
    https://jsfiddle.net/huijing/3w828eck/
    <p>
        There is no hard and fast rule, but the guiding principle would be to make your choice based on element defaults. If the default works well on a narrow screen, then use `min-width` media queries to add styles on wider screens. If the default works well on a wide screen, then use `max-width` media queries to add styles on narrower screens.
    </p>

    <h4>Use relative units for media queries</h4>
    <p>
        The width defined in your media queries are known as breakpoints. These are points where you choose for your content to adjust in a manner that best suits the amount of space available. Although it was a common approach to target widths based on popular devices, nowadays, with the sheer volume of screen sizes out in the wild, this is no longer a viable solution.
    </p>
    <p>
        Ideally, we should let the content determine what the breakpoints will be. An advantage of designing for the smallest screen size first forces us to consciously identify what the most important information is and how it can be presented to your users in the most clear and accessible manner.
    </p>
    <p>
        Under normal circumstances, your choice of CSS unit for height or width media queries don't make much of a difference. However, we cannot control when our users modify the browsing environment by zooming or changing the font settings. If they do so, then we start to encounter some unexpected behaviours.
    </p>
    <p>
        Given we let the content dictate our breakpoint values, if users changed their browser's `font-size` settings, we would want the media query to adapt to that change accordingly. However, if we used absolute units like pixels, the media query would remain fixed at a value that may not suit the content any more.
    </p>

    <h4>Avoiding the double breakpoint issue</h4>
    <p>
        An issue arises when we use both min-width and max-width queries due to the logic of how these queries are evaluated. The comparison operators are inclusive, this means the condition becomes true once the width of the viewport matches the value of the breakpoint declared. Let's say we have both a min-width query and max-width query that uses 35em as the breakpoint. Each of the major browsers use a different rendering engine, hence at 35em, your site may not behave as expected, and the severity of impact will depend on the kind of styles within each media query.
    </p>
    <p>
        For this demo, the expected behaviour is for the main section to have a green background in the 2 column configuration and have a red background in the 1 column configuration. At `35em`, both the `min-width` query that sets flex-wrap to nowrap and the `max-width` query that sets `background-color` to `red` and the `flex-basis` to `100%` are active at the same time, thus 'breaking' our demo.
    </p>
    https://jsfiddle.net/huijing/jfoz4xc5/
    <p>
        The key takeaway from this demo is to ensure that when using adjacent `min-width` and `max-width` queries, do not use the same width for both. A common approach to is have a separation of 0.01em to circumvent this overlap.
    </p>

    <h3>Example use cases for media queries</h3>
    <p>
        The most practical media queries are those that target width, and to a smaller extent, height. The remaining media features outlined above are generally not well-supported as of time of writing.
    </p>

    <h4>Numeric stepper</h4>
    <p>
        Media queries allow us to use the same set of HTML elements even if the design for mobile and desktop are quite different, although there is a limit to how drastically different both layouts can be.
    </p>
https://jsfiddle.net/huijing/97sxopq3/
    <p>
        The above demo requires the use of both `min-width` and `max-width` media queries to ensure that those properties are that used in each of the media query blocks don't cascade into each other.
    </p>
    <h4>Modal dialogs</h4>
    <p>
        Modal dialogs are meant to focus the user's attention on whatever the content of the modal is, and they usually display vertically centred in the middle of the page. This works fine if there's sufficient space around the modal, but on a smaller screen, there isn't much space to begin with. It would be better to just display the modal at the top of the screen and utilise the limited screen space as best you can.
    </p>
https://jsfiddle.net/huijing/kavftbwc/8/
</div>

<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    <iframe src="http://caniuse.com/css-mediaqueries/embed/"></iframe>
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries">Using media queries on MDN</a> 
        </li>
        <li>
           <a href="https://www.w3.org/TR/mediaqueries-4/">CSS Media Queries Level 4</a> 
        </li>
        <li>
            <a href="http://tzi.fr/css/prevent-double-breakpoint/">Prevent double breakpoint</a>
        </li>
    </ul>
</div>
