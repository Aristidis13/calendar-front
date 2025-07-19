import { useEffect, useState } from 'react';

import CLASSES from './Image.module.css';

type TImage = {
  img: string;
};

/**
 * A Component that accepts an image url and fetches the image.
 * @param {string} img - The image url.
 * @returns - The rendered Component
 */
const Image = ({ img }: TImage) => {
  const [image, setImage] = useState(null);

  useEffect(() => {}, [image]);

  return <img className={CLASSES.serviceImage} width={50} src={img} alt="" />;
};

export default Image;
