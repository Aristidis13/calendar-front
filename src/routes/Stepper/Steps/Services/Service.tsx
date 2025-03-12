import { Card, Typography } from 'antd';
import { TService } from './types/Services';

type TServiceProps = {
  service: TService;
};

/**
 *
 * @param props - The component for the Service Presentation
 * @returns
 */
const Service = ({ service }: TServiceProps) => {
  return (
    <Card
      hoverable
      onClick={() => {
        console.log(service);
      }}
    >
      <Typography>{service.label}</Typography>
      <p>{service.price} €</p>
    </Card>
  );
};

export default Service;
