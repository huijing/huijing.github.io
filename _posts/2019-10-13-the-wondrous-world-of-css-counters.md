---
layout: post
title: "The wondrous world of CSS counters"
date: Oct 13, 2019
tags: [css, i18n]
---
The [Chinese Layout Task Force](https://w3c.github.io/clreq/homepage/) works on the [Requirements for Chinese Text Layout](https://w3c.github.io/clreq/), and we have monthly calls to discuss issues and updates. One of the issues (actually two) we talked about in the last call involved counter styles.

The issues, titled [cjk-tally-mark and cjk-stem-branch counter styles](https://github.com/w3c/clreq/issues/228) and [Classification for 'cjk-earthly-branch' and 'cjk-heavenly-stem](https://github.com/w3c/clreq/issues/229), would probably seem weird and mystical for non-Chinese folks, so let's talk about them a bit.

## Tally marks

There's mention of “CKJ tally marks” in the first issue. [Tally marks](https://en.wikipedia.org/wiki/Tally_marks) are a unary numeral system used for counting. I think once people see what they are, it'll be a relatively familiar sight so these are tally marks:

<img srcset="{{ site.url }}/assets/images/posts/css-counters/tally-480.jpg 480w, {{ site.url }}/assets/images/posts/css-counters/tally-640.jpg 640w, {{ site.url }}/assets/images/posts/css-counters/tally-960.jpg 960w, {{ site.url }}/assets/images/posts/css-counters/tally-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/css-counters/tally-640.jpg" alt="Tally marks in different regions">

Tally marks were added to [Unicode Version 11.0](https://unicode.org/versions/Unicode11.0.0/) in the Counting Rod Numerals block, whose range is 1D360–1D37F. If you want to use these marks for whatever purpose, there is an open-source OpenType-SVG font called [Tally Marks](https://github.com/adobe-fonts/tally-marks/) hosted on GitHub.

## Heavenly stems, earthly branches

This is a literal translation of the Chinese terms 天干地支. The Heavenly Stems (天干) are a system of ordinal numbers, or words that represent a position in a sequence.

For example, the words *first*, *second*, *third* and so on are ordinal numbers. This system is pretty ancient, first appearing during the Shang dynasty (around 1250 BCE), and were used as names of the 10 days of the week.

Modern day usage include choices on multiple choice examinations, school grades (in Taiwan), representative of the alphabetic counterparts of A, B, C, D through till J, as well as in the practice of Feng Shui and astrology. The characters are 甲、乙、丙、丁、戊、己、庚、辛、壬、癸。

Earthly branches (地支) are also an ordering system but mostly used for dates, astrological traditions and zodiac. Ancient Chinese astronomers built the system based on observations of the orbit of Jupiter, which was approximately a 12-year cycle.

12 is a fairly prominent number as there are 12 months in the year, 12 animals in the Chinese zodiac, Chinese double hours of a day (时辰) and so on.

Today, they are used in the “traditional Chinese calendar”, combined with the Heavenly Stems for Feng Shui and astrology purposes, as well as make up the remaining letters after “J” as the Chinese counterpart to the English alphabet.

The characters are 子、丑、寅、卯、辰、巳、午、未、申、酉、戌、亥。But wait, you might be thinking, what about the last 4 letters of the alphabet, W, X, Y and Z? They are represented by the following characters respectively instead, 物、天、地、人。

## Some history on CSS counters

So what does all of this have to do with CSS counters? Let's first go back to when list items were first introduced in CSS. This was back in CSS1, where the specification defined basic counter `list-style-type`s of `decimal`, `lower-roman`, `upper-roman`, `lower-alpha` and `upper-alpha`.

By the 24 March 1998, when CSS2 reached Proposed Recommendation status, the basic lists section had been moved into [12 Generated content, automatic numbering, and lists](https://www.w3.org/TR/CSS2/generate.html#generated-text). This is the section that defines behaviour of user agents when rendering content that does not come from the document tree.

According to CSS2.1, content may be generated either by the `content` property when used with the `::before` and `::after` pseudo-elements, or by elements with the `display` property value of `list-item`.

Most of the time, we use strings with the `content` property. But you could also use a `<counter>` value, which can be specified by either the `counter()` function or the `counters()` function. Other potential values include quotes and attributes (for the subject of the selector only).

Automatic numbering is controlled by two properties, `counter-increment` and `counter-reset`. The counters defined by these two properties will be used with the aforementioned `counter()` or `counters()` function of the `content` property.

In the [14 May 2003](https://www.w3.org/TR/2003/WD-css3-content-20030514/), the entire section on generated content was split out into what was probably the first public Working Draft of the [CSS Generated Content Module Level 3](https://www.w3.org/TR/css-content-3/). But even before that, CSS lists already had a working draft of its own.

The first public version I could find was [CSS3 module: Lists](https://www.w3.org/TR/2002/WD-css3-lists-20020220/) published on 20 Feb 2002. This version included a much expanded set of international numbering systems, and was the first instance I could find of the cjk-heavenly-stem and cjk-earthly-branch values. It was clear this was a early draft because of this fun bit:

> A lot more detail is needed in the above lists, including modulus, more examples, etc. Some of the values are missing. This specification currently does not define how alphabetic systems wrap at the end of the alphabet. For instance, after 26 list items, 'lower-latin' rendering is undefined. This should be changed. XXX 

Another relevant specification is the [CSS Counter Styles Level 3](https://www.w3.org/TR/css-counter-styles-3/), which introduces the `@counter-style` rule, allowing us to define our own custom counter styles for use with CSS list-marker and generated-content counters (defined in the lists specification).

It also includes a list of predefined counter styles. And that's where the `cjk-heavenly-stem` and `cjk-earthly-branch` are currently sitting in. Personally, I find counter styles fascinating, as they make me think about how in spite of the different writing systems around the world, counting is universal.

Both [CSS Generated Content Module Level 3](https://www.w3.org/TR/css-content-3/) and [CSS Lists Module Level 3](https://www.w3.org/TR/css-lists-3/) are still in Working Draft status and contain numerous entertaining (IMHO) comments, which you can go check out if you feel like it.

<img srcset="{{ site.url }}/assets/images/posts/css-counters/issue-480.jpg 480w, {{ site.url }}/assets/images/posts/css-counters/issue-640.jpg 640w, {{ site.url }}/assets/images/posts/css-counters/issue-960.jpg 960w, {{ site.url }}/assets/images/posts/css-counters/issue-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/css-counters/issue-640.jpg" alt="A rather snarky comment in the working draft of CSS lists">

## So about these CSS counters…

If you read the latest version of the lists specification, it defines a counter as a special numeric tracker used, among other things, to automatically number list items in CSS. Counters have a name and creator element.

They are created and manipulated with the 3 counter properties of `counter-increment`, `counter-set` and `counter-reset`, and used with the `counter()` and `counters()` functions.

But this is from the working draft specification, so `counter-set` is currently only supported by Firefox 68 onwards, as with the `::marker` pseudo-element, so we'll talk about this later.

### `counter-increment`

The `counter-increment` property takes in 1 or more names of counters, each of which can be optionally followed by an integer. This integer lets you control how much the counter gets incremented for every occurrence of the element. By default, the counter increments by 1 though 0 and negative integers are perfectly acceptable as well.

Note that the keyword values of `none`, `inherit` and `initial` are reserved and cannot be used as counter names.

### `counter-reset`

The `counter-reset` property also has the same syntax, taking in 1 or more names of counters, each of which can be optionally followed by an integer. This integer, however, gives the value that the counter is set to on each occurrence of the element. The default is 0.

### Using the counter properties

Although both the above counter properties can be applied to all elements, the values of counters (accessible when using the `counter()` and `counters()` functions) can only be referred to from the `content` property, which is only applicable to the `::before` and `::after` pseudo-elements.

Given some markup like this:

```markup
<nav>
  <h1>An important chapter</h1>
  <p>I guess some broad overview goes here</p>
  <h2>First section in the chapter</h2>
  <p>I really don't know how these are formatted</p>
  <h2>Second section in the chapter</h2>
  <p>Why didn't I just use lorem ipsum?</p>
  <h1>Another chapter</h1>
  <p>Dammit, lorum ipsum was a much better idea</p>
  <h2>First section in next chapter</h2>
  <p>Screw it, we shall soldier on with filler text</p>
</nav>

```

And some CSS like this:

```css
nav {
  counter-reset: top-level;
}

h1:before {
  content: counter(top-level) ". ";
  counter-increment: top-level;
}

h1 {
  counter-reset: sub-level;
}

h2:before {
  content: counter(top-level) "." counter(sub-level) " ";
  counter-increment: sub-level;
}
```

The end result looks something like this:

<img src="{{ site.url }}/assets/images/posts/css-counters/counters.png" srcset="{{ site.url }}/assets/images/posts/css-counters/counters@2x.png 2x" alt="Example of how to use counter-increment and counter-reset for chapter titles">

This example used the default counter increment and reset values, but if I'd added some other numbers in there, like used negative numbers and stuff, let's just say there are a lot of number sequences we can play with.

```css
nav {
  counter-reset: top-level -5;
}

h1:before {
  content: counter(top-level) ". ";
  counter-increment: top-level 2;
}

h1 {
  counter-reset: sub-level;
}

h2:before {
  content: counter(top-level) "." counter(sub-level) " ";
  counter-increment: sub-level 4;
}
```
<figure>
  <figcaption>Negative chapter numbers? Sure…</figcaption>
  <img src="{{ site.url }}/assets/images/posts/css-counters/counters2.png" srcset="{{ site.url }}/assets/images/posts/css-counters/counters2@2x.png 2x" alt="Tweaking the increment and reset values">
</figure>

Some things to look out for when using these properties on the same element or more than once on the same element are:

- If an element increments or resets a counter and also uses it in the `content` property of its pseudo-elements, the counter is used *after* being incremented/reset.
    ```css
  h3 {
    counter-reset: apple -1; /* Set apple to -1 */
  }

  h3:before {
    content: counter(apple);
    counter-increment: apple -4;  /* Minus 4 from apple */
  }

  /* The counter value will end up being -5, but any subsequent h3 will also be -5 */
  /* because it gets reset to -1 every time */
    ```
- If an element has both `counter-reset` and `counter-increment`, the counter is reset first then incremented
- If the same counter is specified more than once in the value of `counter-reset` or `counter-increment`, each reset/increment is processed in the order specified
    ```css
  h3 {
    counter-reset: apple 4 apple; /* Resets apple to 0 */
  }

  h3 {
    counter-increment: banana 3 banana 2; /* Increments banana counter by 5 */
  }
    ```
- Cascading rules apply as per normal so for the use case of resetting multiple counters, they have to be specified in the same `counter-reset` property
    ```css
    h4 { counter-reset: apple 23 }
    h4 { counter-reset: banana 4 }
    /* Will only reset the banana counter */

    /* To reset both do the following: */
    h4 { counter-reset: apple 23 banana 4 }
    ```

## New stuff in Level 3

Level 3 of the CSS Lists defines the `::marker` pseudo-element, the `list-item` display type that generates markers, and several properties controlling the placement and styling of markers.

When we apply a `display: list-item` to an element, it generates a `::marker` pseudo-element. There is no other way of generating `::marker` pseudo-elements. The marker is a symbol or ordinal that denotes the start of each item in the list.

The marker box is generated by the `::marker` pseudo-element as the first-child of the list item, before the `::before` pseudo-element, if one exists. Marker boxes are only applicable to list items and only a limited set of properties can be used on it, namely, all font properties, the `color` property and `text-combine-upright`.

Remember all the glorious numbering systems we talked about above? These can be called into play with the `list-style-type` property on the list item, which generates the relevant marker string as the value of its counter.

Support for the different numbering systems varies across browsers, for example `amaric` is only supported in Safari 4.1 onwards, while `cjk-decimal` is only supported in Firefox 28 onwards. I suggest referencing this [granular compatibility table on MDN](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type#Browser_compatibility).

```css
div { counter-reset: apple }

h3:before { counter-increment: apple }

.cjk-decimal h3:before { content: counter(apple, cjk-decimal) }
.cjk-heavenly-stem h3:before { content: counter(apple, cjk-heavenly-stem) }
.cjk-earthly-branch h3:before { content: counter(apple, cjk-earthly-branch) }
.hiragana h3:before { content: counter(apple, hiragana) }
.katakana-iroha h3:before { content: counter(apple, katakana-iroha) }
```

<figure>
  <figcaption>The above CSS generates lists numbered with cjk-decimal, cjk-heavenly-stem, cjk-earthly-branch, hiragana and katakana-iroha respectively</figcaption>
  <img src="{{ site.url }}/assets/images/posts/css-counters/cjk-counters.png" srcset="{{ site.url }}/assets/images/posts/css-counters/cjk-counters@2x.png 2x" alt="CJK counter styles viewed in Firefox 70">
</figure>

## Pure CSS FizzBuzz

Another thing I had been chatting with my friends with lately was how coding tests were administered and apparently most American-based companies will test on data structures and algorithms regardless of whether you're going for generalist software engineering positions or frontend positions.

This is probably why I'll never get hired, because honestly, I suck at coding tests. Should I go study and learn data structures and algorithms properly? Maybe. But truth be told, I'm not very interested in them at the moment.

On the other hand, it is totally possible to do FizzBuzz in pure CSS, so I'd rather much do that. Because CSS counters let's you do stuff like FizzBuzz. Number sequences are not a problem at all. This is the version using the `::marker` pseudo-element:

```markup
<ol>
  <li></li>
  …add more li elements, like 30 of them…
  <li></li>
</ol>
```

```css
li:nth-of-type(3n+3)::marker {  content: "Fizz" }
li:nth-of-type(5n+5)::marker {  content: "Buzz" }
li:nth-of-type(3n+3):nth-of-type(5n+5)::marker {  content: "FizzBuzz" }
```

Or the better supported version using counter properties and the `::before` pseudo-element:

```css
ol { list-style-position: inside } /* To line-up all items neatly */

li:nth-of-type(3n+3),
li:nth-of-type(5n+5),
li:nth-of-type(3n+3):nth-of-type(5n+5) {
  list-style: none /* When text of Fizz, Buzz or FizzBuzz appears, get rid of the numbers */
}

li:nth-of-type(3n+3)::before {  content: "Fizz" }
li:nth-of-type(5n+5)::before {  content: "Buzz" }
li:nth-of-type(3n+3):nth-of-type(5n+5)::before {  content: "FizzBuzz" }
```

<figure>
  <figcaption>Laid out with Flexbox, because I felt like it</figcaption>
  <img src="{{ site.url }}/assets/images/posts/css-counters/fizzbuzz.png" srcset="{{ site.url }}/assets/images/posts/css-counters/fizzbuzz@2x.png 2x" alt="Fizzbuzz implementation in pure CSS using ::marker and ::before respectively">
</figure>

People deal with self-doubt in different ways. CSS is my outlet. So there. Anyway, all the counters stuff I was messing around to test things out is [in this CodePen](https://codepen.io/huijing/pen/ExxPQKy), if anyone is interested.

## Moar resources

<ul>
  <li class="no-margin"><a href="https://www.youtube.com/watch?v=9OH45755NKs">Not your usual CSS counters (dotCSS video)</a></li>
  <li class="no-margin"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Lists_and_Counters/Using_CSS_counters">Using CSS counters</a></li>
  <li><a href="https://www.smashingmagazine.com/2019/07/css-lists-markers-counters/">CSS Lists, Markers, And Counters</a></li>
</ul>