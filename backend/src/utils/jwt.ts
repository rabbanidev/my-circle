import jwt, { JwtPayload, Secret, SignOptions } from "jsonwebtoken";

const generateToken = (
  payload: object,
  secret: Secret,
  expiresTime: string,
): string => {
  const token = jwt.sign(payload, secret, {
    expiresIn: expiresTime,
  } as SignOptions);
  return token;
};

const verifyToken = (token: string, secret: Secret): JwtPayload => {
  return jwt.verify(token, secret) as JwtPayload;
};

export const jwtHelpers = {
  generateToken,
  verifyToken,
};
