import CLASSES from './Image.module.css';
import { SERVICES } from '../../../constants';
import { useEffect } from 'react';
import { useFetchApi } from '../../common-hooks';

type TImage = {
  img: string;
};

/**
 * A Component that accepts an image url and fetches the image.
 * @param {string} img - The image url.
 * @returns - The rendered Component
 */
const Image = ({ img }: TImage) => {
  const { getImage, getImageError } = useFetchApi(SERVICES.getImage, { imgId: img });

  useEffect(() => {
    if (getImageError) console.error(getImageError);
  }, [getImageError]);

  return getImage ?
      <img className={CLASSES.serviceImage} width={50} src={getImage.url} alt="" />
    : null;
};

export default Image;
