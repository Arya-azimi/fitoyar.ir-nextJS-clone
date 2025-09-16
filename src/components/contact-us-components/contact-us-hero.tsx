import Image from "next/image";

export function ContactUsHero() {
  return (
    <>
      <section className="w-full flex justify-center py-12 lg:py-20 px-4">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="text-right space-y-6 md:border-r-2 md:border-red-500 md:pr-6">
            <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
              <span className="text-red-500">فیتویار</span> ، همراه همیشگی شما !
            </h1>
            <p className="text-justify text-black leading-relaxed">
              در فیتویار، هدف ما تنها ارائه محصولات با کیفیت نیست، بلکه ما به
              پشتوانه‌ای مطمئن برای شما تبدیل شده‌ایم. تیم پشتیبانی فیتویار
              آماده است تا در هر مرحله از خرید یا استفاده از محصولات، به شما کمک
              کند. اگر سوالی دارید یا در هر بخش از فرآیند با مشکلی مواجه شدید،
              ما اینجا هستیم تا به شما راهنمایی و پشتیبانی کامل ارائه دهیم.
            </p>
            <p className="text-justify text-black leading-relaxed">
              ما به شما این اطمینان را می‌دهیم که در صورت هرگونه نیاز، همیشه
              همراه شما خواهیم بود و تمام تلاش خود را برای رفع مشکلات و فراهم
              کردن بهترین تجربه خرید انجام خواهیم داد.
            </p>
            <p className="text-justify text-black leading-relaxed">
              برای تماس با تیم فیتویار، از طریق فرم زیر یا اطلاعات تماس ذکر شده
              در زیر، با ما در ارتباط باشید. ما به سرعت پاسخگوی شما خواهیم بود و
              از هرگونه نگرانی شما رفع خواهیم کرد.
            </p>
          </div>
          <div className="text-left space-y-5">
            <div className="flex justify-center items-center">
              <Image
                src="https://fitoyar.ir/wp-content/uploads/2023/08/Group-53-min.png"
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
