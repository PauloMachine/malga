import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:justify-between">
      <Image
        src="/malga-logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
      />
      <Image
        src="/checkout-process.png"
        alt="Processo"
        width={300}
        height={300}
        priority
      />
    </div>
  );
};

export default Banner;
