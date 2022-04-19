import React from "react";
import style from "./style.module.css";
// Указываем в качестве пропсов changeList
export const Header = ({ children }) => {
 

  return (
    <div className={style.header}>
      <div className="container">
        <div className={style.header__wrapper}>
          {children}
          <div className={style.restButtonsContainer}>rest buttons</div>
        </div>
      </div>
    </div>
  );
};
