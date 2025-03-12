import { Button, Steps } from 'antd';
import { STEPS } from './constants';
import { useCallback, useState } from 'react';
import CLASSES from './Stepper.module.css';

const Stepper = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(STEPS.filter((step) => step.id === currentStep));

  const next = useCallback(() => {
    setCurrentStep((prev) => {
      const newCurrentStep = prev + 1;
      setVisibleSteps(() => {
        return STEPS.filter((step) => step.id === newCurrentStep);
      });

      return newCurrentStep;
    });
  }, []);

  const prev = useCallback(() => {
    setCurrentStep((prev) => {
      const newCurrentStep = prev - 1;
      setVisibleSteps(() => {
        return STEPS.filter((step) => step.id === newCurrentStep);
      });

      return newCurrentStep;
    });
  }, []);

  return (
    <section id="stepper">
      <Steps current={1} direction="vertical" items={visibleSteps} />
      <div>{visibleSteps[0].content}</div>
      <div>
        {currentStep > 0 && (
          <Button className={CLASSES.button} onClick={() => prev()}>
            Previous
          </Button>
        )}
        {currentStep < STEPS.length - 1 && (
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
