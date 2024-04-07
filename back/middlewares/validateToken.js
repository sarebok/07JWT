import jwt from 'jsonwebtoken';

export default function validateToken(req, res, next) {
  const bearerToken = req.headers.authorization;
  if (!bearerToken) {
    return res.status(403).json({ error: 'No token provided' });
  }

  const token = bearerToken.split(' ')[1];
  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) {
      console.error('Token verification failed:', err);
      return res.status(403).json({ error: 'Failed to authenticate token' });
    }
    req.user = decoded;
    next();
  });
};