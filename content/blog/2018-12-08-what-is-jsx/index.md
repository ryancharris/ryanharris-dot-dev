---
title: "What the heck is JSX?"
date: "2018-12-08"
heroCaption: "NESA by Makers"
heroLink: "https://unsplash.com/@nesabymakers"
attachments:
  - "./nesa-by-makers.jpg"
  - "./rawpixel.jpg"
  - "./kevin-ku.jpg"
  - "./barn-images.jpg"
---

As developers, we use a variety of tools and open source packages to make our jobs easier. Some of them are so widely used throughout the community that they seem native to JavaScript. Though they're not, they **can fundamentally change how you write code on a daily basis**.

One of these technologies that you're already using is JSX, **a XML like syntax extension for JavaScript**. Created by the wizards at Facebook, it is intended to simplify the developer experience. As the spec says, the rationale for creating JSX was:

> "…to define a concise and familiar syntax for defining tree structures with attributes." ~ [JSX Spec](https://facebook.github.io/jsx/)

Now, you're probably saying to yourself, "Hey, Ryan, this sounds great, but **get to the code already**", so here's our first example.

```javascript
const helloWorld = <h1>Hello, World!</h1>;
```

And that's it! The snippet above looks familiar, but have you ever stopped to think about its power? JSX makes it so we can **pass around tree structures composed of HTML or React elements as if they were standard JavaScript values**. Crazy!

While you don't have to use JSX when writing React ([or use React in order to try JSX](https://github.com/babel/babel/tree/master/packages/babel-plugin-syntax-jsx)), there's no denying it is an important part of the React ecosystem, so let's dive in and see what's going on under the hood!

---

### Getting started with JSX

The first thing to note when using JSX syntax is that **React must be in scope**. This is due to how it gets compiled. Take this component for example:

```javascript
function Hello() {
  return <h1>Hello, World!</h1>;
}
```

Behind the scenes, each element rendered by the `Hello` component is transpiled into to a React.createElement call. In this case:

```javascript
function Hello() {
  return React.createElement("h1", {}, "Hello, World!");
}
```

![Rawpixel](./rawpixel.jpg)

<span className="BlogPost__image-caption">Image source <a href="https://unsplash.com/@rawpixel">Rawpixel</a></span>

The same is true for nested elements. The two examples below would ultimately render the same markup.

```javascript
// Example 1: Using JSX syntax
function Nav() {
  return (
    <ul>
      <li>Home</li>
      <li>About</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  );
}
// Example 2: Not using JSX syntax
function Nav() {
  return React.createElement(
    "ul",
    {},
    React.createElement("li", null, "Home"),
    React.createElement("li", null, "About"),
    React.createElement("li", null, "Portfolio"),
    React.createElement("li", null, "Contact")
  );
}
```

### React.createElement

When React creates elements, it calls this method, which takes three arguments.

1. The element name
2. An object representing the element's props
3. An array of the element's children

One thing to note here is that React interprets lowercase elements as HTML and Pascal case (ex. `ThisIsPascalCase`) elements as custom components. Because of this, **the following examples would be interpreted differently**.

```javascript
// 1. HTML element
React.createElement("div", null, "Some content text here");

// 2. React element
React.createElement(Div, null, "Some content text here");
```

The first example would generate a `<div>` with the string `"Some content text here"` as its child. However, the second version would throw an error (unless, of course, a custom component `<Div />` was in scope) because `<Div />` is undefined.

### Props in JSX

When working in React, your components often render children and need to pass them data in order for the children to render properly. These are called props.

I like to think of React components as a group of friends. And what do friends do? They give each other props. Thankfully, JSX offers us a number of ways to do that.

```javascript
// 1. Props defaulted to true
<User loggedIn />

// 2. String literals
<User name="Jon Johnson" />

// 3. JavaScript expressions
<User balance={5 + 5 + 10} />

// 4. Spread attributes
<User preferences={...this.state} />
```

But beware! **You cannot pass if statements or for loops as props** because they are [statements, not expressions](https://dev.to/promhize/javascript-in-depth-all-you-need-to-know-about-expressions-statements-and-expression-statements-5k2).

![Kevin Ku](./kevin-ku.jpg)

<span className="BlogPost__image-caption">Image source <a href="https://unsplash.com/@ikukevk">Kevin Ku</a></span>

### Children in JSX

As you're building your app, you eventually start having components render children. And then those components sometimes have to render children. And so on and so forth.

Since **JSX is meant to make it easy for us to reason about tree-like structures of elements**, it makes all of this very easy. Basically, whatever elements a component returns become its children.

There are four ways to render child elements using JSX:

#### Strings

This is the simplest example of JSX children. In the case below, React creates a `<h1>` HTML element with one child. The child, however, is not another HTML element, just a simple string.

```javascript
function AlertBanner() {
  return <h1>Your bill is due in 2 days</h1>;
}
```

#### JSX Elements

This is probably the use case new React developers would be the most familiar with. In the component below, we're returning an HTML child (the `<header>`), which has two children of its own `<Nav />` and `<ProfilePic />` both of which are custom defined JSX elements.

```javascript
function Header(props) {
  return (
    <header>
      <Nav />
      <ProfilePic />
    </header>
  );
}
```

#### Expressions

Expressions allow us to easily render elements in our UI that are the result of a JavaScript computation. A simple example of this would be basic addition.

Say we have a component called `<BillFooter />` that renders information about a bill or receipt. Let's assume it takes one prop called `total` that represents the pre-tax cost and another prop `taxRate`, which represents the applicable tax rate.

Using expressions, we can easily render out some useful information for our users!

```javascript
function BillFooter(props) {
  return (
    <div>
      <h5>Tax: {props.total * props.taxRate}</h5>
      <h5>Total: {props.total + props.total * props.taxRate}</h5>
    </div>
  );
}
```

#### Functions

With functions, we can programmatically create elements and structures, which React will then render for us. This makes it easy to create multiple instances of a component or render repeated UI elements.

As an example, let's use JavaScript's `.map()`function to create a navigation bar.

```javascript
// Array of page information
const pages = [
  {
    id: 1,
    text: "Home",
    link: "/",
  },
  {
    id: 2,
    text: "Portfolio",
    link: "/portfolio",
  },
  {
    id: 3,
    text: "Contact",
    link: "/contact",
  },
];
// Renders a <ul> with programmatically created <li> children
function Nav() {
  return (
    <ul>
      {pages.map(page => {
        return (
          <li key={page.id}>
            <a href={page.link}>{page.text}</a>
          </li>
        );
      })}
    </ul>
  );
}
```

Now, if we want to add a new page to our site, all we need to do is add a new object to the `pages` array and React will take care of the rest!

**Take note of the `key` prop**. Our function returns an array of sibling elements, in this case `<li>`s, and React needs a way to keep track of which mounts, unmounts or updates. To do that, it relies on this unique identifier for each element.

---

### Use the tools!

![Barn Images](./barn-images.jpg)

<span className="BlogPost__image-caption">Image source <a href="https://unsplash.com/@barnimages">Barn Images</a></span>

Sure, you can write React applications without JSX, but I'm not really sure why you'd want to.

The ability JSX gives us to pass around elements in JavaScript like they were first-class citizen lends itself well to working with the rest of the React ecosystem. So well, in fact, you may have been writing it every day and not even known it.

Bottom line: just use JSX. You'll be happy you did 👍
