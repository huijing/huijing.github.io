---
layout: post
title: "Codrops CSS reference: touch-action"
date: April 13, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/touch-action/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>touch-action</code> property determines if and how an user can interact with an element on screen via touch input using the browser's default features. For example, panning or zooming.
    </p>

    <p>
        Touch events are a Web API that allow the browser to interpret finger or stylus interactions on touch screens or trackpads. We usually handle touch events using Javascript, but <code>touch-action</code> allows us to inform the browser of the application's intent before any event listeners are triggered.
    </p>

    <p>
        The result of an element being touched depends on the value of the <code>touch-action</code> property and the default touch behaviors on the element and its ancestors. Developers can selectively disable some default touch behaviors, preventing them from being dispatched at all if they are not required.
    </p>

    <p>
        The <code>touch-action</code> property only applies to elements that support both the CSS <code>width</code> and <code>height</code> properties. For elements that do not, like <code>span</code>, we can set their display property to one that does support <code>width</code> and <code>height</code>, like <code>block</code>.
    </p>
</div>

<div class="ct-cssref-info" id="official-syntax">
    <h2>Official Syntax</h2>
    <ul>
        <li>
           <strong>Syntax: </strong> touch-action: auto | none | [ [ pan-x | pan-left | pan-right ] || [ pan-y | pan-up | pan-down ] ] | manipulation
        </li>
        <li>
            <strong>Initial: </strong> auto
        </li>
        <li>
           <strong>Applies To: </strong> all elements except: non-replaced inline elements, table rows, row groups, table columns, and column groups
        </li>
        <li>
           <strong>Animatable: </strong> No
        </li>
    </ul>
</div>

<div class="ct-cssref-values">
    <h2>Values</h2>
    <dl>
        <dt>auto</dt>
        <dd>
            <strong>This is the initial value.</strong> The browser's user agent may determine the permitted touch behavior that begins on the element.
        </dd>

        <dt>manipulation</dt>
        <dd>
            Touch-driven panning and pinch-zooming are permitted on the element. This can be considered a shorthand for <code>pan-x pan-y pinch-zoom</code>. Additional non-standard gestures like double-tap to zoom are not permitted.
        </dd>

        <dt>none</dt>
        <dd>
            No default touch behaviors are permitted on the element.
        </dd>

        <dt>pan-x</dt>
        <dd>
            Touch-driven panning is permitted along the x-axis. Can be combined with pan-y, pan-up, pan-down and pinch-zoom. Refer to <a href="#official-syntax">Official Syntax</a>.
        </dd>

        <dt>pan-y</dt>
        <dd>
            Touch-driven panning is permitted along the y-axis. Can be combined with pan-x, pan-left, pan-right and pinch-zoom. Refer to <a href="#official-syntax">Official Syntax</a>.
        </dd>

        <dt>pan-left</dt>
        <dd>
            Touch-driven panning is permitted only if the action starts by panning to the left. This means the user is dragging their finger to the right. Once scrolling has started, the direction can then be reversed.
        </dd>

        <dt>pan-right</dt>
        <dd>
            Touch-driven panning is permitted only if the action starts by panning to the right. This means the user is dragging their finger to the left. Once scrolling has started, the direction can then be reversed.
        </dd>

        <dt>pan-up</dt>
        <dd>
            Touch-driven panning is permitted only if the action starts by panning up. This means the user is dragging their finger downwards. Once scrolling has started, the direction can then be reversed.
        </dd>

        <dt>pan-down</dt>
        <dd>
            Touch-driven panning is permitted only if the action starts by panning down. This means the user is dragging their finger upwards. Once scrolling has started, the direction can then be reversed.
        </dd>

        <dt>pinch-zoom</dt>
        <dd>
            Touch-driven zooming with multiple-fingers is permitted. Can be combined with pan-x, pan-left or pan-right; and pan-y pan-up or pan-down. Refer to <a href="#official-syntax">Official Syntax</a>.
        </dd>
    </dl>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>
        Browsers come with default touch gestures and sometimes you may have an element that has its own custom zooming or dragging functionality. We can use the <code>none</code> value to disable the browser's default behavior.
    </p>
    <pre><code>.element {
  touch-action: none;
}</code></pre>

    <p>
        We can also use <code>touch-action</code> to remove the 350ms delay before single taps activate links or buttons. This delay is a default browser bahavior to make sure the user really intended to tap only once. But this also makes the site feel less responsive. By setting the <code>touch-action</code> value to <code>manipulation</code>, any touches that begin on the element will only trigger pan or zoom. Double-tap gestures are disregarded and single taps will be dispatched without delay.</p>
        <pre><code>.element {
  touch-action: manipulation;
}</code></pre>

    <p>
        Another use case for <code>touch-action</code> could be for the customization of overscroll behavior, like the commonly seen pull-to-refresh effect. We can set the container's <code>touch-action</code> property to <code>pan-x pan-down</code> when the scroll position is 0, and <code>pan-x pan-y</code> when scroll position is any other value. This means if the user drags their finger downwards when the scroll position of the container is all the way at the top, the pointer event handlers will kick in instead.
    </p>
</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>
        As this property is specific to touch input, it is recommended you try it out on a touch-enabled device.
    </p>
    https://jsfiddle.net/huijing/u9j4dueL/
</div>

<div class="ct-cssref-support" id="browser-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-touch-action"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://compat.spec.whatwg.org/#touch-action">WHATWG Compatibility standards - Additional touch-action values</a> 
        </li>
        <li>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action">MDN touch-action</a> 
        </li>
        <li>
           <a href="https://msdn.microsoft.com/en-us/library/windows/apps/hh767313.aspx">MSDN touch-action property</a> 
        </li>
        <li>
            <a href="https://developers.google.com/web/updates/2016/10/touch-action">Touch Action Options</a>
        </li>
    </ul>
</div>
