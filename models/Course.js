const mongoose = require("mongoose");

const CourseScheme = new mongoose.Scheme({
  title: {
    type: String,
    require: [true, "Enter Title"],
    trim,
    maxLength: [40, "Title Cannot be more the 40 character"]
  },
  description: {
    type: String,
    require: [true, "Enter Description"],
    trim,
    maxLength: [200, "Description Cannot be more the 200 character"]
  }
});

model.exports = mongoose.model.Course || mongoose.model("Course", CourseScheme);
