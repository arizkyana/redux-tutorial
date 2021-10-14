/* eslint-disable indent */
import { useState } from 'react';
import { RadioGroup } from '@headlessui/react';
import { useFormikContext } from 'formik';
import { CheckIcon } from '@heroicons/react/outline';

const banks = [
  {
    name: 'Bank Mandiri',
    accountNo: '7123456',
    accountName: 'AN. Yayasan Peduli Bangsa',
  },
  {
    name: 'Bank BNI',
    accountNo: '02891234123',
    accountName: 'AN. Yayasan Peduli Bangsa',
  },
  {
    name: 'Bank BCA',
    accountNo: '515099933',
    accountName: 'AN. Yayasan Peduli Bangsa',
  },
];

export default function RadioGroupComponent({ ...props }) {
  const { setFieldValue } = useFormikContext();
  const [selected, setSelected] = useState(banks[0]);

  const handleSelected = (val) => {
    setFieldValue(props.name, val);
    setSelected(val);
  };

  return (
    <div className="w-full">
      <div className="text-sm mb-2 font-bold">
        {props.title}
      </div>
      <div className="w-full ">
        <RadioGroup value={selected} onChange={handleSelected}>
          <RadioGroup.Label className="sr-only">Server size</RadioGroup.Label>
          <div className="space-y-2">
            {banks.map((plan) => (
              <RadioGroup.Option
                key={plan.name}
                value={plan}
                className={({ active, checked }) => `${active
                  ? 'ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60'
                  : ''
                  }
                  ${checked ? 'bg-sky-900 bg-opacity-75 text-blue-500' : 'bg-white'
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`}
              >
                {({ active, checked }) => (
                  <>
                    <div className="flex items-center justify-between w-full">
                      <div className="flex items-center">
                        <div className="text-sm">
                          <RadioGroup.Label
                            as="p"
                            className={`font-medium  ${checked ? 'text-blue-500' : 'text-gray-900'
                              }`}
                          >
                            {plan.name}
                            {' '}
                            {active}
                          </RadioGroup.Label>
                          <RadioGroup.Description
                            as="span"
                            className={`inline ${checked ? 'text-sky-100' : 'text-gray-500'
                              }`}
                          >
                            <span>
                              {plan.accountNo}
                            </span>
                            {' '}
                            <span aria-hidden="true">&middot;</span>
                            {' '}
                            <span>{plan.accountName}</span>
                          </RadioGroup.Description>
                        </div>
                      </div>
                      {checked && (
                        <div className="flex-shrink-0 text-blue-600">
                          <CheckIcon className="w-6 h-6" />
                        </div>
                      )}
                    </div>
                  </>
                )}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>
      </div>
    </div>
  );
}
