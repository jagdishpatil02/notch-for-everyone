var notchWrapper = document.createElement("div");
notchWrapper.classList.add("notch-wrapper");
notchWrapper.setAttribute(
  "style",
  "width: 100%;display: flex; justify-content: center;align-items: center;position: absolute;top: 0px;z-index: 1000000;"
);
var notch = document.createElement("div");
notch.setAttribute(
  "style",
  "max-width: 200px;background: #000; width: 200px;height: 30px;border-bottom-left-radius: 10px;border-bottom-right-radius: 10px;"
);
notchWrapper.appendChild(notch);
document.body.appendChild(notchWrapper);
