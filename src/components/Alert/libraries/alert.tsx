import { CheckCircleIcon } from '@heroicons/react/outline';
import classNames from 'classnames';

export default function Alert({ ...props }) {
  return (
    <div className={classNames('fixed top-0 right-0 w-full h-11 text-white z-40', {
      'bg-green-400': props.variant === 'success',
      'bg-red-400': props.variant === 'error',
    })}
    >
      <div className="w-full lg:w-1/4 mx-auto flex text-sm justify-center items-center h-full">
        <span className="inline-block mr-2">
          {props.message}
        </span>
        {' '}
        <CheckCircleIcon className="h-4 w-4" />
      </div>
    </div>
  );
}
