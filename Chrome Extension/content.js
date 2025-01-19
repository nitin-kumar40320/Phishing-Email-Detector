console.log("Content script loaded!");

// Function to extract email content
function extractEmailContent() {
  const emailContent = document.querySelector(".a3s"); // Update selector if needed
  if (emailContent) {
    console.log("Email content detected:", emailContent.innerText);

    // Send the email content to the background script
    chrome.runtime.sendMessage({ emailText: emailContent.innerText }, (response) => {
      console.log("Response from background script:", response);
    });
  } else {
    console.log("Email content not found.");
  }
}

// Observe DOM changes
const observer = new MutationObserver((mutations) => {
  mutations.forEach((mutation) => {
    if (mutation.addedNodes.length > 0) {
      console.log("DOM change detected. Checking for email content...");
      extractEmailContent();
    }
  });
});

// Start observing the body for changes
observer.observe(document.body, { childList: true, subtree: true });
