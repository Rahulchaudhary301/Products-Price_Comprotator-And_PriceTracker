const express = require("express");
const Router = express.Router();
const Scrab=require('../Controller/Controller')
const Products=require('../Controller/Product/Product')

Router.post('/data',Scrab.SrcbeData)

Router.post('/amo',Scrab.AmonZone)


Router.post('/my',Scrab.Ebay)


Router.post('/pro',Products.Products)

module.exports = Router;

