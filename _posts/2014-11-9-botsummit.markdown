---
layout: post
title: "Bots as a creative outlet"
date: 2014-11-9
tags:
- bots
- creativity
---
I spent 4 hours today hanging around on IRC and watching a livestream of nerds discussing twitter bots. It was fabulous.

[Bot Summit 2014](http://www.youtube.com/watch?v=3FdqRII2occ) has reminded me to write down some of my own thoughts on bots. If it had occurred to me at the time (and I hadn't lost my voice), I might have given a talk, but oh well...maybe next year.

I made my first bot in June this year, around the time when [@everyword](https://twitter.com/everyword) ended, but the @everyword tribute-making party that ensued was only indirectly responsible. It's mostly [@inky](https://twitter.com/inky)'s fault I'm even making bots at all.

My first bot was not an everyword clone. Around the time of @everyword's demise, [@butt_things](https://twitter.com/butt_things) had just come to my attention, and it seemed blindingly obvious that there should also be a @bot_things. Thankfully, no-one else had thought of this yet. It was simple to implement, and the only new thing I had to learn was how to interact with the Twitter API, something which up until that point had been such a mystery to me that I wouldn't have even known to call it "interaction with the Twitter API". 

The day I deployed my first bot, I was due to perform in a piano concert at midday, then immediately afterwards leave on a road trip for a short holiday. In what little time I had to spare between packing, practising, and trying to eat lunch, I somehow managed to write some Python code and install a cron job on my iMac to run [@bot_things](https://twitter.com/bot_things).

A few hours later I was in a hotel room with no way to control the bot at all, and I just had to hope for the best. It felt wonderfully dangerous.

Over the course of the next few days, I would frantically check my phone every half hour (the interval at which my bot was scheduled to tweet) and every time it was like witnessing a small miracle, as "bot <x\>" appeared in my timeline. Then, on the day I was due to return home, something new happened.

buttbot started replying to botbot with _[corrections](https://twitter.com/bot_things/status/512418274470932481)_.*
I had made a small dent in the twitter bot universe.

-----------------------------------------------------------------

One of the things I struggle with the most when trying to create stuff is that I can't create anything worthwhile if I'm not sufficiently inspired/motivated, and so my creative output has always been slow and fraught with periods of unproductivity. But - as evidenced by the [number I've managed to make so far](http://memoriata.com/bots.html) - I don't seem to have this problem with bots. It's got me thinking about what, exactly, is so appealing about botmaking as a creative outlet.

Firstly, bots are a very easy way to be prolific creatively. There are endless things that can be automated in a way suitable for distribution on twitter, and it doesn't matter if the concept is extremely simple - in fact, some of the simplest concepts have become the most popular bots. Consider @everyword.
So coming up with the idea for a bot may well be the easiest part.

Secondly, once you have the concept, your work as an artist is done; now you step into the role of programmer, technician, craftsperson, whatever you want to call it. You are no longer drawing on your finite resources of inspiration to come up with ideas: now you're just building a machine. That has challenges of its own, of course, but they aren't the challenges of searching for inspiration.

And finally, once your machine is built and deployed, it becomes a living artwork of sorts, possibly extending outside of itself, conversing with humans and other bots, creating new things through interaction with its environment.

It boils down to this:
	You have an idea for a bot (fun, creative part of the process)
	You make a machine that executes the idea (possibly fun, possibly boring, possibly frustrating, but keeps you occupied until you have another idea)
	You deploy the machine and it continues to make art based on your idea, on a regular basis, for as long as you want it to, without the need for human intervention (mostly).

So you have an easy inception, a challenging but fun implementation, and ongoing rewards. Sounds like the ideal art form to me.

*botbot now corrects the corrections.
