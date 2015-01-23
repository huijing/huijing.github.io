---
layout: post
title: "Setting a custom domain for GitHub pages with Namesilo"
date: January 11, 2015
---
As you may know by now, this site is hosted on GitHub pages. There is no limit to how many "sites" you can host on GitHub pages if you use the project pages method, but the by default, the URL of your site would be either `http://USER_NAME.GitHub.io` or (if you're using project pages) `http://USER_NAME.GitHub.io/SITE_NAME`. Which is totally cool if you ask me, but sometimes, we'd like to have our own custom domain name that we paid for with our own hard-earned cash.

After some Googling to compare domain name registrars, I settled on [Namesilo](https://www.namesilo.com/), largely because they're one of the cheapest around, and honestly I haven't had any trouble with them. Switching nameservers was simple, whois privacy is free, that's about all I need actually. I've bought 3 domain names through them thus far and don't plan on switching to anyone else anytime soon.

Normally the documentation on GitHub is a cinch to follow along, but somehow the setting up of custom domains tutorial just flew over my head. The first time I tried it, I ended up on a roundabout link journey between [Setting up a custom domain with GitHub Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/), [Tips for configuring a CNAME record with your DNS provider](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/) and [About custom domains for GitHub Pages sites](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/). I seriously think this a problem with me, not GitHub.

The second time I had to do this, I distilled the steps down to the following:

1. Create a CNAME file and upload it to your gh-pages repository. 

     To do this, open your favourite text editor, type in the bare subdomain for your custom domain. There would be one line in that file like so:
        
        www.chenhuijing.com 

    Save the file as `CNAME` without any extensions behind it.
2. Login to your Namesilo account and go to the [Domain Manager](https://www.namesilo.com/account_domains.php). Locate the domain name you want to use for your GitHub Pages site and click on the second from the right blue icon in the Options column. This will take you to the DNS settings for that domain. {% img img-right /images/domain-manager.jpg Manage DNS settings %}
3. If you hadn't changed anything since purchasing your domain, this should be what you see: {% img /images/existing-resource-records.jpg Existing resource records %}

