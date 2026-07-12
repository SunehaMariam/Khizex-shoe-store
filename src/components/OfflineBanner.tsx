import { useEffect } from "react";
import toast from "react-hot-toast";

const OfflineToast = () => {
  useEffect(() => {
    const showOffline = () => {
      toast.error("⚠ You're offline. Your cart is saved locally.", {
        id: "offline-toast",
        duration: Infinity,
      });
    };

    const showOnline = () => {
      toast.dismiss("offline-toast");
      toast.success("✅ You're back online!", {
        duration: 2000,
      });
    };

    if (!navigator.onLine) {
      showOffline();
    }

    window.addEventListener("offline", showOffline);
    window.addEventListener("online", showOnline);

    return () => {
      window.removeEventListener("offline", showOffline);
      window.removeEventListener("online", showOnline);
    };
  }, []);

  return null;
};

export default OfflineToast;