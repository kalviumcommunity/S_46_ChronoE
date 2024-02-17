const Theorie = require("../model/theoryModel");
const mongoose = require("mongoose");

//Get all theories
const getTheories = async (req, res) => {
  const theories = await Theorie.find({}).sort({ createdAt: -1 });

  res.status(200).json(theories);
};

//Create a new theory
const createTheory = async (req, res) => {
  const { theoryDetails } = req.body;

  try {
    const theorie = await Theorie.create({ theoryDetails });
    res.status(200).json(theorie);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};


// Delete theorie

const deleteTheory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Theory" });
  }

  const theorie = await Theorie.findOneAndDelete({ _id: id });
  if (!theorie) {
    return res.status(400).json({ error: "No such Theory" });
  }

  res.status(200).json(theorie);
};

// Update theory

const updateTheory = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such Theory" });
  }

  const theorie = await Theorie.findByIdAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!theorie) {
    return res.status(400).json({ error: "No such Theory" });
  }

  res.status(200).json(theorie);
};

// Exporting
module.exports = {
  createTheory,
  getTheories,
  deleteTheory,
  updateTheory,
};
