import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

function NestedRouting() {
  const navigateCourses = useNavigate()
  const navigateClasses = useNavigate()
  const navigateExam = useNavigate()
  const navigateResults = useNavigate()

  function navigateToCourses() {
    navigateCourses('/nested-routing/courses')
  }
  function navigateToClasses() {
    navigateClasses('/nested-routing/classes')
  }
  function navigateToExam() {
    navigateExam('/nested-routing/exam')
  }
  function navigateToResults() {
    navigateResults('/nested-routing/results')
  }

  return (
    <>
      <div className="max-w-[500px] m-auto text-center border border-gray-700 overflow-hidden rounded-xl mb-8">
        <p className="font-medium py-3 text-gray-300 bg-gray-800">
          Nested Routing
        </p>
        <div className="m-4 my-5 flex flex-wrap gap-4 justify-center">
          <button className="bg-green-800 p-2 px-4 w-2/5 rounded-full" onClick={navigateToCourses}>
            Courses
          </button>
          <button className="bg-yellow-800 p-2 px-4 w-2/5 rounded-full" onClick={navigateToClasses}>
            Classes
          </button>
          <button className="bg-blue-800 p-2 px-4 w-2/5 rounded-full" onClick={navigateToExam}>
            Exam
          </button>
          <button className="bg-pink-800 p-2 px-4 w-2/5 rounded-full" onClick={navigateToResults}>
            Results
          </button>
        </div>
      </div>
      <Outlet/>
    </>
  )
}

export default NestedRouting