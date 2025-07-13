import React from "react";
import "./BlobButton.css"; // Don't forget this import

const BlobButton = ({ link }) => {
  return (
    <div className="buttons">
      <a href={link} target="_blank" rel="noreferrer">
        <button className="blob-btn">
          View More
          <span className="blob-btn__inner">
            <span className="blob-btn__blobs">
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
              <span className="blob-btn__blob"></span>
            </span>
          </span>
        </button>
      </a>

      {/* Add SVG once only in your App.jsx or index.html */}
    </div>
  );
};

export default BlobButton;
