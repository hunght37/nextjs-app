"use client";

import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";
import { Checkbox } from "@/components/ui/checkbox";

// Định nghĩa kiểu dữ liệu cho task
type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

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
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b">
        <div className="container flex h-16 items-center justify-between px-4">
          <div className="flex items-center gap-2">
            <Link href="/dashboard" className="font-bold">
              Todo App
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <Button variant="ghost" size="sm" asChild>
              <Link href="/profile">Hồ sơ</Link>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <Link href="/">Đăng xuất</Link>
            </Button>
            <ModeToggle />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="container py-6 px-4 md:py-10">
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
                <Card key={task.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <div className="flex items-center p-4">
                      <div className="flex items-start gap-3 flex-1">
                        <Checkbox
                          checked={task.completed}
                          onCheckedChange={() => toggleTaskCompletion(task.id)}
                          className="mt-1"
                        />
                        <div className="space-y-1">
                          <p className={`font-medium ${task.completed ? "line-through text-muted-foreground" : ""}`}>
                            {task.title}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Tạo lúc: {task.createdAt.toLocaleString()}
                          </p>
                        </div>
                      </div>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => deleteTask(task.id)}
                        className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
                      >
                        Xóa
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
}