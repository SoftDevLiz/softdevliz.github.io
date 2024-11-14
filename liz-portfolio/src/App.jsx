import React from 'react';
import { Carousel } from 'react-responsive-3d-carousel';
import 'react-responsive-3d-carousel/dist/styles.css';  

const items = [
  <img src="image1.jpg" alt="Image 1" />,
  <video src="video1.mp4" autoPlay />,
  <div>Custom Content 1</div>,
];

function App() {
  return (
    <div className="App">
      <Carousel
        items={items}
        startIndex={0}
        onChange={(currentIndex) => console.log(currentIndex)}
      />
    </div>
  );
}

export default App;