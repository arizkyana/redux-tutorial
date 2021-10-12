import Head from 'next/head';
import TodoContainer from '@/containers/todo';

export default function TodoPage() {
  return (
    <>
      <Head>
        <title>Belajar Redux - Todo App</title>
      </Head>
      <TodoContainer />
    </>
  );
}
