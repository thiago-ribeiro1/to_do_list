import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Home() {

  const [tasks, setTasks] = useState([]);
  const inputTitle = useRef();
  const navigate = useNavigate();

  async function getTasks() {
    const responseTasks = await api.get("/tasks");
    console.log(tasks);
    setTasks(responseTasks.data);
  };

  useEffect(() => {
    getTasks();
  }
  , []);

  async function createTask() {
    await api.post("/tasks", {
      title: inputTitle.current.value,
    });   
    getTasks();
  }

  async function deleteTask(id) {
    await api.delete(`/tasks/${id}`);
    getTasks();
  }

  return (
    <div className="container">
      <form>
        <h1>Cadastro de atividades</h1>
        <input placeholder="Título" name="Título" ref={inputTitle}/>
        <button type="button" onClick={createTask}>Cadastrar</button>
        <button onClick={() => navigate("/tasks")}>Todas as atividades</button>
      </form>

      {tasks.map((task) => (
        <div className="card" key={task._id}>
          <div>
            <p> Título: {task.title}</p>
            <p> Situação: {task.finished ? "Finalizada" : "Pendente"}</p>
            <button onClick={() => navigate(`/${task._id}`)}>Editar</button>
          </div>

          <button onClick={() => deleteTask(task._id)}> 
            {" "}
            <img src={Trash} />
          </button>
        </div>
      ))}
    </div>
  );
}

export default Home;
