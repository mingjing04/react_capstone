import React from "react";
import LemonBox from "./LemonBox";
import InputBox from "./InputBox";

const ReserveForm = () => {
    return (
        <>
            <LemonBox>
                <div>
                    <div>
                        <h1 className="font-serif text-xl">Reserve a Table</h1>
                    </div>
                    <div>
                        <form className="mx-6">
                            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                                <InputBox
                                    type="text"
                                    name="name"
                                    required={true}
                                    labelText="First Name *"
                                />
                                <InputBox
                                    type="date"
                                    name="date"
                                    required={true}
                                    labelText="Date *"
                                />
                                <InputBox
                                    type="select"
                                    name="time"
                                    required={true}
                                    labelText="Time *"
                                >
                                
                                </InputBox>
                                <InputBox
                                    type="select"
                                    name="guests"
                                    required={true}
                                    labelText="Guest *"
                                >
                                    {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <option key={num} value={num}>
                                            {num} {num === 1 ? 'Guest' : 'Guests'}
                                        </option>
                                    ))}
                                </InputBox>
                            </div>
                        </form>
                    </div>
                </div>
            </LemonBox>
        </>
    );
};

export default ReserveForm;
