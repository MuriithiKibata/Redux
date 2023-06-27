import { NextResponse } from "next/server";

const DATA_URL = "https://jsonplaceholder.typicode.com/todos"

export async function GET() {
    const res = await fetch(DATA_URL)

    const todos: Todo[] = await res.json()

    return NextResponse.json(todos)
}


export async function POST(request: Request) {
    const {userId, title}: Partial<Todo> = await request.json();
      
    if(!userId || !title) {
        return NextResponse.json({message: "Invalid Data"})
    }
    const res = await fetch(DATA_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            userId, title, completed: false
        })
    })
    
    const newTodo: Todo =  await res.json()
    return NextResponse.json(newTodo)
}


export async function PATCH(request: Request) {
    const {id, title, completed}: Partial<Todo> = await request.json();

    if(!title || !id) {
        return NextResponse.json({message: "Invalid Data"})
    }
    
    const res = await fetch(`${DATA_URL}/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({title, completed})
    })
    const updatedTodo: Todo = await res.json()
    return NextResponse.json(updatedTodo)
}
