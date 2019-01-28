---
layout: post
title: "Codrops CSS reference: writing-mode"
date: May 19, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/writing-mode/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>writing-mode</code> property allows us to determine the direction which content flows on the web page.
    </p>

    <p>
        The CSS Writing Modes Level 3 specification is a comprehensive specification which addresses the various requirements for catering to international writing systems. The <code>writing-mode</code> property applies to use-cases related to vertical writing systems. East Asian languages, like Chinese and Japanese, can be written horizontally, flowing from top-to-bottom as well as vertically, flowing from right-to-left. Mongolian is written vertically, flowing from left-to-right.
    </p>

    <p>
        Writing Modes introduce some concepts with regards to content flow that are addressed by several CSS properties. The <strong>block flow direction</strong> refers to the direction which block-level boxes are stacked and the direction in which they flow within the block container. The <code>writing-mode</code> property affects this behaviour.
    </p>

    <p>
        The <strong>inline base direction</strong> determines the direction of content flow on a line of text, where the line starts and where it ends. Although there are CSS properties that can affect this behaviour, HTML already possesses markup features to control bi-directionality, e.g. the <code>dir</code> attribute, we should use those instead of CSS styling to ensure layout remains correct in the absence of stylesheets.
    </p>

    <p>
        The <code>text-orientation</code> property controls the orientation of individual characters and is covered in <a href="http://<a href=https://tympanus.net/codrops/css_reference/text-orientation/">its own entry</a>. Every Unicode character has an implicit bidirectional type and the <a href="http://unicode.org/reports/tr9/">Unicode bidirectional algorithm</a> defines how directionality is determined for bidirectional Unicode text.
    </p>
</div>

<div class="ct-cssref-info" id="official-syntax">
    <h2>Official Syntax</h2>
    <ul>
        <li>
           <strong>Syntax: </strong>
           <pre>writing-mode: horizontal-tb | vertical-rl | vertical-lr | sideways-rl | sideways-lr</pre>
        </li>
        <li>
            <strong>Initial: </strong> horizontal-tb
        </li>
        <li>
           <strong>Applies To: </strong> All elements except table row groups, table column groups, table rows, table columns, ruby base container, ruby annotation container
        </li>
        <li>
           <strong>Animatable: </strong> No
        </li>
    </ul>
</div>

<div class="ct-cssref-values">
    <h2>Values</h2>
    <dl>
        <dt>horizontal-tb</dt>
        <dd>
            <strong>This is the initial value.</strong> Text is rendered from <em>left-to-right</em>, with a <em>top-to-bottom</em> block flow direction. Both the writing-mode and typographic-mode are <em>horizontal</em>.
            <figure>
                <svg viewBox="0 0 377 203" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a" d="M58 33h250v72H58z"/><path id="b" d="M58 115h250v72H58z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(-4 -1)"><use fill="#F0EAD6" xlink:href="#a"/><path stroke="#8B572A" stroke-width="2" d="M59 34h248v70H59z"/></g><path stroke="#CA8CFF" stroke-width="8" d="M67 49.5V29m3 10.8L67 29l-3 10.8"/><text fill="#000" font-size="12" transform="translate(-4 -1)"><tspan x="67" y="50">Ultimately it is the magic of shadows. Were </tspan> <tspan x="67" y="66">the shadows to be banished from its </tspan> <tspan x="67" y="82">corners, the alcove would in that instant </tspan> <tspan x="67" y="98">revert to mere void.</tspan></text><g transform="translate(-4 -1)"><use fill="#F0EAD6" xlink:href="#b"/><path stroke="#8B572A" stroke-width="2" d="M59 116h248v70H59z"/></g><text fill="#000" font-size="12" transform="translate(-4 -1)"><tspan x="67" y="132">A phosphorescent jewel gives off its glow </tspan> <tspan x="67" y="148">and color in the dark and loses its beauty in </tspan> <tspan x="67" y="164">the light of day. Were it not for shadows, </tspan> <tspan x="67" y="180">there would be no beauty</tspan></text><g fill="#B8E986"><path d="M14.367 32h21.267v138.574H14.367z"/><path d="M49.18 169.877l-24.353 32.616L.27 169.573"/></g><path fill="#FFC668" stroke="#50E3C2" stroke-width="4" d="M219.5 53h84m0 0l-10.8-3v6l10.8-3z" stroke-linecap="square"/><text fill="#000" transform="rotate(90 27.5 101)" font-size="12" font-weight="bold"><tspan x="-27.5" y="107.5">block flow direction</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(-4 -1)"><tspan x="29" y="11">line orientation</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(-4 -1)"><tspan x="319" y="52">inline base </tspan> <tspan x="319" y="66">direction</tspan></text></g></svg>
                <figcaption>Latin-based writing mode</figcaption>
            </figure>
        </dd>
    </dl>
    <dl>
        <dt>vertical-rl</dt>
        <dd>
            Text is rendered from <em>top-to-bottom</em>, with a <em>right-to-left</em> block flow direction. Both the writing-mode and typographic-mode are <em>vertical</em>.
            <figure>
              <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/vertical-rl.svg" alt="" />
              <figcaption>Han-based writing mode</figcaption>
           </figure>
        </dd>
    </dl>
    <dl>
        <dt>vertical-lr</dt>
        <dd>
            Text is rendered from <em>top-to-bottom</em>, with a <em>left-to-right</em> block flow direction. Both the writing-mode and typographic-mode are <em>vertical</em>.
            <figure>
              <img src="https://cdn.rawgit.com/huijing/filerepo/gh-pages/vertical-lr.svg" alt="" />
              <figcaption>Mongolian-based writing mode</figcaption>
           </figure>
        </dd>
    </dl>
    <dl>
        <dt>sideways-rl</dt>
        <dd>
            Text is rendered from <em>top-to-bottom</em>, with a <em>right-to-left</em> block flow direction. The writing-mode is <em>vertical</em> but the typographic-mode is <em>horizontal</em>, with the glyphs set sideways on their right side.<br><small>*Experimental value, may be differed to CSS Writing Modes Level 4</small>
             <figure>
                <svg viewBox="0 0 368 248" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a2" d="M166 59h125v154H166z"/><path id="b2" d="M28 59.176h125v154H28z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 -5)"><use fill="#F0EAD6" xlink:href="#a2"/><path stroke="#8B572A" stroke-width="2" d="M167 60h123v152H167z"/></g><path stroke="#CA8CFF" stroke-width="8" d="M271 65h18.183m-10.8 3l10.8-3-10.8-3"/><text fill="#000" transform="rotate(90 228.5 132.5)" font-size="12"><tspan x="157" y="90">Ultimately it is the magic </tspan> <tspan x="157" y="106">of shadows. Were the </tspan> <tspan x="157" y="122">shadows to be banished </tspan> <tspan x="157" y="138">from its corners, the </tspan> <tspan x="157" y="154">alcove would in that </tspan> <tspan x="157" y="170">instant revert to mere </tspan> <tspan x="157" y="186">void.</tspan></text><g transform="translate(0 -5)"><use fill="#F0EAD6" xlink:href="#b2"/><path stroke="#8B572A" stroke-width="2" d="M29 60.176h123v152H29z"/></g><text fill="#000" transform="rotate(90 90.5 132.676)" font-size="12"><tspan x="19" y="90.176">A phosphorescent jewel </tspan> <tspan x="19" y="106.176">gives off its glow and </tspan> <tspan x="19" y="122.176">color in the dark and </tspan> <tspan x="19" y="138.176">loses its beauty in the </tspan> <tspan x="19" y="154.176">light of day. Were it not </tspan> <tspan x="19" y="170.176">for shadows, there would </tspan> <tspan x="19" y="186.176">be no beauty</tspan></text><g fill="#B8E986"><path d="M291 14.174V35.44H33V14.175z"/><path d="M32.908 49.19L.485 25.03 33.375.443"/></g><path fill="#FFC668" stroke="#50E3C2" stroke-width="4" d="M266 142v74.31m0 0l3-10.8h-6l3 10.8z"/><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -5)"><tspan x="110" y="33">block flow direction</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -5)"><tspan x="306" y="67">line </tspan> <tspan x="306" y="81">orientation</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -5)"><tspan x="237" y="238">inline base </tspan> <tspan x="237" y="252">direction </tspan></text></g></svg>
            </figure>
        </dd>
    </dl>
    <dl>
        <dt>sideways-lr</dt>
        <dd>
            Text is rendered from <em>top-to-bottom</em>, with a <em>left-to-right</em> block flow direction. The writing-mode is <em>vertical</em> but the typographic-mode is <em>horizontal</em>, with the glyphs set sideways on their left side.<br><small>*Experimental value, may be differed to CSS Writing Modes Level 4</small>
            <figure>
                <svg viewBox="0 0 349 248" xmlns:xlink="http://www.w3.org/1999/xlink"><defs><path id="a3" d="M147 58h125v154H147z"/><path id="b3" d="M9 58.176h125v154H9z"/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(0 -4)"><use fill="#F0EAD6" xlink:href="#a3"/><path stroke="#8B572A" stroke-width="2" d="M148 59h123v152H148z"/></g><path stroke="#CA8CFF" stroke-width="8" d="M252 65h18.183m-10.8 3l10.8-3-10.8-3"/><text fill="#000" transform="rotate(90 209 132)" font-size="12"><tspan x="138" y="89">be no beauty.</tspan> <tspan x="138" y="105">for shadows, there would</tspan> <tspan x="138" y="121">light of day. Were it not</tspan> <tspan x="138" y="137">loses its beauty in the</tspan> <tspan x="138" y="153">color in the dark and </tspan> <tspan x="138" y="169">gives off its glow and </tspan> <tspan x="138" y="185">A phosphorescent jewel</tspan></text><g transform="translate(0 -4)"><use fill="#F0EAD6" xlink:href="#b3"/><path stroke="#8B572A" stroke-width="2" d="M10 59.176h123v152H10z"/></g><text fill="#000" transform="rotate(90 71 132.176)" font-size="12"><tspan x="0" y="89.176">void.</tspan> <tspan x="0" y="105.176">instant revert to mere</tspan> <tspan x="0" y="121.176">alcove would in that </tspan> <tspan x="0" y="137.176">from its corners, the </tspan> <tspan x="0" y="153.176">shadows to be banished </tspan> <tspan x="0" y="169.176">of shadows. Were the </tspan> <tspan x="0" y="185.176">Ultimately it is the magic</tspan></text><g fill="#B8E986"><path d="M9 14.367v21.267h258V14.367z"/><path d="M267.092 49.385l32.423-24.162L266.625.637"/></g><path fill="#FFC668" stroke="#50E3C2" stroke-width="4" d="M29 142v74.31m0 0l3-10.8h-6l3 10.8z"/><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -4)"><tspan x="91" y="32">block flow direction</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -4)"><tspan x="287" y="66">line </tspan> <tspan x="287" y="80">orientation</tspan></text><text fill="#000" font-size="12" font-weight="bold" transform="translate(0 -4)"><tspan x="0" y="237">inline base </tspan> <tspan x="0" y="251">direction </tspan></text></g></svg>
                <figcaption>Mongolian-based writing mode</figcaption>
            </figure>
        </dd>
    </dl>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>

    <p>
        The following examples illustrate how the <code>writing-mode</code> property affects the layout of different scripts.
    </p>

    <pre><code>.element {
    writing-mode: horizontal-tb;
}</code></pre>

<img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/horizontal-tb-1-300x114.png" alt="horizontal-tb" width="300" height="114" class="alignnone size-medium wp-image-31063" />

    <pre><code>.element {
    writing-mode: vertical-lr;
}</code></pre>

<img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/vertical-lr-103x300.png" alt="vertical-lr" width="103" height="300" class="alignnone size-medium wp-image-31066" />

    <pre><code>.element {
    writing-mode: vertical-rl;
}</code></pre>

<img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/vertical-rl-100x300.png" alt="vertical-rl" width="100" height="300" class="alignnone size-medium wp-image-31067" />
</div>

    <pre><code>.element {
    writing-mode: sideways-lr;
}</code></pre>

<img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/sideways-lr-119x300.png" alt="sideways-lr" width="119" height="300" class="alignnone size-medium wp-image-31064" />

    <pre><code>.element {
    writing-mode: sideways-rl;
}</code></pre>

<img src="https://tympanus.net/codrops/wp-content/uploads/2017/05/sideways-rl-1-119x300.png" alt="sideways-rl" width="119" height="300" class="alignnone size-medium wp-image-31069" />

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>Although vertical text is mostly commonly seen and used on sites in East Asian languages, the design aspect of using vertical text can be applied to Latin-based writing systems as well. The following is an example of a responsive navigation bar that uses a vertical text layout on narrow screens.</p>
    https://jsfiddle.net/huijing/Ljmyc0n0/

    <p>The next example shows how a blog category can be displayed as a vertical label on the right of the post on wide screen layouts. The label is not necessarily critical information, but it is useful to have, so placing it on the right of the page, laid out vertically, allows reader's attention to be focused on the header and text of the article.</p>
    https://jsfiddle.net/huijing/1h1yLoqm/
</div>

<div class="ct-cssref-support" id="browser-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-writing-mode"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://www.w3.org/TR/css-writing-modes-3/#vertical-intro">CSS Writing Modes Level 3</a> 
        </li>
        <li>
           <a href="https://developer.mozilla.org/en/docs/Web/CSS/writing-mode">MDN writing-mode</a> 
        </li>
        <li>
           <a href="https://24ways.org/2016/css-writing-modes/">CSS Writing Modes</a> by Jen Simmons
        </li>
    </ul>
</div>
