---
layout: post
title: "OO and the copula"
date: 2016-3-9
tags:
- language
- code
---
_Note: this post was written years ago but never published; I recently rediscovered it and decided it might be interesting to some nerds out there. I originally wrote it to help myself understand how the copula works in the Irish language. See [this](https://en.wikipedia.org/wiki/Copula_(linguistics)#Irish)_

In object-oriented programming we talk about "has-a" and "is-a" relationships. ("Object" is used here with the OO-programming meaning of the word, not the linguistic meaning). 

The relationship _a_ IS-A _b_ asserts that an object _a_ is a **member** of a class of objects _b_ (technically, _a_ is an **instance** of _b_ or an instance of a subclass of _b_). 
The key point here: An instance of a thing is always the same type, directly or through inheritance, as the thing itself.

The relationship _a_ HAS-A _b_ asserts that an object _a_ has an attribute of type _b_. In linguistics, one could consider an adjective to be an attribute of the thing it's describing. 
The key point here: An attribute of a thing is not necessarily the same type as the thing itself.

In the sentence "Today is Monday", we are really saying "Today IS-A Monday", i.e. "today" is a member of the class Monday. "Today" is therefore the same type of thing as "Monday".

In the sentence "Today is cold", we are really saying "Today HAS-A cold[ness]", i.e. "today" has the attribute "cold". "Today" is therefore not the same type of thing as "cold".

Switching to the linguistic meaning of "object":
The copula is only used when the subject and object of a sentence are _the same type of thing_, i.e. _subject_ IS-A _object_.
