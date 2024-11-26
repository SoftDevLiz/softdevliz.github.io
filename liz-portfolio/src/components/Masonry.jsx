import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img2: '../assets/code2.jpeg',
    title: 'Setup'
  },
  {
    img: '../assets/coding.jpg',
    title: 'Coding'
  },
  {
    img: '../assets/me3.jpg',
    title: 'Me'
  }
]

function Masonry() {
  return (
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
            />
          </ImageListItem>
        ))}
      </ImageList>
  );
}

export default Masonry;