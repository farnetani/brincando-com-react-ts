import React, { createContext, useState, useEffect, ReactNode } from 'react'
import { TodoContextType } from './TodoContextType'
import { Todo } from '../models/Todo'
import { get, save } from '../services/TodoService'

export const TodoContext = createContext<TodoContextType>({
  todos: [],
  addTodo: () => {
    return
  },
  removeTodo: () => {
    return
  },
  toggle: () => {
    return
  }
})

interface TodoProviderProps {
  children: ReactNode // Esse ReactNode significa que aceita qualquer coisa JSX, ou seja, qualquer coisa dentro dele
}

const TodoProvider = (props: TodoProviderProps) => {
  const [todos, setTodos] = useState<Todo[]>(get)

  useEffect(() => {
    save(todos)
  }, [todos])

  const addTodo = (title: string) => {
    const todo: Todo = { id: todos.length + 1, title: title, done: false }
    setTodos([...todos, todo])
  }

  const removeTodo = (todo: Todo) => {
    const index = todos.indexOf(todo)
    setTodos(todos.filter((_, i) => i !== index))
  }

  const toggle = (todo: Todo) => {
    const index = todos.indexOf(todo)
    todos[index].done = !todo.done
    setTodos([...todos])
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, toggle }}>
      {props.children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
