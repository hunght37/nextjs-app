import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { ModeToggle } from "@/components/mode-toggle";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          <code className="font-mono font-bold">Todo App - Gen Z</code>
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <ModeToggle />
        </div>
      </div>

      <div className="flex flex-col items-center justify-center gap-6 w-full max-w-md">
        <Card className="w-full">
          <CardHeader>
            <CardTitle className="text-2xl text-center">Chào mừng đến với Todo App</CardTitle>
            <CardDescription className="text-center">Quản lý công việc hiệu quả, đơn giản và nhanh chóng</CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-4">
            <Button className="w-full" size="lg">
              Đăng nhập
            </Button>
            <Button className="w-full" variant="outline" size="lg">
              Đăng ký
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center text-sm text-muted-foreground">
            Ứng dụng được xây dựng với Next.js và Supabase
          </CardFooter>
        </Card>

        <div className="flex flex-col items-center gap-2">
          <p className="text-center text-sm text-muted-foreground">
            Tính năng chính:
          </p>
          <ul className="text-sm text-muted-foreground list-disc pl-5">
            <li>Quản lý công việc với các chức năng CRUD</li>
            <li>Xác thực người dùng an toàn</li>
            <li>Giao diện tối/sáng tùy chỉnh</li>
            <li>Thiết kế responsive cho mọi thiết bị</li>
          </ul>
        </div>
      </div>

      <div className="mb-32 grid text-center lg:mb-0 lg:grid-cols-3 lg:text-left gap-4">
        <Card className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Dễ sử dụng{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Giao diện trực quan, thân thiện với người dùng.
          </p>
        </Card>

        <Card className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            Hiệu quả{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Quản lý công việc nhanh chóng và hiệu quả.
          </p>
        </Card>

        <Card className="group rounded-lg border border-transparent px-5 py-4 transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30">
          <h2 className="mb-3 text-2xl font-semibold">
            An toàn{" "}
            <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
              →
            </span>
          </h2>
          <p className="m-0 max-w-[30ch] text-sm opacity-50">
            Bảo mật dữ liệu với xác thực người dùng an toàn.
          </p>
        </Card>
      </div>
    </main>
    </div>
  );
}
