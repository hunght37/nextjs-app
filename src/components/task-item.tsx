"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";

// Định nghĩa kiểu dữ liệu cho task
export type Task = {
  id: string;
  title: string;
  completed: boolean;
  createdAt: Date;
};

type TaskItemProps = {
  task: Task;
  onToggleComplete: (taskId: string) => void;
  onDelete: (taskId: string) => void;
};

export function TaskItem({ task, onToggleComplete, onDelete }: TaskItemProps) {
  return (
    <Card className="overflow-hidden">
      <CardContent className="p-0">
        <div className="flex items-center p-4">
          <div className="flex items-start gap-3 flex-1">
            <Checkbox
              checked={task.completed}
              onCheckedChange={() => onToggleComplete(task.id)}
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
            onClick={() => onDelete(task.id)}
            className="text-destructive hover:text-destructive/90 hover:bg-destructive/10"
          >
            Xóa
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}