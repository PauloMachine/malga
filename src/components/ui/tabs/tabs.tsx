import { useRouter, usePathname } from "next/navigation";
import type { ITab, ITabs } from "./tabs.types";

export default function Tabs({ tabs }: ITabs) {
  const router = useRouter();
  const pathname = usePathname();

  const handleTabClick = (path: string) => {
    router.push(path);
  };

  return (
    <div className="flex rounded-md border border-white">
      {tabs.map((tab: ITab) => (
        <button
          key={tab.path}
          onClick={() => handleTabClick(tab.path)}
          className={`w-[100px] px-4 py-2 text-sm font-medium ${
            pathname === tab.path
              ? "rounded-md bg-white text-blue-500"
              : "text-white"
          } `}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
