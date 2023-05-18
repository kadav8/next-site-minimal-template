//export const revalidate = 'force-cache';
//export const dynamic = 'force-static'
export const dynamicParams = true;

export default async function ArticlePage({ params }) {
  const res = await fetch('https://next-site-minimal-template.vercel.app/api/articles/10');
  const data = res.json();

  return (
    <div className="flex flex-col items-center">
      {data}
    </div>
  )
}