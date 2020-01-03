---
layout: post
title: "Is your browser a polyglot?"
date: Jan 06, 2020
tags: [javascript, css]
hascaniuse: true
---
Over the course of this year, I've gone over to [Wei](https://uuei.io/)'s workplace numerous times to disturb her and her colleagues during their internal sharing, not to be confused with the community meetup, [React Knowledgeable](https://reactknowledgeable.org/). I think the internal sharing's unofficial name is RK Originals, maybe. Who knows?

Sometimes I just sit there and do nothing, other times, I talk about stuff. The last thing I talked about was the [Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API), which stemmed from one of the many stupid ideas I have. Basically, I wanted to yell at my browser and make it change colours on a website.

<img srcset="{{ site.url }}/assets/images/posts/web-speech/site-480.png 480w, {{ site.url }}/assets/images/posts/web-speech/site-640.png 640w, {{ site.url }}/assets/images/posts/web-speech/site-960.png 960w, {{ site.url }}/assets/images/posts/web-speech/site-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/web-speech/site-640.png" alt="Let's talk CSS colours website">

It was for the 4th anniversary of [Talk.CSS](https://singaporecss.github.io/45/).

What do you mean, why?

So anyway, [stupid website](https://singaporecss.github.io/colour-speech/) was built, and the yelling worked. I had to yell because until today, I have no idea where the microphone is on my MacBook. <span class="kaomoji">¯\\\_(ツ)_/¯</span>

During the talk, we messed around with the different options for voices (and hence accents), but we soon found that other than English, the options for other languages were limited.

Which led me to dig a little deeper into how international the Web Speech API actually is.

## What is this Web Speech API?

The Web Speech API is not a web standard, it is a community report developed and published by the [Speech API Community Group](https://www.w3.org/community/speech-api/), with the first draft released by in 2012.

According to [the document](https://wicg.github.io/speech-api/), this API is meant to:

> enable developers to use scripting to generate text-to-speech output and to use speech recognition as an input for forms, continuous dictation and control

Note the **2 distinct parts**, namely *text-to-speech*, where your browser can read out the text on the screen, and *speech recognition*, which lets us use voice as an input and interface medium.

Speech recognition in the browser. Now that sounds pretty interesting. Browser APIs are essentially Javascript. Which is why someone like me who never went to school for Computer Science, can somehow cobble together projects that go beyond just a webpage.

I love the web.

But upon some further research, I soon realised that speech-to-text is not like text-to-speech. If you read through the [Mozilla Wiki for the Web Speech API](https://wiki.mozilla.org/Web_Speech_API_-_Speech_Recognition), it states that the speech recognition portion of the WebSpeech API allows websites to enable **speech input** within their experiences.

But it is **not** speech recognition by the browser. It is up to individual sites to determine how voice is integrated into the experience, how it is triggered and how to display recognition results.

In a sense, speech-to-text is slightly more complicated than text-to-speech because the processing is not done locally. Instead, the audio clip is sent over to Google’s [Cloud Speech-to-Text](https://cloud.google.com/speech-to-text/).

The Speech to Text section of [Google's privacy whitepaper](https://www.google.com/chrome/privacy/whitepaper.html#speech) states that:

> Chrome supports the Web Speech API, a mechanism for converting speech to text on a web page. It uses Google's servers to perform the conversion.  
> Using the feature sends an audio recording to Google (audio data is not sent directly to the page itself), along with the domain of the website using the API, your default browser language and the language settings of the website.  
> Cookies are not sent along with these requests.

This is why support for the `SpeechRecognition` interface of the WebSpeech API currently looks like this:

<p class="ciu_embed" data-feature="speech-recognition" data-periods="future_1,current,past_1,past_2" data-accessible-colours="false">
  <a href="http://caniuse.com/#feat=speech-recognition">
    <picture>
      <source type="image/webp" srcset="https://caniuse.bitsofco.de/image/speech-recognition.webp">
      <img src="https://caniuse.bitsofco.de/image/speech-recognition.png" alt="Data on support for the speech-recognition feature across the major browsers from caniuse.com">
    </picture>
  </a>
</p>

*Note: I'm using the caniuse.com embed, which as of 28 Dec 2019, shows experimental support in Chromium-powered browsers only. So if you're reading this in the far future, I hope it's more green than red.*

Then I discovered [Mozilla's DeepSpeech](https://github.com/mozilla/DeepSpeech), an open source Speech-To-Text engine, which implements a Tensorflow-trained model based on this research paper titled [Deep Speech: Scaling up end-to-end speech recognition](https://arxiv.org/abs/1412.5567), published by Baidu.

In Firefox Nightly 72.0a1 (2019-10-22) and newer, the SpeechRecognition API is available behind a flag, and you have to turn the *media.webspeech.recognition.enable* and *media.webspeech.recognition.force_enable* preferences on to use it.

For now, the audio is processed by Google’s Cloud Speech-to-Text but Mozilla has plans to replace the service with DeepSpeech in 2020.

## Making my browser understand my yelling

People who are a lot more early-adopter than myself have been talking about voice interfaces and the WebSpeech API for years prior. So in a bid to get myself a little more familiarised, I decided to do what many web developers seem to gravitate toward.

I built a website (I don't know what constitutes an app so <span class="kaomoji">¯\\\_(ツ)_/¯</span>).

Specifically, I built a website I can yell CSS at. Okay, slightly untrue. I technically am yelling colours at the website, but named colours are legitimate CSS values, so…

This didn't require too much work because CSS values are by default in English (as with practically all programming languages). Speech-to-text quality for the English language is probably the most spot-on around, I'm guessing.

### A bit about speech recognition

Speech recognition systems are meant to help computers parse and identify what is being said from human speech. If this sounds simple to you, I can assure you it is not. I mean, as a human, I can't even parse and identify what other humans say sometimes.

So current technology is unable to listen to any speech in any context and transcribe it accurately. Current speech recognition systems limit the bounds of what they listen to by using grammars. Grammars determine what the system should listen for and describe the utterances an user might say.

The WebSpeech API uses the [JSpeech Grammar Format](https://www.w3.org/TR/jsgf/). If you peek at this specification, it defines a grammar as a set of rules that together define what may be spoken. I'm calling mine `<colour>`.

```javascript
const colours = ['maroon', 'darkred', 'brown', … /* All 148 named CSS colours as an array of strings */]; 
const grammar = '#JSGF V1.0; grammar colours; public <colour> = ' + colours.join(' | ') + ' ;';
```

The `|` character is used as a separator for the list of colours I want in my defined grammar. Given that we have 148 named CSS colours, it'd be easier to have them in an array then use `join()` to format the strings nicely.

### Basic idea and interface

What I had in mind at the start was something along the lines of this:

<img srcset="{{ site.url }}/assets/images/posts/web-speech/idea-480.jpg 480w, {{ site.url }}/assets/images/posts/web-speech/idea-640.jpg 640w, {{ site.url }}/assets/images/posts/web-speech/idea-960.jpg 960w, {{ site.url }}/assets/images/posts/web-speech/idea-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/web-speech/idea-640.jpg" alt="Initial idea sketch">

I assumed there needed to be some sort of button to trigger the permissions prompt that I often see when the browser wants to use your microphone for things. Since it's the only thing on the page, might as well make it huge, right?

And then, once we can capture someone's voice, we can transcribe that into a usable CSS named colour to be applied to the background of the site, preferably using CSS custom properties.

```css
:root {
  --bg-colour: transparent;
}

body {
  background-color: var(--bg-colour, transparent);
}
```

```javascript
/* namedColour should be the result from the speech recognition engine */
docBody.style.setProperty('--bg-colour', namedColour);
```

That's the general idea.

### Someone did it already

A little bit into the project, I found that MDN already had a [tutorial](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API) plus [demo](https://mdn.github.io/web-speech-api/speech-color-changer/) of a Speech color changer. Oh well.

But I must say that it is a very in-depth and well-written tutorial so if you're interested in getting started, I highly recommend it.

The bits of my website which use `SpeechRecognition` and `SpeechSynthesis` are similar to the demo, but I still ran into some trouble with the [voiceschanged](https://wicg.github.io/speech-api/#eventdef-speechsynthesis-voiceschanged) event for cross-browser compatibility.

I suppose that's what you get with experimental technologies and implementations, code gets stale real quick. So while we are on the topic of cross-browser support, I start off the code with this bit:

```javascript
const speechRecognition = window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition || window.SpeechRecognition;
const speechGrammarList =  window.webkitSpeechGrammarList || window.mozSpeechGrammarList || window.msSpeechGrammarList || window.oSpeechGrammarList || window.SpeechGrammarList;
const speechSynthesis = window.speechSynthesis;
```

That's pretty much to cover different browser implementations if they decide to use vendor-prefixes.

```javascript
if (speechRecognition !== undefined) {
  addClass('speech');
  detectSpeech();
  
} else {
  addClass('no-speech');
}
```

Also, sprinkle on some CSS classes to indicate if a browser doesn't support `SpeechRecognition` yet. I used to do this with pseudo-elements when I didn't or couldn't add an additional HTML element to hold the warning text, but realised that was a really inaccessible way to do things.

My suggestion for messing around with experimental APIs is to have a script to detect if the browser supports it or not, then design and build your demo or application to handle either scenario. It doesn't have to be a major effort, sometimes a small message will do.

### Less talk more code

Now, on to the meat of the project.

```javascript
function detectSpeech() {
  const recognition = new speechRecognition();
  const speechRecognitionList = new speechGrammarList();
  speechRecognitionList.addFromString(grammar, 1);
  recognition.grammars = speechRecognitionList;
  //recognition.continuous = false;
  recognition.lang = 'en-US';
  recognition.interimResults = false;
  recognition.maxAlternatives = 1;
}
```

```javascript
micBtn.addEventListener('click', function() {
  recognition.start();
  consoleLog.innerHTML = 'Ready to receive a colour command.';
}, false);

recognition.onresult = function(event) {
  const last = event.results.length - 1;
  const colour = event.results[last][0].transcript;
  const sanitiseColour = colour.replace(/\s/g, '');
  consoleLog.innerHTML = 'You probably said: ' + sanitiseColour + '.\nConfidence: ' + event.results[0][0].confidence;
  readResponse('You probably said: ' + colour);
  docBody.style.setProperty('--bg-colour', sanitiseColour);
}

recognition.onspeechend = function() {
  recognition.stop();
}

recognition.onnomatch = function() {
  consoleLog.innerHTML = 'Sorry, could not tell what you said.';
}

recognition.onerror = function(event) {
  consoleLog.innerHTML = 'Recognition error: ' + event.error;
}
```

### Making the browser respond

## What about non-English languages?

## Resources

- [Web Speech API Draft Community Group Report](https://wicg.github.io/speech-api/)
- [Web Speech API - Speech Recognition](https://wiki.mozilla.org/Web_Speech_API_-_Speech_Recognition)
- [MDN: Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- [Using the Web Speech API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API/Using_the_Web_Speech_API)
- [MDN Web Speech API demos](https://github.com/mdn/web-speech-api)
- [Using the Web Speech API for Multilingual Translations](https://css-tricks.com/using-the-web-speech-api-for-multilingual-translations/)
- [DeepSpeech 0.6: Mozilla’s Speech-to-Text Engine Gets Fast, Lean, and Ubiquitous](https://hacks.mozilla.org/2019/12/deepspeech-0-6-mozillas-speech-to-text-engine/)