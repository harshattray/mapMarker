/**
 * @Author: harsha
 * @Date:   2019-04-24T23:54:01+05:30
 * @Last modified by:   harsha
 * @Last modified time: 2019-04-24T23:59:20+05:30
 */

import React from "react";
import { cleanup, render } from "react-testing-library";

import { RenderInputFields } from "./renderInputFieldComponent";

describe("Component => RenderInputFields", () => {
  afterEach(cleanup);
  it("should match snapshot", () => {
    const props = {
      input: { name: "MOCK_NAME" },
      label: "MOCK_LABEL",
      type: "text",
      meta: {
        touched: true,
        error: false,
        warning: false
      }
    };

    const { container } = render(<RenderInputFields {...props} />);

    expect(container.firstChild).toMatchSnapshot();
  });
});
