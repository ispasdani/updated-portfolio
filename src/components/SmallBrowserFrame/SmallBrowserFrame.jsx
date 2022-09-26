import React, {useContext} from "react";
import { BrowserFrameContext } from "../../contexts/BrowserFrameContext";
import "./smallBrowserFrame.css";

export const SmallBrowserFrame = () => {

  const {setSwitchBrowser} = useContext(BrowserFrameContext)

  return (
    <div className="browserFrame">
      <div className="browserTopBar">
        <p>&#45;</p>
        <p  onClick={() => {setSwitchBrowser(true)}}>&#9633;</p>
        <p>&#215;</p>
      </div>
    </div>
  );
};