import React from "react";
import { MdCancel } from "react-icons/md";
import {
  BsChevronDown,
  BsEye,
  BsArrowDownLeftCircleFill,
} from "react-icons/bs";
import { TbTimelineEventPlus } from "react-icons/tb";
import { MdOutlineCloseFullscreen } from "react-icons/md";

const SendTextMessage = () => {
  return (
    <>
      <h2 className="text-4xl font-semibold flex justify-between px-4">
        <span>Send text message</span>
        <MdCancel size={24} />
      </h2>
      <div className="border border-gray-500 w-full my-4 "></div>
      <div className="border-2 p-4 flex justify-between items-center">
        <div>
          <h4 className="text-3xl mb-1">Texting, free for your trial period</h4>
          <p>Try this fast and reliable way to communicate with candidates.</p>
        </div>
        <MdCancel size={24} />
      </div>
      <div
        className="mt-8
      "
      >
        <label htmlFor="countryCode" className="mr-2 font-bold">
          Send To Masum
        </label>
        <div className="flex items-center">
          <select
            id="countryCode"
            name="countryCode"
            className="border border-gray-300 p-2"
          >
            <option value="+1">+1 (USA)</option>
            <option value="+44">+44 (UK)</option>
            {/* Add more country code options as needed */}
          </select>
          <input
            type="text"
            id="phoneNumber"
            name="phoneNumber"
            className="border border-gray-300 p-2"
          />
        </div>
      </div>

      <div className="mt-8">
        <label htmlFor="template">Template</label>
        <div className="flex gap-4">
          <div className="flex justify-between w-[70%] border py-2 px-4">
            <p>Choose a template</p>
            <BsChevronDown size={24} />
          </div>
          <button className="btn btn-outline w-[25%]">Save template</button>
        </div>
      </div>
      <div className="mt-8">
        <label htmlFor="message">Message</label>
        <div className="border">
          <div>
            <div className="grid grid-cols-12 border border-black">
              <div className="col-start-1 col-span-1 py-2  border-black mx-auto">
                <TbTimelineEventPlus size={24} />
              </div>
              <div className="col-start-2 py-2 col-span-1 border border-black">
                <BsEye className="mx-auto" size={24} />
              </div>
              <div className="col-start-3 col-span-8 border-black">
                <button className="btn mx-4 btn-sm">
                  <BsArrowDownLeftCircleFill size={24} />
                  <span>Self-Schedule-Link</span>
                </button>
              </div>
              <div className="col-start-11 col-span-2 py-2 border border-black">
                <MdOutlineCloseFullscreen size={24} className="mx-auto" />
              </div>
            </div>
          </div>
          <textarea
            name="message"
            id="message"
            className="w-full"
            rows="5"
          ></textarea>
        </div>
      </div>
      <div className="border bg-gray-300 flex items-center gap-2 px-4 mt-8">
        <BsEye size={24} />
        <span>visible to</span>
        <a href="#">Hiring Manager , Standard Member</a>
        <BsChevronDown size={16} />
      </div>
      <footer className="flex justify-between mt-8">
        <p>saved</p>
        <div className="flex gap-2 items-center">
          <a href="#" className="hover:underline">
            Cancel
          </a>
          <div className="btn-group">
            <button className="btn btn-active">Send Message</button>
            <button className="btn">
              <BsChevronDown size={16} />
            </button>
          </div>
        </div>
      </footer>
    </>
  );
};

export default SendTextMessage;
