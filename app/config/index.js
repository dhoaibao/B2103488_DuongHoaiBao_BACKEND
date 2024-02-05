const config = {
    app: {
        port: process.env.PORT || 3000,
    },
    db: {
        uri: process.env.MONGODB_URI || "mongodb+srv://dhbao:Bao25052003@cluster001.vpzhbaf.mongodb.net/?retryWrites=true&w=majority"
        }
};

module.exports = config;
