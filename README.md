# Unit & Integration Testing with Jest

_We've built a web application using React. Why do we test it?_

Testing gives us confidence in our code.

## Layers of Libraries

We use [jest](https://jestjs.io/) as our test runner. It also provides matchers, mocking and coverage reports. The [@testing-library](https://testing-library.com/) suite of utilities helps us test DOM based interfaces.

- [js-dom](https://github.com/jsdom/jsdom)
- [jest](https://github.com/facebook/jest)
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

## Building Your Strategy

## Regression

https://googleprojectzero.blogspot.com/2020/07/how-to-unc0ver-0-day-in-4-hours-or-less.html

## Async

The waitForElement function is being deprecated. Check version of dom-testing-library.

Breaking Changes in [7.0.0](https://github.com/testing-library/dom-testing-library/releases/tag/v7.0.0)

## Live Example

https://www.decisionproblem.com/paperclips/index2.html
https://orteil.dashnet.org/cookieclicker/

## Debugging Tests

## Your Application Will Probably Break
