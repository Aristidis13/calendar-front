import { Collapse } from 'antd';
import { services } from './ServicesMock';
import CLASSES from './styles.module.css';
import ServiceCards from './ServiceCards';
import { DownOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';

interface IServices {
  label: ReactNode;
}

/**
 * The Collapse that contains a title and Services
 * @param {object} props - The props of the Component
 * @param {ReactNode} props.label - The title of the Collapsible
 */
const Services = ({ label }: IServices): ReactNode => {
  return (
    <Collapse
      className={CLASSES.servicesContainer}
      defaultActiveKey={0}
      bordered={false}
      expandIconPosition="end"
      expandIcon={({ isActive }) => (
        <DownOutlined width={15} height={15} className={CLASSES.icon} rotate={isActive ? 0 : -90} />
      )}
      items={[
        {
          key: 0,
          label,
          children: <ServiceCards services={services.services} />,
        },
      ]}
    />
  );
};

export default Services;
