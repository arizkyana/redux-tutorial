import { TrashIcon } from '@heroicons/react/outline';
import { useFormik } from 'formik';
import classNames from 'classnames';
import * as Yup from 'yup';
import { useTodoDispatch } from '@/redux/reducers/todo/slices';

function TodoItem({ content, onRemove }) {
  return (
    <div className="my-2 text-sm border border-gray-500 py-2 rounded px-3 flex justify-start items-center">
      <div className="flex-1 break-all">
        <p>{content}</p>
      </div>
      <div className="flex flex-row justify-center items-center">
        <button type="button" onClick={() => onRemove()}>
          <TrashIcon className="h-5 w-5 hover:text-red-500" />
        </button>
      </div>
    </div>
  );
}

const initialValues = {
  todo: '',
};

const validationSchema = Yup.object({
  todo: Yup.string().required(),
});

export default function TodoContainer() {
  const { todos, doAddTodo, doRemoveTodo } = useTodoDispatch();

  const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    isValid,
    dirty,
    errors,
    touched,
  } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleOnSubmit,
  });

  function handleOnSubmit(payload, { resetForm }) {
    // console.log('payload : ', payload);
    doAddTodo(payload);
    resetForm();
  }

  return (
    <div className="lg:w-1/4 w-full min-h-screen p-3 mx-auto ">
      <div className="w-full h-full ">
        <h1 className="text-2xl font-bold mb-5">My Todo List</h1>
        <div className="w-full">
          <form className="w-full" onSubmit={handleSubmit}>
            <label htmlFor="todo" className="border-b  border-gray-500 inline-flex w-full flex-col justify-start items-stretch">
              <span className="inline-block text-base font-bold">Todo</span>
              <input
                type="text"
                placeholder="Type your task here"
                className="outline-none text-sm focus:ring-0 focus:outline-0 pt-3 pb-1"
                name="todo"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.todo}
              />
            </label>
            <div className="h-6 w-full text-xs text-red-800">
              {errors && touched && errors.todo}
            </div>
            <div className="w-full py-3 mt-2">
              <button
                disabled={!isValid || !dirty}
                type="submit"
                className={classNames('text-white w-full py-2 rounded text-sm', {
                  'bg-gray-300': !isValid || !dirty,
                  'bg-green-400 hover:bg-green-500': isValid,
                })}
              >
                Add
                {' '}
                +
              </button>
            </div>
          </form>
        </div>
        <div className="-py-2 my-3">
          {
            todos.todos
            && todos.todos.length > 0
            && todos.todos.map((todo, i) => (
              <TodoItem
                key={todo}
                content={todo}
                onRemove={() => {
                  doRemoveTodo(i);
                  // alert(`remove : ${i}`);
                }}
              />
            ))
          }

        </div>
      </div>
    </div>

  );
}
