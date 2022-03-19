const coffeeBody = {
    type: "object",
    properties: {
        _id: { type: "string" },
        title: { type: "string", description: "种类名称" },
        ratio: { type: "string" },
        cup: { type: "string" },
        description: { type: "string" },
        __v: { type: "number" },
    },
};
exports.coffeesSchema = {
    add: {
        description: "创建新的咖啡种类",
        tags: ["coffees"],
        summary: "增加新的咖啡种类",
        body: {
            ...coffeeBody,
        },
        response: {
            200: {
                description: "创建成功",
                ...coffeeBody,
            },
        },
    },
    list: {
        description: "获取咖啡种类列表",
        tags: ["coffees"],
        summary: "获取所有的咖啡种类列表",
        response: {
            200: {
                description: "获取成功",
                type: "array",
            },
        },
    },
    detail: {
        description: "获取咖啡种类详情",
        tags: ["coffees"],
        summary: "通过id获取咖啡种类详情",
        querystring: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                },
            },
        },
        response: {
            200: {
                description: "获取成功",
                ...coffeeBody,
            },
        },
    },
    update: {
        description: "更新咖啡种类详情",
        tags: ["coffees"],
        summary: "通过id 更新咖啡种类详情",
        querystring: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                },
            },
        },
        body: {
            ...coffeeBody,
        },
        response: {
            200: {
                description: "更新成功",
                ...coffeeBody,
            },
        },
    },
    delete: {
        description: "删除咖啡种类详情",
        tags: ["coffees"],
        summary: "通过id删除咖啡种类详情",
        querystring: {
            type: "object",
            properties: {
                id: {
                    type: "string",
                },
            },
        },
        response: {
            200: {
                description: "删除成功",
                type: "string",
            },
        },
    },
};
