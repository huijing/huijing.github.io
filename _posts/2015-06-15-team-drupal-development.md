---
layout: post
title: "Developing Drupal sites as a team"
date: June 15, 2015
image: drupal-team.jpg
tags: [drupal7, workflow]
category: planet-drupal
---
A lot of people, myself included, start out with Drupal on their own, developing and building everything as a one-person operation. When we're working by ourselves, there will be certain good practices that we neglect, either out of convenience (there's no point doing X since I'm the only one touching this project), or out of ignorance (wow, I had no idea that was how Y was supposed to be used). 

Working with a team of people to build a Drupal site (or any other development project) requires more structure and discipline to ensure the project doesn't descend into a pile of spaghetti code. I'm going to try to summarise the processes that worked for my team thus far. I do foresee our process continuing to evolve as we start using new tools and learning new things as we go along.

## Required development tools

<ul>
  <li class="no-margin">
    <strong>Git</strong>
    <p>Git is a version control system. Simply put, a version control system tracks your files and file structures for any changes. You can then commit those changes to a repository. It allows you to rollback to previous commits easily.</p>
  </li>

  <li class="no-margin">
    <strong>Drush</strong>
    <p>Drush is a shell interface for managing Drupal from the command line. It is a tool that speeds up our development workflow by allowing us to perform many different administrative tasks, like clearing cache, running cron jobs, updating modules and so on, with just a simple command or two.</p>
  </li>
</ul>

Both tools are crucial for any team working with Drupal. Installation instructions for Git are pretty straightforward. It's usually the installation of Drush that trips people up.

### Installing Git

If you're on a Mac, and have Xcode with command line tools installed, you already have Git on your system. But if you want to upgrade to the latest version of Git, which I highly recommend, the simplest way is via [homebrew](http://brew.sh/).

1. Install Homebrew.
    <pre><code class="language-bash">ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"</code></pre>
    <p class="no-margin">You can check that everything is running correctly by running:</p>
    <pre><code class="language-bash">brew doctor</code></pre>
    If it returns `Your system is ready to brew` then you're good to go.
2. Install Git.
    <pre><code class="language-bash">brew install git</code></pre>
    <p class="no-margin">You can check the installation by running:</p>
    <pre><code class="language-bash">which git</code></pre>

For Windows users, you can download the installer for Git from [Git for Windows](http://msysgit.github.io/). There is an excellent guide called [Working with Git on Windows](http://guides.beanstalkapp.com/version-control/git-on-windows.html) by [Beanstalk](http://beanstalkapp.com/) that can help you get Git up and running on your Windows machine.

### Installing Drush

<p class="no-margin"><strong>Instructions for Mac Users</strong></p>
This will install the latest version of Drush on your machine. This method works with systems running MAMP as well as homebrew versions of php.

1. Install Composer globally
    <pre><code class="language-bash">curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer</code></pre>
2. Add the following line to your shell configuration file (`.bash_profile` or `.zprofile`)
    <pre><code class="language-bash">export PATH="$HOME/.composer/vendor/bin:$PATH"</code></pre>
3. Reload your shell configuration or restart your terminal.
4. Check that Composer has been installed by running:
    <pre><code class="language-bash">which composer</code></pre>
    <p class="no-margin">It should return:</p>
    <pre><code class="language-bash">/usr/local/bin/composer</code></pre>
5. Install the latest version of Drush from HEAD
    <pre><code class="language-bash">composer global require drush/drush:dev-master</code></pre>
    <p class="no-margin">To update Drush, run the following:</p>
    <pre><code class="language-bash">composer global update</code></pre>
6. For MAMP users, you will need to add the following to your shell configuration file:
    <pre><code class="language-bash">export PATH="/Applications/MAMP/Library/bin:/Applications/MAMP/bin/php/phpX.X.XX/bin:$PATH"</code></pre>
    <p class="no-margin"> Modify the PHP version accordingly. This path is relevant for MAMP 3 users. If you're using a different version of MAMP, you will have to change the path depending on where PHP is installed.</p>

<p class="no-margin"><strong>Instructions for Windows Users</strong></p>
1. Install Composer by downloading the [installer](https://getcomposer.org/Composer-Setup.exe) and running it.
2. Restart your command prompt or git bash and verify the installation by running:
    <pre><code class="language-bash">composer -v</code></pre>
3. Install the latest version of Drush by running:
    <pre><code class="language-bash">composer global require drush/drush:dev-master</code></pre>

I highly suggesting referring to [Installing Drush 7 on Windows 7 and 8 + XAMPP](http://drupalistasgroup.com/installing-drush-7-windows-xampp) for detailed instructions and troubleshooting.

## General guidelines

The project must be managed using Git. This allows everyone to have visibility on the changes to the code base, and also helps with debugging and disaster recovery, when necessary. For this to work, all members of the team have to agree on the way of working.

### A modified git workflow

- There will be **3 environments**, local development, staging server and production server.
- **Production server** will be on a `master-deployment` branch, where all files have been optimised and served to the public. We never make code changes directly on the production server.
- **Staging server** will be on a `master` branch, where completed features are merged into for all team members to pull. Files are still in working condition, to facilitate development work.
- Each team member will have their own **working branch**, named `workbench-YOUR_NAME`. Once a feature is complete, each team member will submit a pull request to the master branch.
- Go through **git diff before committing** to ensure all the changes made are the ones you want. This also prevents us from inadvertently committing unnecessary files, which lead to my next point.
- **Do not commit unnecessary files**. This will cause the repository to bloat and even if you delete the files from the repository, the files are still there in the git history. Rewriting the git history is a lot more work than just being careful. Trust me [I've been there]({{ site.url }}/blog/the-epic-git-bomb/). Github has an [excellent collection](https://github.com/github/gitignore) of .gitignore files, including one for [Drupal projects](https://github.com/github/gitignore/blob/master/Drupal.gitignore).
- **Each commit should address a single problem**. This makes it safe and easy to revert commits without fear of breaking anything. When updating the site, the core update should be done first, and have its own commit. Each module update should also be in individual commits. 
- **Write clear, descriptive commit messages**. Do not write commit messages like "Bug fix" and leave it like that. This makes it easier for all involved to have a clear idea of which commits did what. And speeds up the debugging process, when necessary.
- Related to the above point, we **append an infinitive (add, remove, update) to the commit message**. For Drupal updates, our commit messages follow the format: *update MODULE_SHORT_NAME to version = "7.x-x.x"*, where the version portion is directly copied from the module's .info file.

### The Drupal way of web development

- **Never hack core**. Drupal has a comprehensive hook system that allows us to keep our custom code separate from core and module files, which makes upgrading Drupal much more maintainable.
- All Drupal development work takes place in the `sites` folder. To make it easier for everyone on the team to find stuff, the folder is organised as follows:
    <pre><code class="language-markup">
    sites/
    |-- all/
    |   |-- libraries/
    |   |
    |   |-- modules/
    |   |   |-- contrib/
    |   |   |-- custom/
    |   |   `-- features/
    |   |
    |   |-- patches/
    |   |   `-- MODULE_NAME/
    |   |      `--PATCH_FILE_FOR_MODULE.patch
    |   |
    |   `-- themes/
    |
    `-- default/
        |-- files/
        `-- settings.php
</code></pre>
    - All contributed modules go into the `contrib` folder, any custom modules go into the `custom` folder, and modules exported from Features go into the `features` folder.
    - The `patches` folder is for fixes that have yet to be committed to the module. These are usually from the module's issue threads. Having a separate folder for patches makes it easier to keep track of which modules have been patched. Once the patch is committed to the module, the corresponding patch file can be removed from the project.
- **There's a module for that**. Odds are, if you need a particular feature, some one has already built a module for it. Drupal has a pretty stringent criteria for getting modules into the contrib directory. Most modules also have dedicated module maintainers, who will update their modules with new features and bug fixes.
- **Do not put business logic in the template layer**. Drupal can be considered a PAC (Presentation-Abstraction-Controller) framework, and the presentation layer only deals with parsing the raw data from the Controller into HTML. There should not be intelligence built into it. Keeping to this practice makes it much easier to on-board new developers to the project.
- **Make good use of Drupal's structured data capabilities**. Drupal makes creating content types and fields very simple. Take the time to plan out the content structure and create the appropriate content types and fields. This will make it easy to implement manipulate the data in views for sorting and filtering, search functionality and so on.

### Exporting and deploying features

*This should change significantly once Drupal 8 becomes the standard*.

- We use the [Features](https://www.drupal.org/project/features) module extensively for the export and deployment of site functionality. There are a number of related modules that we regularly use together with Features to export certain functionality.
  <ul>
    <li class="no-margin"><a href="https://www.drupal.org/project/features_extra">Features Extra</a></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/strongarm">Strongarm</a></li>
    <li class="no-margin"><a href="https://www.drupal.org/project/uuid">UUID</a> and <a href="https://www.drupal.org/project/uuid_features">UUID Features Integration</a></li>
  </ul>
- Field bases and taxonomy are each exported as a separate base feature, e.g. *PROJECT_NAME_fieldbases* and *PROJECT_NAME_taxonomy*.
- Features are organised by functionality, to keep things as modular as possible. For example, if there is an events section, then all functionality related to that section, like the event content type, image styles, views and so on, will be exported to the *PROJECT_NAME_events* feature.
- It is not possible to export everything cleanly and modularly, hence it is very important to have clearly documented deployment steps, especially for manual steps which have to be recreated exactly on the production server.

## Conclusion

Working in a team allows us to leverage on each other's strengths and capabilities to create a better end-product than if we were working alone. However, because everybody works differently, it is crucial that there are clear guidelines and processes which everyone agrees upon. It may take some work to come up with documentation and processes, but the benefits reaped in the long run is well worth the effort.

### Further reading

<ul>
    <li class="no-margin"><a href="http://julianlmedina.com/getting-drush-working-with-mamp-3-on-mac/">Getting Drush working with MAMP 3 on Mac</a></li>
    <li class="no-margin"><a href="http://www.annertech.com/blog/implement-web-design-drupal-way">Implementing a Web Design the Drupal Way (not just any old way)</a></li>
    <li class="no-margin"><a href="http://binary-studio.com/2014/05/23/top-10-rules-for-better-git-workflow/">Top 10 Rules For Better Git Workflow</a></li>
    <li><a href="http://www.garfieldtech.com/blog/mvc-vs-pac">MVC vs. PAC</a></li>
</ul>

<em><small>Credits: OG:image from <a href="http://seriousplaypro.com/2015/03/12/lego-case-study-team-culture/">LEGO® SERIOUS PLAY®</a></small></em>
