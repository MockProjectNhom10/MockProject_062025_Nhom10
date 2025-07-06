import PaginationControls from "@chief-police/component/table/PaginationControls";
import TableBody from "@chief-police/components/addPatrol/TableBody";
import TableHeader from "@chief-police/components/addPatrol/TableHeader";
import {
  statusMap,
  users,
} from "@chief-police/utils/chief-police-constants";
import { PlusCircle, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
let itemsPerpage=10;
export default function AddPatrolOfficer() {
  let [filter, setFilter] = useState({
    keyword: "",
    zone: "",
    status: "All",
  });
  let [page,setPage]=useState(1);
  let lists=users.filter(item=>{
       let a=item.fullName.toLowerCase().includes(filter.keyword.toLowerCase());
       let b=item.role.toLowerCase().includes(filter.keyword.toLowerCase());
       let c=statusMap[item.status].toLowerCase()==filter.status.toLowerCase();
       return (a || b) && (c || filter.status=="All");
  })
  let totalPage=Math.ceil(lists.length/itemsPerpage);
  let startIndex=(page-1)*itemsPerpage;
  let endIndex=startIndex+itemsPerpage;
  let items=lists.slice(startIndex,endIndex);
  useEffect(()=>{
       setPage(1);
  },[filter])
  return (
    <div className="mx-auto w-full max-w-6xl overflow-hidden rounded-md border border-blue-300 shadow-md">
      {/* Card Title Header */}
      <div className="border-b border-gray-300 bg-chief px-4 py-3 text-center">
        <h2 className="text-2xl font-bold uppercase">
          Add Patrol Official to Sence
        </h2>
      </div>

      {/* Body */}
      <div className="space-y-4 bg-white p-4">
        {/* Search Bar */}
        <div className="relative">
          <Search
            className="absolute top-1/2 left-3 -translate-y-1/2 transform text-gray-500"
            size={18}
          />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setFilter({ ...filter, keyword: e.target.value })}
            className="w-full rounded border border-gray-300 px-10 py-2 focus:ring-2 focus:ring-blue-200 focus:outline-none"
          />
        </div>

        {/* Filters */}
        <div className="tablet:flex-row flex flex-col gap-4">
          <select
            value={filter.status}
            onChange={(e) => setFilter({ ...filter, status: e.target.value })}
            className="tablet:w-1/2 w-full rounded border border-gray-300 px-3 py-2"
          >
            <option value="All">All</option>
            {statusMap.map((item) => (
              <option value={item}>{item}</option>
            ))}
          </select>
          <select className="tablet:w-1/2 w-full rounded border border-gray-300 px-3 py-2">
            <option>Zone</option>
          </select>
        </div>

        {/* Inline Header Above Table */}
        <div className="mt-4 flex items-center justify-between">
          <h1 className="font-bold uppercase">Add Patrol Offical to Sence</h1>
          <button className="flex items-center gap-1 rounded-md border border-gray-300 bg-blue-50 px-5 py-3 text-sm font-medium shadow-sm hover:bg-blue-100">
            ADD <PlusCircle size={16} />
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full min-w-[700px] border border-gray-300 text-sm">
            <TableHeader/>
            <TableBody page={page} itemsPerpage={itemsPerpage} users={items}/>
          </table>
        </div>
        {/* <Pagination itemsPerpage={itemsPerpage} totalPage={totalPage} page={page} setPage={setPage} /> */}
        <PaginationControls/>
      </div>
    </div>
  );
}
