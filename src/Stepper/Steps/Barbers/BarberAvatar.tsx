import { Avatar, Card, Typography } from 'antd';
import { TBarber } from './BarberAvatars';
import CLASSES from './styles.module.css';
import { useContext } from 'react';
import { StepsContext } from '../../../context';

interface BarberAvatarProps {
  barber: TBarber;
}

const BarberAvatar = ({ barber }: BarberAvatarProps) => {
  const { selectBarber } = useContext(StepsContext) as any;
  return (
    <Card
      className={CLASSES.barberAvatarContainer}
      onClick={() => {
        selectBarber(barber);
      }}
    >
      <Avatar className={CLASSES.avatarWrapper} src={barber.img} />
      <Typography className={CLASSES.name}>{barber.name}</Typography>
    </Card>
  );
};

export default BarberAvatar;
