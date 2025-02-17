import React from "react";
import type { ICheckoutProcess } from "./checkout-process.types";
import { useCheckoutProcess } from "./checkout-process.context";

const CheckoutProgress = ({ children, onChange }: ICheckoutProcess) => {
  const { steps, currentStep, handlePrevious, isMobile } = useCheckoutProcess();

  const visibleSteps = isMobile
    ? steps.filter(
        (step) => step.id === currentStep.id && step.id !== steps.length
      )
    : steps;

  return (
    <>
      <div className="flex items-center justify-center">
        {visibleSteps.map((step, index) => (
          <div key={index} className="flex items-center">
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full text-white font-bold transition-all ${
                step.id === currentStep.id ? "bg-primaryColor" : "bg-gray-300"
              }`}
            >
              {step.id}
            </div>
            <div
              className={`ml-2 text-sm ${
                step.id === currentStep.id
                  ? "text-primaryColor font-bold"
                  : "text-gray-300 font-medium"
              }`}
            >
              {step.label}
            </div>
            {step.id < visibleSteps.length && (
              <div className="w-12 h-0.5 bg-gray-300 mx-2" />
            )}
          </div>
        ))}
      </div>
      {children}
      {!(currentStep.id === steps.length) && (
        <div className="flex flex-row justify-between gap-4">
          <button
            onClick={handlePrevious}
            disabled={currentStep.id === 1}
            className="bg-black uppercase text-white px-4 py-4 md:w-[200px] rounded-md disabled:opacity-10"
          >
            Voltar
          </button>
          <div className="flex flex-row justify-end align-end">
            <button
              onClick={onChange}
              className="bg-black uppercase text-white px-4 py-4 md:w-[200px] rounded-md disabled:opacity-10"
            >
              Continuar
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckoutProgress;
