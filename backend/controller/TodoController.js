
const TodoModel = require('../models/TodoModel');

module.exports.getToDos = async (req, res) => {
    try {
        const toDos = await TodoModel.find();
        res.send(toDos);
    } catch (error) {
        console.error("Error fetching todos:", error);
        res.status(500).send({ error: 'Something went wrong!' });
    }
};

module.exports.saveTodo= (req, res)=>{
   const { toDo }=req.body

   if (!toDo) {
    return res.status(400).send({ error: 'Todo is required' });
}
   TodoModel.create({ toDo })
   .then(data=>{
    console.log("saved sucussfully");
    res.status(201).send(data)
   })
   .catch(err=>{
    console.log(err)
   })
};

module.exports.UpdateTodo= (req, res)=>{
    const {id}= req.params;
    const { toDo }=req.body
 
   
    TodoModel.findByIdAndUpdate(id, {toDo}).then(data=>{
        res.send("Updated Succesfuly")
       })
       .catch(err=>{
        console.log(err)
       })
};

module.exports.DeleteTodo= (req, res)=>{
    const {id}= req.params;
    const { toDo }=req.body
 
   
    TodoModel.findByIdAndDelete(id).then(data=>{
        res.send("deleted Succesfuly")
       })
       .catch(err=>{
        console.log(err)
        res.send({error: err, mes: "something wrong"})
})

};