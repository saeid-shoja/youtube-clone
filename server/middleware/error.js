export const errHandler = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "something went wrong";
  res.status(statusCode).json({
    success: false,
    status: statusCode,
    message: message,
  });
};

export const errorCreator = (status, message) => {
  const err = new Error();
  err.status = status;
  err.message = message;
  return err;
};
