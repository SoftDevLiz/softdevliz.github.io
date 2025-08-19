import React from 'react';
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

const itemData = [
  {
    img: '/assets/code2.jpeg',
    title: 'Setup'
  },
  {
    img: '/assets/coding.jpg',
    title: 'Coding'
  },
  {
    img: '/assets/bike.mp4',
    title: 'Bike'
  },
  {
    img: '/assets/me1.jpeg',
    title: 'Me'
  },
  {
    img: '/assets/me2.jpg',
    title: 'Me'
  },
  {
    img: '/assets/meixdf.jpg',
    title: 'Me Ixdf'
  },
  {
    img: '/assets/recentsetup.jpg',
    title: 'Setup'
  },
  {
    img: '/assets/mevid.mp4',
    title: 'Me'
  },
  {
    img: '/assets/setup.jpg',
    title: 'Setup'
  }

]

function Masonry() {
  return (
    <Box sx={{ width: 600, height: 450, overflowY: 'scroll', borderRadius: 20 }}>
      <ImageList variant="masonry" cols={3} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            {item.img.endsWith('.mp4') ? (
              <video
                src={item.img}
                preload="metadata"
                autoPlay
                loop
                playsInline
                muted
                style={{ width: '100%', height: 'auto', display: 'block', borderRadius: 8 }}
              />
            ) : (
              <img
                src={item.img}
                alt={item.title}
                loading="lazy"
              />
            )}
          </ImageListItem>
        ))}
      </ImageList>
      </Box>
  );
}

export default Masonry;