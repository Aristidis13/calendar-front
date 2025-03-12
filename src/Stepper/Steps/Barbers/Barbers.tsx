import { Button, Card } from 'antd';
import { LeftOutlined } from '@ant-design/icons';
import barbers from './BarbersMock.ts';
import CLASSES from './styles.module.css';
import BarberAvatars from './BarberAvatars';
import { ReactNode, useContext } from 'react';
import Title from '../../../common/Title.tsx';
import { StepsContext } from '../../../context/index.ts';

interface IBarbersProps {}

/**
 * The Collapse that contains a title and Services
 * @param {object} props - The props of the Component
 */
const Barbers = ({}: IBarbersProps): ReactNode => {
  const { prev } = useContext(StepsContext) as any;
  return (
    <div className={CLASSES.barbersWrapper}>
      <Button type="text" variant="text" onClick={prev} ghost className={CLASSES.backBtn}>
        <span className="text">
          <LeftOutlined /> CHOOSE SERVICE
        </span>
      </Button>
      <Card
        className={CLASSES.barberCard}
        variant="borderless"
        title={<Title title={'CHOOSE YOUR BARBER'} />}
      >
        <BarberAvatars barbers={barbers} />
      </Card>
    </div>
  );
};

export default Barbers;
