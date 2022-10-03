import React, {useState} from "react";
import { SmallBrowserFrame } from "../../components/SmallBrowserFrame/SmallBrowserFrame";
import { BigBrowserFrame } from "../../components/BigBrowserFrame/BigBrowserFrame";
import "./browserFrame.css";
import {BrowserFrameContext} from "../../contexts/BrowserFrameContext"
import { GlitchTextEffect } from "../../components/glitchTextEffect/GlitchTextEffect";
import { AboutFolder } from "../../components/folders/aboutFolder/AboutFolder";


export const Browser = () => {

  const [switchBrowser, setSwitchBrowser] = useState(false)
  
  return <>
            <BrowserFrameContext.Provider value={{switchBrowser, setSwitchBrowser}}>
              {switchBrowser ? 
              <BigBrowserFrame>
                <AboutFolder />
              </BigBrowserFrame> 
              : 
              <SmallBrowserFrame>
               <GlitchTextEffect text={'Explore more'}/>
              </SmallBrowserFrame>
              }
            </BrowserFrameContext.Provider>
          </>;
};