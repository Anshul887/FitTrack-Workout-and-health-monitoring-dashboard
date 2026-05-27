const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='bg-white p-8 rounded-xl shadow w-full max-w-md'>
        <h1 className='text-2xl font-bold mb-6'>Login</h1>

        <form className='space-y-4'>
          <input
            type='email'
            placeholder='Email'
            className='w-full border p-3 rounded'
          />

          <input
            type='password'
            placeholder='Password'
            className='w-full border p-3 rounded'
          />

          <button className='bg-blue-600 text-white w-full py-3 rounded'>
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
