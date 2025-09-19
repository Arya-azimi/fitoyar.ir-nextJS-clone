import { Send } from "lucide-react";
import { SectionTitle } from "../ui/section-title";

export function ContactUsContactForm() {
  return (
    <>
      <section className="w-full flex justify-center py-12 md:py-20 px-4 bg-white">
        <div className="w-full max-w-6xl bg-gray-200 p-8 rounded-2xl">
          <SectionTitle>فرم تماس با ما</SectionTitle>
          <form className="space-y-6 mt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-end">
                <label
                  htmlFor="last-name"
                  className="w-full mb-2 font-medium text-gray-700"
                >
                  نام خانوادگی :
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="bg-white w-full p-3 rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="flex flex-col items-end">
                <label
                  htmlFor="first-name"
                  className="w-full mb-2 font-medium text-gray-700"
                >
                  نام :
                </label>
                <input
                  type="text"
                  id="first-name"
                  className=" bg-white w-full p-3 rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col items-end">
                <label
                  htmlFor="subject"
                  className="w-full mb-2 font-medium text-gray-700"
                >
                  موضوع پیغام :
                </label>
                <input
                  type="text"
                  id="subject"
                  className="bg-white w-full p-3 rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500"
                />
              </div>
              <div className="flex flex-col items-end">
                <label
                  htmlFor="email"
                  className="w-full mb-2 font-medium text-gray-700"
                >
                  ایمیل :
                </label>
                <input
                  type="email"
                  id="email"
                  className="bg-white w-full p-3 rounded-lg border-gray-300 focus:ring-red-500 focus:border-red-500"
                />
              </div>
            </div>

            <div className="flex flex-col items-end">
              <label
                htmlFor="message"
                className="w-full mb-2 font-medium text-gray-700"
              >
                پیغام :
              </label>
              <textarea
                id="message"
                rows={8}
                className="w-full p-3 rounded-lg bg-white border-gray-300 focus:ring-red-500 focus:border-red-500"
              ></textarea>
            </div>

            <div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-x-2 bg-white p-3 rounded-lg font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
              >
                <Send size={20} />
                <span>ارسال پیغام</span>
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
