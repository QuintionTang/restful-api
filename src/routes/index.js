const coffeeController = require("../controllers/coffeeController");
const { coffeesSchema } = require("../docs/coffees");
const APIPATH = "/api/";
const VERSION = "v1";
const ENDPOINT = "/coffees";
const getFullPath = (method = "") => `${APIPATH}${VERSION}${ENDPOINT}${method}`;

const routes = [
    {
        method: "GET",
        url: getFullPath(),
        handler: coffeeController.getList,
        schema: coffeesSchema.list,
    },
    {
        method: "GET",
        url: getFullPath("/:id"),
        handler: coffeeController.get,
        schema: coffeesSchema.detail,
    },
    {
        method: "POST",
        url: getFullPath(),
        handler: coffeeController.add,
        schema: coffeesSchema.add,
    },
    {
        method: "PUT",
        url: getFullPath("/:id"),
        handler: coffeeController.update,
        schema: coffeesSchema.update,
    },
    {
        method: "DELETE",
        url: getFullPath("/:id"),
        handler: coffeeController.delete,
        schema: coffeesSchema.delete,
    },
];

module.exports = routes;
