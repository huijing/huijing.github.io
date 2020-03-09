---
layout: post
title: "Basics of State and Props in React (2020 edition)"
date: Jan 21, 2020
tags: [javascript, frameworks, react]
---
So I've finally decided to sit my butt down and learn React properly. I'll talk a little bit about my opinion on React and why it took me so long to actually do this [at the end](#optional-story-time-feel-free-to-disagree-with-my-opinion), feel free to ignore it if you have better things to do with your life.

I recall a chat I had with [Shawn Wang](https://twitter.com/swyx) on learning React and he mentioned how a few years ago, it was possible to read all the literature available and more or less figure out what was going on. But it's more tricky now because there's so much more information.

(Well, in theory, you can sort of still go back and read [the entire React blog](https://reactjs.org/blog/all.html) from 2013 to get a feel of how things changed over time. Also, Shawn is amazing, follow him on ALL the things)

React was (kind of?) official announced at [JSConfUS 2013](https://www.youtube.com/watch?v=GW0rj4sNH2w) so as of time of writing, that makes it over 6 years old. Ways of doing things have changed as new features have been released, and stuff got deprecated. Which brings us to 2020, when [**Hooks**](https://reactjs.org/docs/hooks-intro.html) are the new hotness.

## What are props?

Props are plain Javascript objects that contain information. They can be used to pass data between React components. 

## What is state?

State is also a plain Javascript object that contains information. It represents the dynamic parts of the React component, i.e. data that can change.

## Let's talk about components

One of the key features of React is it is a component-based architecture. It says so on their website. The point is, a complex user-interface can be built up by combining different smaller components. Data flows and is managed via state and props.

There are a couple of ways to define a React component. You can use a function like so:

```javascript
function Player(props) {
  return <p>{props.name} plays for the {props.team}</p>
}
```

Or you could use classes like so:

```javascript
class Player extends React.Component {
  render() {
    return <p>{this.props.name} plays for the {this.props.team}</p>
  }
}
```

But where did the props come from? You might ask.

As mentioned earlier, props are used to pass data between components. Things might look clearer if we examined the bigger application.

```javascript
function Player(props) {
  return <p>{props.name} plays for the {props.team}.</p>
}

function App() {
  return (
    <div>
      <Player name="Ashlyn Harris" team="Orlando Pride" />
      <Player name="Megan Rapinoe" team="Reign FC" />
      <Player name="Julie Ertz" team="Chicago Red Stars" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
```

Based on the above example, you can see that the props came from the JSX attributes on the `Player` component. This is what ends up getting rendered in the browser:

```html
<div id="root">
  <div>
    <p>Ashlyn Harris plays for the Orlando Pride.</p>
    <p>Megan Rapinoe plays for the Reign FC.</p>
    <p>Julie Ertz plays for the Chicago Red Stars.</p>
  </div>
</div>
```

## What is `this`?

Some of you may have noticed that the function component uses `props.name` while the class component uses `this.props.name` to access the required data. `this` is not a React thing, it is a Javascript thing. It is a Javascript thing that has spawned more blog posts that I can count.

Let me try to give you the short version. Everything in Javascript is an object. `this` refers to the object which is the current execution context of your bit of code.

Smarter people than me have explained this in depth so please feel free to read any or all of the following:

- [What is `this`? The Inner Workings of JavaScript Objects](https://medium.com/javascript-scene/what-is-this-the-inner-workings-of-javascript-objects-d397bfa0708a) by [Eric Elliot](https://twitter.com/_ericelliott)
- [Community answer to "How does the “this” keyword work?" on StackOverflow](https://stackoverflow.com/a/3127440/2873785)
- [The magic of the “this” keyword in JavaScript](https://www.freecodecamp.org/news/the-magic-of-the-this-keyword-in-javascript-ce3ce571013e/)

Personally, React made understanding `this` even more important because of how events are handled. Bear with me on this (Get it? this? Okay, I'm sorry, my humour is terrible)

## Event handling

React implements its own synthetic event handling, which their cross-browser wrapper around the browser's native event. It works great, that's not the problem. The issue is how Javascript handles functions in general.

In JSX, the event handler is passed as a function, i.e. `<button onClick={handleClick}>Click me</button>` instead of a string as is the case in HTML, i.e. `<button onclick="handleClick()">Click me</button>`. The thing is, class methods are not bound by default in Javascript.

When we pass the `handleClick` function to `onClick`, we are passing a reference to `handleClick`. The function is called by React's event handling system so the context of `this` gets lost. If you don't bind `this.handleClick` and pass it to `onClick`, `this` ends up being undefined when you call the function.

I highly suggest reading [Understanding this and .bind()](https://codeburst.io/understanding-that-and-bind-8778f779b149) for an in-depth explanation.

## Updating state with event handlers

A very common use-case for event handlers is to update the state of your React component. The suggested way of ensuring `this` works correctly in your class component is to bind it in the constructor.

```javascript
class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  }

  render() {
    return (
      <button onClick={this.handleClick} />
    );
  }
}

```

But apparently, using `bind()` is icky for many people. No matter, there are ways around that. So the next suggested way of ensuring `this` works as planned is via arrow functions.

```javascript
class Button extends React.Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState(state => ({
      clicked: !state.clicked
    }));
  };

  render() {
    return (
      <button onClick={this.handleClick} />
    );
  }
}
```

This is because arrow functions use the value of `this` in the scope it had been defined in. This is known as lexical scoping. The arrow function preserves its binding to `this` when it gets passed around.

Which brings us to the new hotness known as Hooks. According to the docs, Hooks let you use state and other React features without writing a class. 

The React team found that classes were a barrier to learning React, unintentionally encouraged patterns that were detrimental to their attempts at optimisation, and also made tooling tricky.

In short, Hooks allow us to access more nifty React features without having to write classes. Embrace functions, my friends. When you use Hooks, guess what? No need to think about `this`.

```javascript
function Button() {
  const [clicked, setClick] = useState(false);
  const handleClick = () => setClick(!clicked);

  return (
    <button onClick={handleClick} />
  );
}
```

## Demo

I built a demo of a generic social media app status component using the 3 different methods I went through above. The only interactive functionality is you can toggle the Like button, and input text in the text area up to 140 characters. ¯\\\_(ツ)_/¯

<iframe
  src="https://codesandbox.io/embed/react-status-widget-8hdit?fontsize=14&hidenavigation=1&theme=dark"
  style="width:100%; height:500px; border:0; border-radius: 4px; overflow:hidden;"
  title="react-status-widget"
  allow="geolocation; microphone; camera; midi; vr; accelerometer; gyroscope; payment; ambient-light-sensor; encrypted-media; usb"
  sandbox="allow-modals allow-forms allow-popups allow-scripts allow-same-origin"
></iframe>

Feel free to fork it and mess around with the code. And please do tell me if anything I mentioned doesn't make sense, is bad practice or just plain wrong. This was essentially a brain dump of what I've been learning about React lately, so I expect many errors.

If you spot something wrong and have a spare minute, I'd appreciate it if you let me know :)

## Useful further reading

- [Why Do We Write super(props)?](https://overreacted.io/why-do-we-write-super-props/)
- [How Are Function Components Different from Classes?](https://overreacted.io/how-are-function-components-different-from-classes/)
- [From the React docs: Components and Props](https://reactjs.org/docs/components-and-props.html)
- [From the React docs: State and Lifecycle](https://reactjs.org/docs/state-and-lifecycle.html)
- [From the React docs: Handling Events](https://reactjs.org/docs/handling-events.html)

## Optional story time… (feel free to disagree with my opinion)

I've been late to the React party partially because I hadn't worked on any projects that used it, and also, I found the React community relatively more dramatic than most.

As such, I hadn't bothered to try it out and understand it until fairly recently. I consider this similar to the sentiment many developers have toward CSS (similar, not the same, because you can't run away from CSS though you can still somewhat run away from React).

In retrospect, I have been unfair to React, the technology. My approach to learning React was to go straight to the documentation (which I think is great), and also read posts by folks actually working on React or are very close to the codebase.

Because I want to know the rationale behind their design decisions, and the reason why certain things are done in a certain way. I appreciate it when they are able to articulate and explain new features and more importantly, the motivation behind them.

A big plus for me are also explanations of the trade-offs made, which provides excellent context of why certain limitations and issues exist. In a way, it is both easier and harder to learn React these days.

Easier because there are way more resources now and it's easier to find one that clicks with your learning style. Harder because there are way more resources now, and you might end up confused with the different ways of doing things that have changed over the years.

That being said, it's been fairly interesting so far, so let's see where this goes. I might write more brain dumps moving forward as well. It depends. Life.