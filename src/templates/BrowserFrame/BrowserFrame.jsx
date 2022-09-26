import React from "react";
import { SmallBrowserFrame } from "../../components/SmallBrowserFrame/SmallBrowserFrame";
import { BigBrowserFrame } from "../../components/BigBrowserFrame/BigBrowserFrame";
import "./browserFrame.css";

export const Browser = () => {
  
  return <><BigBrowserFrame />  <SmallBrowserFrame /></>;
};