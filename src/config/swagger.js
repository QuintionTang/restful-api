exports.options = {
    routePrefix: "/api/v1/helper",
    exposeRoute: true,

    swagger: {
        info: {
            title: "Coffee Restful API",
            description:
                "使用Node.js、MongoDB、Fastify 和 Swagger 构建基于 RESTFUL 风格的咖啡 API",
            version: "1.0.0",
        },
        stripBasePath: true,
        host: "localhost",
        basePath: "/api/v1",
        externalDocs: {
            url: "https://swagger.io",
            description: "更多信息",
        },
        schemes: ["http"],
        consumes: ["application/json"],
        produces: ["application/json"],
    },
};
