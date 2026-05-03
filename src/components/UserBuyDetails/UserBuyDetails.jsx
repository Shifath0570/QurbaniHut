"use client"
import { FloppyDisk } from "@gravity-ui/icons";
import { Button, Description, FieldError, FieldGroup, Fieldset, Form, Input, Label, TextArea, TextField, } from "@heroui/react";
import { useState } from "react";
import { toast } from "react-toastify";

const UserBuyDetails = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        toast.success("✅ Booking successful!");

    };

    return (
        <div>
            <div className="card">
                <Form onSubmit={handleSubmit} className="w-full max-w-96">
                    <Fieldset className='w-96'>
                        <Fieldset.Legend className="my-2">Enter customer Information</Fieldset.Legend>
                        <FieldGroup>
                            <TextField
                                isRequired
                                name="name"
                                validate={(value) => {
                                    if (value.length < 3) {
                                        return "Name must be at least 3 characters";
                                    }
                                    return null;
                                }}
                            >
                                <Label>Name</Label>
                                <Input placeholder="Enter Your Name" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="email" type="email">
                                <Label>Email</Label>
                                <Input placeholder="Enter Your Email" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="phone" type="Number">
                                <Label>Phone</Label>
                                <Input placeholder="Enter Your Number" />
                                <FieldError />
                            </TextField>

                            <TextField isRequired name="address" type="text">
                                <Label>Address</Label>
                                <Input placeholder="Enter Your Address" />
                                <FieldError />
                            </TextField>
                        </FieldGroup>
                        <Fieldset.Actions>
                            <Button type="submit">
                                <FloppyDisk />
                                Save Buying Data
                            </Button>
                            <Button type="reset" variant="secondary">
                                Cancel
                            </Button>
                        </Fieldset.Actions>
                    </Fieldset>
                </Form>
            </div>
        </div>
    );
};

export default UserBuyDetails;