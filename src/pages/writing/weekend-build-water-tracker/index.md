---
title: Weekend Build: Water Tracker
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

*Update to come*
