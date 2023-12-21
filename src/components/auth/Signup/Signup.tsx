import { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import SignupOptions from "./SignupOptions";
import AccountType from "./AccountType";
import AccountVerification from "./AccountVerification";
import makeApiCall from "../../../UtilityFunctions/ApiCallHandler/index.js"
import { toast } from "react-toastify";

// TypeScript file


// Hospital
import HStep3 from "./Hospital/HStep3";
import HStep4 from "./Hospital/HStep4";
import HStep5 from "./Hospital/HStep5";
import HStep6 from "./Hospital/HStep6";

// Patient

import PStep3 from "./Patient/PStep3";
import PStep4 from "./Patient/PStep4";
import PStep5 from "./Patient/PStep5";
import PStep6 from "./Patient/PStep6";
import PStep7 from "./Patient/PStep7";
import PStep8 from "./Patient/PStep8";
import PStep9 from "./Patient/PStep9";
import { routeUrl } from "../../../UtilityFunctions/ApiRoutes/index.js";
import { useNavigate } from "react-router-dom";

// Ambulace
import AStep3 from "./Ambulance/AStep3";

const Signup = () => {
    const { active } = useSelector((state: any) => state.signupProcess);
    const navigate = useNavigate();


    const [accountType, setAccountType] = useState("patient");
    const [patientData, setPatientData] = useState({
        personalDetails: {
            firstName: "",
            lastName: "",
            email:"",
            password:"",
            dateOfBirth: "",
            gender: "",
            country: "",
            address: "",
            bloodType: "",
            city: "",
            postalCode: "",
            passportNumber: "",
            height: "",
            weight: "",
        },
        travelDetails: {
            travelReason: "",
            dateOfTravel: "",
            travelLocation: "",
        },
        medicalHistory: {
            medicalCondition: "",
            sicknessHistory: [],
            surgicalHistory: "",
            allergy: "",
            medication: "",
            medicationTypes: [],
            customInputMedications: [],
        },
        vaccineHistory: {
            hasReceivedCovidVaccine: "", // "yes" or "no"
            dosesReceived: "", // "one", "two", "moreThanTwo"
            timeSinceLastVaccination: "", // "lessThanHalfYear", "moreThanYear", "overYear"
            immunizationHistory: [
                {
                    vaccines: "",
                    dateOfVaccine: "",
                },
            ],
        },

        emergencyContacts: [
            {
                nameOfEmergencyContact: "",
                phoneNumber: "",
                relationship: "",
                email: "",
                mediaiId: "",
            },
        ],
        lifestyleFactors: {
            smokingHabits: "",
            alcoholConsumptions: "",
            physicalActivityLevel: "",
            preferences: "",
        },
        uploadDocuments: [],
    });

    console.log("Patient Data", patientData);

    const [hospitalData, setHospitalData] = useState({
        personalDetails: {
            name: "",
            phoneNumber: "",
            location: "",
            email: "",
            password:"",
            country: "",
            address: "",
            city: "",
            postalCode: "",
            currency: "",
            websiteUrl: "",
        },
        uploadLogo: null,
        workingHours: [
            {
                day: "Monday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Tuesday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Wednesday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Thursday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Friday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Saturday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            {
                day: "Sunday",
                isOpen: true,
                openTime: "09:00",
                closeTime: "17:00",
            },
            // {
            //     day: "Holiday",
            //     isOpen: false,
            //     openTime: "",
            //     closeTime: "",
            // },
        ],
        availableDoctors: [{ fullName: " ", selectAccount: "" }],
    });
    const [ambulanceData, setAmbulanceData] = useState({
        personalDetails: {
            email: "",
            password:"",
            name:"",
        },
    });

    const [tempEmail, setTempEmail] = useState("")
    console.log("tempmail", tempEmail);
    console.log("HospitalData", hospitalData);

    // const [ambulanceData, setAmbulanceData] = useState({});

    useEffect(() => {
        setPatientData((prevData: any) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
             email  : tempEmail,
            },
        }));
        setHospitalData((prevData: any) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
                email: tempEmail,
            },
        }));
        setAmbulanceData((prevData: any) => ({
            ...prevData,
            personalDetails: {
                ...prevData.personalDetails,
                email: tempEmail,
            },
        }));
    

    }, [tempEmail])
    

    const prepareBodyDataForSignup = () => {
        let body: any = {};
      
        if (accountType === "patient") {
          body = {
            ...patientData,
            role: accountType,
          };
        }
        else if(accountType === "hospital"){
            body = {
                ...hospitalData,
                role: accountType,
              };
        }
        else if(accountType === "ambulance"){
            body = {
                ...ambulanceData,
                role: accountType,
              };
        }
      
        console.log("bodyOfuser", body);
        signUpfinalApiCall(body)
      };
    //   url, body = null, method = 'GET'
      const signUpfinalApiCall =(body:any)=>{
        const url  =  routeUrl.sendSignUpDetailsOnLastScreen
        makeApiCall(url, body, 'POST')
        .then(data => {
          console.log('Data received:', data);
          localStorage.setItem('userData', JSON.stringify(data));
          navigateOnBaseOfRole(data.role[0])
          toast.success("signed up successfully")

        //   navigate("/patient/dashboard");


          // Handle the received data
        })
        .catch(error => {
          console.error('API call failed:', error);
          // Handle the error (e.g., show an error message to the user)
        });
      }
// alert(accountType)

const navigateOnBaseOfRole = (role: string) => {
    switch (role) {
      case "patient":
        navigate("/patient/dashboard");
        break;

      case "hospital":
        navigate("/patient/hospitals");
        break;

      case "ambulance":
        navigate("/patient/ambulance");
        break;

      default:
        break;
    }
  };

    return (
        <section className="signup_background h-full w-full min-h-screen">
            <div className="h-full w-full p-5 font-raleway">
                {/* heading */}
                <div className="flex justify-start items-start h-full w-full flex-col gap-2 p-2">
                    <h1 className=" text-4xl font-bold text-blue_color">
                        {" "}
                        Sign Up
                    </h1>
                    <p className="font-normal text-sm">
                        Lorem ipsum dolor sit amet, consectetur adi elit, sed do
                        eiusmod. Lorem ipsum dolor sit amet
                    </p>
                </div>

                {/* steps */}
                <div className="w-full h-full my-5 p-5">
                    <SignupOptions accountType={accountType} />
                </div>

                {/* Box with value */}
                <div className="w-full h-full p-5 flex justify-center items-center">
                    {active === 1 && (
                        <AccountType
                            accountType={accountType}
                            setAccountType={setAccountType}
                        />
                    )}

                    {active === 2 && <AccountVerification setTempEmail={setTempEmail} />}

                    {/* Patient */}

                    {active === 3 && accountType === "patient" && (
                        <PStep3
                            personalDetails={patientData.personalDetails}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 4 && accountType === "patient" && (
                        <PStep4
                            travelDetails={patientData.travelDetails}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 5 && accountType === "patient" && (
                        <PStep5
                            medicalHistory={patientData.medicalHistory}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 6 && accountType === "patient" && (
                        <PStep6
                            vaccineHistory={patientData.vaccineHistory}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 7 && accountType === "patient" && (
                        <PStep7
                            emergencyContacts={patientData.emergencyContacts}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 8 && accountType === "patient" && (
                        <PStep8
                            lifestyleFactors={patientData.lifestyleFactors}
                            setPatientData={setPatientData}
                        />
                    )}
                    {active === 9 && accountType === "patient" && (
                        <PStep9
                            uploadDocuments={patientData.uploadDocuments}
                            setPatientData={setPatientData}
                            handleSignUp={prepareBodyDataForSignup}
                        />
                    )}

                    {/* Hospital */}
                    {active === 3 && accountType === "hospital" && (
                        <HStep3
                            personalDetails={hospitalData.personalDetails}
                            setHospitalData={setHospitalData}
                        />
                    )}
                    {active === 4 && accountType === "hospital" && (
                        <HStep4
                            uploadLogo={hospitalData.uploadLogo}
                            setHospitalData={setHospitalData}
                        />
                    )}
                    {active === 5 && accountType === "hospital" && (
                        <HStep5
                            workingHours={hospitalData.workingHours}
                            setHospitalData={setHospitalData}
                        />
                    )}
                    {active === 6 && accountType === "hospital" && (
                        <HStep6
                            availableDoctors={hospitalData.availableDoctors}
                            setHospitalData={setHospitalData}
                            handleSignUp={prepareBodyDataForSignup}
                        />
                    )}


                    {/* Ambulace */}


                    {active === 3 && accountType === "ambulance" && (
                        <AStep3
                            personalDetails={ambulanceData.personalDetails}
                            setAmbulanceData={setAmbulanceData}
                            handleSignUp={prepareBodyDataForSignup}
                        />
                    )}

                </div>
            </div>
        </section>
    );
};

export default Signup;
