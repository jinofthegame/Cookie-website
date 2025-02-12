"use client";
import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

const schema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref("password"), null], "Passwords must match")
        .required("Confirm Password is required"),
});

const Form = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [formSubmitted, setFormSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            console.log("Form Submitted", values);
            setFormSubmitted(true);
        },
    });

    return (
        <div>
            <div className="grid grid-cols-2">
                <div>
                    <h1>Register Form</h1>
                    <form onSubmit={formik.handleSubmit}>
                        <div>
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                id="name"
                                className="border border-green-600"
                                onChange={formik.handleChange}
                                value={formik.values.name}
                            />
                            {formik.errors.name && <p className="text-red-500">{formik.errors.name}</p>}
                        </div>

                        <div>
                            <label htmlFor="email">Email:</label>
                            <input
                                type="email"
                                name="email"
                                id="email"
                                className="border border-green-600"
                                onChange={formik.handleChange}
                                value={formik.values.email}
                            />
                            {formik.errors.email && <p className="text-red-500">{formik.errors.email}</p>}
                        </div>

                        <div>
                            <label htmlFor="password">Password:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                id="password"
                                className="border border-emerald-400"
                                onChange={formik.handleChange}
                                value={formik.values.password}
                            />
                            {formik.errors.password && <p className="text-red-500">{formik.errors.password}</p>}
                        </div>

                        <div>
                            <label htmlFor="confirmPassword">Confirm Password:</label>
                            <input
                                type={showPassword ? "text" : "password"}
                                name="confirmPassword"
                                id="confirmPassword"
                                className="border border-emerald-400"
                                onChange={formik.handleChange}
                                value={formik.values.confirmPassword}
                            />
                            {formik.errors.confirmPassword && <p className="text-red-500">{formik.errors.confirmPassword}</p>}
                        </div>

                        <div>
                            <button
                                type="button"
                                className="text-black underline-offset-auto"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? "Hide" : "Show"} Password
                            </button>
                        </div>

                        <div>
                            <button type="submit" className="bg-red-700 text-white px-4 py-2">
                                Submit
                            </button>
                        </div>
                    </form>

                    {formSubmitted && <h1>Form Submitted Successfully!</h1>}
                </div>
            </div>
        </div>
    );
};

export default Form;
