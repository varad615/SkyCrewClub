import dbconnect from "../../../lib/connectDB";
import Course from "../../../models/Course";

dbconnect();

export default async (req, res) => {
  const {
    query: { id },
    method
  } = req;

  switch (method) {
    case "GET":
      try {
        const course = await Course.findById(id);

        if (!course) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, date: course });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "PUT":
      try {
        const course = await Course.findByIdAndUpdate(id, req.body, {
          new: true,
          runValidators: true
        });
        if (!course) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, date: course });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "DELETE":
      try {
        const deleteCourse = await Course.deleteOne({ _id: id });
        if (!deleteCourse) {
          return res.status(400).json({ success: false });
        }
        res.status(200).json({ success: true, date: {} });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
