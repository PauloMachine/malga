import Image from "next/image";

const Fallback = ({ status }: { status: string }) => {
  return (
    <div className="flex flex-row justify-center align-center gap-3 mt-10">
      {status === "authorized" ? (
        <Image src="/success.gif" alt="sucesso" width={100} height={100} />
      ) : (
        <Image src="/failed.gif" alt="erro" width={100} height={100} />
      )}
      <div className="flex flex-col">
        <span className="mt-7 font-bold">
          {status === "authorized"
            ? "Pedido realizado!"
            : "Houve um erro ao realizar o seu pedido!"}
        </span>
        <span className="font-medium underline">
          {status === "authorized"
            ? "Acompanhe o status do seu pedido."
            : "Entre em contato com o vendedor."}
        </span>
      </div>
    </div>
  );
};

export default Fallback;
