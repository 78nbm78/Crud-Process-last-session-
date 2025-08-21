import { GetAllUsers } from "@/actions/users"
import DeleteUserBtn from "@/components/users/DeleteUserBtn"
import Link from "next/link"

async function UsersPage() {
    const users = await GetAllUsers()

    return (
        <div className="bg-neutral-200 p-6 rounded-xl shadow-xl max-w-[600px] my-12 mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="font-bold text-lg">Users List</h1>
                <Link href="/users/add" className="text-blue-500 hover:underline">
                    Add new user
                </Link>
            </div>

            <table className="w-full text-center">
                <thead>
                    <tr className="border">
                        <th>نام</th>
                        <th>نام خانوادگی</th>
                        <th>شماره موبایل</th>
                        <th>اقدامات</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map(user => (
                        <tr key={user.id} className="border">
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.mobile}</td>
                            <td>
                                <Link href={`/users/${user.id}`} className="mr-2">ویرایش</Link>
                                <DeleteUserBtn userId={user.id} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UsersPage