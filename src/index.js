const mongoose = require("mongoose");
const routes = require("./routes");
const swagger = require("./config/swagger");

// 连接数据库
mongoose
    .connect("mongodb://localhost/crayon-restful-service")
    .then(() => console.log("MongoDB 已连接"))
    .catch((err) => console.log(err));

const fastify = require("fastify")({
    logger: true,
});

fastify.register(require("fastify-swagger"), swagger.options);

routes.forEach((route, index) => {
    fastify.route(route);
});

// 启动服务
const start = async () => {
    try {
        await fastify.listen(8100);
        fastify.swagger();
        fastify.log.info(`服务运行端口： ${fastify.server.address().port}`);
    } catch (err) {
        fastify.log.error(err);
        process.exit(1);
    }
};
start();
