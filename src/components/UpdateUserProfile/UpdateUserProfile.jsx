"use client";

import { authClient } from "@/lib/auth-client";
import { Button, Input, Label, Modal, Surface, TextField } from "@heroui/react";
import { BiEdit, BiUser } from "react-icons/bi";

export function UpdateUserProfile() {
    const onSubmit = async (e) => {
        e.preventDefault()

        const form = e.target;

        const name = form.name.value;
        const image = form.image.value;

        console.log(name, image);

        await authClient.updateUser({
            name,
            image
        });

    }
    return (
        <Modal>
            <Button variant="secondary"><BiEdit></BiEdit> Upadete Profile</Button>
            <Modal.Backdrop>
                <Modal.Container placement="auto">
                    <Modal.Dialog className="sm:max-w-md">
                        <Modal.CloseTrigger />
                        <Modal.Header>
                            <Modal.Icon className="bg-accent-soft text-accent-soft-foreground">
                                <BiUser className="size-5" />
                            </Modal.Icon>
                            <Modal.Heading>Update Profile</Modal.Heading>
                        </Modal.Header>
                        <Modal.Body className="p-6">
                            <Surface variant="default">
                                <form onSubmit={onSubmit} className="flex flex-col gap-4">
                                    <TextField className="w-full" name="name" type="name">
                                        <Label>Name</Label>
                                        <Input placeholder="Enter your name" />
                                    </TextField>
                                    <TextField className="w-full" name="image" type="url">
                                        <Label>Image URL</Label>
                                        <Input placeholder="Image URL" />
                                    </TextField>
                                </form>
                                <Modal.Footer className="my-5">
                                    <Button type="button" slot="close" variant="secondary">
                                        Cancel
                                    </Button>
                                    <Button type="submit" slot="close">Save</Button>
                                </Modal.Footer>
                            </Surface>
                        </Modal.Body>
                    </Modal.Dialog>
                </Modal.Container>
            </Modal.Backdrop>
        </Modal>
    );
}