import mongoose from 'mongoose';
import config from '../../config.json';
import debug from 'debug';

const log: debug.IDebugger = debug('app:mongooose-service');

class MongooseService {
    private count = 0;
    constructor() {
        this.connectWithRetry();
    }

    getMongoose() {
        return mongoose;
    }

    connectWithRetry = () => {
        mongoose.connect(
            config.mongoDbConnectionString,  {useNewUrlParser: true, useUnifiedTopology: true}
        )
        .then(() => {
            log('MongoDb is connected');
        })
        .catch((err) => {
            log(`MongoDB connection unsuccesful ( will rety #${++this.count} after 5 seconds)`, err);
            setTimeout(this.connectWithRetry, 5 * 1000);
        });
    }
}

export default new MongooseService();