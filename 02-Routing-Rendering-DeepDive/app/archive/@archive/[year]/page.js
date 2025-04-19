import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/new";

export default function FilteredNewsPage({ params }) {
  const { year } = params;
  const news = getNewsForYear(year);
  return <NewsList news={news} />;
}
