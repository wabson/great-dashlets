Great Dashlets Sample Code
==========================

This project was developed for the [Alfresco Developer Conferences](http://devcon.alfresco.com/) in November 
2012 to provide a concrete example of adding incremental and practical 
features to an Alfresco Share dashlet.

Starting with an updated version of the [Hello World example](http://code.google.com/p/share-extras/wiki/SampleProject) from Share Extras,
the project shows how more dynamic controls and user features can be added.

The accompanying slides can be found on the [Berlin session](https://devcon.alfresco.com/berlin/sessions/develop-great-dashlets) page on the DevCon site, and are broken down 
into eight main parts, plus two supplemental parts which demonstrate more 
advanced features, specifically how to load data from the repository and how 
to add a configuration dialogue to the dashlet. The two supplemental parts are
demonstrated using a second dashlet provided by Jeff Potts in two [blog](http://ecmarchitect.com/archives/2012/05/04/1592) [posts](http://ecmarchitect.com/archives/2012/05/15/1599) 
from May 2012.

The complete list of items covered is as follows

  * Introduction to Hello World dashlet
  * Adding Title Bar Actions
  * Using a Dashlet Resizer
  * Custom Client-side Components
  * Using YUI Buttons and Dom manipulation
  * Dashlet Toolbars: Drop-down filters and action links
  * Maintaining state using user preferences
  * User notifications and prompts

The code in each of these stages can be found in the branches `helloworld1` 
through `helloworld8` in this project. Check out the code via Git or download
the source as a ZIP and extract it locally.

You can build and deploy the code using the `hotcopy-tomcat-jar` or 
`hotcopy-tomcat-zip` Ant tasks. You'll need to sepcify the location of
the Tomcat instance where Share is installed, e.g.

    ant hotcopy-tomcat-jar -Dtomcat.home=/opt/Alfresco/tomcat

If you use the supplemental examples provided by the Get Latest Document
Dashlet, you will also need to deploy the JAR file to the repository Tomcat,
if this is running separately to Share.
