import React, {useState} from "react";
import { SmallBrowserFrame } from "../../components/SmallBrowserFrame/SmallBrowserFrame";
import { BigBrowserFrame } from "../../components/BigBrowserFrame/BigBrowserFrame";
import "./browserFrame.css";
import {BrowserFrameContext} from "../../contexts/BrowserFrameContext"


export const Browser = () => {

  const [switchBrowser, setSwitchBrowser] = useState(false)
  
  return <>
            <BrowserFrameContext.Provider value={{switchBrowser, setSwitchBrowser}}>
              {switchBrowser ? <BigBrowserFrame /> : <SmallBrowserFrame />
              }
            </BrowserFrameContext.Provider>
          </>;
};