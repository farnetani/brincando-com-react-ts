import React from 'react'
import { Todo } from '../models/Todo'
import { TodoListItem } from './TodoListItem'

export const TodoList = () => {
  const todos: Todo[] = [
    { id: 1, title: 'Ir ao supermercado', done: false },
    { id: 2, title: 'Aprender Redux', done: false }
  ]
  return (
    <>
      <div>TodoList</div>

      <table className="uk-table">
        <caption>Lista de Tarefas</caption>
        <thead>
          <tr>
            <th>#</th>
            <th>Tarefa</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {todos?.map((todo) => (
            <TodoListItem key={todo.id} todo={todo} />
          ))}
        </tbody>
      </table>
    </>
  )
}
