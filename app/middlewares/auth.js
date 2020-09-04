import { verify as tokenVerify } from 'jsonwebtoken';
import { promisify } from 'util';
import jwtConfig from '../../config/auth';

export default async (request, response, next) => {
  const { authorization } = request.headers;

  if (!authorization) {
    return response.status(401).json({ error: 'Token not provided' });
  }

  const [prefix, token] = authorization.split(' ');

  if (prefix !== 'Bearer' || !token) {
    return response.status(401).json({ error: 'Malformed JWT token' });
  }

  try {
    const decoded = await promisify(tokenVerify)(token, jwtConfig.secret);
    request.user_id = decoded.id;

    return next();
  } catch (error) {
    return response.status(401).json({ error: 'This token is invalid' });
  }
};
