
import style from './Home.module.css'
import { CirclePlus } from 'lucide-react';
import { Task } from "./Task";
import { ChangeEvent, useState } from "react";
import clipBoard from './../assets/Clipboard.svg'
import { v4 as uuidv4 } from 'uuid';

interface TaskItem {
  id: string;
  value: string;
}

export const Home = () => {

  const [task, setTask] = useState<TaskItem[]>([])
  const [placeHolderText, setPlaceHolderText] = useState('Adicione uma nova tarefa')
  const [inputValue, setInputValue] = useState('')
  const [newTask, setNewTask] = useState<TaskItem>({id: '', value: ''})
  const [doneTask, setDoneTask] = useState(0)

  function handleCreateTask(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.target.value);
    setNewTask({id: uuidv4(), value: e.target.value})
  };


  function handleTask() {
    setTask([...task, newTask])
  }

  function handleDeleteTask(idToDelete: string) {
    setTask(task.filter((item) => item.id !== idToDelete));
  }

  function handleReduceTask() {
    setDoneTask(Math.max(doneTask - 1, 0)); 
  }

  function handleDoneTask() {
    setDoneTask(doneTask + 1); 
  }

  console.log('task', task)
  return (
    <div className={style.home}>
      <div className={style.search}>
        <input
          className={style.content}
          type="search"
          placeholder={placeHolderText}
          onFocus={() => setPlaceHolderText('Descrição da tarefa')}
          onBlur={() => {
            setPlaceHolderText('Adicione uma nova tarefa')
            setInputValue('')
          }}
          value={inputValue}
          onChange={handleCreateTask}
        />
        <button onClick={handleTask} className={style.button}>Criar<CirclePlus height={15} /></button>
      </div>


      <header className={style.info}>
        <p>Tarefas Criadas <span>{task.length}</span></p>
        <p>Concluídas <span>{doneTask} de {task.length}</span></p>
      </header>

      {task.length === 0 ?
        <>
          <div className={style.listWithOutItems}>
            <img src={clipBoard} alt="" />
            <p>Você ainda não tem tarefas cadastradas</p>
            <span>Crie tarefas e organize seus itens a fazer</span>
          </div>
        </>
        :
        <>
          <div>
            {task.map((item) => {
              return (
                <Task key={item.id} text={item.value} onDelete={() => handleDeleteTask(item.id)} onDoneTask={handleDoneTask} onReduceTask={handleReduceTask} />
              )
            })}

          </div>
        </>
      }
    </div>
  )
}
