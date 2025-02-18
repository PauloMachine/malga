import "react-credit-cards-2/dist/es/styles-compiled.css";
import Cards from "react-credit-cards-2";
import { useFormContext, Controller } from "react-hook-form";
import { Input, Select } from "@/components/ui";
import type { ICheckout } from "../checkout.types";
import {
  maskCardNumber,
  maskExpiryDate,
  validateCardNumber,
  validateCvv,
  validateExpirationDate,
  validateHolderName,
} from "./payment-method.validate";
import { maskOnlyLetters } from "@/utils/masks";

const PaymentMethod = () => {
  const {
    control,
    watch,
    formState: { defaultValues, errors },
  } = useFormContext<ICheckout>();

  const installmentsOptions = [1, 2, 3];

  return (
    <>
      <Cards
        locale={{ valid: "Válido até" }}
        placeholders={{ name: "Nome do titular" }}
        number={watch("paymentMethod.card.number") || ""}
        name={watch("paymentMethod.card.holderName") || ""}
        expiry={watch("paymentMethod.card.expirationDate") || ""}
        cvc={watch("paymentMethod.card.cvv") || ""}
      />

      <div className="flex flex-col gap-7">
        <div className="flex flex-col gap-5 md:flex-row">
          <Controller
            name="paymentMethod.card.holderName"
            control={control}
            rules={{
              required: "* O nome do titular é obrigatório",
              validate: validateHolderName,
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Nome do titular"
                id="paymentMethod-card-holderName"
                error={errors?.paymentMethod?.card?.holderName?.message}
                onChange={(e) =>
                  field.onChange(maskOnlyLetters(e.target.value))
                }
              />
            )}
          />

          <Controller
            name="paymentMethod.card.number"
            control={control}
            rules={{
              required: "* O número do cartão é obrigatório",
              validate: validateCardNumber,
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Número do cartão"
                id="paymentMethod-card-number"
                error={errors?.paymentMethod?.card?.number?.message}
                onChange={(e) => field.onChange(maskCardNumber(e.target.value))}
              />
            )}
          />
        </div>

        <div className="flex flex-col gap-5 md:flex-row">
          <Controller
            name="paymentMethod.card.expirationDate"
            control={control}
            rules={{
              required: "* A data de validade é obrigatória",
              validate: validateExpirationDate,
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Data de validade (MM/YYYY)"
                id="paymentMethod-card-expirationDate"
                error={errors?.paymentMethod?.card?.expirationDate?.message}
                onChange={(e) => field.onChange(maskExpiryDate(e.target.value))}
              />
            )}
          />

          <Controller
            name="paymentMethod.card.cvv"
            control={control}
            rules={{
              required: "* O código de verificação é obrigatório",
              validate: validateCvv,
            }}
            render={({ field }) => (
              <Input
                {...field}
                label="Código de verificação"
                id="paymentMethod-card-cvv"
                error={errors?.paymentMethod?.card?.cvv?.message}
              />
            )}
          />

          <Controller
            name="paymentMethod.card.installments"
            control={control}
            rules={{
              required: "* O número de parcelas é obrigatório",
            }}
            render={({ field }) => (
              <Select
                {...field}
                label="Parcelas"
                id="paymentMethod-card-installments"
                options={installmentsOptions}
                defaultValue={defaultValues?.paymentMethod?.card?.installments}
                error={errors?.paymentMethod?.card?.installments?.message}
              />
            )}
          />
        </div>
      </div>
    </>
  );
};

export default PaymentMethod;
