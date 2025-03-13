import { createContext, ReactNode, useCallback, useState } from 'react';
import { STEPS } from '../Stepper/constants';
import { TService } from '../Stepper/Steps/Services/types/Services';
import { TBarber } from '../Stepper/Steps/Barbers/BarberAvatars';
import { TShop } from '../Stepper/Steps/Shops/types/Shops';

interface IStepsContext {
  children: ReactNode;
}

/**
 * The Context for the Steps
 */
export const StepsContext = createContext({});

/**
 * Provides Functions and data for the handling of the Steps Component
 * @param {object} props - The props component
 * @param {ReactNode} props.children - The contained components
 *
 * @returns {ReactNode} The rendered Component
 */
export const StepsProvider = ({ children }: IStepsContext): ReactNode => {
  const [currentStep, setCurrentStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState(STEPS.filter((step) => step.id === currentStep));
  const [reservation, setReservation] = useState({});

  const next = useCallback(() => {
    setCurrentStep((prev) => {
      const newCurrentStep = prev + 1;
      setVisibleSteps(() => {
        return STEPS.filter((step) => step.id === newCurrentStep);
      });

      return newCurrentStep;
    });
  }, []);

  const saveService = useCallback((service: TService) => {
    setReservation((prev) => ({
      ...prev,
      service,
    }));
    next();
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

  const selectBarber = useCallback(
    (barber: TBarber) => {
      setReservation((prev) => ({
        ...prev,
        barber,
      }));
      next();
    },
    [next, setReservation]
  );

  const selectShop = useCallback((shop: TShop) => {
    setReservation((prev) => ({
      ...prev,
      shop,
    }));
    next();
  }, []);

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        visibleSteps,
        setVisibleSteps,
        saveService,
        selectShop,
        reservation,
        next,
        prev,
        selectBarber,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
