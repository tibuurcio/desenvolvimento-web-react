import React, { PropTypes } from "react";
import ReactDOM from "react-dom";
import Playground from "component-playground";
import styled from "styled-components";
import "../assets/themes/playground.css";
import "../assets/themes/codemirror.css";
import { defaultCode } from "../assets/code/playground.default-code";

const ComponentPlaygroundContainer = styled.div`
  background: ${(props) => (
    props.previewBackgroundColor || "#fff"
  )};
  border-radius: 0 0 6px 6px;
  height: 100%;
  width: 100%;
`;

const ComponentPlayground = ({
  code,
  previewBackgroundColor,
  scope = {},
  theme = "dark"
}) => {
  const useDarkTheme = theme === "dark";

  if (useDarkTheme) {
    require("../assets/themes/dark.codemirror.css");
  } else {
    require("../assets/themes/light.codemirror.css");
  }

  return (
    <ComponentPlaygroundContainer
      className={`theme-${theme}`}
      previewBackgroundColor={previewBackgroundColor}>
      <Playground
        codeText={(code || defaultCode).trim()}
        scope={{ React, ReactDOM, PropTypes, ...scope }}
        noRender={false}
        theme={useDarkTheme ? "material" : "elegant"}
      />
    </ComponentPlaygroundContainer>
  );
};

ComponentPlayground.propTypes = {
  code: PropTypes.string,
  previewBackgroundColor: PropTypes.string,
  scope: PropTypes.object,
  theme: PropTypes.string
};

export default ComponentPlayground;
