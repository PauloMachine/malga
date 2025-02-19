import Head from "next/head";
import { Tabs } from "./components/ui";

const App = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Checkout", path: "/checkout" },
    { label: "Transações", path: "/transactions" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[40px]">
      <Head>
        <link rel="icon" href="/images/malga-icon.ico" />
        <title>Malga</title>
      </Head>
      <Tabs tabs={tabs} />
      {children}
    </div>
  );
};

export default App;
