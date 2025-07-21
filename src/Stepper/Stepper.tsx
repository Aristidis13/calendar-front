import { Barbers, Calendar, Contact, Services, Shops } from './Steps';
import { useContext, useEffect } from 'react';

import CLASSES from './Stepper.module.css';
import { SERVICES } from '../../constants';
import { STEPS } from '../constants';
import { Skeleton } from 'antd';
import { StepsContext } from '../context';
import { useFetchApi } from '../common-hooks';

const Stepper = () => {
  const { currentStep } = useContext(StepsContext) as any;

  const {
    [SERVICES.getShopData.id]: getShopData,
    [`${SERVICES.getShopData.id}Error`]: getShopDataError,
    [`${SERVICES.getShopData.id}Pending`]: getShopDataPending,
  } = useFetchApi(SERVICES.getShopData);

  useEffect(() => {
    if (getShopDataError) console.error('Error fetching shop data:', getShopDataError);
  }, [getShopDataError]);

  return (
    <section id={CLASSES.stepper}>
      {getShopDataPending && <Skeleton active />}
      {currentStep === STEPS.SERVICES && <Services services={getShopData?.services || null} />}
      {currentStep === STEPS.SHOP && <Shops />}
      {currentStep === STEPS.BARBER && <Barbers />}
      {currentStep === STEPS.CALENDAR && <Calendar />}
      {currentStep === STEPS.CONTACT_INFO && <Contact />}
    </section>
  );
};

export default Stepper;
