let active_tab_id = 0;

chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
       active_tab_id = tab.tabId;
       if (/^https:\/\/www\.google/.test(current_tab_info.url)){
           console.log(tab.tabId);
        chrome.tabs.insertCSS(null, {file: "./mystyle.css"});
        chrome.tabs.executeScript(null, {file: "./foreground.js"}, () => console.log("I injected"))
       }
    })
});


chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    if (req.message === "I check the storage") {
        chrome.tabs.sendMessage(active_tab_id, {message: "I got your message"})
        // sendResponse({message: "I got your message"})
        chrome.storage.local.get("password", value => {
            console.log(value);
        })
    }
})