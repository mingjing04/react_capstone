import React from "react";

const InputBox = ({
    type,
    name,
    required,
    labelText,
    placeholder,
    children,
}) => {
    return (
        <div className="">
            <label className="text-md">{labelText}</label>
            {type != "select" ? (
                <input
                    type={type}
                    name={name}
                    required={required}
                    className="w-full px-4 py-2 border rounded-lg mt-1"
                    placeholder={placeholder}
                />
            ) : (
                <select className="w-full rounded-lg border px-4 py-2 mt-1">
                    {children}
                </select>
            )}
        </div>
    );
};

export default InputBox;
