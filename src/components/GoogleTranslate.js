import { useState } from "react";

const GoogleTranslate = () => {
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  const loadGoogleTranslateScript = () => {
    if (scriptLoaded) return; // Prevent reloading the script

    setLoading(true); // Show loading text while the script loads

    // Define the global function before loading the script
    window.googleTranslateElementInit = () => {
      if (window.google?.translate) {
        new window.google.translate.TranslateElement(
          {
            defaultLanguage: "en",
            pageLanguage: "en",
            includedLanguages: "en,hi,ne,si,ja",
            layout:
              window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            autoDisplay: false,
            multilanguagePage: true,
          },
          "google_translate_element"
        );
        setLoading(false);
        setScriptLoaded(true); // Mark script as loaded
      }
    };

    const script = document.createElement("script");
    script.id = "google-translate-script";
    script.src =
      "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
    script.async = true;
    script.defer = true;
    script.onload = () => setLoading(false); // Hide loading when script loads

    document.body.appendChild(script);
  };

  return (
    <div>
      {!scriptLoaded && (
        <button
          onClick={loadGoogleTranslateScript}
          disabled={loading}
          className="translate-open-button"
        >
          <img src="/static/images/google.svg" alt="google-icon" />
          <div>{loading ? "Loading..." : "Translate"}</div>
        </button>
      )}
      <div
        id="google_translate_element"
        style={{ display: scriptLoaded ? "block" : "none" }}
      ></div>
    </div>
  );
};

export default GoogleTranslate;
