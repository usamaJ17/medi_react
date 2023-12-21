import React, { FC, useState } from "react";
import { ReusableButton, ReusableInputField } from "../../utils/Components";

import vicons from "../../../assets/signup/icons/v.png";
// import { getAuth, sendSignInLinkToEmail } from "firebase/auth";


//
import PhoneInput from 'react-phone-number-input'
import 'react-phone-number-input/style.css'
// importing flag
import { useDispatch } from "react-redux";
import {
    signupDecrement,
    signupIncrement,
} from "../../../redux/features/signup/signupSlice";
// import { actionCodeSettings } from "../../../firebase";

// Email Input
const EmailInput: FC<any> = ({ setTab, setTempEmail }) => {
    const dispatch = useDispatch();

    const [email, setEmail] = useState("");

    // const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setEmail(e.target.value);
    // }

    const handleEmailChange = (e: any) => {
        setEmail(e.target.value);
        setTempEmail(e.target.value)
    };

    const handleBackClick = () => {
        dispatch(signupDecrement());
    };

    const handleEmailSubmit = async (e: any) => {
      e.preventDefault();
      console.log("Submited");

    //   const auth = getAuth();
    //   sendSignInLinkToEmail(auth, email, actionCodeSettings)
    //     .then(() => {
    //       window.localStorage.setItem("emailForSignIn", email);
    //       alert("email sent")
    //       // ...
    //     })
    //     .catch((error) => {
    //       const errorCode = error.code;
    //       const errorMessage = error.message;
    //       // ...
    //     });

    //   setEmail("");
      setTab(3);
    };

    return (
        <form
            onSubmit={handleEmailSubmit}
            className="w-3/5 h-full flex flex-col justify-center items-center gap-5"
        >
            <ReusableInputField
                label="Email"
                htmlfor="email"
                type="email"
                required={true}
                placeholder="Enter Your Email"
                onChange={handleEmailChange}
                value={email}
                customeStyle="p-3"
                labelStyle="font-bold text-sm m-2"
                parentDivStyle="w-full"
            />

            <p className="text-sm text-gray_color my-5">
                You will receive a unique member number that includes a country
                code and a 6-digit unique number. This member number serves as
                your identification within the app and ensures a personalized
                experience.
            </p>

            <div className="flex w-full justify-center items-center gap-10">
                <ReusableButton
                    label="Back"
                    onClick={handleBackClick}
                    customeStyle="bg-gray_color text-white my-5"
                />

                <ReusableButton
                    type="submit"
                    label="Submit"
                    customeStyle="bg-blue_color text-white my-5"
                />
            </div>
        </form>
    );
};

// Phone Number Input
const PhoneNumberInput: FC<any> = ({ setTab }) => {
    const dispatch = useDispatch();

    const [phoneNumber, setPhoneNumber] = useState("");




    const handleBackClick = () => {
        dispatch(signupDecrement());
    };



    const handlePhoneNumberSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submitted");
        console.log("Phone Number:", phoneNumber);
        setPhoneNumber("");
        setTab(3);
    };



    return (
        <form
            onSubmit={handlePhoneNumberSubmit}
            className="w-3/5 h-full flex flex-col justify-center items-center gap-5 mt-8"
        >
            <div className="flex w-3/4 justify-start items-center p-1 border rounded-full min-h-[40px]">
                {/* Country Code Select */}
                {/* <div className="relative inline-block w-40">
                    <div className="w-full bg-white  rounded-full">
                        <div
                            className="flex items-center justify-between cursor-pointer "
                            onClick={() => {
                                document
                                    .getElementById("country-options")
                                    ?.classList.toggle("hidden");
                            }}
                        >
                            <div>
                                {selectedCountry ? (
                                    <div className="flex w-36  justify-start items-center gap-2">
                                        <img
                                            src={selectedCountry?.flag}
                                            alt="country"
                                            className="h-10 w-10 object-cover"
                                        />

                                        <p>{selectedCountry?.label}</p>
                                    </div>
                                ) : (
                                    <span>Select Country Code</span>
                                )}
                            </div>
                            <div className="">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div
                        id="country-options"
                        className="hidden absolute w-60 h-58 overflow-y-auto  bg-white border border-gray-300 rounded-lg shadow-lg"
                    >
                        {countryOptions.map((option, index) => (
                            <div
                                key={index}
                                className="cursor-pointer p-4 hover:bg-blue-100 flex items-center justify-start gap-1 "
                                onClick={() => {
                                    handleCountryChange(option);
                                    document
                                        .getElementById("country-options")
                                        ?.classList.add("hidden");
                                }}
                            >
                                <img
                                    src={option.flag}
                                    alt="country"
                                    className="h-10 w-10 object-cover"
                                />{" "}
                                {option.label}
                            </div>
                        ))}
                    </div>
                </div> */}

                {/* Phone Number Input */}
                <PhoneInput
                      international
                      placeholder="Enter phone number"
                      value={phoneNumber}
                    //   onChange={setPhoneNumber}
                      onChange={(value) => setPhoneNumber(value ?? '')}
                      className="p-3 rounded-full w-full"

                    />
                {/* <input
                    type="text"
                    value={phoneNumber}
                    onChange={handlePhoneNumberChange}
                    placeholder="Enter Phone Number"
                    className="p-3 rounded-full w-full"
                /> */}
            </div>

            <p className="text-sm  text-gray-600 my-5">
                You will receive a unique member number that includes a country
                code and a 6-digit unique number. This member number serves as
                your identification within the app and ensures a personalized
                experience.
            </p>

            <div className="flex w-full justify-center items-center gap-10">
                <ReusableButton
                    label="Back"
                    onClick={handleBackClick}
                    customeStyle="bg-gray_color text-white my-5"
                />

                <ReusableButton
                    type="submit"
                    label="Submit"
                    customeStyle="bg-blue_color text-white my-5"
                />
            </div>
        </form>
    );
};

// Verify Acount
const VerifyAccount: FC<any> = ({ setTab }) => {
    const dispatch = useDispatch();

    const [password, setPassword] = useState("");

    // Will add later

    // const handleGoBack = () => {
    //     if (inputMethod === "phone") {
    //         setTab(1); // Go back to the phone number input
    //     } else {
    //         setTab(0); // Go back to the email input
    //     }
    // };

    const handleGoBack = () => {
        setTab(0);
    };

    const handleVerifyChange = (e: any) => {
        setPassword(e.target.value);
    };

    const handleVerifySubmit = (e: any) => {
        e.preventDefault();
        console.log("Submited");
        setPassword("");
        dispatch(signupIncrement());
    };

    return (
        <div className="w-full h-full ">
            <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                <img src={vicons} alt="verify" className="h-40 w-auto" />

                <form
                    onSubmit={handleVerifySubmit}
                    className="w-3/5 h-full flex flex-col justify-center items-center gap-5"
                >
                    <ReusableInputField
                        label="Verification Code"
                        htmlfor="password"
                        type="password"
                        required={true}
                        onChange={handleVerifyChange}
                        value={password}
                        customeStyle="p-3 text-xl font-bold text-center tracking-[2rem]"
                        labelStyle="font-bold text-sm m-2"
                        parentDivStyle="w-full"
                    />

                    <p className="text-sm text-gray_color my-5">
                        You will receive a unique member number that includes a
                        country code and a 6-digit unique number. This member
                        number serves as your identification within the app and
                        ensures a personalized experience.
                    </p>

                    <div className="flex w-full justify-center items-center gap-10">
                        <ReusableButton
                            label="Back"
                            onClick={handleGoBack}
                            customeStyle="bg-gray_color text-white my-5"
                        />

                        <ReusableButton
                            type="submit"
                            label="Verify"
                            customeStyle="bg-blue_color text-white my-5"
                        />
                    </div>
                </form>
            </div>
        </div>
    );
};
type Props = {
    setTempEmail: (accountType: string) => void;
};

// Main Account Verification
const AccountVerification : React.FC<Props>  = ({setTempEmail}) => {
    const [tab, setTab] = useState(0);

    const handleTabSwitch = (index: number) => {
        setTab(index);
    };

    return (
        <div className="h-full w-full">
            <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                {/* Tab */}
                {tab !== 3 && (
                    <div className="w-auto rounded-full text-blue_color h-full my-2 p-1 bg-sky_color">
                        <ReusableButton
                            label="Email"
                            onClick={() => handleTabSwitch(0)}
                            customeStyle={
                                tab === 0
                                    ? "bg-white text-blue_color w-80 shadow shadow-lg"
                                    : "bg-sky_color text-gray_color w-80"
                            }
                        />
                        <ReusableButton
                            label="Phone Number"
                            onClick={() => handleTabSwitch(1)}
                            customeStyle={
                                tab === 1
                                    ? "bg-white text-blue_color w-80 shadow shadow-lg"
                                    : "bg-sky_color text-gray_color w-80"
                            }
                        />
                    </div>
                )}
                {/* Tab Content  */}
                <div className="w-full h-full flex justify-center items-center">
                    {tab === 0 && <EmailInput setTab={setTab} setTempEmail={setTempEmail}/>}
                    {tab === 1 && <PhoneNumberInput setTab={setTab} />}
                    {tab === 3 && <VerifyAccount setTab={setTab} />}
                </div>
            </div>
        </div>
    );
};

export default AccountVerification;
