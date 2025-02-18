import React from "react";
import type { ICheckoutProcess } from "./checkout-process.types";
import { useCheckoutProcess } from "./checkout-process.context";
import { Button } from "../ui";

const CheckoutProgress = ({
  children,
  onChange,
  isLoading = false,
}: ICheckoutProcess) => {
  const { steps, currentStep, handlePrevious, isMobile } = useCheckoutProcess();

  const visibleSteps = isMobile
    ? steps.filter(
        (step) => step.id === currentStep.id && step.id !== steps.length,
      )
    : steps;

  return (
    <>
      <div className="flex items-center justify-center">
        {visibleSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full font-bold text-white transition-all ${
                step.id === currentStep.id ? "bg-primaryColor" : "bg-gray-300"
              }`}
            >
              {step.id}
            </div>
            <div
              className={`ml-2 text-sm ${
                step.id === currentStep.id
                  ? "font-bold text-primaryColor"
                  : "font-medium text-gray-300"
              }`}
            >
              {step.label}
            </div>
            {step.id < visibleSteps.length && (
              <div className="mx-2 h-0.5 w-12 bg-gray-300" />
            )}
          </div>
        ))}
      </div>
      {children}
      {!(currentStep.id === steps.length) && (
        <div className="flex flex-row justify-between gap-4">
          <Button
            onClick={handlePrevious}
            disabled={currentStep.id === 1 || isLoading}
          >
            Voltar
          </Button>
          <div className="align-end flex flex-row justify-end">
            <Button onClick={onChange} disabled={isLoading}>
              {currentStep.id === steps.length - 1 ? "Finalizar" : "Continuar"}
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutProgress;
