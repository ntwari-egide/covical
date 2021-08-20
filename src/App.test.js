/**
 * @description running testing and checking if header is found in app component and many other tests using jest enzyme
 */

import React from "react";
import { shallow, mount } from "enzyme";
import App from "./App";
import Navbar from "./components/Navbar"

it("renders without crashing", () => {
  shallow(<App />);
});

it("renders App component header", () => {
  const AppComponent = shallow(<App />);
  const header = <h1 className="updates-title text-center text-white font-bold">UPDATES</h1>
  expect(AppComponent.contains(header)).toEqual(true);
});

it("renders App Navbar header", () => {
  const AppComponent = shallow(<App />);
  const header = <Navbar />
  expect(AppComponent.contains(header)).toEqual(true);
});