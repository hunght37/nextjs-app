"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { TaskItem, Task } from "@/components/task-item";

export default function DashboardPage() {
  // State cho danh sách task và task mới
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "Hoàn thành bài tập về nhà",
      completed: false,
      createdAt: new Date(),
    },
    {
      id: "2",
      title: "Đọc sách 30 phút",
      completed: true,
      createdAt: new Date(),
    },
    {
      id: "3",
      title: "Tập thể dục buổi sáng",
      completed: false,
      createdAt: new Date(),
    },
  ]);
  const [newTaskTitle, setNewTaskTitle] = useState("");
  const [filter, setFilter] = useState<"all" | "active" | "completed">("all");

  // Xử lý thêm task mới
  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;

    const newTask: Task = {
      id: Date.now().toString(),
      title: newTaskTitle.trim(),
      completed: false,
      createdAt: new Date(),
    };

    setTasks([...tasks, newTask]);
    setNewTaskTitle("");
  };

  // Xử lý đánh dấu hoàn thành task
  const toggleTaskCompletion = (taskId: string) => {
    setTasks(
      tasks.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
      )
    );
  };

  // Xử lý xóa task
  const deleteTask = (taskId: string) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  // Lọc task theo trạng thái
  const filteredTasks = tasks.filter((task) => {
    if (filter === "active") return !task.completed;
    if (filter === "completed") return task.completed;
    return true;
  });

  return (
    <div className="flex flex-col gap-8 md:gap-10">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Danh sách công việc</h1>
        <p className="text-muted-foreground">Quản lý và theo dõi các công việc của bạn.</p>
      </div>

      {/* Add new task form */}
      <Card>
        <CardHeader>
          <CardTitle>Thêm công việc mới</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleAddTask} className="flex gap-2">
            <Input
              placeholder="Nhập công việc cần làm..."
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              className="flex-1"
            />
            <Button type="submit">Thêm</Button>
          </form>
        </CardContent>
      </Card>

      {/* Task filters */}
      <div className="flex gap-2">
        <Button
          variant={filter === "all" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("all")}
        >
          Tất cả
        </Button>
        <Button
          variant={filter === "active" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("active")}
        >
          Chưa hoàn thành
        </Button>
        <Button
          variant={filter === "completed" ? "default" : "outline"}
          size="sm"
          onClick={() => setFilter("completed")}
        >
          Đã hoàn thành
        </Button>
      </div>

      {/* Task list */}
      <div className="space-y-4">
        {filteredTasks.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center text-muted-foreground">
              Không có công việc nào {filter !== "all" && `(${filter === "active" ? "chưa hoàn thành" : "đã hoàn thành"})`}
            </CardContent>
          </Card>
        ) : (
          filteredTasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={toggleTaskCompletion}
              onDelete={deleteTask}
            />
          ))
        )}
      </div>
    </div>
  );
}