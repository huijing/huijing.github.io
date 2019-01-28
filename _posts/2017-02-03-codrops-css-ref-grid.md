---
layout: post
title: "Codrops CSS reference: Grid"
date: March 02, 2017
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/grid/
external_site: codrops
---
<div class="ct-cssref-description">
  <p>
      CSS Grid is a two-dimensional layout system created specifically to tackle grid-based user interfaces on the web.
  </p>

  <p>
      Grids are the fundamental to the design of layouts. Over the web's relatively short life-span, developers have been trying all kinds of methods and hacks for laying out content in the browser. We started off with no way to do page layout, to table-based layouts, followed by float-based layouts. But those approaches were, at best, workarounds, because neither tables nor floats were meant to be used as true layout tools.
  </p>

  <p>
      Enter CSS Grid. The <a href="https://www.w3.org/TR/2011/WD-css3-grid-layout-20110407/">Grid Layout Working Draft</a> was published back in 7 April 2011. 3 of the 4 authors were from Microsoft and the <a href="https://blogs.msdn.microsoft.com/ie/2011/04/14/ie10-platform-preview-and-css-features-for-adaptive-layouts/">first IE10 Platform Preview</a> shipped with a <code>-ms</code> prefixed Grid implementation. Over the course of 6 years, the specification has evolved based on feedback from developers and browser vendors working together to come up with a truly effective native CSS grid solution.
  </p>

  <p>
      CSS Grid introduces a series of properties that allow us to create grid structures and control placement and sizing of grid items using CSS. This means that we are able to use media queries to adapt our grids to different contexts. We can rearrange the layout of grid items independent of their source order, which allows us to shift grid items around to cater for these varying contexts without having to change the underlying markup.
  </p>

  <p>
      Grid also comes with a powerful auto-placement algorithm, which makes it easier to fill up available space without having to do a lot of complicated calculations. To a certain extent, Grid even allows some flexibility on the z-axis, in that you can overlap grid items if you need to.
  </p>

  <p>
      Because Grid was created to be very flexible and cater for many different use cases, it is not something that we can just pick up and use in a day. Learning Grid is not difficult. Yes, it will take some time, but once you get the hang of it, you'll be able to spend more time on designing layouts instead of wrangling code to produce the layout you want.
  </p>

  <h3>Table of Contents</h3>

  <ul>
    <li>
      <a href="#section_concepts-and-terminology">Concepts and Terminology</a>
      <ul>
        <li><a href="#section_grid-lines">Grid Lines</li>
        <li><a href="#section_grid-tracks-cells">Grid Tracks and Cells</li>
        <li><a href="#section_grid-areas">Grid Areas</li>
      </ul>
    </li>
    <li>
      <a href="#section_grid-container">Grid Container: Defining the Grid Structure</a>
      <ul>
        <li><a href="#section_explicit-implicit-grid">Explicit Grid and Implicit Grid</li>
        <li><a href="#section_grid-container-properties">Properties related to the Grid Container</li>
      </ul>
    </li>
    <li>
      <a href="#section_grid-items">Grid Items: Placing Items in the Grid</a>
      <ul>
        <li><a href="#section_ordering-grid-items">Ordering Grid Items</li>
        <li><a href="#section_overlapping-grid-items">Overlapping Grid Items</li>
        <li><a href="#section_absolute-positioning">Absolutely Positioned Grid Items</a></li>
        <li><a href="#section_grid-item-properties">Properties related to Grid Items</li>
      </ul>
    </li>
    <li>
      <a href="#section_grid-alignment">Grid Alignment: Aligning the Grid and Grid Items</a>
      <ul>
        <li><a href="#section_column-row-axis">Column-axis and Row-axis</li>
        <li><a href="#section_grid-alignment-properties">Properties related to Grid Alignment</li>
      </ul>
    </li>
    <li><a href="#section_grid-inspector-tool">Grid Inspector tool</a></li>
    <li>
      <a href="#section_examples">Examples</a>
      <ul>
        <li><a href="#section_eg1">Simple Responsive Grid Layout</li>
        <li><a href="#section_eg2">Responsive Grid with Different Sized Items</li>
        <li><a href="#section_eg3">Equal-Height Multi-Column "Holy Grail" Layout</li>
        <li><a href="#section_eg4">Grids With Non-uniform Items</li>
      </ul>
    </li>
    <li><a href="#section_browser-support">Browser Support</a></li>
    <li><a href="#section_further-reading">Further Reading</a></li>
  </ul>

  <h2 id="section_concepts-and-terminology">Concepts and Terminology</h2>
  
  <p>
      The Grid specification introduces some terminology and concepts that we need to understand so we can utilise grid to its full effectiveness. By default, the directional context of a HTML document is left-to-right, and all the following examples assume this.
  </p>

  <p>
      If the base direction of HTML is right-to-left, the concepts still apply, except that the block flow direction becomes right-to-left, where index 1 starts on the right instead. Changing the writing-mode of the document from horizontal to vertical will also affect the block flow direction. This will be covered in the section on <a href="#section_column-row-axis">Column-axis and Row-axis</a>.
  </p>

  <p>
      If you have used Flexbox before, you may notice a similarity in terms of usage, which works on the premise of a parent container and its child elements. In this case, we will refer to the parent container as the <strong><a href="#section_grid-container">grid container</a></strong> and its child elements as <strong><a href="#section_grid-items">grid items</a></strong>.
  </p>

  <h3 id="section_grid-lines">Grid Lines</h3>

  <p>
      Grid lines are the horizontal and vertical lines that form the basis of the grid structure. They are used to position items on the grid. We can refer to them by numerical index, which starts at 1.
  </p>

  <p>
      Grid lines also have negative indices, which allow us to reference grid lines starting from the end of the grid. One of the use cases for negative indices is if you need an item in the last column, regardless of number of tracks, then giving that item a <code>grid-column-end</code> property of <code>-1</code> will handle it.
  </p>

  <svg style="max-height:15em;" viewBox="0 0 586 418"><defs><path id="a2" d="M0 5h460v305H0z"/><mask id="b2" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5 0h470v315H-5z"/><use xlink:href="#a2"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(21 6)"><use fill="#D8D8D8" xlink:href="#a2"/><use stroke="#595959" stroke-width="10" mask="url(#b2)" xlink:href="#a2"/></g><path stroke="#595959" stroke-width="5" d="M328.5 11v305M21 163.5h460" stroke-linecap="square"/><path stroke="#7ED321" stroke-width="5" d="M173.5 6v315"/><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="45.3" y="177">2</tspan></text><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="44.3" y="333">3</tspan></text><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="74.6" y="24">-3</tspan></text><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="74.6" y="177">-2</tspan></text><text fill="#000" font-size="24" transform="translate(486 -7)"><tspan x="73.6" y="333">-1</tspan></text><path stroke="#979797" stroke-width="3" d="M486 8.5h35m-35 155h35m-35 155h35M18.5 321v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="13.3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="170.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="323.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="477.3" y="64">4</tspan></text><text fill="#000" font-size="24" transform="translate(2 317)"><tspan x=".6" y="96">-4</tspan></text><text fill="#000" font-size="24" transform="translate(2 317)"><tspan x="158.6" y="96">-3 </tspan></text><text fill="#000" font-size="24" transform="translate(2 317)"><tspan x="312.6" y="96">-2</tspan></text><text fill="#000" font-size="24" transform="translate(2 317)"><tspan x="468.6" y="96">-1</tspan></text><path fill="#4A90E2" fill-opacity=".75" d="M176 166h305v150H176z"/><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="299.204" y="254">.item</tspan></text></g></svg>

  <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 150px 150px 150px;
  grid-template-rows: 150px 150px;
}

.item {
  grid-column-start: 2;
  grid-column-end: 4;
  grid-row-start: 2;
  grid-row-end: 3;
}</code></pre>
  
  <p>
      It is possible name the grid lines so you don't have to count which grid line you need to reference. These names can be declared as optional parameters in the <code>grid-template-columns</code> and <code>grid-template-rows</code> property.
  </p>

  <svg style="max-height:15em;" viewBox="0 0 632 385"><defs><path id="a42" d="M0 5h460v305H0z"/><mask id="b42" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5 0h470v315H-5z"/><use xlink:href="#a42"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5)"><use fill="#D8D8D8" xlink:href="#a42"/><use stroke="#595959" stroke-width="10" mask="url(#b42)" xlink:href="#a42"/></g><path stroke="#595959" stroke-width="5" d="M312.5 5v305M5 157.5h460" stroke-linecap="square"/><path stroke="#7ED321" stroke-width="5" d="M157.5 0v315"/><text fill="#000" font-size="24" transform="translate(470 141)"><tspan x="52" y="24">[row-foo]</tspan></text><text fill="#000" font-size="24" transform="translate(470 141)"><tspan x="52" y="177">[row-bar]</tspan></text><path stroke="#979797" stroke-width="3" d="M470 157.5h35m-35 155h35M157.5 315v35m310-35v35"/><text fill="#000" font-size="24" transform="translate(108 315)"><tspan x=".14" y="64">[col-foo]</tspan></text><text fill="#000" font-size="24" transform="translate(108 315)"><tspan x="307.296" y="64">[col-bar]</tspan></text><path fill="#4A90E2" fill-opacity=".75" d="M160 160h305v150H160z"/><text fill="#000" font-size="24" transform="translate(5)"><tspan x="276.204" y="241">.item</tspan></text></g></svg>

  <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 150px [col-foo] 150px 150px [col-bar];
  grid-template-rows: 150px [row-foo] 150px [row-bar];
}

.item {
  grid-column-start: col-foo;
  grid-column-end: col-bar;
  grid-row-start: row-foo;
  grid-row-end: row-bar;
}</code></pre>

  <h3 id="section_grid-tracks-cells">Grid Tracks and Cells</h3>

  <p>
      A grid track is the space between 2 adjacent grid lines. They are the rows and columns of your grid. The diagram below highlights the grid track between the first and second row grid lines. We can separate grid tracks with gutters, using the <code>grid-row-gap</code> and <code>grid-column-gap</code> properties.
  </p>

  <p>
      A grid cell is the space between 2 adjacent row grid lines and 2 adjacent column grid lines. It's conceptually similar to a table cell, as it is the single unit of your grid. The diagram below highlights the grid cell between the third and fourth column grid lines and second and third row grid lines.
  </p>

  <svg style="max-height:15em;" viewBox="0 0 531 386"><defs><path id="a3" d="M0 0h460v305H0z"/><mask id="b3" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#a3"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(8 11)"><use fill="#D8D8D8" xlink:href="#a3"/><use stroke="#595959" stroke-width="10" mask="url(#b3)" xlink:href="#a3"/></g><path stroke="#595959" stroke-width="5" d="M315.5 11v305M8 163.5h460M160.5 11v305" stroke-linecap="square"/><path fill="#4A90E2" fill-opacity=".75" d="M318 166h150v150H318z"/><path fill="#7ED321" fill-opacity=".75" d="M8 11h460v150H8z"/><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="350.356" y="254">Grid Cell</tspan></text><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="184.408" y="99">Grid Track</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="45.3" y="177">2</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M473 8.5h35m-35 155h35m-35 155h35M5.5 321v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="464.3" y="64">4</tspan></text></g></svg>

  <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 150px 150px 150px; /* three rows  */
  grid-template-rows: 150px 150px; /* two columns  */
}</code></pre>

  <h3 id="section_grid-areas">Grid Areas</h3>

  <p>
      A grid area is made up of 1 or more grid cells, and are bound by 4 grid lines on each side of the grid area. You can refer to a grid area using it's bounding grid lines or it's name as defined by the <code>grid-template-areas</code> property. A grid item can then be assigned to a grid area with <a href="#section_grid-items">grid-placement</a> properties like <code>grid-area</code>, <code>grid-row</code>, <code>grid-column</code> or their long-form equivalents.
  </p>

  <svg style="max-height:15em;" viewBox="0 0 531 386"><defs><path id="a4" d="M0 0h460v305H0z"/><mask id="b4" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#a4"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(8 11)"><use fill="#D8D8D8" xlink:href="#a4"/><use stroke="#595959" stroke-width="10" mask="url(#b4)" xlink:href="#a4"/></g><path stroke="#595959" stroke-width="5" d="M315.5 11v305M8 163.5h460M160.5 11v305" stroke-linecap="square"/><path fill="#4A90E2" fill-opacity=".75" d="M163 11h305v305H163z"/><path fill="#7ED321" fill-opacity=".75" d="M8 11h150v305H8z"/><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="273.804" y="177">.item-2</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="45.3" y="177">2</tspan></text><text fill="#000" font-size="24" transform="translate(473 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M473 8.5h35m-35 155h35m-35 155h35M5.5 321v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 317)"><tspan x="464.3" y="64">4</tspan></text><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="41.304" y="177">.item-1</tspan></text></g></svg>

  <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 150px 150px 150px; /* three rows  */
  grid-template-rows: 150px 150px; /* two columns  */
  grid-template-areas: "a b b"
                       "a b b";
}

.item-1 {
  grid-area: a;
}

.item-2 {
  grid-area: b;
}</code></pre>

  <p>
      The shaded portion of the diagram are gutters between the grid tracks, as mentioned earlier, which can be controlled with the <code>grid-row-gap</code> and <code>grid-column-gap</code> properties (more about that <a href="#section_grid-column-row-gap">below</a>).
  </p>

  <p>
      And so, putting it all together:
  </p>

  <svg viewBox="0 0 1183 680"><defs><path id="a" d="M0 0h850v500H0z"/><mask id="h" width="860" height="510" x="-5" y="-5"><path fill="#fff" d="M-5-5h860v510H-5z"/><use xlink:href="#a"/></mask><pattern id="i" width="24.066" height="24.066" x="125.934" y="-24.066" patternUnits="userSpaceOnUse"><use xlink:href="#b" transform="scale(.50138)"/></pattern><image id="b" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/><pattern id="j" width="24.066" height="24.066" x="300.934" y="-24.066" patternUnits="userSpaceOnUse"><use xlink:href="#c" transform="scale(.50138)"/></pattern><image id="c" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/><pattern id="k" width="24.066" height="24.066" x="475.934" y="-24.066" patternUnits="userSpaceOnUse"><use xlink:href="#d" transform="scale(.50138)"/></pattern><image id="d" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/><pattern id="l" width="24.066" height="24.066" x="650.934" y="-24.066" patternUnits="userSpaceOnUse"><use xlink:href="#e" transform="scale(.50138)"/></pattern><image id="e" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/><pattern id="m" width="24.066" height="24.066" x="-24.066" y="300.934" patternUnits="userSpaceOnUse"><use xlink:href="#f" transform="scale(.50138)"/></pattern><image id="f" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/><pattern id="n" width="24.066" height="24.066" x="-24.066" y="125.934" patternUnits="userSpaceOnUse"><use xlink:href="#g" transform="scale(.50138)"/></pattern><image id="g" width="48" height="48" xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAAV9JREFUaAXt2O0NgjAQBmBrt4DoDiawEHEQB1F3MK7BHKxR+2oKQfnseXCX0B/SEr3zucZIz+R57nZ+OOfuZVmeMcWaOEyWZVdjTBHicMW3aZpekMQnOyVJcqiq6hmSUq6Ig3iIyxnf+iRH7iSc8e1SleJCWGyvZsQboBlRA7QiWgCNiB+ANkQnQBOiF6AFMQjQgBgFSEdMAkhGTAZIRcwCSETMBkhDRAEkIaIBUhAkgAQEGbA2AgCDL0Edax2KrO8e3JCcCsDn10CgK/HQ2I0IZ+w9KucXBfo4mGJNHA79JfSBQhzO+FtfKFS567rEb2LrC3VV/vse507Uf2ScSQDiil8DOJOEHeFAtAAaET8AbYhOgCZEL0ALYhCgATEKkI6YBJCMmAyQipgFkIiYDZCGiAJIQkQDpCBIAAkIMmBtBAD/OMizPe+jQBh9j+JbX+hTn+a1r1K437wrfvYd/wV+UgblD/bGFgAAAABJRU5ErkJggg=="/></defs><g fill="none" fill-rule="evenodd"><g transform="translate(268 104)"><use fill="#D8D8D8" xlink:href="#a"/><use stroke="#595959" stroke-width="10" mask="url(#h)" xlink:href="#a"/></g><path stroke="#595959" stroke-width="5" d="M268 266.5h850m-850 175h850" stroke-linecap="square"/><path stroke="#595959" stroke-width="5" d="M430.5 104v500m350-500v500m-175-500v500m350-500v500"/><path fill="url(#i)" d="M150 0h25v500h-25z" transform="translate(268 104)"/><path fill="url(#j)" d="M325 0h25v500h-25z" transform="translate(268 104)"/><path fill="url(#k)" d="M500 0h25v500h-25z" transform="translate(268 104)"/><path fill="url(#l)" d="M675 0h25v500h-25z" transform="translate(268 104)"/><path fill="url(#m)" d="M0 325h850v25H0z" transform="translate(268 104)"/><path fill="url(#n)" d="M0 150h850v25H0z" transform="translate(268 104)"/><path fill="#7ED321" fill-opacity=".75" d="M268 104h150v500H268z"/><path fill="#F6A623" fill-opacity=".75" d="M968 104h150v150H968z"/><path fill="#4A90E2" fill-opacity=".75" d="M618 279h325v325H618z"/><path stroke="#000" stroke-width="5" d="M431.05 84.182c-1.12-32.03 16.496-64.71 58.64-66.182M418.5 72.5l12 17m13-17l-12 17m-263 177h78m-11 13l17-12m-17-13l17 12" stroke-linecap="round"/><text fill="#000" font-size="36" transform="translate(10 -10)"><tspan x=".038" y="285">Grid line</tspan></text><text fill="#000" transform="rotate(90 349.5 358.5)" font-size="36"><tspan x="256.04" y="378">Grid track</tspan></text><text fill="#000" font-size="36" transform="translate(10 -10)"><tspan x="502.144" y="37">Grid gap</tspan></text><text fill="#000" font-size="36" transform="translate(10 -10)"><tspan x="970.184" y="198">Grid cell</tspan></text><text fill="#000" font-size="36" transform="translate(10 -10)"><tspan x="700.024" y="461">Grid area</tspan></text><text fill="#000" font-size="24" transform="translate(1123 86)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(1123 86)"><tspan x="45.3" y="189">2</tspan></text><text fill="#000" font-size="24" transform="translate(1123 86)"><tspan x="45.3" y="364">3</tspan></text><text fill="#000" font-size="24" transform="translate(1123 86)"><tspan x="45.3" y="528">4</tspan></text><path stroke="#979797" stroke-width="3" d="M1123 101.5h35m-35 165h35m-35 175h35m-35 165h35M265.5 609v35m165-35v35m175-35v35m175-35v35m175-35v35m165-35v35"/><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x="166.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x="342.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x="516.3" y="64">4</tspan></text><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x="691.3" y="64">5</tspan></text><text fill="#000" font-size="24" transform="translate(258 609)"><tspan x="856.3" y="64">6</tspan></text></g></svg>

  <h2 id="section_grid-container">Grid Container: Defining the Grid Structure</h2>

  <h3>Summary of Properties related to the Grid Container</h3>
  <ul>
    <li><a href="#section_grid-template-columns-rows"><code>grid-template-columns</code> and <code>grid-template-rows</code></a></li>
    <li><a href="#section_grid-template-areas"><code>grid-template-areas</code></a></li>
    <li><a href="#section_grid-template"><code>grid-template</code></a></li>
    <li><a href="#section_grid-column-row-gap"><code>grid-column-gap</code> and <code>grid-row-gap</code></a></li>
    <li><a href="#section_grid-gap"><code>grid-gap</code></a></li>
    <li><a href="#section_grid-auto-columns-rows"><code>grid-auto-columns</code> and <code>grid-auto-rows</code></a></li>
    <li><a href="#section_grid-auto-flow"><code>grid-auto-flow</code></a></li>
    <li><a href="#section_grid"><code>grid</code></a></li>
  </ul>

  <p>
      The structure of the grid, like how many rows and columns it has and their sizing, is controlled by properties applied on the grid container. <a href="#section_grid-items">Placement of grid items</a> is determined by CSS properties applied to the child elements inside the grid container.
  </p>

  <p>
      A grid container is defined by setting the <code>display</code> to <code>grid</code> or <code>inline-grid</code> on an element. This creates a grid formatting context for its contents, which are laid out into a grid. The grid formatting context only applies to child elements and does <em>not</em> extend to grandchild elements and beyond.
  </p>

  <p>
      In the diagram below, we've applied <code>display: grid;</code> to the <code>body</code> element, resulting in the 4 child elements, <code>header</code>, <code>main</code>, <code>aside</code> and <code>footer</code>, becoming grid items. However, the content within the <code>main</code> element are <em>not</em> grid items. 
  </p>

  <svg style="max-height:20em;" viewBox="0 0 625 518"><defs><path id="a1" d="M0 0h615v460H0z"/><mask id="b1" width="625" height="470" x="-5" y="-5"><path fill="#fff" d="M-5-5h625v470H-5z"/><use xlink:href="#a1"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 53)"><use fill="#D8D8D8" xlink:href="#a1"/><use stroke="#595959" stroke-width="10" mask="url(#b1)" xlink:href="#a1"/></g><path stroke="#595959" stroke-width="5" d="M157.5 53v456.993M312.5 53v456.993M467.5 53v456.993M5 155.5h615M5 410.5h615" stroke-linecap="square"/><path fill="#F8E71C" fill-opacity=".75" d="M5 413h615v100H5z"/><path fill="#7ED321" fill-opacity=".75" d="M5 53h615v100H5z"/><path fill="#4A90E2" fill-opacity=".75" d="M5 158h460v250H5z"/><path fill="#F6A623" fill-opacity=".75" d="M470 158h150v250H470z"/><g fill="#000"><text fill-opacity=".4" font-size="16" transform="translate(41 172)"><tspan x="118" y="16">All the goodness and the heroisms will </tspan> <tspan x="118" y="40">rise up again, then be cut down again </tspan> <tspan x="118" y="64">and rise up. It isn’t that the evil thing </tspan> <tspan x="118" y="88">wins — it never will — but that it </tspan> <tspan x="118" y="112">doesn’t die.</tspan></text><path fill-opacity=".3" d="M41 172h103v114H41z"/><text fill-opacity=".4" font-size="16" transform="translate(41 172)"><tspan x="0" y="143">The essence of totalitarian government, and perhaps </tspan> <tspan x="0" y="167">the nature of every bureaucracy, is to make </tspan> <tspan x="0" y="191">functionaries and mere cogs in the administrative </tspan> <tspan x="0" y="215">machinery out of men, and thus to dehumanize them.</tspan></text></g><text fill="#000" font-size="24" transform="translate(30 -10)"><tspan x="246.44" y="122">header</tspan></text><text fill="#000" font-size="24" transform="translate(30 -10)"><tspan x="184.118" y="302">main</tspan></text><text fill="#000" font-size="24" transform="translate(25 -10)"><tspan x="493.47" y="303">aside</tspan></text><text fill="#000" font-size="24" transform="translate(30 -10)"><tspan x="253.172" y="482">footer</tspan></text><text fill="#000" font-size="24" transform="translate(30 -10)"><tspan x=".278" y="45">body</tspan></text></g></svg>

  <h3 id="section_explicit-implicit-grid">Explicit Grid and Implicit Grid</h3>

  <p>
      The <strong>explicit grid</strong> is what we define using the relevant CSS grid properties, like <code>grid-template-rows</code>, <code>grid-template-columns</code> and <code>grid-template-areas</code>. But say you specified a grid with 2 rows and 3 columns, then placed an item outside this grid. The browser will create an <strong>implicit grid</strong> to hold that item.
  </p>

  <pre><code>.grid-container {
  display: grid;
  grid-template-columns: 150px 150px 150px; /* three rows  */
  grid-template-rows: 150px 150px; /* two columns  */
}

.item {
  grid-column: 5 / 6; /* grid-column-start: 5; grid-column-end: 6;  */
  grid-row:  2 / 3; /* grid-row-start: 2; grid-row-end: 3;  */
}</code></pre>

  <p>
      In a simple 3x2 grid, the grid column lines only go up to 4. But if we place an item in the 5th column, the browser will add 2 implicit columns (shown by the blue dashed lines on the grid) to accommodate this item.
  </p>

  <svg style="max-height:15em;" viewBox="0 0 841 386"><defs><path id="a5" d="M465 0h305v305H465z"/><mask id="c5" width="315" height="315" x="-5" y="-5"><path fill="#fff" d="M460-5h315v315H460z"/><use xlink:href="#a5"/></mask><path id="b5" d="M0 0h460v305H0z"/><mask id="d5" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#b5"/></mask></defs><g fill="none" fill-rule="evenodd"><text fill="#000" font-size="24" transform="translate(783 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(783 -7)"><tspan x="45.3" y="177">2</tspan></text><text fill="#000" font-size="24" transform="translate(783 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M783 8.5h35m-35 155h35m-35 155h35"/><g transform="translate(8 11)"><use stroke="#4A90E2" stroke-width="10" mask="url(#c5)" stroke-dasharray="10" xlink:href="#a5"/><use fill="#D8D8D8" xlink:href="#b5"/><use stroke="#595959" stroke-width="10" mask="url(#d5)" xlink:href="#b5"/><path stroke="#595959" stroke-width="5" d="M307.5 0v305M0 152.5h460" stroke-linecap="square"/><path stroke="#4A90E2" stroke-width="5" d="M467.5 152.5h300" stroke-linecap="square" stroke-dasharray="5 9"/><path stroke="#595959" stroke-width="5" d="M152.5 0v305" stroke-linecap="square"/><path stroke="#4A90E2" stroke-width="5" d="M617.5 2.5v300" stroke-linecap="square" stroke-dasharray="5 9"/></g><path stroke="#979797" stroke-width="3" d="M5.5 321v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="464.3" y="64">4</tspan></text><path stroke="#979797" stroke-width="3" d="M625.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="619.3" y="64">5</tspan></text><path stroke="#979797" stroke-width="3" d="M780.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="774.3" y="64">6</tspan></text><path fill="#7ED321" fill-opacity=".75" d="M628 166h150v150H628z"/><text fill="#000" font-size="36" transform="translate(628 166)"><tspan x="33.294" y="84">.item</tspan></text></g></svg>

  <p>
      The size of these implicit grid tracks can be specified with the <code>grid-auto-columns</code> and <code>grid-auto-rows</code> properties. If these properties are not set, their default value is <strong>auto</strong>, which results in the implicit columns filling up the available space equally. For implicit rows that do not have content, they will have a height of 0, which is the same as if you declared an empty <code>div</code> element.
  </p>

  <p>
      An interesting thing about implicit grid tracks is that once they are created, grid items which are not explicitly placed will fill up accordingly. Say we have a grid container with 10 child elements and the grid is set up like so:
  </p>

  <pre>.grid {
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
  grid-auto-columns: 50px 75px;
  grid-auto-flow: column;
}

.item {
  grid-column: 8;
}</pre>

  <svg style="max-height:15em;" viewBox="0 0 856 386"><defs><path id="a12" d="M310 0h475v305H310z"/><mask id="c12" width="485" height="315" x="-5" y="-5"><path fill="#fff" d="M305-5h485v315H305z"/><use xlink:href="#a12"/></mask><path id="b12" d="M0 0h305v305H0z"/><mask id="d12" width="315" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h315v315H-5z"/><use xlink:href="#b12"/></mask></defs><g fill="none" fill-rule="evenodd"><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="45.3" y="189">2</tspan></text><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M798 8.5h35m-35 155h35m-35 155h35"/><g transform="translate(8 11)"><use stroke="#4990E2" stroke-width="10" mask="url(#c12)" stroke-dasharray="10" xlink:href="#a12"/><use fill="#D8D8D8" xlink:href="#b12"/><use stroke="#595959" stroke-width="10" mask="url(#d12)" xlink:href="#b12"/><path stroke="#595959" stroke-width="5" d="M0 152.5h305" stroke-linecap="square"/><path stroke="#4990E2" stroke-width="5" d="M312.5 152.5h475" stroke-linecap="square" stroke-dasharray="5 9"/><path stroke="#595959" stroke-width="5" d="M152.5 0v305" stroke-linecap="square"/><path stroke="#4990E2" stroke-width="5" d="M362.5 2.5v300m105-300v300m55-300v300m105-300v300m55-300v300" stroke-linecap="square" stroke-dasharray="5 9"/></g><path stroke="#979797" stroke-width="3" d="M5.5 321v35m155-35v35m155-35v35m55-35v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="363.3" y="64">4</tspan></text><path stroke="#979797" stroke-width="3" d="M475.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="469.3" y="64">5</tspan></text><path stroke="#979797" stroke-width="3" d="M530.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="524.3" y="64">6</tspan></text><path stroke="#979797" stroke-width="3" d="M635.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="630.3" y="64">7</tspan></text><path stroke="#979797" stroke-width="3" d="M690.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="687.3" y="64">8</tspan></text><path stroke="#979797" stroke-width="3" d="M795.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="790.3" y="64">9</tspan></text><path fill="#7ED321" fill-opacity=".75" d="M693 11h100v150H693zM8 11h150v150H8zm0 155h150v150H8zM163 11h150v150H163zm0 155h150v150H163zM318 11h50v150h-50zm0 155h50v150h-50zM478 11h50v150h-50zm-105 0h100v150H373zm0 155h100v150H373z"/><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="714.204" y="99">.item</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="26.44" y="53">A</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="27.22" y="208">B</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="392.66" y="53">H</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="184.124" y="53">C</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="183.116" y="208">D</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="334.76" y="53">E</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="335.024" y="208">F</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="710.712" y="53">G</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="497.44" y="53">J</tspan></text><text fill="#284B00" font-size="24" transform="translate(-2 -7)"><tspan x="397.224" y="208">I</tspan></text></g></svg>

  <p>
      By placing a grid item at grid line 8, the browser generates 6 more implicit grid columns based on the values set on the <code>grid-auto-columns</code> property. The items that are not explicitly placed then fill up the implicit tracks accordingly.
  </p>

  <h2 id="section_grid-container-properties">Properties related to the Grid Container</h2>

  <h3 id="section_grid-template-columns-rows">The <code>grid-template-columns</code> and <code>grid-template-rows</code> Properties</h3>
  <pre>grid-template-columns: none | &lt;track-list&gt; | &lt;auto-track-list&gt;
grid-template-rows: none | &lt;track-list&gt; | &lt;auto-track-list&gt;</pre>

  <p>
      These 2 properties specify the size of the grid tracks and line names. The property value is expressed as a space-separated list, known as a track list. The <code>grid-template-columns</code> property defines the track list for all the columns in the grid, while the <code>grid-template-rows</code> property defines the track list for all the rows in the grid. Line names are optional. 
  </p>

  <p>
      Because Grid was made to be very flexible in terms of how developers can define very customised grids, there are many different options available to define the values of <code>grid-template-columns</code> and <code>grid-template-rows</code>. The possible values and syntax forms have the following meanings:
  </p>

  <dl>
    <dt>none</dt>
    <dd>
      <strong>This is the initial value.</strong> No explicit grid tracks are created.
    </dd>

    <dt>&lt;track-list&gt;</dt>
    <dd>
        <p>
            A list of values that specify the size of each grid track, and grid line names, which are optional. Syntax is as follows:
        </p>

        <pre>[ &lt;line-names&gt;? [ &lt;track-size&gt; | &lt;track-repeat&gt; ] ]+ &lt;line-names&gt;?</pre>

        <h4 id="track_size">&lt;track-size&gt;</h4>

        <p>There are 3 ways you can define &lt;track-size&gt;.</p>
        <ol>
          <li>
            <code id="track_breadth">&lt;track-breadth&gt;</code>
            <ul>
              <li>Can be a CSS length or percentage, like 250px or 20%</li>
              <li>
                <p>Can be a flexible length, declared using the fr unit, which takes up a share of the remaining free space in proportion to its flex factor. For example, given a grid container of 750px with 3 columns of 150px, 1fr and 2fr respectively. The flexibly sized columns will take up the remaining 600px in the ratio of 1:2, so the second column takes up 200px and the third column takes up 400px.</p>
                <pre>.grid {
  display: grid;
  width: 750px;
  grid-template-columns: 150px 1fr 2fr;
}</pre>
                <svg viewBox="0 0 770 135"><defs><path id="a8" d="M0 0h760v125H0z"/><mask id="b8" width="770" height="135" x="-5" y="-5"><path fill="#fff" d="M-5-5h770v135H-5z"/><use xlink:href="#a8"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a8"/><use stroke="#595959" stroke-width="10" mask="url(#b8)" xlink:href="#a8"/></g><path stroke="#595959" stroke-width="5" d="M362.5 5l.12 125M157.5 5v125" stroke-linecap="square"/><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="21" y="72">150px</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="534" y="72">2fr</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="229" y="72">1fr</tspan></text><path stroke="#9012FE" stroke-width="2" d="M165 120h190m-179.2 3l-10.8-3 10.8-3m168.4 6l10.8-3-10.8-3m25.8 3h390m-379.2 3l-10.8-3 10.8-3m368.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="18" transform="translate(5 5)"><tspan x="228" y="109">200px</tspan></text><text fill="#000" font-size="18" transform="translate(5 5)"><tspan x="534" y="109">400px</tspan></text></g></svg>
              </li>
              <li>Can be the keyword <code>min-content</code>, which is the smallest size possible that does not lead to overflow.</li>
              <li>Can be the keyword <code>max-content</code>, which is the minimum size required to fit around the contents</li>
              <li><p>Can be the keyword <code>auto</code>, which will fill up the remaining space available</p>
              <pre>.grid {
  display: grid;
  grid-template-columns: min-content max-content auto;
}</pre>
                <svg viewBox="0 0 860 343"><defs><path id="a7" d="M0 121h850v125H0z"/><mask id="b7" width="860" height="135" x="-5" y="-5"><path fill="#fff" d="M-5 116h860v135H-5z"/><use xlink:href="#a7"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 -10)"><use fill="#D8D8D8" xlink:href="#a7"/><use stroke="#595959" stroke-width="10" mask="url(#b7)" xlink:href="#a7"/></g><path stroke="#595959" stroke-width="5" d="M95 111v125m265-125v125" stroke-linecap="square"/><text fill="#000" font-size="18" transform="translate(5 -10)"><tspan x="10" y="144">The cat </tspan> <tspan x="10" y="167">jumped </tspan> <tspan x="10" y="190">over </tspan> <tspan x="10" y="213">the </tspan> <tspan x="10" y="236">moon</tspan></text><text fill="#000" font-size="18" transform="translate(5 -10)"><tspan x="101" y="144">The cat jumped over the moon</tspan></text><text fill="#000" font-size="18" transform="translate(-25 -10)"><tspan x="396" y="144">The cat jumped over the moon</tspan></text><text fill="#000" font-size="36" transform="translate(5 -10)"><tspan x="117" y="352">max-content</tspan></text><text fill="#000" font-size="36" transform="translate(5 -10)"><tspan x="117" y="37">min-content</tspan></text><text fill="#000" font-size="36" transform="translate(5 -10)"><tspan x="585" y="352">auto</tspan></text><path stroke="#000" stroke-width="5" d="M47.05 81.182C45.93 49.152 63.546 16.472 105.69 15M34.5 69.5l12 17m13-17l-12 17m182 164l-16 18m16 37v-55m0 0l16 18m381-18l-16 18m16 37v-55m0 0l16 18" stroke-linecap="round"/></g></svg>

              </li>
            </ul>
          </li>
          <li>
            <code>minmax( &lt;inflexible-breadth&gt; , &lt;track-breadth&gt; )</code>
            <p>Can be a range as defined by the <code>minmax()</code> function, where the first value is the minimum and the second value is the maximum. For this case, the minimum value cannot be a flexible length, so you can use all the types of values as <code>&lt;track-breadth&gt;</code> except flexible units.</p>
          </li>
          <li>
            <code>fit-content( &lt;length-percentage&gt; )</code>
          </li>
        </ol>

        <h4>&lt;track-repeat&gt;</h4>

        <p>As for <code>&lt;track-repeat&gt;</code>, it means we can have repeating <code>&lt;track-size&gt;</code>s. We can do that with the <code>repeat()</code> notation, which is a helpful function that let's us specify a large number of columns or rows that follow a similar pattern. The syntax for <code>&lt;track-repeat&gt;</code> is as follows:</p>

        <pre>repeat( [ &lt;positive-integer&gt; ] , [ &lt;line-names&gt;? &lt;track-size&gt; ]+ &lt;line-names&gt;? )</pre>

        <p>Say we want the pattern of a 30px narrow column and a 100px wide column repeated 4 times. There are 2 ways to declare this:</p>

        <pre>grid-template-columns: 30px 100px 30px 100px 30px 100px 30px 100px;

/* same as above but with the repeat() function */
grid-template-columns: repeat(4, 30px 100px);</pre>

        <h4 id="line-names">&lt;line-names&gt;</h4>

        <p>
            If you're creating a more complicated grid, for example, to layout the entire website, it might be helpful to name the grid lines to make the grid code easier to understand. Lines names can be any string except ‘span’, which is a keyword. Grid lines can have more than 1 name.
        </p>

        <pre>grid-template-columns: [first sidebar-start] 250px [content-start] 1fr [last];
grid-template-rows: [first header-start] 100px [content-start] 1fr [footer-start] 100px [last];</pre>
        <svg viewBox="0 0 837 454"><defs><path id="a6" d="M0 0h460v305H0z"/><mask id="b6" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#a6"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(99 8)"><use fill="#D8D8D8" xlink:href="#a6"/><use stroke="#595959" stroke-width="10" mask="url(#b6)" xlink:href="#a6"/></g><path stroke="#595959" stroke-width="5" d="M99 60.5h460m-460 200h460M226.5 8v305" stroke-linecap="square"/><text fill="#000" font-size="18" transform="translate(564 -4)"><tspan x="80" y="18">1 / first / header-start</tspan></text><text fill="#000" font-size="18" transform="translate(564 -4)"><tspan x="80" y="74">2 / content-start</tspan></text><text fill="#000" font-size="18" transform="translate(564 -4)"><tspan x="79" y="327">4 / last</tspan></text><path stroke="#979797" stroke-width="3" d="M564 5.5h70m-70 55h70m-70 255h70"/><text fill="#000" font-size="18" transform="translate(564 -4)"><tspan x="79" y="272">3 / footer-start</tspan></text><path stroke="#979797" stroke-width="3" d="M564 260.5h70M96.5 318v70m130-70v105m335-105v70"/><text fill="#000" font-size="18" transform="translate(-2 318)"><tspan x=".247" y="99">1 / first / sidebar-start</tspan></text><text fill="#000" font-size="18" transform="translate(-2 318)"><tspan x="156.925" y="133">2 / content-start</tspan></text><text fill="#000" font-size="18" transform="translate(-2 318)"><tspan x="532.386" y="99">3 / last</tspan></text><text fill="#000" font-size="14" transform="translate(-2 -4)"><tspan x="142.346" y="358">150px</tspan></text><path stroke="#9012FE" stroke-width="2" d="M101.5 335h120m-109.2 3l-10.8-3 10.8-3m98.4 6l10.8-3-10.8-3M584 10.5v45m-3-34.2l3-10.8 3 10.8m-6 23.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="14" transform="translate(-2 -4)"><tspan x="387.074" y="358">1fr</tspan></text><text fill="#000" font-size="14" transform="translate(-2 -4)"><tspan x="599.046" y="41">50px</tspan></text><text fill="#000" font-size="14" transform="translate(-2 -4)"><tspan x="599.074" y="170">1fr</tspan></text><path stroke="#9012FE" stroke-width="2" d="M584 265.5v45m-3-34.2l3-10.8 3 10.8m-6 23.4l3 10.8 3-10.8m-3-234.2v190m-3-179.2l3-10.8 3 10.8m-6 168.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="14" transform="translate(-2 -4)"><tspan x="599.046" y="296">50px</tspan></text><path stroke="#9012FE" stroke-width="2" d="M231.5 335h325m-314.2 3l-10.8-3 10.8-3m303.4 6l10.8-3-10.8-3" stroke-linecap="square"/></g></svg>

    </dd>

    <dt>&lt;auto-track-list&gt;</dt>
    <dd>
      <p>
          A list of values that specify the size of each grid track, and grid line names, which are optional. Syntax is as follows:
      </p>

      <pre>[ &lt;line-names&gt;? [ &lt;fixed-size&gt; | &lt;fixed-repeat&gt; ] ]* &lt;line-names&gt;? &lt;auto-repeat&gt;</pre>

      <h4>&lt;fixed-size&gt;</h4>

      <p>There are 3 ways you can define &lt;fixed-size&gt;.</p>
      <ol>
        <li>
          <code>&lt;fixed-breadth&gt;</code>
          <p>Can be any CSS length or percentage value</p>
        </li>
        <li>
          <code>minmax( &lt;fixed-breadth&gt; , &lt;track-breadth&gt; )</code>
          <p>Can be a range as defined by the <code>minmax()</code> function, where the first value is the minimum and the second value is the maximum. For this case, the minimum value must be a <code>&lt;fixed-breadth&gt;</code>, while the maximum value can be any values allowed for <a href="#track_breadth"><code>&lt;track-breadth&gt;</code></a></p>
        </li>
        <li>
          <code>minmax( &lt;inflexible-breadth&gt; , &lt;fixed-breadth&gt; )</code>
          <p>Can be a range as defined by the <code>minmax()</code> function, where the first value is the minimum and the second value is the maximum. For this case, the minimum value cannot be a flexible unit, while the maximum value must be a <code>&lt;fixed-breadth&gt;</code></p>
        </li>
      </ol>

      <h4>&lt;fixed-repeat&gt;</h4>

      <pre>repeat( [ &lt;positive-integer&gt; ] , [ &lt;line-names&gt;? &lt;fixed-size&gt; ]+ &lt;line-names&gt;? )</pre>

      <p>By using the <code>repeat()</code> notation, we can create a grid where we can specify how many times a fixed-size grid column or row should be repeated.</p>

      <h4>&lt;auto-repeat&gt;</h4>

      <pre>repeat( [ auto-fill | auto-fit ] , [ &lt;line-names&gt;? &lt;fixed-size&gt; ]+ &lt;line-names&gt;? )</pre>

      <p>By using the <code>repeat()</code> notation, we can create a grid where a fixed-size grid column or row can be repeated to fill up the available space.</p>

      <p>The <code>auto-fill</code> keyword will generate as many columns as will fit the available space without causing the grid to overflow, and the <code>auto-fit</code> keyword behaves similarly. The difference is <code>auto-fit</code> will collapse any empty repeated tracks (means their size is 0px).</p>
     
    </dd>
  </dl>

  <h3 id="section_grid-template-areas">The <code>grid-template-area</code> Property</h3>
  <pre>grid-template-areas: none | &lt;string&gt;+</pre>
  
  <p>This property defines named grid areas and provides a visualisation of the grid structure, which may help make underlying code easier to understand.

  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>none</dt>
    <dd>
      <strong>This is the initial value.</strong> No explicit grid tracks are created, and hence no named grid areas are defined.
    </dd>

    <dt>&lt;string&gt;+</dt>
    <dd>
      <p>Each separate string creates a row while each word in the string creates a column. All strings must have the same number of words, otherwise the declaration is invalid. Using a sequence of one or more '.' (U+002E FULL STOP) represents a null cell token, which is an unnamed area in the grid. This is easier to understand with some example code:</p>
      <pre>.grid-container {
  display: grid;
  grid-template-areas: "logo stats"
                       "score stats"
                       "board board"
                       "... controls";
}</pre>
      <svg style="max-height:20em;" viewBox="0 0 560 690"><defs><path id="a9" d="M0 0h550v680H0z"/><mask id="b9" width="560" height="690" x="-5" y="-5"><path fill="#fff" d="M-5-5h560v690H-5z"/><use xlink:href="#a9"/></mask></defs><g fill="none" fill-rule="evenodd"><path fill="#7ED321" fill-opacity=".75" d="M5 5h180v100H5z"/><path fill="#F6A623" fill-opacity=".75" d="M190 5h365v150H190z"/><path fill="#F8E81C" fill-opacity=".75" d="M5 160h550v455H5z"/><path fill="#D0011B" fill-opacity=".75" d="M190 685h365v-65H190z"/><path fill="#4990E2" fill-opacity=".75" d="M5 110h180v45H5z"/><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="46" y="59">Logo</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="323" y="84">Stats</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="41" y="140">Score</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="222" y="392">Board</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="291" y="657">Controls</tspan></text><g stroke="#595959" transform="translate(5 5)"><use stroke-width="10" mask="url(#b9)" stroke-dasharray="10" xlink:href="#a9"/><path stroke-width="5" d="M182.5 0v680M0 102.5h550m-550 50h550M0 612.5h550" stroke-linecap="square" stroke-dasharray="5 10"/></g></g></svg>

      <p>We can then assign grid items to these defined named areas like so:</p>
      <pre>.logo { grid-area: logo; }
.score { grid-area: score; }
.stats { grid-area: stats; }
.board { grid-area: board; }
.controls { grid-area: controls; }</pre>
    </dd>
  </dl>

  <h3 id="section_grid-template">The <code>grid-template</code> Property</h3>
  <pre>grid-template: none | [ &lt;‘grid-template-rows’&gt; / &lt;‘grid-template-columns’&gt; ] | [ &lt;line-names&gt;? &lt;string&gt; &lt;track-size&gt;? &lt;line-names&gt;? ]+ [ / &lt;explicit-track-list&gt; ]?</pre>

  <p>This is a shorthand for setting <code>&lt;‘grid-template-columns’&gt;</code>, <code>&lt;‘grid-template-rows’&gt;</code> and <code>&lt;‘grid-template-areas’&gt;</code> in a single declaration.</p>
  <p>
    The possible values and syntax forms have the following meanings:
  </p>
  <dl>
    <dt>none</dt>
    <dd>
      This sets all 3 properties to their initial values (which is <code>none</code>)
    </dd>

    <dt>&lt;‘grid-template-rows’&gt; / &lt;‘grid-template-columns’&gt;</dt>
    <dd>
      This sets the <code>&lt;‘grid-template-rows’&gt;</code> and <code>&lt;‘grid-template-columns’&gt;</code> to specified values, while <code>&lt;‘grid-template-areas&gt;</code> is set to <code>none</code>. Note that the order of the syntax is important, with the first value is for <code>&lt;‘grid-template-rows’&gt;</code> and the second value is for <code>&lt;‘grid-template-columns’&gt;</code>.
    </dd>

    <dt>[ &lt;line-names&gt;? &lt;string&gt; &lt;track-size&gt;? &lt;line-names&gt;? ]+ [ / &lt;explicit-track-list&gt; ]?</dt>
    <dd>
      This sets the <code>&lt;‘grid-template-areas’&gt;</code> to the listed strings. The <code>&lt;‘grid-template-rows’&gt;</code> will be set to the <code>&lt;track-size&gt;</code>s that come after each string. The grid lines will also be named based on the line names sandwiching each string. The <code>&lt;‘grid-template-columns’&gt;</code> will be set to the track listing specified after the slash. If nothing is specified after the slash, it will be set to <code>none</code>.
      <pre>grid-template: [header-top] "a a a" [header-bottom] [main-top] "b b b" 1fr [main-bottom] / auto 1fr auto;</pre>
      <p>is equivalent to</p>

      <pre>grid-template-areas: "a a a"
                     "b b b";
grid-template-rows: [header-top] auto [header-bottom main-top] 1fr [main-bottom];
grid-template-columns: auto 1fr auto;</pre>

      <svg viewBox="0 0 955 419"><defs><path id="a10" d="M0 0h460v305H0z"/><mask id="b10" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#a10"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(433 45)"><use fill="#D8D8D8" xlink:href="#a10"/><use stroke="#595959" stroke-width="10" mask="url(#b10)" xlink:href="#a10"/></g><path stroke="#595959" stroke-width="5" d="M740.5 45v305M433 197.5h460M585.5 45v305" stroke-linecap="square"/><text fill="#000" font-size="14" transform="translate(0 -3)"><tspan x="491.208" y="14">auto</tspan></text><path stroke="#9012FE" stroke-width="2" d="M435 23h145m-134.2 3L435 23l10.8-3m123.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="14" transform="translate(0 -3)"><tspan x="802.208" y="14">auto</tspan></text><path stroke="#9012FE" stroke-width="2" d="M746 23h145m-134.2 3L746 23l10.8-3m123.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="14" transform="translate(0 -3)"><tspan x="653.074" y="14">1fr </tspan></text><path stroke="#9012FE" stroke-width="2" d="M591 23h145m-134.2 3L591 23l10.8-3m123.4 6l10.8-3-10.8-3" stroke-linecap="square"/><path stroke="#979797" stroke-width="3" d="M430.5 5v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="495" y="287">b</tspan></text><text fill="#000" font-size="18" transform="translate(20 30)"><tspan x="208.06" y="18">header-top / a-start </tspan></text><text fill="#000" font-size="18" transform="translate(55 30)"><tspan x=".934" y="173">header-bottom / a-end / main-top / b-start</tspan></text><text fill="#000" font-size="18" transform="translate(20 30)"><tspan x="194.686" y="328">main-bottom / b-end</tspan></text><path stroke="#979797" stroke-width="3" d="M393 42.5h35m-35 155h35m-35 155h35"/><text fill="#000" font-size="14" transform="translate(0 -3)"><tspan x="382.074" y="281">1fr </tspan></text><text fill="#000" font-size="14" transform="translate(0 -3)"><tspan x="372.208" y="132">auto</tspan></text><path stroke="#979797" stroke-width="3" d="M430.5 355v35m465-35v35"/><text fill="#000" font-size="18" transform="translate(0 -3)"><tspan x="361.065" y="419">a-start / b-start</tspan></text><text fill="#000" font-size="18" transform="translate(0 -3)"><tspan x="833.399" y="419">a-end / b-end</tspan></text><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="497" y="132">a</tspan></text><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="653" y="132">a</tspan></text><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="810" y="132">a</tspan></text><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="652" y="287">b</tspan></text><text fill="#000" font-size="36" transform="translate(0 -3)"><tspan x="810" y="287">b</tspan></text><path stroke="#9012FE" stroke-width="2" d="M413 47.5v145m-3-134.2l3-10.8 3 10.8m-6 123.4l3 10.8 3-10.8m-3 20.3v145m-3-134.2l3-10.8 3 10.8m-6 123.4l3 10.8 3-10.8" stroke-linecap="square"/></g></svg>
    </dd>
  </dl>

  <h3 id="section_grid-column-row-gap">The <code>grid-column-gap</code> and <code>grid-row-gap</code> Properties</h3>
  <pre>grid-column-gap: &lt;length&gt; | &lt;percentage&gt;
grid-row-gap: &lt;length&gt; | &lt;percentage&gt;</pre>

  <p>These properties specify the gutter size between grid columns and grid rows, respectively. Gutters do not appear on the edges of the grid, which means there is no butter before the first track or after the last track.</p>
  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>&lt;length-percentage&gt;</dt>
    <dd>
        Can be any CSS length or as a percentage of the parent container's width.
    </dd>
  </dl>

  <h3 id="section_grid-gap">The <code>grid-gap</code> Property</h3>
  <pre>grid-gap: &lt;‘grid-row-gap’&gt; &lt;‘grid-column-gap’&gt;?</pre>
  <p>This is a shorthand for setting &lt;‘grid-row-gap’&gt; and &lt;‘grid-column-gap’&gt; in a single declaration. The first value sets the &lt;‘grid-row-gap’&gt; and the second value sets &lt;‘grid-column-gap’&gt;. If the &lt;‘grid-column-gap’&gt; is not present, it will take the same value as &lt;‘grid-row-gap’&gt;.</p>
  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>&lt;‘grid-row-gap’&gt;</dt>
    <dd>
        Can be any CSS length or as a percentage of the parent container's width.
    </dd>

    <dt>&lt;‘grid-column-gap’&gt;</dt>
    <dd>
        Can be any CSS length or as a percentage of the parent container's width.
    </dd>
  </dl>

  <h3 id="section_grid-auto-columns-rows">The <code>grid-auto-columns</code> and <code>grid-auto-rows</code> Properties</h3>
  <pre>grid-auto-columns: &lt;track-size&gt;+
grid-auto-rows: &lt;track-size&gt;+</pre>

  <p>When a grid item is placed in a column or row that was not defined by <code>&lt;‘grid-template-columns’&gt;</code> or <code>&lt;‘grid-template-rows&gt;</code>, implicit grid tracks are created to hold these items. We can control the size of these implicit grid tracks with the <code>&lt;‘grid-auto-columns’&gt;</code> and <code>&lt;‘grid-auto-rows&gt;</code> properties. We can also specify multiple track sizes for these implicit grid tracks.</p>

  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>&lt;track-size&gt;+</dt>
    <dd>
        <p>Can be any acceptable values for <a href="#track_size"<code>&lt;track-size&gt;</code></a>. Each set of <code>&lt;track-size&gt;</code>s can be repeated as a space-separated list.</p>

        <pre>.grid {
  display: grid;
  grid-template-columns: 150px 150px;
  grid-auto-columns: 50px 100px;
}

.item {
  grid-column: 8;
}</pre>

        <svg style="max-height:15em;" viewBox="0 0 856 386"><defs><path id="a11" d="M310 0h475v305H310z"/><mask id="c11" width="485" height="315" x="-5" y="-5"><path fill="#fff" d="M305-5h485v315H305z"/><use xlink:href="#a11"/></mask><path id="b11" d="M0 0h305v305H0z"/><mask id="d11" width="315" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h315v315H-5z"/><use xlink:href="#b11"/></mask></defs><g fill="none" fill-rule="evenodd"><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="45.3" y="189">2</tspan></text><text fill="#000" font-size="24" transform="translate(798 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M798 8.5h35m-35 155h35m-35 155h35"/><g transform="translate(8 11)"><use stroke="#4A90E2" stroke-width="10" mask="url(#c11)" stroke-dasharray="10" xlink:href="#a11"/><use fill="#D8D8D8" xlink:href="#b11"/><use stroke="#595959" stroke-width="10" mask="url(#d11)" xlink:href="#b11"/><path stroke="#595959" stroke-width="5" d="M0 152.5h305" stroke-linecap="square"/><path stroke="#4A90E2" stroke-width="5" d="M312.5 152.5h475" stroke-linecap="square" stroke-dasharray="5 9"/><path stroke="#595959" stroke-width="5" d="M152.5 0v305" stroke-linecap="square"/><path stroke="#4A90E2" stroke-width="5" d="M362.5 2.5v300m105-300v300m55-300v300m105-300v300m55-300v300" stroke-linecap="square" stroke-dasharray="5 9"/></g><path stroke="#979797" stroke-width="3" d="M5.5 321v35m155-35v35m155-35v35m55-35v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="363.3" y="64">4</tspan></text><path stroke="#979797" stroke-width="3" d="M475.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="469.3" y="64">5</tspan></text><path stroke="#979797" stroke-width="3" d="M530.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="524.3" y="64">6</tspan></text><path stroke="#979797" stroke-width="3" d="M635.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="630.3" y="64">7</tspan></text><path stroke="#979797" stroke-width="3" d="M690.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="687.3" y="64">8</tspan></text><path stroke="#979797" stroke-width="3" d="M795.5 321v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="790.3" y="64">9</tspan></text><path fill="#7ED321" fill-opacity=".75" d="M693 11h100v150H693z"/><text fill="#000" font-size="24" transform="translate(-2 -7)"><tspan x="714.204" y="99">.item</tspan></text></g></svg>
    </dd>
  </dl>

  <h3 id="section_grid-auto-flow">The <code>grid-auto-flow</code> Property</h3>
  <pre>grid-auto-flow: [ row | column ] | dense</pre>
  <p>This property allows us to adjust how the automatic placement of grid items work when they are not explicitly positioned with any grid-placement properties.</p>
  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>row</dt>
    <dd>
      <strong>This is the initial value.</strong> The auto-placement algorithm will place grid items by filling each row and add new rows as needed.
    </dd>

    <dt>column</dt>
    <dd>
      The auto-placement algorithm will place grid items by filling each column and add new columns as needed.
    </dd>

    <dt>dense</dt>
    <dd>
      <p>This controls how closely packed the grid items will be. If specified, the algorithm will attempt to fit smaller grid items that appear later in the source order earlier in the grid. This will minimise the incidence of ‘holes‘ in the grid.</p>
      <p>If not specified, the browser will default to the ‘sparse‘ algorithm, which only fills up the grid in order, never back-tracking. This may result in ‘holes‘ in the grid, where grid items do not fit in certain grid areas.</p>
    </dd>
  </dl>

  <h3 id="section_grid">The <code>grid</code> Property</h3>
  <pre>grid-grid: &lt;‘grid-template’&gt; | &lt;‘grid-template-rows’&gt; / [ auto-flow && dense? ] &lt;‘grid-auto-columns’&gt;? | [ auto-flow && dense? ] &lt;‘grid-auto-rows’&gt;? / &lt;‘grid-template-columns’&gt;</pre>
  <p>This is a shorthand that sets all the explicit grid properties and all the implicit grid properties in a single declaration. It also resets any gutter properties set earlier in the cascade. It will impact the following 8 sub-properties:</p>
  <pre>/* Initial values of each sub-property */
grid-template-rows: none
grid-template-columns: none
grid-template-areas: none
grid-auto-rows: auto
grid-auto-columns: auto
grid-auto-flow: row
grid-column-gap: 0
grid-row-gap: 0</pre>
  <p>
    The possible values and syntax forms have the following meanings:
  </p>
  <dl>
    <dt>&lt;‘grid-template’&gt;</dt>
    <dd>
        Refer to the syntax for <a href="#section_grid-template"><code>&lt;‘grid-template’&gt;</code></a>
    </dd>

    <dt>&lt;‘grid-template-rows’&gt; / [ auto-flow && dense? ] &lt;‘grid-auto-columns’&gt;?</dt>
    <dd>
        <p>Used to explicitly set the <strong>grid row tracks</strong>, while specifying how to set the auto-repeat behaviour for grid column tracks. All other grid sub-properties, for example, the gutter properties, get reset to their initial values. We cannot set grid-auto-rows using this syntax form, it will be set to <code>auto</code>.</p>

        <pre>.grid {
  grid: 50px 75px / auto-flow;
}

/* is equivalent to */
.grid {
  grid-template-rows: 50px 75px;
  grid-template-columns: none; /* cannot be set explicitly with this syntax form */
  grid-template-areas: none; /* cannot be set explicitly with this syntax form */
  grid-auto-rows: auto; /* cannot be set explicitly with this syntax form */
  grid-auto-columns: auto;
  grid-auto-flow: column; /* can only set dense or not */
  grid-column-gap: 0; /* cannot be set explicitly with this syntax form */
  grid-row-gap: 0; /* cannot be set explicitly with this syntax form */
}</pre>
    </dd>

    <dt>[ auto-flow && dense? ] &lt;‘grid-auto-rows’&gt;? / &lt;‘grid-template-columns’&gt;</dt>
    <dd>
        <p>Used to explicitly set the <strong>grid column tracks</strong>, while specifying how to set the auto-repeat behaviour for grid row tracks. All other grid sub-properties, for example, the gutter properties, get reset to their initial values. We cannot set grid-auto-columns using this syntax form, it will be set to <code>auto</code>.</p>

        <pre>.grid {
  grid: auto-flow dense / 30% 100px;
}

/* is equivalent to */
.grid {
  grid-template-rows: none; /* cannot be set explicitly with this syntax form */
  grid-template-columns: 30% 100px; 
  grid-template-areas: none; /* cannot be set explicitly with this syntax form */
  grid-auto-rows: auto; 
  grid-auto-columns: auto; /* cannot be set explicitly with this syntax form */
  grid-auto-flow: row dense; /* can only set dense or not */
  grid-column-gap: 0; /* cannot be set explicitly with this syntax form */
  grid-row-gap: 0; /* cannot be set explicitly with this syntax form */
}</pre>
    </dd>
  </dl>

  <h2 id="section_grid-items">Grid Items: Placing items in the Grid</h2>

  <h3>Summary of Properties related to Grid Items</h3>
  <ul>
    <li><a href="#section_grid-column-row-start-end"><code>grid-column-start</code>, <code>grid-column-end</code> and <code>grid-row-start</code>, <code>grid-row-end</code></a></li>
    <li><a href="#section_grid-column-row"><code>grid-column</code> and <code>grid-row</code></a></li>
    <li><a href="#section_grid-area"><code>grid-area</code></a></li>
  </ul>

  <p>
      Grid properties applied to the grid container are used to <a href="#section_grid-container">define the structure of the grid</a> while the grid properties applied to the grid items are used to position items in the grid. Where a grid item ends up on the grid depends on its <strong>grid position</strong> and <strong>grid span</strong>.
  </p>

  <p>
      Grid position defines the item's location on the grid. It can be explicitly specified via CSS properties or placed automatically by the browser via the auto-placement algorithm. Grid span defines how many grid tracks a grid item occupies. If not specified, every grid item's grid span will default to the value 1, which means it will take up the space of 1 grid cell.
  </p>

  <p>
      The browser will determine the position and size of the grid item based on the following 6 values:
  </p>

  <ul>
    <li>row-start line</li>
    <li>row-end line</li>
    <li>row span</li>
    <li>column-start line</li>
    <li>column-end line</li>
    <li>column span</li>
  </ul>

  <p>
      Specifying any 2 of the 3 values in the row dimension or in the column dimension will determine the third value. For example, if a grid item has a <code>grid-column-start</code> at grid line <code>1</code> and a <code>grid-column-end</code> at grid line <code>3</code>, then it is implied that this grid item has a grid span of <code>2</code>.
  </p>

  <p>
      The grid placement algorithm will handle values that don't make logical sense. If a grid item's end line comes before its start line, then the start and end lines will be swapped. If the start line and end line are the same, the end line will be ignored.
  </p>

  <pre>.grid__item { grid-column-start: 5; grid-column-end: 2; }
/* will be treated as */
.grid__item { grid-column-start: 2; grid-column-end: 5; }</pre>

  <p>
      If both the start line and end line have a span defined, the one applied on the end line will be ignored.
  </p>

  <pre>.grid__item { grid-column-start: span 3; grid-column-end: span 2; }
/* will be treated as */
.grid__item { grid-column-start: span 3; }</pre>

  <p>
      If the grid line is specified with only a span for a named line, it will be treated as span 1.
  </p>

  <pre>.grid__item { grid-column-start: span [foo]; }
/* will be treated as */
.grid__item { grid-column-start: span 1; }</pre>

  <h3 id="section_ordering-grid-items">Ordering grid items</h3>

  <p>
      If grid positions are not explicitly specified, grid items will be automatically placed into the available empty grid cell according to their source order in the HTML document. However, we are free to rearrange the visual presentation of our grid items using grid-placement properties. As is emphasised in the <a href="https://www.w3.org/TR/css-grid-1/#placement-a11y">CSS specification</a> itself, grid placement <em>only affects visual presentation</em>. Having the <strong>correct source order</strong> is absolutely critical for screen-readers, speech, keyboard navigation and other non-CSS user agents.
  </p>

  <p>
      It is advisable to have the main content appear first in the source order before additional columns for navigation or related links for improved accessibility. However, from a visual perspective, having the navigation appear before the main content is the most common design pattern. To improve site usability for users who are unable to navigate with a mouse, many sites use <a href="http://webaim.org/techniques/skipnav/">"Skip Navigation" links</a>, which is a link at the top of the page that allows users to jump straight to the main content.
  </p>

  <p>
      With CSS grid, we can now structure the markup of our document to have the main content appear first in the source order, before the navigation links and any other additional content. We can then use grid to visually place the navigation on the left or even above the main content without compromising usability for non-mouse users.
  </p>

  <p>
      Say we chose to structure our HTML with the main content appearing first in the source order like so:
  </p>

  <pre>&lt;body&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;main&gt;...&lt;/main&gt;
  &lt;nav&gt;...&lt;/nav&gt;
  &lt;aside&gt;...&lt;/aside&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/body&gt;</pre>

  <p>With Grid, it is possible to visually position the navigation on the grid in a way that it appears below the header yet above the main content.</p>

  <svg style="max-height:16em;" viewBox="0 0 625 470"><defs><path id="a34" d="M1 0h615v460H1z"/><mask id="b34" width="625" height="470" x="-5" y="-5"><path fill="#fff" d="M-4-5h625v470H-4z"/><use xlink:href="#a34"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(4 5)"><use fill="#D8D8D8" xlink:href="#a34"/><use stroke="#595959" stroke-width="10" mask="url(#b34)" xlink:href="#a34"/></g><path stroke="#595959" stroke-width="5" d="M467.5 5v456.993M5 82.5h615m-616 50h615M5 387.5h615" stroke-linecap="square"/><path fill="#D0011B" fill-opacity=".75" d="M5 390h615v75H5z"/><path fill="#7ED321" fill-opacity=".75" d="M5 5h615v75H5z"/><path fill="#4990E2" fill-opacity=".75" d="M5 85h615v45H5z"/><path fill="#F8E81C" fill-opacity=".75" d="M5 135h460v250H5z"/><path fill="#F5A623" fill-opacity=".75" d="M470 135h150v250H470z"/><text fill="#000" font-size="36" transform="translate(4 5)"><tspan x="247.44" y="51">header</tspan></text><text fill="#000" font-size="36" transform="translate(4 5)"><tspan x="185.118" y="269">main</tspan></text><text fill="#000" font-size="36" transform="translate(4 5)"><tspan x="275.92" y="116">nav</tspan></text><text fill="#000" font-size="36" transform="translate(4 5)"><tspan x="494.47" y="269">aside</tspan></text><text fill="#000" font-size="36" transform="translate(4 5)"><tspan x="254.172" y="436">footer</tspan></text></g></svg>

  <pre>body { 
  display: grid;
  grid: "header header"
        "nav nav"
        "content sidebar"
        "footer footer";
  grid-template-columns: 1fr 25%; 
}

header { grid-area: header; }
nav { grid-area: nav; }
footer { grid-area: footer; }</pre>

  <p>
      It is also possible to apply the <code>order</code> property to grid items, by controlling the order which grid items appear in the grid container. The default value of all items is 0. The <code>order</code> property, like explicit grid placement, only modifies the visual order. Keyboard navigation, or non-visual media like speech still follows the document's source order.
  </p>

  <h3 id="section_overlapping-grid-items">Overlapping grid items</h3>

  <p>
      Multiple items can be placed in the same grid cell. We can position grid items in a way that they overlap each other. Without specifying the <code>z-index</code> explicitly, by default, grid items that appear later in the source order will be rendered on the top (in the z-dimension). The following code will allow the grid items to be stacked like cascading windows.
  </p>

  <pre>&lt;div class="grid-container"&gt;
  &lt;div class="grid__item a"&gt;&lt;div class="box"&gt;&lt;/div&gt;Here is some text. Text is inline.&lt;/div&gt;
  &lt;div class="grid__item b"&gt;&lt;div class="box"&gt;&lt;/div&gt;Here is some text. Text is inline.&lt;/div&gt;
  &lt;div class="grid__item c"&gt;&lt;div class="box"&gt;&lt;/div&gt;Here is some text. Text is inline.&lt;/div&gt;
&lt;/div&gt;</pre>

  <svg style="max-height:15em;" viewBox="0 0 376 386"><defs><path id="a35" d="M0 0h305v305H0z"/><mask id="e35" width="315" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h315v315H-5z"/><use xlink:href="#a35"/></mask><path id="b35" d="M15 15h120v60H15z"/><mask id="f35" width="120" height="60" x="0" y="0" fill="#fff"><use xlink:href="#b35"/></mask><path id="c35" d="M15 15h120v60H15z"/><mask id="g35" width="120" height="60" x="0" y="0" fill="#fff"><use xlink:href="#c35"/></mask><path id="d35" d="M15 15h120v60H15z"/><mask id="h35" width="120" height="60" x="0" y="0" fill="#fff"><use xlink:href="#d35"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(8 11)"><use fill="#D8D8D8" xlink:href="#a35"/><use stroke="#595959" stroke-width="10" mask="url(#e35)" xlink:href="#a35"/></g><path stroke="#595959" stroke-width="5" d="M8 163.5h305M160.5 11v305" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="45.3" y="189">2</tspan></text><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M318 8.5h35m-35 155h35m-35 155h35M5.5 321v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="310.3" y="64">3</tspan></text><g transform="translate(8 11)"><path fill="#7ED321" d="M0 0h150v150H0z"/><use stroke="#000" stroke-width="4" mask="url(#f35)" stroke-dasharray="4" xlink:href="#b35"/><text fill="#000" font-size="12"><tspan x="15" y="93">Here is some text. </tspan> <tspan x="15" y="108">Text is inline, </tspan> <tspan x="15" y="123">which is different </tspan> <tspan x="15" y="138">from block.</tspan></text></g><g transform="translate(83 91)"><path fill="#4990E2" d="M0 0h150v150H0z"/><use stroke="#000" stroke-width="4" mask="url(#g35)" stroke-dasharray="4" xlink:href="#c35"/><text fill="#000" font-size="12"><tspan x="15" y="93">Here is some text. </tspan> <tspan x="15" y="108">Text is inline, </tspan> <tspan x="15" y="123">which is different </tspan> <tspan x="15" y="138">from block.</tspan></text></g><g transform="translate(163 166)"><path fill="#F6A623" d="M0 0h150v150H0z"/><use stroke="#000" stroke-width="4" mask="url(#h35)" stroke-dasharray="4" xlink:href="#d35"/><text fill="#000" font-size="12"><tspan x="15" y="93">Here is some text. </tspan> <tspan x="15" y="108">Text is inline, </tspan> <tspan x="15" y="123">which is different </tspan> <tspan x="15" y="138">from block.</tspan></text></g></g></svg>

  <pre>.grid-container {
  display: grid;
  grid-template-columns: 150px 150px;
  grid-template-rows: 150px 150px;
}

.grid__item {
  max-width: 150px;
}

.a {
  background-color: lime;
  grid-row: 1 / span 2;
  grid-column: 1 /span 2;
  align-self: start;
}

.b {
  background-color: skyblue;
  grid-row: 1 / span 2;
  grid-column: 1 /span 2;
  justify-self: center;
  align-self: center;
}

.c {
  background-color: orange;
  grid-row: 1 / span 2;
  grid-column: 1 /span 2;
  justify-self: end;
  align-self: end;
}</pre>

  <p>
      The <code>justify-self</code> and <code>align-self</code> properties make the size of the grid item fit its contents. If not set, the grid item will behave as though those values were set to stretch. By making each grid item span a square area of 4 grid cells, the <code>justify-self</code> and <code>align-self</code> can be used to position the grid item within this 4-cell area.
  </p>

  <p>
      It is also possible to change the stacking order of grid items with the <code>z-index</code> property. Just like positioned elements, the item with a higher <code>z-index</code> will display on the top of the stack. Together with the alignment properties mentioned earlier, we can achieve some pretty interesting visual effects.
  </p>

  <pre>&lt;div class="grid-container"&gt;
  &lt;div class="grid__item a"&gt;...&lt;/div&gt;
  &lt;div class="grid__item b"&gt;...&lt;/div&gt;
  &lt;div class="grid__item c"&gt;...&lt;/div&gt;
  &lt;div class="grid__item d"&gt;...&lt;/div&gt;
  &lt;div class="grid__item e"&gt;...&lt;/div&gt;
&lt;/div&gt;</pre>

  <svg style="max-height:15em;" viewBox="0 0 376 386"><defs><path id="a36" d="M0 0h305v305H0z"/><mask id="f36" width="315" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h315v315H-5z"/><use xlink:href="#a36"/></mask><path id="b36" d="M13 13h280v50H13z"/><mask id="g36" width="280" height="50" x="0" y="0" fill="#fff"><use xlink:href="#b36"/></mask><path id="c36" d="M15 15h60v60H15z"/><mask id="h36" width="60" height="60" x="0" y="0" fill="#fff"><use xlink:href="#c36"/></mask><path id="d36" d="M13 13h125v62.5H13z"/><mask id="i36" width="125" height="62.5" x="0" y="0" fill="#fff"><use xlink:href="#d36"/></mask><path id="e36" d="M30 30h90v90H30z"/><mask id="j36" width="90" height="90" x="0" y="0" fill="#fff"><use xlink:href="#e36"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(8 11)"><use fill="#D8D8D8" xlink:href="#a36"/><use stroke="#595959" stroke-width="10" mask="url(#f36)" xlink:href="#a36"/></g><path stroke="#595959" stroke-width="5" d="M8 163.5h305M160.5 11v305" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="45.3" y="24">1</tspan></text><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="45.3" y="189">2</tspan></text><text fill="#000" font-size="24" transform="translate(318 -7)"><tspan x="44.3" y="333">3</tspan></text><path stroke="#979797" stroke-width="3" d="M318 8.5h35m-35 155h35m-35 155h35M5.5 321v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 321)"><tspan x="310.3" y="64">3</tspan></text><g transform="translate(8 241)"><path fill="#7ED321" d="M0 0h305v75H0z"/><use stroke="#000" stroke-width="4" mask="url(#g36)" stroke-dasharray="4" xlink:href="#b36"/></g><g transform="translate(223 166)"><path fill="#4990E2" d="M0 0h90v150H0z"/><use stroke="#000" stroke-width="4" mask="url(#h36)" stroke-dasharray="4" xlink:href="#c36"/><text fill="#000" font-size="12"><tspan x="24.096" y="92">Here is </tspan> <tspan x="13.938" y="107">some text. </tspan> <tspan x="25.212" y="122">Text is </tspan> <tspan x="25.578" y="137">inline.</tspan></text></g><path fill="#F6A623" d="M133 11h180v120H133z"/><text fill="#000" font-size="12" transform="translate(155 11)"><tspan x="14.916" y="26">Here is some text. Text is </tspan> <tspan x="30" y="41">not block, it is inline. It </tspan> <tspan x="36" y="56">can be aligned to the </tspan> <tspan x="38.772" y="71">left, or aligned to the </tspan> <tspan x="24" y="86">right. You can also align </tspan> <tspan x="72" y="101">it in the centre.</tspan></text><g transform="translate(86 86)"><path fill="#D0011B" d="M0 0h150v150H0z"/><use stroke="#000" stroke-width="4" mask="url(#i36)" stroke-dasharray="4" xlink:href="#d36"/><text fill="#000" font-size="12"><tspan x="13" y="93">Here is some text. </tspan> <tspan x="13" y="108">Text is inline. Text is </tspan> <tspan x="13" y="123">not block. Here is </tspan> <tspan x="13" y="138">another line of text.</tspan></text></g><g transform="translate(8 11)"><circle cx="75" cy="75" r="75" fill="#F8E81C"/><use stroke="#000" stroke-width="4" mask="url(#j36)" stroke-dasharray="4" xlink:href="#e36"/></g></g></svg>

  <pre>.a {
  grid-column: 1 / span 2;
  grid-row: 2;
  align-self: end;
  background-color: lime;
}

.b {
  grid-column: 1;
  grid-row: 1;
  z-index: 10;
  background-color: yellow;
  border-radius: 50%;
}

.c {
  grid-column: 2;
  grid-row: 1;
  align-self: start;
  margin-left: -20px;
  background-color: orange;
  text-align: right;
}

.d {
  grid-column: 2;
  grid-row: 2;
  justify-self: end;
  align-self: start;
  background-color: skyblue;
  max-width: 80px;
}

.e {
  grid-column: 1 / span 2;
  grid-row: 1 / span 2;
  z-index: 5;
  justify-self: center;
  align-self: center;
  background-color: red;
  max-width: 100px;
}</pre>

  <h3 id="section_absolute-positioning">Absolutely Positioned Grid Items</h3>

  <p>It is possible to absolutely position grid items within their grid container by using <code>position: relative</code> on the grid container. However, applying an absolute position to a grid item takes it out of the normal document flow, which means it does not participate in the grid's layout and will not fill up grid cells during auto-placement.</p>

  <p>Absolutely positioned grid items can still be placed in specific grid cells using the grid placement properties, <code>grid-row</code> and <code>grid-column</code>, but it will not stretch to fill the whole grid cell, instead, the grid item shrinks to fit the size of its contents. They will <strong>not</strong> create implicit grid tracks when placed outside the explicit grid either, but can occupy already existing implicit grid tracks.</p>

  <p>The offsets of <code>top</code>, <code>right</code>, <code>bottom</code> and <code>left</code> can be used to place the grid items within the grid container as well. The offsets are calculated from the padding edge of the grid container.</p>

  <p>One of the engineers, <a href="https://blogs.igalia.com/mrego/">Manuel Rego Casasnovas</a>, who works on the implementation of Grid in Blink and Webkit wrote an in-depth article on <a href="https://blogs.igalia.com/mrego/2016/05/27/css-grid-layout-and-positioned-items/">CSS Grid Layout and positioned items</a> which explains this concept very thoroughly.</p>

  <h2 id="section_grid-item-properties">Properties related to Grid Items</h2>

  <h3 id="section_grid-column-row-start-end">The <code>grid-column-start</code>, <code>grid-column-end</code> and <code>grid-row-start</code>, <code>grid-row-end</code> Properties</h3>
  <pre>grid-column-start: auto | &lt;custom-ident&gt; | [ &lt;integer&gt; && &lt;custom-ident&gt;? ] | [ span && [ &lt;integer&gt; || &lt;custom-ident&gt; ] ]
grid-column-end: auto | &lt;custom-ident&gt; | [ &lt;integer&gt; && &lt;custom-ident&gt;? ] | [ span && [ &lt;integer&gt; || &lt;custom-ident&gt; ] ]
grid-row-start: auto | &lt;custom-ident&gt; | [ &lt;integer&gt; && &lt;custom-ident&gt;? ] | [ span && [ &lt;integer&gt; || &lt;custom-ident&gt; ] ]
grid-row-end: auto | &lt;custom-ident&gt; | [ &lt;integer&gt; && &lt;custom-ident&gt;? ] | [ span && [ &lt;integer&gt; || &lt;custom-ident&gt; ] ]</pre>

  <p>
      These four properties define the size of a grid item and where it should be placed in the grid. Together, they will specify which grid lines will form the edges of a grid item's grid area.
  </p>

  <ul>
    <li><code>grid-column-start</code>: indicates the column grid line where the grid item starts</li>
    <li><code>grid-column-end</code>: indicates the column grid line where the grid item ends</li>
    <li><code>grid-row-start</code>: indicates the row grid line where the grid item starts</li>
    <li><code>grid-row-end</code>: indicates the row grid line where the grid item ends</li>
  </ul>

  <p>
      The possible values have the following meanings:
  </p>

  <dl id="grid-line">
    <dt>auto</dt>
    <dd>
      <strong>This is the initial value.</strong> No grid line has been specified for this property, so the item will be automatically placed to fill up the grid and have a default span of 1.
    </dd>

    <dt>&lt;custom-ident&gt;</dt>
    <dd>
      Can be the numerical index of the grid line, or a <a href="#line-names">named grid line</a>.
    </dd>

    <dt>[ &lt;integer&gt; && &lt;custom-ident&gt;? ]</dt>
    <dd>
      <p>For repeated named grid lines, the integer value, n, will define the nth grid line with the specified name. The integer value cannot be 0.</p>

      <svg style="max-height:13em;" viewBox="0 0 627 385"><defs><path id="a37" d="M0 0h570v305H0z"/><mask id="b37" width="580" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h580v315H-5z"/><use xlink:href="#a37"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(29 5)"><use fill="#D8D8D8" xlink:href="#a37"/><use stroke="#595959" stroke-width="10" mask="url(#b37)" xlink:href="#a37"/></g><path stroke="#595959" stroke-width="5" d="M391.5 5v304m55-304v304M29 157.5h570M181.5 5v305m55-305v305" stroke-linecap="square"/><path stroke="#979797" stroke-width="3" d="M26.5 315v35m155-35v35m55-35v35m155-35v35m55-35v35"/><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x=".648" y="64">[foo]</tspan></text><path stroke="#979797" stroke-width="3" d="M601.5 315v35"/><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x="575.304" y="64">[bar]</tspan></text><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x="154.304" y="64">[bar]</tspan></text><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x="212.148" y="64">[foo]</tspan></text><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x="364.304" y="64">[bar]</tspan></text><text fill="#000" font-size="24" transform="translate(-2 315)"><tspan x="422.148" y="64">[foo]</tspan></text><path fill="#7ED321" fill-opacity=".75" d="M184 5h260v150H184z"/><path fill="#F8E81C" fill-opacity=".75" d="M449 160h150v150H449z"/><path fill="#4A90E2" fill-opacity=".75" d="M184 160h50v150h-50z"/><text fill="#000" font-size="24" transform="translate(-2 5)"><tspan x="305.404" y="81">.a</tspan></text><text fill="#000" font-size="24" transform="translate(-2 5)"><tspan x="199.864" y="236">.b</tspan></text><text fill="#000" font-size="24" transform="translate(-2 5)"><tspan x="516.456" y="236">.c</tspan></text></g></svg>

      <pre>.a { grid-column-start: 1 bar; grid-column-end: 3 foo; }
.b { grid-column-start: 1 bar; }
.c { grid-column-start: -1 foo; }</pre>

    </dd>

    <dt>[ span && [ &lt;positive-integer&gt; || &lt;custom-ident&gt; ] ]</dt>
    <dd>
      <p>Provides the option of specifying the grid span of a grid item. This value, together with the specified grid line, will determine the placement of the grid item. The grid item will span N number of tracks from the grid line specified.</p>
      <p>For example, a grid item with <code>grid-column-start: span 2;</code> and <code>grid-column-end: 4;</code> will span 2 columns from grid line 4, towards the start line.</p>

      <svg style="max-height: 8em;" viewBox="0 0 477 225"><defs><path id="a38" d="M0 0h460v150H0z"/><mask id="b38" width="470" height="160" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v160H-5z"/><use xlink:href="#a38"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(8 5)"><use fill="#D8D8D8" xlink:href="#a38"/><use stroke="#595959" stroke-width="10" mask="url(#b38)" xlink:href="#a38"/></g><path stroke="#595959" stroke-width="5" d="M315.5 5v150M160.5 5v150" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M163 5h305v150H163z"/><path stroke="#979797" stroke-width="3" d="M5.5 160v35m155-35v35m155-35v35m155-35v35"/><text fill="#000" font-size="24" transform="translate(-2 160)"><tspan x=".3" y="64">1</tspan></text><text fill="#000" font-size="24" transform="translate(-2 160)"><tspan x="157.3" y="64">2</tspan></text><text fill="#000" font-size="24" transform="translate(-2 160)"><tspan x="310.3" y="64">3</tspan></text><text fill="#000" font-size="24" transform="translate(-2 160)"><tspan x="464.3" y="64">4</tspan></text><text fill="#000" font-size="24" transform="translate(-2 5)"><tspan x="286.204" y="81">.item</tspan></text></g></svg>

      <p>If the integer is not specified, it will default to <code>1</code>.</p>

    </dd>
  </dl>

  <h3 id="section_grid-column-row">The <code>grid-row</code> and <code>grid-column</code> Properties</h3>
  <pre>grid-row: &lt;grid-line&gt; [ / &lt;grid-line&gt; ]?
grid-column: &lt;grid-line&gt; [ / &lt;grid-line&gt; ]?</pre>

  <p>
      This is a shorthand that sets the start line and end line for the respective dimensions in the same declaration. The <code>grid-row</code> property is the shorthand for <code>grid-row-start</code> and <code>grid-row-end</code>, while the <code>grid-column</code> property is the shorthand for <code>grid-column-start</code> and <code>grid-column-end</code>.
  </p>

  <p>
      The grid line values are separated by a slash. The value before the slash indicates the start line and the value after the slash indicates the end line.
  </p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>&lt;grid-line&gt; [ / &lt;grid-line&gt; ]?</dt>
    <dd>
        Refer to the syntax for <a href="#grid-line"><code>&lt;grid-line&gt;</code></a>. The second value is optional.
    </dd>
  </dl>

  <h3 id="section_grid-area">The <code>grid-area</code> Property</h3>
  <pre>grid-area: &lt;grid-line&gt; [ / &lt;grid-line&gt; ]{0,3}</pre>

  <p>
      This is a shorthand that sets the grid lines which define each of the 4 edges of the grid area in a single declaration. The order for this shorthand is <code>row start / column-start / row-end / column-end</code>. In other words, it runs in a counter-clockwise direction for documents with the default base direction of left-to-right. This is the opposite of other 4-edge properties, like <code>margin</code> or <code>padding</code>.
  </p>

  <svg style="max-height:13em;" viewBox="0 0 538 349"><defs><path id="a39" d="M176 105h200v150H176z"/><mask id="b39" width="210" height="160" x="-5" y="-5"><path fill="#fff" d="M171 100h210v160H171z"/><use xlink:href="#a39"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(-2 -6)"><use fill="#D8D8D8" xlink:href="#a39"/><use stroke="#595959" stroke-width="10" mask="url(#b39)" xlink:href="#a39"/></g><text fill="#000" font-size="24" transform="translate(20 -6)"><tspan x=".108" y="108">[row-start]</tspan> <tspan x="30.432" y="139">(first)</tspan></text><text fill="#000" font-size="24" transform="translate(-2 -6)"><tspan x="424.164" y="263">[row-end]</tspan> <tspan x="443.952" y="294">(third)</tspan></text><path stroke="#979797" stroke-width="3" d="M134 96.5h35m210 155h35M171.5 254v35m205-230v35"/><text fill="#000" font-size="24" transform="translate(-2 -6)"><tspan x="297.4" y="24">[column-end]</tspan> <tspan x="331.672" y="55">(fourth)</tspan></text><text fill="#000" font-size="24" transform="translate(-2 -6)"><tspan x="85.344" y="319">[column-start]</tspan> <tspan x="121.26" y="350">(second)</tspan></text><path fill="#7ED321" fill-opacity=".75" d="M174 99h200v150H174z"/><text fill="#000" font-size="24" transform="translate(-2 -6)"><tspan x="245.204" y="186">.item</tspan></text></g></svg>

  <p>
    The possible values have the following meanings:
  </p>
  <dl>
    <dt>&lt;grid-line&gt; [ / &lt;grid-line&gt; ]{0,3}</dt>
    <dd>
        Refer to the syntax for <a href="#grid-line"><code>&lt;grid-line&gt;</code></a>. This property can take up to 4 grid lines, with the second, third and fourth values being optional.
    </dd>
  </dl>

  <h2 id="section_grid-alignment">Grid Alignment: Aligning the Grid and Grid Items</h2>

  <h3>Summary of Properties related to Grid Alignment</h3>
  <ul>
    <li><a href="#section_justify-content"><code>justify-content</code></a></li>
    <li><a href="#section_align-content"><code>align-content</code></a></li>
    <li><a href="#section_justify-items"><code>justify-items</code></a></li>
    <li><a href="#section_align-items"><code>align-items</code></a></li>
    <li><a href="#section_justify-self"><code>justify-self</code></a></li>
    <li><a href="#section_align-self"><code>align-self</code></a></li>
  </ul>

  <h3 id="section_column-row-axis">Column-axis and Row-axis</h3>

  <p>
      The default inline direction for HTML documents is left-to-right, which means the text flow starts from the left and ends on the right. The default block flow direction is top-to-bottom, which means block-level boxes stack from the top of the page down towards the bottom. It is possible to change the direction with the writing-mode property.
  </p>

  <p>
      Grid uses the terms <strong>column-axis</strong> and <strong>row-axis</strong> to describe alignment directions. The column-axis refers to the block axis, while the row-axis refers to the inline axis. Theses axes are dependent on the writing-mode direction.
  </p>

  <svg style="max-height:14em;" viewBox="0 0 839 435"><defs><path id="a32" d="M2 0h460v305H2z"/><mask id="b32" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-3-5h470v315H-3z"/><use xlink:href="#a32"/></mask></defs><g fill="none" fill-rule="evenodd"><path stroke="#9012FE" stroke-width="2" d="M515 60v305m-3-294.2l3-10.8 3 10.8m-6 283.4l3 10.8 3-10.8" stroke-linecap="square"/><g transform="translate(26 60)"><use fill="#D8D8D8" xlink:href="#a32"/><use stroke="#595959" stroke-width="10" mask="url(#b32)" xlink:href="#a32"/></g><path stroke="#595959" stroke-opacity=".51" stroke-width="5" d="M333.5 60v305M26 212.5h460M178.5 60v305" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M26 390h460m-449.2 3L26 390l10.8-3m438.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(1 -10)"><tspan x="123" y="441">Row-axis / Inline-axis</tspan></text><text fill="#000" font-size="24" transform="translate(1 -10)"><tspan x="539" y="229">Column-axis / Block-axis</tspan></text><text fill="#000" font-size="24" transform="translate(1 -10)"><tspan x="66" y="153">The text flow of this document </tspan> <tspan x="66" y="184">is from left-to-right and it’s </tspan> <tspan x="66" y="215">block flow direction is from </tspan> <tspan x="66" y="246">top-to-bottom.</tspan></text><text fill="#000" font-size="36" transform="translate(22 -10)"><tspan x="0" y="37">writing-mode: horizontal-tb</tspan></text></g></svg>

  <svg style="max-height:14em;" viewBox="0 0 777 424"><defs><path id="a33" d="M0 0h460v305H0z"/><mask id="b33" width="470" height="315" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v315H-5z"/><use xlink:href="#a33"/></mask></defs><g fill="none" fill-rule="evenodd"><text fill="#000" font-size="36" transform="translate(5 -10)"><tspan x="0" y="37">writing-mode: vertical-rl</tspan></text><g transform="translate(5 53)"><use fill="#D8D8D8" xlink:href="#a33"/><use stroke="#595959" stroke-width="10" mask="url(#b33)" xlink:href="#a33"/></g><path stroke="#595959" stroke-opacity=".5" stroke-width="5" d="M312.5 53v305M5 205.5h460M157.5 53v305" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M5 385h460m-449.2 3L5 385l10.8-3m438.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 -10)"><tspan x="79" y="430">Column-axis / Block-axis</tspan></text><text fill="#000" font-size="24" transform="translate(5 -10)"><tspan x="510" y="222">Row-axis / Inline-axis</tspan></text><path stroke="#9012FE" stroke-width="2" d="M490 53v305m-3-294.2l3-10.8 3 10.8m-6 283.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" transform="rotate(90 316.5 225)" font-size="24"><tspan x="189.5" y="158.5">The text-flow of </tspan> <tspan x="189.5" y="189.5">this document is </tspan> <tspan x="189.5" y="220.5">top-to-bottom with </tspan> <tspan x="189.5" y="251.5">a block flow </tspan> <tspan x="189.5" y="282.5">direction from </tspan> <tspan x="189.5" y="313.5">right-to-left.</tspan></text></g></svg>

  <h2 id="section_grid-alignment-properties">Properties related to Grid Alignment</h2>

  <h3 id="section_justify-content">The <code>justify-content</code> Property</h3>

  <pre>justify-content: center | start | end | space-between | space-around | space-evenly</pre>

  <p>Sometimes the edges of the grid does not correspond to the edges of the grid container, which could happen if the grid tracks are sized with fixed units. For such cases, we can justify the grid within the grid container along the <strong>row-axis</strong>, or in the inline-dimension, by applying the <code>justify-content</code> property on the <strong>grid container</strong>. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>center</dt>
    <dd>
        <p>Centers the grid within the grid container along the row-axis</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a14" d="M0 0h280v260H0z"/><mask id="c14" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a14"/></mask><path id="b14" d="M1 0h165v250H1z"/><mask id="d14" width="175" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h175v260H-4z"/><use xlink:href="#b14"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#c14)" stroke-dasharray="7" xlink:href="#a14"/><g transform="translate(57 5)"><use fill="#D8D8D8" xlink:href="#b14"/><use stroke="#979797" stroke-width="10" mask="url(#d14)" xlink:href="#b14"/></g><path stroke="#979797" stroke-width="5" d="M140.5 5v250M58 87.5h165M57 171h165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Aligns the grid to be flush with the starting edge of the grid container along the row-axis</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a13" d="M0 0h280v260H0z"/><mask id="c13" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a13"/></mask><path id="b13" d="M1 0h165v250H1z"/><mask id="d13" width="175" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h175v260H-4z"/><use xlink:href="#b13"/></mask></defs><g fill="none" fill-rule="evenodd" transform="translate(4)"><use stroke="#979797" stroke-width="10" mask="url(#c13)" stroke-dasharray="7" xlink:href="#a13"/><g transform="translate(4 5)"><use fill="#D8D8D8" xlink:href="#b13"/><use stroke="#979797" stroke-width="10" mask="url(#d13)" xlink:href="#b13"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v250M5 87.5h165M4 171h165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Aligns the grid to be flush with the ending edge of the grid container along the row-axis</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a15" d="M0 0h280v260H0z"/><mask id="c15" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a15"/></mask><path id="b15" d="M1 0h165v250H1z"/><mask id="d15" width="175" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h175v260H-4z"/><use xlink:href="#b15"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#c15)" stroke-dasharray="7" xlink:href="#a15"/><g transform="translate(109 5)"><use fill="#D8D8D8" xlink:href="#b15"/><use stroke="#979797" stroke-width="10" mask="url(#d15)" xlink:href="#b15"/></g><path stroke="#979797" stroke-width="5" d="M192.5 5v250M110 87.5h165M109 171h165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>space-around</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the row-axis such that each grid track has equal space on either side of it, with a half-size space on either end.</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a17" d="M0 0h280v260H0z"/><mask id="d17" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a17"/></mask><path id="b17" d="M1 0h80v250H1z"/><mask id="e17" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#b17"/></mask><path id="c17" d="M1 0h80v250H1z"/><mask id="f17" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#c17"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d17)" stroke-dasharray="7" xlink:href="#a17"/><g transform="translate(31.5 5)"><use fill="#D8D8D8" xlink:href="#b17"/><use stroke="#979797" stroke-width="10" mask="url(#e17)" xlink:href="#b17"/></g><path stroke="#979797" stroke-width="5" d="M32.5 87.5h80m-81 83.5h80" stroke-linecap="square"/><g transform="translate(166.5 5)"><use fill="#D8D8D8" xlink:href="#c17"/><use stroke="#979797" stroke-width="10" mask="url(#f17)" xlink:href="#c17"/></g><path stroke="#979797" stroke-width="5" d="M167.5 87.5h80m-81 83.5h80" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".4" d="M5 5h22.5v250H5zm112.5 0H140v250h-22.5z"/><path fill="#4A90E2" fill-opacity=".3" d="M140 5h22.5v250H140zm112.5 0H275v250h-22.5z"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>space-between</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the row-axis with the first grid track flush with the starting edge of the grid container, and the last grid track flush with the ending edge of the grid container.</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a16" d="M0 0h280v260H0z"/><mask id="d16" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a16"/></mask><path id="b16" d="M1 0h80v250H1z"/><mask id="e16" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#b16"/></mask><path id="c16" d="M1 0h80v250H1z"/><mask id="f16" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#c16"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d16)" stroke-dasharray="7" xlink:href="#a16"/><g transform="translate(4 5)"><use fill="#D8D8D8" xlink:href="#b16"/><use stroke="#979797" stroke-width="10" mask="url(#e16)" xlink:href="#b16"/></g><path stroke="#979797" stroke-width="5" d="M5 87.5h80M4 171h80" stroke-linecap="square"/><g transform="translate(194 5)"><use fill="#D8D8D8" xlink:href="#c16"/><use stroke="#979797" stroke-width="10" mask="url(#f16)" xlink:href="#c16"/></g><path stroke="#979797" stroke-width="5" d="M195 87.5h80M194 171h80" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>space-evenly</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the row-axis such that the space between any 2 adjacent grid tracks are the same.</p>
        <svg style="max-height:14em" viewBox="0 0 288 307"><defs><path id="a18" d="M0 0h280v260H0z"/><mask id="d18" width="280" height="260" x="0" y="0" fill="#fff"><use xlink:href="#a18"/></mask><path id="b18" d="M1 0h80v250H1z"/><mask id="e18" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#b18"/></mask><path id="c18" d="M1 0h80v250H1z"/><mask id="f18" width="90" height="260" x="-5" y="-5"><path fill="#fff" d="M-4-5h90v260H-4z"/><use xlink:href="#c18"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d18)" stroke-dasharray="7" xlink:href="#a18"/><g transform="translate(39 5)"><use fill="#D8D8D8" xlink:href="#b18"/><use stroke="#979797" stroke-width="10" mask="url(#e18)" xlink:href="#b18"/></g><path stroke="#979797" stroke-width="5" d="M40 87.5h80M39 171h80" stroke-linecap="square"/><g transform="translate(159 5)"><use fill="#D8D8D8" xlink:href="#c18"/><use stroke="#979797" stroke-width="10" mask="url(#f18)" xlink:href="#c18"/></g><path stroke="#979797" stroke-width="5" d="M160 87.5h80M159 171h80" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".4" d="M5 5h30v250H5zm120 0h30v250h-30zm120 0h30v250h-30z"/><path stroke="#9012FE" stroke-width="2" d="M0 278h280m-269.2 3L0 278l10.8-3m258.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="85" y="306">Row-axis</tspan></text></g></svg>
    </dd>
  </dl>


  <h3 id="section_align-content">The <code>align-content</code> Property</h3>

  <pre>align-content: center | start | end | space-between | space-around | space-evenly</pre>

  <p>Sometimes the edges of the grid does not correspond to the edges of the grid container, which could happen if the grid tracks are sized with fixed units. For such cases, we can align the grid within the grid container along the <strong>column-axis</strong>, or in the block-dimension, by applying the <code>align-content</code> property on the <strong>grid container</strong>. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.</p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>center</dt>
    <dd>
        <p>Centers the grid within the grid container along the column-axis</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a19" d="M0 0h260v280H0z"/><mask id="c19" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a19"/></mask><path id="b19" d="M0 0h250v165H0z"/><mask id="d19" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#b19"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#c19)" stroke-dasharray="7" xlink:href="#a19"/><g transform="translate(5 58)"><use fill="#D8D8D8" xlink:href="#b19"/><use stroke="#979797" stroke-width="10" mask="url(#d19)" xlink:href="#b19"/></g><path stroke="#979797" stroke-width="5" d="M87.5 58v165M5 140.5h250M172.5 58v165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Aligns the grid to be flush with the starting edge of the grid container along the column-axis</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a21" d="M0 0h260v280H0z"/><mask id="c21" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a21"/></mask><path id="b21" d="M0 0h250v165H0z"/><mask id="d21" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#b21"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#c21)" stroke-dasharray="7" xlink:href="#a21"/><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#b21"/><use stroke="#979797" stroke-width="10" mask="url(#d21)" xlink:href="#b21"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250M172.5 5v165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Aligns the grid to be flush with the ending edge of the grid container along the column-axis</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a20" d="M0 0h260v280H0z"/><mask id="c20" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a20"/></mask><path id="b20" d="M0 0h250v165H0z"/><mask id="d20" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#b20"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#c20)" stroke-dasharray="7" xlink:href="#a20"/><g transform="translate(5 115)"><use fill="#D8D8D8" xlink:href="#b20"/><use stroke="#979797" stroke-width="10" mask="url(#d20)" xlink:href="#b20"/></g><path stroke="#979797" stroke-width="5" d="M87.5 115v165M5 197.5h250M172.5 115v165" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>space-around</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the column-axis such that each grid track has equal space on either side of it, with a half-size space on either end.</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a22" d="M0 0h260v280H0z"/><mask id="d22" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a22"/></mask><path id="b22" d="M0 0h250v80H0z"/><mask id="e22" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#b22"/></mask><path id="c22" d="M0 0h250v80H0z"/><mask id="f22" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#c22"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d22)" stroke-dasharray="7" xlink:href="#a22"/><g transform="translate(5 32.5)"><use fill="#D8D8D8" xlink:href="#b22"/><use stroke="#979797" stroke-width="10" mask="url(#e22)" xlink:href="#b22"/></g><path stroke="#979797" stroke-width="5" d="M87.5 32.5v80M5 115h250m-82.5-82.5v80" stroke-linecap="square"/><g transform="translate(5 167.5)"><use fill="#D8D8D8" xlink:href="#c22"/><use stroke="#979797" stroke-width="10" mask="url(#f22)" xlink:href="#c22"/></g><path stroke="#979797" stroke-width="5" d="M87.5 167.5v80M5 250h250m-82.5-82.5v80" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".4" d="M5 5h250v22.5H5zm0 112.5h250V140H5z"/><path fill="#4A90E2" fill-opacity=".4" d="M5 140h250v22.5H5zm0 112.5h250V275H5z"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>space-between</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the column-axis with the first grid track flush with the starting edge of the grid container, and the last grid track flush with the ending edge of the grid container.</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a23" d="M0 0h260v280H0z"/><mask id="d23" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a23"/></mask><path id="b23" d="M0 0h250v80H0z"/><mask id="e23" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#b23"/></mask><path id="c23" d="M0 0h250v80H0z"/><mask id="f23" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#c23"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d23)" stroke-dasharray="7" xlink:href="#a23"/><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#b23"/><use stroke="#979797" stroke-width="10" mask="url(#e23)" xlink:href="#b23"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v80M5 87.5h250M172.5 5v80" stroke-linecap="square"/><g transform="translate(5 196)"><use fill="#D8D8D8" xlink:href="#c23"/><use stroke="#979797" stroke-width="10" mask="url(#f23)" xlink:href="#c23"/></g><path stroke="#979797" stroke-width="5" d="M87.5 196v80M5 278.5h250M172.5 196v80" stroke-linecap="square"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>space-evenly</dt>
    <dd>
        <p>Distributes the grid tracks evenly within the grid container along the column-axis such that the space between any 2 adjacent grid tracks are the same.</p>
        <svg style="max-height:15em" viewBox="0 0 457 288"><defs><path id="a24" d="M0 0h260v280H0z"/><mask id="d24" width="260" height="280" x="0" y="0" fill="#fff"><use xlink:href="#a24"/></mask><path id="b24" d="M0 0h250v80H0z"/><mask id="e24" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#b24"/></mask><path id="c24" d="M0 0h250v80H0z"/><mask id="f24" width="260" height="90" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v90H-5z"/><use xlink:href="#c24"/></mask></defs><g fill="none" fill-rule="evenodd"><use stroke="#979797" stroke-width="10" mask="url(#d24)" stroke-dasharray="7" xlink:href="#a24"/><g transform="translate(5 40)"><use fill="#D8D8D8" xlink:href="#b24"/><use stroke="#979797" stroke-width="10" mask="url(#e24)" xlink:href="#b24"/></g><path stroke="#979797" stroke-width="5" d="M87.5 40v80M5 122.5h250M172.5 40v80" stroke-linecap="square"/><g transform="translate(5 160)"><use fill="#D8D8D8" xlink:href="#c24"/><use stroke="#979797" stroke-width="10" mask="url(#f24)" xlink:href="#c24"/></g><path stroke="#979797" stroke-width="5" d="M87.5 160v80M5 242.5h250M172.5 160v80" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".4" d="M5 5h250v30H5zm0 120h250v30H5zm0 120h250v30H5z"/><path stroke="#9012FE" stroke-width="2" d="M285 0v280m-3-269.2L285 0l3 10.8m-6 258.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24"><tspan x="305" y="146">Column-axis</tspan></text></g></svg>
    </dd>
  </dl>

  <h3 id="section_justify-items">The <code>justify-items</code> Property</h3>

  <pre>justify-items: center | start | end | stretch</pre>

  <p>We can justify the content within grid items in the inline-dimension, or along the row-axis, by applying the <code>justify-items</code> property on the <strong>grid container</strong>. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.</p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>stretch</dt>
    <dd>
        <p><strong>This is the default value.</strong> Fills up the width of the grid area.</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a28" d="M0 0h250v165H0z"/><mask id="b28" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a28"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a28"/><use stroke="#979797" stroke-width="10" mask="url(#b28)" xlink:href="#a28"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h80v80H90zm85 0h80v80h-80zM5 5h80v80H5zm85 85h80v80H90zm85 0h80v80h-80zM5 90h80v80H5z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>center</dt>
    <dd>
        <p>Justifies content of grid items in the center of the grid area along the row-axis</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a25" d="M0 0h250v165H0z"/><mask id="b25" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a25"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a25"/><use stroke="#979797" stroke-width="10" mask="url(#b25)" xlink:href="#a25"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M105 5h50v80h-50zm85 0h50v80h-50zM20 5h50v80H20zm85 85h50v80h-50zm85 0h50v80h-50zM20 90h50v80H20z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Justifies content of grid items with the starting edge of the grid area along the row-axis</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a26" d="M0 0h250v165H0z"/><mask id="b26" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a26"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a26"/><use stroke="#979797" stroke-width="10" mask="url(#b26)" xlink:href="#a26"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h50v80H90zm85 0h50v80h-50zM5 5h50v80H5zm85 85h50v80H90zm85 0h50v80h-50zM5 90h50v80H5z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Justifies content of grid items with the ending edge of the grid area along the row-axis</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a27" d="M0 0h250v165H0z"/><mask id="b27" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a27"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a27"/><use stroke="#979797" stroke-width="10" mask="url(#b26)" xlink:href="#a27"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M120 5h50v80h-50zm85 0h50v80h-50zM35 5h50v80H35zm85 85h50v80h-50zm85 0h50v80h-50zM35 90h50v80H35z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
  </dl>

  <h3 id="section_align-items">The <code>align-items</code> Property</h3>

  <pre>align-items: center | start | end | stretch</pre>

  <p>We can set the alignment for the content within grid items in the block-dimension, or along the column-axis, by applying the <code>align-items</code> property on the <strong>grid container</strong>. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.</p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>stretch</dt>
    <dd>
        <p><strong>This is the default value.</strong> Fills up the width of the grid area.</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a28" d="M0 0h250v165H0z"/><mask id="b28" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a28"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a28"/><use stroke="#979797" stroke-width="10" mask="url(#b28)" xlink:href="#a28"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h80v80H90zm85 0h80v80h-80zM5 5h80v80H5zm85 85h80v80H90zm85 0h80v80h-80zM5 90h80v80H5z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>center</dt>
    <dd>
        <p>Aligns content of grid items in the center of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a30" d="M0 0h250v165H0z"/><mask id="b30" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a30"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a30"/><use stroke="#979797" stroke-width="10" mask="url(#b30)" xlink:href="#a30"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M5 20h80v50H5zm85 0h80v50H90zm85 0h80v50h-80zM5 105h80v50H5zm85 0h80v50H90zm85 0h80v50h-80z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Aligns content of grid items with the starting edge of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a29" d="M0 0h250v165H0z"/><mask id="b29" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a29"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a29"/><use stroke="#979797" stroke-width="10" mask="url(#b29)" xlink:href="#a29"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M5 5h80v50H5zm85 0h80v50H90zm85 0h80v50h-80zM5 90h80v50H5zm85 0h80v50H90zm85 0h80v50h-80z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Aligns content of grid items with the ending edge of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a31" d="M0 0h250v165H0z"/><mask id="b31" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a31"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a31"/><use stroke="#979797" stroke-width="10" mask="url(#b31)" xlink:href="#a31"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M5 35h80v50H5zm85 0h80v50H90zm85 0h80v50h-80zM5 120h80v50H5zm85 0h80v50H90zm85 0h80v50h-80z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
  </dl>

  <h3 id="section_justify-self">The <code>justify-self</code> Property</h3>

  <pre>justify-self: center | start | end | stretch</pre>

  <p>We can justify the content within individual grid items in the inline-dimension, or along the row-axis, by applying the <code>justify-self</code> property on the <strong>grid item</strong> itself. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.</p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>stretch</dt>
    <dd>
        <p><strong>This is the default value.</strong> Fills up the width of the grid area.</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a28" d="M0 0h250v165H0z"/><mask id="b28" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a28"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a28"/><use stroke="#979797" stroke-width="10" mask="url(#b28)" xlink:href="#a28"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h80v80H90z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>center</dt>
    <dd>
        <p>Aligns content of the grid item in the center of the grid area along the row-axis</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a28" d="M0 0h250v165H0z"/><mask id="b28" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a28"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a28"/><use stroke="#979797" stroke-width="10" mask="url(#b28)" xlink:href="#a28"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M105 5h50v80h-50z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Justifies content of the grid item with the starting edge of the grid area along the row-axis</p>

        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a29" d="M0 0h250v165H0z"/><mask id="b29" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a29"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a29"/><use stroke="#979797" stroke-width="10" mask="url(#b29)" xlink:href="#a29"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h50v80H90z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Justifies content of the grid item with the ending edge of the grid area along the row-axis</p>
        <svg style="max-width:14em;" viewBox="0 0 260 227"><defs><path id="a31" d="M0 0h250v165H0z"/><mask id="b31" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a31"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a31"/><use stroke="#979797" stroke-width="10" mask="url(#b31)" xlink:href="#a31"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".76" d="M120 5h50v80h-50z"/><path stroke="#9012FE" stroke-width="2" d="M5 193h250m-239.2 3L5 193l10.8-3m228.4 6l10.8-3-10.8-3" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 5)"><tspan x="70" y="221">Row-axis</tspan></text></g></svg>
    </dd>
  </dl>

  <h3 id="section_align-self">The <code>align-self</code> Property</h3>

  <pre>align-self: center | start | end | stretch</pre>

  <p>We can set the alignment for the content within individual grid items in the block-dimension, or along the column-axis, by applying the <code>align-self</code> property on the <strong>grid item</strong> itself. All the example diagrams assume the default document direction of left-to-right and writing-mode to be <code>horizontal-tb</code>.</p>

  <p>
    The possible values have the following meanings:
  </p>

  <dl>
    <dt>stretch</dt>
    <dd>
        <p><strong>This is the default value.</strong> Fills up the width of the grid area.</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a28" d="M0 0h250v165H0z"/><mask id="b28" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a28"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a28"/><use stroke="#979797" stroke-width="10" mask="url(#b28)" xlink:href="#a28"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h80v80H90z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>center</dt>
    <dd>
        <p>Aligns content of the grid item in the center of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a30" d="M0 0h250v165H0z"/><mask id="b30" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a30"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a30"/><use stroke="#979797" stroke-width="10" mask="url(#b30)" xlink:href="#a30"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 22h80v50H90z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>start</dt>
    <dd>
        <p>Aligns content of the grid item with the starting edge of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a29" d="M0 0h250v165H0z"/><mask id="b29" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a29"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a29"/><use stroke="#979797" stroke-width="10" mask="url(#b29)" xlink:href="#a29"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".75" d="M90 5h80v50H90z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
    <dt>end</dt>
    <dd>
        <p>Aligns content of the grid item with the ending edge of the grid area along the column-axis</p>
        <svg style="max-height:9em;" viewBox="0 0 450 178"><defs><path id="a31" d="M0 0h250v165H0z"/><mask id="b31" width="260" height="175" x="-5" y="-5"><path fill="#fff" d="M-5-5h260v175H-5z"/><use xlink:href="#a31"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a31"/><use stroke="#979797" stroke-width="10" mask="url(#b31)" xlink:href="#a31"/></g><path stroke="#979797" stroke-width="5" d="M87.5 5v165M5 87.5h250m-250 85h250M172.5 5v165" stroke-linecap="square"/><path fill="#7ED321" fill-opacity=".76" d="M90 35h80v50H90z"/><path stroke="#9012FE" stroke-width="2" d="M281 4v170m-3-159.2L281 4l3 10.8m-6 148.4l3 10.8 3-10.8" stroke-linecap="square"/><text fill="#000" font-size="24" transform="translate(5 4)"><tspan x="293" y="94">Column-axis</tspan></text></g></svg>
    </dd>
  </dl>

  <h2 id="section_grid-inspector-tool">Grid Inspector tool</h2>

  <p>
      Firefox 52 and above has a very useful tool called the Grid Inspector tool. It lets developers visualise the grid code by overlaying grid lines onto the element set to <code>display: grid</code>. To use this tool, open up <em>Developer Tools</em> by right-clicking the page and selecting <em>Inspect Element</em>. Highlight an element with the <code>display: grid</code> property applied to it. You should see a small icon to the left of the word “grid”. Click on that to toggle the grid lines on the page.
  </p>

  <img src="https://tympanus.net/codrops/wp-content/uploads/2017/03/grid-inspector.png" alt="Toggle grid lines from DevTools" width="960" height="473" class="alignnone size-full wp-image-30228" />

  <p>
      <a href="http://helenvholmes.com/">Helen Holmes</a> first <a href="https://hacks.mozilla.org/2016/12/css-grid-and-grid-highlighter-now-in-firefox-developer-edition/">wrote about this feature</a> with a short introduction video to CSS Grid on the Mozilla Hacks blog in December 2016. MDN has also published <a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Examine grid layouts</a> with a screencast on how to use the Grid Inspector tool.
  </p>

</div>

<div class="ct-cssref-examples">
  <h2 id="section_examples">Examples</h2>

  <p>
      Grid simplifies the code needed to create layouts on the web that were previously impossible, or required a lot of extra code to achieve.
  </p>

  <h3 id="section_eg1">Simple Responsive Grid Layout</h3>

  <p>
      A common approach to creating a responsive grid layout is to use media queries at appropriate breakpoints to vary the width of the grid items so content in each grid items is displayed in an optimal manner. For example, if we wanted 2 columns when the screen size was larger than 480px, 3 columns when the screen size was larger than 720px and so on, we would end up having to write multiple media queries.
  </p>

  <p>
      With Grid, we can simply specify the minimum width of each grid item, then let the browser generate enough columns to fit the width of the container. The <code>minmax()</code> function also allows us to specify a fluid width for the maximum value, so in instances where there is excess free space in the grid container, the grid items can grow to take up that additional space. This means the grid items will always take up the width of the grid container.
  </p>

  <p>
      The markup required for such a layout is quite simple, with all the grid items wrapped in a single grid container.
  </p>

  <pre>&lt;div class="container"&gt;
  &lt;div class="grid__item a"&gt;A&lt;/div&gt;
                        ...
  &lt;div class="grid__item m"&gt;M&lt;/div&gt;
&lt;/div&gt;</pre>

  <p>
      Using the <code>auto-fill</code> value within the <code>repeat()</code> notation tells the browser to generate as many columns as necessary to fit the grid items within the width of the grid container. In this case, we've set the minimum width of a grid item to be <code>15ch</code>.
  </p>

  <pre>.container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(15ch, 1fr));
}</pre>

  <p>
      You can see how this works in the live example below. Try resizing the browser to see how the number of columns adjusts to the changing viewport size.
  </p>

  https://jsfiddle.net/huijing/r752j8j4/

  <h3 id="section_eg2">Responsive Grid with Different Sized Items</h3>

  <p>
      Grid's auto-placement algorithm can place grid items even if they are not uniformly sized. In addition, we can specify whether we want the grid items to fill up in order or let the browser try to fill in blank spaces in the grid with items that can fit.
  </p>

  <p>
      We can use the <code>grid-auto-flow</code> property to control which algorithm is being used.
  </p>

  https://jsfiddle.net/huijing/wvwcesnd/

  <h3 id="section_eg3">Equal-Height Multi-Column "Holy Grail" Layout</h3>

  <p>
      The multiple equal-height layout is sometimes referred to as the "Holy Grail" layout because even though it is a common design pattern, there was no straight-forward way to implement it. The search of an optimal implementation was akin to searching for the elusive Holy Grail. Now that we have Grid, it may be time to retire that moniker.
  </p>

  <p>
      This layout has the following characteristics:
  </p>

  <ul>
      <li>a fluid center with fixed with sidebars</li>
      <li>the center column with main content appears first in the source order</li>
      <li>any column can be the tallest and all columns will match that height</li>
  </ul>

  <svg style="max-height: 12em;" viewBox="0 0 625 470"><defs><path id="a40" d="M0 0h615v460H0z"/><mask id="b40" width="625" height="470" x="-5" y="-5"><path fill="#fff" d="M-5-5h625v470H-5z"/><use xlink:href="#a40"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a40"/><use stroke="#595959" stroke-width="10" mask="url(#b40)" xlink:href="#a40"/></g><path stroke="#595959" stroke-width="5" d="M492.5 5v457M132.5 5v457M5 82.5h615M5 184.167h615M5 285.833h615M5 387.5h615" stroke-linecap="square"/><path fill="#D0011B" fill-opacity=".75" d="M5 390h615v75H5z"/><path fill="#7ED321" fill-opacity=".75" d="M5 5h615v75H5z"/><path fill="#4990E2" fill-opacity=".75" d="M5 85h125v300H5z"/><path fill="#F8E81C" fill-opacity=".75" d="M135 85h355v300H135z"/><path fill="#F5A623" fill-opacity=".75" d="M495 85h125v300H495z"/><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="246.44" y="51">header</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="250.134" y="239">article</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="30.42" y="239">nav</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="506.47" y="239">aside</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="253.172" y="436">footer</tspan></text></g></svg>

  <p>
      In addition, we will make this layout responsive, by adjusting the positions of each section on the grid as the viewport width becomes smaller.
  </p>

  <svg style="max-height: 12em;" viewBox="0 0 865 470"><defs><path id="a41" d="M0 0h460v460H0z"/><mask id="c41" width="470" height="470" x="-5" y="-5"><path fill="#fff" d="M-5-5h470v470H-5z"/><use xlink:href="#a41"/></mask><path id="b41" d="M0 0h305v460H0z"/><mask id="d41" width="315" height="470" x="-5" y="-5"><path fill="#fff" d="M-5-5h315v470H-5z"/><use xlink:href="#b41"/></mask></defs><g fill="none" fill-rule="evenodd"><g transform="translate(5 5)"><use fill="#D8D8D8" xlink:href="#a41"/><use stroke="#595959" stroke-width="10" mask="url(#c41)" xlink:href="#a41"/></g><path stroke="#595959" stroke-width="5" d="M337.5 5v457M132.5 5v457M5 82.5h460M5 184.167h460M5 285.833h460M5 387.5h460" stroke-linecap="square"/><path fill="#D0011B" fill-opacity=".75" d="M5 390h460v75H5z"/><path fill="#7ED321" fill-opacity=".75" d="M5 5h460v75H5z"/><path fill="#4990E2" fill-opacity=".75" d="M5 85h125v97H5z"/><path fill="#F8E81C" fill-opacity=".75" d="M135 85h330v300H135z"/><path fill="#F5A623" fill-opacity=".75" d="M5 187h125v198H5z"/><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="168.44" y="47">header</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="238.134" y="239">article</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="30.42" y="138">nav</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="16.47" y="290">aside</tspan></text><text fill="#000" font-size="36" transform="translate(5 5)"><tspan x="182.172" y="432">footer</tspan></text><g transform="translate(555 5)"><use fill="#D8D8D8" xlink:href="#b41"/><use stroke="#595959" stroke-width="10" mask="url(#d41)" xlink:href="#b41"/></g><path stroke="#595959" stroke-width="5" d="M732.5 5v457m-50-457v457M555 57.5h305m-305 285h305m-305-80h305m-305 150h305" stroke-linecap="square"/><path fill="#D0011B" fill-opacity=".75" d="M555 415h305v50H555z"/><path fill="#7ED321" fill-opacity=".75" d="M555 5h305v50H555z"/><path fill="#4990E2" fill-opacity=".75" d="M555 345h305v65H555z"/><path fill="#F8E81C" fill-opacity=".75" d="M555 60h305v200H555z"/><path fill="#F5A623" fill-opacity=".75" d="M555 265h305v75H555z"/><text fill="#000" font-size="36" transform="translate(555 5)"><tspan x="91.44" y="40">header</tspan></text><text fill="#000" font-size="36" transform="translate(555 5)"><tspan x="95.134" y="164">article</tspan></text><text fill="#000" font-size="36" transform="translate(555 5)"><tspan x="122.42" y="382">nav</tspan></text><text fill="#000" font-size="36" transform="translate(555 5)"><tspan x="106.47" y="307">aside</tspan></text><text fill="#000" font-size="36" transform="translate(555 5)"><tspan x="98.172" y="450">footer</tspan></text></g></svg>

  <p>
      With Grid, the amount of markup required becomes quite simple.
  </p>

  <pre>&lt;div class="container"&gt;
  &lt;header&gt;...&lt;/header&gt;
  &lt;article&gt;...&lt;/article&gt;
  &lt;nav&gt;...&lt;/nav&gt;
  &lt;aside&gt;...&lt;/aside&gt;
  &lt;footer&gt;...&lt;/footer&gt;
&lt;/div&gt;</pre>

  <p>
      First, we need to create the grid structure to house all the content. Based on the diagrams, we will be using a grid with 3 columns and 5 rows. The first and last columns will be fixed at <code>8em</code>, and the first and last rows will be fixed at <code>3em</code>.
  </p>

  <p>
      In order to achieve the requirement of having equal height columns regardless of the amount of content within each of them, we will make use of the grid-placement properties, <code>grid-row</code> and <code>grid-column</code>.
  </p>

  <pre>.container {
  display: grid;
  grid-template-columns: 8em auto 8em;
  grid-template-rows: 3em auto auto auto 3em;
}

header {
  grid-column: 1 / 4;
}

nav {
  grid-row: 2 / 5;
  grid-column: 1;
}

aside { 
  grid-row: 2 / 5;
  grid-column: 3;
}

article {
  grid-row: 2 / 5;
  grid-column: 2;
}

footer {
  grid-column: 1 / 4;
  grid-row: 5;
}</pre>

  <p>
      The rest of the code can be found in the live example below. We use media queries to rearrange the layout at different viewport sizes.
  </p>

  https://jsfiddle.net/huijing/xv268anb/

  <h3 id="section_eg4">Grids With Non-uniform Items</h3>

  <p>
      Even though the concept of a grid is orderly and uniform, there are some tricks we can employ to introduce an element of randomness to items laid out in a grid. The Cicada Principle was introduced by <a href="https://twitter.com/alexmwalker">Alex Walker</a> in his article <a href="https://www.sitepoint.com/the-cicada-principle-and-why-it-matters-to-web-designers/">The Cicada Principle and Why It Matters to Web Designers</a> back in 2011. The gist of it is that using a pattern of prime numbers can help create the illusion of randomness.
  </p>

  <p>
      The default alignment for the content within grid items behaves as if it is set to <code>stretch</code>. This means, the content will stretch to fit the edges of the grid item. We can also change their values to <code>start</code>, <code>center</code> or <code>end</code>.
  </p>

  <p>
      For this example, we have a number of images and some corresponding text per grid item. We will create 4 equal width columns, but let the row height be determined by the height of the content. Each row will then take the height of the tallest grid item in that row. Because every grid item has varying content, we can apply different <code>align-self</code> values to “random” grid items using the nth-child selector.
  </p>

  https://jsfiddle.net/huijing/c980ud3q/

  <p>
      There are many more possibilities that are available with CSS grid. One of the more interesting examples is a <a href="http://labs.jensimmons.com/#mondrian">CSS Mondrian Grid</a> by <a href="http://jensimmons.com/">Jen Simmons</a>. There are also many other examples built using CSS grid on her site which can hopefully inspire your creativity when it comes to building your own layouts.
  </p>

  <p>
      Grid is not hard. It just takes time to learn all the different things it can do. And once you do get the hang of it, the possibilities are endless.
  </p>

</div>

<div class="ct-cssref-support">
  <h2 id="section_browser-support">Browser Support</h2>
  [caniuse feature="css-grid"]

  <h3>Notes</h3>

  <p>
      The original Grid implementation that was introduced in Internet Explorer 10 was also included for Internet Explorer 11. This implementation was based on an earlier version of the specification which has since undergone drastic changes. It is possible to implement a Grid layout in IE10 and IE11 using the older syntax, however, there will be functionality that is not supported.
  </p>

</div>

<div class="ct-cssref-further-reading">
  <h2 id="section_further-reading">Further Reading</h2>
  <ul>
    <li>
      <a href="https://www.w3.org/TR/css-grid-1/">CSS Grid Layout Module Level 1</a>
    </li>
    <li>
      <a href="http://gridbyexample.com/">Grid by Example</a> by Rachel Andrew
    </li>
    <li>
      <a href="https://igalia.github.io/css-grid-layout/">CSS Grid Layout Examples</a> by Igalia
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Basic_Concepts_of_Grid_Layout">Basic concepts of grid layout</a> by Rachel Andrew
    </li>
    <li>
      <a href="http://blogs.igalia.com/mrego/2016/02/01/deep-dive-into-grid-layout-placement/">Deep Dive into Grid Layout Placement</a> by Manuel Rego Casasnovas
    </li>
    <li>
      <a href="http://blogs.igalia.com/mrego/2015/02/25/grid-auto-placement-is-ready/">Grid Auto-Placement Is Ready</a> by Manuel Rego Casasnovas
    </li>
    <li>
      <a href="http://blogs.igalia.com/mrego/2016/05/27/css-grid-layout-and-positioned-items/">CSS Grid Layout and positioned items</a> by Manuel Rego Casasnovas
    </li>
    <li>
      <a href="https://rachelandrew.co.uk/css/cheatsheets/box-alignment">Box Alignment Cheat Sheet</a> by Rachel Andrew
    </li>
    <li>
      <a href="https://css-tricks.com/things-ive-learned-css-grid-layout/">Things I’ve Learned About CSS Grid Layout</a> by Oliver Williams
    </li>
    <li>
      <a href="http://labs.jensimmons.com/">The Experimental Layout Lab of Jen Simmons</a>
    </li>
    <li>
      <a href="http://jensimmons.com/post/feb-27-2017/learn-css-grid">Learn CSS Grid</a> by Jen Simmons
    </li>
    <li>
      <a href="https://developer.mozilla.org/en-US/docs/Tools/Page_Inspector/How_to/Examine_grid_layouts">Examine grid layouts</a> by MDN
    </li>
  </ul>
</div>
