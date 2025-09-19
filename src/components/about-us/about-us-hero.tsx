import Image from "next/image";
import Link from "next/link";

export function AboutUsHero() {
  return (
    <>
      <section className="w-full flex justify-center py-12 lg:py-20 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-right space-y-6 md:border-r-2 md:border-red-500 md:pr-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
              درباره <span className="text-red-500">فیتویار!</span>
            </h1>
            <p className="text-justify text-black leading-relaxed">
              فیتویار، یک وب‌سایت تخصصی در زمینه ورزش و سلامت است که به شما کمک
              می‌کند تا با بهره‌گیری از بهترین تجهیزات و علم روز، عملکرد ورزشی
              خود را بهبود بخشید. تیم فیتویار از افراد با تجربه و ورزشکاران
              حرفه‌ای تشکیل شده که سال‌ها در عرصه ورزش فعالیت کرده‌اند و به خوبی
              می‌دانند که موفقیت در ورزش، تنها با تلاش فردی حاصل نمی‌شود.
              استفاده از تجهیزات مناسب و داشتن اطلاعات صحیح و به‌روز از عوامل
              کلیدی برای پیشرفت هر ورزشکاری است. ما در فیتویار به این اصل اعتقاد
              داریم که هر ورزشکاری برای رسیدن به اهداف خود، نیاز به ابزار و دانش
              مناسب دارد. به همین دلیل، ما در سایت فیتویار طیف گسترده‌ای از
              محصولات ورزشی با کیفیت بالا و جدیدترین تکنولوژی‌ها را ارائه
              می‌دهیم. علاوه بر این، با تولید مقالات علمی و آموزشی، سعی داریم تا
              اطلاعات لازم را برای استفاده بهینه از تجهیزات ورزشی در اختیار شما
              قرار دهیم.
            </p>

            <Link
              href="/start"
              className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              تماس با پشتیبانی
            </Link>
          </div>
          <div className="text-left space-y-5">
            <div className="flex justify-center items-center">
              <Image
                src="https://fitoyar.ir/wp-content/uploads/2025/04/Group-1-1-min.png"
                alt="ورزشکار فیتویار"
                width={500}
                height={500}
                className="w-[80%] lg:w-full"
                priority
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
