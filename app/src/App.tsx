import { Menu, Tabs } from "antd";
import DefineApi from "./components/DefineApi";
import React from "react";
import { Data, innerData } from "./data";

function App() {
  const [data, setData] = React.useState<Data>({ globalType: [], apis: [] });
  const [tabIds, setTabIds] = React.useState<number[]>([]);
  const [tabId, setTabId] = React.useState<number>();

  React.useEffect(() => {
    setData(innerData);
    setTabIds([innerData.apis[0].id]);
    setTabId(innerData.apis[0].id);
  }, []);

  const tabs = React.useMemo<Data["apis"]>(() => {
    return tabIds
      .map((tabId) => {
        return data.apis.find((api) => api.id === tabId);
      })
      .filter(Boolean) as Data["apis"];
  }, [tabIds, data]);

  return (
    <div className="flex">
      <Menu
        className="w-48"
        selectedKeys={[tabId + ""]}
        items={data.apis.map((api) => ({
          label: api.title,
          type: "item",
          key: api.id + "",
        }))}
      ></Menu>
      <div className="flex-1 p-4 box-border">
        <Tabs
          items={tabs.map((tab) => ({
            label: tab.title,
            children: <DefineApi />,
            key: tab.id + "",
          }))}
        ></Tabs>
      </div>
    </div>
  );
}

export default App;
