import clsx from 'clsx';
import React, { useState } from 'react';

// const isValid = (email: string): boolean =>
//   /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);

export default function InterestForm() {
  const [values, setValues] = useState({ email: '' });

  const setEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues((values) => ({ ...values, email: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    const formEle = document.querySelector('form') || undefined;
    const formData = new FormData(formEle);

    e.preventDefault();
    fetch(
      'https://script.google.com/macros/s/AKfycby2A3IjHntlDCFifDKoVJPutNEeeNfkg0nUb5ohu6P391e_Dze4DemdVUXWn_HuH68P/exec',
      {
        mode: 'no-cors',
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'text/plain;charset=utf-8',
        },
      }
    )
      .then(() => console.log('SUCCESSFULLY SUBMITTED'))
      .catch((error) => {
        console.log(error);
      });
    setValues({ email: '' });
    // isValid(values.email) ? setValues({ email: '' }) : console.log('Invalid');
    // if (isValid(values.email)) {
    //   console.log(formData);
    //   // console.log(formData.get('Email'));
    // } else console.log('invalid');
  };

  return (
    <div className='my-auto flex h-40 w-full flex-col'>
      <div className='mx-auto w-1/2 min-w-[300px] space-y-4 py-5'>
        <h2 className='text-center text-lg font-semibold text-rose '>
          Sign up for our Mailing List
        </h2>
        <form
          className='flex justify-between bg-jet p-2 py-2'
          onSubmit={(e) => handleSubmit(e)}
          id='formId'
          method='POST'
          // Need more configuration with Google Sheet API to streamline the email to the spreadsheet
          action='https://script.google.com/macros/s/AKfycby2A3IjHntlDCFifDKoVJPutNEeeNfkg0nUb5ohu6P391e_Dze4DemdVUXWn_HuH68P/exec'
        >
          <div className='relative grow'>
            <input
              type='email'
              value={values.email}
              onChange={setEmail}
              name='Email'
              className='peer w-full grow rounded-sm px-2.5 pb-2.5 pt-5 text-sm focus:outline-none focus:ring-0'
              placeholder=' '
              id='floating_filled'
            ></input>
            <label
              htmlFor='floating_filled'
              className={clsx(
                'absolute start-2.5 top-4 origin-[0] text-sm duration-300 peer-focus:-translate-y-4 peer-focus:scale-75',
                {
                  '-translate-y-4 scale-75': values.email,
                }
              )}
            >
              Email address
            </label>
          </div>

          <button
            type='submit'
            className='ml-2 rounded-sm bg-rose px-4 py-2 font-bold text-black hover:bg-platinum'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
