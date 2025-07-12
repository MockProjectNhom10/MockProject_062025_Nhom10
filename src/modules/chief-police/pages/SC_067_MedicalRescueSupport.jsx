import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import TextArea from "@chief-police/components/common/input/TextArea";
import DragAndDropUpload from "@chief-police/components/common/upload/DragAndDropUpload";

import React from "react";

const SC_067_MedicalRescueSupport = () => {
    const formData = [
        { title: "MEDICAL/RESCUE UNIT ID", value: "" },
        { title: "TYPE OF SUPPORT PROVIDED", value: "" },
        { title: "PERSONNEL ASSIGNED", value: "" },
        { title: "LOCATION ASSIGNED", value: "" },
        { title: "REMARKS/NOTES", value: "" },
    ];
    return(
        <FormSection title="MEDICAL/RESCUE SUPPORT">
            {formData.map(({ title }, index) => (
                <FormCard key={index} title={title}>
                    <TextArea
                        name={title.toLowerCase().replace(/\s+/g, "_")}
                        value=""
                        onChange={() => {}}
                        placeholder={`Enter ${title}`}
                        rows={3}
                    />
                </FormCard>
            ))}

            <FormCard title="SCENE SKETCH">
                <DragAndDropUpload />
            </FormCard>

        </FormSection>
    )
}

export default SC_067_MedicalRescueSupport