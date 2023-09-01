import { useState } from "react";

export function CalcThemes() {
  const [currtheme, setCurrTheme] = useState(1);

  function toggleThemes(e) {
    const theme = e.target.dataset.theme;

    if (!theme) return;
    if (theme == 1 && currtheme == 1) return;
    document.documentElement.classList = "";
    setCurrTheme(
      theme == 1 ? theme : theme == 2 ? theme : theme == 3 ? theme : currtheme
    );
  }

  document.documentElement.classList.add(`theme-${currtheme}`);

  return (
    <div className="calc-header">
      <p>calc</p>
      <div className="themes-stn">
        <p>themes</p>
        <div className="themes-switcher">
          <div className="themes-ctn">
            <p>1</p>
            <p>2</p>
            <p>3</p>
          </div>
          <div className="theme-balls" onClick={toggleThemes}>
            <div className="theme-ball" data-theme="1"></div>
            <div className="theme-ball" data-theme="2"></div>
            <div className="theme-ball" data-theme="3"></div>
            <div
              className="ball"
              style={{
                // prettier-ignore
                transform: `translateX(${
                  currtheme == 1 ? -110
                    : currtheme == 2 ? 0
                    : currtheme == 3 ? 110 : 0
                }%)`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
