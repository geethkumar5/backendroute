const jwt = require('jsonwebtoken');
 
const generateTokens = (user) => {
 
    const accessToken = jwt.sign({ id: user.id,name:user.name, email: user.email,password:user.password }, process.env.JWT_SECRET, { expiresIn: '1d' });
    const refreshToken = jwt.sign({ id: user.id,name:user.name, email: user.email,password:user.password  }, process.env.JWT_REFRESH_SECRET, { expiresIn: '7d' });
 
    return { accessToken, refreshToken };
};

console.log("JWT_SECRET:", process.env.JWT_SECRET);
console.log("JWT_REFRESH_SECRET:", process.env.JWT_REFRESH_SECRET);

 
const verifyAccessToken = (token) => jwt.verify(token, process.env.JWT_SECRET);
const verifyRefreshToken = (token) => jwt.verify(token, process.env.JWT_REFRESH_SECRET);
 
module.exports = {
    generateTokens,
    verifyAccessToken,
    verifyRefreshToken,
};