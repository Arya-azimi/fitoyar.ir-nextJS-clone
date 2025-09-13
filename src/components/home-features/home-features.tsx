import Image from "next/image";
import { SectionTitle } from "../ui/section-title";

const features = [
  {
    iconPlaceholder: "آیکون بدنسازی",
    label: "بدنسازی",
    imageURL: "https://fitoyar.ir/wp-content/uploads/2025/07/gym_13157238.png",
  },
  {
    iconPlaceholder: "آیکون حرکات اصلاحی",
    label: "حرکت اصلاحی",
    imageURL:
      "https://fitoyar.ir/wp-content/uploads/2025/07/flexibility_11127772.png",
  },
  {
    iconPlaceholder: "آیکون عضله سازی",
    label: "عضله سازی",
    imageURL: "https://fitoyar.ir/wp-content/uploads/2025/07/bicep_5689124.png",
  },
  {
    iconPlaceholder: "آیکون علم تغذیه",
    label: "علم تغذیه",
    imageURL: "https://fitoyar.ir/wp-content/uploads/2025/07/plan_2224194.png",
  },
  {
    iconPlaceholder: "آیکون افزایش وزن",
    label: "افزایش وزن",
    imageURL: "https://fitoyar.ir/wp-content/uploads/2025/07/gain-weight.png",
  },
  {
    iconPlaceholder: "آیکون کاهش وزن",
    label: "کاهش وزن",
    imageURL: "https://fitoyar.ir/wp-content/uploads/2025/07/diet_2764444.png",
  },
];

export function HomeFeatures() {
  return (
    <section className="w-full flex justify-center py-5 px-4 bg-gray-50">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-10">
        <SectionTitle>
          در <span className="text-red-500">فیتویار</span> دنبال چی میگردی؟
        </SectionTitle>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-8 gap-y-10 w-full">
          {features.map((feature) => (
            <div
              key={feature.label}
              className="flex flex-col items-center text-center space-y-3"
            >
              <Image
                src={feature.imageURL}
                alt="ورزشکار فیتویار"
                width={60}
                height={60}
                className="cursor-pointer w-[60%]"
                priority
              />
              <span className="font-semibold text-gray-700">
                {feature.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
