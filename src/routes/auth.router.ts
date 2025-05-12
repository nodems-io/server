import {FastifyPluginOptions, FastifyReply, FastifyRequest,} from "fastify";
import AuthService from "../services/auth.service";
import TokenService from "../services/token.service";
import {SuccessResult} from "../objects/result";
import {loginSchema, refreshTokenSchema, registerSchema} from "../schemas/auth.schemas";


const authRouter = () => async (app: FastifyPluginOptions) => {
    const authService = new AuthService();
    const tokenService = new TokenService();


    app.post('/register',registerSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        try {
            const { name, email, password } = req.body as any;
            const tokenAndUser = await authService.register(name, email, password);
            return new SuccessResult(tokenAndUser)
        } catch (e) {
            reply.code(400).send({ message: (e as Error).message });
        }
    });

    app.post('/login',loginSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        try {
            const { email, password } = req.body as any;
            const tokenAndUser = await authService.login(email, password);
            return new SuccessResult(tokenAndUser)
        } catch (e) {
            reply.code(401).send({ message: (e as Error).message });
        }
    });

    app.post('/refresh',refreshTokenSchema, async (req:FastifyRequest , reply:FastifyReply) => {
        try {
            const { refreshToken } = req.body as any;
            const tokens = await authService.refresh(refreshToken);
            reply.send(tokens);
        } catch (e) {
            reply.code(401).send({ message: (e as Error).message });
        }
    });
    
};

export default authRouter;


