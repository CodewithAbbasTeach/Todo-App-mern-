const {Router}= require("express");
const {getToDos, saveTodo, UpdateTodo, DeleteTodo}=require("../controller/TodoController")
const routes=Router();


routes.get("/get", getToDos);
routes.post("/save", saveTodo);
routes.put("/update/:id", UpdateTodo);
routes.delete("/delete/:id", DeleteTodo);

module.exports=routes