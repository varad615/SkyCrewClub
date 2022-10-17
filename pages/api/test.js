import dbconnect from "../../lib/connectDB";

dbconnect();

export default async (req, res) => {
  res.json({
    test: "test"
  });
};
