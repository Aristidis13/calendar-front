import { Collapse, Typography } from 'antd';
import { services } from './ServicesMock';
import Service from './Service';

/**
 * Handles the services optional Step
 * @returns @Component
 */
const Services = () => {
  // Fetch the Mocks
  return (
    <div>
      {services.services.map((service) => (
        <Service service={service} />
      ))}
    </div>
  );
};

/**
 * The Collapse that contains a title and Services
 */
const ServicesCollapse = () => {
  return (
    <Collapse
      defaultActiveKey={0}
      expandIconPosition="end"
      items={[{ key: 0, label: <Typography>{services.title}</Typography>, children: <Services /> }]}
    />
  );
};

export default ServicesCollapse;
