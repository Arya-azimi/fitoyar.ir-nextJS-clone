import Image from "next/image";
import Link from "next/link";

export function HeroSection() {
  return (
    <section className="w-full flex justify-center py-12 lg:py-20 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="text-right space-y-6 border-r-2 border-red-500 pr-6">
          <h1 className="text-3xl lg:text-4xl font-extrabold text-gray-800">
            از خوب به عالی، با <span className="text-red-500">فیتویار!</span>
          </h1>
          <p className="text-justify text-black leading-relaxed">
            چه رویای آمادگی بدن برای قهرمانی را در سر داشته باشید، چه برای
            افزایش حجم، عضله سازی و رسیدن به اوج آمادگی در یک رشته ورزشی تخصصی
            تلاش کنید، و یا به دنبال حرکات اصلاحی برای سلامت و عملکرد بدن خود
            باشید، فیتویار نقشه راه و فنی همیشگی شما در این مسیر است.
          </p>
          <p className="text-justify text-black leading-relaxed">
            ما در فیتویار به برنامه‌های آماده و کلیشه‌ای اعتقادی نداریم. تیم
            متخصص ما، متشکل از مربیان و کارشناسان فیزیولوژی ورزشی، سفر شما را با
            یک ارزیابی جامع و موشکافانه آغاز می‌کنند. در این فرآیند، تمامی
            جنبه‌ها از جمله آنالیز ترکیب بدنی، بررسی سبک زندگی، سوابق تمرینی و
            اهداف نهایی شما به دقت تحلیل می‌شوند.
          </p>
          <p className="text-justify text-black leading-relaxed">
            سپس بر اساس این داده‌ها، یک برنامه تمرینی و رژیم غذایی کاملاً
            شخصی‌سازی‌شده برای شما طراحی می‌کنیم. این برنامه مانند یک اثر انگشت،
            مختص شماست و تضمین می‌کند که قدم به قدم، به شیوه‌ای هوشمندانه، مؤثر
            و به دور از آسیب‌دیدگی به سوی هدف خود حرکت کنید.
          </p>
          <p className="text-justify text-black leading-relaxed">
            تحول بزرگ، با یک تصمیم هوشمندانه آغاز می‌شود. برای برداشتن اولین قدم
            و ساختن بهترین نسخه از خودتان آماده‌اید؟
          </p>
          <Link
            href="/start"
            className="inline-block bg-red-500 text-white font-bold py-3 px-8 rounded-lg hover:bg-red-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            همین حالا شروع کنید!
          </Link>
        </div>
        <div className="text-left space-y-5">
          <div className="flex justify-center items-center">
            <Image
              src="https://fitoyar.ir/wp-content/uploads/2025/04/Group-1-1-min.png"
              alt="ورزشکار فیتویار"
              width={500}
              height={500}
              className="w-full "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
