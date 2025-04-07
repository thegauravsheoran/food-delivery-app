import foodModel from "../models/foodModel.js";

//add food item
const addFood = async (req, res) => {

      let image_filename = `${req.file.filename}`
      const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            image: image_filename,
            category: req.body.category
      })
      try {
            await food.save();
            res.status(200).json({success:true, message: "Food item added successfully", food })
      }
      catch (err) {
            res.status(500).json({success:false, message: "Error adding food item", error: err.message })
      }
};

export { addFood }