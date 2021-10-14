import { TrashIcon } from '@heroicons/react/outline';
import { useFormikContext } from 'formik';
import { useState } from 'react';

function UploadItem({ name, onRemove }) {
  return (
    <div className="text-sm border py-1 px-3 h-11 flex justify-between items-center rounded">
      <div className="flex-1">
        {name}
      </div>
      <div>
        <button onClick={() => onRemove()} type="button" className="hover:text-red-500">
          <TrashIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function Upload({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [preview, setPreview] = useState();

  const handleChange = (e) => {
    const { files } = e.target;
    if (files) {
      setPreview(files[0]);
      setFieldValue(props.name, files[0]);
    }
    e.target.value = '';
  };

  const handleRemove = () => {
    setPreview(null);
  };

  return (
    <div className="w-full my-3">
      <div className="font-bold text-sm mb-2">
        {props.title}
      </div>
      <label htmlFor={props.name} className="cursor-pointer hover:bg-gray-300 border border-dashed border-gray-600 w-full block h-11 rounded">
        <span className="inline-flex h-full w-full justify-start items-center px-3 text-sm text-gray-600">
          Pilih file
          {' '}
          {
            props.accept && (
              `(${props.accept})`
            )
          }
        </span>
        <input
          {...props}
          id={props.name}
          type="file"
          className="hidden"
          onChange={handleChange}
        />
      </label>
      <div className="w-full space-y-1 py-2">
        {
          preview && (
            <UploadItem name={preview.name} onRemove={() => handleRemove()} />
          )
        }
      </div>
    </div>
  );
}
