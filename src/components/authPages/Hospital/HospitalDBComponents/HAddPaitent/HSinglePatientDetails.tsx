import { FC } from "react";
import { useParams } from "react-router-dom";
import dt1 from "../../../../../assets/dashboardIcons/h/dt1.png";
import b1 from "../../../../../assets/dashboardIcons/h/b1.png";
import g1 from "../../../../../assets/dashboardIcons/h/g1.png";
import c1 from "../../../../../assets/dashboardIcons/h/c1.png";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { GrShare } from "react-icons/gr";
import { AiOutlineFileZip } from "react-icons/ai";

type Props = {};

const HSinglePatientDetails: FC<Props> = () => {
    const patientDetails = {
        id: 1243,
        name: "Michael Scott",
        avatar: "https://imgix.bustle.com/uploads/image/2018/4/9/0e1587de-fd74-4e77-9264-62a0bf5e894a-nup_130296_0067.jpeg?w=998&h=598&fit=crop&crop=faces&auto=format&q=70",
        age: 32,
        bloodGroup: "A+",
        gender: "Male",

        patientBrifNote:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",

        patientMedicalHistory: {
            medicalCondition: "Hypertension",
            surgicalHistory: "Appendectomy",
            allergy: "Pollen",
            medication: "Aspirin",
        },

        // const patientDetails?.patientMedicalHistory = null;

        // Dummy immunization history data
        patientImmunizationHistory: [
            {
                vaccines: "Flu Shot",
                dateOfVaccine: "2022-09-15",
            },
            {
                vaccines: "COVID-19 Vaccine",
                dateOfVaccine: "2021-06-30",
            },
            {
                vaccines: "Cough Shot",
                dateOfVaccine: "2022-09-15",
            },
            {
                vaccines: "COVID-23 Vaccine",
                dateOfVaccine: "2021-06-30",
            },
        ],

        patientUploadedDocuments: [
            {
                name: "Document 1",
                shareableLink: "https://example.com/document1",
            },
            {
                name: "Document 2",
                shareableLink: "https://example.com/document2",
            },
            {
                name: "Document 3",
                shareableLink: "https://example.com/document3",
            },
        ],
    };

    const { hSinglepatientID } = useParams();

    console.log(hSinglepatientID);

    return (
        <section className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* as wrapper */}
            <div className="w-full h-full">
                <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
                    {/* image and blood details */}

                    <div className="w-full h-full flex flex-col justify-center items-center gap-5">
                        {/* img */}

                        <div className="w-40 h-40 rounded-full overflow-hidden">
                            <img
                                src={patientDetails?.avatar}
                                alt={patientDetails?.name}
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <p className="text-xl font-semibold">
                            {patientDetails?.name}
                        </p>

                        {/* blood box */}
                        <div className="flex w-full h-full my-5 justify-center items-center gap-10 text-blue_color font-extrabold text-lg">
                            <div className="h-40 w-48 shadow-md rounded-lg flex flex-col gap-5 p-5 justify-center items-center bg-gradient-to-br from-white to-slate-100">
                                <img
                                    src={dt1}
                                    alt="date"
                                    className="h-20 w-auto object-cover"
                                />

                                <p>{patientDetails?.age}</p>
                            </div>

                            {/* blood */}

                            <div className="h-40 w-48 shadow-md rounded-lg flex flex-col gap-5 p-5 justify-center items-center bg-gradient-to-br from-white to-slate-100">
                                <img
                                    src={b1}
                                    alt="blood"
                                    className="h-20 w-auto object-cover"
                                />

                                <p>{patientDetails?.bloodGroup}</p>
                            </div>

                            {/* Gender */}

                            <div className="h-40 w-48 shadow-md rounded-lg flex flex-col gap-5 p-5 justify-center items-center bg-gradient-to-br from-white to-slate-100">
                                <img
                                    src={g1}
                                    alt="gender"
                                    className="h-20 w-auto object-cover"
                                />

                                <p>{patientDetails?.gender}</p>
                            </div>

                            {/* Chat */}

                            <div className="h-40 w-48 shadow-md rounded-lg flex flex-col gap-5 p-5 justify-center items-center bg-gradient-to-br from-white to-slate-100">
                                <img
                                    src={c1}
                                    alt="date"
                                    className="h-20 w-auto object-cover"
                                />

                                <p>Chat</p>
                            </div>
                        </div>
                    </div>

                    {/* Patient summery */}

                    <div className="w-full h-full">
                        {/* brif */}
                        <div className=" w-full bg-[#fff] rounded-t-md my-10 ">
                            {/* Heading */}

                            <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                                <h1 className="text-xl font-semibold">
                                    Brief Notes
                                </h1>
                                <MdOutlineKeyboardArrowDown className="text-2xl" />
                            </div>

                            <div className=" w-full flex flex-col gap-4 h-[10rem] overflow-y-auto px-5 py-3">
                                <p className="text-left font-normal text-lg my-5 line-clamp-3">
                                    {patientDetails?.patientBrifNote}
                                </p>
                            </div>
                        </div>

                        {/* Grid */}

                        <div className="w-full h-full grid grid-cols-1 md:grid-cols-2 gap-10">
                            {/* Medical History as an Object */}

                            <div className=" w-full bg-[#fff] rounded-t-md ">
                                {/* Heading */}

                                <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                                    <h1 className="text-xl font-semibold">
                                        Medical History
                                    </h1>
                                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                                </div>

                                <div className=" w-full flex flex-col gap-4 h-[20rem] overflow-y-auto px-5 py-3">
                                    {patientDetails?.patientMedicalHistory ? (
                                        <>
                                            <div className=" flex flex-col w-full h-full gap-2">
                                                <h2 className="font-semibold text-[16px]">
                                                    Medical Condition
                                                </h2>
                                                <p className="text-sm line-clamp-3">
                                                    {
                                                        patientDetails
                                                            ?.patientMedicalHistory
                                                            ?.medicalCondition
                                                    }
                                                </p>
                                            </div>

                                            <div className=" flex flex-col w-full h-full gap-2">
                                                <h2 className="font-semibold text-[16px]">
                                                    Surgical history
                                                </h2>
                                                <p className="text-sm line-clamp-3">
                                                    {
                                                        patientDetails
                                                            ?.patientMedicalHistory
                                                            ?.surgicalHistory
                                                    }
                                                </p>
                                            </div>

                                            <div className=" flex flex-col w-full h-full gap-2">
                                                <h2 className="font-semibold text-[16px]">
                                                    Allergies
                                                </h2>
                                                <p className="text-sm line-clamp-3">
                                                    {
                                                        patientDetails
                                                            ?.patientMedicalHistory
                                                            ?.allergy
                                                    }
                                                </p>
                                            </div>

                                            <div className=" flex flex-col w-full h-full gap-2">
                                                <h2 className="font-semibold text-[16px]">
                                                    Medications
                                                </h2>
                                                <p className="text-sm line-clamp-3">
                                                    {
                                                        patientDetails
                                                            ?.patientMedicalHistory
                                                            ?.medication
                                                    }
                                                </p>
                                            </div>
                                        </>
                                    ) : (
                                        <p className="text-center font-semibold text-xl my-5">
                                            No Medical History Found
                                        </p>
                                    )}
                                </div>
                            </div>

                            {/* Immunization History As an Array */}

                            <div className="  w-full bg-[#fff] rounded-t-md ">
                                {/* Heading */}

                                <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                                    <h1 className="text-xl font-semibold">
                                        Immunization History
                                    </h1>
                                    <MdOutlineKeyboardArrowDown className="text-2xl" />
                                </div>

                                <div className=" w-full flex flex-col gap-2 h-[20rem] overflow-y-auto">
                                    {patientDetails?.patientImmunizationHistory
                                        ?.length > 0 ? (
                                        patientDetails?.patientImmunizationHistory?.map(
                                            (item, index) => (
                                                <div
                                                    className="w-full h-20 flex  justify-between px-5 py-3 items-start "
                                                    key={index}
                                                >
                                                    <div className="flex flex-col justify-start items-start gap-3">
                                                        <h3 className="text-[16px] font-semibold">
                                                            Vaccine {index + 1}
                                                        </h3>
                                                        <p className="text-sm line-clamp-1">
                                                            {item.vaccines}
                                                        </p>
                                                    </div>

                                                    <p className="font-semibold text-[16px]">
                                                        {item.dateOfVaccine}
                                                    </p>
                                                </div>
                                            )
                                        )
                                    ) : (
                                        <p className="text-center font-semibold text-xl my-5">
                                            No Data Found
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="h-auto w-full bg-[#fff] rounded-t-md my-10">
                            <div className="flex justify-between px-5 py-3 items-center w-full bg-gradient-to-br text-blue_color from-slate-50 to-slate-200 rounded-md shadow-lg">
                                <h1 className="text-xl font-semibold">
                                    Documents
                                </h1>
                                <MdOutlineKeyboardArrowDown className="text-2xl" />
                            </div>

                            <div className=" w-full flex flex-col gap-2 h-[20rem] overflow-y-auto">
                                {patientDetails?.patientUploadedDocuments
                                    .length > 0 ? (
                                    patientDetails?.patientUploadedDocuments?.map(
                                        (item, index) => (
                                            <div
                                                className="w-full h-20 flex justify-between py-10 px-5 items-start text-blue_color "
                                                key={index}
                                            >
                                                <div className=" flex justify-center items-center gap-3">
                                                    <AiOutlineFileZip className="text-3xl" />
                                                    <p className="font-semibold">
                                                        {item?.name}
                                                    </p>
                                                </div>

                                                <GrShare className="text-xl text-blue_color" />
                                            </div>
                                        )
                                    )
                                ) : (
                                    <p>No Data found</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HSinglePatientDetails;
