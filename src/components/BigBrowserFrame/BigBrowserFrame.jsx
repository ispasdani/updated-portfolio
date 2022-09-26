import React, { useContext} from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./bigBrowserFrame.css";


export const BigBrowserFrame = () => {

  const {setSwitchBrowser} = useContext(BrowserFrameContext)

  return (
    <div className="browserFrameBig">
      <div className="browserTopBarBig">
        <p onClick={() => {setSwitchBrowser(false)}}>&#45;</p>
        <p>&#9633;</p>
        <p>&#215;</p>
      </div>
    </div>
  );
};