import React, { useContext } from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./bigBrowserFrame.css";


export const BigBrowserFrame = (props) => {
  const { setSwitchBrowser } = useContext(BrowserFrameContext);

  return (
    <div className="browserFrameBig">
      <div className="browserTopBarBig">
        <div className="browserTopBarTitleBig">Explore more</div>
        <div className="browserTopBarIconsBig">
          <p
            onClick={() => {
              setSwitchBrowser(false);
            }}
            className='browserTopBarLineDownBig'
          >
          </p>
          <p className="browserTopBarSquareBig"></p>
          <p className="browserTopBarCloseBig">
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="browserContentBig">
        {props.children}
      </div>
    </div>
  );
};
