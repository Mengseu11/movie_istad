import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, NavLink, useNavigate } from "react-router";
import { getProfile } from "../features/auth/authAction";
import { logOut } from "../features/auth/authSlice";
import { Search, Menu, X } from "lucide-react";
import SearchDropdown from "./SearchDropdown";
     
const AvatarMenu = ({ avatar }) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const handleLogout = () => dispatch(logOut());

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={menuRef}>
      <button
        onClick={() => setOpen(!open)}
        className="w-10 h-10 rounded-full focus:ring-2 ring-offset-2 ring-white"
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User menu"
      >
        <img
          src={avatar}
          alt="User avatar"
          className="w-full h-full rounded-full"
        />
      </button>

      <ul
        className={`absolute top-14 right-0 w-52 bg-white rounded-md shadow-md border z-50 ${
          open ? "block" : "hidden"
        }`}
      >
        
        <li>
          <button
            onClick={handleLogout}
            className="block w-full text-left text-red-600 hover:bg-gray-100 border-t px-3 py-3"
            role="menuitem"
          >
            Logout
          </button>
        </li>
      </ul>
    </div>
  );
};

export default function AppNavbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const profile = useSelector((state) => state.auth.profile);
  const accessToken = useSelector((state) => state.auth.accessToken);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);

  const navigation = [
    { title: "🏠 Home", path: "/home" },
    { title: "Movie", path: "/movie" },
    { title: "People", path: "/people" },
    { title: "Contact Us", path: "/contactus" },
  ];

  useEffect(() => {
    if (isAuthenticated) {
      dispatch(getProfile(accessToken));
    }
  }, [isAuthenticated, dispatch, accessToken]);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".search-container")) {
        setShowResults(false);
      }
    };
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        setShowResults(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("click", handleOutsideClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? "hidden" : "";
  }, [mobileMenuOpen]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;

    const mockResults = [
      { id: 1, title: "Sample Movie", type: "movie" },
      // { id: 2, title: "Sample TV Show", type: "tv" },
      // { id: 3, title: "Sample Person", type: "person" },
    ].filter((item) =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    setSearchResults(mockResults);
    setShowResults(true);
  };

  const handleResultClick = (result) => {
    navigate(`/${result.type}/${result.id}`);
    setShowResults(false);
    setSearchQuery("");
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 w-full z-50 bg-[#032541] text-white">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo & Toggle */}
          <div className="flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden mr-4"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
            <Link to="/" className="text-xl font-bold">
              YourLogo
            </Link>
          </div>

          {/* Desktop Nav */}
         

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            
             <nav className="hidden lg:flex items-center space-x-6">
            {navigation.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                className={({ isActive }) =>
                  `hover:text-gray-300 px-3 py-2 rounded-sm ${
                    isActive ? "bg-sky-900" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}
          </nav>
            {isAuthenticated ? (
              <AvatarMenu
                avatar={profile?.avatar || "https://via.placeholder.com/40"}
              />
            ) : (
              <Link to="/login" className="hover:text-gray-300 px-3 py-2">
                Login
              </Link>
            )}
          </div>
        </div>

        {/* Mobile Nav */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 space-y-3 pb-4">
            {navigation.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                onClick={() => setMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block hover:text-gray-300 px-3 py-2 rounded-sm ${
                    isActive ? "bg-sky-900" : ""
                  }`
                }
              >
                {item.title}
              </NavLink>
            ))}

            {/* Mobile Search */}
            {/* <form onSubmit={handleSearch} className="mt-3">
              <div className="flex items-center px-2 py-1 border rounded-lg bg-white bg-opacity-10">
                <Search className="w-5 h-5 text-gray-300" />
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full px-2 py-1 text-white bg-transparent outline-none placeholder-gray-300"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form> */}
          </div>
        )}
      </div>
      <SearchDropdown/>
    </header>
  );
}
