import Image from "next/image";

const Banner = () => {
  return (
    <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center gap-10">
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
