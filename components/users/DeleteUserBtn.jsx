"use client"

import { DeleteUserById } from "@/actions/users";

function DeleteUserBtn({ userId }) {

    async function handleDelete() {
        const response = await DeleteUserById(userId)

        if (!response) {
            alert("خطا در حذف کاربر!")
            return;
        }

        alert("کاربر با موفقیت حذف شد!")
        location.reload();
    }

    return (
        <button
            onClick={handleDelete}
            className="text-xs text-red-500 cursor-pointer"
        >
            حذف
        </button>
    )
}

export default DeleteUserBtn;