import mongoose, { Schema, models } from "mongoose";
const {ObjectId} = mongoose.Schema.Types
const cartItemSchema = new Schema({
  id: String,
  title: String,
  author: Object,
  price: Number,
  image: String,
  preview: String,
  quantity: Number,
});
const cartSchema = new Schema({
  user:{
    type:ObjectId,
    ref:"User"
},
items: [cartItemSchema],
  total: {
    type: Number,
    default: 0,
  },
  
},
{ timestamps: true });

const Cart= models.Cart || mongoose.model("Cart", cartSchema);
export default Cart;
