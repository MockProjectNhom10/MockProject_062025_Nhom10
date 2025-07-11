import Button from "@chief-police/components/common/button/Button";
import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import TextArea from "@chief-police/components/common/input/TextArea";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";

import {
  medicalSupportColumns,
  officerColumns,
  preservationColumns,
} from "@chief-police/constants/tableStyles";

import { Plus } from "lucide-react";
import React, { useState } from "react";

const SceneManagementForm = () => {
  // State for form inputs
  const [formData, setFormData] = useState({
    dispatchTime: { hour: "09", minute: "32", period: "AM" },
    arrivalTime: { hour: "09", minute: "45", period: "AM" },
    dispatchDate: null,
    arrivalDate: null,
    unit: "",
    officers: [
      {
        id: 1,
        name: "Brandie",
        role: "Patrol Officer",
        phone: "(225) 555-0118",
      },
      {
        id: 2,
        name: "Brandie",
        role: "Patrol Officer",
        phone: "(225) 555-0118",
      },
      { id: 3, name: "Brandie", role: "Detective", phone: "(225) 555-0118" },
    ],
    preservationMeasures: [
      {
        id: 1,
        measure:
          "Immediate perimeter established using police tape (approx. 30-meter radius)",
      },
      { id: 2, measure: "Vehicle stabilized to prevent further movement." },
      {
        id: 3,
        measure: "Photographic documentation of the scene commenced at 22:26.",
      },
    ],
    medicalSupport: [
      { id: 1, unitId: "EMS45", type: "Medical Emergency", time: "08:00 PM" },
      { id: 2, unitId: "RES-012", type: "Patrol Officer", time: "08:00 PM" },
      { id: 3, unitId: "RES-012", type: "Detective", time: "08:00 PM" },
    ],
    situationAssessment: "",
  });

  // Handle form input changes
  const handleInputChange = (name, value) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle TimePicker changes
  const handleTimeChange = (name, { hour, minute, period }) => {
    setFormData((prev) => ({
      ...prev,
      [name]: { hour, minute, period },
    }));
  };

  return (
    <div className="mx-auto min-h-screen max-w-6xl bg-gray-50 p-6">
      <FormSection title="Initial Response">
        <FormCard
          title="TIME OF DISPATCHING FORCES TO THE SCENE"
          button={
            <CustomDatePicker
              selected={formData.dispatchDate}
              onChange={(date) => handleInputChange("dispatchDate", date)}
              className="h-12 w-full rounded-md border px-4 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          }
        />
        <FormCard
          title="TIME OF ARRIVAL AT THE SCENE"
          button={
            <TimePicker
              selected={formData.arrivalTime}
              onChange={(date) => handleTimeChange("arrivalTime", date)}
              className="h-12 w-full rounded-md border px-4 text-base focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />
          }
        />

        <FormCard
          title="LIST OF OFFICERS ASSIGNED TO THE SCENE"
          button={
            <Button variant="chief">
              <span className="flex items-center gap-2 text-gray-800">
                View
              </span>
            </Button>
          }
        >
          <GenericTable
            columns={officerColumns}
            data={formData.officers}
            variant="preservation"
          />
        </FormCard>

        <FormCard title="PRELIMINARY ASSESSMENT OF THE SCENE SITUATION">
          <TextArea
            name="situationAssessment"
            value={formData.situationAssessment}
            onChange={(e) =>
              handleInputChange("situationAssessment", e.target.value)
            }
            placeholder=""
            rows={4}
          />
        </FormCard>

        <FormCard
          title="SCENE PRESERVATION MEASURES TAKEN"
          button={
            <Button variant="chief">
              <span className="flex items-center gap-2 text-gray-800">
                Add
                <Plus size={18} />
              </span>
            </Button>
          }
        >
          <GenericTable
            columns={preservationColumns}
            data={formData.preservationMeasures}
            variant="preservation"
          />
        </FormCard>

        <FormCard
          title="INFORMATION ON MEDICAL/RESCUE SUPPORT PROVIDED"
          button={
            <Button variant="chief">
              <span className="flex items-center gap-2 text-gray-800">
                Add
                <Plus size={18} />
              </span>
            </Button>
          }
        >
          <GenericTable
            columns={medicalSupportColumns}
            data={formData.medicalSupport}
            variant="preservation"
          />
        </FormCard>
      </FormSection>
    </div>
  );
};

export default SceneManagementForm;
