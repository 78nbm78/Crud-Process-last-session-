"use client"

import { UpdateUserById } from "@/actions/users"
import { useState } from "react"

function UserEditForm({ currentUser }) {
    const [firstName, setFirstName] = useState(currentUser.firstName)
    const [lastName, setLastName] = useState(currentUser.lastName)
    const [mobile, setMobile] = useState(currentUser.mobile)

    async function handleUpdate() {
        const data = { firstName, lastName, mobile }

        const response = await UpdateUserById(currentUser.id, data);

        if (!response) {
            alert("با خطا مواجه شد!")
            return;
        }

        alert("کاربر با موفقیت ویرایش شد!")
        location.href = "/users"
    }

    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
                <label htmlFor="firstName">first name</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="text"
                    id="firstName"
                    onChange={(txt) => setFirstName(txt.target.value)}
                    value={firstName}
                />
            </div>
            <div>
                <label htmlFor="lastName">last name</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="text"
                    id="lastName"
                    onChange={(txt) => setLastName(txt.target.value)}
                    value={lastName}
                />
            </div>
            <div>
                <label htmlFor="mobile">mobile</label>
                <input
                    className="w-full border rounded-lg py-1.5 px-3"
                    type="number"
                    id="mobile"
                    onChange={(txt) => setMobile(txt.target.value)}
                    value={mobile}
                />
            </div>
            <div className="col-start-1 col-end-3">
                <button
                    className="bg-green-600 text-white py-1.5 px-3 rounded-lg cursor-pointer"
                    onClick={handleUpdate}
                >
                    Save & Continue
                </button>
            </div>
        </div>
    )
}

export default UserEditForm