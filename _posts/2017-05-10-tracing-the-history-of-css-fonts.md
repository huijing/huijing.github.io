---
layout: post
title: "Tracing the history of CSS fonts"
date: May 10, 2017
image: css-fonts
tags: [typography, specifications]
---
I love a good origin story, like the origin of Batman in Detective Comics #33, or Kate Kane (the modern version, introduced in 52, not the 1956 one). It gives us greater insight into the motivations and characteristics of any particular thing, be it a character or a specification. Segue! <span class="emoji" role="img" tabindex="0" aria-label="smiling face with horns">&#x1F608;</span>

As part of my perpetual obsession with typography, as well as CSS, I've been looking into how we got to having more web fonts than we can shake a stick at. What I love about how the W3C does things is that there are always links to previous versions of the specification, all the way back to the first drafts.

Although those are missing the full picture of the various discussions and meetings among all the individuals involved in crafting and implementing the specifications, it does offer some clues to how things got to where there are.

## The many levels of CSS

You know how sometimes when you fill in your profile for job sites, or some code-related profiles, and they ask what your area of expertise is? Some of those fields are free-form taxonomies and you can see people making a distinction between HTML and HTML5, or CSS and CSS3, as if you need to underscore the point that you are oh-so-current by declaring the “latest” version number?  
<small><em>\*at point of writing, emoji of my go-to IRL face of one eyebrow raised is not released yet, please imagine how my face looks\*</em></small>

When CSS started out, there was CSS1 and CSS2 (subsequently, CSS2.1 and CSS2.2). So the impression is that CSS has versions, like software, which increment as each new version gets released. That's not exactly how it works though. Yes, CSS1 and CSS2 were monolithic specifications that covered every CSS property we had, but somewhere along the lines, a decision was made to modularise the specifications.

<p class="no-margin">The advantages of doing so are outlined in the <a href="https://www.w3.org/TR/2000/WD-css3-roadmap-20000414">first working draft of the CSS3 roadmap</a> published on 14 April 2000, written by <a href="http://meyerweb.com/">Eric A. Meyer</a> (yes, THE <a href="https://twitter.com/meyerweb">@meyerweb</a> we know and love).</p>

<ul>
  <li class="no-margin">To help <strong>clarify the relationships</strong> between the different parts of the specification</li>
  <li class="no-margin">To <strong>reduce the size</strong> of the complete document</li>
  <li class="no-margin">To allow <strong>specific tests</strong> to be built on a per module basis</li>
  <li class="no-margin">To help implementers decide which portions of CSS to <strong>support</strong></li>
  <li class="no-margin">To make it possible for individual modules to be <strong>updated as needed</strong></li>
  <li>To allow for a more <strong>flexible and timely</strong> evolution of the specification as a whole</li>
</ul>

By the next revision of the Working Draft in [19 January 2001](https://www.w3.org/TR/2001/WD-css3-roadmap-20010119/), there was a breakdown of the entire document into 26 modules, and a lot more work went into refining the roadmap to [the version we have right now](https://www.w3.org/TR/css3-roadmap/). The roadmap is currently maintained by [Tab Atkins Jr.](http://www.xanthir.com/blog/), [Elika J. Etemad A.K.A fantasai](http://fantasai.inkedblade.net/) and [Florian Rivoal](https://florian.rivoal.net/), and the full list of CSS specifications by module is available on the [CSS specifications page](https://www.w3.org/Style/CSS/current-work).

Rachel Andrew wrote a concise and informative explanation of [why there is no CSS4](https://rachelandrew.co.uk/archives/2016/09/13/why-there-is-no-css4-explaining-css-levels/), but here's the explanation stated in the CSS Snapshot:
> There is no CSS Level 4. Independent modules can reach level 4 or beyond, but CSS the language no longer has levels. ("CSS Level 3" as a term is used only to differentiate it from the previous monolithic versions.)

## Evolution of a CSS specification

CSS specifications do not just magically appear out of thin air. There is a lengthy process with numerous passes before a specification is finalised and becomes a formal standard, or W3C Technical Report, for implementers and authors to reference. Details are covered in the [W3C Technical Report Development Process](https://www.w3.org/Consortium/Process/#Reports), but here's a general overview.

<p class="no-margin">According to the guidelines, the W3C follows these steps when advancing a technical report to Recommendation.</p>

<ul>
  <li class="no-margin">Publication of the First Public Working Draft,</li>
  <li class="no-margin">Publication of zero or more revised Public Working Drafts.</li>
  <li class="no-margin">Publication of a Candidate Recommendation.</li>
  <li class="no-margin">Publication of a Proposed Recommendation.</li>
  <li class="no-margin">Publication as a W3C Recommendation.</li>
  <li>Possibly, Publication as an Edited Recommendation</li>
</ul>

<div class="table display">
  <div class="tr">
    <div class="th td">Working Draft (WD)</div>
    <div class="td">A Working Draft is a document that W3C has published for review by the community, including W3C Members, the public, and other technical organizations.</div>
  </div>
  <div class="tr">
    <div class="th td">Candidate Recommendation (CR)</div>
    <div class="td">A Candidate Recommendation is a document that satisfies the Working Group's technical requirements, and has already received wide review.</div>
  </div>
  <div class="tr">
    <div class="th td">Proposed Recommendation</div>
    <div class="td">A Proposed Recommendation is a document that has been accepted by the W3C Director as of sufficient quality to become a W3C Recommendation.</div>
  </div>
  <div class="tr">
    <div class="th td">W3C Recommendation (REC)</div>
    <div class="td">A W3C Recommendation is a specification or set of guidelines or requirements that, after extensive consensus-building, has received the endorsement of W3C Members and the Director. W3C recommends the wide deployment of its Recommendations as standards for the Web.</div>
  </div>
</div>

## Chasing CSS fonts back in time

[17 December 1996](https://www.w3.org/TR/REC-CSS1-961217#font-properties) - **CSS1 W3C Recommendation**  
A small section, 5.2, which explains how font matching should be done and defines the initial set of 5 font properties, `font-family`, `font-style`, `font-variant`, `font-weight` and `font-size`, as well as the shorthand `font`. The next version, [11 Jan 1999](https://www.w3.org/TR/1999/REC-CSS1-19990111#font-properties), of the specification did not add much and this was pretty much what formed the basis of CSS fonts for CSS1 when it became a formal recommendation on [17 Dec 1996](https://www.w3.org/TR/REC-CSS1/#font-properties).

[21 July 1997](https://www.w3.org/TR/WD-font-970721) - **Web fonts Working Draft**  
A separate group in the W3C (this is my inference, but if I get the chance to talk to [Chris Lilley](http://svgees.us/) again, I will clarify this) was formed to develop web fonts. It was meant to extend on the CSS1 font model by allowing font descriptions to be added to a style sheet. “The font descriptions consist of a set of font descriptors, individual pieces of information about a font, possibly including a URL where the font can be downloaded.”  
<small><em>\*There is an earlier version published on 10 July 1997 but it's W3C members-only access.\*</em></small>

[04 November 1997](https://www.w3.org/TR/WD-CSS2-971104/fonts.html) - **CSS2 Working Draft**  
In CSS2, the fonts section (section 14) had expanded quite a bit. In addition to everything included in CSS1, generic font families were added. The font selection mechanism was extended, including intelligent matching, synthesis, and downloadable fonts. Generally whatever was in the web fonts module we talked about above.  
System fonts were now a thing. And there was also this very detailed section on font characteristics, which were not specific to CSS per se, and could be mapped onto VRML (Virtual Reality Modeling Language) nodes, CGM (Computer Graphics Metafile) Application Structures or alternative stylesheet languages. Things pretty much held constant over the next 2 versions, [28 Jan 1998](https://www.w3.org/TR/1998/WD-css2-19980128/fonts.html) and [24-Mar-1998](https://www.w3.org/TR/1998/PR-CSS2-19980324/fonts.html). CSS2 became a formal recommendation on [12-May-1998](https://www.w3.org/TR/1998/REC-CSS2-19980512/fonts.html)

[31 July 2001](https://www.w3.org/TR/2001/WD-css3-fonts-20010731/) - **CSS3 Fonts Working Draft**  
As part of the [CSS Style activity](https://www.w3.org/Style/Activity), the original CSS2 authors, together with [Tantek Çelik](http://tantek.com/), Marcin Sawicki, [Michel Suignard](https://www.linkedin.com/in/michel-suignard-6901b0/) and [Steve Zilles](https://www.linkedin.com/in/steve-zilles-4b18033/) wrote the first Working Draft of the CSS3 fonts module. It was stated that the module was dependent on two other CSS3 modules, Web Fonts and Text. It covered font matching, and the list of font properties.  
<small><em>\*I'm probably going to chase the CSS3 text module next, so stay tuned\*</em></small>  

[2 August 2002](https://www.w3.org/TR/2002/WD-CSS21-20020802/fonts.html) - **CSS2.1 Working Draft**  
The first revision of CSS2 (aka CSS2.1) was meant to correct errors in the CSS2 specification as well as remove features that were unwanted or obsoleted by CSS3. In this version, there were substantial cuts to the fonts section, with only the bits about font matching and font properties remaining. The removed bits went to the CSS3 Web Fonts module. Web fonts were dropped in this version and here's the explanation from the [20th birthday of CSS feature](https://www.w3.org/Style/CSS20/history.html) (those balloons are aces).

> First of all there were few fonts whose copyright allowed them to be distributed. Most fonts could be used to print documents locally, but you weren't allowed to put them on the Web.

> Secondly, Microsoft and Monotype had developed a format called EOT (Embedded OpenType), which contained inside the fonts the names (URLs) of the documents that could be rendered with them. [...] But, the format was proprietary and nobody else but Microsoft could use it.

<p class="no-margin">Nothing much got updated in this section for the next 5 versions, and you're welcome to verify this for me.</p>
<ul>
  <li class="no-margin"><a href="https://www.w3.org/TR/2003/WD-CSS21-20030128/fonts.html">28 January 2003</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2003/WD-CSS21-20030915/fonts.html">15 September 2003</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2004/CR-CSS21-20040225/fonts.html">25 February 2004</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2005/WD-CSS21-20050613/fonts.html">13 June 2005</a></li>
  <li><a href="https://www.w3.org/TR/2006/WD-CSS21-20060411/fonts.html">11 April 2006</a></li>
</ul>

[2 August 2002](https://www.w3.org/TR/2002/WD-CSS21-20020802/fonts.html) - **CSS3 Web Fonts Working Draft**  
As mentioned, the cut bits from the CSS2.1 specification went in here, so everything with regards to `@font-face` and the font descriptors for font selection, as well as font characteristics could be found in this specification. The extended font matching algorithm was also defined here.

[2 August 2002](https://www.w3.org/TR/2002/WD-css3-fonts-20020802/) - **CSS3 Fonts Working Draft**  
This was quite a day, as the CSS3 Fonts Working Draft was also updated and now included a section on Font Decoration, with some interesting properties like `font-effect`, `font-smooth`, `font-emphasize-style`, `font-emphasize-position` and the `font-emphasize` shorthand. *\*Spoiler alert: `font-effect` has been dropped, and technically doesn't exist, while others have been moved to other modules\**

<p class="no-margin"><a href="https://www.w3.org/TR/2006/WD-CSS21-20061106/fonts.html">06 November 2006</a> - <strong>CSS2.1 Working Draft</strong><br> 
Finally, some action in the CSS2.1 Working Draft fonts section. The <code>font-family</code> section expanded with details on generic font families. The five generic font families are <code>serif</code>, <code>sans-serif</code>, <code>cursive</code>, <code>fantasy</code> and <code>monospace</code>.<br>
Specifically, it mentions that user agents should provide reasonable default choices, which express the characteristics of each family as well as possible within technical limits. There are also proposed examples of font families to be used for different scripts.<br>
This section does not see any more changes for the next five years, and again, feel free to verify this for me.</p>

<ul>
  <li class="no-margin"><a href="https://www.w3.org/TR/2007/CR-CSS21-20070719/fonts.html">19 July 2007</a> - CSS2.1 Candidate Recommendation</li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2009/CR-CSS2-20090423/fonts.html">23 April 2009</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2009/CR-CSS2-20090908/fonts.html">08 September 2009</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2010/WD-CSS2-20101207/fonts.html">07 December 2010</a></li>
  <li class="no-margin"><a href="https://www.w3.org/TR/2011/PR-CSS2-20110412/fonts.html">12 April 2011</a> - CSS2.1 Proposed Recommendation</li>
  <li><a href="https://www.w3.org/TR/CSS2/fonts.html#q15.0">07 June 2011</a> - CSS2.1 W3C Recommendation</li>
</ul>

[18 June 2009](https://www.w3.org/TR/2009/WD-css3-fonts-20090618/) - **CSS Fonts Module Level 3 Working Draft**  
I bet a lot happened in the seven years between the last working draft and this one but I don't know what happened. What we do know is that this version consolidates all that was previously covered in the CSS3 Fonts module and CSS3 Web Fonts module, into one nice meaty specification. There's also a lovely Typography Background section at the beginning to set up some context for the use cases described later on in the specification. There are illustrative pictures and everything!

## The age of modular CSS

Basically, from here on out, the format of the specifications (at least, to my amateur eyes), seems to have standardised quite well. So whatever comes next is just going to be a list of change logs.  
For posterity's sake.  
Oh, don't give me that look.

<p class="no-margin"><a href="https://www.w3.org/TR/2011/WD-css3-fonts-20110324/">24 March 2011</a> - <strong>CSS Fonts Module Level 3 Working Draft</strong></p>
<ul>
  <li class="no-margin">Revised definition of permissible unquoted font family names to match latest CSS 2.1 draft</li>
  <li class="no-margin">Added <code class="highlighter-rouge">font-kerning</code> property</li>
  <li class="no-margin">Added extensions to <code class="highlighter-rouge">font-variant</code> property for supporting OpenType font features</li>
  <li class="no-margin">Added <code class="highlighter-rouge">@font-feature-values</code> rule for defining font-specific variant selectors</li>
  <li class="no-margin">Added <code class="highlighter-rouge">font-language-override</code> property</li>
  <li class="no-margin">Added <code class="highlighter-rouge">font-feature-settings</code> property for access to low-level OpenType features</li>
  <li class="no-margin">Revised font matching algorithm</li>
  <li>Added <code class="highlighter-rouge">font-synthesis</code> property</li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2011/WD-css3-fonts-20111004/">4 October 2011</a> - <strong>CSS Fonts Module Level 3 Working Draft</strong></p>
<ul>
  <li class="no-margin">Made same-origin wording normative and marked it at-risk</li>
  <li class="no-margin">Simplified definition of subscript/superscript variant property</li>
  <li class="no-margin">Trimmed some font-variant property values and renamed others</li>
  <li class="no-margin">Added more examples for various font variant value types</li>
  <li>Added DOM interface definitions for `@font-feature-values` rules</li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2012/WD-css3-fonts-20120823/">23 August 2012</a> - <strong>CSS Fonts Module Level 3 Working Draft</strong></p>
<ul>
  <li class="no-margin">Based on TPAC resolution, same-origin restriction is normative</li>
  <li class="no-margin">Added parameter specifics for using CORS with font loads</li>
  <li class="no-margin">Revised fallback handling of subscript/superscript variants</li>
  <li class="no-margin">Switched to using CSS3 Values and Units hash notation for comma-delimited lists</li>
  <li class="no-margin">Reworked <code>font-family</code> syntax to be clearer about the use of keywords in unquoted font family names</li>
  <li class="no-margin">Tightened the syntax of <code>font-feature-settings</code> to only allow four-character tags</li>
  <li class="no-margin">Added missing definitions of default values for some properties</li>
  <li>Reworked description of default features and added <code>none</code> value for <code>font-variant-ligatures</code></li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2012/WD-css3-fonts-20121211/">11 December 2012</a> - <strong>CSS Fonts Module Level 3 Working Draft</strong></p>
<ul>
  <li class="no-margin">Tightened description and fixed errors in description of font-variant-caps</li>
  <li class="no-margin">Added <code>auto</code> value to <code>font-size-adjust</code></li>
  <li class="no-margin">Added definition of font load events</li>
  <li class="no-margin">Defined explicit steps for font matching grapheme clusters</li>
  <li class="no-margin">Added <code>font-stretch</code> values to the font shorthand</li>
  <li class="no-margin">Created object model section and revised definition of <code>CSSFontFaceRule</code></li>
  <li class="no-margin">Updated syntax of <code>@font-feature-values</code> rule based on CSS WG resolution</li>
  <li>Other light cleaning and dusting</li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2013/WD-css3-fonts-20130212/">12 February 2013</a> - <strong>CSS Fonts Module Level 3 Working Draft</strong></p>
<ul>
  <li class="no-margin"><code>loadFont</code> method takes a dictionary parameter that includes callbacks</li>
  <li class="no-margin">Added example of system font names used as normal font family name</li>
  <li class="no-margin">Added conformance section</li>
  <li class="no-margin">Added CORS cross-origin request algorithm parameters</li>
  <li class="no-margin">Added specification of Unicode caseless matching for font family names based on WG resolution</li>
  <li class="no-margin">Include issue of synthetic oblique angle in CJK vertical text runs</li>
  <li>Minor editorial tweaks hither and thither</li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2013/WD-css-fonts-3-20130711/">11 July 2013</a> - <strong>CSS Fonts Module Level 3 Last Call Working Draft</strong></p>
<ul>
  <li class="no-margin">Moved font load events into a separate spec</li>
  <li class="no-margin">Tightened syntax rules for <code>@font-feature-values rules</code></li>
  <li class="no-margin">Added grammar productions for <code>@font-face</code> and <code>@font-feature-values</code> rules</li>
  <li class="no-margin">Revised definition of <code>unicode-range</code> descriptor</li>
  <li class="no-margin">Detailed font matching of composite faces</li>
  <li class="no-margin">Revised object model interface of <code>CSSFontFeatureValuesRule</code></li>
  <li class="no-margin">Detailed effect of <code>font-size-adjust</code> on relative unit sizes</li>
  <li>Reference the potentially CORS-enabled fetch method defined in HTML5</li>
</ul>

<p class="no-margin"><a href="https://www.w3.org/TR/2013/CR-css-fonts-3-20131003/">3 October 2013</a> - <strong>CSS Fonts Module Level 3 Candidate Recommendation</strong></p>
<ul>
  <li class="no-margin">reorder feature precedence such that features implied by other CSS properties override <code>font-variant</code> settings</li>
  <li class="no-margin">switched examples to use .woff files</li>
  <li class="no-margin">revised wording of font fetching algorithm</li>
  <li class="no-margin">drop <code>auto</code> value for <code>font-size-adjust</code></li>
  <li class="no-margin">clarify effect of <code>font-size-adjust</code> on <code>line-height</code></li>
  <li class="no-margin">allow user agents to synthesize OpenType kern feature</li>
  <li class="no-margin">add example of ordinals and associated markup</li>
  <li>minor editorial cleanups</li>
</ul>

## Let's talk about Editor's Drafts

According to the guidelines for writing CSS specifications, 
> Working Groups and Interest Groups may make available “Editor's drafts”. Editor's drafts have no official standing whatsoever, and do not necessarily imply consensus of a Working Group or Interest Group, nor are their contents endorsed in any way by W3C.

Regardless, these documents are still interesting to read because they give us a peek into how the specifications are being worked out. There are footnotes and comments and questions wherever clarifications are needed. Personally, I appreciate the transparency of the entire process, as well as the sheer amount of effort it takes to refine a specification to a state where it can be deemed a proper standard.

<p class="no-margin">For the CSS Fonts Module Level 3, a few changes have been made in the <a href="https://drafts.csswg.org/css-fonts/">latest Editor’s Draft</a> dated 19 January 2016, as of time of writing. So if you’re reading this far in the future, the link probably won’t be dated as such any more.</p>
<ul>
  <li class="no-margin">add omitted ‘font-variant-position’ values to ‘font-variant’ shorthand</li>
  <li class="no-margin">make negative values for font-size-adjust invalid, along with negative percentage font-size values</li>
  <li class="no-margin">remove the requirement that user agents use OS/2 table subscript/superscript metrics</li>
  <li>minor editorial cleanups</li>
</ul>

The CSS Fonts Module Level 4 covers new features (which I am excited about), like font variation properties and colour font support. Again, the [Editor's Draft](https://drafts.csswg.org/css-fonts-4/) I'm referring to at time of writing is dated 10 May 2017, but this will definitely change when you try to access and read it.

### Font variation properties

Font variation properties address the CSS properties that deal with variable fonts, which were announced at the [ATypl conference in Warsaw](https://www.youtube.com/watch?v=6kizDePhcFU) on 14 September, 2016 to much fanfare (at least amongst those of us who are typophiles). Basically, it is a single font file that can perform interpolation to cover various weights. This behaviour is defined [version 1.8 of the OpenType font format specification](https://www.microsoft.com/en-us/Typography/OpenTypeSpecification.aspx).

### Colour fonts

Not much has been written about CSS colour fonts at the moment, and I suppose its because colour fonts are relatively new (with regards to CSS, not in general, because they've been around forever) but this is what I gleaned from the document.

We get a `font-palette` property that allows us to pick the palette of the colour font we're using, which brings us to the `@font-palette-values` rule. This rule allows us to define a colour palette and associate it with a specific font. This is the example I pulled from the document:

<pre><code class="language-css">@font-palette-values Augusta {
  font-family: Handover Sans;
  base-palette: 3;
  1: rgb(43, 12, 9);
  3: var(--highlight);
}</code></pre>

As with the `@font-face` rule, there are a number of font descriptors you can use in the `@font-palette-values` rule as well, like `font-family`, `base-palette`, `<integer>` and `font-presentation`. I need more time to dig in and wrap my head around this so just some superficial coverage for now, but did I mention I'm excited? I'm so excited! <span class="emoji" role="img" tabindex="0" aria-label="person dancing">&#x1F483;</span><span class="emoji" role="img" tabindex="0" aria-label="wine glass">&#x1F377;</span><span class="emoji" role="img" tabindex="0" aria-label="confetti ball">&#x1F38A;</span>

## Wrapping up

So that's it for this inaugural edition of “Chasing the Spec”, that it, if I decide to continue and make it a series. <span class="emoji" role="img" tabindex="0" aria-label="nerd face">&#x1F913;</span> Maybe. Depends on my mood. <span class="emoji" role="img" tabindex="0" aria-label="smirking face">&#x1F60F;</span> We'll see. Life happens. <span class="emoji" role="img" tabindex="0" aria-label="person shrugging">&#x1F937;</span>

## Further reading

<ul>
  <li class="no-margin"><a href="https://www.w3.org/Style/2011/CSS-process.en.html">The CSS Standardization Process</a></li>
  <li class="no-margin"><a href="https://alistapart.com/blog/post/variable-fonts-for-responsive-design">Variable Fonts for Responsive Design</a></li>
  <li class="no-margin"><a href="https://medium.com/@tiro/https-medium-com-tiro-introducing-opentype-variable-fonts-12ba6cd2369">Introducing OpenType Variable Fonts</a></li>
  <li><a href="https://blog.typekit.com/2016/09/14/variable-fonts-a-new-kind-of-font-for-flexible-design/">Variable fonts, a new kind of font for flexible design</a></li>
</ul>
