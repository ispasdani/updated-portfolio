import React, { useContext } from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./bigBrowserFrame.css";
import { About } from "../folders/About";

export const BigBrowserFrame = () => {
  const { setSwitchBrowser } = useContext(BrowserFrameContext);

  return (
    <div className="browserFrameBig">
      <div className="browserTopBarBig">
        <div className="browserTopBarTitle">Explore more</div>
        <div className="browserTopBarIcons">
          <p
            onClick={() => {
              setSwitchBrowser(false);
            }}
          >
            &#45;
          </p>
          <p>&#9633;</p>
          <p>&#215;</p>
        </div>
      </div>
      <div className="browserContent">
        <About />
      </div>
    </div>
  );
};
