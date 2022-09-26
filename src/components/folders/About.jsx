import React, { useState } from "react";
import folderIcon from "../../assets/folder.png";
import "./folders.css";

export const About = () => {
  const [openFolder, setOpenFolder] = useState(false);

  return (
    <div>
      {openFolder ? (
        <div className="browserFrameFolder">
          <div className="browserTopBarBigFolder">
            <div className="browserTopBarTitleFolder">About me</div>
            <div className="browserTopBarIconsFolder">
              <p
                onClick={() => {
                  setOpenFolder(false);
                }}
              >
                &#45;
              </p>
              <p>&#9633;</p>
              <p>&#215;</p>
            </div>
          </div>
          <div className="browserContentFolder"></div>
        </div>
      ) : (
        <div
          className="folderIconBtn"
          onClick={() => {
            setOpenFolder(true);
          }}
        >
          <img src={folderIcon} alt="folder-icon" className="folderImg" />
          <p>about me</p>
        </div>
      )}
    </div>
  );
};
