const boom = require("boom");

// 导入数据 Models
const Coffee = require("../models/Coffee");

// 获取所有的 Coffees
exports.getList = async (req, res) => {
    try {
        const coffees = await Coffee.find();
        return coffees;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// 通过ID获取单个Coffee信息
exports.get = async (req, res) => {
    try {
        const id = req.params.id;
        const coffee = await Coffee.findById(id);
        return coffee;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// 新增
exports.add = async (req, res) => {
    try {
        const coffee = new Coffee(req.body);
        return coffee.save();
    } catch (err) {
        throw boom.boomify(err);
    }
};

// 更新
exports.update = async (req, res) => {
    try {
        const id = req.params.id;
        const coffee = req.body;
        const { ...updateData } = coffee;
        const update = await Coffee.findByIdAndUpdate(id, updateData, {
            new: true,
        });
        return update;
    } catch (err) {
        throw boom.boomify(err);
    }
};

// 删除
exports.delete = async (req, res) => {
    try {
        const id = req.params.id;
        const coffee = await Coffee.findByIdAndRemove(id);
        return coffee;
    } catch (err) {
        throw boom.boomify(err);
    }
};
