---
title: "Weekend Build: Water Tracker"
path: weekend-build-water-tracker
date: "2019-11-23T17:15:00"
category: Development
---

#Stay Hydrated, Friends

Let's build a water tracking app. The focus is going to start with the front-end, user-oriented needs. So, what am I building:

> When I drink water, I want to track the amount to make sure I'm drinking a healthy amount throughout the day

To accomplish this, the application will require features such as:

1. Set a water intake goal
1. Create new drink
1. Enter new drink amount
1. Enter previous drink amount
1. Store a list of favorite beverage types and their water amount
1. Enable Quick-Add of favorite beverages for fast entry
1. Show a history of the water drank
1. History will clearly indicate when the daily goal was met
1. Allow the user to edit, delete, and create entries for past drinks
1. Congratulate the user on consistently hitting their goal

This sounds like a strong set-up for this app. This first version will be very minimal, allowing me to "grease the groove" with React Native, React, and maybe Redux. Okay, let's talk overall architecture and structure.

##The Plan

I want this to be as close to a single-point interaction as possible. The user should open the app, hit "Track Drink," and close the app. Maybe a watch integration for these ultra-fast micro entries, but that's what I'll call scope creep &mdash; for now.

This single point interaction focus should help me to keep page count low. Our main screen should include all options required to quickly enter a new drink:

1. Auto-set to previous drink
1. Quick-select frequent drink type
1. Adjust amount drank
1. Change unit type
1. Save entry as new favorite drink with label
1. Select a favorite
1. Submit drink

A navigation should be present to expand the value of the application:

1. Main: Drink tracking screen
1. History: See how well you're tracking
1. Favorites: Create and Edit favorite drink types
1. Settings: Not required in this first version but may become a necessity in future if the development of this application is continued

Okay, let's go make the interface.

*Update*

Weekend builds, but with a family and newborn responsibilities, are not weekend builds! I'm going to build this in a ship-as-fast-as-possible, but let's drop the weekend need.

Okay, back to the app.

I decided to give Figma a try for the prototype- and this is incredible. I'm still getting oriented to their interface, but this is quite possibly the perfect tool for fast prototyping. I've already become a big fan. They even offer embed code... let's see what this is:

<iframe style="border: none;" width="800" height="450" src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2Fb4mhtPcDaQ5F07AOohVK8O%2FMinMaxHydrate%3Fnode-id%3D6%253A6%26scaling%3Dscale-down" allowfullscreen></iframe>

*note: If you want to share your prototype, go to the prototype screen and share from there! You also get live updates. So if you want to lock in at a specific version, you may need to make a new document. The prototype shared here is updating as I create the interface.*

I am very impressed with Figma! The only thing I'm struggling with is the animations of the prototype. Some of these connections do not make sense, however it may be my bias towards other systems I'm already familiar with.

Screens prototyped so far by Sunday night:

1. Main entry screen/card
1. Entry history timeline
1. History stats

I hope I can finish the interface tomorrow. It is a busy day, but I can tell how positive this practice of *greasing the groove* is for me right now so I'll make sure to find time.

One small thing I wish Figma had: Export Frames as images.

*11/30: Anyone with kids who can still pull off a weekend project.. kudos. Massive kudos. 🙌*

Okay, the interface is at a point where I'm happy to start building. You should be able to see the interface in its most recent state above.

Okay, let's go:

First, let's make sure Expo is up to date. Also handy if you haven't installed Expo for react native yet:

    $ npm install -g expo-cli

For more info, visit the official [React Native docs](https://facebook.github.io/react-native/docs/getting-started)

Now, let's start the project:

    $ expo init MinMaxHydrate

I decided on the blank workflow with Yarn as my dependency tool.

    $ cd MinMaxHydrate && yarn start

> Late addition to scope (our favorite!) of having teams in the mix. It's a bold plan, let's see if it plays out.
