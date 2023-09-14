import './App.css'
import logo from './assets/logo.svg'
import NewTask from './components/NewTask/NewTask'
import Info from './components/Info/Info'
import Empty from './components/Empty/Empty'
import List from './components/List/List'
import {useState, useEffect} from 'react'

export default function App() {
  const [count, setCount] = useState(0)
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const loadedCount = Number(localStorage.getItem('count'))
    const loadedTodos = JSON.parse(localStorage.getItem('todos'))

    if (loadedCount) {
      setCount(loadedCount)
    }

    if (loadedTodos) {
      setTodos(loadedTodos)
    }
  }, [])

  useEffect(() => {
    localStorage.setItem('count', count)
  }, [count])

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTask = (text) => {
    text = text.trim()

    if (text) {
      const newTask = {
        id: count,
        text,
        isDone: false
      }

      setCount(count + 1)
      setTodos([newTask, ...todos])
    }
  }

  const removeTask = (id) => {
    setTodos(todos.filter((task) => task.id !== id))
  }

  const toggleTask = (id) => {
    setTodos(todos.map((task) => {
      if (task.id === id) {
        task.isDone = !task.isDone
      }

      return task
    }))
  }

  return (
    <div className="app">
      <header className="app__header">
        <img src={logo} className="app__logo" alt="logo" />
      </header>
      <div className="app__main">
        <div className="app__new-task">
          <NewTask addTask={addTask} />
        </div>
        <div className="app__info">
          <Info todos={todos} />
        </div>
        <div className="app__list">
          {todos.length ? <List todos={todos} removeTask={removeTask} toggleTask={toggleTask} /> : <Empty />}
        </div>
      </div>
    </div>
  )
}
