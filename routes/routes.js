const router = require("express").Router();
//const homepageController = require('../controllers/HomepageController');
//const tasksController = require('../controllers/TasksController');
const urlController = require("../controllers/UrlController");

//router.get('/', homepageController.index);
router.get("/", urlController.all);
router.get("/:hash", urlController.getById);
router.post("/", urlController.store);
router.get("/:hash/stats", urlController.estadisticas);

module.exports = router;