import Link from 'next/link';
import ForgotPassword from '../components/ForgotPassword';

import '../styles/globals.css'



const ForgotPasswordPage = () => {
  return (
    <div>
      <Link href="/login" className="absolute top-4 left-4">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-900 dark:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
        </svg>
      </Link>
      <ForgotPassword />
    </div>
  );
};

export default ForgotPasswordPage;