import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
    const token = req?.query?.token || req?.headers?.cookie["x-access-token"] || req?.cookies?.token;
    if (!token)
        return res.sendStatus(403).send("not access Token");

    try {
            const verified = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);
            req.user = verified;
        return next();
    } catch (err) {
        return res.status(401).send("Invalid Token");
    }
};

export const createToken = (payload) => {
    try {
        if (!payload) {
            throw new Error('Payload dont find');
        }
        const accessToken = jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET);
        return accessToken;
    } catch (error) {
        console.error('Error creating token:', error);
        throw new Error('Internal server error');
    }
};