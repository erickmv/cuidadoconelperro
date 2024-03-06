import { gql, useMutation, ApolloError } from '@apollo/client';
import client from '../apolloClient';

export const LOGIN_MUTATION = gql`
  mutation GenerateCustomerToken($email: String!, $password: String!) {
    generateCustomerToken(email: $email, password: $password) {
      token
    }
  }
`;

export const useLoginMutation = () => {
  return useMutation(LOGIN_MUTATION, {
    client: client,
    context: {
      headers: {
        Cookie: 'PHPSESSID=7b942f5fd07b473be03f8c984d29abcc',
        Store: 'cuidadoconelperro_mx_store_view'
      }
    }
  });
};

export const FORGOT_PASSWORD_MUTATION = gql`
  mutation ForgotPassword($email: String!) {
    forgotPassword(email: $email)
  }
`;

export const useForgotPasswordMutation = () => {
  return useMutation(FORGOT_PASSWORD_MUTATION, {
    client: client,
  });
};

