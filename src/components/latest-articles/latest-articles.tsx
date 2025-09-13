import { SectionTitle } from "../ui/section-title";

const articles: any[] = [];

export function LatestArticles() {
  return (
    <section className="w-full flex justify-center py-12 md:py-20 px-4">
      <div className="w-full max-w-6xl flex flex-col items-center space-y-10">
        <SectionTitle>
          آخرین نوشته های <span className="text-red-500">وبلاگ</span>
        </SectionTitle>

        {articles.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full">
            {/* articles.map(article => <ArticleCard key={article.id} {...article} />)
             */}
          </div>
        ) : (
          <div className="text-center text-gray-500 bg-gray-100 p-8 rounded-lg w-full">
            <p className="text-lg">در حال حاضر مقاله ای یافت نمی‌شود.</p>
          </div>
        )}
      </div>
    </section>
  );
}
