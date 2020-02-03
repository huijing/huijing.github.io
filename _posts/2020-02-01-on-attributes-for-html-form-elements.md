---
layout: post
title: "On attributes for HTML form elements"
date: Feb 01, 2020
tags: [html]
image: html-attributes
---
I often come across tutorials about building forms on the web. In spite of all the newfangled techniques and frameworks we now have to perform actions on web pages, the trusty old HTML form still has its place. 

There is an article published by [Hugo Giraudel](https://hugogiraudel.com/) on [Apollo GraphQL without JavaScript](https://hugogiraudel.com/2020/01/21/apollo-graphql-without-javascript/) where they describe how the GraphQL-powered N26 web platform can still work when Javascript is not available.

Hint, it involves HTML forms.

Which led me to wonder how many people really know about the different attributes that come baked in with HTML form elements. For example, the `type` attribute.

<figure>
  <figcaption>I wonder… about many things…</figcaption>
  <img src="{{ site.url }}/assets/images/posts/html-attributes/thinking.jpg" srcset="{{ site.url }}/assets/images/posts/html-attributes/thinking@2x.jpg 2x" alt="A thinking cat">
</figure>

Hang on, I can almost hear some of you saying, of course you know about them, you just typed `<input type="text">` for the millionth time yesterday.

And being the annoying person that I am, I'm very tempted to reply, well actually… the default `type` attribute for `<input>` **is** `text` and it would still work and validate even if you didn't include it.

Yes, my friends, some HTML attributes have *default* values (as does all CSS, FYI).

There is no harm in including `type="text"`, and some people might even prefer to have it there, for reasons, and that's fine.

This is just a gentle reminder in a world where people seem to be searching for all manner of ways and means to shave bytes, that default values don't really have to be there.

Same goes for the `<button>` element. The default type is `submit`, which means if you had a vanilla HTML form like so:

```markup
<form action="/login">
  <label for="username">Username</label>
  <input name="username" id="username">

  <label for="password">Password</label>
  <input name="password" type="password">

  <button>Login</button>
</form>
```

And you clicked the button, or pressed the Enter key, your form would submit to */login*. Guess what? The `method` attribute on `<form>` elements also has a default value, which is `GET`.

Please don't submit any sensitive information, like a password via the form's `GET` method because it becomes **visible** in the URL. Go ahead, throw the above form into a blank HTML file and try it. Using `POST` will send the form data in the body of the HTTP request.

So if you wanted a button to do things other than submit a form, you can always use `<button type="button">`, which gives you a clickable button that does… nothing. So you can attach whatever event listeners you like to it and make it trigger whatever you want.

I've come across tutorials for frameworks that were great at explaining the framework bit of things, but had shockingly nested `<div>` soups for markup. Or utilised Javascript to write functionalities that could have been achieved with attributes instead.

<figure>
  <figcaption>My shocked face…or close enough</figcaption>
  <img src="{{ site.url }}/assets/images/posts/html-attributes/shocked.jpg" srcset="{{ site.url }}/assets/images/posts/html-attributes/shocked@2x.jpg 2x" alt="A shocked cat">
</figure>

Say you want to have a character limit on your comments, which are input via a `<textarea>`. You can use the `maxlength` attribute. The browser will prevent any further input past the specified character length.

```markup
<textarea maxlength="140"></textarea>
```

<textarea style="margin-bottom:1rem;padding:0.5em" maxlength="50" placeholder="maxlength set to 50"></textarea>

Or if you'd like your users to input comments that are longer than just a smiley face. You can use the `minlength` attribute. Depending on the browser you're using, it is a slightly different user experience but try submitting the form with less than 10 characters.

<form action="javascript:void(0)" style="margin-bottom:1rem">
  <textarea style="padding:0.5em" minlength="10" placeholder="minlength set to 10"></textarea>
  <button style="font-size:inherit">Fake submit</button>
</form>

This is not a rant at the state of the web today (okay, maybe just a little bit). Rather, I want this to be an *invitation* to explore and discover which of these many wonderful attributes are most useful to you.

Then use them.

They are fully compatible with the framework of your choice.

Especially to all who are either hearing of these attributes for the first time, or never got around to using them.

So, at the risk of sounding like some grumpy old person yelling “get off my lawn” at the cool kids, I just want to end off with a quote from one of my esteemed seniors from a previous company.

> The best code is the code not written.

Cheers, my friends. <span class="emoji" role="img" tabindex="0" aria-label="tumbler glass">&#x1F943;</span>