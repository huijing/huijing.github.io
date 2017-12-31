---
layout: post
title: "Upgrading to macOS Sierra"
date: 27 September, 2016
image: macossierra.jpg
tags: [devlife]
---
macOS Sierra was officially released on 20 September 2016. That's 1 week ago at time of writing. The day of the release, there were loads of articles appearing in my RSS feed (yes, I still use one, stop judging <span class="emoji" role="img" tabindex="0" aria-label="angry face">&#x1F620;</span>) with the title "Should you upgrade to macOS Sierra?" or something along those lines. 

I skimmed through those articles but nothing significant jumped out at me other that some people had issues with their Keychain access or something. But given I was in the midst of crunch time for a project, I held off on upgrading until yesterday. Given my machine is an early-2015 MacBook Pro running El Capitan, I thought it wouldn't be much trouble to upgrade.

I'm the type of person who likes to keep my software as updated as possible. You know, those people who run `brew update && brew upgrade --all` every morning and `sudo apt-get upgrade` their servers every time they login? Yes, I'm *one of those* (what did we say about judging earlier?).

Anyway, the overall experience was pretty smooth, largely because of my prior experience with updating from Yosemite to El Capitan and spent quite a long time re-configuring Apache. This time, I kinda already knew what to expect.

## Download the update

First things first, actually get the update. Just open up the App Store and download the macOS Sierra update. It's filed under *Utilities*. Go through the pointy-clicky wizard bits where you have to agree to the terms and conditions and let your machine do its thing. I was actually watching Mr Robot while this was happening, so for me, this part was pretty uneventful. It probably took all of 30 minutes?

## Web development stuff

Because I use my machine to earn a living, it is configured for web development. I don't use MAMP, instead I followed [OS X 10.11 El Capitan Apache Setup: Multiple PHP Versions](https://getgrav.org/blog/mac-os-x-apache-setup-multiple-php-versions) earlier this year when I reformatted my machine. I already did something similar when running Yosemite but I messed up during the upgrade to El Capitan and after a couple months I thought I'd just start from a clean slate.

My observation is that every time you upgrade the OS, your Apache configuration gets reset. Even though the OS saves a copy as `httpd.conf~previous`, this backed-up version had some lines I needed commented out. <span class="kaomoji">¯\\\_(ツ)\_/¯</span>

I checked back with the guides I followed previously and double-checked that these lines were uncommented:
<pre><code class="language-apacheconf">LoadModule authz_core_module libexec/apache2/mod_authz_core.so
LoadModule authz_host_module libexec/apache2/mod_authz_host.so
LoadModule userdir_module libexec/apache2/mod_userdir.so
LoadModule include_module libexec/apache2/mod_include.so
LoadModule rewrite_module libexec/apache2/mod_rewrite.so</code></pre>

*Note: they don't appear in this order so use the Command+F function to find them.*

But in general, I think it's safe to just save a copy of the current `httpd.conf` file and restore the previous version. I may or may not have messed up the `httpd.conf` file all on my own.

1. Rename the current file, just in case.
    <pre><code class="language-bash">sudo mv /etc/apache2/httpd.conf /etc/apache2/httpd.conf.new</code></pre>

2. Restore the configuration file you so painstakingly setup the last time around.
    <pre><code class="language-bash">sudo mv /etc/apache2/httpd.conf~previous /etc/apache2/httpd.conf</code></pre>

I also use a nifty tool called [dnsmasq](http://www.thekelleys.org.uk/dnsmasq/doc.html), which you can download using [Homebrew](http://brew.sh/index.html). It's a set-it-and-forget-it solution for redirecting local development sites on your machine. Instructions to set this up can be found in the article [The Perfect Web Development Environment for Your New Mac](https://mallinson.ca/osx-web-development/). So I also had to restore my Virtual Hosts configuration file.

1. Rename the current file, just in case.
    <pre><code class="language-bash">sudo mv /etc/apache2/extra/httpd-vhosts.conf /etc/apache2/extra/httpd-vhosts.conf.new</code></pre>

2. Restore the configuration file you so painstakingly setup the last time around.
    <pre><code class="language-bash">sudo mv /etc/apache2/extra/httpd-vhosts.conf~previous /etc/apache2/extra/httpd-vhosts.conf</code></pre>

## SSH took me a while to figure out

The only thing that stumped me this time was the ssh configuration. macOS Sierra now uses OpenSSH_7.2p2, while El Capitan used OpenSSH_6.9p1. I'm guessing that with this version upgrade, the ssh configuration file had changed as well.

If you use AWS, you'll probably have a bunch of `.pem` files in your `.ssh` folder in addition to the standard `id_rsa` and `id_rsa.pub`. I didn't realise anything was wrong because I could continue ssh-ing into my servers but when I attempted to push code to my company's git server, I kept getting the dreaded `Permission denied (publickey).` error.

Turns out I had taken for granted that the `id_rsa` file was loaded into the ssh-agent by default previously. When I finally got round to examining the ssh configuration file, I realised everything in there had been commented out.

*Update: my friend [Sahil](http://sahil.me/) advised me that my original solution of editing the global ssh_config file wasn't such a great idea, so the post has been changed to reflect the better solution.*

1. I like to use Sublime Text to edit my configuration files but you can use whatever you want. Create a *config* file in your `~/.ssh` folder if you don't have one already. Note there are no file extensions here.
    <pre><code class="language-bash">sudo sublime ~/.ssh/config</code></pre>

2. Add the line that specifies id_rsa as the private key you want to use for authentication. The good part about having this *config* file is that you can add other authentication keys here too so you don't have to manually add them to your ssh-agent every time you start a new session.
    <pre><code class="language-bash">IdentityFile ~/.ssh/id_rsa</code></pre>

## Wrapping up

All in all, this update was pretty trouble-free. Nothing really broke. So it's either I'm kinda lucky, or this update is kinda safe.

<img src="{{ site.url }}/assets/images/posts/sierra/good-sign.jpg" srcset="{{ site.url }}/assets/images/posts/sierra/good-sign@2x.jpg 2x" alt="This is a good sign"/>

So make your own decision whether to upgrade or not, and may the odds ever be in your favour <span class="emoji" role="img" tabindex="0" aria-label="smiling face with horns">&#x1F608;</span>.
