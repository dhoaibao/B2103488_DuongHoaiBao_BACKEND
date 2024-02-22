const { MongoClient, ServerApiVersion } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        }, (err, connectedClient) => {
            if (err) {
                throw err;
            }
            this.client = connectedClient.db("test");
        });
        return this.client;
    };
}

module.exports = MongoDB;