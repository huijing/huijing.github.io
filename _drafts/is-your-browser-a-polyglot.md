---
layout: post
title: "Is your browser a polyglot?"
date: Dec 31, 2019
tags: [javascript, css]
---
Over the course of this year, I've gone over to [Wei](https://uuei.io/)'s workplace numerous times to disturb her and her colleagues during their internal sharing, not to be confused with the community meetup, [React Knowledgeable](https://reactknowledgeable.org/). I think the internal sharing's unofficial name is RK Originals, maybe. Who knows?

Sometimes I just sit there and do nothing, other times, I talk about stuff. The last thing I talked about was the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), which stemmed from one of the many stupid ideas I have. Basically, I wanted to yell at my browser and make it change colours on a website.

It was for the 4th anniversary of [Talk.CSS](https://singaporecss.github.io/45/).

What do you mean, why?

So anyway, [stupid website](https://singaporecss.github.io/colour-speech/) was built, and the yelling worked. I had to yell because until today, I have no idea where the microphone is on my MacBook. <span class="kaomoji">¯\\\_(ツ)_/¯</span>

During the talk, we messed around with the different options for voices (and hence accents), but we soon found that other than English, the options for other languages were limited.

Which led me to dig a little deeper into how international the Web Speech API actually is.

## What is this Web Speech API?

The Web Speech API is not a web standard, it is a community report developed and published by the [Speech API Community Group](https://www.w3.org/community/speech-api/), with the first draft released by in 2012.

According to [the document](https://wicg.github.io/speech-api/), this API is meant to:

> enable developers to use scripting to generate text-to-speech output and to use speech recognition as an input for forms, continuous dictation and control