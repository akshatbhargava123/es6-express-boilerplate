import Responder from "../utils/Responder";

export default class UserController {

	constructor(db) {
		this.db = db;

		this.create == this.create.bind(this);
		this.list = this.list.bind(this);
	}

	create() {
		const responder = new Responder(req, res);

	}

	list(req, res) {
		const responder = new Responder(req, res);

		responder.sendSuccessResponse({ message: 'Welcome User!' });
	}

}