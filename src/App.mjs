// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.mjs";
import * as React from "react";
import * as ReactDOMRe from "reason-react/src/legacy/ReactDOMRe.bs.js";

function reducer(state, action) {
  if (action) {
    return {
            count: state.count - 1 | 0
          };
  } else {
    return {
            count: state.count + 1 | 0
          };
  }
}

function App$App(Props) {
  var match = React.useReducer(reducer, {
        count: 0
      });
  var dispatch = match[1];
  return React.createElement("main", undefined, "Simple counter with reducer", React.createElement("div", undefined, React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Decrement */1);
                        })
                    }, "Decrement"), React.createElement("span", {
                      className: "counter"
                    }, String(match[0].count)), React.createElement("button", {
                      onClick: (function (param) {
                          return Curry._1(dispatch, /* Increment */0);
                        })
                    }, "Increment")));
}

ReactDOMRe.renderToElementWithId(React.createElement(App$App, {}), "root");

export {
  
}
/*  Not a pure module */
