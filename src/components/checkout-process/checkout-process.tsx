import React from "react";
import type { ICheckoutProcess } from "./checkout-process.types";
import { useCheckoutProcess } from "./checkout-process.context";
import { Button } from "../ui";

const CheckoutProgress = ({
  children,
  onChange,
  isLoading = false,
}: ICheckoutProcess) => {
  const { steps, currentStep, handlePrevious } = useCheckoutProcess();

  return (
    <>
      <div className="flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`flex h-8 w-8 items-center justify-center rounded-full font-bold text-white transition-all ${
                step.id === currentStep.id
                  ? "bg-black"
                  : "hidden bg-gray-300 md:flex"
              }`}
            >
              {step.id}
            </div>
            <div
              className={`ml-2 text-[13px] ${
                step.id === currentStep.id
                  ? "font-bold text-black"
                  : "hidden font-medium text-gray-400 md:flex"
              }`}
            >
              {step.label}
            </div>
            {step.id < steps.length && (
              <div
                className={`mx-2 h-[2px] w-12 bg-gray-300 ${step.id === currentStep.id ? "hidden md:flex" : "hidden md:flex"}`}
              />
            )}
          </div>
        ))}
      </div>
      {children}
      {!(currentStep.id === steps.length) && (
        <div className="flex flex-col justify-between gap-4 md:flex-row">
          <Button
            onClick={handlePrevious}
            disabled={currentStep.id === 1 || isLoading}
          >
            Voltar
          </Button>
          <Button onClick={onChange} disabled={isLoading}>
            {currentStep.id === steps.length - 1 ? "Finalizar" : "Continuar"}
          </Button>
        </div>
      )}
    </>
  );
};

export default CheckoutProgress;
