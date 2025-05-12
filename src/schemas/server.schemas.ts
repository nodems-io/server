export const createServerSchema = {
    schema: {
        tags: ["Server"],
        body: {
            type: "object",
            required: ["datacenterId"],
            properties: {
                name: { type: "string" },
                ipAddress: { type: "string" },
                os: { type: "string" },
                cpu: { type: "integer" },
                memory: { type: "integer" },
                disk: { type: "integer" },
                status: { type: "string" },
                hostname: { type: "string" },
                username: { type: "string" },
                password: { type: "string" },
                sshKey: { type: "string" },
                sshPort: { type: "string" },
                datacenterId: { type: "integer" }
            }
        }
    }
};

export const updateServerSchema = {
    schema: {
        tags: ["Server"],
        body: {
            type: "object",
            properties: {
                name: { type: "string" },
                ipAddress: { type: "string" },
                os: { type: "string" },
                cpu: { type: "integer" },
                memory: { type: "integer" },
                disk: { type: "integer" },
                status: { type: "string" },
                hostname: { type: "string" },
                username: { type: "string" },
                password: { type: "string" },
                sshKey: { type: "string" },
                sshPort: { type: "string" },
                datacenterId: { type: "integer" }
            }
        }
    }
};

export const getServerSchema = {
    schema: {
        tags: ["Server"],
        params: {
            type: "object",
            required: ["id"],
            properties: {
                id: { type: "integer" }
            }
        }
    }
};

export const listServersSchema = {
    schema: {
        tags: ["Server"]
    }
};

export const deleteServerSchema = {
    schema: {
        tags: ["Server"],
        params: {
            type: "object",
            required: ["id"],
            properties: {
                id: { type: "integer" }
            }
        }
    }
};
