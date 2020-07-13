# Unit & Integration Testing with Jest

_We've built a web application using React. Why do we test it?_

Testing gives us confidence in our code. This confidence allows us to continue to add features to our application without worrying if we have broken exisitng features. Testing can become very costly as our application grows.

## Test The Way The User Does

Every user that experiences our application is also testing it. They aren't testing our application intetionally, but at some point they may do something that causes the application to behave different from their expectation.

When building user interfaces, we should also test our own application in the way that we expect our users to. We should fill fields and click buttons, read text from the page and confirm that it matches our own expection. We have already been testing in this way. It feels natural.

## Tools vs Testing

Today our goal is to write automated tests for our application. Before we start writing tests, we should identify the difference between learning how to test, and learning how to use the tools that allow you to write and run automated tests.

It may not seem like this is as important of a distinction as it is. Testing is the general approach to making sure that your code works the way that you expect it to. Tools are the libraries that help us write tests for our specific stack.

We are going to start by clarifying the important role testing plays and the challenges that it helps us overcome. We will then focus on the actual tools used for the particular tests we need to write today.

## Strategic Testing

### Building Your Strategy

### Regression

https://googleprojectzero.blogspot.com/2020/07/how-to-unc0ver-0-day-in-4-hours-or-less.html

## Layers of Libraries

We use [jest](https://jestjs.io/) as our test runner. It also provides matchers, mocking and coverage reports. The [@testing-library](https://testing-library.com/) suite of utilities helps us test DOM based interfaces.

### Jest

- [jest](https://github.com/facebook/jest)
- [js-dom](https://github.com/jsdom/jsdom)

### @testing-library

- [jest-dom](https://github.com/testing-library/jest-dom)
- [dom-testing-library-](https://github.com/testing-library/dom-testing-library)
- [react-testing-library](https://github.com/testing-library/react-testing-library)
- [react-hooks-testing-library](https://github.com/testing-library/react-hooks-testing-library)
- [vue-testing-library](https://github.com/testing-library/vue-testing-library)
- [angular-testing-library](https://github.com/testing-library/angular-testing-library)

```
getBy
getAllBy
queryBy
queryAllBy
findBy
findAllBy

ByLabelText
ByPlaceholderText
ByText
ByAltText
ByTitle
ByDisplayValue
ByRole
ByTestId
```

## Async

The waitForElement function is being deprecated. Check version of dom-testing-library.

Breaking Changes in [7.0.0](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0)

## Live Example

https://www.decisionproblem.com/paperclips/index2.html
https://orteil.dashnet.org/cookieclicker/

## Debugging Tests

## Applications Will Break Today
