export default function NewsDetailPage({ params }) {
  const newsId = params.id;
  return (
    <div>
      <h1>NewsPage</h1>
      <p>{newsId}</p>
    </div>
  );
}
