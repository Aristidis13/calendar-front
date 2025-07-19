import { Barbers, Calendar, Contact, Services, Shops } from './Steps';
import { SERVICES, STEPS } from '../constants';
import { useEffect, useState } from 'react';

import CLASSES from './Stepper.module.css';
import { StepsContext } from '../context';
import { useContext } from 'react';

const Stepper = () => {
  const { currentStep } = useContext(StepsContext) as any;
  const [getShopData, setShopData] = useState(null);

  useEffect(() => {
    if (getShopData) return;

    fetch(SERVICES.getShopData.url, {
      method: 'GET',
    })
      .then((res) => {
        if (res.status !== 200) return;
        else return res.json();
      })
      .then((data) => {
        setShopData(() => data);
      })
      .catch((err) => {
        return 'Problem in getShopData';
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
