---
layout: post
title: "The one without sleep"
date: March 30, 2015
tags: [drupal, projects, hackathon]
category: planet-drupal
---
So I recently participated in my first ever hackathon over the weekend of March 28. [Battlehack Singapore](https://2015.battlehack.org/singapore) to be exact (oddly, there was another [hackathon](http://mastersofcode.com/event/singapore/) taking place at the same time). A UX designer friend of mine had told me about the event and asked if I wanted to join as a team.  
Me: Is there gonna be food at this thing?  
Her: Erm...yes.  
Me: Sold!  
Joking aside, I'd never done a hackathon before and thought it'd be fun to try. We managed to recruit another friend and went as a team of three. 

<img src="{{ site.url }}/images/posts/battlehack/battlehack.jpg" alt="Battlehack Singapore 2015"/>

###The idea
The theme of the hackathon was to solve a local or global problem so before the event, we kicked around a couple of ideas and settled on a Clinic Finder app. Think Yelp for clinics. Singapore provides a large number of medical schemes that offer subsidised rates for healthcare. Not every clinic is covered by every scheme though, so we thought it'd be good if people could find clinics based on the medical scheme they are covered by.

Of course, there will be people who aren't covered by any medical scheme at all, like me. But I've also had the experience of being brought on a wild goose chase by Google while trying to find an open clinic at 2am in the morning. I'd like to think this is a relatable scenario. Being idealistic people, we wanted our app to provide updated information on each clinic, like actual opening hours and phone numbers with real people on the other end of the line. And trust me, we've pondered the BIG question of: where will you ever get such data?

The most viable idea we could think of at the time was to work with the relevant government agencies that had access to such data. But since it was a hackathon project, we just wanted to see if we could build out the functionality and make it look decent within 24 hours. Then, there was the decision of which platform the app would run on. Ideally, this would work well on a mobile device, but our team recognised that we didn't have the capabilities to build out a mobile app in 24 hours. 

Our expertise was building Drupal sites. Thus, that would be our best bet to have a working application at the end of 24 hours. Maybe one day we'll join hackathons to win, but not this time. This time, we just wanted to finish. Gotta know how to crawl before learning to walk, and walk before learning to run.

###Day 1
Battlehack Singapore took place at the [Cliftons office](https://www.cliftons.com/venues/singapore/) in the Finexis Building. Rooms on both floors were set up for teams of four, with power points and LAN cables for each member. We took a spot near the wall because there was a nice spot to the side for napping. Turns out there wouldn't be much of that. 

Shortly into the hackathon, we hit our first snag. The internet access went out. Definitely an "Oh, crap" moment for me. I mentioned in my [last post]({{ site.url }}/blog/542-days-as-a-drupal-developer/) how much I used Google throughout the day. I guess the Hackathon Fates decided, no Google for you, kiddo. 

No internet also meant no way to download modules. Luckily for me, I had a bunch of local development sites still sitting in my hard drive, and a majority of the module files I needed were in there somewhere. Sure, they were outdated, but beggars can't be choosers. The organisers were working hard to fix the problem, so I figured I'd just download the newer versions when we got back online. The moral of the story is: Don't delete all your old development sites, you never know when they might come in handy.

I'll admit I got a little grumpy about the situation, but pouting wasn't going to solve anything, so why not take a little time to chill with the Dinosaur Game? Just in case you didn't know, as of version 39, the guys at Chrome [snuck an easter egg](http://thenextweb.com/google/2014/09/25/googles-latest-chrome-build-hidden-game-can-play-offline/) into the browser. *Useless trivia: I eventually got to a 1045 high score :satisfied:*

<img src="{{ site.url }}/images/posts/battlehack/dino-game.jpg" alt="Chrome Dinosaur Game"/>

We wanted the app to have proximity location capabilities. There are quite a number of solutions for this on Drupal. Coincidentally, I'd listened to the latest episode of [Talking Drupal](http://www.talkingdrupal.com/) the night before and the topic was [Map Rendering](http://www.talkingdrupal.com/090). The two modules that stuck in my mind were [Leaflet](https://www.drupal.org/project/leaflet) and [IP Geolocation](https://www.drupal.org/project/ip_geoloc) as it was mentioned they seemed "smoother".

<p class="no-margin">The IP Geolocation module had very good integration with Views and the end result (after the all-nighter, of course) was pretty close to the original design we had in mind. Given the tight schedule we had, this was definitely a plus. The only custom code I had to write were minor tweaks to facilitate theming, one to add placeholder attribute to the search filter, and another to add CSS classes to boolean fields based on their values.</p>
<pre><code class="language-php">
/**
 &ast; Implements hook_form_alter().
 */
//Add placeholder attribute to search boxes
function custom_form_alter(&$form, &$form_state, $form_id) {
  if($form_id == "views_exposed_form") {
    if (isset($form['field_geofield_distance'])) {
      $form['field_geofield_distance']['#origin_options']['#attributes'] = array('placeholder' => array(t('Enter Postal Code/Street Name')));
    }
    if (isset($form['field_medical_scheme_tid'])) {
      $form['field_medical_scheme_tid']['#options']['All'] = t('Medical Scheme');
    }
  }
}</code></pre>

<pre><code class="language-php">
/*
 &ast; Implements template_preprocess_field()
 */
function clinicfinder_preprocess_field(&$variables) {
  //check to see if the field is a boolean
  if ($variables['element']['#field_type'] == 'list_boolean') {
    //check to see if the value is TRUE
    if ($variables['element']['#items'][0]['value'] == '1') {
      //add the class .is-true
      $variables['classes_array'][] = 'is-true';
    } else {
      //add the class .is-false
      $variables['classes_array'][] = 'is-false';
    }
  }
}</code></pre>
Even though it was a hackathon, and we were pressed for time, I still tried my best to adhere to Drupal best practices. So the <code class="language-php">template_preprocess_field</code> went into the <code class="language-bash">template.php</code> file while the <code class="language-php">hook_form_alter</code> went into a custom module.

###Day 2
The presentation at the end of the hackathon was only two minutes long. We figured that as long as we could articulate the app's key features and demo those features successfully, that would be our pitch. As Sheryl Sandberg said:
<blockquote>Done is better than perfect.</blockquote>

<img src="{{ site.url }}/images/posts/battlehack/hackathon.jpg" alt="Clinic Finder home page"/>

The Battlehack guys were really helpful in this regard. There were rehearsal slots the next morning for us to present our pitch to a panel of mentors, who'd provide feedback on our idea and presentation pitch. Their suggestion to us was to get to straight to the point on our key feature, the bit about medical schemes, since that was the local problem we were trying to address.

<img src="{{ site.url }}/images/posts/battlehack/hackathon-2.jpg" alt="Clinic Finder map page"/>

That was a really good piece of advice, as we watched a number of participants who presented before us run out of time before they got to best part of their product. We managed to pitch our app within the time and answer the judges' questions. As expected, we did get the "so where will you get the data?" question. So we talked about partnership with government organisations. Another question we got was about advertising, which tied into a point we didn't really consider, on the sustainability of the app.

###Hackathon takeaways
1. Expect that things may go wrong and adapt accordingly.
2. Be focused. You only have 24 hours.
3. Keep your pitch concise. Two minutes goes by quicker than you think.
4. Unless you're a ninja coder, you won't get much sleep.
5. Consciously remind yourself to be a nice person, especially when you haven't slept at all.

At the end of the day, we did manage to build a working application in 24 hours and present it on time. Definitely a valuable learning experience. It's always nice to build something that works, especially if you do it together with friends. Looking forward to the next one.
