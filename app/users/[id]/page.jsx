// interface IParams {
//     params: Promise<{ id: string }>
// }

import { GetUserById } from "@/actions/users";
import UserEditForm from "@/components/users/UserEditForm";

async function EditUserPage({ params }) {
    const { id } = await params;
    const user = await GetUserById(id);

    return (
        <div className="bg-neutral-200 p-6 rounded-xl shadow-xl max-w-[600px] my-12 mx-auto space-y-6">
            <h1 className="font-bold text-xl">Update this user</h1>

            <UserEditForm currentUser={user} />

        </div>
    )
}

export default EditUserPage