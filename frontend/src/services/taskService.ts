import type { TodoItem, TodoStatus } from "@shared/types";

const apiUrl: string = import.meta.env.VITE_TODO_API_URL;

export const fetchTaskByStatus = async (
  status: TodoStatus,
): Promise<TodoItem[]> => {
  const response = await fetch(`${apiUrl}/status/${status}`);

  if (!response.ok) {
    throw new Error(`Failed to fetch tasks: ${response.statusText}`);
  }

  const taskList = await response.json();

  return taskList.items;
};
