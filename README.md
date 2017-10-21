# XSAVI 750 – Mining the Web: How to Scrape, Analyze & Map Open Data<a id="top"></a>

### Pratt Institute, Center for Continuing and Professional Studies Spatial Analysis and Visualization Initiative (SAVI)

Instructor: Neil Freeman

Location: ISC Building, Lower Level, Room 003

Continuing Education Units (C.E.U.s): 3.0

----
### Table of Contents
+ [Course Overview](#course-overview)
+ [Course Requirements](#course-requirements)
+ [Course Readings](#course-readings)
+ [Class Format](#class-format)
+ [Submitting Assignments](#submitting-assignments)
+ [Course Outline](#outline)
	+ [Session 1, October 21](#class1)
	+ [Session 2, October 28](#class2)
	+ [Session 3, November 4](#class3)
	+ [Session 4, November 11](#class4)
+ [Resources](#resources)
	+ [Suggested Reading](#suggested-reading)

----
## Administrative Details

<a id="course-overview"></a>
### Course Overview
This course introduces the tools, techniques, and general approaches used to acquire, clean, analyze, and visualize open data, with particular emphasis on using web-based technologies and open-source tools at each step of the process.

#### Learning objectives
+ You will learn to formulate and articulate a meaningful research question with public open data, as well as meaningfully critique the work of others
+ You will learn how to acquire data through open data portals, application programmer interfaces (APIs), and scraping data from web sites
+ You will learn how to clean data using open source tools in preparation for analysis
+ You will learn how to conduct exploratory data analysis using descriptive statistics
+ You will learn to visualize your analytical findings in meaningful and visually-engaging graphics, as well as meaningfully critique the work of others
+ You will learn the basics of cartographic design as it relates to visualizing open data

<a id="course-requirements"></a>
### Course Requirements 
**All students will need to bring their own laptop for exercises during class.** Time will be set aside to help install, configure, and run the programs necessary for all assignments, projects, and exercises. Where possible, all programs will be free and open-source. All assigned work using services hosted online can be run using free accounts. **Please update your system to the latest version of your prefered operating system prior to the first day of class to ensure you're able to successfully install and use the tools in class.**

You will be required to have free accounts with the following services:

+ [CARTO](http://carto.com/)

In addition, please install the text editor of your choice. Some (free) suggestions:
+ [Sublime Text](https://www.sublimetext.com/) (All systems)
+ [Atom](https://atom.io/) (All systems)
+ [Notepad++](https://notepad-plus-plus.org/) (Windows)

<a id="course-readings"></a>
### Course Readings 
The required readings for this course consist of book chapters, newspaper articles, and short blog posts. The intention is to help give you a foundation in the critical skills ahead of class lectures. All required readings are available online or will be made available through the class portal. Recommended readings are suggestions if you wish to study further the topics covered in class. The books listed in the Suggested Readings section below offer even more depth and an extended discussion of the material we cover in class.

<a id="class-format"></a>
### Class Format 
Class runs from 9:30am to 5:30pm. Each day will be consist of 80-90–minute blocks broken up by 10-minute breaks and a half-hour break for lunch. Class will be a mix of lecture and exercise work, emphasizing the application of skills covered in the lecture portion of the class. You will have ample time in class to work on practical exercises based on the information presented in lectures.

<a id="submitting-assignments"></a>
### Submitting Assignments
All assignments will be submitted by adding your content to the course Dropbox folder. Assignments must be submitted by 10 pm of the Friday before class.

#### Assessment
Area | Total Points
--- | ---
class participation | 25
weekly critiques | 25
weekly projects | 25
final project | 25
**Total** | **100**

#### Attendance
Regular, prompt attendence is required.

#### Participation 
Your engagement makes class sessions richer and more fulfilling for everyone. Questions are encouraged, and active participation in class discussion and in-class exercises is very important.

<a id="outline"></a>
## Course Outline
Topics will be covered that day in class. Reading assignments are to be read before class in preparation of the lecture and exercises. Assignments are due before the start of the next class and build on the information presented in class.

### Weekly critiques
Find an interesting or visually compelling map (interactive or static) or visualization online and write 2-3 paragraphs on the visualization, discussing the data source(s), the visual style, the creator's goals and audience, and how well the data was represented. Feel free to use the visualization resources listed below. Submit your analysis (include a link to the visualization) to this repository before each class. Come prepared to informally present the project to your classmates.

----

<a id="class1"></a>
## [Session 1 - October 21](http://fitnr.github.io/savi-750/class1/index.html)
+ Introduction
+ Open data
+ Introduction to mapping and cartography
+ Introduction to CARTO
+ Introduction to HTML and CSS

#### Assignment
0. Complete the [CARTO “Online Mapping for Beginners”](https://carto.com/academy/courses/beginners-course) course.
1. Identify a research question that you would like to explore in this class, with the intention of creating maps and visualizations that will help answer question or clarify the topic.
    * Write a short summary of the your topic. What questions you would like to answer? What audience would you like to reach? What data would you like to explore?
    * Create a basic CARTO map with one data layer that connects to your topic.
    * Embed the map in a basic HTML document with your write-up.
2. On the same page, include the link to an interesting map or visualization and add your weekly critique.

### Readings
+ Thomas Levine, [Introduction to web scraping](https://thomaslevine.com/!/web-sites-to-data-tables/)
+ [Introduction to APIs ch 1-5](https://zapier.com/learn/apis/)
+ Ben Wellington "[Mapping the Sharing Economy](http://iquantny.tumblr.com/post/110747103479/mapping-the-sharing-economy-an-in-depth-view-of)"

### Suggested Reading
+ Alex Hern. [New York taxi details can be extracted from anonymised data, researchers say](https://www.theguardian.com/technology/2014/jun/27/new-york-taxi-details-anonymised-data-researchers-warn), the Guardian, 27 June 2014
+ Beth Simone Noveck. [Is Open Data the Death of FOIA?](https://www.yalelawjournal.org/forum/is-open-data-the-death-of-foia), Yale Law Journal, November 21, 2016.
+ Jeffrey Heer, Michael Bostock and Vadim Ogievetsky. "[A tour through the visualization zoo.](http://hci.stanford.edu/jheer/files/zoo/)" Commun. ACM 53.6 (2010): 59-67. 

<a id="class2"></a>
## [Session 2 - October 28](http://fitnr.github.io/savi-750/class2/index.html)
+ Introduction to the Census Factfinder
+ Introduction to APIs
+ Parsing data with [csvkit](http://csvkit.readthedocs.io/)
+ Manual Web scraping

### Assignments
1. Complete the [SQL and PostGIS in CARTO](http://academy.carto.com/courses/04-sql-postgis.html) course.
Update your maps (or create a new one) using data joined from two sources
2. Create a second map, using new data scraped from the web or pulled via an API.
    * Embed the map in a new HTML document.
    * Include a paragraph discussing any challenges you encountered working with the data and/or creating your map in CARTO.
3. Weekly critique

### Readings
+  Jeremy B. Merrill, [Heart of Nerd Darkness: Why Updating Dollars for Docs Was So Difficult](https://www.propublica.org/nerds/heart-of-nerd-darkness-why-dollars-for-docs-was-so-difficult)

<a id="class3"></a>
### [Class 3 - November 4](http://fitnr.github.io/savi-750/class3/index.html)
+ Introduction to SQL
+ Introduction to spatial SQL
+ Opening closed data with [Tabula](http://tabula.technology)

### Assignments
1. Work through "The Basics" at [Learn Python](http://www.learnpython.org) (you can skip "String Formatting". If you're feeling good, jump ahead to "List Comprehensions")
2. Update your interactive map to include data that you've joined, filtered or modified with an SQL query. Plan a 10-minute presentation explaining the topic your map addresses, the data sources you used, and your methodology.
3. Weekly critique

### Readings

* [The Mapbox Guide to Map Design](https://www.mapbox.com/resources/guide-to-map-design-part-1.pdf), pages 1-50
* Paul Cote, [Mapping with Aggregated Statistics](http://www.pbcgis.com/normalize/)

<a id="class4"></a>
### [Class 4 - November 11](http://fitnr.github.io/savi-750/class4/index.html)
+ Class presentations
+ Python for scraping the web
+ Quantitative maps on the web
+ Review

### Assignments
1. Make any desired revisions to your map. Your final project should be embedded on an HTML page that includes an introduction and description of your topic, as well as a description your process and methodology.

#### Readings
* [Few Interact With Our Interactive Maps–What Can We Do About It?](http://mapbrief.com/2017/04/06/few-interact-with-our-interactive-maps-what-can-we-do-about-it/)

---

<a id="resources"></a>
### Resources 

#### Answering questions
* [Stack Overflow](http://stackoverflow.com/) question & answer community of tech
* [GIS Stack Exchange](http://gis.stackexchange.com/) same as above for mapping

### Working with data
* [The Quartz guide to bad data](https://github.com/Quartz/bad-data-guide)
* [JSON to CSV converter](https://konklone.io/json/)
* [Table to TSV bookmarklet](javascript:%21function%28%29%7BArray.prototype.forEach.call%28document.getElementsByTagName%28%22table%22%29%2Cfunction%28a%29%7Bvar%20b%3Ddocument.createElement%28%22textarea%22%29%3Bb.style.setProperty%28%22width%22%2Ca.scrollWidth%2B%22px%22%29%2Cb.style.setProperty%28%22height%22%2C%22400px%22%29%2Cb.innerHTML%3DArray.prototype.map.call%28a.getElementsByTagName%28%22tr%22%29%2Cfunction%28a%29%7Breturn%20Array.prototype.map.call%28a.querySelectorAll%28%22th%2Ctd%22%29%2Cfunction%28a%29%7Breturn%20a.textContent.replace%28%22%5Cn%22%2C%22%20%22%29%7D%29.join%28%22%26%239%3B%22%29%7D%29.join%28%22%26%2313%3B%26%2310%3B%22%29%2Ca.parentNode.insertBefore%28b%2Ca.nextSibling%29%7D%29%7D%28%29%3B) (drag to toolbar or "save as bookmark")

### Command line
* [What is the Command Line](https://learn.adafruit.com/what-is-the-command-line/overview?gclid=CMSy49eS8tICFZmIswod5zYMag) (series of pages with links to history articles)
* [Lifehacker guide to the command line](http://lifehacker.com/5633909/who-needs-a-mouse-learn-to-use-the-command-line-for-almost-anything)
* [Basic Unix commands](http://mally.stanford.edu/~sr/computing/basic-unix.html)
* [Photos of historic command line interfaces](http://www.catb.org/esr/writings/taouu/html/ch02s02.html)

#### APIs
+ [Codecademy Learn to Code for APIs](https://www.codecademy.com/apis)

#### Python
+ [Codecademy Python Course](https://www.codecademy.com/learn/python)
+ [MIT Introduction to Computer Science and Programming with Python](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/index.htm) (free course)
+ [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)

#### HTML & CSS
+ [Codecademy HTML and CSS Course](https://www.codecademy.com/en/tracks/htmlcss)
+ [Mozilla Developer Network](https://developer.mozilla.org/en-US/)

#### Javascript
+ [Mozilla Developer Network](https://developer.mozilla.org/en-US/)
+ [Javascript for Cats](http://jsforcats.com)
+ [Eloquent Javascript](http://eloquentjavascript.net)

#### (Some) Open Data Sources
* [U.S. Government open data](https://www.data.gov)
* [Census TIGER map data](https://www.census.gov/geo/maps-data/data/tiger.html)
* [New York City Open Data Portal](https://nycopendata.socrata.com/)
* [New York State Open Data Portal](https://data.ny.gov/)
* [UK open data](https://data.gov.uk)
* [Awesome Public Datasets](https://github.com/caesar0301/awesome-public-datasets)
* Kirk Bourne's list of [open data sources](http://www.datasciencecentral.com/profiles/blogs/a-plethora-of-open-data-repositories-i-e-thousands)
* [NYPL Space/Time Directory](http://spacetime.nypl.org)
* [https://data.ny.gov/](https://data.ny.gov/)
* [https://data.sfgov.org/](https://data.sfgov.org/)
* [https://data.cityofchicago.org/](https://data.cityofchicago.org/)
* [https://data.cityofboston.gov/](https://data.cityofboston.gov/)
* [https://data.seattle.gov/](https://data.seattle.gov/)
* [https://data.kcmo.org/](https://data.kcmo.org/)
* [http://data.lexingtonky.gov/](http://data.lexingtonky.gov/)

#### Cartography
+ [Carto Academy](http://academy.carto.com/)
+ [Elements of Cartographic Style](http://www.gismanual.com/home/index.htm) by Paul Cote

#### Visualizations and maps
* [Flowing Data](http://flowingdata.com/)
* [Census Data Visualization Gallery](https://www.census.gov/dataviz/)
* [IQuantNY](http://iquantny.tumblr.com/)
* [bl.ocks](https://bl.ocks.org)
* (Propublica News Apps)[https://www.propublica.org/newsapps/]
* [Interactive maps collected by the NYPL](https://www.nypl.org/collections/nypl-recommendations/guides/nyc-interactive-maps)
* [Source](https://source.opennews.org) (blog of OpenNews)

#### Selected interactive maps
* <a href="https://dsl.richmond.edu/panorama/redlining">The Displacement Alert Project Map</a>
* <a href="http://80s.nyc">80s.nyc</a>
* <a href="http://map.dapmapnyc.org/app">Displacement Alert Project Map</a>
* <a href="https://landcovertrends.usgs.gov/fieldphotomap/index.html">Land Cover Trends Field Photo Map</a>
* <a href="http://www.robertmanduca.com/projects/jobs.html">Where Are The Jobs?</a>
* <a href="https://www.nytimes.com/interactive/2014/05/04/nyregion/where-pedestrians-and-bicyclists-are-injured-and-why.html">Where Pedestrians and Bicyclists Are Injured, and Why</a>
* <a href="http://www.hubcab.org">Hubcap</a>
* <a href="https://transit.sidewalklabs.com">NYC Transit Explorer</a>
* <a href="https://onthemap.ces.census.gov">OnTheMap</a>
* <a href="https://data.buzzfeed.com/projects/2016-04-planemaps/">Spies in the Skies</a> (<a href="https://www.buzzfeed.com/peteraldhous/spies-in-the-skies">related article</a>)
* <a href="https://www.nytimes.com/interactive/2017/08/07/upshot/music-fandom-maps.html">Music Fandom</a>
* <a href="https://www.nytimes.com/interactive/2017/06/30/upshot/the-best-and-worst-new-york-neighborhoods.html">The Best and Worst New York Neighborhoods...</a>
* <a href="https://www.nytimes.com/interactive/2017/06/22/upshot/Census-Time-Machine-Demographics-in-America.html">A Census Time Machine: Sioux Falls Is the Past, Staten Island the Present, Las Vegas the Future</a>
* [White Collar Crime Prediction Map](https://whitecollar.thenewinquiry.com)
* <a href="https://www.nytimes.com/interactive/2017/03/08/upshot/who-wins-and-who-loses-under-republicans-health-care-plan.html">Who Wins and Who Loses Under Republicans’ Health Care Plan</a>

#### Sublime Text
* [Package control](https://packagecontrol.io)

#### Reference
* [Get LatLon](http://teczno.com/squares/)
* [Talks by Maciej Cegłowski](http://idlewords.com/talks/)

#### Suggested Reading
+ Fry, Ben. *Visualizing Data: Exploring and Explaining Data with the Processing Environment*. O'Reilly Media, Inc., 2007.
+ Garrad, Chris. *Geoprocessing with Python*. Manning Publications Co., forthcoming. Janert, Philipp K. Data analysis with open source tools. O'Reilly Media, Inc., 2010.
+ McCallum, Q. Ethan. *Bad Data Handbook: Cleaning Up The Data So You Can Get Back To Work*. O'Reilly Media, Inc., 2012.
+ Munzner, Tamara. *Visualization Analysis and Design*. AK Peters, 2014.
+ Murray, Scott. *[Interactive data visualization for the Web](http://chimera.labs.oreilly.com/books/1230000000345/index.html)*. O'Reilly Media, Inc., 2013.
+ Tufte, Edward R., and P. R. Graves-Morris. *The visual display of quantitative information*. Vol. 2. Cheshire, CT: Graphics press, 1983.

---
#### Precedents

This course builds [from material prepared by Richard Dunks](https://github.com/fitnr/savi-750) under the terms of the <a rel="license" href="http://creativecommons.org/licenses/by-nc-sa/4.0/">Creative Commons Attribution-NonCommercial-ShareAlike 4.0 International License</a>.
