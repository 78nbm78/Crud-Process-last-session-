"use client"

import { CreateNewUser } from "@/actions/users"
import { useState } from "react"

function AddUserPage() {
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [mobile, setMobile] = useState("")
    const [password, setPassword] = useState("")

    async function handleCreate() {
        const data = { firstName, lastName, mobile, password }

        const response = await CreateNewUser(data);

        if (!response) {
            alert("خطا در افزودن کاربر!")
            return;
        }

        alert("کاربر با موفقیت ساخته شد!")
        location.href = "/users"
    }

    return (
        <div className="bg-neutral-200 p-6 rounded-xl shadow-xl max-w-[600px] my-12 mx-auto space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="firstName">first name</label>
                    <input
                        className="w-full border rounded-lg py-1.5 px-3"
                        type="text"
                        id="firstName"
                        onChange={(txt) => setFirstName(txt.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="lastName">last name</label>
                    <input
                        className="w-full border rounded-lg py-1.5 px-3"
                        type="text"
                        id="lastName"
                        onChange={(txt) => setLastName(txt.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="mobile">mobile</label>
                    <input
                        className="w-full border rounded-lg py-1.5 px-3"
                        type="number"
                        id="mobile"
                        onChange={(txt) => setMobile(txt.target.value)}
                    />
                </div>
                <div>
                    <label htmlFor="password">password</label>
                    <input
                        className="w-full border rounded-lg py-1.5 px-3"
                        type="text"
                        id="password"
                        onChange={(txt) => setPassword(txt.target.value)}
                    />
                </div>
                <div className="col-start-1 col-end-3">
                    <button
                        className="bg-green-600 text-white py-1.5 px-3 rounded-lg cursor-pointer"
                        onClick={handleCreate}
                    >
                        Save & Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddUserPage