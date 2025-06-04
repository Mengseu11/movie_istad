export default function PeopleCards({name,profile_path,popularity,overview,original_title}) {
  return (
    // <a href="#" className="group relative block bg-black">
    //   <img
    //     alt={name}
    //     src={profile_path}
    //     className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
    //   />

    //   <div className="relative p-4 sm:p-6 lg:p-8">
    //     <p className="text-sm font-medium uppercase tracking-widest text-pink-500">
    //       {popularity}
    //     </p>

    //     <p className="text-xl font-bold text-white sm:text-2xl">{name}</p>

    //     <div className="mt-32 sm:mt-48 lg:mt-64">
    //       <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
    //         <p className="text-sm text-white">
    //           {overview}
    //         </p>
    //       </div>
    //     </div>
    //   </div>
    // </a>
      <div className=" max-w-72  rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src={profile_path}
        alt={name}
        className="w-full h-72 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-900">{name}</h2>
        <p className="text-sm text-gray-500">
          {original_title}
        </p>
      </div>
    </div>
  );
}
