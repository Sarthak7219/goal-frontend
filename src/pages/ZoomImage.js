import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function ZoomableImage({ src, alt = "image" }) {
  const [isZoomed, setIsZoomed] = useState(false);
  const prevOverflowRef = useRef(null);

  useEffect(() => {
    if (isZoomed) {
      prevOverflowRef.current = document.body.style.overflow;
      document.body.style.overflow = "hidden";
    } else if (prevOverflowRef.current !== null) {
      document.body.style.overflow = prevOverflowRef.current || "";
      prevOverflowRef.current = null;
    }
    return () => {
      if (prevOverflowRef.current !== null) {
        document.body.style.overflow = prevOverflowRef.current || "";
      }
    };
  }, [isZoomed]);

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === "Escape") setIsZoomed(false);
    };
    if (isZoomed) window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isZoomed]);

  const openZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(true);
  };

  const closeZoom = (e) => {
    e.stopPropagation();
    setIsZoomed(false);
  };

  const overlayStyle = {
    position: "fixed",
    inset: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "rgba(0,0,0,0.8)",
    zIndex: 99999,
    padding: 20,
  };

  const contentStyle = {
    position: "relative",
    maxWidth: "90vw",
    maxHeight: "90vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: 12,
  };

  const imgStyle = {
    display: "block",
    maxWidth: "100%",
    maxHeight: "calc(90vh - 100px)",
    objectFit: "contain",
    borderRadius: 8,
    boxShadow: "0 12px 32px rgba(0,0,0,0.6)",
    background: "#111",
  };

  const closeBtnStyle = {
    position: "absolute",
    top: -15,
    right: -15,
    width: 40,
    height: 40,
    borderRadius: "50%",
    background: "#fff",
    border: "none",
    cursor: "pointer",
    fontSize: 24,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 6px 18px rgba(0,0,0,0.4)",
    fontWeight: "bold",
    color: "#333",
  };

  return (
    <>
      <img
        src={src}
        alt={alt}
        style={{ cursor: "zoom-in" }}
        onClick={openZoom}
      />

      {isZoomed &&
        ReactDOM.createPortal(
          <div
            className="zoom-overlay"
            style={overlayStyle}
            onClick={closeZoom}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="zoom-content"
              style={contentStyle}
              onClick={(e) => e.stopPropagation()}
            >
              <img src={src} alt={alt} style={imgStyle} />

              <button
                aria-label="Close"
                onClick={closeZoom}
                style={closeBtnStyle}
                title="Close (Press Esc)"
              >
                ×
              </button>
            </div>
          </div>,
          document.body
        )}
    </>
  );
}
