import React, { useEffect, useState } from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import { PlusCircle } from "lucide-react";
import GenericTable from "@chief-police/components/table/GenericTable";
import DeleteModal from "@chief-police/components/modal/DeleteModal";
import {
  getInitialStatementsColumns,
  mediaData,
  evidenceColumns,
  evidenceData,
  getMediaColumns,
} from "@chief-police/constants/tableStyles";
import { useNavigate } from "react-router-dom";
import { useToast } from "@core/hooks/useToast";

function SceneInformation() {
  const navigate = useNavigate();
  const { showSuccess, showLoading } = useToast();
  const columns = evidenceColumns(navigate);
  const onClickNext = () => {
    navigate("/chief-police/initial-investigation-report");
  };
  const onClickBack = () => {
    navigate("/chief-police/initial-response");
  };
  const onClickSave = () => {
    showLoading("Saving information...");
    setTimeout(() => {
      showSuccess("Information saved successfully!");
      navigate("/chief-police/initial-investigation-report");
    }, 1000);
  };

  const [statementData, setStatementData] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("initialStatements")) || [];
    setStatementData(stored);
  }, []);

  const handleViewDetail = (item) => {
    navigate("view-initial-statement", { state: item });
  };

  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const handleDeleteClick = (item, idx) => {
    setDeleteTarget({ item, idx });
    setDeleteModalOpen(true);
  };
  const handleEditClick = (item, idx) => {};
  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      setStatementData((prev) => {
        const updated = prev.filter((_, idx) => idx !== deleteTarget.idx);
        localStorage.setItem("initialStatements", JSON.stringify(updated));
        return updated;
      });
      setDeleteModalOpen(false);
      setDeleteTarget(null);
    }
  };
  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setDeleteTarget(null);
  };

  const [media, setMedia] = useState(mediaData);
  const [deleteMediaModalOpen, setDeleteMediaModalOpen] = useState(false);
  const [deleteMediaTarget, setDeleteMediaTarget] = useState(null);
  const handleDeleteMediaClick = (item, idx) => {
    setDeleteMediaTarget({ item, idx });
    setDeleteMediaModalOpen(true);
  };
  const handleDeleteMediaConfirm = () => {
    if (deleteMediaTarget) {
      setMedia((prev) =>
        prev.filter((_, idx) => idx !== deleteMediaTarget.idx),
      );
      setDeleteMediaModalOpen(false);
      setDeleteMediaTarget(null);
    }
  };
  const handleDeleteMediaClose = () => {
    setDeleteMediaModalOpen(false);
    setDeleteMediaTarget(null);
  };

  return (
    <FormSection
      title="SCENE INFORMATION"
      footerCancel
      footerSave
      footerNext
      onClickCancel={onClickBack}
      onClickNext={onClickNext}
      onClickSave={onClickSave}
    >
      <FormCard
        title="INITIAL STATEMENTS"
        button={
          <Button
            onClick={() => navigate("add-initial-statement")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable
          columns={getInitialStatementsColumns({
            onDelete: handleDeleteClick,
            onEdit: handleEditClick,
            onView: handleViewDetail,
          })}
          data={statementData}
        />
        <DeleteModal
          isOpen={deleteModalOpen}
          onClose={handleDeleteClose}
          onConfirm={handleDeleteConfirm}
        />
      </FormCard>

      <FormCard
        title="IMAGES AND VIDEO"
        button={
          <Button
            onClick={() => navigate("images-and-videos")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable
          columns={getMediaColumns({
            onDelete: handleDeleteMediaClick,
          })}
          data={media}
        />
        <DeleteModal
          isOpen={deleteMediaModalOpen}
          onClose={handleDeleteMediaClose}
          onConfirm={handleDeleteMediaConfirm}
        />
      </FormCard>

      <FormCard
        title="PRELIMINARY PHYSICAL EVIDENCE INFORMATION"
        button={
          <Button
            onClick={() => navigate("preliminary-evidence")}
            classNameChildren="flex gap-2"
          >
            <PlusCircle size={16} /> ADD
          </Button>
        }
      >
        <GenericTable columns={columns} data={evidenceData} />
      </FormCard>
    </FormSection>
  );
}

export default SceneInformation;
