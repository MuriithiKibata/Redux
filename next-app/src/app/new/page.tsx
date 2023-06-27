import { get } from "http";


async function getTodos() {
 const res = await fetch ("http://localhost:3000/api/todos")
 if(res.ok) {
  return res.json()
 }
}

async function Page() {

  const data = await getTodos();

  return (
    <div className="w-full h-[100] flex justify-center items-center p-4  mt-8">
      <div className="bg-indigo-600 w-4/5  flex flex-wrap justify-center items-center gap-2 p-1 rounded-lg">
        {data.map((item : Todo) => (
        <div key={item.id} className="p-4 bg-gray-900 w-4/12 text-white rounded-lg">
          <h1>{item.title}</h1>
          <button className={`w-8/12 rounded-lg p-2 ${item.completed === false ? "bg-rose-700" : "bg-green-600"}`}>{item.completed === false ? "Incomplete" : "Complete"}</button>
        </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
