import Head from 'next/head';
import ConfirmationContainer from '@/containers/confirmation'; // -> folder gateway dengan index.jsx

export default function ConfirmationPage() {
  return (
    <>
      <Head>
        <title>Belajar Redux - Payment Confirmation</title>
      </Head>
      <ConfirmationContainer />
    </>
  );
}
