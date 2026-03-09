import React, { useEffect, useState } from "react";
import UseAuth from "../../Hooks/UseAuth";
import Swal from "sweetalert2";

const MyApplications = () => {
  const { user } = UseAuth();
  const [appliedJobs, setAppliedJobs] = useState([]);
 

  // handle delete application

  const deleteApplication = (_id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, withdraw application!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/jobs/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            
            if (data.deletedCount > 0) {
              const remaining = appliedJobs.filter((job) => job._id !== _id);
             setAppliedJobs(remaining);
            }
          });
        Swal.fire({
          title: "Deleted!",
          text: "Application has been withdrawn.",
          icon: "success",
        });
      }
    });
  };

  useEffect(() => {
    fetch(`http://localhost:5000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setAppliedJobs(data));
  }, [user.email]);

  return (
    <div className="mx-8 mt-4">
      <h4 className="text-3xl text-shadow-black font-bold">
        Total applied jobs: {appliedJobs.length}
      </h4>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Company Name</th>
              <th>Job</th>
              <th>Deadline</th>
              <th>Withdraw</th>
            </tr>
          </thead>

          <tbody>
            {appliedJobs.map((job) => (
              <tr key={job._id}>
                <th>
                  <label>
                    <input type="checkbox" className="checkbox" />
                  </label>
                </th>

                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>

                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>

                <td>
                  {job.category}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {job.title}
                  </span>
                </td>

                <td>{job.applicationDeadline}</td>

                <td>
                  <button
                    onClick={() => deleteApplication(job._id)}
                    className="btn btn-ghost btn-xs font-extrabold text-2xl text-red-600"
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplications;

// const deleteApplication = (_id) => {
//   Swal.fire({
//     title: "Are you sure?",
//     text: "You won't be able to revert this!",
//     icon: "warning",
//     showCancelButton: true,
//     confirmButtonColor: "#3085d6",
//     cancelButtonColor: "#d33",
//     confirmButtonText: "Yes, delete it!",
//   }).then((result) => {
//     if (result.isConfirmed) {
//       fetch(`http://localhost:3000/jobs/${_id}`, {
//         method: "DELETE",
//       })
//         .then((res) => res.json())
//         .then((data) => {
//           if (data.deletedCount > 0) {
//             const remainingApplication = jobs.filter(
//               (job) => job._id !== _id
//             );

//             setJobs(remainingApplication);
//           }
//         });
//       Swal.fire({
//         title: "Deleted!",
//         text: "Your application has been deleted.",
//         icon: "success",
//       });
//     }
//   });
// };

// <button
//                   onClick={() => deleteApplication(job._id)}
//                   className="btn btn-ghost btn-xs text-red-700 text-2xl bg-white"
//                 >
//                   X
//                 </button>
