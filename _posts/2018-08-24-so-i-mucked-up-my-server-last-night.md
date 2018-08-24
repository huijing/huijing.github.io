---
layout: post
title: "So I mucked up my server last night"
date: Aug 24, 2018
tags: [servers]
---
There are 2 kinds of people in the world, those who love the command line and those who don't. I fall into the former category. Because I was a MS-DOS baby (okay, probably 5 or 6 years old), who started my computing journey typing `dir/p` and `deltree` into that lovely white on black prompt trying to figure out how to run games.

P.S. don't arm a kid with `deltree` and leave them unsupervised.

Some people find it odd that a front-end developer, a CSS-lover no less, likes to play around with servers and sysadmin-related activities. I also enjoy building my own machines, sourcing for parts and all that. Stop categorising people into little boxes, I say.

Anyway, I have a home-made low-powered NAS running under my desk which serves all my media files, and it was running Ubuntu 16.04 since I built it. But now that 18.04 has been out for a bit, I thought I'd do an upgrade last night.

In hindsight, it probably wasn't the best idea to run `sudo do-release-upgrade` at 9.30pm in the evening, but I'm not known for making good decisions. The issue with my server is that I've had this long-standing issue with *mdadm* whereby the package is broken but I cannot purge nor reinstall it.

<pre><code class="language-bash">Setting up mdadm (3.3-2ubuntu7.1) ...
dpkg: error processing package mdadm (--configure):
subprocess installed post-installation script returned error exit status 20
Errors were encountered while processing:
 mdadm
E: Sub-process /usr/bin/dpkg returned an error code (1)</code></pre>

[Stack Overflow](https://askubuntu.com/questions/786356/broken-package-but-cannot-purge-or-reinstall-it) tried to help but to no avail, but given that I can still serve files off the server, I've left it alone. For more than 2 years. And now it sort of came back around to bite me on the ass, because this issue
