import BackButton from '../../../common/BackButton/BackButton.tsx';
import BarberAvatars from './BarberAvatars';
import CLASSES from './styles.module.css';
import { Card } from 'antd';
import { ReactNode } from 'react';
import Title from '../../../common/Title/Title.tsx';

interface IBarbersProps {
  barbers: Array;
}

/**
 * The Collapse that contains a title and Services
 * @param {object} props - The props of the Component
 */
const Barbers = ({ barbers }: IBarbersProps): ReactNode => {
  return (
    <div className={CLASSES.barbersWrapper}>
      <BackButton name="CHOOSE SHOP" />
      <Card
        className={CLASSES.barberCard}
        variant="borderless"
        title={<Title title="CHOOSE YOUR BARBER" />}
      >
        <BarberAvatars barbers={barbers} />
      </Card>
    </div>
  );
};

export default Barbers;
