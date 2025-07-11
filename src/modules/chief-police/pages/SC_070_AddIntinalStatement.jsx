import TimePicker from "@chief-police/components/common/date-time/TimePicker";
import FormInput from "@chief-police/components/common/input/FormInput";
import TextArea from "@chief-police/components/common/input/TextArea";
import FilePreviewItem from "@chief-police/components/common/upload/FilePreviewItem";
import FormSection from "@chief-police/components/sections/FormSection";
import { useState, useRef } from "react";
import DatePicker from "react-datepicker";

const FILE_TYPE_LABELS = {
    pdf: { label: "PDF", color: "bg-red-100 text-red-500" },
    png: { label: "PNG", color: "bg-blue-100 text-blue-500" },
    jpg: { label: "JPG", color: "bg-yellow-100 text-yellow-600" },
    jpeg: { label: "JPG", color: "bg-yellow-100 text-yellow-600" },
    gif: { label: "GIF", color: "bg-pink-100 text-pink-500" },
    mp4: { label: "MP4", color: "bg-purple-100 text-purple-500" },
    doc: { label: "DOC", color: "bg-blue-100 text-blue-700" },
    docx: { label: "DOCX", color: "bg-blue-100 text-blue-700" },
    ppt: { label: "PPT", color: "bg-orange-100 text-orange-500" },
    pptx: { label: "PPTX", color: "bg-orange-100 text-orange-500" },
    xls: { label: "XLS", color: "bg-green-100 text-green-600" },
    xlsx: { label: "XLSX", color: "bg-green-100 text-green-600" },
    ai: { label: "AI", color: "bg-gray-200 text-gray-700" },
    psd: { label: "PSD", color: "bg-indigo-100 text-indigo-500" },
    default: { label: "FILE", color: "bg-gray-200 text-gray-700" },
};

function getFileTypeLabel(filename) {
    if (!filename) return FILE_TYPE_LABELS.default;
    const ext = filename.split(".").pop().toLowerCase();
    return FILE_TYPE_LABELS[ext] || FILE_TYPE_LABELS.default;
}

const SC_070_AddInitialStatement = () => {
    const [files, setFiles] = useState([]);
    const fileInputRef = useRef();

    const handleRemove = (idx) => {
        setFiles(files.filter((_, i) => i !== idx));
    };

    const handleFileChange = (e) => {
        const file = e.target.files && e.target.files[0];
        if (file && file.name) {
            const newFile = {
                name: file.name,
                size: `${Math.round(file.size / 1024)} KB`,
                date: new Date().toLocaleDateString("en-GB", {
                    day: "2-digit",
                    month: "short",
                    year: "numeric",
                }),
            };
            setFiles((prev) => [...prev, newFile]);
        }
    };

    const handleUploadClick = () => {
        fileInputRef.current.value = null;
        fileInputRef.current.click();
    };

    return (
        <div className="min-h-screen bg-[#E7E7E7] pb-8">
            <div className="bg-teal-500 px-4 py-4 sm:px-6 rounded-t-lg mb-6">
                <h1 className="text-white text-center font-bold uppercase text-base sm:text-lg">
                    Add Initial Statement
                </h1>
            </div>

            <div className="px-4 sm:px-6 md:px-12 lg:px-20 xl:px-[50px] space-y-6">
                <FormSection title="Initial information">
                    <div className="border rounded-[8px] border-solid-[1px] p-[20px] mb-[20px]">
                        <FormInput className="w-[50%]" label="Initial name" />
                        <FormInput className="w-[50%]" label="Date" value='20/7/2025' />
                        <FormInput className="w-[50%]" label="Contact information"/>
                        <FormInput className="w-[50%]" label="Role" />
                    </div>
                </FormSection>

                <FormSection title="Detailed statement">
                    <div className="border p-4 rounded-[10px] bg-gray-50 text-sm text-gray-700">
                        <TextArea label="Content of the statement" />
                    </div>
                    <div className="mt-2 flex justify-end gap-2">
                        <button className="px-4 py-2 text-sm text-gray-700 bg-gray-200 rounded-md cursor-pointer">Cancel</button>
                        <button className="px-4 py-2 text-sm text-white bg-teal-500 rounded-md cursor-pointer">Add</button>
                    </div>
                </FormSection>

                <section className="w-full rounded-xl border border-gray-200 bg-white p-5 shadow-md">
                    <div className="mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between border-b pb-3">
                        <h2 className="text-xl font-semibold text-gray-800">Evidence Link</h2>
                        <button
                            type="button"
                            onClick={handleUploadClick}
                            className="mt-2 sm:mt-0 rounded-md bg-gray-200 px-4 py-2 text-sm text-gray-700"
                        >
                            Upload file
                        </button>
                        <input
                            type="file"
                            ref={fileInputRef}
                            onChange={handleFileChange}
                            className="hidden"
                        />
                    </div>

                    <div className="mt-4 flex flex-wrap gap-3 sm:gap-4">
                        {files.map((file, idx) => (
                            <FileCard key={idx} file={file} onRemove={() => handleRemove(idx)} />
                        ))}
                    </div>
                </section>
            </div>
        </div>
    );
};

const FileCard = ({ file, onRemove }) => {
    const { label, color } = getFileTypeLabel(file.name);
    if (!file || !file.name) return null;
    return (
        <div className="flex w-full max-w-[180px] items-center gap-3 truncate rounded-lg bg-[#F6F6F6] px-4 py-3 text-sm">
            <div className={`rounded px-2 py-1 text-xs font-bold ${color}`}>{label}</div>
            <div className="min-w-0 flex-1">
                <div className="truncate font-medium text-gray-700">{file.name}</div>
                <div className="truncate text-xs text-gray-400">{file.size} • {file.date}</div>
            </div>
            <button
                type="button"
                onClick={onRemove}
                className="text-gray-400 hover:text-red-500"
            >
                <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 4l8 8M12 4l-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
            </button>
        </div>
    );
};

export default SC_070_AddInitialStatement;
