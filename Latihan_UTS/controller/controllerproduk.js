const Produk = require("../models/produk");

const produkIndex = async(req,res) => {
    try{
        const produk = await Produk.find({});
        res.status(200).json({message: 'Success'}).json(produk);
        
    }catch(error){
        res.status(400).json({message:"Failed"});
    }
}

const produkInsert = async(req,res) => {
    try{
        const {nama, deskripsi, harga, stok, kategori_id} = req.body;
        
        
    }catch(error){
        res.status(400).json({message:"Failed"});
    }
}