webpackJsonp([71906251609360],{399:function(e,t){e.exports={data:{site:{siteMetadata:{title:"The Personal Website of Brandon Brown",author:"Brandon Brown"}},markdownRemark:{id:"/Users/temp/Workspace/brandonbrown.github.io/src/pages/writing/weekend-build-water-tracker/index.md absPath of file >>> MarkdownRemark",html:'<h1>Stay Hydrated, Friends</h1>\n<p>Let’s build a water tracking app. The focus is going to start with the front-end, user-oriented needs. So, what am I building:</p>\n<blockquote>\n<p>When I drink water, I want to track the amount to make sure I’m drinking a healthy amount throughout the day</p>\n</blockquote>\n<p>To accomplish this, the application will require features such as:</p>\n<ol>\n<li>Set a water intake goal</li>\n<li>Create new drink</li>\n<li>Enter new drink amount</li>\n<li>Enter previous drink amount</li>\n<li>Store a list of favorite beverage types and their water amount</li>\n<li>Enable Quick-Add of favorite beverages for fast entry</li>\n<li>Show a history of the water drank</li>\n<li>History will clearly indicate when the daily goal was met</li>\n<li>Allow the user to edit, delete, and create entries for past drinks</li>\n<li>Congratulate the user on consistently hitting their goal</li>\n</ol>\n<p>This sounds like a strong set-up for this app. This first version will be very minimal, allowing me to “grease the groove” with React Native, React, and maybe Redux. Okay, let’s talk overall architecture and structure.</p>\n<h2>The Plan</h2>\n<p>I want this to be as close to a single-point interaction as possible. The user should open the app, hit “Track Drink,” and close the app. Maybe a watch integration for these ultra-fast micro entries, but that’s what I’ll call scope creep — for now.</p>\n<p>This single point interaction focus should help me to keep page count low. Our main screen should include all options required to quickly enter a new drink:</p>\n<ol>\n<li>Auto-set to previous drink</li>\n<li>Quick-select frequent drink type</li>\n<li>Adjust amount drank</li>\n<li>Change unit type</li>\n<li>Save entry as new favorite drink with label</li>\n<li>Select a favorite</li>\n<li>Submit drink</li>\n</ol>\n<p>A navigation should be present to expand the value of the application:</p>\n<ol>\n<li>Main: Drink tracking screen</li>\n<li>History: See how well you’re tracking</li>\n<li>Favorites: Create and Edit favorite drink types</li>\n<li>Settings: Not required in this first version but may become a necessity in future if the development of this application is continued</li>\n</ol>\n<p>Okay, let’s go make the interface.</p>\n<p><em>Update</em></p>\n<p>Weekend builds, but with a family and newborn responsibilities, are not weekend builds! I’m going to build this in a ship-as-fast-as-possible, but let’s drop the weekend need.</p>\n<p>Okay, back to the app.</p>\n<p>I decided to give Figma a try for the prototype- and this is incredible. I’m still getting oriented to their interface, but this is quite possibly the perfect tool for fast prototyping. I’ve already become a big fan. They even offer embed code… let’s see what this is:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;margin-bottom: 1.0725rem"\n          >\n            <iframe style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          " src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Ffile%2Fb4mhtPcDaQ5F07AOohVK8O%2FMinMaxHydrate%3Fnode-id%3D0%253A1" allowfullscreen></iframe>\n          </div>\n          </div>',frontmatter:{title:"Weekend Build: Water Tracker",date:"November 23, 2019",category:"Development"}}},pathContext:{slug:"/writing/weekend-build-water-tracker/",previous:{fields:{slug:"/writing/bookmarks-7/"},frontmatter:{title:"Bookmarks of the Week for Nov 17 2019",category:"Resources"}},next:{fields:{slug:"/writing/bookmarks-8/"},frontmatter:{title:"BKMKS for Nov 24 2019",category:"Resources"}}}}}});
//# sourceMappingURL=path---writing-weekend-build-water-tracker-164ea7769edcedec2217.js.map