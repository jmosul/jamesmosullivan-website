class Controller {

    constructor(model) {
        this.model = model;
    }

    index(event, callback) {
        this.model.scan({}, (err, result) => {
            const response = { body: JSON.stringify(result) };

            callback(err, response);
        });
    }
}

module.exports = Controller;
