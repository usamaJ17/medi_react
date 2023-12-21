import React from "react";
import { useDispatch } from "react-redux";
import { signupDecrement } from "../../../../redux/features/signup/signupSlice";
import { ReusableButton, ReusableInputField } from "../../../utils/Components";
import { toast } from "react-toastify";


type Props = {
    personalDetails: any;
    setAmbulanceData: any;
    handleSignUp:any;

};

const AStep3: React.FC<Props> = ({ setAmbulanceData, personalDetails, handleSignUp
}) => {
    const dispatch = useDispatch();




    const handleNextClick = () => {
      if (personalDetails.name === "" || personalDetails.password === "") {
        toast.error("Name and password are required.");
        return;
      }
      // Your logic for handling the next step
      // dispatch(signupIncrement());
      handleSignUp();
      // navigate("/patient/dashboard");
    };

    const handleBackClick = () => {
      dispatch(signupDecrement());
    };

    const handlePersonalDetailsChange = (key: string, value: any) => {
      setAmbulanceData((prevData: any) => ({
        ...prevData,
        personalDetails: {
          ...prevData.personalDetails,
          [key]: value,
        },
      }));
    };

    return (
      <div className="h-full w-full">
        <div className="flex flex-col items-center justify-center h-full w-full ">
          <div className="flex flex-col gap-6 w-2/3 my-5">
            <ReusableInputField
              htmlfor="name"
              label="Name"
              required={true}
              type="text"
              value={personalDetails.name}
              onChange={(e: any) => handlePersonalDetailsChange("name", e.target.value)}
              customeStyle="py-2 px-4"
              parentDivStyle="w-full"
            />
            <ReusableInputField
              htmlfor="password"
              label="Password"
              required={true}
              type="password"
              value={personalDetails.password}
              onChange={(e: any) => handlePersonalDetailsChange("password", e.target.value)}
              customeStyle="py-2 px-4"
              parentDivStyle="w-full"
            />
          </div>

          {/* button */}
          <div className="flex w-full justify-center items-center gap-10">
            <ReusableButton
              label="Back"
              onClick={handleBackClick}
              customeStyle="bg-gray_color text-white my-5"
            />

            <ReusableButton
              label="Next"
              onClick={handleNextClick}
              customeStyle="bg-blue_color hover:bg-blue_color_dark duration-200 text-[#fff]"
            />
          </div>
        </div>
      </div>
    );
};

export default AStep3;
