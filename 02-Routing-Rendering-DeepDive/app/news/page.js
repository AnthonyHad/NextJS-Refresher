import Link from "next/link";

import { DUMMY_NEWS } from "@/dummy-news";

export default function NewsPage() {
  return (
    <div>
      <h1>News</h1>
      <ul className="news-list">
        {DUMMY_NEWS.map((news) => (
          <li key={news.id}>
            <Link href={`/news/${news.id}`}>
              <img src={`/images/news/${news.image}`} alt={news.title} />
              <span>{news.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
