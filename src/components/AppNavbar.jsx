import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink } from "react-router";
import { getProfile } from "../features/auth/authAction";
import { logOut } from "../features/auth/authSlice";
import { Search } from "lucide-react";

// Avtar with darpdown menu
const AvatarMenue = ({avatar}) => {

  const dispatch = useDispatch()
  const [state, setState] = useState(false);
  const profileRef = useRef();
  

  const navigation = [
    { title: "Dashboard", path: "javascript:void(0)" },
    // { title: "Logout", path: "javascript:void(0)" },
  ];

  useEffect(() => {

  }, []);
  const onLogout = ()=>{
    dispatch(logOut())
  }

  return (
    <div className="relative border-t lg:border-none">
      <div className="">
        <button
          ref={profileRef}
          className="hidden w-10 h-10 outline-none rounded-full ring-offset-2 ring-gray-200 lg:focus:ring-2 lg:block"
          onClick={() => setState(!state)}
        >
          <img
            src={avatar}
            className="w-full h-full rounded-full"
          />
        </button>
      </div>
      <ul
        className={`bg-white top-14 right-0 mt-6 space-y-6 lg:absolute lg:border lg:rounded-md lg:w-52 lg:shadow-md lg:space-y-0 lg:mt-0 ${
          state ? "" : "lg:hidden"
        }`}
      >
        {navigation.map((item, idx) => (
          <li key={idx}>
            <a
              className="block text-gray-600 hover:text-gray-900 lg:hover:bg-gray-50 lg:p-3"
              href={item.path}
            >
              {item.title}
            </a>
          </li>
        ))}
        <button onClick={onLogout} className="block w-full text-justify text-red-600 hover:text-gray-400  border-t py-3 lg:hover:bg-gray-50 lg:p-3">
          Logout
        </button>
      </ul>
    </div>
  );
};

export default function AppNavbar() {
  const dispatch = useDispatch()

    const count = useSelector((state) => state.counter.value)
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated)
    const profile = useSelector(state => state.auth.profile)
    const accessToken = useSelector(state => state.auth.accessToken)

    const [state, setState] = useState(false)
    const [theme, setTheme] = useState("light");
    
    useEffect(() => {
      document.body.className =
        theme === "light" ? "bg-white text-black" : "bg-black text-white";
    }, [theme]);
  
    const toggleTheme = () => {
      setTheme(theme === "light" ? "dark" : "light");
    };
    useEffect(() => {
        console.log('app navbar use effect')
        dispatch(getProfile(accessToken))
    }, [isAuthenticated])

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    { title:"🏠 "+"Home", path: "/home" },
    { title: "Movie", path: "/movie" },
    { title: "People", path: "/people" },
    { title: "Contact Us", path: "/contact-us" },
    
    // { title: "Login", path: "/login" },
  ];

  const submenuNav = [
    // { title: "Overview", path: "javascript:void(0)" },
    // { title: "Integration", path: "javascript:void(0)" },
    // { title: "Billing", path: "javascript:void(0)" },
    // { title: "Transactions", path: "javascript:void(0)" },
    // { title: "Plans", path: "javascript:void(0)" },
  ];

  return (
    <header className="text-base lg:text-sm sticky top-0 left-0 w-full z-50 " style={{background: '#032541'}}>
      <div
        className={` items-center gap-x-14 px-4 max-w-screen-xl  mx-auto lg:flex lg:px-8 lg:static ${
          state ? "h-full fixed inset-x-0" : ""
        }`}
      >
        {/* <div className="flex items-center justify-between py-3 lg:py-5 lg:block ">
        </div> */}
        <div
          className={`nav-menu flex-1 pb-28 mt-8 overflow-y-auto max-h-screen lg:block lg:overflow-visible lg:pb-0 lg:mt-0 ${
            state ? "" : "hidden"
          }`}
        >
          <ul className="items-center float-end space-y-6 lg:flex lg:space-x-6 lg:space-y-0 font-bold">
            
            {/* <li className="px-2 rounded-lg bg-red-700 text-white font-bold">
              {count}
            </li> */}
            {navigation.map((item, idx) => {
              return (
                <li key={idx}>
                  {/* <Link
                    to={item.path}
                    className="block text-white  hover:text-gray-300  hover:bg-slate-500 hover:p-2 rounded-xl "
                  >
                    {item.title}
                  </Link> */}
                  <NavLink 
                  to={item.path}
                  className={({isActive}) =>
                  `block text-white  hover:text-gray-300  hover:bg-slate-500 p-3 rounded-sm ${
                    isActive? " bg-sky-900 p-4 ": ""
                  }`
                  }
                  >
                    {item.title}
                  </NavLink>
                </li>
              );
            })}
            
            {/* <form
              onSubmit={(e) => e.preventDefault()}
              className="flex-1 items-center justify-end pb-4 lg:flex lg:pb-0"
            >
              <div className="flex items-center gap-1 px-2 border rounded-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
                <input
                  type="text"
                  placeholder="Search"
                  className="w-full px-2 py-2 text-white bg-transparent rounded-md outline-none"
                />
              </div>
            </form> */}
            {/* <Link
              onClick={toggleTheme}
              className="relative inline-block rounded-full "
            >
              {theme === "light" ? "🌙" : "☀️"}
            </Link> */}
            {
                isAuthenticated && isAuthenticated ?(
                  <AvatarMenue avatar={profile && profile.avatar} />
                ):(<li>
                <Link
                  to='/login'
                  className="block text-white hover:text-gray-900"
                >
                  Login
                </Link>
              </li>)
              
            }
            
          </ul>
        </div>
      </div>
      {/* <nav className="border-b">
        <ul className="flex items-center gap-x-3 max-w-screen-xl mx-auto px-4 overflow-x-auto lg:px-8">
          {submenuNav.map((item, idx) => {
            return (
              // Replace [idx == 0] with [window.location.pathname == item.path]
              <li
                key={idx}
                className={`py-1 ${
                  idx == 0 ? "border-b-2 border-indigo-600" : ""
                }`}
              >
                <a
                  href={item.path}
                  className="block py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
                >
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav> */}
       
      <div className="flex items-center w-full min-w-3xl border border-gray-300 bg-white px-28 py-2">
        <Search className="text-gray-500 mr-2" size={20} />
        <input
          type="text"
          placeholder="Search for a movie, tv show, person..."
          className="w-full outline-none bg-transparent text-gray-700 placeholder-gray-400"
        />
      </div>

    </header>
    
  );
}
