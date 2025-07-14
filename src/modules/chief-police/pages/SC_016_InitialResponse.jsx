import React, { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CustomDatePicker from "@chief-police/components/common/date-time/DatePicker";
import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import GenericTable from "@chief-police/components/table/GenericTable";
import Button from "@chief-police/components/common/button/Button";
import TextArea from "@chief-police/components/common/input/TextArea";
import ActionButtons from "@chief-police/components/common/button/ActionButtons";
import { PlusCircle } from "lucide-react";

const ASSIGNED_OFFICERS_STORAGE_KEY = "assignedOfficersList";

const SC_016_InitialResponse = () => {
  //
  const [scenePreservationMeasures, setScenePreservationMeasures] = useState([]);
  const [medicalRescueData, setMedicalRescueData] = useState([]);

  const navigate = useNavigate();
  const location = useLocation();

  const [assignedOfficers, setAssignedOfficers] = useState(() => {
    try {
      const storedOfficers = localStorage.getItem(ASSIGNED_OFFICERS_STORAGE_KEY);
      return storedOfficers ? JSON.parse(storedOfficers) : [];
    } catch (error) {
      console.error("Failed to load officers from localStorage:", error);
      return []; 
    }
  });

  useEffect(() => {
    const selectedUsers = location.state?.selectedUsers;
    if (!selectedUsers || selectedUsers.length === 0) {
      return;
    }

    setAssignedOfficers((prevOfficers) => {
      const existingPhones = new Set(prevOfficers.map((o) => o.phone));
      const uniqueNewOfficers = selectedUsers.filter(
        (newUser) => !existingPhones.has(newUser.phone)
      );

      const transformed = uniqueNewOfficers.map((user) => ({
        id: user.phone, 
        name: user.fullName,
        phone: user.phone,
        role: user.role,
      }));

      return [...prevOfficers, ...transformed];
    });

    navigate(location.pathname, {
      replace: true,
      state: { ...location.state, selectedUsers: undefined },
    });
  }, [location.state?.selectedUsers, navigate, location.pathname]); // Dependency on navigate and location.pathname for effect stability

  useEffect(() => {
    try {
      localStorage.setItem(ASSIGNED_OFFICERS_STORAGE_KEY, JSON.stringify(assignedOfficers));
    } catch (error) {
      console.error("Failed to save officers to localStorage:", error);
    }
  }, [assignedOfficers]); 


  //SCENE PRESERVATION MEASURES TAKEN
  useEffect(() => {
    try {
      const stored = localStorage.getItem("scenePreservationMeasures");
      if (stored) {
        setScenePreservationMeasures(JSON.parse(stored));
      }
    } catch (error) {
      console.error("Failed to load preservation measures:", error);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("medicalRescueSupport");
    if (stored) {
      setMedicalRescueData(JSON.parse(stored));
    }
  }, []);
  

  const onClickNext = () => {
    navigate("/chief-police/scene-information");
  };

  const actionButtonsTwoOptions = [
    { label: "Delete", color: "red" },
    { label: "Edit", color: "teal" },
  ];

  const actionButtonsThreeOptions = [
    { label: "Delete", color: "red" },
    { label: "Edit", color: "teal" },
    { label: "View", color: "gray" },
  ];

  return (
    <FormSection
      title="INITIAL RESPONSE"
      footerCancel
      footerSave
      footerNext
      onClickNext={onClickNext}
    >
      {/* TIME OF DISPATCHING */}
      <FormCard
        title="TIME OF DISPATCHING FORCES TO THE SCENE"
        button={<CustomDatePicker />}
      />

      {/* TIME OF ARRIVAL */}
      <FormCard title="TIME OF ARRIVAL AT THE SCENE" button={<TimePicker />} />

      {/* LIST OF OFFICERS ASSIGNED */}
      <FormCard
        classNameHeader="mb-4"
        title="LIST OF OFFICERS ASSIGNED TO THE SCENE"
        button={
          <Button
            classNameChildren="flex flex-nowrap gap-2"
            onClick={() => navigate("add-patrol")}
          >
            Add <PlusCircle className="h-4 w-4" />
          </Button>
        }
      >
        <GenericTable
          columns={[
            { header: "Fullname", accessor: "name" },
            { header: "Phone number", accessor: "phone" },
            { header: "Role", accessor: "role" },
            {
              header: "Details",
            },
          ]}
          data={assignedOfficers}
        />
      </FormCard>

      {/* PRELIMINARY ASSESSMENT */}
      <FormCard
        classNameHeader="mb-4"
        title="PRELIMINARY ASSESSMENT OF THE SCENE SITUATION"
        button={
          <Button classNameChildren="flex flex-nowrap gap-2">
            Add <PlusCircle className="h-4 w-4" />
          </Button>
        }
      >
        <TextArea />
      </FormCard>
      <FormCard
        classNameHeader="mb-4"
        title="SCENE PRESERVATION MEASURES TAKEN"
        button={
          <Button
            onClick={() => navigate("information-protection-field")}
            classNameChildren="flex flex-nowrap gap-2"
          >
            Add {<PlusCircle className="h-4 w-4" />}
          </Button>
        }
      >
        <GenericTable
  columns={[
    { header: "#", accessor: "index" },
    {
      header: "Preservation Measures",
      accessor: "preservationMeasures",
    },
    {
      accessor: "actions",
    },
  ]}
  data={scenePreservationMeasures.map((item, idx) => ({
    index: idx + 1,
    preservationMeasures: item.preservationMeasures,
    actions: <ActionButtons actions={actionButtonsTwoOptions} />,
  }))}
/>

      </FormCard>
      <FormCard
        classNameHeader="mb-4"
        title="INFORMATION ON MEDICAL/RESCUE SUPPORT PROVIDED"
        button={
          <Button
            onClick={() => navigate("medical-rescue-support")}
            classNameChildren="flex flex-nowrap gap-2"
          >
            Add {<PlusCircle className="h-4 w-4" />}
          </Button>
        }
      >
        <GenericTable
  columns={[
    { header: "Medical/Rescue Unit ID", accessor: "unitID" },
    { header: "Type of Support Provided", accessor: "supportType" },
    { header: "Time of Arrival", accessor: "arrivalTime" },
    { accessor: "actions" },
  ]}
  data={medicalRescueData.map((item) => ({
    unitID: item.unitID,
    supportType: item.supportType,
    arrivalTime: item.arrivalTime,
    actions: <ActionButtons actions={actionButtonsThreeOptions} />,
  }))}
/>

      </FormCard>
    </FormSection>
  );
};

export default SC_016_InitialResponse;