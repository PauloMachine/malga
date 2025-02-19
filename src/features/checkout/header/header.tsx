import Image from "next/image";

const Header = () => {
  return (
    <div className="flex flex-col-reverse items-center justify-center gap-10 md:flex-row md:justify-between">
      <Image
        src="/images/malga-logo.svg"
        alt="Logo"
        width={100}
        height={100}
        priority
        unoptimized
      />
      <Image
        src="/images/checkout-process.png"
        alt="Processo"
        width={300}
        height={300}
        priority
        unoptimized
      />
    </div>
  );
};

export default Header;
