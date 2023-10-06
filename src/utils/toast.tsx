import {  toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const customId = "custom id";

export const showSuccessToast = (message: string) => {
    toast.success(message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        toastId: customId,
        theme: "light",
        });
};

export const showErrorToast = (message: string) => {
    toast.error(message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        toastId: customId,
        theme: "light",
        });
};

export const showInfoToast = (message: string) => {
    toast.info(message, {
        position: "bottom-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        toastId: customId,
        theme: "light",
        });
};
