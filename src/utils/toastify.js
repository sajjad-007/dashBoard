import { toast, Bounce } from "react-toastify";

const toastSuccess = (msg) => {
  toast.success(msg || "🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 1000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

const toastError = (msg) => {
  toast.error(msg || "🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
    transition: Bounce,
  });
};

const toastInfo = (msg) => {
  toast.info(msg || "🦄 Wow so easy!", {
    position: "top-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: false,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    transition: Bounce,
  });
};

export { toastSuccess, toastError, toastInfo };
