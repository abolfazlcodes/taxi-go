"use client";

const AutoCompleteAddress = () => {
  const screenHeight = window?.innerHeight * 0.8;

  return (
    <div className="border p-5 rounded-md" style={{ height: screenHeight }}>
      <div className="mt-5">
        <div>
          <label className="text-gray-400">Where From?</label>
          <input
            type="text"
            className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          />
        </div>
        <div className="mt-3">
          <label className="text-gray-400">Where To?</label>
          <input
            type="text"
            className="bg-white p-1 border-[1px] w-full rounded-md outline-none focus:border-yellow-300"
          />
        </div>
      </div>
    </div>
  );
};

export default AutoCompleteAddress;
