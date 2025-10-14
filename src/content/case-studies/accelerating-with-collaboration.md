---
name: 'Accelerating New Design System Components Through Collaboration'
date: 2025-10-01
description: 'This is an example project description! You should replace this with a description of your own project.'
tags: ['Case Study', 'Design Systems', 'Workflows']
image: '../../../public/static/1200x630.png'
link: 'https://example.com'
---
**Role:** Technical Lead, DesignOps / Design Systems  
**Focus:** Cross-functional workflow design, early developer integration, collaborative component development

## Context And Need
The technology side of our Design System team always struggled to be heard and seen outside of our day-to-day partners - there are still people at that org that struggled to understand why the Design System team even had engineers.

We were up against a lot - as most Design System teams are.

However, after working with our leadership and gaining the trust of our long-time UX & Tech partners, I was finally in a position to confidently influence our external working agreements and our internal team dynamics.

This aligned with a moment in time where there was a rising business requirement of the Design System team to deliver more, in less time, with increased visibility, and while maintaining previous commitments.

## My Role
I led the technical strategy for this workflow redesign alongside one senior engineer with authority over process decisions and cross-functional partnerships. We consulted with engineers from other technical teams throughout the initiative, but I owned the stakeholder relationships, timeline, and ultimate success of the new collaborative model and its alignment with technology and architecture standards of the organization.

## Outcomes
1. 40% to 60% reduction in time to production
2. 75% fewer post-release issues through early developer validation
3. 3x increase in component adoption across product teams due to increased collaboration and awareness
4. 4x more cross-functional contributions to the system due to increased touch-points and communication of early-releases

## How The Outcomes Were Achieved

### 1. No More Single Drivers
In previous workflows, we would task a single developer to engage with design once design began to approach "complete." This was a major slowdown in two specific areas:
1. Designers weren't aware of what development could bring to the table, so solutions worked on for sprints would be missing critical context
2. Our developers were fantastic - but we all had our strengths and additional responsibilities. A single developers's viewpoint and experience in these early stages was overtly impactful to the work that moved forward.

To solve these issues, I promoted and shifted our team to a new workflow where engineering was involved from day one with design to share viewpoints and capabilities of the platform. This experimentation would result in a checkpoint with both the design and engineering leads before moving forward. 

This early discovery with design and development resulted in a natural inclination of sharing work, gathering feedback, and providing updates before the official checkpoint.

Now we were moving forward in a collaborative, prototype-focused discovery that allowed design and development to align quickly and with less learnings stuck within a silo.

### 2. Planning To Share
One issue we ran into was depending on which developer picked up the project, we weren't always getting the most out of the codebase as we could for other teams to use. We may be up against timelines, people get distracted by meetings, your team get's reorged in the middle of an effort - this isn't me blaming or criticizing the engineers who did the work. 

Things happen.

Rather than leave the "did we get what we could out of this" discussion for later on in our code reviews, we utilized our learning in the prototype and discovery phases to understand what will be helpful to extend outside of our components and what should stay focused on our work. 

This means we would now be able to consistently discover items such as logic to export as hooks for other developers and plan shared styles and new tokens to expand our design system's foundations.

This also gave us a head start on code reviews. Code reviews now became more consistent as this approach shifted the discussion to "did we deliver what we meant to, in the way that we want to, and what did we learn by doing it this way." Also avoiding any re-engineering to squeeze more out of the code, allowing us to ship more consistently once we've hit the review process.

### 3. Structured and Clear Backlogs
With this new approach to planning, we were also able to better delegate the work to others. 

My charge to our engineers was that smaller the card, the better you can demonstrate you understand the work. Yes, this results in more cards that the dev or lead has to write, but I'd rather pay that up front in a near pre-mortem thought process rather than pay the price of missing pieces while work is in-flight.

This shift to planning, looking to extend where we can, and writing smaller tasks in a way that others can pick up came with many knock-on effects, too:
1. More visibility of our work for leaders, stakeholders, and consumers
2. Specialists can pick up the work they're great at
3. Education moments were easier to discover on real work
4. Less blocked work or stagnant devs with this kanban like backlog approach
5. A more true look into velocity and "points"
6. Easier discovery of conversations and past artifacts
7. Never having to answer "what are the design system devs even working on" ever again

### 4. Staged Releases and Early Community Feedback
The largest impact to our work in accelerating the delivery of components while maintaining quality and stability was our integration of pre-release workflows.

Before this work, we relied on internal testing and "screen-share" moments externally to get feedback on our work. We also had to support direct contributors aligned with our needs, such as an accessibility specialist, to run our systems on their own machine. Something they weren't trained for nor do I want them to have to worry about.

To solve the needs for earlier community engagement, gathering feedback and bug reports before release, and allowing our partners to focus on their skillset, I drove our team to enable a pre-release workflow.

Our environment at the time was limited so we had to roll some of this by hand, but planned to jump this into a GitHub Actions and Jenkins supported pipeline.

What we landed on was a set of releases that are relatively standard in our industry, but our team was lacking. Each of these was planned for specific testing and various levels of access:

#### 1. Feature
Our most unstable environment. Essentially a working release of our local work that allowed us to quickly share updates internally with designers and our accessibility specialists as things progressed in the browser environment. This meant no more awkward - and long - meetings based on screen sharing or fixing an environment issue. We replaced hour long meetings with a link and a reply. Meetings still occurred, but they were less frequent and better uses of time when they did.

#### 2. Beta
Our first step into the public. This was our first image that teams can pull into their applications and experiment with. This gave us debugging, feature requests, and documentation clarification before it was release for general access. This step was new to our team as typically we would internally work on each of these- and then find out later that we got something wrong or missed something important. Now our production releases were much more solid and bug reports deeper into edge cases.

#### 3. Release Candidate
This step was our signal to teams of what to expect soon. While team's could pull these images, this step mainly served a purpose for us to bring multiple Beta releases together and perform more stringent end-to-end testing along with integration and regression tests.

#### 4. Release
The one we all love. The supported production release. This now reached production in a much more stable state with stronger documentation, community awareness, and even a bit of fan-fare as people in the community helped and could say they did!

Not only did developers love this path we went down - so did our stakeholders. While we didn't meet resistance from many of our non-technical stakeholders, there was caution in their decisions due to a lack of understanding.

The pre-release platform gave us the opportunity to get the areas of the work they understood, a designed and developed user experience, in-front of them before engaging in our short and  over-stimulating planning meetings. This gave them a calmer time to understand our proposals, ask better questions, and gain the clarity they need to provide us the resources and people for the success of the work.

## What I Learned
The insight this work reinforced wasn't about workflow optimization - it was about understanding that stakeholders, developers, and designers all had different needs, constraints, and mental models. My job became designing solutions that worked for all of them using the tools, processes, and thought models as our designers use to build solutions for our customers.

Stakeholder confusion is usually a clarity and confidence problem, not a content problem. Those overstimulating meetings weren't failing because we lacked information but because we hadn't considered the experience from the stakeholder's perspective. When I redesigned how we presented work in timing, context, and visual demos- everything clicked.

I learned to treat organizational friction the same way I'd treat usability issues. Friction reveals the real problem. The places where our old process broke down such as waiting for handoffs, context switching, and unclear expectations were features telling us what needed to be redesigned. 

Speed comes from reducing cognitive load, not cutting steps. The biggest velocity gains came from making decisions easier and clearer for everyone involved. Smaller cards, better visibility, staged releases - all of these reduced the mental overhead of collaboration.

Trust can be built through consistency and transparency. Just like users need predictable interfaces, stakeholders need predictable processes. The staged release approach didn't just improve our workflow - it made our work visible and reliable in ways that built organizational confidence.

Systems thinking scales human intuition. The best processes feel natural and obvious once they're in place. That's not accident - it's careful consideration of how people actually work, think, and make decisions. For each design system team I work with now, I will always be thinking about the message the processes, workflows, and expectations are sending of the trust in the work of the team. 
