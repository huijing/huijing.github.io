---
layout: post
title: "So I mucked up my server last night"
date: Aug 24, 2018
tags: [servers, devlife]
---
There are 2 kinds of people in the world, those who love the command line and those who don't. I fall into the former category. Because I was a MS-DOS baby (okay, probably 5 or 6 years old), who started my computing journey typing `dir/p` and `deltree` into that lovely white on black prompt trying to figure out how to run games.

<figure>
    <figcaption>Ah, nostalgia</figcaption>
    <img src="{{ site.url }}/assets/images/posts/server-upgrade-fail/ms-dos.png" alt="MS-DOS prompt"/>
</figure>

P.S. don't arm a kid with `deltree` and leave them unsupervised.

Some people find it odd that a front-end developer, a CSS-lover no less, likes to play around with servers and sysadmin-related activities. I also enjoy building my own machines, sourcing for parts and all that. Stop categorising people into little boxes, I say.

## The Ubuntu upgrade that went south

Anyway, I have a home-made low-powered NAS running under my desk which serves all my media files, and it was running Ubuntu 16.04 since I built it. But now that 18.04 has been out for a bit, I thought I'd do an upgrade last night.

In hindsight, it probably wasn't the best idea to run `sudo do-release-upgrade` at 9.30pm in the evening, but I'm not known for making good decisions. The issue with my server is that I've had this long-standing issue with *mdadm* whereby the package is broken but I cannot purge nor reinstall it.

<pre><code class="language-bash">Setting up mdadm (3.3-2ubuntu7.1) ...
dpkg: error processing package mdadm (--configure):
subprocess installed post-installation script returned error exit status 20
Errors were encountered while processing:
 mdadm
E: Sub-process /usr/bin/dpkg returned an error code (1)</code></pre>

[Stack Overflow](https://askubuntu.com/questions/786356/broken-package-but-cannot-purge-or-reinstall-it) tried to help but to no avail, but given that I can still serve files off the server, I've left it alone. For more than 2 years. And now it sort of came back around to bite me on the ass, because this issue interrupted the upgrade process.

I wasn't sure what happened exactly but it seemed like the upgrade went along halfway but when I ran `sudo apt-get update` and `sudo apt-get upgrade`, after a reboot, there were loads of packages that needed to be updated, so I think the upgrade went through.

## The shell problem

Unfortunately, my [fish shell](https://fishshell.com/) went haywire, not sure what happened there exactly, as it appeared there was some issue with my [oh-my-fish](https://github.com/oh-my-fish/oh-my-fish) installation broke as well. I thought removing and reinstalling the whole setup would help.

In hindsight, if I did it properly it probably would have. But I obviously did not. It was late. I wasn't thinking. But instead of removing the package via `apt`, I removed the entire `/usr/bin/fish` folder **without** setting default shell back to bash first.

And then, I logged out. <span class="emoji" role="img" tabindex="0" aria-label="person facepalming">&#x1F926;&#x200D;&#x2640;&#xFE0F;</span>

I had effectively locked myself out of the server as the system got caught in a login loop and could no longer login via ssh anymore. Fortunately, I could directly access the server and login as root via safe boot.

## What I learnt about recovery mode

There was some mild panicking when I couldn't see my default user's home directory. I thought the entire user somehow got wiped, but when I tried to recreate the user, it already existed.

Running `cut -d: -f1 /etc/passwd` showed that my user was still there, just that somehow `/home` was completely empty. I was under the *incorrect assumption* that every user's home directory was visible to *root*, but clearly I was very wrong.

It was only when I tried to login as my default user when I realised that deleting the `/usr/bin/fish` was a terrible idea. And the way to fix it was to change the default user's shell back to `bash` by editing the `/etc/passwd` file.

Unfortunately, I ran into this error:

<pre><code class="language-bash">cannot lock /etc/passwd; try again later.</code></pre>

<span class="kaomoji">ಠ_ಠ</span>

Okay, to the Googlez once more. This time I came away with the command:

<pre><code class="language-bash">sudo mount -o remount, -rw /dev/sda1</code></pre>

Nothing actually happened when I ran this, which I figured was a good thing. Because when I tried to save my changes in the `/etc/passwd` file, it worked.

## Wrapping up

This post was written more for myself than for anyone else, because I'm pretty sure I'll do something stupid like this again, and so I'll have something to refer to when I have to undertake similar recovery efforts.

<span class="kaomoji">¯\\\_(ツ)_/¯</span>

TL:DR, don't do sysadmin stuff when you're half-asleep. [Bad things can happen](https://www.reddit.com/r/gitlab/comments/5rd8ek/gitlab_database_incident_writeup/).

<figure>
    <figcaption>In spite of all the trouble, all is well in server-land again</figcaption>
    <img srcset="{{ site.url }}/assets/images/posts/server-upgrade-fail/ubuntu-480.png 480w, {{ site.url }}/assets/images/posts/server-upgrade-fail/ubuntu-640.png 640w, {{ site.url }}/assets/images/posts/server-upgrade-fail/ubuntu-960.png 960w, {{ site.url }}/assets/images/posts/server-upgrade-fail/ubuntu-1280.png 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/server-upgrade-fail/ubuntu-640.png" alt="Server running Ubuntu 18.04.1 LTS" />
</figure>
