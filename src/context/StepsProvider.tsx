import { createContext, ReactNode, useCallback, useState } from 'react';
import { STEPS } from '../constants';
import { TService } from '../Stepper/Steps/Services/types/Services';
import { TFormData } from '../Stepper/Steps/Contact/types/Contact';
import { TBarber } from '../Stepper/Steps/Barbers/BarberAvatars';
import { TShop } from '../Stepper/Steps/Shops/types/Shops';
import { Dayjs } from 'dayjs';

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
  const [currentStep, setCurrentStep] = useState(STEPS.SERVICES);
  const [reservation, setReservation] = useState({});

  const updateReservation = useCallback(
    (term: any, name: string) => {
      setReservation((prev) => ({
        ...prev,
        [name]: term,
      }));
    },
    [setReservation]
  );

  const next = useCallback(
    (nextStep: string) => {
      setCurrentStep(() => nextStep);
    },
    [setCurrentStep]
  );

  const prev = useCallback(() => {
    if (currentStep === STEPS.SHOP) {
      setCurrentStep(() => STEPS.SERVICES);
    } else if (currentStep === STEPS.BARBER) {
      setCurrentStep(() => STEPS.SHOP);
    } else if (currentStep === STEPS.CALENDAR) {
      setCurrentStep(() => STEPS.BARBER);
    } else if (currentStep === STEPS.CONTACT_INFO) {
      setCurrentStep(() => STEPS.CALENDAR);
    }
  }, [currentStep, setCurrentStep]);

  const saveService = useCallback(
    (service: TService) => {
      updateReservation(service, 'service');
      next(STEPS.SHOP);
    },
    [updateReservation]
  );

  const selectShop = useCallback(
    (shop: TShop) => {
      updateReservation(shop, 'shop');
      next(STEPS.BARBER);
    },
    [updateReservation]
  );

  const selectBarber = useCallback(
    (barber: TBarber) => {
      updateReservation(barber, 'barber');
      next(STEPS.CALENDAR);
    },
    [next, updateReservation]
  );

  const selectDate = (date: Dayjs) => {
    const formattedDate = date.format('DD-MM-YYYY');
    updateReservation(formattedDate, 'date');
  };

  const selectHour = (hour: object) => {
    updateReservation(hour, 'hour');
    next(STEPS.CONTACT_INFO);
  };

  /**
   * Sends the formData for OTP Validation
   * @param {object} formData - Sends the formData to the Backend
   */
  const sendDetails = useCallback((formData: TFormData) => {
    updateReservation(formData, 'contactInfo');
  }, []);

  return (
    <StepsContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        saveService,
        selectShop,
        reservation,
        next,
        prev,
        selectBarber,
        selectDate,
        selectHour,
        sendDetails,
      }}
    >
      {children}
    </StepsContext.Provider>
  );
};
