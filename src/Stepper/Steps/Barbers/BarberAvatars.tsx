import BarberAvatar from './BarberAvatar';
import CLASSES from './styles.module.css';

export type TBarber = {
  id: number;
  name: string;
  img: string;
};

export interface IBarberAvatarsProps {
  barbers: TBarber[];
}

const BarberAvatars = ({ barbers }: IBarberAvatarsProps) => {
  return (
    <div className={CLASSES.barberAvatars}>
      {barbers.map((barber, idx) => (
        <BarberAvatar key={'barber-' + idx} barber={barber} />
      ))}
    </div>
  );
};

export default BarberAvatars;
