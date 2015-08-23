---
layout: post
title: "Drupal 101: Mapping with Leaflet and IP Geolocation"
date: March 31, 2015
image: mapping.jpg
tags: [drupal7, site-building]
category: planet-drupal
---
Store locators are a useful functionality for businesses who have multiple outlets. Drupal has a number of map rendering modules that allow us to provide store locator functionality. This article will cover the basics of setting up a simple store locator with proximity search functionality.

##Create and setup location content type

###Required modules
<ul>
<li class="no-margin"><a href="https://www.drupal.org/project/addressfield">Address Field</a></li>
<li class="no-margin"><a href="https://www.drupal.org/project/geocoder">Geocoder</a></li>
<li class="no-margin"><a href="https://www.drupal.org/project/geofield">Geofield</a></li>
<li class="no-margin"><a href="https://www.drupal.org/project/geophp">geoPHP</a><em> (dependency for Geocoder and Geofield)</em></li>
<li class="no-margin"><a href="https://www.drupal.org/project/ctools">Chaos tools suite (ctools)</a><em> (dependency for Address Field)</em></li>
<li><a href="https://www.drupal.org/project/ds">Display Suite</a><em> (Optional: to manage the content display)</em></li>
</ul>

1. Install the required modules.
    <pre><code class="language-bash">drush dl addressfield geocoder geofield geophp ctools -y</code></pre>
2. Enable the required modules.
    <pre><code class="language-bash">drush en addressfield geocoder geofield geofield_map geophp ctools -y</code></pre>
3. Go to <code class="language-bash">admin/structure/types/add</code> and create your location content type.
4. Add a new field for Address.

    <img src="{{ site.url }}/images/posts/maps/address-field.jpg" alt="Create address field"/>
    Click Save, then click Save field settings. You can adjust the defaults settings to suit your locale, if you wish, then click the Save settings button.
5. Add new field for Position.

    <img src="{{ site.url }}/images/posts/maps/position-field.jpg" alt="Create position field"/>
    Click Save, then click Save field settings.

    <img src="{{ site.url }}/images/posts/maps/position-field-settings.jpg" alt="Position field settings"/>
    Select *Address* from the drop-down for the *Geocode from field* option, and select *Google Geocoder* for the *Geocoder* option. You can tweak the other default settings, if you wish.
6. *Optional steps: To setup display for the new content type* 
    <ul>
    <li class="no-margin">Install Display suite.</li>
    <pre><code class="language-bash">drush dl ds -y</code></pre>
    <li class="no-margin">Enable Display Suite and Display Suite UI</li>
    <pre><code class="language-bash">drush en ds ds_ui -y</code></pre>
    <li class="no-margin">Go to <code class="language-bash">admin/structure/types/manage/location/display</code> and activate display suite settings for your new content type by choosing a layout and click Save. I'm using <em>One column</em> for this example.
    <img src="{{ site.url }}/images/posts/maps/display-suite.jpg" alt="Turn on display suite"/>
    <li class="no-margin">Select the fields you want displayed and click Save.</li>
    <img src="{{ site.url }}/images/posts/maps/display-suite-2.jpg" alt="Adjust display"/>
    <li class="no-margin">Do the same for any other view modes you will be using.</li>
7. If you chose not to use Display suite, you still need to make sure the *Format* for the *Position* field is set to *Geofield Map*. If you do not see the *Geofield Map* option in the drop-down, check that the Geofield Map module is enabled. This module is part of the Geofield module.

##Importing Location data using feeds
If you have a lot of data, it doesn't make sense to enter each location manually. I suggest using [Feeds](https://www.drupal.org/project/feeds) to import the data instead. This particular example uses data from a spreadsheet, which is easily converted to CSV via Excel. For setting up feeds in other formats, refer to my [previous post on Feeds]({{ site.url }}/blog/drupal-101-what-i-learnt-from-hours-of-troubleshooting-feeds/). 

1. Install the [Feeds](https://www.drupal.org/project/feeds) module.
    <pre><code class="language-bash">drush dl feeds -y</code></pre>
2. Enable Feeds, Feeds Importer and Feeds UI.
    <pre><code class="language-bash">drush en feeds feeds_importer feeds_ui -y</code></pre>
3. Go to admin/structure/feeds and click on &#10133; Add importer.
4. Under *Basic settings*, select *Off* for the *Periodic import* option.
5. Change the *Fetcher* to *File upload*. You can retain the default settings for this.
6. Change the *Parser* to *CSV parser*. You can keep the default settings for this as well.
7. Keep the *Processor* as *Node processor* and under *Bundle*, select the new content type you created earlier. You can keep the default settings, if you wish.
8. For *Mapping*, ensure all the fields in your data set are mapped out accordingly, with the headers of your CSV file matching the *SOURCE* exactly. My dataset has the following field mapping:
    <img src="{{ site.url }}/images/posts/maps/field-mapping.jpg" alt="Mapping location importer"/>

    <p class="no-margin">With reference to the <a href="https://www.drupal.org/node/1988472">official documentation</a>, take note of the following:</p>
    <ul>
    <li class="no-margin">Always supply a country value in their two character <a href="http://en.wikipedia.org/wiki/ISO_3166-1">ISO 3166-1 country codes</a>.</li>
    <li class="no-margin">Address components are as follows:</li>
        <ul>
        <li class="no-margin">Address: Country => Country</li>
        <li class="no-margin">Address: Administrative area => State</li>
        <li class="no-margin">Address: Locality => City</li>
        <li class="no-margin">Address: Postal code => Postal Code</li>
        <li class="no-margin">Address: Thoroughfare => Address 1</li>
        <li class="no-margin">Address: Premise => Address 2</li>
        </ul>
    </ul>
9. Go to <code class="language-bash">import</code> and select the importer you just created.
10. Import your CSV file. Cross your fingers and hope everything imports successfully.

##Create and setup location views
<p class="no-margin"><strong>Required modules</strong></p>
<ul>
<li class="no-margin"><a href="https://www.drupal.org/project/views">Views</a></li>
<li class="no-margin"><a href="https://www.drupal.org/project/ip_geoloc">IP Geolocation Views & Maps</a></li>
<li class="no-margin"><a href="https://www.drupal.org/project/libraries">Libraries API</a><em> (dependency for IP Geoloc)</em></li>
<li class="no-margin"><a href="https://www.drupal.org/project/entity">Entity API</a><em> (dependency for IP Geoloc)</em></li>
<li><a href="https://www.drupal.org/project/leaflet">Leaflet</a></li>
</ul>

###Part 1: Location listing
1. Install required modules.
    <pre><code class="language-bash">drush dl views leaflet libraries entity ip_geoloc -y</code></pre>
2. Enable the required modules.
    <pre><code class="language-bash">drush en views views_ui leaflet leaflet_views ip_geoloc libraries entity -y</code></pre>
3. Create a libraries folder in the <code class="language-bash">sites/all</code> folder. Download the [Leaflet JavaScript Library](http://leafletjs.com/download.html) and extract the files to the libraries folder. Ensure the folder name is <code class="language-bash">leaflet</code>.
    <img src="{{ site.url }}/images/posts/maps/libraries-folder.jpg" alt="Libraries folder structure"/>
4. Go to <code class="language-bash">admin/structure/views/add</code> and create a new view for the Location content type. Check *Create a page* and fill in the fields as you see fit, then click Continue & edit. These options can be changed on the next screen.
    <img src="{{ site.url }}/images/posts/maps/views.jpg" alt="Setup location views"/>
5. Under *Format*, change the *Show* options to *Fields*.
    <img src="{{ site.url }}/images/posts/maps/listing-format.jpg" alt="Change listing display format"/>
6. Add a *Rendered Node* field. Click on *Add* and type *Rendered Node* in the search filter. Check *Content: Rendered Node* and click Apply.
7. Select *Show complete entity* under *Display* and choose the view mode you used for displaying your fields when you set up the Location content type.
    <img src="{{ site.url }}/images/posts/maps/rendered-node.jpg" alt="Add rendered node field"/>
8. Add a *Proximity* field. Click on *Add* and type *Proximity* in the search filter. Check *Content: Position (field_position) - proximity* and click Apply. Adjust the field settings as you see fit. I recommend checking the *Round* option and specifying *Precision* to *2*, as the default option gives a long string of decimal points.
    <img src="{{ site.url }}/images/posts/maps/proximity-field.jpg" alt="Proximity field settings"/>
    Set the *Source of Origin Point* to *Exposed Geofield Proximity Filter*.
9. Add a *Proximity* filter. Under *Filter*, click on *Add* and type *Proximity* in the search filter. Check *Content: Position (field_position) - proximity* and click Apply.
10. Check *Expose this filter to visitors*. Change the *Label* if you need to, this field can be left blank. Set the *Operator* to *is less than or equal to* and enter the starting value in the *Proximity Search* field.
    <img src="{{ site.url }}/images/posts/maps/proximity-filter.jpg" alt="Proximity filter settings"/>
11. Remove all existing *Sort Criteria*. Click on *Add* and type *Proximity* in the search filter. Check *Content: Position (field_position) - proximity* and click Apply. Select *Sort ascending*, and under *Source of Origin Point*, select *Exposed Geofield Proximity Filter*.
    <img src="{{ site.url }}/images/posts/maps/proximity-sort.jpg" alt="Proximity sort settings"/>
12. Go to the path of your views page to check that the listing is rendering correctly. Test the proximity search by typing a location into the exposed filter.
    <img src="{{ site.url }}/images/posts/maps/location-listing.jpg" alt="Location listing"/>

###Part 2: Map display
1. Add a new Attachment view display to the Location view.
    <img src="{{ site.url }}/images/posts/maps/map-view.jpg" alt="Map view display"/>
2. Add a *Position* field. Click on *Add* and type *Position* in the search filter. Check *Content: Position* and click Apply. 
3. Check *Exclude from display*. This field is used for plotting the locations on the map. Pick *Latitude/Longitude* as the formatter and click Apply.
4. Under *Format*, choose *This attachment (override)*, select *Map (Leaflet API, via IPGV&M)* and click Apply. 
5. Adjust the height of the map as you see fit. Under *Name of latitude field in Views query*, select *Content: Position*, the field you just added.
6. The location marker styles can be customised and the help text provides detailed information on how to do that. For this example, I chose *green* as the default marker and left the *Visitor marker* as default, so they are differentiated.
7. Under *Map centering options*, select *Center the map on visitor's current location*.
8. Under *No locations behaviour*, enter *visitor* so the map will centre on the user's location when no results are found.
9. Click on *More map options* to reveal the map zoom settings. For this example, the default *Initial zoom level* was too low, and I set it to *15* instead.
10. There are many customisation options that IP Geolocation provides, and you can tweak them to suit your needs. Click Apply when done.
11. Under *Attachment settings*, attach the display to the listing view created in Part 1. Ensure that *Inherit exposed filters* is set to *Yes*. 
    <img src="{{ site.url }}/images/posts/maps/map-attachment.jpg" alt="Map attachment"/>
12. Go to the views page URL and check that your map is rendering correctly.
    <img src="{{ site.url }}/images/posts/maps/map-pop-up.jpg" alt="Map information"/>

##Next steps
Once everything is rendering correctly, it's just a matter of theming the views to look like your design.

<img src="{{ site.url }}/images/posts/maps/theming-ba.jpg" alt="Theming before and after"/>

This was pretty much the summary of how I implemented IP Geolocation and Leaflet for [Battlehack]({{ site.url }}/blog/the-one-without-sleep/). I was quite satisfied with the end result as the map was smooth and responsive. If your project requires map rendering, why not give this combination a try?
