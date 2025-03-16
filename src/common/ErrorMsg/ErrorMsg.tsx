import { ReactNode } from 'react';
import CLASSES from './ErrorMsg.module.css';

interface ErrorMsgProps {
  message: ReactNode;
}

/**
 * The Error Message Component
 * @param props - Props for Error Message Component
 * @param props.message - The message for the Component
 * @returns {ReactNode} - the rendered Message
 */
const ErrorMsg = ({ message }: ErrorMsgProps): ReactNode => {
  return <div className={CLASSES.message}>{message}</div>;
};

export default ErrorMsg;
