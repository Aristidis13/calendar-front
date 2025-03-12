import { ReactNode } from 'react';
import { Card, Divider, Typography } from 'antd';
import { TService } from './types/Services';
import CLASSES from './styles.module.css';
import { RightOutlined } from '@ant-design/icons';

type TServiceProps = {
  service: TService;
  isFirstElement: boolean;
};

/**
 * The Service with the image, title, and price
 * @param {object} props - The component for the Service Presentation
 * @param {TService} props.service - The service to present
 * @param {boolean} props.isFirstElement - Shows if it is first Element
 * @returns {ReactNode} - The Service
 */
const Service = ({ service, isFirstElement }: TServiceProps): ReactNode => {
  return (
    <>
      {!isFirstElement && <Divider className={CLASSES.divider} />}
      <Card
        className={CLASSES.serviceCard}
        variant="borderless"
        hoverable
        onClick={() => {
          console.log(service);
        }}
      >
        <section className={CLASSES.serviceContentWrapper}>
          {service.img && (
            <img className={CLASSES.serviceImage} width={50} src={service.img} alt="" />
          )}
          <div className={CLASSES.serviceData}>
            <Typography className={CLASSES.text}>{service.label}</Typography>
            <p className={CLASSES.text}>€ {service.price}</p>
          </div>
          <RightOutlined className={CLASSES.cosmeticArrow} />
        </section>
      </Card>
    </>
  );
};

export default Service;
