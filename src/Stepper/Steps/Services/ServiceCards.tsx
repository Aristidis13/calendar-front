import Service from './Service';
import { TService } from './types/Services';

interface IServices {
  services: TService[];
}

const ServiceCards = ({ services }: IServices) => {
  return (services || []).map((service, index) => (
    <Service key={'serv-' + index} isFirstElement={index === 0} service={service} />
  ));
};

export default ServiceCards;
