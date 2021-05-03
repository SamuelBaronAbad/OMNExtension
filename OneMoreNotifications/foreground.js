// document.querySelector(".rSk4se img").classList.add("spinspin")

const first = document.createElement('button');
first.innerText ="SET DATA";
first.id ="first";

const second = document.createElement('button');
second.innerText ="SHOUTOUT TO BACKEND";
second.id ="second";

document.querySelector('body').appendChild(first);
document.querySelector('body').appendChild(second);

first.addEventListener('click', () => {
    chrome.storage.local.set({'password': "1234"})
    console.log("I SET DATA");
})

second.addEventListener('click', () => {
    chrome.runtime.sendMessage({message: "I check the storage"});
    console.log("I SENT THE MESSAGE");
});

chrome.runtime.onMessage.addListener((req, sender, sendResponse) => {
    console.log(req.message);
})