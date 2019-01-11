
export default class Responder {

    constructor(req, res) {
        this.req = req;
        this.res = res;
        this.sendSuccessResponse = this.sendSuccessResponse.bind(this);
        this.sendErrorResponse = this.sendErrorResponse.bind(this);
    }

    sendSuccessResponse(data) {
        this.res.status(200).send({ error: false, status: 200, data });
    }

    sendErrorResponse(message = '', status = 500) {
        this.res.status(status).send({ error: true, status, message });
    }

}
