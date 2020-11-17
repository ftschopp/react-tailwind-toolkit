import React from 'react';

function DayWeekHeader() {
  return (
    <div className="flex py-2 border-b border-gray-200">
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm text-red-400">DO</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm">LU</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm">MA</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm">MI</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm">JU</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm text-green-400">VI</div>
      </div>
      <div className="flex justify-center w-1/6">
        <div className="leading-relaxed text-sm">SA</div>
      </div>
    </div>
  );
}

export default DayWeekHeader;
