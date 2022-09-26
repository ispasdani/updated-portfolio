import React, { useContext } from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./smallBrowserFrame.css";

export const SmallBrowserFrame = () => {
  const { setSwitchBrowser } = useContext(BrowserFrameContext);

  return (
    <div
      className="browserFrame"
      onClick={() => {
        setSwitchBrowser(true);
      }}
    >
      <div className="browserTopBar">
        <p>&#45;</p>
        <p
          onClick={() => {
            setSwitchBrowser(true);
          }}
        >
          &#9633;
        </p>
        <p>&#215;</p>
      </div>

      <div className="browserText">
        <p className="glitch">
          <span aria-hidden="true">EXPLORE MORE</span>
          EXPLORE MORE
          <span aria-hidden="true">EXPLORE MORE</span>
        </p>
      </div>
    </div>
  );
};
