import { useCallback } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useCheckoutProcess } from "@/components/checkout-process/checkout-process.context";
import CheckoutProgress from "@/components/checkout-process";
import PaymentMethod from "./payment-method";
import Customer from "./customer";
import Items from "./items";
import Fallback from "./fallback";
import Banner from "./banner";
import type { ICheckout } from "./checkout.types";
import { STEP } from "./checkout.constants";

const Checkout = () => {
  const { currentStep, handleNext } = useCheckoutProcess();
  const methods = useForm<ICheckout>({
    defaultValues: {
      customer: {
        document: {
          type: "CPF",
        },
      },
      paymentMethod: {
        type: "card",
        card: {
          installments: 1,
        },
      },
    },
  });

  const status = "authorized";

  const onSubmit = (data: ICheckout) => {
    handleNext();
    console.log(data);
    //fetch
  };

  const submitCustomer = methods.handleSubmit(handleNext);
  const submitPaymentMethod = methods.handleSubmit(onSubmit);

  const handleNextProcess = useCallback(() => {
    if (currentStep.id === STEP.CUSTOMER_ID) {
      submitCustomer();
    } else if (currentStep.id === STEP.PAYMENT_METHOD_ID) {
      submitPaymentMethod();
    } else {
      handleNext();
    }
  }, [currentStep, handleNext, submitCustomer, submitPaymentMethod]);

  return (
    <FormProvider {...methods}>
      <div className="flex flex-col justify-center align-center p-5 gap-10 w-full">
        <Banner />
        <CheckoutProgress onChange={handleNextProcess}>
          {currentStep.id === STEP.ITEMS_ID && <Items />}
          {currentStep.id === STEP.CUSTOMER_ID && <Customer />}
          {currentStep.id === STEP.PAYMENT_METHOD_ID && <PaymentMethod />}
          {currentStep.id === STEP.COMPLETE_ID && <Fallback status={status} />}
        </CheckoutProgress>
      </div>
    </FormProvider>
  );
};

export default Checkout;
