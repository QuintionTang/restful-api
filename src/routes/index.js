const coffeeController = require("../controllers/coffeeController");
const APIPATH = "/api/";
const VERSION = "v1";
const ENDPOINT = "/coffees";
const getFullPath = (method = "") => `${APIPATH}${VERSION}${ENDPOINT}${method}`;

const routes = [
    {
        method: "GET",
        url: getFullPath(),
        handler: coffeeController.getList,
    },
    {
        method: "GET",
        url: getFullPath("/:id"),
        handler: coffeeController.get,
    },
    {
        method: "POST",
        url: getFullPath(),
        handler: coffeeController.add,
    },
    {
        method: "PUT",
        url: getFullPath("/:id"),
        handler: coffeeController.update,
    },
    {
        method: "DELETE",
        url: getFullPath("/:id"),
        handler: coffeeController.delete,
    },
];

module.exports = routes;
