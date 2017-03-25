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
	+ [Session 1, March 25, 2017](#class1)
	+ [Session 2, April 1, 2017](#class2)
	+ [Session 3, April 8, 2017](#class3)
	+ [Session 4, April 15, 2017](#class4)
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

+ [Github](https://github.com/)
+ [CARTO](http://carto.com/)
+ [Google](https://accounts.google.com/signup?service=mail)

In addition, please install a free text editor of your choice:
	+ [Sublime Text](https://www.sublimetext.com/) (All systems)
	+ [TextWrangler](http://www.barebones.com/products/textwrangler/) (All systems)
	+ [Notepad++](https://notepad-plus-plus.org/) (Windows)

<a id="course-readings"></a>
### Course Readings 
The required readings for this course consist of book chapters, newspaper articles, and short blog posts. The intention is to help give you a foundation in the critical skills ahead of class lectures. All required readings are available online or will be made available through the class portal. Recommended readings are suggestions if you wish to study further the topics covered in class. The books listed in the Suggested Readings section below offer even more depth and an extended discussion of the material we cover in class.

<a id="class-format"></a>
### Class Format 
Class runs from 9:30am to 5:30pm. Each day will be consist of 80-90–minute blocks broken up by 10-minute breaks and a half-hour break for lunch. Class will be a mix of lecture and exercise work, emphasizing the application of skills covered in the lecture portion of the class. You will have ample time in class to work on practical exercises based on the information presented in lectures.

<a id="submitting-assignments"></a>
### Submitting Assignments
All assignments will be submitted by adding your content to [this repository](http://github.com/fitnr/savi-750). See `[assignments/](assignments/README.md)` for details. **Assignments aren't considered submitted until the pull request has been issued.** We will have ample time in class to address any technical issues and a reference guide for the process.

#### Assessment
Area | Total Points
--- | ---
Class Participation | 25
Visualization Critiques | 25
Visualizations | 25
Final Project | 25
**Total** | **100**

#### Attendance
Regular, prompt attendence is required.

#### Participation 
Your engagement makes class sessions richer and more fulfilling for everyone. Questions are encouraged, and active participation in class discussion and in-class exercises is very important.

<a id="outline"></a>
## Course Outline
Topics will be covered that day in class. Reading assignments are to be read before class in preparation of the lecture and exercises. Assignments are due before the start of the next class and build on the information presented in class.

### Weekly assignment
Find an interesting or visually compelling map (interactive or static) or visualization online and write 2-3 paragraphs on the visualization, discussing the data source(s), the visual style, and how well the data was represented. Feel free to use the visualization resources listed below. Submit your analysis (include a link to the visualization) to this repository before each class.

----

<a id="class1"></a>
## [Session 1 - March 25](class1/index.html)
+ Introduction
+ Data on the web
+ Introduction to mapping and cartography
+ Introduction to HTML and CSS
+ Introduction to Git and [Github](http://github.com)

Please take the [student skills survey](https://docs.google.com/forms/d/e/1FAIpQLScf0l8tUuXc0z4Uz0lan3fMwIoU-jRTMrCpdOivX-YDwuTuEg/viewform).

#### Assignment
1. Complete the [CARTO “Online Mapping for Beginners”](https://carto.com/academy/courses/beginners-course) course.
2. Identify a research question that you would like to explore in this class, with the intention of creating maps and visualizations that will help answer question or clarify the topic. Write 2-3 paragraphs on what question you would like to answer, what data you'd like to explore using, and what you hope to contribute with your work.

### Readings
+ Thomas Levine, [Introduction to web scraping](https://thomaslevine.com/!/web-sites-to-data-tables/)
+ [Introduction to APIs ch 1-5](https://zapier.com/learn/apis/)
+ Ben Wellington "[Mapping the Sharing Economy](http://iquantny.tumblr.com/post/110747103479/mapping-the-sharing-economy-an-in-depth-view-of)"
+ Heer, Jeffrey, Michael Bostock, and Vadim Ogievetsky. "[A tour through the visualization zoo.](http://hci.stanford.edu/jheer/files/zoo/)" Commun. ACM 53.6 (2010): 59-67. 
+ [CARTO “Introduction to Map Design”](https://carto.com/academy/courses/design-for-beginners)

<a id="class2"></a>
## [Session 2 - April 13, 2016](class2/index.html)
+ Web scraping
+ Introduction to APIs
+ Introduction to the command line and parsing data with [csvkit](http://csvkit.readthedocs.io/)
+ Opening closed data with [Tabula](http://tabula.technology)
+ Introduction to SQL

### Assignments
Create a second map, using new data scraped from the web or pulled via an API. Write 2-3 paragraphs discussing any challenges you encountered working with the data and/or creating your map in Carto.

#### Readings

<a id="class3"></a>
### [Class 3 - April 18, 2016](class3/index.html)
+ Overview of social media data
+ Collecting social media data from APIs
+ Introduction to Python for querying APIs
+ SQL for analysis

#### Readings
+ Obe, Regina, and Leo Hsu. PostGIS in action. Manning Publications Co., 2011, Pg 3-8.

### Assignments
Complete the [SQL and PostGIS in CARTO](http://academy.carto.com/courses/04-sql-postgis.html) course.
Update your maps (or create a new one) using data joined from two sources

<a id="class4"></a>
### [Class 4 - April 20, 2016](class4/index.html)
+ Python for querying Geoclient API
+ Spatial SQL functions
+ Advanced topics TBD

---

<a id="resources"></a>
### Resources 

#### Answering questions
* [Stack Overflow](http://stackoverflow.com/) question & answer community of tech
* [GIS Stack Exchange](http://gis.stackexchange.com/) same as above for mapping

### Working with data
* [The Quartz guide to bad data](https://github.com/Quartz/bad-data-guide)

#### APIs
+ [Codecademy Learn to Code for APIs](https://www.codecademy.com/apis)

#### Python
+ [Codecademy Python Course](https://www.codecademy.com/learn/python)
+ [MIT Introduction to Computer Science and Programming with Python](http://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-00sc-introduction-to-computer-science-and-programming-spring-2011/index.htm) (free course)
+ [Learn Python the Hard Way](https://learnpythonthehardway.org/book/)

#### Git
+ [A tutorial for getting started with Git and Github](https://help.github.com/articles/git-and-github-learning-resources/)
+ [Try Git](https://try.github.io/levels/1/challenges/1)
+ [Git Reference Manual](https://git-scm.com/docs)

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

#### Cartography
+ [Carto Academy](http://academy.carto.com/)
+ [Elements of Cartographic Style](http://www.gismanual.com/home/index.htm) by Paul Cote

#### Visualizations
* [Flowing Data](http://flowingdata.com/)
* [Census Data Visualization Gallery](https://www.census.gov/dataviz/)
* [IQuantNY](http://iquantny.tumblr.com/)
* [bl.ocks](https://bl.ocks.org)

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

