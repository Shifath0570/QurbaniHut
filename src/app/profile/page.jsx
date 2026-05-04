"use client"

import UpdateUserProfile from "@/components/UpdateUserProfile/UpdateUserProfile";
import { authClient } from "@/lib/auth-client";
import { Avatar, Card } from "@heroui/react";


const ProfilePage = () => {
    const userData = authClient.useSession()
    const user = userData.data?.user;

    return (
        <div className="flex justify-center items-center my-40">
            <Card className="card justify-center items-center px-20 py-10 rounded-3xl">
                <Avatar className="h-20 w-20">
                    <Avatar.Image alt="John Doe" src={user?.image} referrerPolicy="no-referrer" />
                    <Avatar.Fallback>{user?.name[0].charAt(0)}</Avatar.Fallback>
                </Avatar>
                <h2 className="text-2xl font-semibold">{user?.name}</h2>
                <p>{user?.email}</p>
                <UpdateUserProfile></UpdateUserProfile>
            </Card>
        </div>
    );
};

export default ProfilePage;