import React from 'react';

const Image = () => {
  const imageUrl = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbPx5NJfX2BGj2DpIYK56V_TprE9Gd5Ui1Q&usqp=CAU";
  
  return <img src={imageUrl} alt="Description de l'image" style={{ width: '150px', height: '150px' }} />;
};

export default Image;
