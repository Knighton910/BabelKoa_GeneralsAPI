export default function routes(router) {
    let generalController = require('../controllers/generalController');

    router.get('/general', generalController.list_all_generals);
    router.post('/general', generalController.create_a_general);

    router.get('/general/:generalId', generalController.read_a_general);
    router.put('/general/:generalId', generalController.update_a_general);
    router.delete('/general/:generalId', generalController.delete_a_general);
};
