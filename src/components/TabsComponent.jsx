import { useState } from "react";
import SellMultipleFormWithModul from "./SellMultipleFormWithModul";
import BuyMultipleFormWithMudal from "./BuyMultipleFormWithModul";
import SellAndBuyMultipleFormWithModul from "./SellAndBuyMultipleFormWithModul";

const TabsComponent = () => {
  const [tabIndex, setTabIndex] = useState(0); // Track which tab is active

  const tabs = [
    { id: 0, label: "Sell", component: <SellMultipleFormWithModul /> },
    { id: 1, label: "Buy", component: <BuyMultipleFormWithMudal /> },
    {
      id: 2,
      label: "Sell & Buy",
      component: <SellAndBuyMultipleFormWithModul />,
    },
  ];

  return (
    <div className="  mx-auto rounded-2xl shadow-lg">
      {/* Tabs Navigation */}
      <div className=" flex items-start justify-start rounded-2xl ">
        <div className="flex  md:px-7 bg-white rounded-t-2xl">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setTabIndex(tab.id)}
              className={`flex-1 pb-3 md:text-xl md:font-semibold px-6  md:px-8 py-5 text-center whitespace-nowrap ${
                tabIndex === tab.id
                  ? "border-b-4 border-[#23298B] text-[#23298B]"
                  : "text-gray-500 hover:text-[#1f2249]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>

      {/* Tab Content */}
      <div className="rounded-b-lg">{tabs[tabIndex].component}</div>
    </div>
  );
};

export default TabsComponent;
