---
layout: post
title: "Building a Windows 3.1 application in 2019"
date: December 19, 2019
tags: [retrotech]
hastweet: true
image: ssh-2019
---
Oh, how time flies. Almost exactly 2 years ago, we had the first [Super Silly Hackathon](https://supersillyhackathon.sg/), and yesterday we had our third one. In case you're unfamiliar with the concept, it is a hackathon for people who want to build anything for no good reason.

It's a spin-off the original [“SF stupid shit no one needs and terrible ideas hackathon”](https://stupidhackathon.github.io/) but totally local, i.e. maxed-out Singlish. I had been a participant for the first one back in 2017 and somehow emcee-d the second one last year.

The only friend I have who is as interested in 90s computing is [Kheng Meng](http://yeokhengmeng.com/), with whom I've collaborated for various retro-computing related projects over the years. We were “Team 486” back in 2017 and this year we became “3.1”.

## The idea

So Kheng Meng pinged me about doing something together for this year's Super Silly Hackathon around DOS or Windows 3.1, since we already had the hardware for it. Yes, you heard right. In 2019, we have actual hardware running those OSes. <span class="emoji" role="img" tabindex="0" aria-label="smiling face with sunglasses">&#x1F60E;</span>

<img src="{{ site.url }}/assets/images/posts/ssh-2019/idea.jpg" srcset="{{ site.url }}/assets/images/posts/ssh-2019/idea@2x.jpg 2x" alt="Message thread between Kheng Meng and myself about teaming up for SSH 2019">

At the time, I was till on the road a lot so I didn't really think too hard about it. But I happened to download a game called [Epic Orchestra](https://web.archive.org/web/20191027011952/http://www.mobypixel.com/epicorchestra) and had the hare-brained idea to try building it on [PICO8](https://www.lexaloffle.com/pico-8.php) and getting it to run on The Magic Machine.

But after a bit of thought, we figured that it would be a bit too ambitious.

<img src="{{ site.url }}/assets/images/posts/ssh-2019/idea2.jpg" srcset="{{ site.url }}/assets/images/posts/ssh-2019/idea2@2x.jpg 2x" alt="Message thread on reconsidering the PICO8 idea">

The idea to develop a Windows 3.1 application was still do-able though, so we went with that instead. Keeping in mind that neither of us had any prior knowledge about building anything for Windows 3.1.

## The AH-MAZ-ING workflow

If you asked me, I thought the app itself was nothing special. It was just matching up, down, left and right when their respective characters showed up on the screen. But the process and hardware setup was most fun and interesting.

<img srcset="{{ site.url }}/assets/images/posts/ssh-2019/hardware-480.jpg 480w, {{ site.url }}/assets/images/posts/ssh-2019/hardware-640.jpg 640w, {{ site.url }}/assets/images/posts/ssh-2019/hardware-960.jpg 960w, {{ site.url }}/assets/images/posts/ssh-2019/hardware-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/ssh-2019/hardware-640.jpg" alt="4 PCs, a router and a book">

The setup involved 4 PCs, a router and DA BOOK. Our end goal was to write an application that would run on an actual Windows 3.1 system, which was running on Kheng Meng's Thinkpad 390e (AKA The Magic Machine)

We would be writing the code on our modern MacBook Pros. Both Kheng Meng and I used [VS Code](https://code.visualstudio.com/) as our editor, and a bit later into the day I suggested we use the [Live Share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare) extension to work on the same file. This worked out really nicely.

Windows 3.1 is a [16-bit operating system](https://en.wikipedia.org/wiki/16-bit), so our compiler needs to be able to compile to 16-bit. Kheng Meng decided to go with [Microsoft Visual C++]() on a Windows 2000 system on VirtualBox to compile the application.

Modern Macs are unable to communicate with the Windows 3.1 system directly, hence we needed the Windows XP system as a go-between. The Windows XP machine was linked up to the Mac via [Samba](https://en.wikipedia.org/wiki/Samba_(software)).

We also had a local LAN (that's why the router is there), which allowed the Windows XP system and Windows 3.1 system to access the same shared folder. That's how we got the compiled executable from the Mac through to the Windows 3.1 machine.

Refer to this handy diagram for a visual overview of what we were doing:

<img srcset="{{ site.url }}/assets/images/posts/ssh-2019/diagram-480.jpg 480w, {{ site.url }}/assets/images/posts/ssh-2019/diagram-640.jpg 640w, {{ site.url }}/assets/images/posts/ssh-2019/diagram-960.jpg 960w, {{ site.url }}/assets/images/posts/ssh-2019/diagram-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/ssh-2019/diagram-640.jpg" alt="Workflow diagram">

## The application development process

Even though I haven't written a lot of code with Kheng Meng before, turns out we pair program really well. Zero arguments about variable names (because I heard that's a thing people argue about) at all. I don't know how rare that is but I cherish it.

So the original end goal was a music rhythm game, where you would match key strokes to falling arrows on the screen in time with music. That was a fairly grand end goal, given neither of us were familiar with building games or Windows 3.1 applications.

Instead, we started with the very basic of basics. Okay, maybe one little step beyond the basics. Kheng Meng had cloned a scaffold starter, [Win16-Example-Application](https://github.com/TransmissionZero/Win16-Example-Application), that came with [a tutorial](https://www.transmissionzero.co.uk/computing/win16-apps-in-c/) on how to build a Win16 GUI application in C.

Because of the 16-bit nature of our application, we wrote it with the C89 flavour of C. Fun times, my friends. Also, Google was only nominally helpful because this style of application development was literally years before Google and StackOverflow.

Also, it's hackathon code, so don't judge… <span class="kaomoji">¯\\\_(ツ)_/¯</span>

### Step 1: Render a character on the application window

There was no version control during much of the process so this is really based on my sketchy memory, but I think the first thing we did was try to render some test text on the screen. There are 2 ways to do that, `TextOut()` and `DrawText()`, and we used `TextOut()` first.

```clike
TextOut(hdc, 10, 10, "Test", 4);
```

<img srcset="{{ site.url }}/assets/images/posts/ssh-2019/test-480.jpg 480w, {{ site.url }}/assets/images/posts/ssh-2019/test-640.jpg 640w, {{ site.url }}/assets/images/posts/ssh-2019/test-960.jpg 960w, {{ site.url }}/assets/images/posts/ssh-2019/test-1280.jpg 1280w" sizes="(max-width: 400px) 100vw, (max-width: 960px) 75vw, 640px" src="{{ site.url }}/assets/images/posts/ssh-2019/test-640.jpg" alt="Rendering the word 'test' on a Win16 application">

The first parameter `hdc` refers to device context, that [holds state information](http://www.cplusplus.com/forum/windows/64772/) for GDI (graphics device interface) drawing tools. The next 2 are x and y coordinates of the starting position of the string respectively.

Then we have the pointer to the string, and finally the number of characters in the string. This has to go into the `WM_PAINT` label for things to work. Also, the `return 0` is required for the program not to crash. I think.

```clike
LRESULT CALLBACK MainWndProc(HWND hWnd, UINT msg, WPARAM wParam, LPARAM lParam)
{
    HDC hdc;
    PAINTSTRUCT ps;
  
    switch (msg)
    {
        case WM_PAINT:
        {
            hdc = BeginPaint(hWnd, &ps);
            TextOut(hdc, 10, 10, "Test", 4);
            return 0;
        }
    }
    return DefWindowProc(hWnd, msg, wParam, lParam);
}
```

### Step 2: Render 4 arrow characters on the screen

To be fair I was supposed to prepare assets like the music file and sprites, but I did not. Life happens. But no matter, because we epitomise the minimal in minimal viable product. Same code, different position.

```clike
TextOut(hdc, 10, 10, "<", 1);
TextOut(hdc, 20, 10, ">", 1);
TextOut(hdc, 30, 10, "^", 1);
TextOut(hdc, 40, 10, "v", 1);
```

<img src="{{ site.url }}/assets/images/posts/ssh-2019/arrows.jpg" srcset="{{ site.url }}/assets/images/posts/ssh-2019/arrows@2x.jpg 2x" alt="Rendering arrow characters on the Win16 application">

If you squint hard at my screenshot, you'll notice that the up character, which is a caret is tinier than the others. We never did figure out how to change the font size. Oh well.

### Step 3: Detect keypress in application

It's supposed to be a matching game, right? So the first step to any actual matching is for the application to detect keypresses. Cue DA BOOK.

I'm generally neutral about using reference books, except that I've been so spoiled by search functions in digital that when I flip the index to locate my topic of interest and find the entry labeled as *see THIS_OTHER_THING*, I'm like <span class="kaomoji">(╯°□°）╯︵ ┻━┻</span>

Kheng Meng had set up the application with some debugging functionality by adding a [*smprintf.h* file](https://github.com/yeokm1/falling-arrows-win16/blob/master/smprintf.h), modified from [Small printf source code](https://www.menie.org/georges/embedded/small_printf_source_code.html) by Georges Menie to include `putDebugChar`.

### Step 4: Render a character every second

### Step 5: Render a single different character every second

### Step 6: Render characters falling down the screen

### Step 7: Match keypress to character at specific position

### Step 8: Add scoring mechanism

### Step 9: Add game start, stop and timer



## Presentation time
The application itself really isn't anything exciting. But I really enjoyed working with Kheng Meng. It's kind of like when you travel with a friend for the first time, spend more than a week together almost 24-7 and at the end of it, still haven't killed each other.

Then you know that your friendship has passed the test.

Same thing.

<iframe width="560" height="315" src="https://www.youtube.com/embed/30Cp1J2rJEo" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

## Wrapping up

Videos for all the presentations are on [Engineers.SG](https://engineers.sg/), our local archive of tech talks in Singapore. I have a bunch of personal favourites from this edition.

Firstly, [Thai Pangsakulyanont](https://twitter.com/dtinth)'s (team name *dtinth*, with a lower-case d) *[Super Silly Vortex](https://github.com/dtinth/super-silly-vortex)*, which is the most amazing thing in the world. Thai is THE BEST.

<iframe width="560" height="315" src="https://www.youtube.com/embed/8as2nAU6cZA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Also, *[Special Password](https://github.com/wgao19/super-silly-joycon)* by team *Mr Chia who is not here* (made up of [Gao Wei](https://twitter.com/wgao19), [Shawn Wang](https://twitter.com/swyx) and [See Yishu](https://twitter.com/yishusee)), and the video contains swearing because of me, so you have been warned.

<iframe width="560" height="315" src="https://www.youtube.com/embed/EKM1AEbtIWI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

And, *Magic Wand* by [Vanessa Cassandra](https://twitter.com/vancassa) (team name *Magical Girl*). So magic, much win.

<iframe width="560" height="315" src="https://www.youtube.com/embed/RUYZU9Oi_GI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

Every hack was fantastic in their own right though, so go check out the nonsense everyone had a lot of fun building. If you steal anybody's idea and become rich, do the right thing and credit them back, ok?