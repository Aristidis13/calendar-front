import { Collapse } from '../../../common';
import ServiceCards from './ServiceCards';
import { ScissorOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { Title } from '../../../common';

const Label = () => (
  <Title
    title={
      <>
        <ScissorOutlined className="labelIcon" /> SERVICES
      </>
    }
    secondaryTitle="CHOOSE YOUR SERVICE"
  />
);

/**
 * The Collapse that contains a title and Services
 * @param {object} props - The props of the Component
 * @param {ReactNode} props.label - The title of the Collapsible
 */
const Services = ({ services }): ReactNode => {
  return (
    <Collapse
      items={[
        {
          key: 0,
          label: <Label />,
          children: <ServiceCards services={services} />,
        },
      ]}
    />
  );
};

export default Services;
