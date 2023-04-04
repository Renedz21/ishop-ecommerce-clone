import { FC } from 'react'
import toast, { Toaster, ToastOptions } from 'react-hot-toast';

interface ToastProps {
    message: string
    type: 'success' | 'error' | 'promise' | 'default';
    options?: ToastOptions | any,
}

const Notification: FC<ToastProps> = ({ message, type, options }) => {
    switch (type) {
        case 'success':
            toast.success(message, options);
            break;
        case 'error':
            toast.error(message, options);
            break;
        default:
            break;
    }

    return <Toaster />;
}

export default Notification