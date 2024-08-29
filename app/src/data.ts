export const innerData = {
  globalType: [],
  apis: [
    {
      id: 1,
      title: "查询宠物详情",
      method: "GET",
      url: "/pet/{petId}",
      params: [
        {
          name: "id",
          type: "string",
          required: true,
          demo: "",
          description: "ID 编号",
        },
      ],
      paths: [{ name: "petId", type: "string", demo: "", description: "" }],
      headers: [{ name: "aa", type: "string", demo: "", description: "" }],
      description: "",
      return: {
        200: {
          title: "成功",
          contentType: "",
          dataType: [],
        },
      },
    },
  ],
};

export type Data = typeof innerData;
