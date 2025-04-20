import { DUMMY_NEWS } from "@/dummy-news";
import { notFound } from "next/navigation";
import Link from "next/link";

export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  const newsItem = DUMMY_NEWS.find((news) => news.id === newsId);
  if (!newsItem) {
    notFound();
  }
  return (
    <article className="news-article">
      <header>
        <Link href={`/news/${newsItem.id}/image`}>
          <img src={`/images/news/${newsItem.image}`} alt={newsItem.title} />
        </Link>
        <h1>{newsItem.title}</h1>
        <time dateTime={newsItem.date}>{newsItem.date}</time>
        <p>News ID: {newsId}</p>
      </header>
      <p>{newsItem.content}</p>
    </article>
  );
}
