import { Formik } from 'formik';
import Input from '@/components/Input';
import RadioGroup from '@/components/RadioGroup';
import Upload from '@/components/Upload';
import Alert from '@/components/Alert';
import Select from '@/components/Select';
import { useConfirmationDispatch } from '@/redux/reducers/confirmation/slices';

const initialValues = {
  namaPengirim: '',
  bankTujuan: '',
  photo: {},
};

export default function ConfirmationContainer() { // React Component
  const { confirmation, submitPayment } = useConfirmationDispatch(); // redux confirmation

  async function handleOnSubmit(payload, { resetForm }) {
    await submitPayment(payload);
    resetForm();
  }

  return (
    <>
      {
        confirmation && confirmation.message && (
          <Alert message={confirmation.message} variant={confirmation.success ? 'success' : 'error'} />
        )
      }
      <div className="lg:w-1/4 w-full min-h-screen p-3 mx-auto ">
        <div className="w-full h-full ">
          <h1 className="text-2xl font-bold mb-5">Payment Confirmation</h1>
          <div className="w-full">
            <Formik
              initialValues={initialValues}
              onSubmit={(values, { ...rest }) => handleOnSubmit(values, { ...rest })}
            >
              {({
                handleSubmit,
              }) => (
                <form className="w-full" onSubmit={handleSubmit}>
                  <Select />
                  {/* <Input
                    title="Nama Pengirim"
                    name="namaPengirim"
                    placeholder="Masukan nama pengirim"
                  />
                  <Input
                    title="Bank Pengirim"
                    name="bankPengirim"
                    placeholder="Masukan nama bank pengirim"
                  />
                  <RadioGroup title="Bank Tujuan" name="bankTujuan" />
                  <Upload
                    title="Upload Bukti"
                    name="photo"
                    accept="pdf, jpg, png"
                  />

                  <div className="flex justify-end items-center">
                    <button type="submit" className="bg-green-500 hover:bg-green-600 outline-none text-white text-sm py-3 px-6 rounded">
                      Submit
                    </button>
                  </div> */}
                </form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
}
