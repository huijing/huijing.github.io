---
layout: post
title: "Drupal 101: Migrating content with Features and Node Export"
date: March 1, 2015
tags: [drupal, migration]
category: planet-drupal
---
###Importing content

1. `drush dl node_export --select` and select the latest dev version.
2. `drush en node_export node_export_features -y`, this will download uuid as well.
3. Go to `admin/config/content/node_export` and under *File Fields` check the fields according to the attached screenshot. Make sure file export mode is set to *Remote file export, URL*.
4. Copy the actual asset files to the `sites/default/files` folder of the target site.
5. Enable each feature of pil_content one by one.
