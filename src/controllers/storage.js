const Storage = require('../models/storage');
// const Schema = require('../schema/validate');
const axios = require('axios').default;
exports.createOne = async(req,res,next) =>{

    try{
        const val = await axios.get('https://prashanth-b-c.github.io/json/query_data_performace_high_latacy_change.json');
        console.log("fetched");
       console.log(val)
        const data = val["data"];
        console.log(data.length);
        for(var i=0; i < data.length; i++)
        {
            console.log(data[i]);
            
            var result = await Storage.create(data[i]);
            console.log(result);
            
        }
        res.send({message: "sucessfully inserted"});
    }
    catch(error){
        console.log(error);
        res.status(500).json("error");
    }

};
    exports.getAll = async(req,res,next) =>{
        try{
            const result= await Storage.findAll();
            res.status(200).json(result);
           
        } catch (error) {
            console.log('An error occured', error);
            res.status(200).json(error);
        }

    };
