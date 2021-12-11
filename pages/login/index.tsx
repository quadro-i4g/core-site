import { NextPage } from 'next';
import { useState } from 'react';

interface SubmitValues {
  email: string;
  pass: string;
}

const submit = (values: SubmitValues) => {
  console.log('Submitted', values);
};
const Login: NextPage = () => {
  const [formData, setFormData] = useState({
    email: '',
    pass: '',
  });

  return (
    <div className="flex h-screen items-center justify-center">
      <div className="flex flex-col items-center w-full px-5 max-w-sm">
        <h1 className="font-bold text-4xl mb-9">Sign in!</h1>

        <form
          onSubmit={e => {
            e.preventDefault();
            submit(formData);
          }}
          className="flex flex-col w-full h-full space-y-2"
        >
          <label className="font-bold text-lg w-full">
            Email
            <input
              required
              type="email"
              value={formData.email}
              onChange={e =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>
          <label className="font-bold text-lg w-full">
            Password
            <input
              required
              type="password"
              value={formData.pass}
              onChange={e => setFormData({ ...formData, pass: e.target.value })}
              className="mt-1 px-2 block bg-primary-gray w-full h-12 rounded-lg"
            />
          </label>
          <div className="w-full flex justify-center pt-12">
            <button
              type="submit"
              className="bg-primary-gray text-2xl font-bold w-3/4 self-center py-2 rounded-lg"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
