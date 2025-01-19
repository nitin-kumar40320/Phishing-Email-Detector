document.addEventListener("DOMContentLoaded", () => {
  const resultElement = document.getElementById("result");

  // Request analysis status from the background script
  chrome.runtime.sendMessage({ requestStatus: true }, (response) => {
    if (response && response.isThreat !== undefined) {
      resultElement.textContent = `Threat Status: ${response.isThreat} - ${response.message}`;
    } else {
      resultElement.textContent = "Error: Unable to fetch analysis.";
    }
  });
});
