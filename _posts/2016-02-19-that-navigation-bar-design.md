---
layout: post
title: "Understanding the box model by building a navigation bar"
date: February 19, 2016
image: box-model.jpg
tags: [css]
---

Working in an agency means that most of the work I do is project-based. This means building a new design every couple of months (or less, if you know what I mean). The interesting part is, after a while, I discover each designer's style and preferences. An example would be the navigation UI, I had three consecutive projects where the navigation UI had a similar style. This particular element stood out to me, not only because I'd seen it twice before, but because I found that it touched almost every aspect of the box model.

## "So the navigation needs to look like this"

That's a phrase most of us hear pretty often. I'll be honest, the first time I saw this design, I thought to myself, it looks simple enough. No, brain. Wrong conclusion <span class="kaomoji">ಠ_ಠ</span>.

<figure>
    <svg width="370" height="47" viewBox="0 0 370 47"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 0h370v47H0z"/><path d="M22.056 25.512c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064H18.12c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H35.64c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.872 4.8c0 .032-.02.048-.064.048h-1.84c-.032 0-.048-.016-.048-.048v-9.6h-1.008c-.032 0-.048-.02-.048-.064V15.88c0-.043.016-.064.048-.064h2.896c.043 0 .064.02.064.064v11.088zm14.56-.016c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048L60.952 15.8c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064H80.92c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064H80.84c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048H95.56c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048H93c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm12.448 4.816c0 .032-.02.048-.064.048h-5.408c-.02 0-.032-.016-.032-.048v-1.632c0-.064.01-.128.032-.192.075-.117.213-.344.416-.68.203-.336.44-.725.712-1.168.272-.443.555-.907.848-1.392.293-.485.563-.928.808-1.328.245-.4.448-.733.608-1l.24-.4c.02-.02.032-.043.032-.064v-1.824c0-.032-.016-.048-.048-.048H104.6c-.032 0-.048.016-.048.048v2.24h-1.584V17.32c0-.203.037-.395.112-.576.075-.18.176-.34.304-.472.128-.133.28-.24.456-.32.176-.08.37-.12.584-.12H106.248c.427 0 .77.144 1.032.432.26.288.392.635.392 1.04v2.448c0 .053-.01.1-.032.144 0 .01-.083.152-.248.424-.165.272-.373.61-.624 1.016l-.808 1.312-.808 1.32c-.25.41-.46.752-.632 1.024-.17.272-.256.413-.256.424-.02.02-.027.04-.016.056.01.016.027.024.048.024h2.064v-1.744c0-.032.016-.048.048-.048h1.376c.043 0 .064.016.064.048v3.232zm14.304-.032c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048l-.032-11.152c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.008-1.68l1.168-1.088v-2.144c0-.032-.016-.048-.048-.048h-1.28c-.032 0-.048.016-.048.048v2.08c0 .032-.016.048-.048.048h-1.584c-.043 0-.064-.016-.064-.048v-2.064c0-.203.04-.395.12-.576.08-.18.187-.34.32-.472.133-.133.293-.237.48-.312.187-.075.387-.112.6-.112h1.76c.213 0 .413.037.6.112.187.075.347.18.48.312.133.133.24.29.32.472.08.18.12.373.12.576v1.984c0 .213-.085.39-.256.528l-1.2 1.088c-.01.01-.01.016 0 .016h1.28c.117 0 .176.085.176.256v4.384c0 .203-.04.395-.12.576-.08.18-.187.34-.32.472-.133.133-.293.237-.48.312-.187.075-.38.112-.584.112H163.8c-.213 0-.41-.037-.592-.112-.18-.075-.34-.18-.48-.312-.14-.133-.248-.29-.328-.472-.08-.18-.12-.373-.12-.576v-2.32c0-.043.02-.064.064-.064h1.584c.032 0 .048.02.048.064v2.32c0 .01.016.032.048.064h1.28c.032-.01.048-.032.048-.064v-3.472c0-.032-.01-.048-.032-.048h-1.104c-.02 0-.032-.005-.032-.016v-1.504zm17.296 6.464c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048l-.032-11.152c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H212.2c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.92.128v-5.232c-.075.213-.165.488-.272.824-.107.336-.216.693-.328 1.072-.112.38-.227.76-.344 1.144-.117.384-.224.73-.32 1.04-.096.31-.173.563-.232.76-.06.197-.088.296-.088.296-.02.064-.01.096.032.096h1.552zm1.568-6.48c.032 0 .048.02.048.064v11.088c0 .032-.016.048-.048.048h-1.52c-.032 0-.048-.016-.048-.048V23.56h-3.184c-.02 0-.032-.01-.032-.032v-1.152-.072c0-.027.005-.056.016-.088l2.064-6.416 2.704.016z" fill="#FFF"/><path d="M136 33.167h30" stroke="#FFF" stroke-width="2" stroke-linecap="square"/></g></svg>
    <figcaption>Minimalism is in, I suppose</figcaption>
</figure>

Let's break the requirements down piece by piece.

1. Each link should be delimited by a vertical line, with equal space on both the right and left. The first and last links should NOT have these delimiters on their left and right, respectively.
2. The delimiter should be the same height as the text.
3. The text on the link should have an underline applied upon hover, but there should be some breathing space between the text and the underline.
4. Hover effects apply to individual links only.
5. The entire link box should be clickable, and the hover effect should kick in once the cursor enters the link box.
6. The active state of each link should be the same as when the link is hovered.

I'm going to step through my actual thought process, which is essentially my box-model journey. If you just want the end result, [skip right to it](#step-2-style-the-navigation-to-match-design-attempt-3). But in the words of [Arthur Ashe](http://www.arthurashe.org/life-story.html) (what can I say, I'm an athlete too <span class="kaomoji">¯\\\_(ツ)\_/¯</span>):

> Success is a journey not a destination. The doing is usually more important than the outcome. - Arthur Ashe

## Step 1: Basic bare-bones mark-up and styles

Let's start off with the most basic mark-up, an unordered list in a `nav` element, with the text of each link wrapped in an `a` tag.

<pre><code class="language-markup">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;Link 1&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;Link 2&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;Link 3&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;Link 4&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

Then, apply some simple CSS to get the list in a horizontal configuration.

<pre><code class="language-css">li {
  display: inline-block;
}</code></pre>

<figure>
    <svg width="213" height="65" viewBox="0 0 213 65"><g fill="none" fill-rule="evenodd"><path fill="#FFF" d="M0 0h213v65H0z"/><a href="javascript:void(0)"><text font-family="Times" font-size="16" text-decoration="underline" fill="#00E"><tspan x="6" y="19">Link 1</tspan></text></a><a href="javascript:void(0)"><text font-family="Times" font-size="16" text-decoration="underline" fill="#00E"><tspan x="55" y="19">Link 2</tspan></text></a><a href="javascript:void(0)"><text font-family="Times" font-size="16" text-decoration="underline" fill="#00E"><tspan x="104" y="19">Link 3</tspan></text></a><a href="javascript:void(0)"><text font-family="Times" font-size="16" text-decoration="underline" fill="#00E"><tspan x="153" y="19">Link 4</tspan></text></a></g></svg>
    <figcaption>Bare-bones navigation bar</figcaption>
</figure>

## Step 2: Style the navigation to match design (Attempt 1)

This is the step with oh-so-many variations. There are loads of ways to get the navigation to look like the design, given the number of elements available to work with. I started off just putting in fonts, colours, and some padding.

<pre><code class="language-css">nav {
  font-family: 'Slim Jim', 'Impact', 'Arial Black', sans-serif;
  background: black;
}
li {
  display: inline-block;
  padding: 1rem; /* not such a good idea */
  border-left: 1px solid white; /* neither is this */
  &:first-child {
    border-left: none;
  }
}
a {
  color: white;
  text-decoration: none;
  &:hover {
    border-bottom: 2px solid white;
  }
}</code></pre>

That code will give you something like this, which somehow, doesn't fit the bill. Also, the underline only appears when you hover over the text, not the entire link box. <span class="kaomoji">(╯°□°）╯︵ ┻━┻</span>

<figure>
    <svg width="370" height="50" viewBox="0 0 370 50"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 1h370v47H0z"/><path d="M22.056 26.512c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064H18.12c-.043 0-.064-.02-.064-.064V16.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H35.64c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V16.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.872 4.8c0 .032-.02.048-.064.048h-1.84c-.032 0-.048-.016-.048-.048v-9.6h-1.008c-.032 0-.048-.02-.048-.064V16.88c0-.043.016-.064.048-.064h2.896c.043 0 .064.02.064.064v11.088zm32.432-1.456c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V16.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V16.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048H97c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm12.448 4.816c0 .032-.02.048-.064.048h-5.408c-.02 0-.032-.016-.032-.048v-1.632c0-.064.01-.128.032-.192.075-.117.213-.344.416-.68.203-.336.44-.725.712-1.168.272-.443.555-.907.848-1.392.293-.485.563-.928.808-1.328.245-.4.448-.733.608-1l.24-.4c.02-.02.032-.043.032-.064v-1.824c0-.032-.016-.048-.048-.048h-1.392c-.032 0-.048.016-.048.048v2.24h-1.584V18.32c0-.203.037-.395.112-.576.075-.18.176-.34.304-.472.128-.133.28-.24.456-.32.176-.08.37-.12.584-.12H106.984c.427 0 .77.144 1.032.432.26.288.392.635.392 1.04v2.448c0 .053-.01.1-.032.144 0 .01-.083.152-.248.424-.165.272-.373.61-.624 1.016l-.808 1.312-.808 1.32c-.25.41-.46.752-.632 1.024-.17.272-.256.413-.256.424-.02.02-.027.04-.016.056.01.016.027.024.048.024h2.064v-1.744c0-.032.016-.048.048-.048h1.376c.043 0 .064.016.064.048v3.232zm32.176-1.472c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V16.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12H147h2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V16.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.008-1.68l1.168-1.088v-2.144c0-.032-.016-.048-.048-.048h-1.28c-.032 0-.048.016-.048.048v2.08c0 .032-.016.048-.048.048h-1.584c-.043 0-.064-.016-.064-.048v-2.064c0-.203.04-.395.12-.576.08-.18.187-.34.32-.472.133-.133.293-.237.48-.312.187-.075.387-.112.6-.112h1.76c.213 0 .413.037.6.112.187.075.347.18.48.312.133.133.24.29.32.472.08.18.12.373.12.576v1.984c0 .213-.085.39-.256.528l-1.2 1.088c-.01.01-.01.016 0 .016h1.28c.117 0 .176.085.176.256v4.384c0 .203-.04.395-.12.576-.08.18-.187.34-.32.472-.133.133-.293.237-.48.312-.187.075-.38.112-.584.112h-1.776c-.213 0-.41-.037-.592-.112-.18-.075-.34-.18-.48-.312-.14-.133-.248-.29-.328-.472-.08-.18-.12-.373-.12-.576v-2.32c0-.043.02-.064.064-.064h1.584c.032 0 .048.02.048.064v2.32c0 .01.016.032.048.064h1.28c.032-.01.048-.032.048-.064v-3.472c0-.032-.01-.048-.032-.048h-1.104c-.02 0-.032-.005-.032-.016v-1.504zm35.168 5.024c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V16.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V16.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.92.128v-5.232c-.075.213-.165.488-.272.824-.107.336-.216.693-.328 1.072-.112.38-.227.76-.344 1.144-.117.384-.224.73-.32 1.04-.096.31-.173.563-.232.76-.06.197-.088.296-.088.296-.02.064-.01.096.032.096h1.552zm1.568-6.48c.032 0 .048.02.048.064v11.088c0 .032-.016.048-.048.048h-1.52c-.032 0-.048-.016-.048-.048V24.56h-3.184c-.02 0-.032-.01-.032-.032v-1.224c0-.027.005-.056.016-.088l2.064-6.416 2.704.016z" fill="#FFF"/><path d="M138 34.167h30" stroke="#FFF" stroke-width="2" stroke-linecap="square"/><path d="M62.675 1.5v47M123.4 1v47M182.8 1v47" stroke="#FFF" stroke-width="1.35" stroke-linecap="square"/></g></svg>
    <figcaption>Something doesn't look quite right here.</figcaption>
</figure>

## Interlude: Learn the box model, padawan

If you think about it, web pages are just content in boxes, but laid out in a myriad of patterns and designs. Browsers render these boxes based on the properties we give them. Each box is described to the browser based on the **box model**, which determines how much a space a box takes up on the page.

<p class="no-margin">The model is made up of four boxes, from inside to outside:</p>
<ul>
  <li class="no-margin">Content</li>
  <li class="no-margin">Padding</li>
  <li class="no-margin">Border</li>
  <li>Margin</li>
</ul>

<figure>
    <svg width="516" height="280" viewBox="0 0 516 280"><g fill="none" fill-rule="evenodd"><path stroke="#000" stroke-dasharray="3" fill="#FACD9A" d="M116 0h400v280H116z"/><path stroke="#000" fill="#FEDE97" d="M141 26h350v230H141z"/><path stroke="#000" fill="#C2D086" d="M166 51h300v180H166z"/><path stroke="#000" stroke-dasharray="3" fill="#8AB5C1" d="M206 81h220v120H206z"/><text font-size="12" fill="#000"><tspan x="123" y="17">Margin</tspan></text><text font-size="12" fill="#000"><tspan x="149" y="43">Border</tspan></text><text font-size="12" fill="#000"><tspan x="177" y="69">Padding</tspan></text><text font-size="12" fill="#000"><tspan x="295" y="143">Content</tspan></text><path d="M113.5 16.5L79.56 33.138M102.482 18.56L113.5 16.5l-8.377 7.447M138.5 44.5L79.417 73.462M127.482 46.56L138.5 44.5l-8.377 7.447M163.5 71.5l-83.327 40.847M152.482 73.56L163.5 71.5l-8.377 7.447M203.5 107.5L80.664 167.714M192.482 109.56l11.018-2.06-8.377 7.447" stroke="#000" stroke-width="2" stroke-linecap="square"/><text font-size="12" fill="#000"><tspan x="7" y="37">Margin edge</tspan></text><text font-size="12" fill="#000"><tspan x="0" y="117">Padding edge</tspan></text><text font-size="12" fill="#000"><tspan x="8" y="78">Border edge</tspan></text><text font-size="12" fill="#000"><tspan x="2" y="172">Content edge</tspan></text></g></svg>
    <figcaption>The box model, visualised</figcaption>
</figure>

### Content

This area encompasses the actual content of the element, the text, background, image(s) and so on. It stops at the content edge. Referring to the above diagram, it's everything in the blue box.

### Padding

Padding extends to the padding edge. Any content in the content area (like background or an image) will extend into the padding. The amount padding between the content area and the padding edge is controlled via the `padding` property. Refer to the green area in the diagram above.

### Border

Border extends to the border edge. By default, backgrounds extend underneath the border area. The thickness of the border is controlled by the `border` property. Refer to the yellow area in the diagram above.

### Margin

Margin extends to the margin edge. However, it is an "empty" area that separates the elements its neighbouring elements. The space the margin takes up is controlled via the `margin` property. There is one particular behaviour of margins that we need to take note of. It's called **margin collapsing**.

This happens when margins of adjacent block elements combine into a single margin, which takes the larger value of the two. This phenomena only occurs vertically, which means for `margin-top` and `margin-bottom`. Horizontal margins ( `margin-left` and `margin-right` ) never collapse. Here are some common scenarios where margins collapse.

<p class="no-margin"><strong>Adjacent block elements</strong></p>

We start off with 2 block elements stacked on top on each other. 

<pre><code class="language-markup">&lt;div class="block1"&gt;&lt;/div&gt;
&lt;div class="block2"&gt;&lt;/div&gt;</code></pre>

<pre><code class="language-css">.block1 {
  width: 300px;
  height: 100px;
  background: lawngreen;
}
.block2 {
  width: 300px;
  height: 100px;
  background: orange;
}</code></pre>

Given they have no margins, they will look something like this:

<figure>
    <svg width="300" height="200" viewBox="0 0 300 200"><g fill="none" fill-rule="evenodd"><path fill="#7ED321" d="M0 0h300v100H0z"/><text font-size="16" fill="#000"><tspan x="123" y="54">.block1</tspan></text><g><path fill="#F6A623" d="M0 100h300v100H0z"/><text font-size="16" fill="#000" transform="translate(0 100)"><tspan x="123" y="54">.block2</tspan></text></g></g></svg>
    <figcaption>2 block elements on top of each other.</figcaption>
</figure>

Now, let's add some margin to the bottom and top of the first and second element respectively.

<pre><code class="language-css">.block1 {
  width: 300px;
  height: 100px;
  background: lawngreen;
  margin-bottom: 2rem;
}
.block2 {
  width: 300px;
  height: 100px;
  background: orange;
  margin-top: 1rem;
}</code></pre>

If the first element has a margin-bottom of 2 rem, and the second element has a margin-top of 1 rem, the resultant margin between them will be 2 rem. You can think of it as the smaller margin (that of the second element) having *collapsed*.

<figure>
    <svg width="360" height="232" viewBox="0 0 360 232"><g fill="none" fill-rule="evenodd"><path fill="#7ED321" d="M0 0h300v100H0z"/><text font-size="16" fill="#000"><tspan x="123" y="54">.block1</tspan></text><path fill="#F6A623" d="M0 132h300v100H0z"/><text font-size="16" fill="#000" transform="translate(0 132)"><tspan x="123" y="54">.block2</tspan></text><path stroke="#F6A623" stroke-width="2" stroke-dasharray="3" d="M0 116h300v18H0z"/><text font-size="16" fill="#000"><tspan x="318" y="121">2 rem</tspan></text><path stroke="#7ED321" stroke-width="2" stroke-dasharray="3" d="M0 98h300v34H0z"/><path d="M304.083 101h9.74m-9.74 30h9.74M309 102.5v28" stroke="#000" stroke-width="2" stroke-linecap="square"/></g></svg>
    <figcaption>Margin collapses to 2 rem</figcaption>
</figure>

In the event of negative margins, the sum of the positive and negative margins will be the resultant value. E.g. if the top element has a margin-bottom of 2 rem and the bottom element has a margin-top of -1 rem, the resultant margin will be 1 rem.

<p class="no-margin"><strong>Parent/child elements</strong></p>

Margin collapse also occurs when both the parent and child elements have vertical margins that touch. Take a look at this code:

<pre><code class="language-css">.block2 {
  width: 300px;
  height: 100px;
  background: orange;
  margin-top: 2rem;
}
.block2-1 {
  width: 268px;
  height: 50px;
  background: yellow;
  margin-top: 1rem;
}</code></pre>

You'd think that the margin between `.block1` and `.block2` will be 2 rem and there will be a margin of 1 rem between the edge of `.block2` and the top of `.block2-1`, right? Nope. The margins collapse into one combined margin, which again, takes the larger of the 2 values.

<figure>
    <svg width="360" height="232" viewBox="0 0 360 232"><g fill="none" fill-rule="evenodd"><path fill="#7ED321" d="M0 0h300v100H0z"/><text font-size="16" fill="#000"><tspan x="123" y="54">.block1</tspan></text><path fill="#F6A623" d="M0 132h300v100H0z"/><text font-size="16" fill="#000" transform="translate(0 132)"><tspan x="123" y="82">.block2</tspan></text><path stroke="#F6A623" stroke-width="2" stroke-dasharray="3" d="M0 100h300v34H0z"/><path stroke="#F8E81C" stroke-width="2" stroke-dasharray="3" d="M16 116h268v18H16z"/><text font-size="16" fill="#000"><tspan x="318" y="121">2 rem</tspan></text><path d="M304.083 101h9.74M304.083 131h9.74M309 102.5v28" stroke="#000" stroke-width="2" stroke-linecap="square"/><path fill="#F8E81C" d="M16 132h268v57H16z"/><text font-size="16" fill="#000"><tspan x="115" y="164">.block2-1</tspan></text></g></svg>
    <figcaption>Again, the margin of .block2-1 is collapsed</figcaption>
</figure>

If there was no margin on `.block2`, and a `margin-top` of 1 rem on the child element `.block2-1`, then the space between `.block1` and `.block2` is 1 rem.

<pre><code class="language-css">.block2 {
  width: 300px;
  height: 100px;
  background: orange;
  margin-top: 0;
}
.block2-1 {
  width: 268px;
  height: 50px;
  background: yellow;
  margin-top: 1rem;
}</code></pre>

<figure>
    <svg width="367" height="217" viewBox="0 0 367 217"><g fill="none" fill-rule="evenodd"><path fill="#7ED321" d="M0 0h300v100H0z"/><text font-size="16" fill="#000"><tspan x="123" y="54">.block1</tspan></text><path fill="#F6A623" d="M0 117h300v100H0z"/><text font-size="16" fill="#000" transform="translate(0 117)"><tspan x="123" y="82">.block2</tspan></text><path stroke="#F8E81C" stroke-width="2" stroke-dasharray="3" d="M16 101h268v18H16z"/><text font-size="16" fill="#000"><tspan x="325" y="114">1 rem</tspan></text><path d="M307.083 102h9.74M307.083 117h9.74M312 103.96v12.54" stroke="#000" stroke-width="2" stroke-linecap="square"/><path fill="#F8E81C" d="M16 117h268v57H16z"/><text font-size="16" fill="#000"><tspan x="115" y="149">.block2-1</tspan></text></g></svg>
    <figcaption>Margin of inner div .block2-1 becomes the margin of .block2</figcaption>
</figure>

If you don't want margins to collapse between parent and child elements, you'll have to prevent their margins to coming in contact with each other. We can do that by adding padding or a border. Assume box-sizing has been set to `border-box`.

<pre><code class="language-css">.block2 {
  width: 300px;
  height: 100px;
  background: orange;
  margin-top: 0;
  padding: 1px;
}
.block2-1 {
  width: 268px;
  height: 50px;
  background: yellow;
  margin-top: 1rem;
}</code></pre>

<figure>
    <svg width="417" height="217" viewBox="0 0 417 217"><g fill="none" fill-rule="evenodd"><path fill="#7ED321" d="M0 0h300v100H0z"/><text font-size="16" fill="#000"><tspan x="123" y="54">.block1</tspan></text><path fill="#F6A623" d="M0 99h300v118H0z"/><text font-size="16" fill="#000" transform="translate(0 99)"><tspan x="123" y="100">.block2</tspan></text><text font-size="16" fill="#000"><tspan x="325" y="114">1 rem + 1 px</tspan></text><path d="M307.083 102h9.74M307.083 117h9.74M312 103.96v12.54" stroke="#000" stroke-width="2" stroke-linecap="square"/><path fill="#F8E81C" d="M16 117h268v57H16z"/><text font-size="16" fill="#000"><tspan x="115" y="149">.block2-1</tspan></text></g></svg>
    <figcaption>And the collapse magically disappears</figcaption>
</figure>

Also, elements which are floated, and elements which are positioned absolutely never suffer from collapsed margins.

### The box-sizing property

We also need to understand a CSS property called **box-sizing**. This property alters the default box model, which affects the way your browser calculates the width and height of your elements. There are two values this property accepts: `content-box` and `border-box`. By default, this property is set to `content-box`. 

<p class="no-margin">For example, we have some code for a simple <code>div</code>:</p>
<pre><code class="language-css">div {
  margin: 10px;
  border: 1px solid green;
  padding: 10px;
  height: 100px;
  width: 100px;
}</code></pre>

This <code>div</code>, by default (which means <code class="language-css">box-sizing: content-box;</code>), will have its height and width measured by **content** only. Now, because it also has a border and some padding, the browser will recognise the dimensons of this <code>div</code> as *122px* by *122px*.

<figure>
    <svg width="300" height="324" viewBox="0 0 300 324"><g fill="none" fill-rule="evenodd"><path stroke="#000" stroke-dasharray="3" fill="#FACD9A" d="M0 0h300v300H0z"/><path stroke="#000" fill="#FEDE97" d="M30 30h240v240H30z"/><path stroke="#000" fill="#C2D086" d="M60 60h180v180H60z"/><path stroke="#000" stroke-dasharray="3" fill="#8AB5C1" d="M90 90h120v120H90z"/><text font-size="16" fill="#000"><tspan x="144" y="229">10</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="288">10</tspan></text><text font-size="16" fill="#000"><tspan x="147" y="258">1</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="21">10</tspan></text><text font-size="16" fill="#000"><tspan x="9" y="21">Margin</tspan></text><text font-size="16" fill="#000"><tspan x="38" y="50">Border</tspan></text><text font-size="16" fill="#000"><tspan x="69" y="80">Padding</tspan></text><text font-size="16" fill="#000"><tspan x="147" y="50">1</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="80">10</tspan></text><text font-size="16" fill="#000"><tspan x="124" y="155">100 x 100</tspan></text><text font-size="16" fill="#000"><tspan x="9" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="69" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="219" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="43" y="155">1</tspan></text><text font-size="16" fill="#000"><tspan x="253" y="155">1</tspan></text><text font-size="16" fill="#000"><tspan x="282" y="155">10</tspan></text><path d="M209 211v108M91 211v108" stroke="#C40000" stroke-width="2" stroke-linecap="square" stroke-dasharray="5"/><path d="M95 316h110M105.8 319L95 316l10.8-3M194.2 319l10.8-3-10.8-3" stroke="#C40000" stroke-width="2" stroke-linecap="square"/><path fill="#FAFFFA" d="M120 307h60v16h-60z"/><text font-size="16" fill="#000"><tspan x="128" y="320">100px</tspan></text></g></svg>
    <figcaption>Content-box takes the width of the <strong>content only</strong>.</figcaption>
</figure>

If we set a <code class="language-css">box-sizing: border-box;</code> property to it, the browser sees things a little differently. The browser will consider the width and height of the content, padding and border, to be the dimensions of this <code>div</code>. So the width of the content box becomes *78px* while the height of the content box becomes *78px*.

<figure>
    <svg width="300" height="324" viewBox="0 0 300 324"><g fill="none" fill-rule="evenodd"><path stroke="#000" stroke-dasharray="3" fill="#FACD9A" d="M0 0h300v300H0z"/><path stroke="#000" fill="#FEDE97" d="M30 30h240v240H30z"/><path stroke="#000" fill="#C2D086" d="M60 60h180v180H60z"/><path stroke="#000" stroke-dasharray="3" fill="#8AB5C1" d="M90 90h120v120H90z"/><text font-size="16" fill="#000"><tspan x="144" y="229">10</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="288">10</tspan></text><text font-size="16" fill="#000"><tspan x="147" y="258">1</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="21">10</tspan></text><text font-size="16" fill="#000"><tspan x="9" y="21">Margin</tspan></text><text font-size="16" fill="#000"><tspan x="38" y="50">Border</tspan></text><text font-size="16" fill="#000"><tspan x="69" y="80">Padding</tspan></text><text font-size="16" fill="#000"><tspan x="147" y="50">1</tspan></text><text font-size="16" fill="#000"><tspan x="144" y="80">10</tspan></text><text font-size="16" fill="#000"><tspan x="130" y="155">78 x 78</tspan></text><text font-size="16" fill="#000"><tspan x="9" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="69" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="219" y="155">10</tspan></text><text font-size="16" fill="#000"><tspan x="43" y="155">1</tspan></text><text font-size="16" fill="#000"><tspan x="253" y="155">1</tspan></text><text font-size="16" fill="#000"><tspan x="282" y="155">10</tspan></text><path d="M269 271v50M31 271v50" stroke="#C40000" stroke-width="2" stroke-linecap="square" stroke-dasharray="5"/><path d="M35 316h230M45.8 319L35 316l10.8-3M254.2 319l10.8-3-10.8-3" stroke="#C40000" stroke-width="2" stroke-linecap="square"/><path fill="#FAFFFA" d="M120 307h60v16h-60z"/><text font-size="16" fill="#000"><tspan x="128" y="320">100px</tspan></text></g></svg>
    <figcaption>Border-box <strong>includes</strong> padding and border widths</figcaption>
</figure>

Alright, now that we've got all that covered, it's back to our scheduled programming.

## Step 2: Style the navigation to match design (Attempt 2)

We want the clickable area take up the entire link box. We also need to have a delimiter that's the same height at the link text. And we want the underline to only cover the length of the text itself. Unfortunately, there's no straightforward way to do this.

### Entire link box should be a clickable area

Let's try this styling thing one more time. To tackle the clickable area problem, we apply the padding to the `a` tag instead of the `li` like so:

<pre><code class="language-css">li {
  display: inline-block;
}
a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem;
}</code></pre>

Note that `a` elements by default are `display: inline` and if you want the vertical padding to take, you'll have to set it to `display: block` (you can do `display:inline-block` too). So now the entire link box is clickable. But our underline ends up on the edge of the link box too. 

### Underline the link text when clickable area is hovered

To get around that problem, we'll have to wrap the link text with a `span`. I couldn't just use the `text-decoration: underline` property because it "doesn't look good". Instead, a white bottom border was used instead.

<pre><code class="language-markup">&lt;nav&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;&lt;span&gt;Link 1&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;&lt;span&gt;Link 2&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;&lt;span&gt;Link 3&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="javascript:void(0)"&gt;&lt;span&gt;Link 4&lt;/span&gt;&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/nav&gt;</code></pre>

<pre><code class="language-css">a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem;
  &:hover span {
    border-bottom: 2px solid white;
  }
}</code></pre>

There are advantages to this, in that there are more ways you can control the look of the underline as opposed to using text decoration. By using the `:hover` pseudo-class, we can trigger the `span` to display its white bottom border the moment the cursor enters the link box.

<figure>
    <svg width="370" height="47" viewBox="0 0 370 47"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 0h370v47H0z"/><path d="M22 27.16c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.48c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048H22zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6V28.6c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048H26.8c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752V28.6c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064H33.92c-.043 0-.064-.02-.064-.064V17.048c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.872 4.8c0 .032-.02.048-.064.048h-1.84c-.032 0-.048-.016-.048-.048v-9.6H44.8c-.032 0-.048-.02-.048-.064v-1.424c0-.043.016-.064.048-.064h2.896c.043 0 .064.02.064.064v11.088zm32.432-1.456c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.48c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064H81.6c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064H81.52c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6V28.6c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752V28.6c0 .032-.016.048-.048.048H96.24c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.048c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm12.448 4.816c0 .032-.02.048-.064.048h-5.408c-.02 0-.032-.016-.032-.048V27c0-.064.01-.128.032-.192.075-.117.213-.344.416-.68.203-.336.44-.725.712-1.168.272-.443.555-.907.848-1.392.293-.485.563-.928.808-1.328.245-.4.448-.733.608-1l.24-.4c.02-.02.032-.043.032-.064v-1.824c0-.032-.016-.048-.048-.048h-1.392c-.032 0-.048.016-.048.048v2.24h-1.584v-2.224c0-.203.037-.395.112-.576.075-.18.176-.34.304-.472.128-.133.28-.24.456-.32.176-.08.37-.12.584-.12H106.928c.427 0 .77.144 1.032.432.26.288.392.635.392 1.04V21.4c0 .053-.01.1-.032.144 0 .01-.083.152-.248.424-.165.272-.373.61-.624 1.016l-.808 1.312-.808 1.32c-.25.41-.46.752-.632 1.024-.17.272-.256.413-.256.424-.02.02-.027.04-.016.056.01.016.027.024.048.024h2.064V25.4c0-.032.016-.048.048-.048h1.376c.043 0 .064.016.064.048v3.232zm32.176-1.472c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.48c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6V28.6c0 .032-.016.048-.048.048H149.2c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752V28.6c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.048c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.008-1.68l1.168-1.088v-2.144c0-.032-.016-.048-.048-.048h-1.28c-.032 0-.048.016-.048.048v2.08c0 .032-.016.048-.048.048h-1.584c-.043 0-.064-.016-.064-.048V18.92c0-.203.04-.395.12-.576.08-.18.187-.34.32-.472.133-.133.293-.237.48-.312.187-.075.387-.112.6-.112h1.76c.213 0 .413.037.6.112.187.075.347.18.48.312.133.133.24.29.32.472.08.18.12.373.12.576v1.984c0 .213-.085.39-.256.528l-1.2 1.088c-.01.01-.01.016 0 .016h1.28c.117 0 .176.085.176.256v4.384c0 .203-.04.395-.12.576-.08.18-.187.34-.32.472-.133.133-.293.237-.48.312-.187.075-.38.112-.584.112h-1.776c-.213 0-.41-.037-.592-.112-.18-.075-.34-.18-.48-.312-.14-.133-.248-.29-.328-.472-.08-.18-.12-.373-.12-.576v-2.32c0-.043.02-.064.064-.064h1.584c.032 0 .048.02.048.064v2.32c0 .01.016.032.048.064h1.28c.032-.01.048-.032.048-.064v-3.472c0-.032-.01-.048-.032-.048h-1.104c-.02 0-.032-.005-.032-.016v-1.504zm35.168 5.024c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.48c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6V28.6c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752V28.6c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.048c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.92.128v-5.232c-.075.213-.165.488-.272.824-.107.336-.216.693-.328 1.072-.112.38-.227.76-.344 1.144-.117.384-.224.73-.32 1.04-.096.31-.173.563-.232.76-.06.197-.088.296-.088.296-.02.064-.01.096.032.096h1.552zm1.568-6.48c.032 0 .048.02.048.064v11.088c0 .032-.016.048-.048.048h-1.52c-.032 0-.048-.016-.048-.048v-3.408h-3.184c-.02 0-.032-.01-.032-.032v-1.224c0-.027.005-.056.016-.088l2.064-6.416 2.704.016z" fill="#FFF"/><path d="M138 33.167h30.012" stroke="#FFF" stroke-width="2" stroke-linecap="square"/></g></svg>
    <figcaption>Okay, so far so good</figcaption>
</figure>

### Delimiter should be same height as text with equal horizontal spacing

If you followed along during that long interlude about the box model, you'd realise that this is quite tricky. Because we want the delimiter to be the same height as the text, we can't just apply a right border to the link box and call it a day (*\*glares at designer\** ). How about applying the border to the `span` instead? Keep in mind that the box model goes content, then padding, then border, then margin. Padding will extend the content, but margin will not. 

Applying a white 1 px right border to the `span` displays a delimiter that kisses the text (it is the right height, though). Okay, let's put in some right padding on the `span` as well. But padding also means that the underline will extend beyond the length of the text, not to mention it adds to the existing padding from the `a` already <span class="kaomoji">(╯°□°）╯︵ ┻━┻</span>.

<figure>
    <svg width="370" height="47" viewBox="0 0 370 47"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 0h370v47H0z"/><path d="M154 34.167h43.5" stroke="#FFF" stroke-width="2" stroke-linecap="square"/><path d="M24.056 27.512c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064H20.12c-.043 0-.064-.02-.064-.064V17.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H37.64c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.872 4.8c0 .032-.02.048-.064.048h-1.84c-.032 0-.048-.016-.048-.048v-9.6h-1.008c-.032 0-.048-.02-.048-.064V17.88c0-.043.016-.064.048-.064h2.896c.043 0 .064.02.064.064v11.088zm39.952-1.456c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm12.448 4.816c0 .032-.02.048-.064.048h-5.408c-.02 0-.032-.016-.032-.048v-1.632c0-.064.01-.128.032-.192.075-.117.213-.344.416-.68.203-.336.44-.725.712-1.168.272-.443.555-.907.848-1.392.293-.485.563-.928.808-1.328.245-.4.448-.733.608-1l.24-.4c.02-.02.032-.043.032-.064v-1.824c0-.032-.016-.048-.048-.048h-1.392c-.032 0-.048.016-.048.048v2.24h-1.584V19.32c0-.203.037-.395.112-.576.075-.18.176-.34.304-.472.128-.133.28-.24.456-.32.176-.08.37-.12.584-.12H116.504c.427 0 .77.144 1.032.432.26.288.392.635.392 1.04v2.448c0 .053-.01.1-.032.144 0 .01-.083.152-.248.424-.165.272-.373.61-.624 1.016l-.808 1.312-.808 1.32c-.25.41-.46.752-.632 1.024-.17.272-.256.413-.256.424-.02.02-.027.04-.016.056.01.016.027.024.048.024h2.064v-1.744c0-.032.016-.048.048-.048h1.376c.043 0 .064.016.064.048v3.232zm39.696-1.472c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048H162.6c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.008-1.68l1.168-1.088v-2.144c0-.032-.016-.048-.048-.048h-1.28c-.032 0-.048.016-.048.048v2.08c0 .032-.016.048-.048.048h-1.584c-.043 0-.064-.016-.064-.048v-2.064c0-.203.04-.395.12-.576.08-.18.187-.34.32-.472.133-.133.293-.237.48-.312.187-.075.387-.112.6-.112h1.76c.213 0 .413.037.6.112.187.075.347.18.48.312.133.133.24.29.32.472.08.18.12.373.12.576v1.984c0 .213-.085.39-.256.528l-1.2 1.088c-.01.01-.01.016 0 .016h1.28c.117 0 .176.085.176.256v4.384c0 .203-.04.395-.12.576-.08.18-.187.34-.32.472-.133.133-.293.237-.48.312-.187.075-.38.112-.584.112h-1.776c-.213 0-.41-.037-.592-.112-.18-.075-.34-.18-.48-.312-.14-.133-.248-.29-.328-.472-.08-.18-.12-.373-.12-.576v-2.32c0-.043.02-.064.064-.064h1.584c.032 0 .048.02.048.064v2.32c0 .01.016.032.048.064h1.28c.032-.01.048-.032.048-.064v-3.472c0-.032-.01-.048-.032-.048h-1.104c-.02 0-.032-.005-.032-.016v-1.504zm42.688 5.024c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V17.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V17.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.92.128v-5.232c-.075.213-.165.488-.272.824-.107.336-.216.693-.328 1.072-.112.38-.227.76-.344 1.144-.117.384-.224.73-.32 1.04-.096.31-.173.563-.232.76-.06.197-.088.296-.088.296-.02.064-.01.096.032.096h1.552zm1.568-6.48c.032 0 .048.02.048.064v11.088c0 .032-.016.048-.048.048h-1.52c-.032 0-.048-.016-.048-.048V25.56h-3.184c-.02 0-.032-.01-.032-.032v-1.224c0-.027.005-.056.016-.088l2.064-6.416 2.704.016z" fill="#FFF"/><path d="M63 16v16M130 16v16M198 16v16" stroke="#FFF" stroke-width="1.35" stroke-linecap="square"/></g></svg>
    <figcaption>Well, that didn't come out right</figcaption>
</figure>

## Step 2: Style the navigation to match design (Attempt 3)

Third time's the charm (otherwise I might throw my keyboard out the window...just kidding). But we've learnt a lot from all those previous missteps. We now know we probably shouldn't use the `span` to handle the delimiter. There is one more thing we can use though, the `:after` pseudo-element. Pseudo-elements are mainly used for styling purposes, which suits the situation well.

<pre><code class="language-css">a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem 0rem 1rem 1rem;
  &:after {
    content: '';
    display: inline-block;
    vertical-align: middle;
    width: 1px;
    height: 1rem;
    border-right: 1px solid white;
    margin-left: 1rem;
  }
  &:hover span {
    border-bottom: 2px solid white;
  }
}</code></pre>

Pseudo-elements are inline by default, so we set `display: inline-block` to allow us to style it accordingly. Because the pseudo-elements are inserted before or after the *content* of the element, a margin on the pseudo-element becomes an extension of the content of the element itself. So this additional space is still a clickable area.

The final touch is to remove the right padding on the `a` to compensate for the left margin on the pseudo-element. And we're finally done!

***Update (@ 21 Feb 2016):*** [Carlos Tur Arrom](http://11bits.es/) kindly pointed out that I forgot to remove the delimiter on the last link. To do that, we'll have to catch the last list item and remove the content in the `:after` pseudo-element from it. Instead of adding an additional class, I chose to use the `:last-child` pseudo-class.

<pre><code class="language-css">li {
  display: inline-block;
  &:last-child a:after {
    border-right: none;
  }
}</code></pre> 

 In the event I have to add additional links to the menu in future, the code will still be valid. Anyway, thanks to Carlos' sharp eye for noticing! <span class="emoji" role="img" tabindex="0" aria-label="grinning face with smiling eyes">&#x1F601;</span>

<figure>
    <svg width="370" height="47" viewBox="0 0 370 47"><g fill="none" fill-rule="evenodd"><path fill="#000" d="M0 0h370v47H0z"/><path d="M22.056 25.512c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064H18.12c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H35.64c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.872 4.8c0 .032-.02.048-.064.048h-1.84c-.032 0-.048-.016-.048-.048v-9.6h-1.008c-.032 0-.048-.02-.048-.064V15.88c0-.043.016-.064.048-.064h2.896c.043 0 .064.02.064.064v11.088zm14.56-.016c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048L60.952 15.8c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064H80.92c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064H80.84c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048H95.56c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048H93c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm12.448 4.816c0 .032-.02.048-.064.048h-5.408c-.02 0-.032-.016-.032-.048v-1.632c0-.064.01-.128.032-.192.075-.117.213-.344.416-.68.203-.336.44-.725.712-1.168.272-.443.555-.907.848-1.392.293-.485.563-.928.808-1.328.245-.4.448-.733.608-1l.24-.4c.02-.02.032-.043.032-.064v-1.824c0-.032-.016-.048-.048-.048H104.6c-.032 0-.048.016-.048.048v2.24h-1.584V17.32c0-.203.037-.395.112-.576.075-.18.176-.34.304-.472.128-.133.28-.24.456-.32.176-.08.37-.12.584-.12H106.248c.427 0 .77.144 1.032.432.26.288.392.635.392 1.04v2.448c0 .053-.01.1-.032.144 0 .01-.083.152-.248.424-.165.272-.373.61-.624 1.016l-.808 1.312-.808 1.32c-.25.41-.46.752-.632 1.024-.17.272-.256.413-.256.424-.02.02-.027.04-.016.056.01.016.027.024.048.024h2.064v-1.744c0-.032.016-.048.048-.048h1.376c.043 0 .064.016.064.048v3.232zm14.304-.032c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048l-.032-11.152c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184h-1.568c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.008-1.68l1.168-1.088v-2.144c0-.032-.016-.048-.048-.048h-1.28c-.032 0-.048.016-.048.048v2.08c0 .032-.016.048-.048.048h-1.584c-.043 0-.064-.016-.064-.048v-2.064c0-.203.04-.395.12-.576.08-.18.187-.34.32-.472.133-.133.293-.237.48-.312.187-.075.387-.112.6-.112h1.76c.213 0 .413.037.6.112.187.075.347.18.48.312.133.133.24.29.32.472.08.18.12.373.12.576v1.984c0 .213-.085.39-.256.528l-1.2 1.088c-.01.01-.01.016 0 .016h1.28c.117 0 .176.085.176.256v4.384c0 .203-.04.395-.12.576-.08.18-.187.34-.32.472-.133.133-.293.237-.48.312-.187.075-.38.112-.584.112H163.8c-.213 0-.41-.037-.592-.112-.18-.075-.34-.18-.48-.312-.14-.133-.248-.29-.328-.472-.08-.18-.12-.373-.12-.576v-2.32c0-.043.02-.064.064-.064h1.584c.032 0 .048.02.048.064v2.32c0 .01.016.032.048.064h1.28c.032-.01.048-.032.048-.064v-3.472c0-.032-.01-.048-.032-.048h-1.104c-.02 0-.032-.005-.032-.016v-1.504zm17.296 6.464c-.01.02-.016.035-.016.04 0 .005-.01.008-.032.008h-1.28c-.043 0-.064-.016-.064-.048l-.032-11.152c0-.032.02-.048.064-.048h1.232c.043 0 .07.016.08.048l.048 11.152zm17.136-1.44c.043 0 .064.02.064.064v1.344c-.02.043-.043.064-.064.064h-3.936c-.043 0-.064-.02-.064-.064V15.832c0-.032.02-.048.064-.048h1.632c.043 0 .064.016.064.048v9.632c0 .032.016.048.048.048h2.192zm2.96-6.416c.02 0 .043.016.064.048v7.792c-.02.043-.043.064-.064.064h-1.552c-.043 0-.064-.02-.064-.064v-7.792c0-.032.02-.048.064-.048h1.552zm0-3.36c.02 0 .043.016.064.048v1.584c-.02.043-.043.064-.064.064h-1.632c-.043 0-.064-.02-.064-.064v-1.584c0-.032.02-.048.064-.048h1.632zm5.664 3.36c.203 0 .397.04.584.12.187.08.347.187.48.32s.24.293.32.48c.08.187.12.387.12.6v6.336c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.4c0-.032-.016-.048-.048-.048h-1.92c-.032 0-.048.016-.048.048v6.4c0 .032-.016.048-.048.048h-1.584c-.032 0-.048-.016-.048-.048v-6.336c0-.213.04-.413.12-.6.08-.187.187-.347.32-.48s.29-.24.472-.32c.18-.08.38-.12.592-.12h-.016 2.384zm7.264 3.072c.075 0 .205.008.392.024.187.016.38.067.576.152.197.085.37.22.52.4.15.18.224.432.224.752v3.456c0 .032-.016.048-.048.048h-1.504c-.032 0-.048-.016-.048-.048v-2.8c0-.213-.027-.405-.08-.576-.053-.15-.136-.285-.248-.408-.112-.123-.285-.184-.52-.184H212.2c-.032.02-.048.043-.048.064v3.888c0 .043-.016.064-.048.064h-1.568c-.043 0-.064-.02-.064-.064V15.4c0-.032.02-.048.064-.048h1.568c.032 0 .048.016.048.048v6.32c0 .032.02.048.064.048h.752c.075 0 .16-.008.256-.024s.19-.064.28-.144c.09-.08.165-.205.224-.376.06-.17.088-.405.088-.704v-1.376c0-.032.016-.048.048-.048h1.504c.032 0 .048.016.048.048v1.776c0 .256-.035.464-.104.624-.07.16-.152.285-.248.376-.096.09-.195.152-.296.184-.1.032-.19.053-.264.064zm9.92.128v-5.232c-.075.213-.165.488-.272.824-.107.336-.216.693-.328 1.072-.112.38-.227.76-.344 1.144-.117.384-.224.73-.32 1.04-.096.31-.173.563-.232.76-.06.197-.088.296-.088.296-.02.064-.01.096.032.096h1.552zm1.568-6.48c.032 0 .048.02.048.064v11.088c0 .032-.016.048-.048.048h-1.52c-.032 0-.048-.016-.048-.048V23.56h-3.184c-.02 0-.032-.01-.032-.032v-1.152-.072c0-.027.005-.056.016-.088l2.064-6.416 2.704.016z" fill="#FFF"/><path d="M136 33.167h30" stroke="#FFF" stroke-width="2" stroke-linecap="square"/></g></svg>
    <figcaption>This took a while to get too =_=</figcaption>
</figure>

If the amount of code on the pseudo-element gets to you, you can always just use the pipe character instead. The end result looks similar anyway.

<pre><code class="language-css">a {
  color: white;
  text-decoration: none;
  display: block;
  padding: 1rem 0rem 1rem 1rem;
  &:after {
    content: '|';
    margin-left: 1rem;
  }
}</code></pre>

## Wrapping up

In spite of all the time I spent building this particular navigation bar, I do appreciate the experience. I probably wouldn't have understood the box model completely if not for it. In the event my designer ever reads this article, please know that in spite of all the times I show my "angry developer face" (something like this <span class="kaomoji">ಠ_ಠ</span>), I still love you all the same ❤.

## Further reading

<ul>
  <li class="no-margin"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/box-sizing">Box sizing</a> on <a href="https://developer.mozilla.org/en-US/">MDN</a></li>
  <li class="no-margin"><a href="https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Box_Model/Introduction_to_the_CSS_box_model">Introduction to the CSS box model</a> on <a href="https://developer.mozilla.org/en-US/">MDN</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/CSS2/box.html#collapsing-margins">Collapsing margins</a> section of <a href="https://www.w3.org/TR/CSS2/box.html">Box Model Specification</a></li>
  <li><a href="http://csswizardry.com/2012/06/single-direction-margin-declarations/">Single-direction margin declarations</a> by <a href="http://csswizardry.com/">Harry Roberts</a></li>
</ul>
