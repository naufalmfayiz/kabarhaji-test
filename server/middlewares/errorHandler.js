function errorHandler(err, req, res, next) {
  let status = err.status;
  let message = err.message;

  switch (err.name) {
    case "ZodError":
      status = 400;
      message = err.errors[0].message;
      break;
    case "UniqueEmail":
      status = 400;
      message = "Email already taken";
      break;
    case "InvalidToken":
    case "JsonWebTokenError":
      status = 401;
      message = "Unauthenticated";
      break;
    case "Forbidden":
      status = 403;
      message = "You are not authorized";
      break;
    case "ItemExist":
      status = 400;
      message = "Data already exist";
      break;
    case "BSONError":
    case "NotFound":
      status = 404;
      message = "Data not found.";
      break;
    case "InvalidInput":
      status = 400;
      message = "Email/Password is required";
      break;
    case "InvalidUser":
      status = 401;
      message = "Invalid Email/Password";
      break;

    default:
      status = 500;
      message = "Internal Server Error";
      break;
  }

  return res.status(status).json({ message });
}

module.exports = errorHandler;
