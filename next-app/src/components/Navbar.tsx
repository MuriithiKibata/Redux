import Link from "next/link";

function Navbar() {
  return (
   <nav className="w-full bg-black p-3">
    <div className="mx-auto w-[80]">
        <ul className="flex gap-4">
            <li className="text-white italic font-semibold transition transition-duration-700 hover:text-sky-600 hover:-translate-y-1"><Link href="/new/addtodo">Add Todo</Link></li>
            <li className="text-white italic font-semibold transition transition-duration-700 hover:text-sky-600 hover:-translate-y-1"><Link href="/new/edit">Edit Todo</Link></li>
            <li className="text-white italic font-semibold transition transition-duration-700 hover:text-sky-600 hover:-translate-y-1"><Link href="/new">View Todo</Link></li>
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
