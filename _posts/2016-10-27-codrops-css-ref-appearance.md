---
layout: post
title: "Codrops CSS reference: appearance"
date: October 27, 2016
tags: [codrops]
external_url: https://tympanus.net/codrops/css_reference/appearance/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        The <code>appearance</code> property controls how native form controls are rendered. Setting <code>appearance: none</code> suppresses the native styles so CSS can be used to fully restyle them.
    </p>
    <p>
        Or at least, that was what the <a href="https://www.w3.org/TR/2004/CR-css3-ui-20040511/#appearance-val">2004 CSS3-UI CR</a> had in mind. Unfortunately, this specification was never implemented as designed, and we ended up with a rather convoluted situation on our hands. The property had since been dropped from CSS3-UI and is being re-looked at in the CSS Basic User Interface Module Level 4.
    </p>
    <p>
        What we currently have is a vendor-prefix soup. No browser supports the non-prefixed version at the moment. And both Webkit and Gecko support a different set of values for <code>-webkit-appearance</code> and <code>-moz-appearance</code> respectively. In theory, you could choose to display an element using platform-native styling depending on the operating system's theme, but in reality, this is not advisable at all.
    </p>
    <p>
        The most common use of this property at the moment is for resetting default styles using <code>appearance: none</code>. Using any other values to make your element mimic the look and feel of platform-native UIs is not advisable as those values, have already been dropped from the specification.
    </p>
    <p>
        The newest version of <code>appearance</code> is still being worked on in the CSS Basic User Interface Module 4 and the un-prefixed version now takes 2 values, <code>none</code> and <code>auto</code>.
    </p>
</div>

<div class="ct-cssref-info">
    <h2>Official Syntax</h2>
    <ul>
        <li>
           <strong>Syntax: </strong> appearance: none | auto
        </li>
        <li>
            <strong>Initial: </strong> auto
        </li>
        <li>
           <strong>Applies To: </strong> all elements
        </li>
        <li>
            <strong>Animatable: </strong> no
        </li>
    </ul>
</div>

<div class="ct-cssref-values">
    <h2>Values</h2>
    <dl>
        <dt>none</dt>
        <dd>
            No styling is applied on the element at all. The element can be styled using CSS as per normal.
        </dd>

        <dt>auto</dt>
        <dd>
            The user-agent will render form controls with the default styles of the host operating system.
        </dd>
    </dl>
    <dl>
        <dt>Webkit-specific</dt>
        <dd>
            checkbox | radio | push-button | square-button | button | button-bevel | listbox | listitem | menulist | menulist-button | menulist-text | menulist-textfield | scrollbarbutton-up | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbartrack-horizontal | scrollbartrack-vertical | scrollbarthumb-horizontal | scrollbarthumb-vertical | scrollbargripper-horizontal | scrollbargripper-vertical | slider-horizontal | slider-vertical | sliderthumb-horizontal | sliderthumb-vertical | caret | searchfield | searchfield-decoration | searchfield-results-decoration | searchfield-results-button | searchfield-cancel-button | textfield | textarea
        </dd>
        <dt>Mozilla-specific</dt>
        <dd>
             none | button | checkbox | checkbox-container | checkbox-small | dialog | listbox | menuitem | menulist | menulist-button | menulist-textfield | menupopup | progressbar | radio | radio-container | radio-small | resizer | scrollbar | scrollbarbutton-down | scrollbarbutton-left | scrollbarbutton-right | scrollbarbutton-up | scrollbartrack-horizontal | scrollbartrack-vertical | separator | statusbar | tab | tab-left-edge Obsolete | tabpanels | textfield | textfield-multiline | toolbar | toolbarbutton | toolbox | -moz-mac-unified-toolbar | -moz-win-borderless-glass | -moz-win-browsertabbar-toolbox | -moz-win-communications-toolbox | -moz-win-glass | -moz-win-media-toolbox | tooltip | treeheadercell | treeheadersortarrow | treeitem | treetwisty | treetwistyopen | treeview | window
        </dd>
    </dl>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    If you want to have custom checkboxes, you would want the default styling to be removed so you are free to style the checkbox any way you like.
    <pre class="brush:css">input[type="checkbox"] {
  appearance: none;
}</pre>
</div>

<div class="ct-cssref-demo">
    <h2>Live Demo</h2>
    <p>In this demo, we've removed the default styling for the select element and applied custom CSS styles to it instead.</p>
    https://jsfiddle.net/huijing/680ccg29/
</div>

<div class="ct-cssref-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-appearance"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
           <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/-moz-appearance">MDN -moz-appearance (-webkit-appearance)</a> 
        </li>
        <li>
           <a href="http://trentwalton.com/2010/07/14/css-webkit-appearance/">CSS Webkit Appearance</a> 
        </li>
    </ul>
</div>
