"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export default function ProfilePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    email: "example@gmail.com",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    
    // TODO: Thêm logic cập nhật thông tin người dùng với Supabase
    
    setTimeout(() => {
      setIsLoading(false);
      // Hiển thị thông báo cập nhật thành công
    }, 1000);
  };

  return (
    <div className="flex flex-col gap-8 md:gap-10 max-w-md mx-auto">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Hồ sơ cá nhân</h1>
        <p className="text-muted-foreground">Xem và cập nhật thông tin cá nhân của bạn.</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Thông tin cá nhân</CardTitle>
          <CardDescription>Cập nhật thông tin cá nhân của bạn tại đây.</CardDescription>
        </CardHeader>
        <form onSubmit={handleSubmit}>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="name">Họ tên</Label>
              <Input 
                id="name" 
                value={user.name}
                onChange={(e) => setUser({...user, name: e.target.value})}
                placeholder="Nhập họ tên của bạn" 
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input 
                id="email" 
                type="email" 
                value={user.email}
                disabled
                placeholder="email@example.com" 
              />
              <p className="text-xs text-muted-foreground">Email không thể thay đổi.</p>
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Mật khẩu mới (để trống nếu không đổi)</Label>
              <Input id="password" type="password" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="confirmPassword">Xác nhận mật khẩu mới</Label>
              <Input id="confirmPassword" type="password" />
            </div>
          </CardContent>
          <CardFooter className="flex justify-end">
            <Button type="submit" disabled={isLoading}>
              {isLoading ? "Đang cập nhật..." : "Cập nhật"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Cài đặt tài khoản</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="flex justify-between items-center">
            <div>
              <h3 className="font-medium">Xóa tài khoản</h3>
              <p className="text-sm text-muted-foreground">Xóa vĩnh viễn tài khoản và tất cả dữ liệu của bạn.</p>
            </div>
            <Button variant="destructive" size="sm">
              Xóa tài khoản
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}