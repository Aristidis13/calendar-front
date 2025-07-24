import { Barbers, Calendar, Contact, Services, Shops } from './Steps';
import { useContext, useEffect } from 'react';

import CLASSES from './Stepper.module.css';
import { SERVICES } from '../../constants';
import { STEPS } from '../constants';
import { StepsContext } from '../context';
import { useFetchApi } from '../common-hooks';

const Stepper = () => {
  const { currentStep } = useContext(StepsContext) as unknown;

  const { getShopData, getShopDataError } = useFetchApi(SERVICES.getShopData);

  useEffect(() => {
    if (getShopDataError)
      console.error('Error fetching shop data:', JSON.stringify(getShopDataError)); //eslint-disable-line
  }, [getShopDataError]);

  return (
    <section id={CLASSES.stepper}>
      {currentStep === STEPS.SERVICES && <Services services={getShopData?.services || null} />}
      {currentStep === STEPS.SHOP && <Shops shops={getShopData?.shops || null} />}
      {currentStep === STEPS.BARBER && <Barbers barbers={getShopData?.barbers || null} />}
      {currentStep === STEPS.CALENDAR && <Calendar />}
      {currentStep === STEPS.CONTACT_INFO && <Contact />}
    </section>
  );
};

export default Stepper;
