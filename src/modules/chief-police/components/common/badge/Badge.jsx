const Badge = ({ label, colorClass = '' }) => {
    return (
        <span
            className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${colorClass}`}
        >
            {label}
        </span>
    );
};

export default Badge;


// const ParentComponent = () => {
//     const [statuses, setStatuses] = useState([]);

//     useEffect(() => {
//         ---------------mock data--------
//         const apiData = [
//             'approved',
//             'pending',
//             'rejected',
//         ];
//         setStatuses(apiData);
//     }, []);


//     const statusColorMap = {
//         approved: 'bg-green-100 text-green-800',
//         pending: 'bg-yellow-100 text-yellow-800',
//         rejected: 'bg-red-100 text-red-800',
//     };

//     const getColorClass = (label) => {
//         return statusColorMap[label] || 'bg-gray-100 text-gray-800';
//     };

//     return (
//         <div className="space-y-2 p-4">
//             {statuses.map((status, index) => (
//                 <Badge
//                     key={index}
//                     label={status}
//                     colorClass={getColorClass(status)}
//                 />
//             ))}
//         </div>
//     );
// }