export const dynamicParams = false;
export const dynamic = 'auto';
export const revalidate = 6000;

export async function generateStaticParams() {
  return [{ slug: 'cikk1' },{ slug: 'cikk2' }];
}

export default async function ArticlePage({ params }) {
  const res = await fetch('https://next-site-minimal-template.vercel.app/api/articles/10');
  const data = res.json();

  return (
    <div className="flex flex-col items-center">
      {data}
    </div>
  )
}