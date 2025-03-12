import {
  UsergroupAddOutlined,
  ClockCircleOutlined,
  EditOutlined,
  CheckCircleOutlined,
  ScissorOutlined,
} from '@ant-design/icons';
import { ReactElement, ReactNode } from 'react';
import { Services } from './Steps';
import { Title } from '../common';
import Barbers from './Steps/Barbers/Barbers';

type TSteps = {
  id: number;
  title?: ReactNode;
  content: ReactElement;
  icon?: ReactElement;
};

/**
 * The steps for the scheduling process
 */
const STEPS: Array<TSteps> = [
  {
    id: 0,
    content: (
      <Services
        label={
          <Title
            title={<><ScissorOutlined className="labelIcon" /> SERVICES</>} //prettier-ignore
            secondaryTitle="CHOOSE YOUR SERVICE"
          />
        }
      />
    ),
  },
  {
    id: 1,
    content: <Barbers />,
  },
  {
    id: 2,
    title: 'Choose your Hour',
    content: <div>Select Hour</div>,
    icon: <ClockCircleOutlined />,
  },
  {
    id: 3,
    title: 'Tell us About you',
    content: <>Provide contact details</>,
    icon: <EditOutlined />,
  },
  {
    id: 4,
    title: 'Appointment Scheduled',
    content: <>Congratulations</>,
    icon: <CheckCircleOutlined />,
  },
];

export { STEPS };
