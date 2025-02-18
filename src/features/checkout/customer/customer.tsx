import { useFormContext, Controller } from "react-hook-form";
import { Input, Select } from "@/components/ui";
import type { ICheckout } from "../checkout.types";
import { maskCPF, maskCNPJ, validateDocumentNumber } from "./customer.validate";
import { useEffect } from "react";
import { maskOnlyLetters } from "@/utils/masks";

const Customer = () => {
  const {
    control,
    watch,
    getValues,
    resetField,
    formState: { defaultValues, errors },
  } = useFormContext<ICheckout>();

  const documentTypeOptions = ["CPF", "CNPJ"];
  const documentType = watch("customer.document.type");

  useEffect(() => {
    const currentDocumentType = getValues("customer.document.type");
    if (currentDocumentType !== documentType) {
      resetField("customer.document.number");
    }
  }, [documentType, getValues, resetField]);

  return (
    <div className="flex flex-col gap-7">
      <div className="flex flex-col gap-5 md:flex-row">
        <Controller
          name="customer.firstName"
          control={control}
          rules={{ required: "* O primeiro nome é obrigatório" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Primeiro nome"
              id="customer-firstName"
              error={errors?.customer?.firstName?.message}
              onChange={(e) => field.onChange(maskOnlyLetters(e.target.value))}
            />
          )}
        />
        <Controller
          name="customer.lastName"
          control={control}
          rules={{ required: "* O sobrenome é obrigatório" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Sobrenome"
              id="customer-lastName"
              error={errors?.customer?.lastName?.message}
              onChange={(e) => field.onChange(maskOnlyLetters(e.target.value))}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <Controller
          name="customer.document.type"
          control={control}
          rules={{ required: "* O tipo de documento é obrigatório" }}
          render={({ field }) => (
            <Select
              {...field}
              label="Tipo do documento"
              id="customer-document-type"
              options={documentTypeOptions}
              defaultValue={defaultValues?.customer?.document?.type}
            />
          )}
        />
        <Controller
          name="customer.document.number"
          control={control}
          rules={{
            required: "* O número de documento é obrigatório",
            validate: (value) => validateDocumentNumber(value, documentType),
          }}
          render={({ field }) => (
            <Input
              {...field}
              onChange={(e) =>
                field.onChange(
                  documentType === "CPF"
                    ? maskCPF(e.target.value)
                    : maskCNPJ(e.target.value),
                )
              }
              label="Número do documento"
              id="customer-document-number"
              error={errors?.customer?.document?.number?.message}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <Controller
          name="customer.address.city"
          control={control}
          rules={{ required: "* A cidade é obrigatória" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Cidade"
              id="customer-address-city"
              error={errors?.customer?.address?.city?.message}
              onChange={(e) => field.onChange(maskOnlyLetters(e.target.value))}
            />
          )}
        />
        <Controller
          name="customer.address.country"
          control={control}
          rules={{ required: "* O país é obrigatório" }}
          render={({ field }) => (
            <Input
              {...field}
              label="País"
              id="customer-address-country"
              error={errors?.customer?.address?.country?.message}
              onChange={(e) => field.onChange(maskOnlyLetters(e.target.value))}
            />
          )}
        />
        <Controller
          name="customer.address.state"
          control={control}
          rules={{ required: "* O estado é obrigatório" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Estado"
              id="customer-address-state"
              error={errors?.customer?.address?.state?.message}
              onChange={(e) => field.onChange(maskOnlyLetters(e.target.value))}
            />
          )}
        />
      </div>

      <div className="flex flex-col gap-5 md:flex-row">
        <Controller
          name="customer.address.street"
          control={control}
          rules={{ required: "* A rua é obrigatória" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Rua"
              id="customer-address-street"
              error={errors?.customer?.address?.street?.message}
            />
          )}
        />
        <Controller
          name="customer.address.number"
          control={control}
          rules={{ required: "* O número é obrigatório" }}
          render={({ field }) => (
            <Input
              {...field}
              label="Número"
              id="customer-address-number"
              error={errors?.customer?.address?.number?.message}
            />
          )}
        />
      </div>

      <Controller
        name="customer.address.neighborhood"
        control={control}
        rules={{ required: "* O bairro é obrigatório" }}
        render={({ field }) => (
          <Input
            {...field}
            label="Bairro"
            id="customer-address-neighborhood"
            error={errors?.customer?.address?.neighborhood?.message}
          />
        )}
      />
    </div>
  );
};

export default Customer;
