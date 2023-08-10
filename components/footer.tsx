export default function Footer() {
  return (
    <footer className='mt-14 p-5 sm:mt-20 flex flex-col items-center justify-center'>
      <small>&copy; 2023 Pierpaolo. All rights reserved.</small>
      <div className='my-5 h-[0.2px] w-full bg-black/10 '></div>
      <p className='max-w-[45rem] text-center text-sm text-gray-950/90'>
        <span className='font-semibold'>About this website:</span> built with
        React & Next.js (App Router & Server Actions), Typescript, Tailwind CSS,
        Framer Motion, React Email & Resend, Vercel hosting.
      </p>
    </footer>
  );
}
