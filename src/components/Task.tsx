import style from './Task.module.css'
import { Circle, Trash2 } from 'lucide-react';
import checked from './../assets/checked.svg'
import { useState } from 'react';


interface TaskProps {
  text: string,
  onDelete: () => void,
  onDoneTask: () => void,
  onReduceTask: () => void
}

export const Task = ({ text, onDelete, onDoneTask, onReduceTask }: TaskProps) => {

  const [isActivated, setIsActivated] = useState(false)

  const handleDeleteAndReduce = () => {
    onDelete();
    onReduceTask();
  };

  return (
    <div className={style.content}>
      {isActivated ?
        <>
          <img
            src={checked}
            className={style.circleChecked}
            onClick={() => {
              setIsActivated(false)
              onReduceTask()
            }}
          />
          <p className={style.text}>{text}</p>
          <Trash2 onClick={handleDeleteAndReduce} className={style.trash} />
        </>
        :
        <>
          <Circle
            className={style.circle}
            onClick={() => {
              setIsActivated(true)
              onDoneTask()
            }}
          />
          <p>{text}</p>
          <Trash2 onClick={handleDeleteAndReduce} className={style.trash} />
        </>
      }

    </div>
  )
}

