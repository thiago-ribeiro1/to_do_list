import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../Tasks/tasks.css";
import Trash from "../../assets/trash.svg";
import api from "../../services/api";

function Tasks() {

  const [tasks, setTasks] = useState([]);
  const navigate = useNavigate();

  async function getTasks() {
    const responseTasks = await api.get("/tasks");
    console.log(tasks);
    setTasks(responseTasks.data);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    getTasks();
  }
  , []);

  async function deleteTask(id) {
    await api.delete(`/tasks/${id}`);
    getTasks();
  }

  return (
      <div className="container">
          <h1>Todas as tarefas</h1>

          <button className="back-button" onClick={() => navigate("/")}>⬅ Voltar</button>

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

export default Tasks;
