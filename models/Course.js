const mongoose = require("mongoose");

const CourseScheme = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Enter Title"],
    maxlength: [40, "Title Cannot be more the 40 character"]
  },
  subtitle: {
    type: String,
    require: [true, "Enter subtitle"],
    maxlength: [40, "Subtitle Cannot be more the 40 character"]
  },
  price: {
    type: String,
    require: [true, "Enter price"],
    maxlength: [5, "price Cannot be more the 5 character"]
  },
  description: {
    type: String,
    require: [true, "Enter Description"],
    maxlength: [200, "Description Cannot be more the 200 character"]
  },
  category: {
    type: String,
    require: [true, "Enter category"],
    maxlength: [100, "Category Cannot be more the 100 character"]
  },
  user: {
    type: String,
    require: [true, "Need Auth"]
  }
});

module.exports =
  mongoose.models.Course || mongoose.model("Course", CourseScheme);
