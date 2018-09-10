---
layout: post
title: "All about Chinese characters"
date: Oct 31, 2018
tags: [design, i18n,typography]
---
*This is the first post of a multi-part series about Chinese typography, from the history of Chinese characters, to printing, to digitisation.*

Writing (and talking) about CSS writing modes last year served as a foray into the wonderful world of Chinese characters and typography. Even though I learnt Chinese as a first language in school all those years ago, I think I was too dumb or ignorant to appreciate the Chinese language itself. Kinda like those 8 years worth of piano lessons I took until I was 12. Ah, youth.

I mean, in school, they literally just taught you how to read and write, form sentences and understand passages. But I never took the time to appreciate the characters themselves. I didn't even realise Chinese was the only widely used logographic language left in the world today until I wrote that blog post.

Now just because I was late to the party, doesn't make Chinese characters any less fascinating. Turns out the library stocks a good number of books on the topics of Chinese characters (shout out to the Singapore [National Library Board](https://www.nlb.gov.sg/) <span class="emoji" role="img" tabindex="0" aria-label="smiling face with heart-eyes">&#x1F60D;</span>), and one particularly good one I found is [The Culture of Chinese Characters](https://www.amazon.cn/%E6%B1%89%E5%AD%97%E6%96%87%E5%8C%96-%E9%9F%A9%E9%89%B4%E5%A0%82/dp/B005WTNHHM) by Han Jiantang, Assistant Professor at Tianjin Normal University. A lot of what's to follow is referenced from this book. Okay, story time!

## Evolution of Chinese characters

A language is closely intertwined with the culture, history and identity of the people who use it. So there'll constantly be historical references to Chinese history as we examine Chinese characters. Of course, the further back in history we go, the more missing pieces there are, and often we, in the present, have to do our best to draw inferences and conclusions from secondary sources and archaeological remains.

<figure>
    <figcaption>Pottery fragments from Xianrendong Cave (<a href="http://www.nydailynews.com/news/world/pottery-fragments-found-south-china-cave-confirmed-20-000-years-old-archaeologists-article-1.1104485">Source</a>)</figcaption>
    <img src="{{ site.url }}/assets/images/posts/zh-type/xianrendong.jpg" srcset="{{ site.url }}/assets/images/posts/zh-type/xianrendong@2x.jpg 2x" />
</figure>

Chinese civilisation has a very long history dating back to the Mesolithic age, based on [prehistoric pottery shards found in Jiangxi, China](http://science.sciencemag.org/content/336/6089/1696). In fact, China can be considered the oldest continuous civilisation in the world. Here's a highly simplified timeline, because visualisations help comprehension (who said that? I did <span class="emoji" role="img" tabindex="0" aria-label="smirking face">&#x1F60F;</span>). You'll need to scroll, a lot, because the Chinese have a long history.

<figure style="margin-left:0;margin-right:0;">
    <figcaption>Simplified timeline of Dynasties (dates may not be definitive)</figcaption>
    <div style="overflow-x:scroll;">
        <img style="width:3000px;max-width:none;" src="{{ site.url }}/assets/images/posts/zh-story/timeline.svg" />
    </div>
</figure>

So for the longest time, Chinese civilisations were ruled by dynasties. Dynasties which rose and fell over those thousands of years, which kinda puts things into perspective, given our apparent inability to have [historical perspective beyond 50-100 years](https://medium.com/@theonlytoby/history-tells-us-what-will-happen-next-with-brexit-trump-a3fefd154714#.gkpucxbnw). Maybe we're in the middle of a lull period for China, who knows how the next century will play out?

Provided the planet still exists.

Oh, was that too morbid? What can I say? I'm genuinely worried we're going to blow ourselves up <span class="emoji" role="img" tabindex="0" aria-label="pensive face">&#x1F614;</span>. Anyway, moving on...

### Pottery etchings (陶文)

<img style="height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/taowen.svg" />

Professor Zheng Huisheng (郑慧生老师) from Henan University posited that [Chinese writing had its roots in 陶文](http://www.comdesignlab.com/typochina/chinese/archives/98) (script etched on ancient pottery), which came about during the Neolithic age. The script was comprised of line symbols and pictographs which were used to convey message and meaning. There is no definitive proof that these symbols were used as a formal writing system already, as some researchers also make the case that these symbols 

<figure>
    <figcaption>Glyphs from excavated ancient Liuwan pottery (<a href="http://web.archive.org/web/20170120090334/http://c19680213.blog.163.com/blog/static/1091357332016128112347771/">Source</a>)</figcaption>
    <img src="{{ site.url }}/assets/images/posts/zh-type/liuwan.png" srcset="{{ site.url }}/assets/images/posts/zh-type/liuwan@2x.png 2x" />
</figure>

### Seal script (篆书)

Seal script is the all-encompassing category that covers scripts before the advent of the Clerical script (隶书). Seal script can be broadly categorised into Large Seal (大篆) and Small Seal (小篆). Large Seal is the precursor to Small Seal, and refers to all the scripts that came about before the First Emperor of Qin (秦始皇) decreed the standardisation of Chinese writing. 

#### Oracle bone script (甲骨文)

<img style="height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/jiaguwen.svg" />

By the Shang dynasty, the writing system had developed into a reasonably sophisticated script. Oracle bone script (甲骨文) was discovered by Wang Yirong (王懿荣), a historian and scholar in the late Qing dynasty. He was also an avid collector of cultural relics and became intrigued with an ingredient called "Dragon bone" used in one of his traditional Chinese medical prescriptions. 

After further procuring a batch of these "Dragon bones", he was able to discern that they were actually turtle shells, specifically, turtle plastrons (just a fancy way of referring to the underside of the shell) and there were many glyphs etched on them. Upon careful inspection, he noticed that some of the glyphs bore resemblance to modern Chinese characters.

There is a monumental tome of ancient Chinese history called the Records of the Grand Historian (太史公书), now known as 史记. It was started by Sima Tan (司马谈) and finished by his son, Sima Qian (司马迁), during the Han dynasty. It records the history of China from the Yellow Emperor (黄帝) to Emperor Wu of Han (汉武帝).

This is relevant because it helped Wang Yirong figure out these turtle plastrons were used by the ancient Chinese for divination purposes (turns out the ancient Chinese of the Shang were a superstitious bunch).

Oracle bone script is very pictographic in nature, for example, the word for sun kinda looks like a sun, and the world for mountain looks like 3 peaks. Here are the glyphs for sun, mountain, moon, paddy field, rice grains and home respectively.

<figure>
    <figcaption>日、山、月、田、米、家</figcaption>
    <img src="{{ site.url }}/assets/images/posts/zh-type/oracle-bone.png">
</figure>

The thin strokes and limited curves stem from the fact that turtle plastrons and animal bones are very hard and thus aren't easy to carve. As mentioned earlier, Oracle bone script as a language was pretty sophisticated already, complete with verbs and pronouns. Although the characters themselves were far from the standardised characters we see today. I mean, everyone draws a bird or fish differently <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>.

#### Bronze script (金文)

<img style="height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/jingwen.svg" />

Bronze script was developed during the middle of the Shang dynasty and was in use all the way until the Qin dynasty. It was mainly used to record the lives and everyday happenings of society's elites. These records were inscribed onto bronzeware made from copper and tin, especially bronze ritual vessels. Such vessels were seen as status symbols, used by elites for ancestral worship.

There are an estimated 3700 different glyphs written in this style discovered thus far, and it is an evolution of the Oracle Bone Script. Bronze script has a majestic feel, and is more uniform and less pictographic than its predecessor. Bronze script itself underwent some evolution, and by the late Western Zhou period, its strokes were thicker with more curves.

The script was written in clay moulds with a brush, then carefully carved onto bronze. This was considered the earliest instances of long-form writing, and historical records dated to the Shang and Western Zhou periods depict how Zhou defeated Shang.

#### Other Large Seal scripts

<img style="height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/dazhuan.svg" />

There were several variant scripts like Stone Drum Script (石鼓文) and Bird Worm Script (鸟虫书). Stone drum script during warring states, more than 700 characters on the hunting activities of emperor qin more calligraphic than bronze script 10 of these stone drums in beijing 故宫博物院 

After the Western Zhou dynasty, there was a period of relative chaos as states were fragmented during the Spring-Autumn period and Warring States period. Each state developed their own style of writing and dialects and these scripts are sometimes known as the script of the six states (六国文字).



#### Small seal script (小篆)

<img style="height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/xiaozhuan.svg" />

One of the most significant developments in Chinese civilisation is the standardisation of the Chinese language by the First Emperor of Qin (秦始皇), after he successfully conquered all the other states and unified China in 221 BCE.

<p class="note">As a side note, the more I read up about ancient China, the more I realised just how much palace intrigue and power politics were involved in the Imperial Chinese courts. Turns out those television dramas on Imperial China practically wrote their own plots.</p>

李斯 was tasked to come up with a standardised script. With 大篆 as the base, he then adopted the good parts of other states' scripts 

李斯tasked to come up with a standardised script with large seal as the base, take in the good parts of the other states' script basically clean up the warring states variants, Small seal became the official script during the Qin dynasty, while the scripts that came before it are known as large seal.

simplified, more distinct radicals, less strokes standardised after the discarding of variant glyphs more phonograms
reduced pictographic properties, less like pictures more symbol less picture
neater, arguably the most artistic of all the scripts, but also slow to write, curves and strokes are elegant
used throughout han dynasty, fell out of fashion during three kingdoms 魏晋时期
 许慎《说文解字》中叙“自尔秦书有八体：一曰大篆；二曰小篆；三曰刻符；四曰蟲書；五曰摹印；六曰署書；七曰殳書；八曰隸書

### Clerical script (隶书)

<div style="overflow-x:scroll;">
    <img style="width:770px;max-width:none;height:4em;" src="{{ site.url }}/assets/images/posts/zh-story/lishu.svg" />
</div>

evolved from small seal, end of qin, reached peak during east han 东汉时期, 汉隶唐楷 
simplification of strokes, from round to square, from the round curves of seal to angled lines of clerical
continuous strokes to 断笔 calligraphic qualities, 起笔 顿笔 吞头燕尾 一波三折 
glyphs were wide, longer horizontal and shorter vertical 秦隶 汉隶
quicker to write, distinct strokes used today developed
small script was official script during qin, among the people there was a quicker writing script: clerical sript
people wrote using brushes on bamboo and wood, modified the curves to straight strokes for quicker writing, simplified storkes, 徒隶 so called clerical
clerical script was used during qin, only officials used small seal
both were accepted
han dynasty, everyone used clerical
can be seen on engravings, bamboo, silk
from long and thin to wide and short to fit onto bamboo strips
from curved to straight for faster writing
long strokes broken up to 点横竖撇捺
thick and thin because brush strikes
further simplification of glyph strokes, significant structural modifications from small seal, introduction of standardised radicals
no longer pictographs, become stroke based symbol, clerical script marked the end of pictographic nature
隶变 the chasm between old chinese and modern chinese

Rapid script 草书

popular among the people cursive script 章草 今草 -> no standardisation, became even more messy after tang dynasty's 狂草 more form than function 行草

章草
隶草 during the transition from qin to han
east han primary school curriculum, has seal script flavour
sui dynasty has 楷书 flavour
song yuan dynasty has 行楷 flavour
spanned 3 styles of scripts
今草
east han widely used, 东晋 became more mature, inherited some characteristics of 章草, simplify strokes, suited for writing fast
replaced individual strokes like 撇捺勾横折弯 with loops
characters were not standard size, broke out of the "grid"
very rhythmic and artistic

狂草
evolved from 今草 breaks the mould of square characters, matured during tang dynasty, unique free flow 
simplified the strokes almost excessively
totally artistic, no standard restricted forms, curves and strokes flow like water
however it's not just draw whatever you want, the trick is to respect the basic tenets of rapid script, which is you can't make arbitrary changes to the characters as you please

行草
based on model script uses 今草 skeleton and stroke technique 

made for speed writing, 书画家 write and draw, write always comes first
cursives' legibility suffer but look pretty


### Model script (楷书)

neat and square, hence model, strokes are mostly straight
end of han, 3 kingdoms 
tang dynasty mature calligraphy
techniques for writing large characters and small characters are different
大字难于结密而无间，小字难于宽绰有余
song dynasty printing, model script and resulting variants are the font of choice
used in modern day

Running script 行书
end of han based on model script
between model script and 草书
increase writing speed while avoiding the legibility issues of 草书
not as messy as 草书 but not as rigid and neat as model script
reached height in song dynasty
never died out
from 魏晋,隋唐 till now

## Related reading

- [Our Chinese Ally](https://www.historians.org/about-aha-and-membership/aha-history-and-archives/gi-roundtable-series/pamphlets/our-chinese-ally)
- Chen, N. (2014). Han zi de you huo. Wuhan: Hubei mei shu chu ban she.
