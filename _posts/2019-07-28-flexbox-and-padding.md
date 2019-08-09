---
layout: post
title: "Flexbox and padding"
date: Jul 28, 2019
tags: [css]
hascodepen: true
---
I just saw that my previous article on magical kittencorns and CSS animations worked out to an 18 minute read. Which is apparently terrible for getting people to read the whole thing. Good thing I'm the one reading my own articles, huh?

Anyway, this is a really short one, which was borne out of a discussion with my mate, [Wei](https://twitter.com/wgao19), about use of padding in a flex formatting context. Because that's what friends talk about in casual conversation.

But I think it is a fairly common problem which people may run into so here's a write-up.

## Scenario

If you have tried to apply padding to a flex container with an horizontal overflow behaviour of scroll, you might notice that the padding is not applied to the flex end side of your container.

<div class="p159 problem">
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
</div>

<p><strike>This is because the available space allocated to flex items by the browser under such circumstances is: the width of flex container's containing block minus its margin, border and padding in the horizontal direction.</strike></p>

<p><strike>The relevant section of the specification is [CSS Flexible Box Layout Module Level 1: 9.2 Line Sizing](https://www.w3.org/TR/css-flexbox-1/#line-sizing)</strike></p>

*Update:*  
*[Konstantin Rouda](https://twitter.com/KonstantinRouda) and [Šime Vidas](https://twitter.com/simevidas) raised the point that my original explanation didn't really explain why there is start padding but no end padding. And upon further digging, I found a long standing dispute about how overflow content should be handled while considering the constraints of Web-compat.*

This is not an issue that only affects Flexbox layouts, it affects scroll containers with block and inline children differently as well. CSS2.1 was not clear about overflow, and that probably resulted in different browser vendors implementing different behaviour. For example, Webkit had (has?) different policies for block children and inline children.

From the GitHub issue [[css-overflow-3] Clarify padding-bottom in overflow content](https://github.com/w3c/csswg-drafts/issues/129), [fantasai](https://twitter.com/fantasai) commented that:

> I think historically the issue is that browsers didn't want to trigger scrollbars for overflow: auto unless visible content was overflowing the inner border edge, so they didn't count padding.

Things have not been resolved yet, and anyone who is interested can read through the following relevant links:

- [Bug 748518 padding-bottom/right(block-end/inline-end) is ignored with overflow:auto/scroll because it extends in from the border-box rather than out from the scrollable area](https://bugzilla.mozilla.org/show_bug.cgi?id=748518)
- [[css-grid-1] Include padding in scrollable overflow area](https://github.com/w3c/csswg-drafts/issues/3665)
- [[css-overflow-3] Clarify padding-bottom in overflow content](https://github.com/w3c/csswg-drafts/issues/129)
- [CSS Overflow Module Level 3](https://www.w3.org/TR/css-overflow-3/)
- [Bug 1527949 Implement whatever more-interoperable behavior the CSSWG comes up with, for making "end" padding scrollable on scrollable elements](https://bugzilla.mozilla.org/show_bug.cgi?id=1527949)

However, having items in a scrolling container with padding is a relatively common situation and there are a couple of workarounds to achieve the desired effect. Both workarounds are sort of hacks though. Here's the markup for a basic flex container with some items in it.

```html
<div class="flex">
  <div class="flex__item card">
    <img src="http://placekitten.com/150/150">
    <div class="card__txt">
      <h3>Sleep more</h3>
    </div>
  </div>
  <div class="flex__item card">
    <img src="http://placekitten.com/150/150">
    <div class="card__txt">
      <h3>Sleep more</h3>
    </div>
  </div>
  <!–– repeat for like 10 more cards ––>
</div>
```

### Using border

One option is to style up the border so it looks like padding around the items in the container.

```css
.border {
  border: 1em #4abc41 solid;
}
```

A potential downside to this solution is the position of the scrollbar. Depending on the operating system, this may or may not be an issue. For example, on Windows (screenshot shown below), it is fairly obvious. On Android, the scrollbar is barely noticeable.

<img src="{{ site.url }}/assets/images/posts/flex-padding/border.png" alt="Border solution rendered on Windows machine">

I'd like to take this opportunity to talk about the [CSS Scrollbars Module Level 1](https://drafts.csswg.org/css-scrollbars-1/) specification which is currently an Editor's Draft. It introduces 2 new CSS properties for scrollbar styling, `scrollbar-color` and `scrollbar-width`. Firefox has supported them since version 64.

More information written up in [Issue № 1022 of Web Platform News](https://webplatform.news/issues/2019-07-25).

<div class="p159 border">
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
</div>

### Using the `::after` pseudo-element

Another option is to utilise the `::after` pseudo-element on the flex container. `::before` and `::after` are generated content, and are inserted just inside their associated element. In other words, it will be rendered as a child element inside the flex container.

```css
.pseudo-elem {
  padding: 1em;
  
  &::after {
    content: '';
    padding: 0.5em;
  }
}
```

You do have to make sure that the padding on the `::after` pseudo-element is half that of the padding used on the flex container, because padding is applied all around the pseudo-element. But if you go with `padding-left` or `padding-right`, then you can use the same value as the padding on the flex container.

<div class="p159 pseudo-elem">
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
  <div class="p159__item card">
    <img src="{{ site.url }}/assets/images/posts/flex-padding/rabbits.jpg" srcset="{{ site.url }}/assets/images/posts/flex-padding/rabbits@2x.jpg 2x" alt="2 rabbits taking a nap">
    <div class="card__txt">
      <p>Sleep more</p>
    </div>
  </div>
</div>

## Wrapping up

I promised this would be short. Anyway, if you want to take a look at the code and mess around with it. Or even better, add to the list of workarounds, please feel free to do so. And ping me with your solution!

<p class="codepen" data-height="500" data-theme-id="9162" data-default-tab="result" data-user="huijing" data-slug-hash="MMPPeL" style="height: 463px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;" data-pen-title="Flex container padding hack">
  <span>See the Pen <a href="https://codepen.io/huijing/pen/MMPPeL/">
  Flex container padding hack</a> by Chen Hui Jing (<a href="https://codepen.io/huijing">@huijing</a>)
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>