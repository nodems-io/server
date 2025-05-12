export const loginSchema = {
    schema: {
        tags: ['Auth'],
        body: {
            type: 'object',
            required: ['email', 'password'],
            properties: {
                email: {type: 'string', format: 'email'},
                password: {type: 'string', minLength: 6}
            }
        },
    }
};

export const refreshTokenSchema = {
    schema: {
        tags: ['Auth'],
        body: {
            type: 'object',
            required: ['refreshToken'],
            properties: {
                refreshToken: {type: 'string'},
            }
        },
        response: {
            200: {
                type: 'object',
                properties: {
                    token: {type: 'string'}
                }
            }
        }
    }
};

export const registerSchema = {
    schema: {
        tags: ['Auth'],
        body: {
            type: 'object',
            required: ['name', 'email', 'password'],
            properties: {
                name: {type: 'string'},
                email: {type: 'string', format: 'email'},
                password: {type: 'string', minLength: 6}
            }

        },
        response: {
            200: {
                type: 'object',
                properties: {
                }
            }
        }
    }
};