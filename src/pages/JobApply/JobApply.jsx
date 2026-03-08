import React from "react";
import { useParams } from "react-router-dom";
import UseAuth from "../../Hooks/UseAuth";
import axios from "axios";
import Swal from "sweetalert2";

const JobApply = () => {
  const { id } = useParams();
  const { user } = UseAuth();
  const handleSubmitApplication = (e) => {
    e.preventDefault();
    const form = e.target;
    const linkedIn = form.linkedin.value;
    const github = form.github.value;
    const resume = form.resume.value;

    const jobApplication = {
      job_id: id,
      applicant_email: user.email,
      linkedIn,
      github,
      resume,
    };
    axios
      .post(`http://localhost:5000/job-application`, jobApplication)
      .then((response) => {
        console.log(response.data);
        if (response.data.insertedId) {
          Swal.fire({
            title: "Applied successfully!",
            icon: "success",
            draggable: true,
          });

          e.target.reset(); 
          
        }
      })
      .catch((error) => {
        console.error(error);
      });
    
  };
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 bg-slate-900">
      <div className="card bg-base-100 w-full max-w-xl shadow-2xl border text-black">
        <div className="card-body">
          <h3 className="text-3xl md:text-4xl text-center font-bold mb-4">
            Apply Here!
          </h3>

          <form onSubmit={handleSubmitApplication}>
            <fieldset className="space-y-4">
              <div>
                <label className="label font-semibold">LinkedIn URL</label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  name="linkedin"
                  placeholder="https://linkedin.com/in/username"
                  required
                />
              </div>

              <div>
                <label className="label font-semibold">Github URL</label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  name="github"
                  placeholder="https://github.com/username"
                  required
                />
              </div>

              <div>
                <label className="label font-semibold">Resume URL</label>
                <input
                  type="url"
                  className="input input-bordered w-full"
                  name="resume"
                  placeholder="Drive / Dropbox resume link"
                  required
                />
              </div>

              <button className="btn btn-primary w-full mt-4">Apply Now</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default JobApply;
