import Header from '@review-police/components/Header'
import ReportTable from '@review-police/components/ReportTable'
import SideBar from '@review-police/components/SideBar'
import Filter from '@review-police/components/Filter'
import React from 'react'

const CrimeReportList = () => {
  return (
    <div className="flex h-screen bg-white">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="p-4 overflow-auto sm:p-6">
          <Filter />
          <ReportTable />
        </main>
      </div>
    </div>
  )
}

export default CrimeReportList
