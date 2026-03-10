import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const AddJob = () => {
  const navigate = useNavigate();
  const handleAddJob = (e)=>{
    e.preventDefault();
    const formData = new FormData(e.target);
    const initialData = Object.fromEntries(formData.entries());
    console.log(initialData);

    const {min , max , currency , ...newJob} = initialData;
    console.log(newJob);

    newJob.salaryRange = {min , max , currency};
 console.log(newJob);
     newJob.requirements = newJob.requirements.split("\n");
     newJob.responsibilities = newJob.responsibilities.split("\n");
   console.log(newJob);
       fetch("http://localhost:5000/jobs", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newJob),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            title: "Job Created!",
            icon: "success",
            draggable: true,
          });

          navigate("/myPostedJobs");
        }

        console.log(data);
      });
    
   


  };
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      {/* Heading Section */}
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Post a New Job</h1>

        <p className="text-gray-500 text-sm md:text-base">
          Fill out the form below to publish a new job opportunity. Make sure to
          include clear job details, requirements, and responsibilities so
          candidates can understand the role easily.
        </p>
      </div>

      {/* Form Card */}
      <div className="bg-white shadow-md rounded-xl p-6 md:p-10">
        <form onSubmit={handleAddJob} className="space-y-6">
          {/* Job Title & Location */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Job Title</label>
              <input
                type="text"
                name="title"
                placeholder="Job title"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">Job Location</label>
              <input
                type="text"
                name="location"
                placeholder="Job location"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Job Type & Category */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">Job Type</label>
              <select
                name="jobType"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">
                  Pick a job
                </option>
                <option>Full-time</option>
                <option>Part-time</option>
                <option>Intern</option>
                <option>Hybrid</option>
              </select>
            </div>

            <div>
              <label className="label">Job Field</label>
              <select
                name="category"
                className="select select-bordered w-full"
                defaultValue=""
              >
                <option disabled value="">
                  Pick a job field
                </option>
                <option>Engineering</option>
                <option>Finance</option>
                <option>Teaching</option>
                <option>Doctor</option>
              </select>
            </div>
          </div>

          {/* HR Info */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="label">HR Name</label>
              <input
                type="text"
                name="hr_name"
                placeholder="HR name"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div>
              <label className="label">HR Email</label>
              <input
                type="email"
                // defaultValue={user?.email}
                name="hr_email"
                placeholder="HR email"
                className="input input-bordered w-full"
                required
              />
            </div>
          </div>

          {/* Company Logo */}
          <div>
            <label className="label">Company Logo</label>
            <input
              type="text"
              name="company_logo"
              placeholder="Logo URL"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Salary Range */}
          <div>
            <p className="font-semibold mb-2">Salary Range</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <input
                type="text"
                name="min"
                placeholder="Min"
                className="input input-bordered"
                required
              />

              <input
                type="text"
                name="max"
                placeholder="Max"
                className="input input-bordered"
                required
              />

              <select
                name="currency"
                defaultValue="Currency"
                className="select select-bordered"
              >
                <option disabled>Currency</option>
                <option>BDT</option>
                <option>USDT</option>
                <option>EUR</option>
                <option>KWD</option>
              </select>
            </div>
          </div>

          {/* Job Description */}
          <div>
            <label className="label">Job Description</label>

            <textarea
              className="textarea textarea-bordered w-full min-h-[100px]"
              name="description"
              placeholder="Describe the job role"
              required
            ></textarea>
          </div>

          {/* Company Name */}
          <div>
            <label className="label">Company Name</label>

            <input
              type="text"
              name="company"
              placeholder="Company name"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Job Requirements */}
          <div>
            <label className="label">Job Requirements</label>

            <textarea
              className="textarea textarea-bordered w-full"
              name="requirements"
              placeholder="Put each requirement on a new line"
              required
            ></textarea>
          </div>

          {/* Responsibilities */}
          <div>
            <label className="label">Job Responsibility</label>

            <textarea
              className="textarea textarea-bordered w-full"
              name="responsibilities"
              placeholder="Job responsibility"
              required
            ></textarea>
          </div>

          {/* Deadline */}
          <div>
            <label className="label">Application Deadline</label>

            <input
              type="date"
              name="applicationDeadline"
              className="input input-bordered w-full"
              required
            />
          </div>

          {/* Submit */}
          <div className="pt-4 text-center">
            <button className="btn btn-primary w-full md:w-auto px-10">
              Submit Job
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddJob;
