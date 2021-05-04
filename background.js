function customTabPage() {
  document.body.style = 'tab-size: 4';
}

function recoverTabPage() {
  document.body.style = 'tab-size: 8';
}

chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: customTabPage
  });
});

chrome.commands.onCommand.addListener(function(command) {
  chrome.tabs.update({}, function(tab) {
    if (command == 'toggle-tab-size') {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: customTabPage
      });
    } else if (command == 'toggle-recover-tab-size') {
      chrome.scripting.executeScript({
        target: { tabId: tab.id },
        function: recoverTabPage
      });
    }
  });
});