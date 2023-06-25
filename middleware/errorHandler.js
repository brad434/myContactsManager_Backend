const errorHandler = (err, req, res, next) => {
  const statusCode = res.statusCode ? res.statusCode : 500;
  switch (statusCode) {
    case 400:
      res.json({
        title: "Validation Failed",
        message: err.message,
        stackTrace: err.stack,
      });
  }

  res.json({ message: err.message, stackTrace: err.stack });
};

module.exports = errorHandler;
