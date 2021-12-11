import { NextPage } from 'next';
import { useState } from 'react';

interface SubmitValues {
  name: string;
  email: string;
  pass: string;
  confirmPass: string;
}

const submit = (values: SubmitValues) => {
  console.log('Submitted', values);
};

const Signup: NextPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    pass: '',
    confirmPass: '',
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center w-full px-5 max-w-sm">
        <h1 className="font-bold text-4xl mb-9">Sign up!</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            submit(formData);
          }}
          className="flex flex-col w-full h-full space-y-2"
        >
          <label className="font-bold text-lg w-full">
            Name
            <input
              value={formData.name}
              onChange={e => setFormData({ ...formData, name: e.target.value })}
              required
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>
          <label className="font-bold text-lg w-full">
            Email
            <input
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              type="email"
              required
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>

          <label className="font-bold text-lg w-full">
            Password
            <input
              value={formData.pass}
              onChange={e => setFormData({ ...formData, pass: e.target.value })}
              type="password"
              required
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>

          <label className="font-bold text-lg w-full">
            Confirm password
            <input
              value={formData.confirmPass}
              onChange={e =>
                setFormData({ ...formData, confirmPass: e.target.value })
              }
              required
              type="password"
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>
          <div className="w-full flex justify-center pt-12">
            <button
              type="submit"
              className="bg-primary-gray text-2xl font-bold w-3/4 self-center py-2 rounded-lg"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Signup;
