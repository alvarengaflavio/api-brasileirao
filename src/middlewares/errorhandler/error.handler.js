class ErrorHandler {
  static handleError(err, req, res) {
    if (err.name === 'BadRequestError') {
      return res.status(400).send({ message: err.message });
    }
    if (err.name === 'CastError') {
      return res.status(400).send({ message: err.message });
    }
    if (err.name === 'ValidationError') {
      return res.status(400).send({ message: err.message });
    }
    if (err.name === 'JsonWebTokenError') {
      return res.status(401).send({ message: err.message });
    }
    if (err.name === 'TokenExpiredError') {
      return res.status(401).send({ message: err.message });
    }
    if (err.name === 'AuthenticationError') {
      return res.status(401).send({ message: err.message });
    }
    if (err.name === 'ForbiddenError') {
      return res.status(403).send({ message: err.message });
    }
    if (err.name === 'NotFoundError') {
      return res.status(404).send({ message: err.message });
    }
    if (err.name === 'ConflictError') {
      return res.status(409).send({ message: err.message });
    }
    if (err.name === 'InternalServerError') {
      return res.status(500).send({ message: err.message });
    }
    return res.status(500).send({ message: err.message });
  }
}

module.exports = { ErrorHandler };
