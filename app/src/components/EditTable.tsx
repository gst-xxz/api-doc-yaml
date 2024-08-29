import { Input, Select } from "antd";

const columns = [
  {
    title: "参数名",
    name: "name",
    placeholder: "请输入参数名",
  },
  {
    title: "类型",
    name: "type",
    type: "Select",
    options: [
      { label: "String", value: "string" },
      { label: "Number", value: "number" },
    ],
    placeholder: "请输入类型",
  },
  {
    title: "说明",
    name: "desc",
    placeholder: "请输入参数名的说明",
  },
  {
    title: "参数值",
    name: "value",
  },
];

const EditTable: React.FC = () => {
  return (
    <table className="w-full border-collapse border-t border-l border-slate-auto-300">
      <tr className="text-left leading-8 h-8">
        {columns.map((column) => (
          <th key={column.name} className="px-2 border-b border-r">
            {column.title}
          </th>
        ))}
      </tr>
      <tr className="border-b border-l border-r">
        {columns.map((column) => (
          <td className="border-r" key={column.name}>
            {column.type === "Select" ? (
              <Select
                options={column.options}
                className="w-full"
                variant="borderless"
                placeholder={column.placeholder}
              />
            ) : (
              <Input
                variant="borderless"
                className="rounded-none"
                placeholder={column.placeholder}
              />
            )}
          </td>
        ))}
      </tr>
    </table>
  );
};

export default EditTable;
