---
layout: post
title: "The one on the tightest of deadlines"
date: April 27, 2015
image: project-9.jpg
tags: [drupal, projects]
---
I feel large-scale projects are like play-off games. You can't expect to win without adequate preparation. You need to scout your opponents and formulate a game plan, which involves matching up your opponent's strengths and weaknesses against your own. You may have gotten away with just winging it during the regular season, but come play-off time, everybody is out to win, and every ounce of preparation is critical.

Similarly, a large-scale project should involve a significant amount of up-front planning and preparation before any actual development takes place. We took on a project that involved the migration of 27 sites from a proprietary CMS platform over to an Acquia-hosted Drupal platform within 30 days. It was the biggest project I had been involved in up till then, and I'm proud to say we managed to pull it off on schedule.

###Opponent's scouting report summary (aka project requirements)

<ul>
<li class="no-margin">All the content had to move into its new home by the stipulated deadline</li>
<li class="no-margin">Content should be structured as much as possible for extensibility and reusability across the different sites</li>
<li class="no-margin">Each site had its own look and feel, and was to be replicated as close to the original as possible</li>
<li class="no-margin">The deployment would be a big-bang approach, where all the sites would be switched over to the new platform at the same time</li>
<li>The deadline could not be negotiated</li>
</ul>

###Game plan overview (aka project plan)

Given the narrow margin for error, the success of the project hinged on close collaboration between ourselves, the client and the previous vendor, who would be facilitating the cut-over. We planned for the work to be divided into two phases.

**Phase 1: Architecture design and development**

1. **Infrastructure design**  
    There were 2 options under consideration, Domain Access or a multi-site implementation. But based on an initial analysis of the site architecture and requirements, we were leaning toward the multi-site implementation with a single database.
2. **Content structuring**  
    Analyse all 27 sites to sift out repeatable patterns that could be built into reusable components, both in terms of site architecture, as well as theming.
3. **Component generation**  
    Create all necessary content types, fields, views, pages, custom panes and other components. Build feeds importers where applicable.
4. **Final requirement check and UAT**  
    Verify scope of work and required functionality with client, but the guiding principle was that any functionality that was not critical for the migration of content would be differed to after the cut-over.
5. **Instantiation of 27 sites**  
    Install and setup 27 sites with basic theme and templates.

By the end of Phase 1, the team of content migrators could start porting over the content from the old platform to the Drupal sites. The content migration would run in parallel with Phase 2.

**Phase 2: Building individual sites**

1. **Create parent theme**  
    This theme would provide the styling for all shared components across the 27 sites. These components would come from item #2 in Phase 1.
2. **Build out site structure for each site**  
    Panelizer was the option of choice for putting together the components to build out each of the 27 sites.
3. **Create sub-themes for each site**  
    Each sub-theme would contain styles that gave each site its unique look and feel.
4. **Final UAT**  
    The client team would perform UAT on the sites and verify that all sites were good to go-live.

###Game highlights (aka project highlights)

1. **Building out the site structure using taxonomy**  
    After a lot of thought, we did NOT go with Domain Access nor a multi-site implementation. We decided to create a site structure vocabulary to organise the sites. There were three parent terms, for Television, Radio and Magazines. Each site would be a child term in their respective categories and each section of the site would be a grandchild term. Is this the best method of doing things? Maybe, maybe not. But given the design constraints, this was the best method we could successfully implement while still hitting the deadline.
2. **Creating generic views that can be customised through panels**  
    So after going through all 27 sites, I realised that all the list components could be grouped according to the number of columns they had. The layouts ranged from one to four columns, with some variations for each. I created four content pane view displays for each layout and turned on settings as well as allowed argument inputs from the pane config. This allowed me to build all the customised content displays from only those four content panes.
3. **Using Themekey to render the themes for each site**  
    Because all 27 sites were just one mega-site, the only way each term could have its own theme was through a module known as [Themekey](https://www.drupal.org/project/themekey). It allows theme switching based on certain conditions, in our case, the rule was term IDs.
4. **Up-front effort on the parent theme sped up sub-theme development significantly**  
    As everything theming-related came under my purview, it was my personal responsibility to ensure all 27 sites looked like their original counterparts. I had two weeks for this, and spent the first week fine-tuning the parent theme and the first sub-theme. I'd be lying if I said I wasn't worried about hitting the deadline. Fortunately, the up-front effort paid out significant dividends in terms of speeding up development of each subsequent theme. Eventually I was cranking out 5 sub-themes a day due to the amount of code that could be re-used.

###Post-game analysis (aka retrospective)
This was one of the most challenging projects I've ever worked on. And yes, it was a stressful endeavour (I'd like to think I'm not the only person who thinks 27 sites in 30 days is challenging) but I learnt so much from this experience.
<figure>
<figcaption><strong>Magazine sites</strong></figcaption>
<img src="{{ site.url }}/images/posts/xinmsn/magazines.jpg" alt="Magazine sites"/>
</figure>

I can't say enough about the importance of planning. And yet, it must be expected that things will not go according to plan. For all the preparation in the world, you will never be able to predict what happens during the game. The key to winning the game is the ability to react to game situations. Preparation provides the confidence required to make those game-time decisions.

There were certain things that deviated from the original project plan because as we developed the site, we discovered new things that rendered the original idea infeasible. So we changed our approach when necessary. Our sole focus was to ensure the sites could go live by the deadline, hence all decisions revolved around this project objective.

<figure>
<figcaption><strong>Radio sites</strong></figcaption>
<img src="{{ site.url }}/images/posts/xinmsn/radios.jpg" alt="Radio sites"/>
</figure>

This project would not have been successful without the cooperation and collaboration between all involved parties. The client was responsive and understanding. Most importantly, they trusted us to do our job well. And in return, it was our responsibility to keep them in the loop and updated throughout the entire process. Open communication, as well as always being cognizant of the project goal, was what kept us on track.

To sum it up, this was project that was challenging, and even gruelling at times, but the harder the goal, the greater the feeling of accomplishment when it's conquered.
