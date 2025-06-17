import { useFormik } from "formik";
import AppNavbar from "../components/AppNavbar";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "lucide-react";
import Footer from "../components/Footer";

export default function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuthenticated } = useSelector((state) => state.auth);

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/home");
    }
  }, [navigate, isAuthenticated]);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email").required("Required"),
      password: Yup.string()
        .min(8, "Must be at least 8 characters")
        .max(15, "Must be at most 15 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      dispatch(login(values));
    },
  });

  return (
    <>
      <AppNavbar />
      <section className="min-h-screen flex items-center justify-center  p-10">
        {/* Left Side */}
          <div className="bg-[#032541] rounded-2xl shadow-xl overflow-hidden w-full max-w-5xl grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Image + Text */}
        <div className="relative hidden md:block ">
          <img
            src="https://i5.walmartimages.com/seo/Avengers-Infinity-War-Movie-Poster-Print-Regular-Style-Size-24-X-36_65e23347-2ccc-4581-9700-581e0ea9c3a8.a808f8889bfa9e368659fbefc5e5dda4.jpeg"
            alt="Background"
            className="h-full w-full object-cover"
          />
        
        </div>

        {/* Right Side: Login Form */}
        <main className="flex items-center justify-center px-6 py-12">
          <div className="max-w-md w-full space-y-6">
            <div>
              <h2 className="text-3xl font-bold">Welcome Back</h2>
              <p className="mt-2 text-sm text-gray-400">
                Don’t have an account?{" "}
                <a href="#" className="text-purple-400 hover:underline">
                  Sign up
                </a>
              </p>
            </div>

            <form onSubmit={formik.handleSubmit} className="space-y-4">
              {/* Email */}
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {formik.touched.email && formik.errors.email && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.email}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.password}
                  className="w-full rounded-md bg-gray-800 border border-gray-700 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                {formik.touched.password && formik.errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {formik.errors.password}
                  </p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md text-white font-medium text-sm transition"
              >
                Login
              </button>

              {/* Divider */}
              <div className="text-center text-sm text-gray-400 mt-4">
                — or login with —
              </div>

              {/* OAuth Buttons */}
              <div className="flex space-x-4 mt-2">
                <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-2 rounded-md text-sm">
                  <img
                    src="https://www.svgrepo.com/show/475656/google-color.svg"
                    alt="Google"
                    className="h-5 w-5 mr-2"
                  />
                  Google
                </button>
                <button className="w-full flex items-center justify-center bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white py-2 rounded-md text-sm">
                  <img
                    src="https://www.svgrepo.com/show/303128/apple-logo.svg"
                    alt="Apple"
                    className="h-5 w-5 mr-2"
                  />
                  Apple
                </button>
              </div>
            </form>
          </div>
        </main>
        </div>
      </section>
      <Footer/>
    </>
  );
}
