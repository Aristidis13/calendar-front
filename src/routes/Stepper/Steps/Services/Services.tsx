import { Collapse } from 'antd';
import { services } from './ServicesMock';
import CLASSES from './styles.module.css';
import ServiceCards from './ServiceCards';
import { DownOutlined, ScissorOutlined } from '@ant-design/icons';
import Title from './Title';

/**
 * The Collapse that contains a title and Services
 */
const Services = () => {
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
          label: (
            <Title
              title={
                <>
                  <ScissorOutlined className={CLASSES.labelIcon} /> SERVICES
                </>
              }
              secondaryTitle={services.title}
            />
          ),
          children: <ServiceCards services={services.services} />,
        },
      ]}
    />
  );
};

export default Services;
