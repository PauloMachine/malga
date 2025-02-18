import Checkout from "@/features/checkout";
import { CheckoutProcessProvider } from "@/components/checkout-process/checkout-process.context";
import { steps } from "@/features/checkout/checkout.constants";

const CheckoutPage = () => {
  return (
    <CheckoutProcessProvider steps={steps}>
      <Checkout />
    </CheckoutProcessProvider>
  );
};

export default CheckoutPage;
