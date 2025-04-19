import Link from "next/link";

export default function NewsList({ news }) {
  return (
    <ul className="news-list">
      {news.map((news) => (
        <li key={news.id}>
          <Link href={`/news/${news.id}`}>
            <img src={`/images/news/${news.image}`} alt={news.title} />
            <span>{news.title}</span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
