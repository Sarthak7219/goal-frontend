// GalleryZoomableImage.jsx
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export default function GalleryZoomableImage({
  src,
  alt = "image",
  caption = "",
  date = "",
}) {
  const [isZoomed, setIsZoomed] = useState(false);
  const prevOverflowRef = useRef(null);

  // Lock/unlock scroll
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

  // Close on Escape
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

  // Styles
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

  const captionStyle = {
    color: "#fff",
    textAlign: "center",
    lineHeight: 1.4,
    fontSize: 16,
    maxWidth: "100%",
    padding: "0 12px",
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
      {/* Entire block is clickable */}
      <div
        className="img-hover-div"
        role="button"
        tabIndex={0}
        onClick={openZoom}
        onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && openZoom(e)}
        style={{ cursor: "pointer" }}
      >
        <img src={src} alt={alt} className="gallery-img" />
        <div className="image-info">
          {date && <p className="date">{`Date: ${date}`}</p>}
          {caption && <p className="location">{caption}</p>}
        </div>
      </div>

      {/* Zoom overlay */}
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
              {(date || caption) && (
                <div className="zoom-caption" style={captionStyle}>
                  {date && <div style={{ marginBottom: 8, fontWeight: "bold" }}>Date: {date}</div>}
                  {caption && <div>{caption}</div>}
                </div>
              )}

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
