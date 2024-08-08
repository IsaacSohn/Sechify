// Toggle Button
var imagesEnabled = true;

function ToggleOn(event) {
    imagesEnabled = !imagesEnabled;
    var button = document.getElementById("ToggleButton");
    if (imagesEnabled) {
        button.textContent = 'Hide Images';
    } else {
        button.textContent = 'Show Images';
    }

    // Send message to background script with the updated state
    chrome.runtime.sendMessage({action: "toggleImages", state: imagesEnabled});
}

// document.getElementById("ToggleButton").addEventListener('click', ToggleOn);
