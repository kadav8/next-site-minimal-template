export default function MagazinPage({ data }) {
   return (
      <div className="flex flex-col items-center">
         {data}
      </div>
   );
 }
  
 // This function gets called at build time on server-side.
 // It may be called again, on a serverless function, if
 // revalidation is enabled and a new request comes in
 export async function getStaticProps() {
   const res = await fetch('https://next-site-minimal-template.vercel.app/api/articles/10');
   const data = await res.json();
  
   return {
     props: {
      data,
     },
     // Next.js will attempt to re-generate the page:
     // - When a request comes in
     // - At most once every 1000 seconds
     revalidate: 1000, // In seconds
   };
 }
  
 // This function gets called at build time on server-side.
 // It may be called again, on a serverless function, if
 // the path has not been generated.
 export async function getStaticPaths() {  
   // Get the paths we want to pre-render
   const paths =  [{ params: { slug: 'cikk1' } },{ params: { slug: 'cikk2' } } ];
  
   // We'll pre-render only these paths at build time.
   // { fallback: 'blocking' } will server-render pages
   // on-demand if the path doesn't exist.
   return { paths, fallback: 'blocking' };
 }
