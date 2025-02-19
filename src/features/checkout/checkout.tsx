import { useCallback, useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useCheckoutProcess } from "@/components/checkout-process/checkout-process.context";
import { useGetItems } from "@/hooks/items.hook";
import {
  useGetTransactions,
  usePostTransaction,
} from "@/hooks/transactions.hook";
import CheckoutProgress from "@/components/checkout-process";
import PaymentMethod from "./payment-method";
import Customer from "./customer";
import Items from "./items";
import Fallback from "./fallback";
import Header from "./header";
import type { ICheckout } from "../../types/checkout.types";
import { STEP } from "./checkout.constants";
import { Card } from "@/components/ui";

const Checkout = () => {
  const [status, setStatus] = useState<string | undefined>("");
  const { refetch: RefetchTransactions } = useGetTransactions();
  const { currentStep, handleNext } = useCheckoutProcess();
  const { isPending: itemsIsPending } = useGetItems();
  const {
    mutateAsync: mutatePostTransaction,
    isPending: transactionIsPending,
  } = usePostTransaction();

  const methods = useForm<ICheckout>({
    defaultValues: {
      customer: { document: { type: "CPF" } },
      paymentMethod: { type: "card", card: { installments: 1 } },
    },
  });

  const handleTransaction = async (formData: ICheckout) => {
    const transaction = await mutatePostTransaction(formData);
    setStatus(transaction.status);
    handleNext();
    RefetchTransactions();
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
      <Card>
        <Header />
        <CheckoutProgress
          onChange={handleNextProcess}
          isLoading={itemsIsPending || transactionIsPending}
        >
          {currentStep.id === STEP.ITEMS_ID && <Items />}
          {currentStep.id === STEP.CUSTOMER_ID && <Customer />}
          {currentStep.id === STEP.PAYMENT_METHOD_ID && <PaymentMethod />}
          {currentStep.id === STEP.COMPLETE_ID && <Fallback status={status} />}
        </CheckoutProgress>
      </Card>
    </FormProvider>
  );
};

export default Checkout;
