import { toast } from "react-hot-toast";

// Custom hook to use toast notifications
export const useToast = () => {
  const showSuccess = (message) => {
    toast.success(message, {
      style: {
        border: "1px solid #10b981",
        color: "#065f46",
        background: "#d1fae5",
      },
      iconTheme: {
        primary: "#10b981",
        secondary: "#fff",
      },
    });
  };

  const showError = (message) => {
    toast.error(message, {
      style: {
        border: "1px solid #ef4444",
        color: "#991b1b",
        background: "#fee2e2",
      },
      iconTheme: {
        primary: "#ef4444",
        secondary: "#fff",
      },
    });
  };

  const showLoading = (message) => {
    return toast.loading(message, {
      style: {
        border: "1px solid #3b82f6",
        color: "#1e40af",
        background: "#dbeafe",
      },
    });
  };

  const showWarning = (message) => {
    toast(message, {
      icon: "⚠️",
      style: {
        border: "1px solid #f59e0b",
        color: "#92400e",
        background: "#fef3c7",
      },
    });
  };

  const showInfo = (message) => {
    toast(message, {
      icon: "ℹ️",
      style: {
        border: "1px solid #06b6d4",
        color: "#164e63",
        background: "#cffafe",
      },
    });
  };

  // Function to dismiss a toast
  const dismiss = (toastId) => {
    if (toastId) {
      toast.dismiss(toastId);
    } else {
      toast.dismiss();
    }
  };

  return {
    showSuccess,
    showError,
    showLoading,
    showWarning,
    showInfo,
    dismiss,
  };
};
