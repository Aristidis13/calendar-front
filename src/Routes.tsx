import { StepsProvider } from './context';
import { Stepper } from './Stepper';

/**
 * Reads the url and presents the correct Component
 * @param {object} props - The props of the component
 * @returns
 */
const Routes = () => {
  return (
    <div>
      <StepsProvider>
        <Stepper />
      </StepsProvider>
    </div>
  );
};

export default Routes;
