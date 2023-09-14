import './Task.css'

export default function Task({id, text, isDone, removeTask, toggleTask}) {
  return (
    <div className="task">
      <button className={`task-checkbox ${isDone ? 'task-checkbox_checked' : ''} task__checkbox`} onClick={() => toggleTask(id)}>
        <span className="task-checkbox__icon"></span>
      </button>
      <div className={`task__text ${isDone ? 'task__text_done' : ''}`}>{text}</div>
      <button className="delete-button task__delete-button" onClick={() => removeTask(id)}>
        <span className="delete-button__icon"></span>
      </button>
    </div>
  )
}
