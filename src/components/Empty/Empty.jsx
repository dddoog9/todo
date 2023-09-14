import './Empty.css'
import clipboard from '../../assets/clipboard.png'

export default function Empty() {
  return (
    <div className="empty">
      <img src={clipboard} className="empty__clipboard" alt="clipboard" />
      <div>
        <p className="empty__text empty__text_weight_bold">У вас еще нет зарегистрированных задач</p>
        <p className="empty__text">Создавайте задачи и организуйте свои дела</p>
      </div>
    </div>
  )
}
