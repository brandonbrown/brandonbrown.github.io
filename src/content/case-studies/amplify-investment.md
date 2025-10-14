---
name: 'Amplify Organizational Investment Through Design Systems'
date: 2025-10-03
description: 'How data-driven architecture decisions can help a design system evolve.'
tags: ['Case Study', 'Design Systems', 'Workflows', 'Integrations', 'Data-Driven']
image: '../../../public/static/1200x630.png'
link: 'https://example.com'
---
**Role:** Technical Lead, DesignOps / Design Systems  
**Focus:** Strategic integration, ROI optimization, third-party tool alignment  

## Context And Need
The team behind version 1 of the design system decided to ship MVP
data visualization components to test demand, then invest more based on usage. There were also concerns on adopting a library as the core of the system: Would it restrict the capabilities to meet our business requirements such as accessibility? Will we be able to style it how we want, when we want?

While I understand these questions, what came to light later was the lack of technical leadership on the team at the time to not only substantially answer these questions but to also balance a team dynamic which was previously overpowered by design oriented voices with an authoritative and trusted engineering perspective.

Due to the lack of features and capabilities of the home-grown components, they wound up with low adoption numbers and were causing a but of a reputation hit to the design system as a whole. 

To solve their own needs, the teams at the organization leaned into an already licensed library in Highcharts. As the technical lead wanting to make as many data-informed decisions as possible, my challenge to our design system team was pretty straight-forward: If our teams are using this for every data visualization need now, why aren't we?

## My Role
As Technical Lead on the DesignOps team, I took ownership of solving what had become a strategic and political problem and working with a Senior Developer to explore the technical aspects of the proposals. The previous team had made technical decisions based primarily on design preferences, but I had the authority and responsibility to evaluate them from an engineering and business perspective.

My role was to follow the data and challenge the existing approach with questions and provide the technical leadership voice that had been missing from these decisions. Rather than continue investing in components that weren't meeting team needs, I needed to architect a solution that leveraged the organization's existing Highcharts investment.

This meant navigating both technical integration challenges and internal team resistance to changing course on previous decisions. I had to demonstrate that embracing third-party tools could strengthen rather than compromise our design system's integrity.

## Outcomes
1. 100% alignment of data visualization work with design system standards through Highcharts integration
2. Eliminated maintenance burden of under-featured MVP components while gaining full charting capabilities
3. Created reusable composition model that supported diverse use cases without custom development
4. Increased ROI on Highcharts licensing through design system theming and governance
5. Established testing and documentation framework for validating hypothesis of library, tool, and vendor solutions

## How The Outcomes Were Achieved
### 1. Multi-Tiered Integration Strategy
Rather than replace our existing work wholesale, I designed a layered approach that built on what we had while leveraging Highcharts' capabilities. This started with integrating our design tokens directly into a custom Highcharts theme, ensuring visual consistency without rebuilding our design language.

The key was treating Highcharts as part of our design system ecosystem, not a separate tool that teams would use independently. This approach had the extra impact of validating our growing position that our toolset needed to become more agnostic of platform and technology solutions, allowing it to be more flexible in integration while maintaining design system standards.

### 2. Component Migration and Composition Model

We converted our existing MVP data visualization components to use Highcharts under the hood while maintaining the same API that teams were familiar with. This meant teams could use our components next to their current full-functionality Highcharts without an awkward user experience occurring.

More importantly, I shifted our data visualization strategy from building one-off components to crafting them through a composition model. Instead of trying to anticipate every possible data visualization need and build a custom component for it, teams could now combine Highcharts features with our design system patterns to meet diverse use cases. Many of which would be considered one-off or "snowflakes" yet critical to the specific application's needs.

This composition approach solved the fundamental problem that had created our MVP trap in the first place - we were trying to build specific solutions when we should have been providing flexible building blocks. Teams could now access the full power of Highcharts
while staying within our design system's experience guidelines.

The migration also proved that third-party integration didn't mean abandoning our existing work. By keeping familiar APIs while upgrading the underlying implementation, we maintained team workflows while dramatically expanding capabilities.

### 3. Testing and Documentation
Working with a Senior Developer, we established a systematic approach for evaluating third-party integrations that could be applied to future tools and vendor solutions. This wasn't just about technical
compatibility but validating that integrations will maintain our design standards and business requirements while providing genuine value over building internally.

The framework included design token alignment testing, accessibility compliance validation, and documentation of integration pathways that other teams could follow. More importantly, it established criteria for when integration made more sense than internal development.

This became crucial for getting internal team buy-in. Instead of making ad-hoc decisions about tools, we now had a repeatable process that demonstrated due diligence and provided clear rationale for our recommendations.

The framework also included rollback strategies and migration paths, which gave stakeholders confidence that we weren't making irreversible decisions without proper evaluation. This systematic approach became the template for how we approached any "build vs. integrate" decision going forward.

### 4. Internal Team Politics Navigation
The biggest challenge wasn't technical - it was convincing internal voices that embracing third-party tools could strengthen our design system, not compromise it.

There was significant resistance to abandoning the MVP components that the team had previously built, especially from designers who had strong philosophical objections to depending on external libraries.

I focused on demonstrating improved outcomes rather than defending the approach philosophically. By showing that Highcharts integration maintained all our design standards while providing superior functionality, I shifted the conversation from "should we use third-party tools" to "how do we best meet our outcomes."

The key was acknowledging that the previous approach wasn't wrong given the context at the time, while making the case that new data required a new strategy. This allowed people to support the change without feeling like their previous work was being dismissed.

We also leveraged the systematic evaluation framework to show that this wasn't an emotional or impulsive decision, but a data-driven conclusion based on user needs and organizational realities.

## What I Learned


MVP isn't always the right strategy for design systems. The assumption that we should start small and iterate works well for products, but design systems compete with mature, feature-rich alternatives. When our basic components go head-to-head with tools like Highcharts and mature individual solutions already existing in a team or product, "starting simple" may actually hurt adoption and credibility.

Sometimes the best design system decision is admitting you shouldn't build something. The real question isn't "can we build this?" but "should we build this when better solutions already exist, and our consumers are already using them?" This reframed how I think about design system scope and resource allocation.

Integration is a design challenge, not just a technical one. Making Highcharts feel like part of our design system required the same thoughtful approach we'd use for any user experience problem. It was never about compromising our standards but offering the tools teams wanted and bridging the gap to meet our standards.

Data-driven decision making can be balanced with philosophical arguments. When I focused on user data and organizational realities rather than abstract principles about third-party dependencies, resistance dropped away. Numbers and user feedback are powerful, but be mindful to show you respect strong design philosophy and experience.

People supported the shift because I positioned it as an evolution based on new data, not a correction of previous mistakes. Honoring the people who did the past work while advocating for new approaches creates allies instead of defensive resistance. This also created a stronger partnership at the senior and lead levels of our team as it demonstrated we can have difficult yet respectful discussions about our body of work.

Frameworks scale influence beyond individual decisions. The evaluation process we built for Highcharts became our template for every "build vs. integrate" conversation afterward. Building repeatable decision-making systems multiplies your impact across the organization because it demonstrates trust that you've removed impulsiveness or preference from the equations to the best of your ability.