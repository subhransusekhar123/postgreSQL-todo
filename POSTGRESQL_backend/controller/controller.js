const pool = require("../db");

const getController = async(req,res) => {
  try{
    const allTodo = await pool.query("SELECT * FROM todo")
    res.json(allTodo.rows)
  }catch(err){
    console.error(err);
  }
}

const getIdController = async(req,res) => {``
  try{
    const {id} = req.params;
    const todo = await pool.query("SELECT * FROM todo WHERE todo_id = $1",[id]);
    res.json(todo.rows);
  }catch(err){
    console.error(err);
  }
}

const postController = async(req,res) => {
  try{
    const { description } = req.body;
    const newTodo = await pool.query(
      "INSERT INTO todo (description) values($1) RETURNING *",
      [description]
    );
    res.json(newTodo)
  }catch(err){
    console.error(err);
  }
}

const putController = async(req,res) => {
  try{
    const { id } = req.params;
    const { description } = req.body;
    const updateTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2",[description, id]);
    res.json(updateTodo);
  }catch(err){
    console.error(err)
  }
}

const deleteController = async(req,res) => {
  try{
    const {id} = req.params;
    const todo = await pool.query("DELETE FROM todo WHERE todo_id = $1",[id]);
    res.json("todo was deleted!");
  }catch(err){
    console.error(err);
  }
}

module.exports = {
  getController,
  getIdController,
  postController,
  putController,
  deleteController
}