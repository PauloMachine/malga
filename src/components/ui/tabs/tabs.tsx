import { useRouter, usePathname } from "next/navigation";
import type { ITab, ITabs } from "./tabs.types";

export default function Tabs({ tabs }: ITabs) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex flex-col rounded-md border border-white sm:flex-row">
      {tabs.map((tab: ITab) => (
        <button
          key={tab.path}
          onClick={() => handleTabClick(tab.path)}
          className={`text-md w-[150px] px-4 py-2 font-medium ${
            pathname?.includes(tab.path)
              ? "rounded-md bg-white text-blue-700"
              : "text-white"
          } `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
