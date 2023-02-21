import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import register from "./register";

export default function Login() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isValid },
  } = useForm();
  const onSubmit = (data) => {
    if (isValid) {
      console.log(data);
    }
  };

 
  return (
    <>
      <div className="bg-blue-gray-100 m-20 text-center p-3 w-[280px]">
        <h1>Inicia sesión</h1>
        <form 
        onSubmit={handleSubmit(onSubmit)}
        className="text-left w-[80%] m-auto">
          <label className="block pt-4">
            <span className="block text-sm font-medium text-slate-700 after:content-['*'] after:ml-0.5 after:text-red-500">
              Email
            </span>
            <input
             {...register('username', { required: true })}
              type="email"
              name= "email"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500 peer ...
    "/>
    <p className="mt-2 invisible peer-invalid:visible text-pink-600 text-sm">
    Please provide a valid email address.
  </p>
          
          </label>
          <label className="block pt-4">
            <span className="block text-sm font-medium text-slate-700">
              Password
            </span>
            <input
             {...register('password', { required: true })}
              type="text"
              className="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
      focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500
    "
            />
          </label>
        </form>
        <Button type="submit" className="mt-2">Iniciar sesión</Button>
        <p className="pt-2">
          <b>¿No tienes un usuario?</b>
        </p>
        <Button variant="text" onClick={() => router.push("/register")}>
          Da click aquí
        </Button>
      </div>
    </>
  );
}
