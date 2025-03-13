import { ClockCircleOutlined, EditOutlined, CheckCircleOutlined } from '@ant-design/icons';
import { ReactElement, ReactNode } from 'react';
import { Barbers, Calendar, Services, Shops } from './Steps';

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
    content: <Services />,
  },
  {
    id: 1,
    content: <Shops />,
  },
  {
    id: 2,
    content: <Barbers />,
  },
  {
    id: 3,
    title: 'Choose your Hour',
    content: <Calendar />,
    icon: <ClockCircleOutlined />,
  },
  {
    id: 4,
    title: 'Tell us About you',
    content: <>Provide contact details</>,
    icon: <EditOutlined />,
  },
  {
    id: 5,
    title: 'Appointment Scheduled',
    content: <>Congratulations</>,
    icon: <CheckCircleOutlined />,
  },
];

export { STEPS };
