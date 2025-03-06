import { auth } from "@/auth"
import { NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const provider = searchParams.get("provider")
  
  try {
    const result = await auth.handleCallback(request, { provider })
    return result
  } catch (error) {
    console.error("Error en callback de autenticación:", error)
    return NextResponse.redirect(new URL("/login?error=AuthCallbackError", request.url))
  }
}