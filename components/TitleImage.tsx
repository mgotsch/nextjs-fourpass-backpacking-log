export default function TitleImage({
  page,
  title,
  subTitle,
}: {
  page: string,
  title: string,
  subTitle: string,
}) {

  return (
    <>
      <div
        className={`h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center text-center`}
        style={{backgroundImage: `url(/images/${page}Img.jpg)`}}
      >
        <div className="text-slate-200 flex flex-col justify-center items-center backdrop-blur-sm p-10 border-8 border-white border-double md:w-4/5 lg:w-3/5 xl:w-2/5 2xl:w-2/5">
          <h1 className="mb-4 text-5xl font-bold uppercase">
            {title}
          </h1>
          <h3 className="text-xl">
            {subTitle}
          </h3>
        </div>
      </div>
    </>
    
  );
}