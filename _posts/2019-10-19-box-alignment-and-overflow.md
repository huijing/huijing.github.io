---
layout: post
title: "Box alignment and overflow"
date: Oct 19, 2019
tags: [css]
---
Recently I was working on a few chat interfaces, and the general layout is typical to what you would see in most chat applications. There would be an input kissing the bottom of the window, with messages displayed in the chat window on either side depending on who said what.

Usually your own messages would appear on the right, while received messages would appear on the left. Of course there are also some interfaces (Slack) which align all the messages on the left, but the ones I use regularly (Whatsapp, WeChat, Twitter) use the aforementioned left-right style.

Such an interface is not tricky to build with Flexbox and the Box Alignment properties. But I did create a bug in the interface when using the box alignment properties for the messages area. TL:DR, the fix involves using auto margins instead of the `justify-content`. Intrigued? Read on.

## CSS-ing the chat interface

First, I'll quickly give a broad overview of how a basic chat interface's CSS looks like. So the layout should look something like this:

<img src="{{ site.url }}/assets/images/posts/overflow/chat-ui.png" srcset="{{ site.url }}/assets/images/posts/overflow/chat-ui@2x.png 2x" alt="Rough sketch of chat interface">

You would need a container for the entire chat window, divy-ed up into a header, a messages area and the input area right at the bottom. Within the messages area, individual messages would be their own element, laid out left and right.

```html
<aside id="chatWindow">
  <div class="header">
    <h1>Live support</h1>
    <button class="btn-close" id="closeChat">
      <svg viewBox="0 0 47.971 47.971"><path fill="white" d="M28.228 23.986L47.092 5.122a2.998 2.998 0 000-4.242 2.998 2.998 0 00-4.242 0L23.986 19.744 5.121.88a2.998 2.998 0 00-4.242 0 2.998 2.998 0 000 4.242l18.865 18.864L.879 42.85a2.998 2.998 0 104.242 4.241l18.865-18.864L42.85 47.091c.586.586 1.354.879 2.121.879s1.535-.293 2.121-.879a2.998 2.998 0 000-4.242L28.228 23.986z"/></svg>
    </button>
  </div>

  <div id="message-area" class="messages">
  </div>

  <div class="controls">
    <form id="textentry">
      <input id="textbox" type="text">
      <input id="submit" type="submit" value="Send">
    </form>
  </div>
</aside>
```

For this particular example, I've used an `<aside>` element as the chat window body, and applied a `display: flex` on it. The entire chat window layout is pretty much going to be powered by Flexbox.

```css
aside {
  display: flex;
  flex-direction: column;
  height: 100vh;
}

.header {
  display: flex; /* Because I have a close button I want aligned with the title text */
  align-items: center;
  /* Visual styles not included here but they exist */
}

.messages {
  flex: 1; /* Allows the message area to expand with viewport height */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
}

.controls {
  /* Visual styles, not much layout */
}
```
A `flex: 1` on the message area while its parent (`<aside>`) is a flex container with a flex direction of column means that the message area will grow to fill up additional space as viewport height increases, or vice versa.

Use of a single positive integer as the `flex` value on a flex item is making use of one of the flex keyword values.This keyword resolves to a `flex-grow` value of whatever the positive integer was, a `flex-shrink` value of `1` and a `flex-basis` of `0`.

As for the chat bubbles within the message area, each role has their own class, e.g. `agent` and `input`. For the chat bubble that is supposed to be on the left, you don't really need to do anything, and for the chat bubble that is supposed to be on the right, add an `align-self: flex-end`.

<img srcset="{{ site.url }}/assets/images/posts/overflow/left-right-480.png 480w, {{ site.url }}/assets/images/posts/overflow/left-right-640.png 640w, {{ site.url }}/assets/images/posts/overflow/left-right-960.png 960w, {{ site.url }}/assets/images/posts/overflow/left-right-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/overflow/left-right-640.png" alt="Your own message on the right, received messages on the left">

## The data loss issue

As more messages get exchanged, the total height of all the messages would exceed that of the message area hence we would like the message area to be scrollable.

Initially, in order to have the chat messages start from the bottom of the message area, I had set a `justify-content: flex-end` on the message area. This works well enough. At first.

```css
.messages {
  flex: 1; /* Allows the message area to expand with viewport height */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: flex-end;
}
```

<img srcset="{{ site.url }}/assets/images/posts/overflow/dataloss-480.png 480w, {{ site.url }}/assets/images/posts/overflow/dataloss-640.png 640w, {{ site.url }}/assets/images/posts/overflow/dataloss-960.png 960w, {{ site.url }}/assets/images/posts/overflow/dataloss-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/overflow/dataloss-640.png" alt="Using box alignment to send the message bubble to the bottom of the message area">

Unfortunately, once we get more messages than the message area can contain, we suffer a data loss issue. We are not able to scroll to the earliest messages.

<img srcset="{{ site.url }}/assets/images/posts/overflow/dataloss2-480.png 480w, {{ site.url }}/assets/images/posts/overflow/dataloss2-640.png 640w, {{ site.url }}/assets/images/posts/overflow/dataloss2-960.png 960w, {{ site.url }}/assets/images/posts/overflow/dataloss2-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/overflow/dataloss2-640.png" alt="Data loss when the messages overflow the message area">

If you peek into the specification for box alignment, there's this bit:

> When the alignment subject is larger than the alignment container, it will overflow. Some alignment modes, if honored in this situation, may cause data loss: for example, if the contents of a sidebar are centered, when they overflow they may **send part of their boxes past the viewport’s start edge**, which can’t be scrolled to.

And if you look into the flexbox specification, there's also this bit:

> Overflowing boxes ignore their auto margins and overflow in the end direction.

Now if you use the *overflow alignment* keyword of `safe`, what the browser will do is change the alignment mode back to one that does **not** result in data loss. And you can try this out in Firefox to see for yourself.

```css
.messages {
  flex: 1; /* Allows the message area to expand with viewport height */
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  justify-content: safe flex-end;
}
```

<img srcset="{{ site.url }}/assets/images/posts/overflow/safe-480.png 480w, {{ site.url }}/assets/images/posts/overflow/safe-640.png 640w, {{ site.url }}/assets/images/posts/overflow/safe-960.png 960w, {{ site.url }}/assets/images/posts/overflow/safe-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/overflow/safe-640.png" alt="Using the safe keyword with alignment properties">

But then the original intention of having the messages start at the bottom of the message area cannot be achieved. The browser has forced the alignment to `flex-start` to prevent the data loss, so we're back to square one.

## The auto-margins fix

The solution I came up with is, instead of using the box alignment properties, I'd set a `margin-top: auto` on the first child of the messages area.

If you peek at the Flexbox specification this time, you can find this bit:

> Prior to alignment via justify-content and align-self, any positive free space is distributed to auto margins in that dimension.

Regardless of how many message bubbles are in the message area, the top auto-margin on the first message bubble will push all the messages down to the bottom of the message area. And when there are many messages, you will still be able to scroll the message area.

<figure>
    <figcaption>Scrollable content</figcaption>
    <video src="{{ site.url }}/assets/videos/of-scroll.mp4" controls loop autoplay></video>
</figure>

## References and reading

<ul>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-align-3/#overflow-values">CSS Box Alignment Module Level 3</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/css-flexbox-1/#auto-margins">CSS Flexible Box Layout Module Level 1</a></li>
  <li class="no-margin"><a href="https://www.smashingmagazine.com/2019/09/overflow-data-loss-css/">Overflow And Data Loss In CSS</a></li>
  <li><a href="https://noti.st/rachelandrew/p5gKlm/making-things-better-redefining-the-technical-possibilities-of-css">Making Things Better: Redefining the Technical Possibilities of CSS</a></li>
</ul>