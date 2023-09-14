import './NewTask.css'
import {useState} from 'react'

export default function NewTask({addTask}) {
  const [inputText, setInputText] = useState('')

  const inputChangeHandler = (e) => {
    setInputText(e.target.value)
  }

  const buttonClickHandler = () => {
    addTask(inputText)
    setInputText('')
  }

  return (
    <form className="new-task" onSubmit={(e) => e.preventDefault()}>
      <input type="text" className="new-task__input" placeholder="Добавить новую задачу" onChange={inputChangeHandler} value={inputText} />
      <button className="new-task-button new-task__button" onClick={buttonClickHandler}>
        Создать
        <span className="new-task-button__icon"></span>
      </button>
    </form>
  )
}
