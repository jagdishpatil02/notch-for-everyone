chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(tab);
  debugger;
  chrome.tabs.executeScript({
    code: `var notchWrapper=document.createElement("div"); notchWrapper.classList.add('notch-wrapper');var notch = document.createElement("div"); notchWrapper.appendChild(notch); document.body.appendChild(notchWrapper)`,
  });
});

// var notchWrapper=document.createElement("div"); notchWrapper.classList.add('notch-wrapper');var notch = document.createElement("div"); notchWrapper.appendChild(notch); document.body.appendChild(notchWrapper)
