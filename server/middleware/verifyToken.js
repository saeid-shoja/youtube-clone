import { errorCreator } from "./error.js";
import jwt from "jsonwebtoken";

export const verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  if (!token) return next(errorCreator(404, "your not authenticated"));
  jwt.verify(token, process.env.JWT, (err, data) => {
    if (err) return next(errorCreator(403, "token is not valid"));
    req.user = data;
    next();
  });
};
