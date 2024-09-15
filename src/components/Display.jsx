import React from 'react';
import { DigestiveHealth } from '../javascript/data/DigestiveHealth';

function Display() {
  return (
    <div>
      {DigestiveHealth.map((item, index) => (
        <div key={index} className="p-4 border mb-4 rounded shadow">
          <h2 className="text-xl font-bold">{item.name}</h2>
          <p className="italic">{item.botanicalName}</p>
          <p className="font-semibold">Category: {item.category}</p>
          <p><strong>Uses:</strong> {item.uses}</p>
          <p><strong>How to Use:</strong> {item.howToUse}</p>
          <p><strong>Precautions:</strong> {item.precautions}</p>
          <div className="flex space-x-4 mt-2">
            {item.images.map((image, imgIndex) => (
              <img key={imgIndex} src={image} alt={item.name} className="w-20 h-20 object-cover" />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Display;
