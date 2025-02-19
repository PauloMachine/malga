import type { ILabelValue } from "./label-value.types";

const LabelValue = ({ label, value }: ILabelValue) => {
  return (
    <div className="flex flex-col gap-2 sm:flex-row">
      <span className="font-bold text-gray-700 sm:after:content-[':']">
        {label}
      </span>
      <span className="mr-3 font-medium text-gray-700">{value}</span>
    </div>
  );
};

export default LabelValue;
