import { dictionary } from '../../dictionary'

export default function Page({ params: { lang } }) {
  const t = dictionary(lang)

  return (
    <div className="flex flex-col items-center">
      <div className="w-10/12 xl:w-[75rem] my-32">

        <div className="flex flex-row">
          <div className="flex flex-col w-full lg:w-1/2 justify-center">
          <div className="text-5xl xl:text-6xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-500 my-4">
              {t.mainPage.title}
            </div>
            <div className="flex text-xl leading-relaxed py-8 sm:w-10/12 lg:w-4/5">
              {t.mainPage.content1}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}