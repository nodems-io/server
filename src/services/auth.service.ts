
import {User} from "../entities/user.entity";
import TokenService from "./token.service";

let bcrypt = require('bcryptjs');

export default class AuthService {

    private tokenService = new TokenService();
    private repo = User;

    async register(name: string, email: string, password: string) {
        const existing = await this.repo.findOneBy({ email });
        if (existing) throw new Error('Email already in use');

        const hashed = await bcrypt.hash(password, 10);
        const user = this.repo.create({ name, email, password: hashed });
        await this.repo.save(user);

        return {tokens: this.issueTokens(user),user};
    }

    async login(email: string, password: string) {
        const user = await this.repo.findOneBy({ email });
        if (!user) throw new Error('Invalid credentials');

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) throw new Error('Invalid credentials');

        const { password:passwordSafe, ...safeUser } = user;

        return {tokens: this.issueTokens(user),safeUser};
    }

    private issueTokens(user: User) {
        const payload = { id: user.id, email: user.email };

        const accessToken = this.tokenService.generateAccessToken(payload);
        const refreshToken = this.tokenService.generateRefreshToken(payload);


        return { accessToken, refreshToken };
    }

    async refresh(refreshToken: string) {
        try {
            const payload = this.tokenService.verifyRefreshToken(refreshToken) as { id: number; email: string };
            const user = await this.repo.findOneBy({ id: payload.id });
            if (!user) throw new Error('User not found');
            return this.issueTokens(user);
        } catch {
            throw new Error('Invalid refresh token');
        }
    }

}
