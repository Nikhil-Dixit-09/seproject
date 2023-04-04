const express=require('express');
const router=express.Router();
const stockController=require('../controllers/stock_controller');
router.post('/add',stockController.add);
router.get('/fetch',stockController.fetch);
module.exports=router;