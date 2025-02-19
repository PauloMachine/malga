export interface ICheckoutProcess {
  children: React.ReactNode;
  onChange: () => void;
  isLoading?: boolean;
}

export type TStep = {
  id: number;
  label: string;
};

export interface ICheckoutProcessContext {
  currentStep: TStep;
  setCurrentStep: React.Dispatch<React.SetStateAction<TStep>>;
  steps: TStep[];
  handleNext: () => void;
  handlePrevious: () => void;
}

export interface ICheckoutProcessProvider {
  children: React.ReactNode;
  steps: TStep[];
}
