import React, {useState} from 'react'
import closeFolderIcon from '../../../assets/folder.png'
import openFolderIcon from '../../../assets/openFolder.png'
import {AboutBrowserFrame} from '../../AboutBrowserFrame/AboutBrowserFrame'
import './aboutFolder.css'
import {AboutBrowserFrameContext} from '../../../contexts/AboutBrowserFrameContext'
import aboutMeImg from '../../../assets/me.png'

export const AboutFolder = () => {
    const [openCloseFolder, setOpenCloseFolder] = useState(false)
    const [isShown, setIsShown] = useState(false);
    const [readMore, setReadMore] = useState(false)

  return (
    <div className='aboutFolder'>
        <AboutBrowserFrameContext.Provider value={{setOpenCloseFolder}}>
            {openCloseFolder ? 
            <AboutBrowserFrame>
                <div className='aboutMeImgContainer'>
                    <img src={aboutMeImg} alt='about-me-img' />
                </div>
                <div className='readAboutMe'>
                    <div className={`${readMore ? 'aboutMeInfoContainerExpand' : 'aboutMeInfoContainer'}`}>
                        <h2>Hi, there</h2>
                        <p>My name is Daniel-Nicolae Ispas and I am a Full-Stack Developer currently working for Netcompany.</p>
                        <h2>Long story made short about me...</h2>
                        <p>Ex professional tennis player who realised that he is not going to be the next Rafael Nadal, so dream over.</p>
                        <p>My journey as a programmer started a long time ago. I always had this passion for computers and for the ability to build games and apps. I remember the moment when my parents bought me my first computer and I was spending my time only by going through different folders and playing Mortal Kombat. For me, at that time it meant everything. Easily I started to read about programming and how I can build my first game. Of course I was just a kid and I was not able to understand how complex this world is, plus I was a tennis player and I loved that too. So for many years this was just something that I was doing in my free time as a passion.</p>
                        <p>Six years ago I stopped playing tennis and decided to go all in with programming. The fact that I already had some experience was a plus of course. My focus was on Web Development and Mobile Development because I liked the idea of building something that people can interact with. I think that on these fields you can see the results more easily and it's more enjoyable. </p>
                    </div>
                    
                    <div className='readMoreBtn'>
                        <span className={`${readMore ? 'hideFadeInLine' : 'fadeInLine'}`}></span>
                        <div onClick={() => setReadMore(!readMore)} className='pointersContainer'>
                            {readMore ? <p>&#9650;</p> : <p>&#9660;</p>}
                        </div>
                    </div>
                </div>
            </AboutBrowserFrame> 
            : 
            <div className='folderContainer' onMouseEnter={() => setIsShown(true)} onMouseLeave={() => setIsShown(false)} onClick={() => {setOpenCloseFolder(true); setIsShown(false)}}>
                {isShown ?  <img src={openFolderIcon} alt='folder-icon' className='folderIcon'/> : <img src={closeFolderIcon} alt='folder-icon' className='folderIcon'/>}
                <p>about me</p>
            </div>
            }
        </AboutBrowserFrameContext.Provider>
    </div>
  )
}
