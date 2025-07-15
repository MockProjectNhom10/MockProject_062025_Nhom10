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
import DeleteModal from "@chief-police/components/modal/DeleteModal";
import {
  officerColumns,
  getPreservationColumns,
  getMedicalSupportColumns,
} from "@chief-police/constants/tableStyles";

const ASSIGNED_OFFICERS_STORAGE_KEY = "assignedOfficersList";

const SC_016_InitialResponse = () => {
  const [scenePreservationMeasures, setScenePreservationMeasures] = useState(
    [],
  );
  const [medicalRescueData, setMedicalRescueData] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  const [assignedOfficers, setAssignedOfficers] = useState(() => {
    try {
      const storedOfficers = localStorage.getItem(
        ASSIGNED_OFFICERS_STORAGE_KEY,
      );
      return storedOfficers ? JSON.parse(storedOfficers) : [];
    } catch (error) {
      console.error("Failed to load officers from localStorage:", error);
      return [];
    }
  });

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);

  const [deletePreservationModalOpen, setDeletePreservationModalOpen] =
    useState(false);
  const [deletePreservationTarget, setDeletePreservationTarget] =
    useState(null);

  useEffect(() => {
    const selectedUsers = location.state?.selectedUsers;
    if (!selectedUsers || selectedUsers.length === 0) {
      return;
    }

    setAssignedOfficers((prevOfficers) => {
      const existingPhones = new Set(prevOfficers.map((o) => o.phone));
      const uniqueNewOfficers = selectedUsers.filter(
        (newUser) => !existingPhones.has(newUser.phone),
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
  }, [location.state?.selectedUsers, navigate, location.pathname]);

  useEffect(() => {
    try {
      localStorage.setItem(
        ASSIGNED_OFFICERS_STORAGE_KEY,
        JSON.stringify(assignedOfficers),
      );
    } catch (error) {
      console.error("Failed to save officers to localStorage:", error);
    }
  }, [assignedOfficers]);

  // SCENE PRESERVATION MEASURES TAKEN
  useEffect(() => {
    try {
      const stored = localStorage.getItem("scenePreservationMeasures");
      if (stored) {
        setScenePreservationMeasures(JSON.parse(stored));
      } else {
        setScenePreservationMeasures([
          { id: 1, measure: "Đặt rào chắn quanh hiện trường" },
        ]);
      }
    } catch (error) {
      console.error("Failed to load preservation measures:", error);
      setScenePreservationMeasures([
        { id: 1, measure: "Đặt rào chắn quanh hiện trường" },
      ]);
    }
  }, []);

  useEffect(() => {
    const stored = localStorage.getItem("medicalRescueSupport");
    if (stored) {
      setMedicalRescueData(JSON.parse(stored));
    } else {
      setMedicalRescueData([
        {
          unitId: "MR-01",
          type: "Cấp cứu nạn nhân",
          time: "08:30 25/06/2025",
        },
      ]);
    }
  }, []);

  const onClickNext = () => {
    navigate("/chief-police/scene-information");
  };

  const handleDeleteClick = (item, idx) => {
    setDeleteTarget({ item, idx });
    setDeleteModalOpen(true);
  };
  const handleEditClick = (item, idx) => {
    // TODO: Implement edit logic
  };
  const handleViewClick = (item, idx) => {
    // TODO: Implement view logic
  };
  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      setMedicalRescueData((prev) =>
        prev.filter((_, idx) => idx !== deleteTarget.idx),
      );
      setDeleteModalOpen(false);
      setDeleteTarget(null);
    }
  };
  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  const handleDeletePreservationClick = (item, idx) => {
    setDeletePreservationTarget({ item, idx });
    setDeletePreservationModalOpen(true);
  };
  const handleDeletePreservationConfirm = () => {
    if (deletePreservationTarget) {
      setScenePreservationMeasures((prev) =>
        prev.filter((_, idx) => idx !== deletePreservationTarget.idx),
      );
      setDeletePreservationModalOpen(false);
      setDeletePreservationTarget(null);
    }
  };
  const handleDeletePreservationClose = () => {
    setDeletePreservationModalOpen(false);
    setDeletePreservationTarget(null);
  };

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
        <GenericTable columns={officerColumns} data={assignedOfficers} />
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
          columns={getPreservationColumns({
            onDelete: handleDeletePreservationClick,
          })}
          data={scenePreservationMeasures}
        />
        <DeleteModal
          isOpen={deletePreservationModalOpen}
          onClose={handleDeletePreservationClose}
          onConfirm={handleDeletePreservationConfirm}
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
          columns={getMedicalSupportColumns({
            onDelete: handleDeleteClick,
            onEdit: handleEditClick,
            onView: handleViewClick,
          })}
          data={medicalRescueData}
        />
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={handleDeleteClose}
          onConfirm={handleDeleteConfirm}
        />
      </FormCard>
    </FormSection>
  );
};

export default SC_016_InitialResponse;
