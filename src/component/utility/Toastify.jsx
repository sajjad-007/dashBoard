
import { ToastContainer, toast, Bounce } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ToastNotifier = () => {
  return <ToastContainer />;
};

// Helper functions for triggering toasts
export const toastSuccess = ({msg}) => {
  toast.success(msg, {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};

export const toastError = ({msg}) => {
  toast.error(msg, {
    position: "top-left",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
    transition: Bounce,
  });
};

export const toastInfo = (msg) => {
  toast.info(msg || "🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    theme: "light",
    transition: Bounce,
  });
};

export default ToastNotifier;
