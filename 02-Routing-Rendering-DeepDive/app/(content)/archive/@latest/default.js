import NewsList from "@/components/news-list";
import { getLatestNews } from "@/lib/new";

// We use the default route because next js expects to render two pages for the same path.
// We did this because of the year route.

export default function LatestPage() {
  const latestNews = getLatestNews();
  return (
    <>
      <h2>Latest News</h2>
      <NewsList news={latestNews} />
    </>
  );
}
