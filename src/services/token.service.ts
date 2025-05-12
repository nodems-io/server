import jwt from "jsonwebtoken";
import {User} from "../entities/user.entity";

export default class TokenService {

    generateAccessToken(payload: object) {
        return jwt.sign(payload, process.env.JWT_SECRET!, { expiresIn: '15m' });
    }

    generateRefreshToken(payload: object) {
        return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, { expiresIn: '7d' });
    }

    verifyAccessToken(token: string) {
        return jwt.verify(token, process.env.JWT_SECRET!);
    }

    verifyRefreshToken(token: string) {
        return jwt.verify(token, process.env.JWT_REFRESH_SECRET!);
    }

    async validateAuthToken(token: string) {
        try {
            const decoded = this.verifyAccessToken(token) as { id: number; email: string };

            if (!decoded?.id || !decoded?.email) {
                throw new Error('Invalid token payload');
            }

            const user = await User.findOneBy({ id: decoded.id });

            if (!user) {
                throw new Error('User not found');
            }

            return {
                id: user.id,
                email: user.email,
                name: user.name,
            };
        } catch (err) {
            throw new Error('Invalid token');
        }
    }




}
