import { useEffect, useRef, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import api from "../../services/api";
import "../EditTask/editTask.css";

function EditTask() {
  const { id } = useParams();
  const navigate = useNavigate();
  const inputTitle = useRef();
  const [task, setTask] = useState(null);

  // obter as tasks do servidor  
  useEffect(() => {
    async function fetchTask() {
      const response = await api.get(`/tasks`);
      setTask(response.data);
    }

    fetchTask();
  }, [id]);

  async function updateTask() {
    await api.put(`/tasks/${id}`, {
      title: inputTitle.current.value,
    });

    navigate("/"); // Redireciona para a página inicial
  }

  if (!task) return <p>Carregando...</p>;

  return (
    <div className="container">
      <form>
        <h1>Editar tarefa</h1>
        <input
          defaultValue={task.title}
          placeholder="Título"
          name="Título"
          ref={inputTitle}
        />
        <button type="button" onClick={updateTask}>Editar</button>
      </form>
    </div>
  );
}

export default EditTask;
