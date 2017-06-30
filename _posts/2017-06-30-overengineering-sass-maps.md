---
layout: post
title: "Over-engineering Sass maps"
date: June 30, 2017
tags: [css, design]
---
I finally put together a landing page for the little random demos I build from time to time because, you know, CSS is my hobby. [SingaporeCSS](https://singaporecss.github.io) is our meetup group that runs Talk.CSS, and when I built that site last year, I figured it was an excuse to try out CSS variables (and chromatic fonts and other “cutting edge” stuff). 

A feature of Sass that I particularly like is the ability to loop. To me, this is purely a developer convenience because the compiled result is something that can totally be written by hand but I'm such a lazy sloth that I'd rather spend half a day figuring out how to write the loop. *#overengineering*

Here's the use case. I want to store my colours in a Sass map, which has the name of the colour and its hex code. And I would like to reuse this map in the plethora of other declarations down the line. So in the case of using CSS variables for colours, I wanted to have fallback values in my `var()` function as well.

*Thought: I've actually pondered this over, and realised that if I was using a Sass map for this the fallback value is probably redundant. Talk to me about this.*

CSS variables deserve their own post, which I technically have written except that it's on [Codrops CSS reference](https://tympanus.net/codrops/css_reference/custom-properties/). But if you want to know more about CSS variables, head straight on down to the [resources section](#further-resources).

I also wanted to use the same map to write nth-child selectors so the relevant elements would have repeated colours based on the colours in my Sass map. This all sounds reasonably straight-forward, doesn't it? But, it turns out that Sass maps [don't have an index interator variable](https://github.com/sass/sass/issues/996).

In my naive mind, probably a place where unicorns shit rainbows, I'd like to write code that looks something like this:

<pre><code class="language-scss">@function colour($colour-name) {
  @return var(--#{$colour-name}, map-get($colours, $colour-name));
}

@each $name, $colour in $colours {
    section:nth-child($index) {
        background-color: colour($name);
        mix-blend-mode: color-dodge;
    }
}</code></pre>

I guess I keep thinking of the `index` parameter that is available to us when we use the `map()` function, you know? But that's not to say that Sass itself isn't pretty awesome. Let's talk about the Sass functionality that are most commonly found in my projects.

If you're not familiar with [Sass](http://sass-lang.com/), it is a pre-processor that utilises the same syntax as CSS, but also extends it through SassScript, which allows properties to use mixins, variables, nesting, functions and so on.

<p class="no-margin">SassScript supports 7 data types:</p>
<ul>
  <li class="no-margin">numbers</li>
  <li class="no-margin">strings</li>
  <li class="no-margin">colours</li>
  <li class="no-margin">booleans</li>
  <li class="no-margin">nulls</li>
  <li class="no-margin">lists</li>
  <li>maps</li>
</ul>

I'm only going to discuss Sass maps here.

## Sass maps

Sass maps were introduced in Sass 3.3 and allowed us to store a comma-separated list of key-value pairs in a Sass variable. And with this nifty new data type, we also got some map functions to go with it. This is how a Sass map looks like:

<pre><code class="language-scss">$map: (
  key1: value1,
  key2: value2
);</code></pre>

The most common use-case for Sass maps (at least for me) is for managing colours. I used to store my colours in Sass variables like so:

<pre><code class="language-scss">$green: #7ED321;
$red: #ff595e;
$yellow: #F8E81C;
$blue: #4990E2;
$purple: #DB61F4;</code></pre>

And now, I put them in a Sass map, like so:

<pre><code class="language-scss">$colours: ( 
  green: #7ED321,
  red: #ff595e,
  yellow: #F8E81C,
  blue: #4990E2,
  purple: #DB61F4,
);</code></pre>

The reason for this seemingly minor difference, is the ability to use Sass directives to write loops. But before we get into that, I want to briefly cover all the available functions you can use with Sass maps.

<div class="table sass-maps">
  <div class="tr">
    <div class="th td">map-get($map, $key)</div>
    <div class="td">Returns the value in a map associated with a given key.</div>
  </div>
  <div class="tr">
    <div class="th td">map-merge($map1, $map2)</div>
    <div class="td">Merges two maps together into a new map.</div>
  </div>
  <div class="tr">
    <div class="th td">map-remove($map, $keys…)</div>
    <div class="td">Returns a new map with keys removed.</div>
  </div>
  <div class="tr">
    <div class="th td">map-keys($map)</div>
    <div class="td">Returns a list of all keys in a map.</div>
  </div>
  <div class="tr">
    <div class="th td">map-values($map)</div>
    <div class="td">Returns a list of all values in a map.</div>
  </div>
  <div class="tr">
    <div class="th td">map-has-key($map, $key)</div>
    <div class="td">Returns whether a map has a value associated with a given key.</div>
  </div>
  <div class="tr">
    <div class="th td">keywords($args)</div>
    <div class="td">Returns the keywords passed to a function that takes variable arguments.</div>
  </div>
</div>

And, you can also use all the list functions with Sass maps as well. So here's some more stuff you can do with Sass maps.

<div class="table sass-maps">
  <div class="tr">
    <div class="th td">length($list)</div>
    <div class="td">Returns the length of a list.</div>
  </div>
  <div class="tr">
    <div class="th td">nth($list, $n)</div>
    <div class="td">Returns a specific item in a list.</div>
  </div>
  <div class="tr">
    <div class="th td">index($list, $value)</div>
    <div class="td">Returns the position of a value within a list.</div>
  </div>
  <div class="tr">
    <div class="th td">set-nth($list, $n, $value)</div>
    <div class="td">Replaces the nth item in a list.</div>
  </div>
  <div class="tr">
    <div class="th td">join($list1, $list2, [$separator])</div>
    <div class="td">Joins together two lists into one.</div>
  </div>
  <div class="tr">
    <div class="th td">append($list1, $val, [$separator])</div>
    <div class="td">Appends a single value onto the end of a list.</div>
  </div>
  <div class="tr">
    <div class="th td">zip($lists…)</div>
    <div class="td">Combines several lists into a single multidimensional list.</div>
  </div>
  <div class="tr">
    <div class="th td">list-separator($list)</div>
    <div class="td">Returns the separator of a list.</div>
  </div>
</div>

## Sass control directives

Every introduction to programming course or tutorial I've encountered covers directives. It's fundamental to injecting some logic into your programs. And also helps us write less code. CSS itself does not support control directives because it is a stylesheet language.

### @if

The `@if` directive evaluates the SassScript expression and uses the styles nested within the declaration if it returns anything other than `false` or `null`. The `@if` statement can be followed by `@else if` statements or just an `@else` statement so some kind of logic can be built into your styles.

For example, this is a function that returns either a dark text colour or a light text colour depending on the colour value used as the function's parameter.

<pre><code class="language-scss">@function text-colour($colour) {
  @if (lightness($colour) > 49) {
    @return #000; // Lighter background, return dark color
  } @else {
    @return #fff; // Darker background, return light color
  }
}

// Usage
.element {
    background-color: #000;
    color: text-colour(#000);
}</code></pre>

### @for

We can write loops using the `@for` directive. The number of times the loop is run is determined by a counter variable. There are 2 ways to write this directive, note the difference in keywords used.

<pre><code class="language-scss">// includes the values of &lt;start&gt; and &lt;end&gt;
@for $var from &lt;start&gt; through &lt;end&gt;

// runs up to but not including the value of &lt;end&gt;
@for $var from &lt;start&gt; to &lt;end&gt;</code></pre>

The counter variable can be used in the CSS declaration as well, useful for selectors which are numerically incremented, or nth-child selectors.

<pre class="language-scss"><code>@for $i from 1 through 3 {
  .item-#{$i} { 
    width: 2em * $i; 
  }
}</code></pre>

<pre><code class="language-css">/* compiles into */
.item-1 {
  width: 2em; 
}

.item-2 {
  width: 4em;
}

.item-3 {
  width: 6em;
}</code></pre>

### @while

If you don't want to write a for loop, SassScript allows you to write a while loop. The nested styles within the `@while` directive will be output until the expression evaluates to false. For example:

<pre><code class="language-scss">$i: 9;
@while $i > 0 {
  .item-#{$i} { width: 1em * $i; }
  $i: $i - 3;
}</code></pre>

<pre><code class="language-css">/* compiles into */
.item-9 {
  width: 9em;
}

.item-6 {
  width: 6em;
}

.item-3 {
  width: 3em;
}</code></pre>

Honestly, I never used the `@while` directive before simply because I haven't encountered an use case for it yet.

### @each

Now this I like to use a lot, and is the main point of this article. The `@each` directive is pretty flexible in that it can set the value of a variable `$var` to each item in a list or map, then output the styles within the declaration using that variable. The general syntax is:

<pre><code class="language-scss">@each $var in &lt;list or map&gt;</code></pre>

The thing is, it can take multiple variables, ideal for use in Sass maps. For example:

<pre><code class="language-scss">$colours: ( 
  green: #7ED321,
  red: #ff595e,
  yellow: #F8E81C,
  blue: #4990E2,
  purple: #DB61F4,
);

:root {
  @each $name, $colour in $colours {
    --#{$name}: $colour;
  }
}</code></pre>

<pre><code class="language-css">/* compiles into */
:root {
  --green:#7ed321;
  --red:#ff595e;
  --yellow:#f8e81c;
  --blue:#4990e2;
  --purple:#db61f4
}</code></pre>

## Over-engineering much?

All that being said, my original problem was to re-use the same colours Sass map to generate the background colours for my set of elements, while using nth-child selectors that were programmatically generated based on the number of colours in the map. Meaning if I added more colours to the map, I didn't have to change anything else.

This was implemented in  I came up with this for the implementation of my recently deployed [Demos landing page]({{ site.url }}/demos/):

<pre><code class="language-scss">@each $name, $colour in $colours {
  section:nth-child(#{length($colours)}n + #{index(($colours), ($name $colour))}) {
    background-color: $colour;
    background-color: colour($name);
    mix-blend-mode: color-dodge;

    a:hover {
      background-color: #444;
      color: $colour;
      color: colour($name);
    }
  }
}</code></pre>

Let me try to explain this. `#{length($colours)}` gives us the total number of colours in the map, while `#{index(($colours), ($name $colour))}` returns the index of the named colour in the map. Together, they form the nth-child selector `𝓍n + 𝓍`, where 𝓍 is the number of colours in the map.

## Wrapping up

Is this the right way to do things? I have no idea. Does it work? Yes. So I'm a bit torn about this. Though it was a fun exercise to learn more about Sass functions. If you have any feedback, I'd love to hear it. 

I'm fairly confident there's a much better way to get this done , as proven by my latest [CodePen of the Malaysian national flag](https://codepen.io/huijing/full/vZeyVP/), where the one and only [Ana Tudor](https://thebabydino.github.io/) forked my pen and [made it 10x better](https://codepen.io/thebabydino/full/VWMzqM/)! She also made a [screencast of the process](https://www.youtube.com/watch?v=VlLmUNbwdMQ). *#internetisawesome* 

## Further resources

<ul>
  <li class="no-margin"><a href="http://sass-lang.com/documentation/file.SASS_REFERENCE.html">Sass official documentation</a></li>
  <li class="no-margin"><a href="https://www.youtube.com/watch?v=kZOJCVvyF-4">Lea Verou: CSS Variables: var(–subtitle)</a></li>
  <li class="no-margin"><a href="https://madebymike.com.au/writing/using-css-variables/">Using CSS variables correctly</a></li>
  <li class="no-margin"><a href="https://una.im/local-css-vars/">Locally Scoped CSS Variables: What, How, and Why</a></li>
  <li><a href="https://tympanus.net/codrops/css_reference/custom-properties/">Codrops CSS reference: Custom Properties</a></li>
</ul>
