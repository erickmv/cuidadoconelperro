import { useEffect, useState } from 'react';
import { gql, useMutation, ApolloError } from '@apollo/client';
import client from '../apolloClient';
import Link from 'next/link';
import router from 'next/router';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOGIN_MUTATION = gql`
  mutation GenerateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    client: client,
    context: {
      headers: {
        Cookie: 'PHPSESSID=7b942f5fd07b473be03f8c984d29abcc',
        Store: 'cuidadoconelperro_mx_store_view'
      }
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      console.log(data.generateCustomerToken.token);
      setToken(data.generateCustomerToken.token);
      localStorage.setItem('token', data.generateCustomerToken.token);
    } catch (error) {
      if (error) {
       console.log(error)
      } else {
        console.error('Error desconocido:', error);
      }
      toast.error(`Error: ${error}`, {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        style: {
          backgroundColor: '#FE6454',
          width: '600px',
          color: 'white',
          textAlign: 'center'
        }
      });
    }
  };

  useEffect(() => {
    if (token) {
      const token = localStorage.getItem('token');
      router.push('/home');
    }
  }, [token]);

  return (
    <>
      <ToastContainer /> 
      <section className="bg-gray-50 dark:bg-gray-900 login-section">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <a href="#" className="flex justify-center items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                <img className="w-8 h-8 mr-2" src="https://play-lh.googleusercontent.com/kHq8bCA6yER1F5z8j1kplPW4sKreIutzZR6fuPZhhz3z4aL7Igv1mHBYigP1Lgl3BQ" alt="logo" />
                <h3>CCP</h3>
              </a>
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                ENTRA EN TU CUENTA
              </h1>
              <form onSubmit={handleSubmit} className="space-y-4 md:space-y-6">
                <div>
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input type="email" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" required />
                </div>
                <div>
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                  <input type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="••••••••" required />
                </div>
                <button type="submit" disabled={loading} className="w-full text-white bg-black hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">INICIAR SESIÓN</button>
                <Link href="/forgot-password">
                  <p className="text-sm font-light text-gray-500 dark:text-gray-400 mt-5">
                    Olvidaste tu contraseña<span className="font-medium text-primary-600 hover:underline dark:text-primary-500"> Click aquí</span>
                  </p>
                </Link>
              </form>
            </div>
          </div>
        </div>
        <div className="flex space-x-4 categorias">
          <h1 className="categoria ">MUJERES</h1>
          <h1 className="categoria">HOMBRES</h1>
          <h1 className="categoria">KIDS</h1>
        </div>
      </section>
    </>
  );
};

export default Login;
