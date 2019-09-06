import mongoose from 'mongoose';
let General = mongoose.model('General');

exports.list_all_generals = async (ctx, next) => {
    try {
        let general = await General.find({});
        ctx.body = general;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

exports.create_a_general = async (ctx, next) => {
    try {
        let new_general = new General(ctx.request.body);
        await new_general.save();
        ctx.body = new_general;
    } catch (err) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

exports.read_a_general = async (ctx, next) => {
    try {
        let general = await General.findById(ctx.params.generalId);
        ctx.body = general;
    } catch (error) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

exports.update_a_general = async (ctx, next) => {
    try {
        let general = await General.findOneAndUpdate({_id: ctx.params.generalId}, ctx.request.body, {new: true});
        ctx.body = general;
    } catch (error) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};

exports.delete_a_general = async (ctx, next) => {
    try {
        let general = await General.remove({_id: ctx.params.generalId});
        ctx.body = {message: 'General successfully deleted'};
    } catch (error) {
        ctx.status = err.status || 500;
        ctx.body = err.message;
    }
};
