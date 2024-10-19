import "./settings.css";
import React, { useState } from "react";
import { CloudUploadIcon } from "@heroicons/react/solid";

import { Disclosure } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
const Settings = () => {
  document.title = "Settings";

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSaveSettings = () => {
    // Handle saving user settings, updating name, email, password, etc.
  };

  return (
    <div className="settings">
      <div className="w-5/6 p-4">
        <h2 className="text-2xl font-semibold mb-6">General Settings</h2>

        {/* <UploadFile /> */}

        <div className={` ${"bg-gray-100"}`}>
          <h2 className="mt-8 mb-8">Update Profile Details</h2>
          <div className="flex flex-row mb-6 justify-between">
            <div className="w-2/4 mr-4">
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="w-full bg-red border py-2 px-3 focus:outline-none focus:border-blue-500"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="w-2/4">
              <input
                type="email"
                id="email"
                placeholder="Email address"
                className="w-full border py-2 px-3 focus:outline-none focus:border-blue-500"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>

          <h2 className="mt-8 mb-8">Update Password Details</h2>
          <div className="flex flex-row mb-6 justify-between">
            <div className="w-2/4 mr-4">
              <input
                placeholder="Password"
                type="password"
                id="password"
                className="w-full border py-2 px-3 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="w-2/4 mr-4">
              <input
                placeholder="Password"
                type="password"
                id="password"
                className="w-full border py-2 px-3 focus:outline-none focus:border-blue-500"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="w-2/4">
              <input
                type="password"
                placeholder="Confirm Password"
                id="confirmPassword"
                className="w-full border py-2 px-3 focus:outline-none focus:border-blue-500"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>
          </div>

          <button
            onClick={handleSaveSettings}
            className={`py-2 px-4  ${"bg-black text-white"}`}
          >
            Update
          </button>
        </div>

        <div className="mt-8 mb-8">
          <DropDownAccordian />
        </div>
      </div>
    </div>
  );
};

function UploadFile() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    // You can implement the upload logic here, e.g., send the selectedFile to the server.
    console.log("Uploading:", selectedFile);
  };

  return (
    <div className="p-4 border w-2/4 text-center ml-4 rounded-full shadow-md">
      <label className="relative inline-block cursor-pointer">
        <span className="inline-block bg-blue-500 text-white py-2 px-4 rounded-lg">
          {/* <CloudUploadIcon className="h-6 w-6 mr-2" /> */}
          Upload
        </span>
        <input
          type="file"
          className="absolute w-full h-full opacity-0 cursor-pointer"
          accept="image/*"
          onChange={handleFileChange}
        />
      </label>
      {selectedFile && (
        <div className="mt-4">
          <p className="mb-2">Selected file: {selectedFile.name}</p>
          <button
            onClick={handleUpload}
            className="bg-blue-500 text-white py-2 px-4 rounded-lg"
          >
            Upload
          </button>
        </div>
      )}
    </div>
  );
}

function DropDownAccordian() {
  return (
    <div className="w-full">
      <h1 className="text-2xl font-semibold mb-6">Watch List</h1>
      <div className="w-full bg-white p-2">
        {[1, 2, 3, 4].map((el, index) => {
          return (
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex w-full justify-between bg-white px-4 py-2 text-left text-sm font-medium text-black hover:bg-gray focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span className="text-lg">
                      9789 Riverview CourtTrenton, ON K8V 3S0{" "}
                      <strong> Abuja Nigeria</strong>
                    </span>
                    <ChevronUpIcon
                      className={`${
                        open ? "rotate-180 transform" : ""
                      } h-5 w-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                    If you're unhappy with your purchase for any reason, email
                    us within 90 days and we'll refund you in full, no questions
                    asked.
                  </Disclosure.Panel>
                </>
              )}
            </Disclosure>
          );
        })}
      </div>
    </div>
  );
}

export default Settings;
