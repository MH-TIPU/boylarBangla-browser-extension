document.addEventListener("mouseup", async () => {
    const selection = window.getSelection().toString().trim();
    if (selection.length === 0) return;
  
    const url = `http://127.0.0.1:8000/api/translate?text=${encodeURIComponent(selection)}`;
  
    try {
      const response = await fetch(url);
      const data = await response.json();
  
      showTooltip(data.translated);
    } catch (error) {
      console.error("Translation error:", error);
    }
  });
  
  function showTooltip(text) {
    removeTooltip();
  
    const tooltip = document.createElement("div");
    tooltip.innerText = text;
    tooltip.className = "bangla-tooltip";
    document.body.appendChild(tooltip);
  
    const selection = window.getSelection();
    const range = selection.getRangeAt(0);
    const rect = range.getBoundingClientRect();
  
    tooltip.style.top = `${rect.top + window.scrollY - 40}px`;
    tooltip.style.left = `${rect.left + window.scrollX}px`;
  
    setTimeout(removeTooltip, 3000);
  }
  
  function removeTooltip() {
    const old = document.querySelector(".bangla-tooltip");
    if (old) old.remove();
  }

  