export default function TitleImage({
  page,
  title,
  subTitle,
}: {
  page: string;
  title: string;
  subTitle: string;
}) {
  return (
    <div
      className="min-h-screen bg-scroll bg-no-repeat bg-cover bg-center backdrop-blur text-slate-200 flex flex-col justify-center items-center text-center px-4 sm:px-6 md:px-8"
      style={{ backgroundImage: `url(/images/${page}Img.jpg)` }}
    >
      <div className="backdrop-blur-sm p-6 sm:p-8 md:p-10 border-4 sm:border-8 border-white border-double w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl">
        <h1 className="mb-4 text-3xl sm:text-4xl md:text-5xl font-bold uppercase">
          {title}
        </h1>
        <h3 className="text-base sm:text-lg md:text-xl">
          {subTitle}
        </h3>
      </div>
    </div>
  );
}