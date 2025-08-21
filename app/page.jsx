import Link from "next/link"

async function HomePage() {
  return (
    <div className="bg-neutral-200 p-6 rounded-xl shadow-xl max-w-[600px] my-12 mx-auto space-y-4">
      <h1 className="font-bold text-lg">
        CRUD process (create, read, update delete)
      </h1>
      <Link href="/users" className="text-blue-600 hover:underline">
        Go to users page
      </Link>
    </div>
  )
}

export default HomePage