import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('token');
    console.log("Token received in middleware:", token); // Debug log
    if (!token) {
        return NextResponse.redirect(new URL('/login', request.url));
    }

    try {
        const secret = process.env.JWT_SECRET;
        if (!secret) {
            throw new Error('JWT_SECRET is not defined');
        }

        const isValid = await jwtVerify(token.value, new TextEncoder().encode(secret));
        if (!isValid) {
            throw new Error('Invalid token');
        }

        console.log("Token verified successfully"); // Debug log
        return NextResponse.next();
    } catch (error) {
        console.error("Error in middleware:", error); // Debug log
        return NextResponse.redirect(new URL('/login', request.url));
    }
}


export const config = {
    matcher: ['/'],
};