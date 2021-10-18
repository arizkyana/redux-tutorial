import { useFormikContext } from 'formik';

export default function Input({ ...props }) {
  const {
    handleChange,
    handleBlur,
    values,
    errors,
  } = useFormikContext();
  return (
    <div className="w-full text-sm">
      <div className="font-bold">
        {props.title}
      </div>
      <label className="block border-b w-full" htmlFor={props.name}>
        <input
          {...props}
          className="w-full outline-none pt-3 pb-1"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values && values[props.name]}
        />
      </label>
      <div className="h-4 w-full text-xs">
        {
          errors && errors[props.name] && (
            <span className="text-red-500">test</span>
          )
        }
      </div>
    </div>
  );
}
