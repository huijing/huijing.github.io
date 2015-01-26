---
layout: post
title: "Setting a custom domain for GitHub pages"
date: January 11, 2015
---
As you may know by now, this site is hosted on GitHub pages. There is no limit to how many "sites" you can host on GitHub pages if you use the project pages method, but the by default, the URL of your site would be either <code class="language-bash">http://USER_NAME.GitHub.io</code> or (if you're using project pages) <code class="language-bash">http://USER_NAME.GitHub.io/SITE_NAME</code>. Which is totally cool if you ask me, but sometimes, we'd like to have our own custom domain name that we paid for with our own hard-earned cash.

After some googling to compare domain name registrars, I settled on [Namesilo](https://www.namesilo.com/), largely because they're one of the cheapest around, and honestly I haven't had any trouble with them. Switching nameservers was simple, whois privacy is free, that's about all I need actually. I've bought 3 domain names through them thus far and don't plan on switching to anyone else anytime soon.

Normally the documentation on GitHub is a cinch to follow along, but somehow the setting up of custom domains tutorial just flew over my head. The first time I tried it, I ended up on a roundabout link journey between [Setting up a custom domain with GitHub Pages](https://help.github.com/articles/setting-up-a-custom-domain-with-github-pages/), [Tips for configuring a CNAME record with your DNS provider](https://help.github.com/articles/tips-for-configuring-a-cname-record-with-your-dns-provider/) and [About custom domains for GitHub Pages sites](https://help.github.com/articles/about-custom-domains-for-github-pages-sites/). I seriously think this a problem with me, not GitHub.

I also wanted to use Cloudflare with my site, but in retrospect, this actually simplified things. If you have never heard of Cloudflare and would like to find out more, you can check out this [blog post](https://blog.cloudflare.com/what-is-cloudflare/) by the Cloudflare team explaining just that. Full disclosure, I never actually got the custom domain to work right just through Namesilo.

So, the second time I had to do this, I distilled the steps down to the following:

1. Create a CNAME file and upload it to your gh-pages repository. 

     To do this, open your favourite text editor, type in the bare subdomain for your custom domain. There would be one line in that file like so:
    <pre><code class="language-markup">www.chenhuijing.com</code></pre>

Save the file as <code class="language-bash">CNAME</code> without any extensions behind it.

2. Go to [Cloudflare](https://www.cloudflare.com/) and create an account, if you haven't got one already.
3. Enter your domain name then click on the green Add Website green button. [Cloudflare](https://www.cloudflare.com/) will then proceed to scan your domain records. It'll take about a minute (or so says the progress bar), and when it's done, just click Continue setup. <img src="/images/cloudflare-1.jpg" alt="Add website"/>
4. Edit the records so there are two A records which resolve to the following IP addresses:
    - 192.30.252.133
    - 192.30.252.134

    Then, add a CNAME record with www as an alias of YOUR_USER_NAME.github.io.
    <img src="/images/cloudflare-2.jpg" alt="Setup DNS records"/>
5. Cloudflare will then tell you to change your nameservers and because they scanned your domain records, they also helpfully tell you exactly what to do. <img src="/images/cloudflare-3.jpg" alt="Edit name servers"/>
6. Now you'll have to do some twiddling on your Namesilo account. Login and go to the [Domain Manager](https://www.namesilo.com/account_domains.php). Select the domain name you're setting up and click on Change Nameservers.
<img src="/images/name-servers.jpg" alt="Domain manager"/>
7. Change the nameservers according to the instructions provided by Cloudflare and click on Submit. You should see a message telling you that name server changes will take anything from an hour to 2 days to take effect. Mine took probably an hour, I'm not sure, I went out for dinner. <img src="/images/name-servers-2.jpg" alt="Domain manager"/>
8. If you tried to access your domain before you set up all this, you may end up staring at Namesilo's parked domain page even after 2 days, so remember to clear your browser cache before checking again.
