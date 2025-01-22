import { useFormik } from "formik";
import AppNavbar from "../components/AppNavbar";
import * as Yup from 'yup';
import { useDispatch, useSelector } from "react-redux";
import { login } from "../features/auth/authAction";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function Login() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const {isAuthenticated} = useSelector(state => state.auth)

  useEffect(() =>{
    if(isAuthenticated){
      navigate('/home')
    }
  },[navigate,isAuthenticated])

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      password: Yup.string()
        .min(8, "Must be 8 characters up")
        .max(15, "Must be 15 characters")
        .required("Required"),
      email: Yup.string()
      .email("Invalid email")
      .required("Required"),
    }),
    onSubmit: (value) => {
      console.log("value on submit", value);
      dispatch(login(value))
    },
  });
  return (
    <>
      <AppNavbar />
      <section className="bg-slate-100">
        <div className="lg:grid lg:min-h-screen ">
          <main className="flex  justify-center  sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6">
            <div className="max-w-xl lg:max-w-3xl">
              <form
                onSubmit={formik.handleSubmit}
                className="grid grid-cols-6 gap-6"
              >
                <div className="col-span-12">
                  <label
                    htmlFor="Email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Email{" "}
                  </label>

                  <input
                    onChange={formik.handleChange}
                    value={formik.values.email}
                    type="email"
                    id="Email"
                    name="email"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500">{formik.errors.email}</div>
                  ) : null}
                </div>

                <div className="col-span-12 sm:col-span-12">
                  <label
                    htmlFor="Password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    {" "}
                    Password{" "}
                  </label>

                  <input
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    type="password"
                    id="Password"
                    name="password"
                    className="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  />
                  {formik.touched.password && formik.errors.password ? (
                    <div className="text-red-500">{formik.errors.password}</div>
                  ) : null}
                </div>
                <div className="col-span-12 sm:flex sm:items-center sm:gap-4">
                  <button className="inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500">
                    Login
                  </button>
                </div>
              </form>
            </div>
          </main>
        </div>
      </section>
    </>
  );
}
