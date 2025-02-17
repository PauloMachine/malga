import React, { createContext, useContext, useEffect, useState } from "react";
import type {
  ICheckoutProcessContext,
  ICheckoutProcessProvider,
  TStep,
} from "./checkout-process.types";

const CheckoutProcessContext = createContext<
  ICheckoutProcessContext | undefined
>(undefined);

export const CheckoutProcessProvider = ({
  children,
  steps,
}: ICheckoutProcessProvider) => {
  const [currentStep, setCurrentStep] = useState<TStep>(steps[0]);
  const [isMobile, setIsMobile] = useState(false);

  const handleNext = () => {
    if (currentStep.id < steps.length) {
      const step = steps.find((step) => step.id === currentStep.id + 1);
      if (step) setCurrentStep(step);
    }
  };

  const handlePrevious = () => {
    if (currentStep.id > 1) {
      const step = steps.find((step) => step.id === currentStep.id - 1);
      if (step) setCurrentStep(step);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <CheckoutProcessContext.Provider
      value={{
        currentStep,
        setCurrentStep,
        steps,
        handleNext,
        handlePrevious,
        isMobile,
      }}
    >
      {children}
    </CheckoutProcessContext.Provider>
  );
};

export const useCheckoutProcess = () => {
  const context = useContext(CheckoutProcessContext);
  if (!context) {
    throw new Error("useCheckout must be used inside a CheckoutProvider");
  }
  return context;
};
