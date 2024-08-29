import { Button, Card, Input, Select, Space, Tabs } from "antd";
import React from "react";
import EditTable from "./EditTable";
import Pane from "./Pane";

const methods = [
  { label: "GET", value: "GET" },
  { label: "POST", value: "POST" },
];

const DefineApi = () => {
  const [api, setApi] = React.useState({
    method: "GET",
  });

  return (
    <Card bordered={false}>
      <div className="flex flex-col gap-4">
        <Space.Compact>
          <Select
            className="w-20 flex-shrink-0"
            defaultValue={methods[0].value}
            options={methods}
            value={api.method}
          />
          <Input placeholder="接口地址" />
          <Button>保存接口</Button>
        </Space.Compact>
        <div className="flex flex-col gap-y-2">
          <div className="font-bold">请求参数</div>
          <Tabs
            items={[
              {
                label: "Params",
                key: "Params",
                children: (
                  <>
                    <Pane title="Query 参数">
                      <EditTable></EditTable>
                    </Pane>
                    <div className="h-2"></div>
                    <Pane title="Path参数">
                      <EditTable></EditTable>
                    </Pane>
                  </>
                ),
              },
              {
                label: "Body",
                key: "Body",
                children: (
                  <>
                    <div className="mb-2 flex gap-x-2">
                      <Button size="small">form-data</Button>
                      <Button size="small">x-www-form-urlencoded</Button>
                    </div>
                    <EditTable></EditTable>
                  </>
                ),
              },
              {
                label: "Headers",
                key: "Headers",
                children: (
                  <>
                    <EditTable></EditTable>
                  </>
                ),
              },
              {
                label: "描述",
                key: "描述",
                children: (
                  <>
                    <Input placeholder="请输入接口描述" />
                  </>
                ),
              },
              {
                label: "日志",
                key: "log",
                children: (
                  <>
                    <Input placeholder="请输入接口描述" />
                  </>
                ),
              },
            ]}
          ></Tabs>
        </div>
        <div className="">
          <div className="font-bold mb-2">返回响应</div>

          <Tabs
            type="card"
            tabBarExtraContent={<Button>新增</Button>}
            items={[
              {
                label: "200",
                key: "200",
                children: (
                  <>
                    <div className="">HTTP 状态码:</div>
                    <div className="">名称:</div>
                    <div className="">内容格式:</div>
                    <div className="">数据结构</div>
                  </>
                ),
              },
              {
                label: "201",
                key: "201",
                children: (
                  <>
                    <div className="">状态码</div>
                    <div className="">名称</div>
                    <div className="">内容格式:</div>
                    <div className="">数据结构</div>
                  </>
                ),
              },
            ]}
          ></Tabs>
        </div>
      </div>
    </Card>
  );
};

export default DefineApi;
