import React from "react";
import PChatBoxHero from "./PatientDBComponents/PChatBox/PChatBoxHero";

type Props = {};

const PatientChatBox: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PChatBoxHero />
        </div>
    );
};

export default PatientChatBox;
