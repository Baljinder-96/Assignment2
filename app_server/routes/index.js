/*Baljinder 8622559
Assignment1*/

var express = require('express');
var router = express.Router();
const ctrlAbout =require("../controllers/about");
const ctrlBook =require("../controllers/book");
/* GET home page. */
router.get('/',ctrlBook.homelist)
router.get('/about',ctrlAbout.about);
router.get('/list',ctrlBook.listdisplay);

module.exports = router;
