/**
 * @Author: harsha
 * @Date:   2019-04-25T01:05:55+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-25T01:56:51+05:30
 */

import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MapComponent from "./MapComponent";
import { createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "../../reducers";

configure({ adapter: new Adapter() });

describe("MapComponent", () => {
  test("renders", () => {
    const wrapper = shallow(
      <Provider store={createStore(reducers, {})}>
        <MapComponent />
      </Provider>
    );
    expect(wrapper).toMatchSnapshot();
  });
});
