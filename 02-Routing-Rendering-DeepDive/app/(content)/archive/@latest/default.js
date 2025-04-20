import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/news";

// We use the default route because next js expects to render two pages for the same path.
// We did this because of the year route.

export default async function LatestPage() {
  const latestNews = await getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
