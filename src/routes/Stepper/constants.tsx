import {
  UsergroupAddOutlined,
  ClockCircleOutlined,
  ScissorOutlined,
  EditOutlined,
  CheckCircleOutlined,
} from '@ant-design/icons';
import { ReactElement, ReactNode } from 'react';
import { Services } from './Steps';

type TSteps = {
  id: number;
  title: ReactNode;
  content: ReactElement;
  icon: ReactElement;
};

/**
 * The steps for the scheduling process
 */
const STEPS: Array<TSteps> = [
  {
    id: 0,
    title: 'Choose your Service',
    content: <Services />,
    icon: <ScissorOutlined />,
  },
  {
    id: 1,
    title: 'Choose your Barber',
    content: <div>Select Barber</div>,
    icon: <UsergroupAddOutlined />,
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
