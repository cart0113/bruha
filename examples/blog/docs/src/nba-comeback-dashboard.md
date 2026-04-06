<!-- published: March 28, 2026 -->

# NBA Comeback Dashboard

The [NBA Comeback Dashboard](https://nba-comeback-dashboard.github.io/) is a
plotting tool that lets you analyze and compare NBA comeback probability data
taken from the NBA play-by-play database from the 1996-1997 season to now.

> [!tip] You can explore the analysis articles and methodology at
> [nba-comeback-dashboard.github.io/analysis](https://nba-comeback-dashboard.github.io/analysis/about.html).
> The source code is on
> [GitHub](https://github.com/nba-comeback-dashboard/nba-comeback-dashboard).

## How It Started

This project started when I was trying to examine a rule of thumb about how safe
leads are while watching NBA games. You know the feeling — your team is up by 15
in the third quarter and you are wondering whether it is safe to relax. I wanted
to create a chart I could reference during games to answer that question with
data.

The play-by-play database goes back to the 1996-1997 season, which gave me
nearly thirty years of game data to work with. I built trend lines that show,
for any score differential at any point in the game, the historical probability
that the leading team wins.

## Building the Frontend with AI

While showing a friend some of the data, he suggested that I should try using AI
to code the front end. In my day job writing scientific computing software, we
are not allowed to use AI on our main codebase, so this was a perfect
opportunity to experiment.

I settled on using [Claude Code](https://claude.ai/code) and had it build the
majority of the JavaScript frontend. The dashboard uses Chart.js for
visualization with custom plugins for interactive plotting and state management.
The experience taught me a lot about how to work effectively with AI coding
assistants, which directly led to building the agentic coding tools I wrote
about in my [other post](tools-for-agentic-coding.md).

## The Analysis Site

The analysis section of the project is built with Sphinx using the PyData theme.
It contains detailed articles covering:

- The methodology behind forming the plot trend lines
- Whether common rules of thumb about lead safety actually hold up
- Playoff series analysis and historical patterns
- A go-to reference chart for watching games

The analysis writing process was one of the most enjoyable parts of the project.
Taking raw statistical patterns and turning them into readable narratives forced
me to really understand the data.
