import { NextResponse } from 'next/server';

// Extract params
// Query Database    
// Return response

export async function GET() {

    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    return NextResponse.json(data);
}    

export function POST() {
    return NextResponse.json({
        message: 'Creando Datos!',
    });
}

export function PUT() {
    return NextResponse.json({
        message: 'Actualizando Datos!',
    });
}    

export function DELETE() {
    return NextResponse.json({
        message: 'Eliminando Datos!',
    });
}    

