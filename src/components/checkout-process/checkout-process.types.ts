export interface ICheckoutProcess {
  children: React.ReactNode;
  onChange: () => void;
}

export type TStep = {
  id: number;
  label: string;
};

export interface ICheckoutProcessContext {
  currentStep: TStep;
  setCurrentStep: React.Dispatch<React.SetStateAction<TStep>>;
  steps: TStep[];
  isMobile: boolean;
  handleNext: () => void;
  handlePrevious: () => void;
}

export interface ICheckoutProcessProvider {
  children: React.ReactNode;
  steps: TStep[];
}
