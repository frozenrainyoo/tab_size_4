function customTabPage() {
  document.body.style = 'tab-size: 4';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: customTabPage
  });
});