import React, {useContext} from 'react'
import './aboutBrowserFrame.css'
import { AboutBrowserFrameContext } from '../../contexts/AboutBrowserFrameContext'

export const AboutBrowserFrame = (props) => {
  const { setOpenCloseFolder} = useContext(AboutBrowserFrameContext);

  return (
    <div className="aboutFrameBig">
      <div className="aboutTopBarBig">
        <div className="aboutTopBarTitleBig">Explore more</div>
        <div className="aboutTopBarIconsBig">
          <p className='aboutTopBarLineDownBig'></p>
          <p className="aboutTopBarSquareBig"></p>
          <p className="aboutTopBarCloseBig" onClick={() => setOpenCloseFolder(false)}>
            <span></span>
            <span></span>
          </p>
        </div>
      </div>
      <div className="aboutContentBig">
        {props.children}
      </div>
    </div>
  )
}

