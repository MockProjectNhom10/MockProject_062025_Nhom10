export const formData = {
  reportId: "CR12345",
  status: "In Progress",
  date: "2025-06-27",
  time: "14:30",
  fullName: "John Doe",
  email: "john.doe@example.com",
  relationship: "Witness",
  phone: "+1234567890",
  address: "123 Main St, Springfield",
  crimeType: "Theft",
  severity: "Medium",
  datetime: "2025-06-27T14:30",
  state: "Illinois",
  detailedAddress: "Near the central park entrance",
  description: "A bicycle was stolen from the park.",
  victims: [
    {
      id: 1,
      fullName: "Jane Smith",
      gender: "Female",
      nationality: "American",
      statement: "Saw the theft occur.",
    },
  ],
  witnesses: [
    {
      id: 1,
      fullName: "Alice Johnson",
      gender: "Female",
      nationality: "Canadian",
      statement: "Observed suspect fleeing.",
    },
  ],
  suspects: [
    {
      id: 1,
      fullName: "Unknown",
      gender: "",
      nationality: "",
      statement: "No description provided.",
    },
  ],
  accomplices: [
    { id: 1, fullName: "", gender: "", nationality: "", statement: "" },
  ],
  evidence: [
    {
      id: 1,
      type: "Documentary Evidence",
      location: "Park CCTV",
      description: "CCTV footage",
      attachment: "File Title.png",
    },
  ],
  uploadedFiles: [
    { name: "File Title.png", size: "219 KB", date: "31 Aug, 2022" },
    { name: "File Title.png", size: "219 KB", date: "31 Aug, 2022" },
  ],
};
