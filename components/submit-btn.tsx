import { FaPaperPlane } from 'react-icons/fa';
import { experimental_useFormStatus as useFormStatus } from 'react-dom';

export default function SubmitBtn() {
  const { pending } = useFormStatus();

  return (
    <button
      type='submit'
      className='group flex items-center gap-2 px-4 py-2 bg-gray-900 text-white font-semibold justify-center rounded-full sm:max-w-[10rem] hover:drop-shadow-lg  shadow-black overflow-hidden transition outline-none disabled:bg-opacity-75'
      disabled={pending}
    >
      {pending ? (
        <div className='h-5 w-5 animate-spin rounded-full border-b-2 border-white'></div>
      ) : (
        <>
          Send
          <FaPaperPlane className='w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition' />
        </>
      )}
    </button>
  );
}
