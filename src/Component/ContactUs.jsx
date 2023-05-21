import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactUs = () => {
  return (
    <div className="w-full"  data-aos="fade-up" data-aos-duration="1000">
      <h1 className="text-center underline bg-black py-4 text-yellow-500 font-bold text-4xl ">
        Contact Us
      </h1>
     <div className="md:flex items-center">
      <div className="w-1/2  mx-auto">
    <img src={"https://img.freepik.com/premium-vector/concept-creativity_118813-2988.jpg"} />
      </div>
      <div className="w-1/2  mx-auto">
      <form>
        <div className="card-body font-semibold">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 border border-black focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Email Please"
                className="py-1 ps-2 w-full text-teal-900 rounded focus:outline-none focus:border-sky-500 border border-black focus:ring-1 focus:ring-sky-500"
              />
            </div>
            <div className="w-full">
              <label className="label">
                <span className="label-text">Mesage</span>
              </label>
              <textarea
                placeholder="Write a Message"
                name="message"
                className="w-[100%] py-1 ps-2 text-teal-900 rounded focus:outline-none focus:border-sky-500 border border-black focus:ring-1 focus:ring-sky-500"
              ></textarea>
            </div>
            
          </div>
          <div className="form-control mt-6">
            <input
              type="submit"
              className="py-2  text-white font-semibold px-6 bg-black rounded-md mb-8 hover:bg-yellow-500"
              value="Send "
            />
          </div>
        </div>
      </form>
      
      </div>
     </div>
    </div>
  );
};

export default ContactUs;
