# Preface

_Clean code that works_, in Ron Jeffries' pithy phrase, is the goal of Test-Driven Development
(TDD). Clean code that works is a worthwhile goal for a whole bunch of reasons.
It is a predictable way to develop. You know when you are finished, without having to worry
about a long bug trail.

- It gives you a chance to learn all of the lessons that the code has to teach you. If you only
slap together the first thing you think of, then you never have time to think of a second,
better thing.
- It improves the lives of the users of your software.
- It lets your teammates count on you, and you on them.
- It feels good to write it.

But how do we get to clean code that works? Many forces drive us away from clean code, and
even from code that works. Without taking too much counsel of our fears, here's what we do:
we drive development with automated tests, a style of development called Test-Driven
Development (TDD). In Test-Driven Development, we

- Write new code only if an automated test has failed
- Eliminate duplication

These are two simple rules, but they generate complex individual and group behavior with
technical implications such as the following.

- We must design organically, with running code providing feedback between decisions.
- We must write our own tests, because we can't wait 20 times per day for someone else to
write a test.
- Our development environment must provide rapid response to small changes.
- Our designs must consist of many highly cohesive, loosely coupled components, just to make
testing easy.

The two rules imply an order to the tasks of programming.

1. Red - Write a little test that doesn't work, and perhaps doesn't even compile at first.
2. Green - Make the test work quickly, committing whatever sins necessary in the process.
3. Refactor - Eliminate all of the duplication created in merely getting the test to work.

Red/green/refactor - the TDD mantra.

Assuming for the moment that such a programming style is possible, it further might be
possible to dramatically reduce the defect density of code and make the subject of work crystal clear to all involved. If so, then writing only that code which is demanded by failing
tests also has social implications.

- If the defect density can be reduced enough, then quality assurance (QA) can shift from
reactive work to proactive work.
- If the number of nasty surprises can be reduced enough, then project managers can estimate
accurately enough to involve real customers in daily development.
- If the topics of technical conversations can be made clear enough, then software engineers
can work in minute-by-minute collaboration instead of daily or weekly collaboration.
- Again, if the defect density can be reduced enough, then we can have shippable software with
new functionality every day, leading to new business relationships with customers.

So the concept is simple, but what's my motivation? Why would a software engineer take on
the additional work of writing automated tests? Why would a software engineer work in tiny
little steps when his or her mind is capable of great soaring swoops of design? Courage.

## Courage

Test-driven development is a way of managing fear during programming. I don't mean fear in a bad way - _pow widdle prwogwammew needs a pacifiew_ - but fear in the legitimate, this-is-a-
hard-problem-and-I-can't-see-the-end-from-the-beginning sense. If pain is nature's way of saying "Stop!" then fear is nature's way of saying "Be careful." Being careful is good, but fear
has a host of other effects.

- Fear makes you tentative.
- Fear makes you want to communicate less.
- Fear makes you shy away from feedback.
- Fear makes you grumpy.

None of these effects are helpful when programming, especially when programming something
hard. So the question becomes how we face a difficult situation and,

- Instead of being tentative, begin learning concretely as quickly as possible.
- Instead of clamming up, communicate more clearly.
- Instead of avoiding feedback, search out helpful, concrete feedback.
(You'll have to work on grumpiness on your own.)

Imagine programming as turning a crank to pull a bucket of water from a well. When the
bucket is small, a free-spinning crank is fine. When the bucket is big and full of water, you're
going to get tired before the bucket is all the way up. You need a ratchet mechanism to enable
you to rest between bouts of cranking. The heavier the bucket, the closer the teeth need to be on the ratchet.

The tests in test-driven development are the teeth of the ratchet. Once we get one test
working, we know it is working, now and forever. We are one step closer to having everything
working than we were when the test was broken. Now we get the next one working, and the
next, and the next. By analogy, the tougher the programming problem, the less ground that
each test should cover.