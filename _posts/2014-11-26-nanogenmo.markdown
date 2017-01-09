---
layout: post
title: "NaNo(De)GenMo"
date: 2014-11-27
tags:
- bots
- code
- writing
---
My NaNoGenMo project started out as an attempt at parodying bad literature, inspired in part by the [Bulwer-Lytton Fiction Contest](http://www.bulwer-lytton.com/). I planned to take extremely cliched sentences like "It was a dark and stormy night" and use Python string formatting to <!--break--> generate a sentence with the same structure but with all or most of the nouns, adjectives, verbs and so on replaced with random selections from a wordlist. 
Anything rich in description, comparisons and metaphors could easily be broken down into parts of speech, which could then be substituted in this manner. Despite my original intentions, good writing featured prominently.

Until today, my code consisted of
<br>
- a prompt allowing the user to choose a name and pronoun to use throughout the novel<br>
- a list of functions that return formatted strings, from which functions are randomly selected and strung together with varying amounts of trailing whitespace<br>
- "storytelling functions" which return strings not based on existing sentences, and are responsible for any mentions of the protagonist

The problem with this was it lacked structure and direction, and I was worried that I wouldn't be able to divide it into chapters. Chapters are by no means a prerequisite for NaNoGenMo, but there were a few reasons why I thought they were a good idea: firstly, nobody wants to read a 50000 word computer-generated novel from cover to cover and chapters make it easier to choose places to read from; and secondly, I was already trying to make something novel-like in scope and content, and chapters just made sense.

That's when I had an idea.

Ever since I got into bot-making I've been procrastinating about learning to write my own sentence-construction code, possibly because I don't really understand Markov chains. Rather than trying to understand someone else's algorithm and probably getting frustrated and wasting a lot of time, I decided to invent my own system from scratch without referring to anything. 

I made a list of sentences from a text file, and ran each sentence through a function that added every possible pair of adjacent words to a Python dictionary, where the key is a word and the value is a list of words that occurred immediately after that key in a sentence. A "pivot" word is randomly selected from a sentence and from that point on whatever remained of the sentence is replaced by a sequence of words chosen by their associations to each other in the dictionary. It worked much better than I'd hoped, but I don't have a clue what I'm doing.

In the process of writing the chaining algorithm, I started thinking: what would happen if I used my initial string-formatted text to generate chained sentences, then fed the chained sentences back into the chaining algorithm?

Wonderful degeneration is what happens.

As it stands today, my novel consists of three chapters: the first is pure string formatting, and about as coherent as bot text can get; the second reads like a remix of the first, the sentences no longer adhering to the original structures but still mostly grammatical; the final chapter is thoroughly disjointed but oddly poetic. You could keep on feeding the chaining algorithm back into itself forever, and the results would get weirder and weirder. 

I've already added code to allow the user to choose the length of the novel (the length of the chapters is calculated as a fraction), so why not also add code to allow choosing the number of chapters? It would require considerable refactoring, and it could get slow if someone decided to ask for 1000 chapters (since every chapter gets written to a separate file, then read in and concatenated) but it's too tempting to see what the sentences would look like after being fed through the chaining algorithm 1000 times.

Looks like I'm participating in National Novel Degeneration Month.
