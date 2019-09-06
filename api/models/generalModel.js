import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const GeneralSchema = new Schema({
    name: {
        type: String,
        required: 'Enter the name of the general'
    },
    empire: {
        type: String,
        required: 'Enter the kingdom of the general'
    },
});

export default mongoose.model('General', GeneralSchema);
