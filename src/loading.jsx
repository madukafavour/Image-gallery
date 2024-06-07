import React from 'react';
import './index.css'; // Assuming your CSS is in index.css

const Loading = () => {
  return (
    <div className="imagecard loading">
      <div className="imgcontainer"></div>
      <div className="image-text">
        <div className="text-placeholder"></div>
        <div className="tags">
          {[1, 2, 3].map((_, index) => (
            <div key={index} className="tag-placeholder"></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Loading;
