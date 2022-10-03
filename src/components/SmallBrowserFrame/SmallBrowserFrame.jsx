import React, { useContext } from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./smallBrowserFrame.css";

export const SmallBrowserFrame = (props) => {
  const { setSwitchBrowser } = useContext(BrowserFrameContext);

  return (
    <div className="browserFrameSmall" onClick={() => {
      setSwitchBrowser(true);
    }}>
    <div className="browserTopBarSmall">
      <div className="browserTopBarTitleSmall">Explore more</div>
      <div className="browserTopBarIconsSmall">
        <p
          
          className='browserTopBarLineDownSmall'
        >
        </p>
        <p className="browserTopBarSquareSmall" onClick={() => {
            setSwitchBrowser(true);
          }}></p>
        <p className="browserTopBarCloseSmall">
          <span></span>
          <span></span>
        </p>
      </div>
    </div>
    <div className="browserContentSmall">
      {props.children}
    </div>
  </div>
  );
};
