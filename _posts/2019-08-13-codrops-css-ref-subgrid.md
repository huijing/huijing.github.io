---
layout: post
title: "Codrops CSS reference: Subgrid"
date: Aug 13, 2019
tags: [codrops]
noindex: true
nofeed: true
external_url: https://tympanus.net/codrops/css_reference/subgrid/
external_site: codrops
---
<div class="ct-cssref-description">
    <p>
        Subgrid is an additional feature to CSS Grid introduced in Level 2 of the specification which allows nested grids to participate in the sizing of their parent grids.
    </p>
    <p>
        When CSS Grid was initially released in 2017, designers and developers were very excited about the prospect of a layout system that was designed and optimised for doing two-dimensional layout on the web. CSS Grid allowed us to do many things with an ease that was not possible before. 
    </p>
    <p>
        However, it also came a certain limitations. One of the bigger ones was the fact that nested grids were unable to participate in the sizing of their parent grids. This was a feature which was deemed important from the start, however, due to its complexity, it was <a href="https://github.com/w3c/csswg-drafts/issues/958">deferred to Level 2</a> of the CSS Grid specification to allow implementors and specification editors more time to work through the various use-cases to ensure more robust implementation.
    </p>
    <p>
        This entry will cover subgrid capabilities only. For information about CSS Grid, please refer to the <a href="https://tympanus.net/codrops/css_reference/grid/">entry on Grid</a>.
    </p>

    <h3>Establishing a subgrid</h3>
    <p>
        The CSS Grid Layout Module Level 2 introduces 2 new values to the <code>grid-template-columns</code> and <code>grid-template-rows</code> properties, which allow us to establish a subgrid within an existing grid container.
    </p>

    <pre class="brush: bash">grid-template-columns: subgrid &lt;line-name-list&gt;?
grid-template-rows: subgrid &lt;line-name-list&gt;?</pre>

    <p>
        The keyword <code>subgrid</code> indicates to the browser that the nested grid will use the same sizing as its parent grid for the portion occupied along the relevant axis. Hence the subgrid's items will placed and sized according to its parent grid's track sizing. Subgrids can take the track sizing of their parent grid along a single axis (row or column), or along both axes.
    </p>
    <p>
        When an element has a <code>display</code> value of <code>grid</code>, an independent grid formatting context is established. A subgrid's contents participate in its parent grid formatting context, and does <strong>not</strong> establish a new grid formatting context.
    </p>
    <p>
        The syntax of &lt;line-name-list&gt; is defined as follows:
    </p>

    <pre class="brush: bash">&lt;line-name-list&gt; = [ &lt;line-names&gt; | &lt;name-repeat&gt; ]+
&lt;line-names&gt;     = '[' &lt;custom-ident&gt;* ']'
&lt;name-repeat&gt;    = repeat( [ &lt;positive-integer&gt; | auto-fill ], &lt;line-names&gt;+)</pre>

    <p>
        If you have used the <code>repeat()</code> function when using Grid, one thing to note is that there is a slight difference when using it in the context of a subgrid, as in this case, only line names are repeated.
    </p>

    <pre class="brush: css"><code>.subgrid-container {
  display: grid; /* you must still apply a display: grid to the subgrid */
  grid-template-columns: subgrid;
  grid-template-rows: subgrid;
}</code></pre>

    <p>
        The subgrid will not have any implicit grid tracks in the subgridded axis (or axes) because its grid tracks match up to that of the parent grid. Line numbers on the subgrid start from 1, and do not follow that of the parent grid.
    </p>

    <svg viewBox="0 0 1417 911" fill="none"><path fill="#D8D8D8" stroke="#595959" stroke-width="5" d="M7.5 73.5h1395v835H7.5z"/><path stroke="#fff" stroke-linecap="square" stroke-width="20" d="M162.5 86v810M317.5 86v810M472.5 86v810M627.5 86v810M782.5 86v810M937.5 86v810M937.5 86v810M1092.5 86v810M1247.5 86v810M20 787h1370"/><path fill="#4A90E2" fill-opacity=".75" d="M10 797h452.5v109H10zM947.5 797H1400v109H947.5zM482.5 797h445v109h-445zM327.5 76H1400v701H327.5z"/><path fill="#BDDBFF" fill-opacity=".75" d="M327.5 76h135v701h-135zM637.5 76h445v701h-445z"/><path fill="#4A90E2" fill-opacity=".75" d="M10 76h297.5v701H10z"/><path fill="#BDDBFF" fill-opacity=".75" d="M1102.5 76H1400v701h-297.5z"/><g><path stroke="#9013FE" stroke-width="3" d="M7.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x=".305" y="24.432">1</tspan></text><path stroke="#9013FE" stroke-width="3" d="M162.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="155.305" y="24.432">2</tspan></text><path stroke="#9013FE" stroke-width="3" d="M1247.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1240.3" y="24.432">9</tspan></text><path stroke="#9013FE" stroke-width="3" d="M317.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="310.305" y="24.432">3</tspan></text><path stroke="#9013FE" stroke-width="3" d="M472.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="465.305" y="24.432">4</tspan></text><g><path stroke="#9013FE" stroke-width="3" d="M627.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="620.305" y="24.432">5</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M782.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="775.305" y="24.432">6</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M937.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="930.305" y="24.432">7</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M1092.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1085.3" y="24.432">8</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M1402.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1388.11" y="24.432">10</tspan></text></g></g><g><path stroke="#DF581D" stroke-width="3" d="M317.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="310.305" y="141.432">1</tspan></text><path stroke="#DF581D" stroke-width="3" d="M472.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="465.305" y="141.432">2</tspan></text><path stroke="#DF581D" stroke-width="3" d="M627.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="620.305" y="141.432">3</tspan></text><path stroke="#DF581D" stroke-width="3" d="M782.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="775.305" y="141.432">4</tspan></text><g><path stroke="#DF581D" stroke-width="3" d="M937.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="930.305" y="141.432">5</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M1092.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1085.3" y="141.432">6</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M1247.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1240.3" y="141.432">7</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M1402.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="1395.3" y="141.432">8</tspan></text></g></g></svg>

    <p>
        However, if there are any line names on the parent grid, they will be inherited by the subgrid, but it is also possible to provide line names local to the subgrid. The parent grid will not be able to use those line names as they only apply to the subgrid.
    </p>
    <p>
        Say we have the following markup for a page with a sidebar and some content, and within the content, there is an article and an aside:
    </p>

    <pre class="brush: html"><code>&lt;body class="grid-container"&gt;
  &lt;nav class="sidebar"&gt;&lt;/nav&gt;
  &lt;main class="content"&gt;
    &lt;article&gt;
      …
    &lt;/article&gt;
    &lt;aside&gt;
      …
    &lt;/aside&gt;
  &lt;/main&gt;
&lt;/body&gt;</code></pre>

    <p>
        We can allow the children within the <code>main</code> element to participate in the parent grid with the following CSS, as well as assign local grid line names to the columns of the subgrid as well.
    </p>

    <pre class="brush: css"><code>.grid-container {
  display: grid;
  grid-template-columns: [gridcol-1] 1fr [gridcol-2] 1fr [gridcol-3] 1fr [gridcol-4] 1fr [gridcol-5];
}

.content {
  /* placement for the subgrid container itself */
  grid-column: gridcol-2 / gridcol-5; 

  display: grid;
  /* number of line names must match number of lines from parent grid */ 
  /* excess names are ignored */
  grid-template-columns: subgrid [subcol-1] [subcol-2] [subcol-3] [subcol-4];
}

article {
  grid-column: subcol-1 / subcol-3;
}

aside {
  grid-column: subcol-3 / subcol-4;
}</code></pre>

    <p>
        The number of line names declared on the subgrid should match the number of lines which the subgrid spans across the parent grid. Any excess names declared will simply be ignored. 
    </p>

    <svg viewBox="0 0 764 491" fill="none"><path fill="#D8D8D8" stroke="#595959" stroke-width="5" d="M81.5 73.5h620v415h-620z"/><path stroke="#fff" stroke-linecap="square" stroke-width="20" d="M236.5 85.94v390M391.5 85.94v390M546.5 85.94v390"/><path fill="#4A90E2" fill-opacity=".75" d="M84 76h142.5v410H84zM246.5 76H699v410H246.5z"/><path fill="#BDDBFF" fill-opacity=".75" d="M556.5 76H699v410H556.5zM246.5 76h290v410h-290z"/><g><path stroke="#9013FE" stroke-width="3" d="M81.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x=".141" y="24.432">[gridcol-1]</tspan></text><path stroke="#9013FE" stroke-width="3" d="M236.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="173.141" y="24.432">[gridcol-2]</tspan></text><path stroke="#9013FE" stroke-width="3" d="M391.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="328.141" y="24.432">[gridcol-3]</tspan></text><g><path stroke="#9013FE" stroke-width="3" d="M546.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="483.141" y="24.432">[gridcol-4]</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M701.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="638.141" y="24.432">[gridcol-5]</tspan></text></g></g><g><path stroke="#DF581D" stroke-width="3" d="M391.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="331.023" y="141.432">[subcol-2]</tspan></text><path stroke="#DF581D" stroke-width="3" d="M236.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="176.023" y="141.432">[subcol-1]</tspan></text><g><path stroke="#DF581D" stroke-width="3" d="M546.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="486.023" y="141.432">[subcol-3]</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M701.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="641.023" y="141.432">[subcol-4]</tspan></text></g></g></svg>

    <h3>Understanding subgrid item sizing behaviour</h3>
    <p>
        There are a number of additional things to note with regards to other layout CSS properties. Line numbering and placement rules obey the subgrid's own <code>writing-mode</code>, which is also the case for a normal nested grid.
    </p>
    <p>
        As mentioned earlier, a subgrid will not have any implicit grid tracks along the subgridded axis (or axes). In the event a subgrid item is placed outside the explicit grid or spans an area larger than the explicit, the subgrid item will be “clamped” to the explicit grid.
    </p>

    <pre class="brush: css"><code>.grid {
  display: grid;
  grid-template-columns: repeat(5, minmax(2em, 1fr));
}

.subgrid {
  grid-column: 2 / 4;
  display: grid;
  grid-template-columns: subgrid; 
}

.subgrid__item-1 {
  grid-column: span 3;
}

.subgrid__item-2 {
  grid-column: 4;
}</code></pre>

    <p>
        In the above code example, the first subgrid item should span 3 grid columns, however, the subgrid only takes up 2 columns, as such, the browser will clamp the size of this item to the 2 columns of the subgrid. Similarly, the second subgrid item has been placed outside the explicit grid, and again, it ends up being placed into the last grid column of the subgrid.
    </p>

    <svg viewBox="0 0 635 491" fill="none"><path fill="#D8D8D8" stroke="#595959" stroke-width="5" d="M7.5 73.5h620v415H7.5z"/><path stroke="#fff" stroke-linecap="square" stroke-width="20" d="M162.5 86v390M317.5 86v390M472.5 86v390"/><path fill="#4A90E2" fill-opacity=".75" d="M10 76h142.5v410H10zM172.5 76h290v410h-290zM482.5 76H625v410H482.5z"/><path fill="#BDDBFF" fill-opacity=".75" stroke="#979797" stroke-width="2" d="M173.5 77h288v204h-288zM328.5 281h133v204h-133z"/><path stroke="#9013FE" stroke-width="3" d="M7.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x=".305" y="24.432">1</tspan></text><path stroke="#9013FE" stroke-width="3" d="M162.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="155.305" y="24.432">2</tspan></text><path stroke="#9013FE" stroke-width="3" d="M317.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="310.305" y="24.432">3</tspan></text><g><path stroke="#9013FE" stroke-width="3" d="M472.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="465.305" y="24.432">4</tspan></text></g><g><path stroke="#9013FE" stroke-width="3" d="M627.5 36v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="620.305" y="24.432">5</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M317.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="310.305" y="141.432">2</tspan></text><path stroke="#DF581D" stroke-width="3" d="M162.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="155.305" y="141.432">1</tspan></text><g><path stroke="#DF581D" stroke-width="3" d="M472.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="465.305" y="141.432">3</tspan></text></g><g><path stroke="#DF581D" stroke-width="3" d="M627.5 76v35"/><text fill="#000" font-size="24" letter-spacing="0" white-space="pre"><tspan x="620.305" y="141.432">4</tspan></text></g></g><text fill="#000" font-size="16" letter-spacing="0" white-space="pre"><tspan x="335.18" y="388.436">grid-column: 4</tspan></text><text fill="#000" font-size="16" letter-spacing="0" white-space="pre"><tspan x="237.094" y="185.436">grid-column: span 3</tspan></text></svg>

    <p>
        Any margins, borders and paddings applied to each edge of the subgrid will manifest themselves as an extra layer of margin to the subgrid items at those edges. This extra “layer” of margin will accumulate if there are additional nested subgrids.
    </p>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2019/08/nested-subgrid.png" alt="Diagram showing nested subgrid with margin, padding and borders" width="2112" height="1274" class="alignnone size-full wp-image-42586" />

    <p>
        The above diagram shows a subgrid within a subgrid, and both are participating in the outermost grid's column sizing only. The outermost grid also has a grid gap applied. Item 2 and Item 3 are nested subgrid items, in other words, grandchildren of the outermost grid. 
    </p>
    <p>
        Item 2 is aligned according to the outermost grid's columns but its size is reduced by the margin, border and padding of its parent grid and grandparent grid. Item 3 does not have this issue because it is not at an edge.
    </p>
    <p>
        Grid gaps set on the parent grid are inherited by the subgrid. However, it is possible to override this with a grid gap value that is local to the subgrid. This will also impact the sizing of the subgrid items.
    </p>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2019/08/subgrid-gutter.png" alt="Subgrid gutter can be different from parent" width="1696" height="890" class="alignnone size-full wp-image-42591" />

    <p>
        In the above diagram, the parent grid has a <code>gap</code> of <code>1.5em</code>, while the subgrid has a <code>gap</code> of <code>2em</code>. Even though the subgrid items are still aligned to the parent grid, when compared to a grid item that spans the same column size, the subgrid item is 0.5em smaller.
    </p>

    <h3>Understanding subgrid item alignment behaviour</h3>
    <p>
        A subgrid will always be stretched in the subgridded dimension. This means any <code>align-self</code> or <code>justify-self</code> properties will be ignored. Any height or width constraints on the subgrid are also ignored.
    </p>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2019/08/subgrid-alignself.png" alt="Self-alignment properties on subgrid container do not apply" width="1696" height="1022" class="alignnone size-full wp-image-42601" />

    <p>
        The subgrid will always be aligned with the section of the parent grid that it spans. Any <code>justify-content</code> or <code>align-content</code> properties on it will be ignored in the subgridded dimension.
    </p>
    <p>
        If the total width of subgrid items exceed the width of the subgrid container, and the <code>overflow</code> value is set to scroll, additional items can be scrolled into view. But note that the act of scrolling will not impact the layout.
    </p>
</div>

<div class="ct-cssref-examples">
    <h2>Examples</h2>
    <p>
        A rather common use-case that subgrid solves is making it easier for nested grid items to align to the outermost parent grid. Before subgrid, we could make our nested grids to match up to the parent grid but that required quite a bit of math to get the sizing just right. Subgrid solves this issue. 
    </p>
    <p>
        Let's take look at this example of a list of speakers displayed in a card style layout.
    </p>

    <img src="https://tympanus.net/codrops/wp-content/uploads/2019/08/speaker-layout-317x300.png" alt="Mockup of list of speakers layout" width="317" height="300" class="alignnone size-medium wp-image-42625" />

    <p>
        Each speaker card has a title, image, description and 3 links. In order to get the 3 links to align with each other across speaker cards, we can make each speaker card a subgrid of the parent grid and allow each speaker link to participate in the outermost grid sizing.
    </p>
    <p>
        If we size the grid tracks for the speaker links with a value of <code>max-content</code>, all the speaker links for that track will take the size of the longest link across all the speakers, allowing the start of each link to align with each other.
    </p>

<div class="box-attention">
<strong>Attention:</strong> CSS Subgrid is currently only supported in Firefox Nightly. If you would like to view and play with the demos, you can download it <a href="https://www.mozilla.org/en-US/firefox/70.0a1/releasenotes/">here</a>. 
</div>
    
[playground_embed height="600px" width="100%" user="huijing" hash="sxVVvDTq" panels="result,html,css" codepanels=""]

    <p>
        Another example where subgrid comes in handy would be for a list of form fields, where we want the label to be inline with the input field. Let's take a look at the following markup:
    </p>
    
    <pre class="brush: html"><code>&lt;form&gt;
  &lt;ul&gt;
    &lt;li&gt;
      &lt;label for="name"&gt;&lt;/label&gt;
      &lt;input id="name" name="name"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="handle"&gt;&lt;/label&gt;
      &lt;input id="handle" name="handle"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="location"&gt;&lt;/label&gt;
      &lt;input id="location" name="location"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="website"&gt;&lt;/label&gt;
      &lt;input id="website" name="website"&gt;
    &lt;/li&gt;
    &lt;li&gt;
      &lt;label for="bio"&gt;&lt;/label&gt;
      &lt;input id="bio" name="bio"&gt;
    &lt;/li&gt;
  &lt;/ul&gt;
&lt;/form&gt;</code></pre>
</div>

    <p>
        Prior to subgrid, if we made the <code>&lt;ul&gt;</code> element a grid container to layout each form field, the contents within the form field, i.e. the <code>&lt;label&gt;</code> and the <code>&lt;input&gt;</code> would not be able to participate in the parent grid's track sizing.
    </p>
    <p>
        With subgrid, aligning the labels and the input fields across every form field becomes a relatively trivial pursuit. The essential CSS for such a layout is as follows:
    </p>

    <pre class="brush: css"><code>ul {
  display: grid;
  grid-template-columns: max-content auto;
  gap: 1em;
}

li {
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: subgrid;
}</code></pre>

[playground_embed height="400px" width="100%" user="huijing" hash="jjFiPGQ5" panels="result,html,css" codepanels=""]

<p>
    Card-style layouts for lists of content is a fairly common design pattern on websites these days. It could be an e-commerce site with catalogues of items for sale or a news website showing a list of articles. Each item usually has multiple elements within the card, and subgrid lets us align these individual elements within the card with their corresponding elements across different cards.
</p>

<img src="https://tympanus.net/codrops/wp-content/uploads/2019/08/card-layout-400x281.png" alt="Elements in each card can align with elements in other cards" width="400" height="281" class="alignnone size-medium wp-image-42632" />

<p>
    For this particular example, each card item has 4 rows, which should take up just as much content as the card contains. We would then have to set the <code>grid-row</code> property on the subgrid to span those 4 rows on the parent grid.
</p>
<p>
    Because the size of the subgrid items will determine the size of the parent's grid tracks, this allows us to have the different rows of content within our subgrid item to align with each other across cards.
</p>

[playground_embed height="500px" width="100%" user="huijing" hash="WRTRSPw9" panels="result,html,css" codepanels=""]

<div class="ct-cssref-support" id="browser-support">
    <h2>Browser Support</h2>
    [caniuse feature="css-subgrid"]
</div>

<div class="ct-cssref-further-reading">
    <h2>Further Reading</h2>
    <ul>
        <li>
            <a href="https://www.w3.org/TR/css-grid-2/">CSS Grid Layout Module Level 2</a> 
        </li>
        <li>
            <a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Grid_Layout/Subgrid">MDN web docs: Subgrid</a>
        </li>
        <li>
            <a href="https://rachelandrew.co.uk/archives/2019/04/16/css-subgrid-news-and-demos/">CSS Subgrid News and demos</a>
        </li>
        <li>
            <a href="https://rachelandrew.co.uk/archives/2019/05/07/a-design-pattern-solved-by-subgrid/">A design pattern solved by subgrid</a>
        </li>
    </ul>
</div>