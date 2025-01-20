import AppNavbar from "../components/AppNavbar";

export default function About_Us() {
  return (
    <>
    <AppNavbar/>
    <section>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 md:items-center md:gap-8">
          <div>
            <div className="max-w-lg md:max-w-none">
              <h2 className="text-2xl font-semibold text-gray-900 sm:text-3xl">
                Road to be a Web front-end Developer!
              </h2>

              <p className="mt-4 text-gray-700">
                We have nothing to say because we just to to know about React-JS
                hehehe
              </p>
            </div>
          </div>

          <div>
            <img
              src="https://media.licdn.com/dms/image/v2/D5612AQFSVrEIJxq_aA/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1679683081898?e=2147483647&v=beta&t=jy1SUv24boZ0boUutFvP8a1cDXfXcvnHinVztXzqen4"
              className="rounded"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
