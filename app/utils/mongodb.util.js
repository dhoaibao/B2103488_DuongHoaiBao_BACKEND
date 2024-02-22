const { MongoClient, ServerApiVersion } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        // if (this.client) return this.client;
        // this.client = await MongoClient.connect(uri);
        // return this.client;
        const client = new MongoClient(uri, {
            serverApi: {
                version: ServerApiVersion.v1,
                strict: true,
                deprecationErrors: true,
            }
        });
        await client.connect();
        await client.db("admin").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
    };
}

module.exports = MongoDB;