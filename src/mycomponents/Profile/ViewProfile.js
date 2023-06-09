import { useEffect, useState } from 'react';
import './profile.css';

const ViewProfile = () => {
    const [studentData, updateStudentData]=useState({})

    const fetchStudentProfile = async () => {
      const id = localStorage.getItem("id")
      await fetch("http://localhost:5000/student/get_details", {
        method: "POST",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify({id: id})
      })
      .then(response => {
        if (!response.ok){
          throw new Error("Failed attempt")
        }

        return response.json()
      })
      .then(data => {
        updateStudentData(data)
      })
      .catch(err => {
        // logout
        window.history.pushState({},  "", "http://localhost:3000/login")
        window.location.reload()
      })
    }

    useEffect(() => {
      fetchStudentProfile()
    }, [updateStudentData])

    return (
        <div className="stsportal-container " >
                <div className="px-3 mb-4 profile" style={{ boxShadow: "0px 6px 6px rgba(9, 9, 4, 0.57)", borderRadius: "5px"}}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10%" height="10%" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
                    <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  </svg>
                  {
                    <div className="row mb-4 mx-3 pb-4">
                    <ul className="list-group list-group-horizontal">
                        <li className="list-group-item col-3 ">Enrollment No</li>
                        <li className="list-group-item col-9">{studentData.enrollment_number}</li>
        
                      </ul>
                      <ul className="list-group list-group-horizontal-sm">
                        <li className="list-group-item col-3">Name</li>
                        <li className="list-group-item col-9">{studentData.name}</li>
                        
                      </ul>
                      <ul className="list-group list-group-horizontal-md">
                        <li className="list-group-item col-3">Email-Id</li>
                        <li className="list-group-item col-9" >{studentData.email}</li>
                        
                      </ul>
                      <ul className="list-group list-group-horizontal-lg">
                        <li className="list-group-item col-3">Branch</li>
                        <li className="list-group-item col-9">{studentData.branch}</li>
                      </ul>
                  </div>
                  }
                </div>
            </div>
    )
}

export default ViewProfile