interface CreateServerDto {
    name?: string;
    ipAddress?: string;
    os?: string;
    cpu?: number;
    memory?: number;
    disk?: number;
    status?: string;
    hostname?: string;
    username?: string;
    password?: string;
    sshKey?: string;
    sshPort?: string;
    datacenterId: number;
}


