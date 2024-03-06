import { useState } from 'react';
import { gql, useMutation } from '@apollo/client';
import client from '../apolloClient'; // 

const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [forgotPassword, { loading, error }] = useMutation(FORGOT_PASSWORD_MUTATION, {
    client: client, // Pasar el cliente Apollo como opción
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await forgotPassword({ variables: { email } });
      console.log("Se ha enviado un correo para restablecer la contraseña.");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="bg-gray-50 dark:bg-gray-900 login-section">
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
        <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <a href="#" className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
              <img className="w-8 h-8 mr-2" src="https://play-lh.googleusercontent.com/kHq8bCA6yER1F5z8j1kplPW4sKreIutzZR6fuPZhhz3z4aL7Igv1mHBYigP1Lgl3BQ" alt="logo" />
              <h3>CCP</h3>
            </a>
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
              ¿Olvidaste tu contraseña?
            </h1>
            <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Correo electrónico</label>
                <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
              </div>
              <button type="submit" disabled={loading} className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Restablecer contraseña</button>
              {error && <p className="text-red-500">Error: {error.message}</p>}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ForgotPassword;
