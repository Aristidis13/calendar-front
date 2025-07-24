import { Avatar, Card, Typography } from 'antd';
import { useContext, useEffect } from 'react';

import CLASSES from './styles.module.css';
import { SERVICES } from '../../../../constants';
import { StepsContext } from '../../../context';
import { TBarber } from './BarberAvatars';
import { useFetchApi } from '../../../common-hooks';

interface BarberAvatarProps {
  barber: TBarber;
}

const BarberAvatar = ({ barber }: BarberAvatarProps) => {
  const { selectBarber } = useContext(StepsContext) as unknown;

  const { getImage, getImageError } = useFetchApi(SERVICES.getImage, { imgId: barber.img });

  useEffect(() => {
    if (getImageError) console.error(getImageError);
  }, [getImageError]);

  return (
    <Card
      className={CLASSES.barberAvatarContainer}
      onClick={() => {
        selectBarber(barber);
      }}
    >
      <Avatar className={CLASSES.avatarWrapper} src={getImage?.url} />
      <Typography className={CLASSES.name}>{barber.name}</Typography>
    </Card>
  );
};

export default BarberAvatar;
