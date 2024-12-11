import jwt from 'jsonwebtoken'

export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) return next(createError(401,"You are not authenticated!"))
  
  
    jwt.verify(token, process.env.JWT_SECRET, async (err, payload) => {
      if (err) return res.status(401).send("token is invalid "+err)
      req.userId = payload.id;
      req.isSeller = payload.isSeller;
      next()
    });
  };