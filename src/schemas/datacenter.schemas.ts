export const createDatacenterSchema = {
    schema: {
        tags: ["Datacenter"],
        body: {
            type: "object",
            required: ["name", "location"],
            properties: {
                name: { type: "string" },
                location: { type: "string" }
            }
        }
    }
};

export const updateDatacenterSchema = {
    schema: {
        tags: ["Datacenter"],
        body: {
            type: "object",
            properties: {
                name: { type: "string" },
                location: { type: "string" }
            }
        },
        params: {
            type: "object",
            required: ["id"],
            properties: {
                id: { type: "integer" }
            }
        }
    }
};

export const getDatacenterSchema = {
    schema: {
        tags: ["Datacenter"],
        params: {
            type: "object",
            required: ["id"],
            properties: {
                id: { type: "integer" }
            }
        }
    }
};

export const listDatacentersSchema = {
    schema: {
        tags: ["Datacenter"]
    }
};

export const deleteDatacenterSchema = {
    schema: {
        tags: ["Datacenter"],
        params: {
            type: "object",
            required: ["id"],
            properties: {
                id: { type: "integer" }
            }
        }
    }
};
