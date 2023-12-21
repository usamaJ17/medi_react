import React from "react";
import PChatBoxHero from "../Patient/PatientDBComponents/PChatBox/PChatBoxHero";

type Props = {};

const AmbulanceChatBox: React.FC<Props> = () => {
    return (
        <div className="h-full w-full p-5 max-w-[1400px] m-auto ">
            {/* Content */}
            <PChatBoxHero />
        </div>
    );
};
export default AmbulanceChatBox;
