import { Button } from 'antd';
import { STEPS } from './constants';
import CLASSES from './Stepper.module.css';
import { useContext } from 'react';
import { StepsContext } from '../context';

const Stepper = () => {
  const { visibleSteps, currentStep, prev, next } = useContext(StepsContext) as any;
  return (
    <section id="stepper">
      <div>{visibleSteps[0].content}</div>
      <div>
        {currentStep > 0 && (
          <Button className={CLASSES.button} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {currentStep > 1 && currentStep < STEPS.length - 1 && (
          <Button type="primary" className={CLASSES.button} onClick={() => next()}>
            Next
          </Button>
        )}
        {currentStep === STEPS.length - 1 && (
          <Button type="primary" className={CLASSES.button}>
            Done
          </Button>
        )}
      </div>
    </section>
  );
};

export default Stepper;
