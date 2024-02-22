const { MongoClient, ServerApiVersion } = require('mongodb');

class MongoDB {
    static connect = async (uri) => {
        const clientBAO = new MongoClient(uri, {
            serverApi: {
              version: ServerApiVersion.v1,
              strict: true,
              deprecationErrors: true,
            }
          });
        
        this.client = await clientBAO.connect(uri);
        await clientBAO.db("test").command({ ping: 1 });
        console.log("Pinged your deployment. You successfully connected to MongoDB!");
        return clientBAO;
    };
}

module.exports = MongoDB;


