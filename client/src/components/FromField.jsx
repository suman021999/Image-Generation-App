import React from "react";

const FromField = ({LabelName,type,name,placeholder,value,handleChange,isSurpriseMe,handleSurpriseMe,}) => {
  return (
    <>
      <div className="flex items-center gap-2 mb-2">
        <label
          htmlFor={name}
          className="block text-sm font-medium text-gray-900"
        >
          {LabelName}
        </label>
        {isSurpriseMe && (
          <button
            type="button"
            onClick={handleSurpriseMe}
            className="py-1 px-2 font-semibold text-xs bg-[#ececf1] text-black rounded-[5px]"
          >
            Surprise me
          </button>
        )}
      </div>
      <input
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        required
        className="p-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full"
      />
    </>
  );
};

export default FromField;
