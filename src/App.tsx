import Head from "next/head";

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex justify-center align-center">
      <Head>
        <title>Checkout</title>
      </Head>
      {children}
    </div>
  );
};

export default App;
