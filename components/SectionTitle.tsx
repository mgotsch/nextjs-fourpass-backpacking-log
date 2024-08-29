export default function SectionTitle({
  title, 
  subtitle
} : {
    title: string
    subtitle: string
}) {
  
  return (
    <>
      <h2 className="mt-8 text-3xl font-bold uppercase text-center">
        {title}
      </h2>
      <h3 className="italic text-center">{subtitle}</h3>
      <hr className="w-48 h-px my-2 mx-auto bg-gray-400 border-0 dark:bg-gray-700" />
    </>
  );
}