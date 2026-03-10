export type TodoStatus = "PENDING" | "DOING" | "DONE";

export type TodoItem = {
  id: number;
  status: TodoStatus;
  title: string;
  description?: string;
};

export function isValidTodoStatus(value: any): value is TodoStatus {
  return ["PENDING", "DOING", "DONE"].includes(value);
}
