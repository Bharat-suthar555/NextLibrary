import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
};

export type BookInput = {
  author: Scalars['String']['input'];
  genre: Scalars['String']['input'];
  image: Scalars['String']['input'];
  language: Scalars['String']['input'];
  publication_year: Scalars['DateTime']['input'];
  title: Scalars['String']['input'];
};

export type Books = {
  __typename?: 'Books';
  author: Scalars['String']['output'];
  genre: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  language: Scalars['String']['output'];
  publication_year: Scalars['DateTime']['output'];
  title: Scalars['String']['output'];
};

export type Borrowing = {
  __typename?: 'Borrowing';
  book: Books;
  borrowing_id: Scalars['ID']['output'];
  date_borrowed: Scalars['DateTime']['output'];
  date_returned?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  status: Scalars['Boolean']['output'];
  user: User;
  user_id: Scalars['ID']['output'];
};

export type BorrowingInput = {
  date_borrowed: Scalars['DateTime']['input'];
  date_returned?: InputMaybe<Scalars['DateTime']['input']>;
  id: Scalars['Float']['input'];
  status: Scalars['Boolean']['input'];
  user_id: Scalars['Float']['input'];
};

export type Branch = {
  __typename?: 'Branch';
  branchPublicationBooks: BranchPublicationBooks;
  branch_address: Scalars['String']['output'];
  branch_contact_number: Scalars['Float']['output'];
  branch_email: Scalars['String']['output'];
  branch_id: Scalars['ID']['output'];
  branch_name: Scalars['String']['output'];
  user: Array<User>;
  userCount: Scalars['Int']['output'];
};

export type BranchPublicationBooks = {
  __typename?: 'BranchPublicationBooks';
  Stock: Scalars['Float']['output'];
  books: Books;
  branch: Branch;
  id: Scalars['ID']['output'];
  publication: Publication;
};

export type BranchUser = {
  __typename?: 'BranchUser';
  branch: Branch;
  id: Scalars['ID']['output'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  addUserToBranch: BranchUser;
  createBook: Books;
  createBorrowing: Borrowing;
  createBranch: Branch;
  createBranchPublicationBooks: BranchPublicationBooks;
  createPublication: Publication;
  createUser: User;
  deleteBook: Scalars['Boolean']['output'];
  login: User;
  updateBook: Books;
};


export type MutationAddUserToBranchArgs = {
  branch_id: Scalars['Float']['input'];
  user_id: Scalars['Float']['input'];
};


export type MutationCreateBookArgs = {
  data: BookInput;
};


export type MutationCreateBorrowingArgs = {
  data: BorrowingInput;
};


export type MutationCreateBranchArgs = {
  branch_address: Scalars['String']['input'];
  branch_contact_number: Scalars['Float']['input'];
  branch_email: Scalars['String']['input'];
  branch_name: Scalars['String']['input'];
};


export type MutationCreateBranchPublicationBooksArgs = {
  Stock: Scalars['Float']['input'];
  branch_id: Scalars['Float']['input'];
  id: Scalars['Float']['input'];
  publication_id: Scalars['Float']['input'];
};


export type MutationCreatePublicationArgs = {
  publisher_name: Scalars['String']['input'];
};


export type MutationCreateUserArgs = {
  Role?: InputMaybe<Scalars['Boolean']['input']>;
  age: Scalars['Float']['input'];
  branch_id?: InputMaybe<Scalars['Float']['input']>;
  email: Scalars['String']['input'];
  fname: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  lname: Scalars['String']['input'];
  password: Scalars['String']['input'];
  phone_number: Scalars['Float']['input'];
  username: Scalars['String']['input'];
};


export type MutationDeleteBookArgs = {
  id: Scalars['Float']['input'];
};


export type MutationLoginArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationUpdateBookArgs = {
  author?: InputMaybe<Scalars['String']['input']>;
  genre?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['Float']['input'];
  image?: InputMaybe<Scalars['String']['input']>;
  language?: InputMaybe<Scalars['String']['input']>;
  publication_year?: InputMaybe<Scalars['DateTime']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type Publication = {
  __typename?: 'Publication';
  branchPublicationBooks: Array<BranchPublicationBooks>;
  publication_id: Scalars['ID']['output'];
  publisher_name: Scalars['String']['output'];
};

export type Query = {
  __typename?: 'Query';
  borrowings: Array<Borrowing>;
  branchPublicationBooks: Array<BranchPublicationBooks>;
  branches: Array<Branch>;
  getAllBooks: Array<Books>;
  getAllBranchUsers: Array<BranchUser>;
  getAllUsers: Array<User>;
  getBookById?: Maybe<Books>;
  getBranchUserById: BranchUser;
  getUser: User;
  publications: Array<Publication>;
  userCount: Scalars['Float']['output'];
};


export type QueryGetBookByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetBranchUserByIdArgs = {
  id: Scalars['Float']['input'];
};


export type QueryGetUserArgs = {
  user_id: Scalars['Float']['input'];
};

export type User = {
  __typename?: 'User';
  Role: Scalars['Boolean']['output'];
  age: Scalars['Float']['output'];
  borrowings: Array<Borrowing>;
  branch: Branch;
  branch_id?: Maybe<Scalars['Float']['output']>;
  email: Scalars['String']['output'];
  fname: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  lname: Scalars['String']['output'];
  password: Scalars['String']['output'];
  phone_number: Scalars['Float']['output'];
  user_id: Scalars['ID']['output'];
  username: Scalars['String']['output'];
};

export type CreateBookMutationVariables = Exact<{
  data: BookInput;
}>;


export type CreateBookMutation = { __typename?: 'Mutation', createBook: { __typename?: 'Books', title: string, author: string, genre: string, publication_year: any, language: string, image: string } };

export type CreateBorrowingMutationVariables = Exact<{
  data: BorrowingInput;
}>;


export type CreateBorrowingMutation = { __typename?: 'Mutation', createBorrowing: { __typename?: 'Borrowing', user_id: string } };

export type GetAllBooksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllBooksQuery = { __typename?: 'Query', getAllBooks: Array<{ __typename?: 'Books', id: string, title: string, author: string, genre: string, publication_year: any, language: string, image: string }> };

export type BorrowingsQueryVariables = Exact<{ [key: string]: never; }>;


export type BorrowingsQuery = { __typename?: 'Query', borrowings: Array<{ __typename?: 'Borrowing', date_borrowed: any, date_returned?: any | null, user: { __typename?: 'User', user_id: string, fname: string, lname: string, username: string, email: string }, book: { __typename?: 'Books', id: string, title: string, author: string } }> };

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = { __typename?: 'Query', getAllUsers: Array<{ __typename?: 'User', user_id: string, fname: string, lname: string, email: string, password: string, gender: string, age: number, branch_id?: number | null, phone_number: number }> };

export type GetBookByIdQueryVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type GetBookByIdQuery = { __typename?: 'Query', getBookById?: { __typename?: 'Books', id: string, title: string, author: string, genre: string, publication_year: any, language: string, image: string } | null };

export type GetUserQueryVariables = Exact<{
  user_id: Scalars['Float']['input'];
}>;


export type GetUserQuery = { __typename?: 'Query', getUser: { __typename?: 'User', fname: string, lname: string, age: number, gender: string, username: string, password: string, email: string, phone_number: number, Role: boolean, branch_id?: number | null } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'User', user_id: string, fname: string, lname: string, email: string, Role: boolean } };

export type DeleteBookMutationVariables = Exact<{
  id: Scalars['Float']['input'];
}>;


export type DeleteBookMutation = { __typename?: 'Mutation', deleteBook: boolean };


export const CreateBookDocument = gql`
    mutation createBook($data: BookInput!) {
  createBook(data: $data) {
    title
    author
    genre
    publication_year
    language
    image
  }
}
    `;
export type CreateBookMutationFn = Apollo.MutationFunction<CreateBookMutation, CreateBookMutationVariables>;

/**
 * __useCreateBookMutation__
 *
 * To run a mutation, you first call `useCreateBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookMutation, { data, loading, error }] = useCreateBookMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBookMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookMutation, CreateBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookMutation, CreateBookMutationVariables>(CreateBookDocument, options);
      }
export type CreateBookMutationHookResult = ReturnType<typeof useCreateBookMutation>;
export type CreateBookMutationResult = Apollo.MutationResult<CreateBookMutation>;
export type CreateBookMutationOptions = Apollo.BaseMutationOptions<CreateBookMutation, CreateBookMutationVariables>;
export const CreateBorrowingDocument = gql`
    mutation createBorrowing($data: BorrowingInput!) {
  createBorrowing(data: $data) {
    user_id
  }
}
    `;
export type CreateBorrowingMutationFn = Apollo.MutationFunction<CreateBorrowingMutation, CreateBorrowingMutationVariables>;

/**
 * __useCreateBorrowingMutation__
 *
 * To run a mutation, you first call `useCreateBorrowingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBorrowingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBorrowingMutation, { data, loading, error }] = useCreateBorrowingMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCreateBorrowingMutation(baseOptions?: Apollo.MutationHookOptions<CreateBorrowingMutation, CreateBorrowingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBorrowingMutation, CreateBorrowingMutationVariables>(CreateBorrowingDocument, options);
      }
export type CreateBorrowingMutationHookResult = ReturnType<typeof useCreateBorrowingMutation>;
export type CreateBorrowingMutationResult = Apollo.MutationResult<CreateBorrowingMutation>;
export type CreateBorrowingMutationOptions = Apollo.BaseMutationOptions<CreateBorrowingMutation, CreateBorrowingMutationVariables>;
export const GetAllBooksDocument = gql`
    query getAllBooks {
  getAllBooks {
    id
    title
    author
    genre
    publication_year
    language
    image
  }
}
    `;

/**
 * __useGetAllBooksQuery__
 *
 * To run a query within a React component, call `useGetAllBooksQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllBooksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllBooksQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllBooksQuery(baseOptions?: Apollo.QueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
      }
export function useGetAllBooksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllBooksQuery, GetAllBooksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllBooksQuery, GetAllBooksQueryVariables>(GetAllBooksDocument, options);
        }
export type GetAllBooksQueryHookResult = ReturnType<typeof useGetAllBooksQuery>;
export type GetAllBooksLazyQueryHookResult = ReturnType<typeof useGetAllBooksLazyQuery>;
export type GetAllBooksQueryResult = Apollo.QueryResult<GetAllBooksQuery, GetAllBooksQueryVariables>;
export const BorrowingsDocument = gql`
    query borrowings {
  borrowings {
    date_borrowed
    date_returned
    user {
      user_id
      fname
      lname
      username
      email
    }
    book {
      id
      title
      author
    }
  }
}
    `;

/**
 * __useBorrowingsQuery__
 *
 * To run a query within a React component, call `useBorrowingsQuery` and pass it any options that fit your needs.
 * When your component renders, `useBorrowingsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBorrowingsQuery({
 *   variables: {
 *   },
 * });
 */
export function useBorrowingsQuery(baseOptions?: Apollo.QueryHookOptions<BorrowingsQuery, BorrowingsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BorrowingsQuery, BorrowingsQueryVariables>(BorrowingsDocument, options);
      }
export function useBorrowingsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BorrowingsQuery, BorrowingsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BorrowingsQuery, BorrowingsQueryVariables>(BorrowingsDocument, options);
        }
export type BorrowingsQueryHookResult = ReturnType<typeof useBorrowingsQuery>;
export type BorrowingsLazyQueryHookResult = ReturnType<typeof useBorrowingsLazyQuery>;
export type BorrowingsQueryResult = Apollo.QueryResult<BorrowingsQuery, BorrowingsQueryVariables>;
export const GetAllUsersDocument = gql`
    query getAllUsers {
  getAllUsers {
    user_id
    fname
    lname
    email
    password
    gender
    age
    branch_id
    phone_number
  }
}
    `;

/**
 * __useGetAllUsersQuery__
 *
 * To run a query within a React component, call `useGetAllUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllUsersQuery(baseOptions?: Apollo.QueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
      }
export function useGetAllUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllUsersQuery, GetAllUsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllUsersQuery, GetAllUsersQueryVariables>(GetAllUsersDocument, options);
        }
export type GetAllUsersQueryHookResult = ReturnType<typeof useGetAllUsersQuery>;
export type GetAllUsersLazyQueryHookResult = ReturnType<typeof useGetAllUsersLazyQuery>;
export type GetAllUsersQueryResult = Apollo.QueryResult<GetAllUsersQuery, GetAllUsersQueryVariables>;
export const GetBookByIdDocument = gql`
    query getBookById($id: Float!) {
  getBookById(id: $id) {
    id
    title
    author
    genre
    publication_year
    language
    image
  }
}
    `;

/**
 * __useGetBookByIdQuery__
 *
 * To run a query within a React component, call `useGetBookByIdQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBookByIdQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBookByIdQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetBookByIdQuery(baseOptions: Apollo.QueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
      }
export function useGetBookByIdLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetBookByIdQuery, GetBookByIdQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetBookByIdQuery, GetBookByIdQueryVariables>(GetBookByIdDocument, options);
        }
export type GetBookByIdQueryHookResult = ReturnType<typeof useGetBookByIdQuery>;
export type GetBookByIdLazyQueryHookResult = ReturnType<typeof useGetBookByIdLazyQuery>;
export type GetBookByIdQueryResult = Apollo.QueryResult<GetBookByIdQuery, GetBookByIdQueryVariables>;
export const GetUserDocument = gql`
    query getUser($user_id: Float!) {
  getUser(user_id: $user_id) {
    fname
    lname
    age
    gender
    username
    password
    email
    phone_number
    Role
    branch_id
  }
}
    `;

/**
 * __useGetUserQuery__
 *
 * To run a query within a React component, call `useGetUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetUserQuery({
 *   variables: {
 *      user_id: // value for 'user_id'
 *   },
 * });
 */
export function useGetUserQuery(baseOptions: Apollo.QueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
      }
export function useGetUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetUserQuery, GetUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetUserQuery, GetUserQueryVariables>(GetUserDocument, options);
        }
export type GetUserQueryHookResult = ReturnType<typeof useGetUserQuery>;
export type GetUserLazyQueryHookResult = ReturnType<typeof useGetUserLazyQuery>;
export type GetUserQueryResult = Apollo.QueryResult<GetUserQuery, GetUserQueryVariables>;
export const LoginDocument = gql`
    mutation Login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    user_id
    fname
    lname
    email
    Role
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const DeleteBookDocument = gql`
    mutation deleteBook($id: Float!) {
  deleteBook(id: $id)
}
    `;
export type DeleteBookMutationFn = Apollo.MutationFunction<DeleteBookMutation, DeleteBookMutationVariables>;

/**
 * __useDeleteBookMutation__
 *
 * To run a mutation, you first call `useDeleteBookMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookMutation, { data, loading, error }] = useDeleteBookMutation({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useDeleteBookMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookMutation, DeleteBookMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookMutation, DeleteBookMutationVariables>(DeleteBookDocument, options);
      }
export type DeleteBookMutationHookResult = ReturnType<typeof useDeleteBookMutation>;
export type DeleteBookMutationResult = Apollo.MutationResult<DeleteBookMutation>;
export type DeleteBookMutationOptions = Apollo.BaseMutationOptions<DeleteBookMutation, DeleteBookMutationVariables>;