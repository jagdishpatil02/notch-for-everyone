chrome.browserAction.onClicked.addListener(function (tab) {
  console.log(tab);
  debugger;
  chrome.tabs.executeScript({
    file: "insert.js",
  });
});
