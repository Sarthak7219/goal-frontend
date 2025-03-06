import { useEffect } from "react";

const GoogleTranslate = () => {
  useEffect(() => {
    // Define the global callback function BEFORE appending the script
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
      }
    };

    // Check if script is already added
    if (!document.getElementById("google-translate-script")) {
      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return <div id="google_translate_element"></div>;
};

export default GoogleTranslate;
