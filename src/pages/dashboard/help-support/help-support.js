import React, { useState } from "react";
import "./help-support.css";

const HelpSupport = () => {
  document.title = "Help & Support";

  const [tickets, setTickets] = useState([]);
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTicket = {
      title,
      message,
      status: "Open",
      date: new Date().toLocaleDateString(),
    };
    setTickets([...tickets, newTicket]);
    setTitle("");
    setMessage("");
  };

  return (
    <div className="help-support mt-8">
      <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>

      <div className="w-full h-screen  mt-8">
        <div className="pt-8 flex flex-row mt-8 gap-8">
          <div className="flex flex-col flex-1 w-1/4 ">
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span> Facebook</span>
            </span>
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span>Instagram</span>
            </span>
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span>Twitter</span>
            </span>
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span>Whatsapp</span>
            </span>
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span>Email</span>
            </span>{" "}
            <span className=" border border-black w-3/4 mb-4 p-4">
              <span>Email</span>
            </span>
          </div>
          <div className="flex-1">
            <h2 className="mb-4">New Ticket</h2>
            <input
              className="bg-white border border-black  p-2 w-5/6"
              type="text"
            />
            <br />
            <br />
            <label className="mb-8 " htmlFor="support-message">
              Message To Support
            </label>
            <textarea
              className="bg-white mt-4 border border-black  p-8 w-5/6"
              name="support-message"
              id=""
              cols="30"
              rows="7"
            ></textarea>
          </div>
        </div>
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Support Tickets</h2>
          <table className="w-full !bg-white border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="px-4 py-2">Serial Number</th>
                <th className="px-4 py-2">Title</th>
                <th className="px-4 py-2">Message</th>
                <th className="px-4 py-2">Status</th>
                <th className="px-4 py-2">Date</th>
              </tr>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((ticket, index) => (
                <tr key={index} className="border-t p-4">
                  <td className="px-4 py-2 p-4">{index + 1}</td>
                  <td className="px-4 py-2">I need Help</td>
                  <td className="px-4 py-2">This is the support message...</td>
                  <td className="px-4 py-2">Pending</td>
                  <td className="px-4 py-2">{Date.now()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default HelpSupport;
