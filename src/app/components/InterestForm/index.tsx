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
    <div className='absolute inset-x-0 bottom-10 mx-auto h-32 max-w-md bg-platinum'>
      <div className='mx-auto max-w-[300px] py-5'>
        <h2 className='pb-2 text-center'> Sign up for our Mailing List</h2>
        <form
          className='flex justify-around bg-onyx py-2'
          onSubmit={(e) => handleSubmit(e)}
          id='formId'
          method='POST'
          // Need more configuration with Google Sheet API to streamline the email to the spreadsheet
          action='https://script.google.com/macros/s/AKfycby2A3IjHntlDCFifDKoVJPutNEeeNfkg0nUb5ohu6P391e_Dze4DemdVUXWn_HuH68P/exec'
        >
          <input
            type='email'
            placeholder='Enter your email'
            value={values.email}
            onChange={setEmail}
            name='Email'
            className='text-sm'
          ></input>
          <button
            type='submit'
            className='rounded-sm bg-rose px-4 py-2 font-bold text-black hover:bg-platinum'
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
