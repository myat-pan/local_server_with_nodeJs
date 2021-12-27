
  const mongoose = require("mongoose")

  const schema = mongoose.Schema({
    generateRefOrder: {
        type: String, 
        required: true,
    },
    transactionId: {
        type: String, 
        required: true,
    },
    transactionDateTime: {
        type: String, 
        required: true,
    },
    ecommerceId: {
        type: String, 
        required: true
    },
        amount :{
            type : String,
            required : true
        },
        currency:{
            type : String,
            required : true
        },
        feeAmount :{
            type: String,
            required: true,
        },
        discount :{
            type: String,
            required : true,
        },
        totalAmount :{
            type : String,
            required : true,
        },
        signature :{
            type:String,
            required : true,
        },
        transactionStatus :{
            type : String,
            required : true,
        },
        orderId :{
            type: String,
            required :true,
        }
  })
  
  module.exports = mongoose.model("Post", schema)
