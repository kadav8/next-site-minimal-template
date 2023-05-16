export const metadata = {
	title: 'Site Template - Articles',
};

export default async function ArticlePage({ params }) {
  const res = await fetch('https://next-site-minimal-template.vercel.app/api/articles/10', { next: { revalidate: 1000 } });
  const data = res.json();

  return (
    <div className="flex flex-col items-center">
      {data}
    </div>
  )
}