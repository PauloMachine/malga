import Head from "next/head";
import { Tabs } from "./components/ui";

const App = ({ children }: { children: React.ReactNode }) => {
  const tabs = [
    { label: "Checkout", path: "/checkout" },
    { label: "Admin", path: "/admin" },
  ];

  return (
    <div className="flex flex-col items-center justify-center gap-[50px]">
      <Head>
        <title>Malga</title>
      </Head>
      <Tabs tabs={tabs} />
      {children}
    </div>
  );
};

export default App;
