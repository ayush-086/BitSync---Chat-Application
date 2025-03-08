import jwt from "jsonwebtoken";

export const generateToken = (userId, res) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // MS
    httpOnly: true, // prevent XSS attacks cross-site scripting attacks
    // We are in local host so we can use http only but in production we will be provided with the secure version of the cookie
    sameSite: "strict", // CSRF attacks cross-site request forgery attacks
    secure: process.env.NODE_ENV !== "development",

    // In local host we can't expect the secure version of the cookie and it's not at all recommended to use the secure version of the cookie in local host because it will not work and itd does not restrict security
  });

  return token;
};