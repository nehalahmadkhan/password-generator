import React, { useState, useEffect, useLayoutEffect } from "react";
import { isFirefox } from "react-device-detect";

const InstallButton: React.FC = () => {
  const [installed, setInstalled] = useState<boolean>(false);
  let deferredPrompt: any;
  const preventPrompt = (e: any): void => (deferredPrompt = e);
  const markInstall = (): void => {
    setInstalled(true);
  };
  useLayoutEffect(() => {
    if (window.matchMedia("(display-mode: standalone)").matches) {
      setInstalled(true);
    }
    window.addEventListener("beforeinstallprompt", preventPrompt);
    window.addEventListener("appinstalled", markInstall);
    return () => {
      window.removeEventListener("beforeinstallprompt", preventPrompt);
      window.removeEventListener("appinstalled", markInstall);
    };
  }, []);

  const install = async (): Promise<void> => {
    if (deferredPrompt !== null) {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      if (outcome === "accepted") {
        deferredPrompt = null;
      }
    }
  };

  if (isFirefox || installed) {
    return <></>;
  }
  return (
    <button className="btn btn-outline-primary glass fw-semibold" onClick={install}>
      INSTALL
    </button>
  );
};

export default InstallButton;
