const { MongoClient } = require("mongodb");

class MongoDB {
    static connect = async (uri) => {
        if (this.client) return this.client;
        this.client = await MongoClient.connect(uri,{
            useNewUrlParser: true,
            useUnifiedTopology: true
        },(err,connectedClient) => {
            if(err){
                throw err;
            }
            //connectedClient will be the connected instance of MongoClient
            this.client = connectedClient.db("test");
            //now you can write queries
            
        
        });
        return this.client;
    };
}

module.exports = MongoDB;