"use server"

import db from "@/lib/db"

export async function GetAllUsers() {
    const users = await db.users.findMany({
        select: {
            id: true,
            firstName: true,
            lastName: true,
            mobile: true,
        }
    })

    return users
}

export async function GetUserById(id) {
    const user = await db.users.findUnique({
        where: { id }
    })

    return user
}

export async function UpdateUserById(id, data) {
    const updateUser = await db.users.update({
        where: { id },
        data,
        // data: {
        //     firstName: data.firstName,
        //     lastName: data.lastName,
        //     mobile: data.mobile,
        // },
    })

    if (!updateUser) return {
        success: false,
        message: "عملیات ویرایش با خطا مواجه شد!"
    }

    return {
        success: true,
        message: "کاربر با موفقیت ویرایش شد!"
    }
}

export async function CreateNewUser(data) {
    const createUser = await db.users.create({ data })

    if (!createUser) return {
        success: false,
        message: "خطا در افزودن کاربر!"
    }

    return {
        success: true,
        message: "کاربر با موفقیت اضافه شد!"
    }
}

export async function DeleteUserById(id) {
    const deleteUser = await db.users.delete({
        where: { id }
    })

    if (!deleteUser) return {
        success: false,
        message: "خطا در حذف کاربر!"
    }

    return {
        success: true,
        message: "کاربر با موفقیت حذف شد!"
    }
}