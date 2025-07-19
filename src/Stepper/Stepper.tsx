import { Barbers, Calendar, Contact, Services, Shops } from './Steps';
import { useContext, useEffect, useState } from 'react';

import CLASSES from './Stepper.module.css';
import { SERVICES } from '../../constants';
import { STEPS } from '../constants';
import { StepsContext } from '../context';

const Stepper = () => {
  const { currentStep } = useContext(StepsContext) as any;
  const [getShopData, setShopData] = useState(null);

  useEffect(() => {
    if (getShopData) return;

    fetch(SERVICES.getShopData.url, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status !== 200) return null;
        return res.json();
      })
      .then((data) => {
        if (data) setShopData(() => data);
      })
      .catch((err) => {
        return 'Problem in getShopData' + JSON.stringify(err);
      });
  }, [getShopData]);

  return (
    <section id={CLASSES.stepper}>
      {currentStep === STEPS.SERVICES && <Services services={getShopData?.services || null} />}
      {currentStep === STEPS.SHOP && <Shops />}
      {currentStep === STEPS.BARBER && <Barbers />}
      {currentStep === STEPS.CALENDAR && <Calendar />}
      {currentStep === STEPS.CONTACT_INFO && <Contact />}
    </section>
  );
};

export default Stepper;
