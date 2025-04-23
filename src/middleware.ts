import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// Các routes cần xác thực
const protectedRoutes = [
  '/dashboard',
  '/profile',
];

// Các routes dành cho người dùng chưa đăng nhập
const authRoutes = [
  '/login',
  '/register',
  '/forgot-password',
];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Kiểm tra xem người dùng đã đăng nhập chưa (sẽ được thay thế bằng logic thực tế với Supabase)
  const isAuthenticated = request.cookies.has('auth-token'); // Giả định có cookie auth-token khi đăng nhập

  // Nếu đang truy cập route cần xác thực nhưng chưa đăng nhập
  if (protectedRoutes.some(route => pathname.startsWith(route)) && !isAuthenticated) {
    return NextResponse.redirect(new URL('/login', request.url));
  }

  // Nếu đã đăng nhập nhưng truy cập các trang đăng nhập/đăng ký
  if (authRoutes.some(route => pathname.startsWith(route)) && isAuthenticated) {
    return NextResponse.redirect(new URL('/dashboard', request.url));
  }

  return NextResponse.next();
}

// Chỉ áp dụng middleware cho các routes cụ thể
export const config = {
  matcher: [...protectedRoutes, ...authRoutes],
};