import React from 'react';

const Footer = () => {
    return (
<footer className="bg-slate-900 text-gray-300 mx-8 mt-20">

  <div className="max-w-7xl mx-auto px-6 py-16 grid gap-10 
  grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

    {/* logo section */}
    <div>
      <h2 className="text-2xl font-bold text-white mb-4">
        QuickHire
      </h2>

      <p className="leading-relaxed">
        Great platform for the job seeker that passionate about
        startups. Find your dream job easier.
      </p>
    </div>


    {/* About */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        About
      </h3>

      <ul className="space-y-2">
        <li>Companies</li>
        <li>Pricing</li>
        <li>Terms</li>
        <li>Advice</li>
        <li>Privacy Policy</li>
      </ul>
    </div>


    {/* Resources */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Resources
      </h3>

      <ul className="space-y-2">
        <li>Help Docs</li>
        <li>Guide</li>
        <li>Updates</li>
        <li>Contact Us</li>
      </ul>
    </div>


    {/* Newsletter */}
    <div>
      <h3 className="text-lg font-semibold text-white mb-4">
        Get job notifications
      </h3>

      <p className="mb-4 text-sm">
        The latest job news, articles sent to your inbox weekly.
      </p>

      <div className="flex">
        <input
          type="email"
          placeholder="Email Address"
          className="input input-bordered w-full rounded-r-none"
        />

        <button className="btn btn-primary rounded-l-none">
          Subscribe
        </button>
      </div>
    </div>

  </div>


  {/* bottom section */}

  <div className="border-t border-gray-700">
    <div className="max-w-7xl mx-auto px-6 py-6 flex 
    flex-col md:flex-row justify-between items-center gap-4">

      <p className="text-sm">
        2021 © QuickHire. All rights reserved.
      </p>

      <div className="flex gap-4 text-lg">
        <i className="fa-brands fa-facebook"></i>
        <i className="fa-brands fa-instagram"></i>
        <i className="fa-brands fa-dribbble"></i>
        <i className="fa-brands fa-linkedin"></i>
        <i className="fa-brands fa-twitter"></i>
      </div>

    </div>
  </div>

</footer>
    );
};

export default Footer;