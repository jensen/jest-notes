# Unit & Integration Testing with Jest

_We've built a web application using React. Why do we test it?_

Testing gives us confidence in our code. This confidence allows us to continue to add features to our application without worrying if we have broken exisitng features. Testing can become very costly as our application grows.

## Test The Way The User Does

Every user that experiences our application is also testing it. They aren't testing our application intetionally, but at some point they may do something that causes the application to behave different from their expectation.

When building user interfaces, we should also test our own application in the way that we expect our users to. We should fill fields and click buttons, read text from the page and confirm that it matches our own expection. We have already been testing in this way. It feels natural.

A good Guiding Principle for UI testing can be found on the [@testing-library](https://testing-library.com/) site.

> _The more your tests resemble the way your software is used, the more confidence they can give you._

## Tools vs Testing

Today our goal is to write automated tests for our application. Before we start writing tests, we should identify the difference between learning how to test, and learning how to use the tools that allow you to write and run automated tests.

It may not seem like this is as important of a distinction as it is. Testing is the general approach to making sure that your code works the way that you expect it to. Tools are the libraries that help us write tests for our specific stack.

We are going to start by clarifying the important role testing plays and the challenges that it helps us overcome. We will then focus on the actual tools used for the particular tests we need to write today.

## Strategic Testing

We start with testing, because testing is more broadly scoped. Any improvement that we make in building our test strategy can be applied to future projects even if they use different technology stacks. We apply different combinations of our testing techniques to each project, and build up our strategy as we face new challenges.

### Building Your Strategy

We can use an approach that is shaped like a pyramid, a trophy or a teapot if it gives us confidence. An example of a loose strategy described by [Guillermo Rauch](https://twitter.com/rauchg/status/807626710350839808?s=20) is "Write tests. Not too many. Mostly integration.". If that gives him confidence in his code, then that we can consider that a good strategy. It is much more valuable to learn how to build a strategy for our project, than it is to apply Guillermo's strategy to every single project.

To review the four major categories of testing that we are working with are:

- Static Analysis (ESLint, TypeScript)
- __Unit Tests__
- __Integration Tests__
- End-to-End Tests

Our focus today is on the unit and integration tests. We can start to formulate a strategy by asking a few questions.

- What are the most important, mission critical parts of our application?
- What is the process we follow when we find a new bug with manual testing?
- What is the starting balance of our different categories of tests? 
- What is the time cost currrently for manual testing?

Things will change as the project evolves. It is possible that a new requirement comes in that requires an imbalance of one category of testing. That is ok as long as the tests also give us more confidence.

## Test Driven Development

There is a book by Kent Beck called "Test-Driven Development By Example", where the first words in the [preface](/docs/TDD.md) are "Clean code that works". These four words concisely describe the goals of test-driven development. If we share these goals as well, then it is possible we can achieve them by following the rules of TDD.

### The Rules of TDD

1) Only write code if a test fails.
2) Eliminate duplication.

This means that we have to write tests first. When a test fails, we can write code to make it pass. We should focus on writing the minimum code necessary. This can help us write better tests.

```javascript
it("should add two numbers", () => {
  expect(add(1, 1)).toBe(2);
}
```

Let's also look at the code needed to make this test pass.

```javascript
function add(a, b) {
  return 2;
}
```

Of course it doesn't make any sense to write this code, but it might make us think about other tests that we need to write to make sure the function works as expectd.

```javascript
it("should add two numbers", () => {
  expect(add(1, 1)).toBe(2);
  expect(add(2, 5)).toBe(7);
  expect(add(-1, -1)).toBe(-2);
  expect(add(-2, 5)).toBe(3);
})
```

Now we need to change our code because it no longer passes our test.

```javascript
function add(a, b) {
  return a + b;
}
```

No more code can be added, there is no duplication to eliminate so the next step is to write another test. This is called red/green/refactor. We write a test that fails (red output). We write some code to make it pass (green output). We refactor the code to eliminate duplication, ensuring our tests still pass.

### Red/Green/Refcator

It is a process we can follow. It seems like a loop, but the goal is to continue progress forward. We want our tests to continue to inform us early if parts of our application break. We want to use them to continue to imporve our code with confidence. Very rarely can you perform a successful refactor without some baseline tests to confirm the code still works. 

In Test-Driven Development By Example the analogy of a well with a bucket of water that must be cranked up is used to describe the benefits of writing tests as code is developed. With a small bucket of water it is easy to pull it up in one session. When the bucket gets larger, it is much easier to pull up if our crank has teeth. Those teeth prevent the bucket from dropping back down into the well when the crank is no longer being held.

It is the tests that perform the job of the crank teeth in our testing strategy.

### Apply TDD When Helpful

This is not encouragement to go all in on TDD. Instead applying it sparingly at first can be a good way to become familiar with it. From that point on it is simply another consideration when building a testing strategy.

## Regression Testing

We don't only write code when we are building software. One of our other responsibilies is to find and fix bugs. Whenever we add a new feature or fix a bug in an existing featuer we are making progress towards our goals.

The opposite of progress is _regress_.

An example of regression in software development happens when a developer adds a new feature to the application. A _new_ bug, one that the developer hasn't seen before is found. The developer fixes the bug and progresses forward.

If that same bug reappears at any point during the remainder of the products lifecycle, this is considered a regression. Regression tests are meant to alert us to a possible regression before we commit our code to the main branch of a repo.

Regression should be taken seriously, but we can only do a limited amount of manual regression testing. It is important to add automated tests to a project, without them it is very rare that real regression testing is being performed.

A relevant example can be found in a [blog post](https://googleprojectzero.blogspot.com/2020/07/how-to-unc0ver-0-day-in-4-hours-or-less.html) about Apple's iOS software.

> At 3 PM PDT on May 23, 2020, the unc0ver jailbreak was released for iOS 13.5 (the latest signed version at the time of release) using a zero-day vulnerability and heavy obfuscation. By 7 PM, I had identified the vulnerability and informed Apple. By 1 AM, I had sent Apple a POC and my analysis. This post takes you along that journey.

This is pretty exciting, the details in the article are quite detailed. The particular security vulnerabilities aren't very important here. The article ends with the suggestion that regression testing could have helped Apple avoid these vulnerabilities returning.

> The combination of the SockPuppet regression in iOS 12.4 and the LightSpeed regression in iOS 13 strongly suggests that Apple did not run effective regression tests on at least these old security bugs (and these were very public bugs that got a lot of attention). Running effective regression tests is a necessity for basic software testing, and a common starting point for exploitation.

So if we are having a problem trying to figure out what tests to write, then once we learn the tools we can start by writing tests to prove that bugs we find no longer exist.

## Layers of Libraries

We use [jest](https://jestjs.io/) as our test runner. It also provides matchers, mocking and coverage reports. The [@testing-library](https://testing-library.com/) suite of utilities helps us test DOM based interfaces. The combination of these two projects makes writing DOM based tests a lot quicker than they would be otherwise.

### Jest

The [jest](https://github.com/facebook/jest) test runner will find all of the tests in our project. For jest that means that it will include any files that have a certain path. We can signify that a file includes a test one of two ways.

1) Name the file relative to the file that it is testing, with a `.test` suffix. Something like `application.test.js` works.
2) Place the file in a directory named `__tests__` relative to the file being tested. If I have a `src/components/application.js` file then the `src/components/__tests__/application.js` will be run to test it.

We will use both of these and call our test `src/components/__tests__/application.test.js`.

Jest has a default dependency on a library called [jsdom](https://github.com/jsdom/jsdom). If we think about where the tests are running, it isn't the browser. We run these tests in `node`, `jsdom` provides a test environment that includes a DOM we can use to test.

In one of these files we can categorize a group of tests with a `describe` block. We can use either `test` or `it` to declare our test block.

```javascript
describe("group of tests", () => {
  it("should test something", () => {});
});
```

When we want to skip a test we can change the test block to `xit` or `test.skip`. 

### Built-in Matchers

Jest comes with a lot of built-in [matchers](https://jestjs.io/docs/en/expect). These can be [used](https://jestjs.io/docs/en/using-matchers) to assert that something is true on a value that is being tested.

```javascript
test("two plus two is four", () => {
  expect(2 + 2).toBe(4);
});
```

### @testing-library

The team behind @testing-library chooses which utilities can be include in their project based on the following guiding principles:

- If it relates to rendering components, it deals with DOM nodes rather than component instances, nor should it encourage dealing with component instances.
- It should be generally useful for testing the application components in the way the user would use it. We are making some trade-offs here because we're using a computer and often a simulated browser environment, but in general, utilities should encourage tests that use the components the way they're intended to be used.
- Utility implementations and APIs should be simple and flexible.

These are some of the utility libraries that we have been using.

- [jest-dom](https://github.com/testing-library/jest-dom) library is used to run our tests on the command line. 
- [dom-testing-library](https://github.com/testing-library/dom-testing-library) provides a basis for all of the view framework specific packages. The framework specific packages will re-export the methods provided by `dom-testing-library`.
- [react-testing-library](https://github.com/testing-library/react-testing-library) provides helpful functions to setup and run React specific tests.
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library) allows us to render our Hook in a test and test the output.
- [react-test-renderer](https://github.com/facebook/react/tree/master/packages/react-test-renderer) is a peer dependency of `react-hooks-testing-library` that allows it to simulate the rendering of a component.

There are also utilities that we have no use for, unless we are using specific frameworks.

- [vue-testing-library](https://github.com/testing-library/vue-testing-library) is a Vue specific layer built on top of `dom-testing-libary`. We do not use this, it is simply an example of the layers.
- [angular-testing-library](https://github.com/testing-library/angular-testing-library) is the Angular version, same as above.

### Custom Matchers

We extend `jest-dom` in our `src/setupTests.js` file so that we can use custom matchers that are generally only useful when testing DOM based applications. Some examples include `expect(element).toBeDisabled()`, `expect(element).toBeInTheDocument()` and `expect(element).toHaveValue`. All of them can be found in the library [README.md](https://github.com/testing-library/jest-dom/blob/master/README.md).

### DOM Queries

The `dom-testing-library` provides a number of useful functions to find the `element`. We need to search the DOM in a way similar to how we use jQuery selectors. Since we are testing our software in a way that resembles how our software is used, then we need to limit how we can find elements. We call the methods that allow us to find the elements "[queries](https://testing-library.com/docs/dom-testing-library/api-queries)".

When selecting elements with the `dom-testing-library` we can do it one of eight ways. If I have an element like a button `<button>Submit</button>`, then I could use `ByText("Submit")` to select it. The user sees "Submit" so its a good way to select the element in a way that resembles our own users interactions.

- `ByLabelText`
- `ByPlaceholderText`
- `ByText`
- `ByAltText`
- `ByTitle`
- `ByDisplayValue`
- `ByRole`
- `ByTestId`

These [guidelines](https://testing-library.com/docs/guide-which-query) can help us choose the most relevant query. It is best to try and use a query that is closer to the top of the list. They are the ones that allow us to follow our guiding principle the closest.

A query isn't useful to us until we join it with a variant. This sounds complicated, but it is more about how we find it than what we are finding. There are six options here, broken up into three groups.

- `getBy` & `getAllBy`
- `queryBy` & `queryAllBy`
- `findBy` & `findAllBy`

We can combine a variant prefix with a query and instruct the tests specifically what to do when it can't find an element. Something like `getByLabelText`, or `findAllByText`.

> There is a pretty major difference between `getBy` and `findBy`. Using `getBy` will throw an error when it cannot find an element, if we use `queryBy` we will have the value `null` returned when an element can't be found.

For the most part we can use `getBy`.

The `dom-testing-library` also includes utilities for [firing events](https://testing-library.com/docs/dom-testing-library/api-events) and dealing with [async](https://testing-library.com/docs/dom-testing-library/api-async) tests.

In a test if we wanted to click the "Submit" button, then we would write `fireEvent.click(getByText("Submit"))` 

### Tools Change

The `@testing-library` is growing in popularity and is maturing as an excelllent option for UI testing. The documentation will be updated for the latest version. We are still using an older version of the testing library and need to recongize that some of the functions we learn to use today are [deprectated](https://en.wikipedia.org/wiki/Deprecation) while alternatives are provided in current releases.

## Mocking

With jest we can use mock functions a few different ways. There are more, but this is a good list to start with.

1) As spies that can tell us information about how many times the function has been called, and with what arguments.
2) As mock return values that allow us to control the values returned from functions that our code depends on.
3) As fully mocked modules that have multiple mocked implemetnations.

The first way shows that we can determine if a mock has been called using a matcher.

```javascript
test("mock is not called", () => {
  const mock = jest.fn();
  expect(mock).toHaveBeenCalledTimes(0);
});
```

The second way allows us to provide fake implementations of functions that our code depends on. This is called [mock return values](https://jestjs.io/docs/en/mock-functions#mock-return-values) and can be used to make our tests easier to write. Think about how you would test a function that depends on `getRandomNumber()`, when we are testing it might be necessary to mock the `getRandomNumber()` function so that we have predictable results. We can even mock a function [implementation](https://jestjs.io/docs/en/mock-functions#mock-implementations) to replace the implementation for our testing purposes.

The third way is more complicated, but it allows us to return different values from a few different functions in a [module](https://jestjs.io/docs/en/mock-functions#mocking-modules) for the purpose of testing. For this it is better to think about a real world example.

> When we make an HTTP request to the `scheduler-api`, we expect back a certain result. We also have to have the server running to get that result. A mock will allow us to override the value that our `axios` promise resolves to. It also means we don't need to be running the server, since `axios` is prevented from actually making the request.

During the activities today, it will be necessary to mock the `axios` module resolved values for functions.

### Timer Mocks

One category of mocks provided by Jest are the [timer mocks](https://jestjs.io/docs/en/timer-mocks). The `jest.useFakeTimers()`, `jest.runAllTimers()` and `jest.advanceTimersByTime(1000)` functions are all examples of timer mocks. In our example today we will use these mocks to control the timers in our application.

## Coverage

Coverage reporting is a contentious topic. Code coverage percentage alone confirm that we have confidence. If code coverage becomes the primary metric for which we base success in testing, then we might make decisisons that increase our code coverage but not our test quality.

We can run the tools built into jest that provide coverage reporting with `npm test -- --coverage --watchAll=false`. The artifacts created during the process serve as an excellent tool to guide testing. It is still up to us to decide what quality tests we should write for the code that is not covered yet.

## Async Tests

Some of our tests are asynchronous, which means that we don't know how long they will take to execute. Jest doesn't know either so we have two different ways to inform jest that we are performing an async test.

1) Use the `done` callback that is passed into a test block, like `it("should call done when the test is complete", (done) => ...)`. This is called the "callback" approach.
2) Return a promise from our test. We can either do this explicitly with `return createsPromise()` or implicitly by using the `async` keyword.

### Async/Await

This brings up a feature of JavaScript that we may have heard about, but may not have used much until now. The Async/Await syntax is intentionally avoided early to emphasis learning promises. We will use the `async/await` syntax for our tests to gain familiarity. It is import to note a few things about this syntax.

1) It looks easier, because it looks synchronous.
2) It still uses Promises under the surface, so we still need to understand them.
3) There is no `Promise.all` equivalent for `async/await`.

When we write our async test, we know what we are waiting for. In this case we want the loading operation to complete before the test is done.

```javascript
it("should render without crashing", async () => {
  const { getByText } = render(<Application />);

  await waitForElementToBeRemoved(() => getByText("Loading"));
});
```

There are other `wait*` functions provided by the `dom-testing-library`. These return promises and can be used with our queries. It is important to note that we don't pass the actual element. Instead we pass a function that returns the element we are waiting on.

#### Caution

> The waitForElement function is being deprecated. Breaking Changes were introduced in [7.0.0](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0). The project uses `react-testing-library` verson `8.0.7` which depends on version `5.5.4` of `dom-testing-library`. This means that some of the functions in the current documentation are not available in our version of `react-testing-library`. In this case we use `waitForElement` instead of `waitFor` until the package is upgraded.

## Live Example

The live example today is inspired by games like [Paperclip Factory](https://www.decisionproblem.com/paperclips/index2.html) and [Cookie Clicker](https://orteil.dashnet.org/cookieclicker/).

When a user clicks the "Bug" button, they will increase their bug fix count by 1. The bug count is also currency that can be used to buy upgrades that automatically fix bugs every second. When the application first loads, it needs to receive the list of upgrades asynchronously.

## More Guidance

### Debugging Tests

While we are running tests, it is hard to imagine what the DOM looks like. The `@testing-library` provides a few options for debugging. Use a combination of [prettyDOM](https://testing-library.com/docs/dom-testing-library/api-helpers#prettydom) and `console.log` for specific elements. To output the entire component tree we can use the `debug` function returned by `render`.

```javascript
import { render } from "@testing-library/react";

it("should debug our component DOM tree", () => {
  const { debug } = render(<Application />);
  
  debug();
});
```

We also get output when our DOM assertions fail, but with the described tools we can gain control of when we create our debug output.

### Setup & Teardown

Any common actions that need to be done before or after a group of tests can make use of the setup or teardown functions. A good overview is found in the [official documentation](https://jestjs.io/docs/en/setup-teardown).

### Applications Will Break Today

It is very possible that as tests are added to the project fragile code will be surfaced. Depending on when the tests were last run, it is possible that some of those tests don't pass currently. This a very important process to gain experience in. At first it will be frustrating, but the ultimate outcome is more confidence.

Some of the things that could possible cause your application to break when testing are:

- Code becomes asynchronous but the tests don't indicate that.
- Code that mutates underlying state will change the initial test values, so they are no longer predictable for the following test.
- Code relies on a another API call that hasn't been mocked with the expected values.

If tests don't pass, it isn't a bad thing. We want to find bugs before our users do.

## Bonus

Today we discussed a lot about testing and didn't focus much on the architecture of the application. An interesting pattern can be found in the `src/components/upgrades.js` file. We use child composition to reduce the number of props that need to be passed to the `Upgrade` components.

The parent `Upgrades` component has the ability to inject props into the child `Upgrade` components.