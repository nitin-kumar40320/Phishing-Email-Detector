let latestAnalysis = null;
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.emailText) {
    fetch("http://127.0.0.1:5000/analyze", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ text: message.emailText }),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("AI Analysis Result:", result);
        latestAnalysis = result;
        sendResponse(result);
      })
      .catch((error) => {
        console.error("Error in AI analysis:", error);
        latestAnalysis = { isThreat: false, message: "Analysis failed." };
        sendResponse({ error: "Analysis failed" });
      });

    return true; // Keep the message channel open for async response
  } else if (message.requestStatus) {
    // Handle status requests from the popup
    sendResponse(latestAnalysis || { isThreat: false, message: "No analysis available." });
  }
});

