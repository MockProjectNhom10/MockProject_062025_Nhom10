export const InfoItem = ({ label, value, Icon }) => (
  <div>
    <label className="mb-2 block text-sm font-bold text-gray-700">
      {Icon && <Icon className="mr-2 inline h-4 w-4" />}
      {label}
    </label>
    <span className="text-sm text-gray-700">{value || "-"}</span>
  </div>
);
