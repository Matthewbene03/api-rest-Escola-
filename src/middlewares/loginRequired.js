import jwt from "jsonwebtoken";

export default (req, res, next) => {
  const { authorization } = req.headers;

  console.log("Authorization: " + authorization);

  if (!authorization) {
    return res.status(400).json({
      erros: ["Login required!"],
    });
  }

  const [, token] = authorization.split(" ");

  try {
    const dados = jwt.verify(token, process.env.TOKEN_SECRET);
    const {id, email} = dados;
    req.userId = id;
    req.userEmail = email;
    return next();
  } catch (e) {
    return res.status(400).json({
      erros: ["Token expirado ou inválido!"],
    });
  }
};
