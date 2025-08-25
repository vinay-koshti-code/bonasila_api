module.exports = (schema) => (req, res, next) => {
  const result = schema.safeParse( req.body );
  // console.log(req.body)
  if (!result.success) {
    return res.status(400).json({
      errors: result.error.flatten().fieldErrors
    });
  }
  req.validated = result.data;
  next();
};