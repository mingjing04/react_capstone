import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import LemonBox from "./LemonBox";
import { submitAPI } from "../api";
import { useNavigate } from "react-router-dom";

const ReserveForm = ({ availableTimes, dispatch }) => {

    const [submitted, setSubmitted] = useState(false);
    const validationSchema = Yup.object({
        email: Yup.string()
            .email("Invalid email address")
            .required("Email is required"),
        name: Yup.string().required("Name is required"),
        date: Yup.string()
            .required("Date is required")
            .test(
                "is-future",
                "Date must be today or in the future",
                (value) => {
                    if (!value) return false;
                    const inputDate = new Date(value);
                    const today = new Date();
                    today.setHours(0, 0, 0, 0);

                    return inputDate >= today;
                }
            ),
        time: Yup.string().required("Time is required"),
        guests: Yup.number().required("Number of guests is required"),
    });

    const navigate = useNavigate()

    return (
        <LemonBox>
            <div>
                <h1 className="font-serif text-xl">Reserve a Table</h1>
                <Formik
                    initialValues={{
                        email: "",
                        name: "",
                        date: "",
                        time: "",
                        guests: "",
                        phone: "",
                        occasion: "",
                        occasion_other: "",
                    }}
                    validationSchema={validationSchema}
                    onSubmit={(values, { setSubmitting }) => {
                        console.log("Form values:", values);
                        setTimeout(() => {
                            setSubmitting(false);
                            setSubmitted(true);
                            if (submitAPI()) {
                                navigate('/confirmBooking', { state: { data: values } })
                            }
                        }, 400);
                    }}
                >
                    {({
                        values,
                        errors,
                        touched,
                        isSubmitting,
                        setFieldValue,
                    }) =>
                        (
                            <Form className="mx-6">
                                <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                    {/* Name Field */}
                                    <div>
                                        <label
                                            htmlFor="name"
                                            className="block text-md font-medium"
                                        >
                                            Name *
                                        </label>
                                        <Field
                                            type="text"
                                            name="name"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                        />
                                        {errors.name && touched.name && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.name}
                                            </div>
                                        )}
                                    </div>

                                    {/* Date Field */}
                                    <div>
                                        <label
                                            htmlFor="date"
                                            className="block text-md font-medium"
                                        >
                                            Date *
                                        </label>
                                        <Field
                                            type="date"
                                            name="date"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                            onChange={ (e) => {
                                               setFieldValue('date', e.target.value)
                                               dispatch({ type: 'UPDATE_TIMES', payload: values.date }) 

                                            }}
                                        />
                                        {errors.date && touched.date && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.date}
                                            </div>
                                        )}
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label
                                            htmlFor="email"
                                            className="block text-md font-medium"
                                        >
                                            Email *
                                        </label>
                                        <Field
                                            type="email"
                                            name="email"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                        />
                                        {errors.email && touched.email && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.email}
                                            </div>
                                        )}
                                    </div>

                                    {/* Time Field */}
                                    <div>
                                        <label
                                            htmlFor="time"
                                            className="block text-md font-medium"
                                        >
                                            Time *
                                        </label>
                                        <Field
                                            as="select"
                                            name="time"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                        >
                                            <option value=""> Select time
                                            </option>
                                            {availableTimes.map(time => (
                                                <option key={time} value={time}>
                                                    {time}
                                                </option>
                                            ))}


                                        </Field>
                                        {errors.time && touched.time && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.time}
                                            </div>
                                        )}
                                    </div>

                                    {/* Guests Field */}
                                    <div>
                                        <label
                                            htmlFor="guests"
                                            className="block text-md font-medium"
                                        >
                                            Guests *
                                        </label>
                                        <Field
                                            as="select"
                                            name="guests"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                        >
                                            <option value="">
                                                Select guests
                                            </option>
                                            {[
                                                1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
                                            ].map((num) => (
                                                <option key={num} value={num}>
                                                    {num}{" "}
                                                    {num === 1
                                                        ? "Guest"
                                                        : "Guests"}
                                                </option>
                                            ))}
                                        </Field>
                                        {errors.guests && touched.guests && (
                                            <div className="text-red-500 text-sm mt-1">
                                                {errors.guests}
                                            </div>
                                        )}
                                    </div>

                                    {/* Occasion Field */}
                                    <div className="mb-0">
                                        <label
                                            htmlFor="occasion"
                                            className="block text-md font-medium"
                                        >
                                            Occasion
                                        </label>
                                        <Field
                                            as="select"
                                            name="occasion"
                                            className="mt-1 block w-full h-[40px] rounded-md border border-lemon-green"
                                        >
                                            <option value="">
                                                Select an occasion
                                            </option>
                                            <option value="birthday">
                                                Birthday
                                            </option>
                                            <option value="anniversary">
                                                Anniversary
                                            </option>
                                            <option value="engagement">
                                                Engagement
                                            </option>
                                            <option value="date">
                                                Date Night
                                            </option>
                                            <option value="business">
                                                Business Meal
                                            </option>
                                            <option value="other">Other</option>
                                        </Field>
                                    </div>

                                    {/* Occasion Other Field - Only show when occasion is "other" */}
                                    {values.occasion === "other" && (
                                        <div className="mb-0">
                                            <label
                                                htmlFor="occasion_other"
                                                className="block text-md font-medium"
                                            >
                                                Specify Occasion
                                            </label>
                                            <Field
                                                as="textarea"
                                                name="occasion_other"
                                                className="mt-1 block w-full resize-y h-[40px] rounded-md border border-lemon-green"
                                            />
                                        </div>
                                    )}
                                </div>

                                <div className="flex flex-row justify-center">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="rounded-xl border w-2/3 text-[40px] border-lemon-green hover:bg-lemon-green hover:text-lemon-yellow font-serif text-lemon-green bg-lemon-yellow mt-6"
                                    >
                                        {isSubmitting
                                            ? "Submitting..."
                                            : "Reserve a Table"}
                                    </button>
                                </div>
                            </Form>
                        )
                    }
                </Formik>
            </div>
        </LemonBox>
    );
};

export default ReserveForm;
