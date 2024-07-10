const mongoose = require("mongoose")
const { string, boolean } = require("zod")

mongoose.connect("mongodb+srv://officialnikit120598:IitrhEw5JR0dYLNg@cluster0.y0tr6dt.mongodb.net/Todo_Db")
const todoSchema  = mongoose.Schema({
  title : String,
  description : String,
  completed : Boolean
})

const todo  = mongoose.model("todos" , todoSchema);

module.exports = {
     todo
}