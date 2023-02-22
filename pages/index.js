import { Button } from "@material-tailwind/react";
import axios from "axios";
import { useRouter } from "next/router";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@material-tailwind/react";
import { ErrorMessage } from "@hookform/error-message";

export default function Login() {
  const router = useRouter();

  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const login = (data)=>{
    return axios.post("https://tusitioweb.dev/awards/wp-json/jwt-auth/v1/token", data)
  }
  const onSubmit = (data) => {
    login(data)
    .then((res)=>{
      localStorage.setItem("token", res.data.token)
      router.push("/home")
    })
    .catch((error)=>console.log(error))
    

    
  };

  return (
    <>
      <div className="bg-blue-gray-100 m-20 text-center p-3 w-[280px]">
        <h1>Inicia sesión</h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="text-left w-[80%] m-auto"
        >
          <div>
            <Controller
              name="username"
              control={control}
              rules={{
                required: "This is required.",
                pattern: {
                  value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                  message: "Ingresa un email valido",
                },
              }}
              render={({ field }) => (
                <Input type="text" label="Username" color="blue" {...field} />
              )}
            />
            <ErrorMessage name="username" errors={errors} />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "This is required."
              }}
              render={({ field }) => (
                <Input
                  type="password"
                  label="Password"
                  color="blue"
                  {...field}
                />
              )}
            />
            <ErrorMessage name="password" errors={errors} />
          </div>

          <Button disabled={!isValid} type="submit" className="mt-2">
            Iniciar sesión
          </Button>
        </form>
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
