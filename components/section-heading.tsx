interface SectionHeadingProps {
  title: string;
}

export default function SectionHeading({ title }: SectionHeadingProps) {
  return (
    <h2 className='text-2xl font-semibold sm:text-3xl mb-10 text-center'>
      {title}
    </h2>
  );
}
