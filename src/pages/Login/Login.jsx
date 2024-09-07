import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <main className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-200 text-black">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Log In</div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="w-full transform border-gray-400 border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-5">
            <input
              type="email"
              placeholder="Email"
              {...register("email")}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>

          <div className="w-full transform border-gray-400 border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500 mb-5">
            <input
              type="password"
              placeholder="Password"
              {...register("password")}
              className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"
            />
          </div>
          <div className="flex items-center justify-center">
          <button className="transform rounded-md  bg-indigo-600 py-2 font-bold duration-300  text-white hover:bg-indigo-400 p-4 w-full btn">
            LOG IN
          </button>
          </div>
        </form>
        <div className="flex justify-between">
          <Link className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-900">
            FORGOT PASSWORD?
          </Link>

          <p className="text-center text-lg">
            No account?
            <Link
              to="/register"
              className="font-medium text-indigo-500 underline-offset-4 hover:underline"
            >
              Create One
            </Link>
          </p>
        </div>
        <div className="btn-wrapper text-center flex justify-between">
          <button
            className="text-black bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-2 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 btn w-1/2"
            type="button"
          >
            <img
              alt="..."
              className="w-5 mr-1 "
              src="https://demos.creative-tim.com/notus-js/assets/img/github.svg"
            />
            Github{" "}
          </button>
          <button
            className="text-black bg-white active:bg-blueGray-50 text-blueGray-700  px-4 py-2 rounded outline-none focus:outline-none mr-1 mb-1 uppercase shadow hover:shadow-md inline-flex items-center font-bold text-xs ease-linear transition-all duration-150 btn w-1/2 "
            type="button"
          >
            <img
              alt="..."
              className="w-5 mr-1"
              src="https://demos.creative-tim.com/notus-js/assets/img/google.svg"
            />
            Google
          </button>
        </div>
      </section>
    </main>
  );
};

export default Login;
