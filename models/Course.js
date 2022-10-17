const mongoose = require("mongoose");

const CourseScheme = new mongoose.Schema({
  title: {
    type: String,
    require: [true, "Enter Title"],
    maxlength: [40, "Title Cannot be more the 40 character"]
  },
  description: {
    type: String,
    require: [true, "Enter Description"],
    maxlength: [200, "Description Cannot be more the 200 character"]
  }
});

module.exports = mongoose.model.Course || mongoose.model("Course", CourseScheme);
