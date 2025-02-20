import Image from "next/image";

const Fallback = () => {
  return (
    <div className="flex flex-col items-center justify-start gap-3 md:flex-row">
      <Image src="/images/failed.gif" alt="erro" width={100} height={100} />
      <div className="flex flex-col items-center">
        <span className="font-bold">Transação não encontrada</span>
      </div>
    </div>
  );
};

export default Fallback;
