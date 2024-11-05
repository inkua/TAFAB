import { NextResponse } from "next/server";

export async function middleware(request) {
    const cookie = request.cookies.get("session");
    const { pathname } = request.nextUrl;

    // Si el usuario no tiene token y trata de acceder a /admin, redirige a /auth
    if (!cookie && pathname.startsWith("/admin")) {
        return NextResponse.redirect(new URL("/auth", request.url));
    }
    
    if(cookie){
        const validToken = await validateToken(cookie.value)
        
        // Si el usuario no tiene token y trata de acceder a /admin, redirige a /auth
        if (validToken && pathname.startsWith("/admin/admins")) {
            const root = await isRootAdmin(cookie.value)

            if(!root){
                return NextResponse.redirect(new URL("/admin", request.url));
            }
        }
    
        // Si el usuario tiene token y trata de acceder a /auth, redirige a /admin
        if (validToken && pathname.startsWith("/auth")) {
            return NextResponse.redirect(new URL("/admin", request.url));
        }
    }

    // Si ninguna de las condiciones se cumple, permite la solicitud
    return NextResponse.next();
}

export const config = {
    matcher: ["/admin/:path*", "/auth/:path*"],
};
// fetch validate if a root admin
const isRootAdmin = async (token) => {
    try {
        const URL = `${process.env.NEXT_PUBLIC_URL}/api/admins/type`
        const response = await fetch(URL, {
            'Content-type': 'application/json',
            'headers': {Authorization: `Bearer ${token}`}
        });
        const result = await response.json();
        console.log(result)
    
        return result.data
    } catch (error) {
        return false
    }
}


// fetch validate if is a valid token
const validateToken = async (token)=>{
    try {
        const URL = `${process.env.NEXT_PUBLIC_URL}/api/auth`
        const response = await fetch(URL, {
            'Content-type': 'application/json',
            'headers': {Authorization: `Bearer ${token}`}
        });
        const result = await response.json();
        return result.data
    } catch (error) {
        return false
    }
}