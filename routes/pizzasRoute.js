const { Message } = require("@material-ui/icons");
const express = require("express");
const router = express.Router();
// const Pizza = require('..models/pizzaModel');

router.get("getallpizzas",async(req,res)=>{
    try{
        const pizzas = await Pizza.find({})
        res.send(pizzas);
    }
    catch(error){
        return res.status  (404).json({Message:error});
    }
});

module.exports = router;