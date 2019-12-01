webpackJsonp([71906251609360],{400:function(e,t){e.exports={data:{site:{siteMetadata:{title:"The Personal Website of Brandon Brown",author:"Brandon Brown"}},markdownRemark:{id:"/Users/temp/Workspace/brandonbrown.github.io/src/pages/writing/weekend-build-water-tracker/index.md absPath of file >>> MarkdownRemark",html:'<h1>Stay Hydrated, Friends</h1>\n<p>Let’s build a water tracking app. The focus is going to start with the front-end, user-oriented needs. So, what am I building:</p>\n<blockquote>\n<p>When I drink water, I want to track the amount to make sure I’m drinking a healthy amount throughout the day</p>\n</blockquote>\n<p>To accomplish this, the application will require features such as:</p>\n<ol>\n<li>Set a water intake goal</li>\n<li>Create new drink</li>\n<li>Enter new drink amount</li>\n<li>Enter previous drink amount</li>\n<li>Store a list of favorite beverage types and their water amount</li>\n<li>Enable Quick-Add of favorite beverages for fast entry</li>\n<li>Show a history of the water drank</li>\n<li>History will clearly indicate when the daily goal was met</li>\n<li>Allow the user to edit, delete, and create entries for past drinks</li>\n<li>Congratulate the user on consistently hitting their goal</li>\n</ol>\n<p>This sounds like a strong set-up for this app. This first version will be very minimal, allowing me to “grease the groove” with React Native, React, and maybe Redux. Okay, let’s talk overall architecture and structure.</p>\n<h2>The Plan</h2>\n<p>I want this to be as close to a single-point interaction as possible. The user should open the app, hit “Track Drink,” and close the app. Maybe a watch integration for these ultra-fast micro entries, but that’s what I’ll call scope creep — for now.</p>\n<p>This single point interaction focus should help me to keep page count low. Our main screen should include all options required to quickly enter a new drink:</p>\n<ol>\n<li>Auto-set to previous drink</li>\n<li>Quick-select frequent drink type</li>\n<li>Adjust amount drank</li>\n<li>Change unit type</li>\n<li>Save entry as new favorite drink with label</li>\n<li>Select a favorite</li>\n<li>Submit drink</li>\n</ol>\n<p>A navigation should be present to expand the value of the application:</p>\n<ol>\n<li>Main: Drink tracking screen</li>\n<li>History: See how well you’re tracking</li>\n<li>Favorites: Create and Edit favorite drink types</li>\n<li>Settings: Not required in this first version but may become a necessity in future if the development of this application is continued</li>\n</ol>\n<p>Okay, let’s go make the interface.</p>\n<p><em>Update</em></p>\n<p>Weekend builds, but with a family and newborn responsibilities, are not weekend builds! I’m going to build this in a ship-as-fast-as-possible, but let’s drop the weekend need.</p>\n<p>Okay, back to the app.</p>\n<p>I decided to give Figma a try for the prototype- and this is incredible. I’m still getting oriented to their interface, but this is quite possibly the perfect tool for fast prototyping. I’ve already become a big fan. They even offer embed code… let’s see what this is:</p>\n<div>\n          <div\n            class="gatsby-resp-iframe-wrapper"\n            style="padding-bottom: 56.25%; position: relative; height: 0; overflow: hidden;margin-bottom: 1.0725rem"\n          >\n            <iframe style="\n            position: absolute;\n            top: 0;\n            left: 0;\n            width: 100%;\n            height: 100%;\n          " src="https://www.figma.com/embed?embed_host=share&amp;url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb4mhtPcDaQ5F07AOohVK8O%2FMinMaxHydrate%3Fnode-id%3D6%253A6%26scaling%3Dscale-down" allowfullscreen></iframe>\n          </div>\n          </div>\n<p><em>note: If you want to share your prototype, go to the prototype screen and share from there! You also get live updates. So if you want to lock in at a specific version, you may need to make a new document. The prototype shared here is updating as I create the interface.</em></p>\n<p>I am very impressed with Figma! The only thing I’m struggling with is the animations of the prototype. Some of these connections do not make sense, however it may be my bias towards other systems I’m already familiar with.</p>\n<p>Screens prototyped so far by Sunday night:</p>\n<ol>\n<li>Main entry screen/card</li>\n<li>Entry history timeline</li>\n<li>History stats</li>\n</ol>\n<p>I hope I can finish the interface tomorrow. It is a busy day, but I can tell how positive this practice of <em>greasing the groove</em> is for me right now so I’ll make sure to find time.</p>\n<p>One small thing I wish Figma had: Export Frames as images.</p>\n<p><em>11/30: Anyone with kids who can still pull off a weekend project.. kudos. Massive kudos. 🙌</em></p>\n<p>Okay, the interface is at a point where I’m happy to start building. You should be able to see the interface in its most recent state above.</p>\n<p>Okay, let’s go:</p>\n<p>First, let’s make sure Expo is up to date. Also handy if you haven’t installed Expo for react native yet:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ npm install -g expo-cli</code></pre>\n      </div>\n<p>For more info, visit the official <a href="https://facebook.github.io/react-native/docs/getting-started">React Native docs</a></p>\n<p>Now, let’s start the project:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ expo init MinMaxHydrate</code></pre>\n      </div>\n<p>I decided on the blank workflow with Yarn as my dependency tool.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">$ cd MinMaxHydrate &amp;&amp; yarn start</code></pre>\n      </div>\n<blockquote>\n<p>Late addition to scope (our favorite!) of having teams in the mix. It’s a bold plan, let’s see if it plays out.</p>\n</blockquote>\n<p>Now that we have our foundation, let’s add some structure:</p>\n<ul>\n<li>\n<p>app</p>\n<ul>\n<li>actions</li>\n<li>assets</li>\n<li>fonts</li>\n<li>icons</li>\n<li>images</li>\n<li>components</li>\n<li>config</li>\n<li>modules</li>\n<li>reducers</li>\n<li>services</li>\n<li>store</li>\n<li>views</li>\n</ul>\n</li>\n</ul>\n<p>Oh and of course, we should be tracking with <code class="language-text">git</code></p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">git init</code></pre>\n      </div>\n<p>I’ll keep the rest of the git steps out of this, but just a reminder for anyone who may follow this!</p>\n<p>Since this is a UI focused workflow at the moment, one of the first things I want to do is create a global stylesheet.</p>\n<p>Let’s create another directory under <code class="language-text">assets</code> called <code class="language-text">styles</code>. I’ll create <code class="language-text">global.js</code> within this directory.</p>\n<p>I’m going to structure this file into sections that will help to clarify the purpose of the styles. For example:</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code class="language-text">import { StyleSheet } from &#39;react-native&#39;\n\nconst layout = StyleSheet.create({   ❶\n  container: {                       ❷\n    marginTop: 150,\n    backgroundColor: &#39;#ededed&#39;,\n    flexWrap: &#39;wrap&#39;\n  }\n})\n\nconst buttons = StyleSheet.create({  ❸\n  primary: {                         ❹\n    flex: 1,\n    height: 70,\n    backgroundColor: &#39;red&#39;,\n    justifyContent: &#39;center&#39;,\n    alignItems: &#39;center&#39;,\n    marginLeft: 20,\n    marginRight: 20\n  }\n})\n\nexport { layout, buttons }   </code></pre>\n      </div>\n<p>In this example, every style that assists in layout will be contained within the <code class="language-text">const layout</code> and styles for buttons will be contained to <code class="language-text">const buttons</code>. Repeat as necessary.</p>',frontmatter:{title:"Weekend Build: Water Tracker",date:"November 23, 2019",category:"Development"}}},pathContext:{slug:"/writing/weekend-build-water-tracker/",previous:{fields:{slug:"/writing/bookmarks-7/"},frontmatter:{title:"BKMKS7 Nov 17 2019",category:"Resources"}},next:{fields:{slug:"/writing/bookmarks-8/"},frontmatter:{title:"BKMKS8 Nov 24 2019",category:"Resources"}}}}}});
//# sourceMappingURL=path---writing-weekend-build-water-tracker-85ca2594fa3a21f5434f.js.map