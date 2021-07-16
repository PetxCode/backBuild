const model = require("./model");

exports.getAllEntry = async (req, res) => {
  const newData = await model.find();
  res.status(200).json({
    mgs: "found successfully",
    data: newData,
  });
};

exports.createEntry = async (req, res) => {
  const newData = await model.create(req.body);
  res.status(200).json({
    mgs: "found successfully",
    data: newData,
  });
};

exports.getSingleEntry = async (req, res) => {
  const newData = await model.findById(req.params.id);
  res.status(200).json({
    mgs: "found individual entry successfully",
    data: newData,
  });
};

exports.updateEntry = async (req, res) => {
  const newData = await model.findByIdAndUpdate(req.params.id, req.body);
  res.status(200).json({
    mgs: "updated entry successfully",
    data: newData,
  });
};

exports.deleteEntry = async (req, res) => {
  const newData = await model.findByIdAndRemove(req.params.id, req.body);
  res.status(200).json({
    mgs: "updated entry successfully",
    data: newData,
  });
};
