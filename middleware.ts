import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"
import { getSession } from "./auth"

export async function middleware(request: NextRequest) {
  const session = await getSession()
  const url = request.nextUrl.clone()

  // Si el usuario no está autenticado y trata de acceder a una ruta protegida
  if (!session && !request.nextUrl.pathname.startsWith('/login')) {
    url.pathname = '/login'
    return NextResponse.redirect(url)
  }

  // Si el usuario está autenticado y trata de acceder a login
  if (session && request.nextUrl.pathname.startsWith('/login')) {
    url.pathname = '/dashboard'
    return NextResponse.redirect(url)
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
}