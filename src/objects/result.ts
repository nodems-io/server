export class Result<T> {


    public success: boolean = true;

    public message: string = "";

    public code: number = 500;

    public data: T;

    constructor(success: boolean, data: T, code: number = 200, message: string = "") {
        this.data = data;
        this.code = code;
        this.message = message;
        this.success = success;
    }
}

export class SuccessResult extends Result<any> {
    constructor(data: any = { status: true }) {
        super(true, data);
    }
}

export class RedirectResult extends Result<any> {
    constructor(data: any = { status: true }) {
        super(true, data);
    }
}

export class ErrorResult extends Result<any> {
    constructor(message: string,code:number = 500) {
        super(false, {}, code, message);
    }
}
