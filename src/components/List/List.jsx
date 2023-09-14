import './List.css'
import Task from '../Task/Task'

export default function List({todos, removeTask, toggleTask}) {
  return (
    <div className="list">
      {todos.map((todo) => <Task {...todo} key={todo.id} removeTask={removeTask} toggleTask={toggleTask} />)}
    </div>
  )
}
