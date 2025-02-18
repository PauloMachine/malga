import { useCallback, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useCheckoutProcess } from "@/components/checkout-process/checkout-process.context";
import { useGetItems } from "@/hooks/items.hook";
import { usePostTransaction } from "@/hooks/transactions.hook";
import CheckoutProgress from "@/components/checkout-process";
import PaymentMethod from "./payment-method";
import Customer from "./customer";
import Items from "./items";
import Fallback from "./fallback";
import Banner from "./banner";
import type { ICheckout } from "./checkout.types";
import { STEP } from "./checkout.constants";

const Checkout = () => {
  const [status, setStatus] = useState<string | undefined>("");
  const { currentStep, handleNext } = useCheckoutProcess();
  const { data, isPending: itemsIsPending } = useGetItems();
  const {
    mutateAsync: mutatePostTransaction,
    isPending: transactionIsPending,
  } = usePostTransaction();

  const methods = useForm<ICheckout>({
    defaultValues: {
      amount: data?.amount ?? 0,
      items: data?.items ?? [],
      customer: { document: { type: "CPF" } },
      paymentMethod: { type: "card", card: { installments: 1 } },
    },
  });

  const handleTransaction = async (formData: ICheckout) => {
    const transaction = await mutatePostTransaction(formData);
    setStatus(transaction.status);
    handleNext();
  };

  const submitCustomer = methods.handleSubmit(handleNext);
  const submitPaymentMethod = methods.handleSubmit(handleTransaction);

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
      <div className="flex max-w-[450px] flex-col justify-center gap-10 rounded-md bg-white p-10 md:max-w-[850px]">
        <Banner />
        <CheckoutProgress
          onChange={handleNextProcess}
          isLoading={itemsIsPending || transactionIsPending}
        >
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
