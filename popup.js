document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-overlay');

    // Initialize button text based on stored state
    chrome.storage.local.get(['overlayEnabled'], (result) => {
        const enabled = result.overlayEnabled !== false; // default to true if not set
        toggleButton.textContent = enabled ? 'Disable Overlays' : 'Enable Overlays';
    });

    // Add click event listener to the toggle button
    toggleButton.addEventListener('click', () => {
        chrome.storage.local.get(['overlayEnabled'], (result) => {
            //2 variables: past and present after click
            const enabled = result.overlayEnabled !== false; // default to true if not set
            const newEnabledState = !enabled;

            //also, chenges overlayEnabled varuable to newEnabledState
            chrome.storage.local.set({ overlayEnabled: newEnabledState }, () => {
                //change the button based on whether its enabled or not
                toggleButton.textContent = newEnabledState ? 'Disable Overlays' : 'Enable Overlays';

                // Reload the YouTube page to apply changes
                chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
                    chrome.tabs.reload(tabs[0].id);
                });
            });
        });
    });
});