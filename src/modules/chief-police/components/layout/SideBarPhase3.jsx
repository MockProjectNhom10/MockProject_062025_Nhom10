import React from "react";

const SideBarPhase3 = ({ user, features, activeFeature, onFeatureClick }) => {
  return (
    <div className="flex h-screen w-60 flex-col items-center bg-[#2c2c2c] py-4">
      {/* User Image */}
      <div className="mt-2 mb-4 flex h-24 w-40 items-center justify-center overflow-hidden bg-gray-300">
        {user?.avatar ? (
          <img
            src={user.avatar}
            alt="User avatar"
            className="h-full w-full object-cover"
          />
        ) : null}
      </div>
      {/* User Info */}
      <div className="mb-2 text-center text-white">
        <div className="text-base">ID: {user?.id}</div>
        <div className="text-base font-medium">{user?.name}</div>
      </div>

      {/* Logout Button */}
      <button className="w-[80%] border-y-2 py-1 font-bold text-white transition hover:bg-white/10">
        Logout
      </button>

      {/* Features */}
      <div className="w-full px-2 py-4">
        <div className="mb-2 text-base text-white">Feature</div>
        {features?.map((feature) => (
          <button
            key={feature.key}
            className={`mb-2 w-full rounded py-2 font-medium ${
              activeFeature === feature.key
                ? "bg-yellow-200 text-black"
                : "bg-gray-300 text-black"
            }`}
            onClick={() => onFeatureClick && onFeatureClick(feature.key)}
          >
            {feature.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SideBarPhase3;
