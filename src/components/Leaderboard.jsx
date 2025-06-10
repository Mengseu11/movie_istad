import React from "react";

const users = [
  { name: "enterpr1se", avatar: null, initials: "E", allTime: 423891, weekly: 30400 },
  { name: "Shei", avatar: null, allTime: 1785433, initials: "S", weekly: 13717 },
  { name: "RuiZafon", avatar: null, initials: "R", allTime: 1603558, weekly: 7399 },
  { name: "raze464", avatar: null, initials: "R", allTime: 1047185, weekly: 4912 },
  { name: "chkchkboom", avatar: null, initials: "C", allTime: 185592, weekly: 3730 },
  { name: "iSlevToR", avatar: null, initials: "I", allTime: 78158, weekly: 14259 },
  { name: "8365588", avatar: null, initials: "8", allTime: 18622, weekly: 10579 },
  { name: "AspirinTab", avatar: null, initials: "A", allTime: 17307, weekly: 5774 },
  { name: "yathou", avatar: null, initials: "Y", allTime: 43172, weekly: 3791 },
  { name: "K_staff", avatar: null, initials: "K", allTime: 45257, weekly: 3690 },
];

const maxAllTime = Math.max(...users.map((u) => u.allTime));
const maxWeekly = Math.max(...users.map((u) => u.weekly));

export default function Leaderboard() {
  return (
    <div className="px-4 sm:px-6 md:px-12 lg:px-20 py-10">
      <h2 className="text-2xl font-bold mb-6">Leaderboard</h2>

      <div className="flex items-center gap-6 text-sm mb-8">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-teal-400 rounded-full"></span>
          <span className="text-black">All Time Edits</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 bg-pink-400 rounded-full"></span>
          <span className="text-black">Edits This Week</span>
        </div>
      </div>

      <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="flex items-start gap-4 bg-white p-4 rounded-xl shadow-sm"
          >
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="min-w-12 min-h-12 flex items-center justify-center  rounded-full bg-yellow-500 text-white text-lg font-bold">
                {user.initials}
              </div>
            )}

            <div className="flex-1">
              <div className="font-semibold text-gray-800 text-lg mb-2">
                {user.name}
              </div>

              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-2 bg-teal-400 rounded-full"
                  style={{
                    width: `${(user.allTime / maxAllTime) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-sm font-medium text-gray-700 mb-2">
                {user.allTime.toLocaleString()}
              </div>

              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-2 bg-pink-400 rounded-full"
                  style={{
                    width: `${(user.weekly / maxWeekly) * 100}%`,
                  }}
                ></div>
              </div>
              <div className="text-sm font-medium text-gray-700">
                {user.weekly.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
