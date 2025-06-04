import React from "react";

const users = [
  {
    name: "enterpr1se",
    avatar: "/images/enterprise.jpg",
    allTime: 423891,
    weekly: 30400,
  },
  {
    name: "Shei",
    avatar: "/images/shei.jpg",
    allTime: 1785433,
    weekly: 13717,
  },
  {
    name: "RuiZafon",
    avatar: null,
    initials: "R",
    allTime: 1603558,
    weekly: 7399,
  },
  {
    name: "raze464",
    avatar: "/images/cap.jpg",
    allTime: 1047185,
    weekly: 4912,
  },
  {
    name: "chkchkboom",
    avatar: "/images/boom.jpg",
    allTime: 185592,
    weekly: 3730,
  },
  {
    name: "iSlevToR",
    avatar: "/images/islevtor.jpg",
    allTime: 78158,
    weekly: 14259,
  },
  {
    name: "8365588",
    avatar: null,
    initials: "8",
    allTime: 18622,
    weekly: 10579,
  },
  {
    name: "AspirinTab",
    avatar: null,
    initials: "A",
    allTime: 17307,
    weekly: 5774,
  },
  {
    name: "yathou",
    avatar: null,
    initials: "Y",
    allTime: 43172,
    weekly: 3791,
  },
  {
    name: "K_staff",
    avatar: null,
    initials: "K",
    allTime: 45257,
    weekly: 3690,
  },
];

const maxAllTime = Math.max(...users.map((u) => u.allTime));
const maxWeekly = Math.max(...users.map((u) => u.weekly));

export default function Leaderboard() {
  return (
    <div className="px-40">
      <div className="flex text-2xl font-bold mb-4">Leaderboard</div>
      <div className="flex gap-4 items-center mb-6 text-sm">
        <span className="w-3 h-3 bg-teal-400 rounded-full"></span> All Time Edits
        <span className="w-3 h-3 bg-pink-400 rounded-full ml-4"></span> Edits This Week
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {users.map((user, index) => (
          <div key={index} className="flex items-start space-x-4">
            {/* Avatar or Initials */}
            {user.avatar ? (
              <img
                src={user.avatar}
                alt={user.name}
                className="w-12 h-12 rounded-full object-cover"
              />
            ) : (
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-yellow-500 text-white text-lg font-bold">
                {user.initials}
              </div>
            )}

            <div className="flex-1">
              <div className="font-semibold text-lg mb-1">{user.name}</div>

              {/* All Time Edits Bar */}
              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-2 bg-teal-400 rounded-full"
                  style={{ width: `${(user.allTime / maxAllTime) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-black font-semibold mb-2">
                {user.allTime.toLocaleString()}
              </div>

              {/* Weekly Edits Bar */}
              <div className="h-2 bg-gray-200 rounded-full mb-1">
                <div
                  className="h-2 bg-pink-400 rounded-full"
                  style={{ width: `${(user.weekly / maxWeekly) * 100}%` }}
                ></div>
              </div>
              <div className="text-sm text-black font-semibold">
                {user.weekly.toLocaleString()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
