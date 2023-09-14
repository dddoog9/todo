import './Info.css'

export default function Info({todos}) {
  return (
    <div className="info">
      <div className="counter info__created">
        Созданные
        <span className="counter__number">{todos.length}</span>
      </div>
      <div className="counter info__done">
        Завершенные
        <span className="counter__number">
          {
            todos.length ? `${todos.filter((task) => task.isDone).length} из ${todos.length}` : 0
          }
        </span>
      </div>
    </div>
  )
}
