import mongooseService from '../services/mongoose.service';

const Schema = mongooseService.getMongoose().Schema;

const schemaOptions = {
    timestamps: { createdAt: 'create_date', updateAt: 'last_login' },
    id: true
}

const userSchema = new Schema(
    {
        device_id: String,
        create_date: Date
    },
    schemaOptions
);

export default mongooseService.getMongoose().model('Users', userSchema);