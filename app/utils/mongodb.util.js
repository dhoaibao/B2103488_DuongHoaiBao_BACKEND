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
        return clientBAO;
    };
}

module.exports = MongoDB;


