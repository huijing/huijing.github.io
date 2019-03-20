---
layout: post
title: "Windows 3.1, a walk down memory lane"
date: Mar 20, 2019
tags: [retrotech]
---
Welcome to yet another edition of Hui Jing doing things that have no practical use but do it anyway because why the hell not? In local parlance, we call this “shiok sendiri”, you can google that.

So my good friend and fellow retro-tech enthusiast, [Kheng Meng](http://yeokhengmeng.com/), did me a solid and agreed to my hare-brained scheme for Talk.CSS #39. The idea was to run an original version of Windows 3.1 on his IBM ThinkPad 390 and load up Internet Explorer 3. Why IE3? Because it was [the first commercial browser](https://www.w3.org/Style/CSS/msie/) to support CSS.

Harebrained scheme as follows: Kheng Meng to provide the hardware and cover sysadmin responsibilities, while I build a site that loads up and displays well (as well as IE3 can muster), which is progressively enhanced for modern browsers.

<img src="{{ site.url }}/assets/images/posts/win31/chat.jpg" srcset="{{ site.url }}/assets/images/posts/win31/chat@2x.jpg 2x" alt="Where I say the words IE5 is too advanced">

The additional catch is that I will NOT test on the machine until the day itself. So this will either be spectacular or fail spectacularly. I'm leaning toward the latter but either way, loads of fun. If you're in Singapore on 22 May, 2019, come see this ridiculous idea live. Details on [meetup.com](https://www.meetup.com/SingaporeCSS/events/259235992/).

## Nostalgia kicks in

Kheng Meng, being his highly efficient self, had everything up and running within a week, I think. And he gamely lugged the estimated 7kg worth of hardware over to the [Hackware meetup](https://www.meetup.com/Hackware/) (where he talked about his experience getting his pilot's license, [video here](https://youtu.be/GtT5wCYhZBA)) for me to play with!

<img srcset="{{ site.url }}/assets/images/posts/win31/proof-480.jpg 480w, {{ site.url }}/assets/images/posts/win31/proof-640.jpg 640w, {{ site.url }}/assets/images/posts/win31/proof-960.jpg 960w, {{ site.url }}/assets/images/posts/win31/proof-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/win31/proof-640.jpg" alt="Proof that IE3 version 3.03 SP1 was installed">

He already installed IE3, [Netscape Navigator](https://winworldpc.com/product/netscape-navigator/40x) and Opera, but also included fun stuff, like [SkiFree](https://ski.ihoc.net/). If you don't know what SkiFree is, well, too bad, you missed out on hours of fun. This immediately triggered a lot of childhood memories, which were mostly games, to be honest.

Eventually, I decided to run my own copy of Windows 3.1 via VirtualBox so I could get access to the original [Windows Entertainment Pack]() games. Again, if you have no idea what those are, you missed out. Good thing FOMO wasn't a thing back then, eh?

<img srcset="{{ site.url }}/assets/images/posts/win31/skifree-480.jpg 480w, {{ site.url }}/assets/images/posts/win31/skifree-640.jpg 640w, {{ site.url }}/assets/images/posts/win31/skifree-960.jpg 960w, {{ site.url }}/assets/images/posts/win31/skifree-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/win31/skifree-640.jpg" alt="SkiFree on my virtual Windows 3.1">

## Windows 3.1 on VirtualBox

I found 2 solid tutorials covering end-to-end instructions for getting Windows 3.1 up and running well on VirtualBox. One is by Josh from Ballarat, Australia, who runs the awesome blog [Socket 3](https://socket3.wordpress.com/), full of vintage goodness.

The article is [Install & Configure MS-DOS 6.22 & Windows 3.1 using Oracle VirtualBox](https://socket3.wordpress.com/2016/08/25/install-configure-ms-dos-6-22-and-windows-3-1-using-oracle-virtualbox/), and I pretty much had no issues with it at all except for the networking bit. After some googling, I think it might be because my host PC name was way too long. 

Apparently the PC name has to be less than 8 characters but maybe it was 15 and under? I don't know. So in spite of having everything set up nicely, with my games installed and everything. I nuked it and tried again with [Windows 3.1 for Workgroups](https://winworldpc.com/product/windows-3/wfw-311) instead the second time round.

*Note, links to the disk images will be provided at the end*

Follow all the instructions up to the point where the networking options kick in. Follow what you can from the original tutorial, and if you use the *AMD PCNET Network Drivers.img* file included, note that the location of the driver is in *A:\WFW31*

After some virtual swapping of installation floppy disks, things should be up and running. Though don't worry if you run into all kinds of X.EXT file not found issues, because I sure did.

<img srcset="{{ site.url }}/assets/images/posts/win31/desktop-480.jpg 480w, {{ site.url }}/assets/images/posts/win31/desktop-640.jpg 640w, {{ site.url }}/assets/images/posts/win31/desktop-960.jpg 960w, {{ site.url }}/assets/images/posts/win31/desktop-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/win31/desktop-640.jpg" alt="The classic Windows 3.1 Program Manager">

Once Windows is installed and proven to be running properly, you can add in the fun stuff outlined in the tutorial, including a better graphics driver (which makes the screen bigger), and the well-loved TADA start up tune.

For the CD-ROM driver, I got it to work by following instructions from [Chris Sprague](https://twitter.com/_roguerobot) titled [Install MS-DOS 6.22 in a Virtual Machine for Fun and Profit](http://blog.chaoscontrol.org/install-ms-dos-6-22-in-a-virtual-machine-for-fun-and-profit/). Grab the driver from his link and load it up like all the other installation disks you've used thus far.

## Windows Entertainment Pack

This was pretty much my favourite thing way back when, you know, when attention spans were actually more than 5 minutes long. Anyway, I played Tetris until I could see blocks falling when I closed my eyes at some point.

But some of the other games were pretty time-wastey too, if you get it up and running, be sure to give RattlerRace and Rodent's Revenge a go. You'd be surprised at how addicting they can be. In fact, the suite of games from Windows Entertainment Pack ate up plenty of my childhood.

<img srcset="{{ site.url }}/assets/images/posts/win31/games-480.jpg 480w, {{ site.url }}/assets/images/posts/win31/games-640.jpg 640w, {{ site.url }}/assets/images/posts/win31/games-960.jpg 960w, {{ site.url }}/assets/images/posts/win31/games-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/win31/games-640.jpg" alt="RattlerRace and Rodent's Revenge on my virtual Windows 3.1">

Also, SkiFree in all it's pixeley glory. This I had to copy onto a blank floppy disk image, then install it from *A:\\* because isn't that how we all installed games in the past? Now if I could only remember what that golf game I used to play was called…

## Links

These are the installation sources I used that worked for me. If somehow something doesn't work for you, unfortunately, you'll probably have to do some googling for alternate installation floppy images. Hopefully it doesn't come to that.

<ul>
  <li class="no-margin"><a href="https://winworldpc.com/library/operating-systems">WinWorld</a> for links to OS, Entertainment Pack</li>
  <li class="no-margin"><a href="http://localhost:4321/assets/files/svga-drivers.zip">ET4000 SVGA video driver</a>, obtained from Josh’s site</li>
  <li class="no-margin"><a href="http://localhost:4321/assets/files/sb16.zip">SoundBlaster 16 sound driver</a>, obtained from Josh’s site</li>
  <li><a href="http://localhost:4321/assets/files/cdrom-driver.img">CD-ROM driver</a>, obtained from Chris’s site</li>
</ul>
