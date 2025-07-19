import { useEffect, useState } from 'react';

import CLASSES from './Image.module.css';
import { SERVICES } from '../../../constants';

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

  useEffect(() => {
    if (image) return;
    fetch(SERVICES.getImage.url.replace('{imgId}', img), {
      method: 'GET',
    })
      .then((res) => {
        if (res.status !== 200) return null;
        return res.json();
      })
      .then((data) => {
        setImage(() => data);
      })
      .catch((err) => {
        console.error('Error fetching image:', err);
      });
  }, [image]);

  return image?.url ?
      <img className={CLASSES.serviceImage} width={50} src={image.url} alt="" />
    : null;
};

export default Image;
