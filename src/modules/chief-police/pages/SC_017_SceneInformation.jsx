import React, { useEffect, useState } from "react";
import FormCard from "@chief-police/components/sections/FormCard";
import FormSection from "@chief-police/components/sections/FormSection";
import Button from "@chief-police/components/common/button/Button";
import { PlusCircle } from "lucide-react";
import GenericTable from "@chief-police/components/table/GenericTable";
import DeleteModal from "@chief-police/components/modal/DeleteModal";

import {
  getInitialStatementsColumns,
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
  const [media, setMedia] = useState([]);

  // Load data initialStatements tu localStorage
  useEffect(() => {
    const storedStatements =
      JSON.parse(localStorage.getItem("initialStatements")) || [];
    setStatementData(storedStatements);
  }, []);

  // Load mediaList tu localStorage
  useEffect(() => {
    const storedMedia = JSON.parse(localStorage.getItem("mediaList")) || [];
    setMedia(storedMedia);
  }, []);

  // ==== Xu ly xoa INITIAL STATEMENTS ====
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [deleteTarget, setDeleteTarget] = useState(null);
  const handleDeleteClick = (item, idx) => {
    setDeleteTarget({ item, idx });
    setDeleteModalOpen(true);
  };
  const handleDeleteConfirm = () => {
    if (deleteTarget) {
      const updated = statementData.filter((_, idx) => idx !== deleteTarget.idx);
      localStorage.setItem("initialStatements", JSON.stringify(updated));
      setStatementData(updated);
      setDeleteModalOpen(false);
      setDeleteTarget(null);
    }
  };
  const handleDeleteClose = () => {
    setDeleteModalOpen(false);
    setDeleteTarget(null);
  };
  const handleViewDetail = (item) => {
    navigate("view-initial-statement", { state: item });
  };
  const handleEditClick = () => {};

  // ==== Xu ly xoa MEDIA ====
  const [deleteMediaModalOpen, setDeleteMediaModalOpen] = useState(false);
  const [deleteMediaTarget, setDeleteMediaTarget] = useState(null);
  const handleDeleteMediaClick = (item, idx) => {
    setDeleteMediaTarget({ item, idx });
    setDeleteMediaModalOpen(true);
  };
  const handleDeleteMediaConfirm = () => {
    if (deleteMediaTarget) {
      const updated = media.filter((_, idx) => idx !== deleteMediaTarget.idx);
      localStorage.setItem("mediaList", JSON.stringify(updated));
      setMedia(updated);
      setDeleteMediaModalOpen(false);
      setDeleteMediaTarget(null);
    }
  };
  const handleDeleteMediaClose = () => {
    setDeleteMediaModalOpen(false);
    setDeleteMediaTarget(null);
  };

  // ==== Xem chi tiet va chinh sua media ====
  const handleViewMedia = (item) => {
    navigate("images-and-videos", { state: item });
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
      {/* ==== INITIAL STATEMENTS ==== */}
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

      {/* ==== IMAGES AND VIDEO ==== */}
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
            onEdit: () => {},
            onView: handleViewMedia, // ✅ nut mui ten
          })}
          data={media}
        />
        <DeleteModal
          isOpen={deleteMediaModalOpen}
          onClose={handleDeleteMediaClose}
          onConfirm={handleDeleteMediaConfirm}
        />
      </FormCard>

      {/* ==== EVIDENCE ==== */}
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
