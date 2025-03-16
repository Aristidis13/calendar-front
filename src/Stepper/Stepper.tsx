import CLASSES from './Stepper.module.css';
import { useContext } from 'react';
import { StepsContext } from '../context';
import { Barbers, Calendar, Services, Shops, Contact } from './Steps';
import { STEPS } from '../constants';

const Stepper = () => {
  const { currentStep } = useContext(StepsContext) as any;

  return (
    <section id={CLASSES.stepper}>
      {currentStep === STEPS.SERVICES && <Services />}
      {currentStep === STEPS.SHOP && <Shops />}
      {currentStep === STEPS.BARBER && <Barbers />}
      {currentStep === STEPS.CALENDAR && <Calendar />}
      {currentStep === STEPS.CONTACT_INFO && <Contact />}
    </section>
  );
};

export default Stepper;
