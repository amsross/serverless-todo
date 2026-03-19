import { Card, Container, Stack } from "react-bootstrap"
import { TaskCard } from "./TaskCard"

import { fetchTaskByStatus } from "../services/taskService"
import { useEffect, useState } from 'react'
import type { TodoStatus, TodoItem } from "@shared/types"


interface TaskListProps {
  status: TodoStatus

}

const mapTaskItems = (tasks: TodoItem[]) => {

  if (tasks.length === 0) {
    return (<>No tasks to complete!</>)
  }

  return tasks.map((value: TodoItem) => {
    return <TaskCard todoItem={value}></TaskCard>
  })
}

export const TaskList = ({ status }: TaskListProps) => {

  const [tasks, setTasks] = useState<TodoItem[]>([])
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


  useEffect(() => {

    const loadData = async () => {
      try {
        setLoading(true)
        const data = await fetchTaskByStatus(status)
        setTasks(data)
      }
      catch (err) {
        setError("Failed to load tasks.")
      }
      finally {
        setLoading(false)
      }
    };
    loadData();
  }, [status])


  return (
    <Container>
      <Card>
        <Card.Title>{status}</Card.Title>
        <Card.Body>
          <Stack gap={3}>
            {loading && <p>loading...</p>}
            {error && <p>ERROR, {error}</p>}

            {!loading && !error && mapTaskItems(tasks)}
          </Stack>
        </Card.Body>
      </Card>
    </Container>

  )
}
