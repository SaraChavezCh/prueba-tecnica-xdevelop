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
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    mode: "onChange",
  });

  const login = (data) => {
    return axios.post(
      "https://tusitioweb.dev/awards/wp-json/jwt-auth/v1/token",
      data
    );
  };
  const onSubmit = (data) => {
    login(data)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        router.push("/home");
      })
      .catch((error) => alert("Error de credenciales"));
  };

  return (
    <div className=" w-full h-full">
      <div
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(46,69,122,0.4) 0%, rgba(0,0,0,0.3)100%), url(/corn.jpg)",
        }}
        className="bg-no-repeat bg-cover bg-gradient-to-br text-center p-6 m-auto rounded-2xl w-[800px]"
      >
        <h1 className=" text-center font-extrabold text-2xl text-white m-4">
          Inicia sesión
        </h1>
        <form
          onSubmit={handleSubmit(onSubmit)}
          style={{background:"rgba(255,255,255,.728)"}}
          className="text-center w-[50%] m-auto flex flex-col gap-3 p-4 rounded-2xl"
        >
          <div className="text-black">
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
                <Input
                  className="text-black"
                  type="text"
                  label="Username"
                  color="orange"
                  {...field}
                />
              )}
            />
            <ErrorMessage name="username" errors={errors} />
          </div>
          <div>
            <Controller
              name="password"
              control={control}
              rules={{
                required: "This is required.",
              }}
              render={({ field }) => (
                <Input
                  className="text-black"
                  type="password"
                  label="Password"
                  color="orange"
                  text="black"
                  {...field}
                />
              )}
            />
            <ErrorMessage name="password" errors={errors} />
          </div>

          <Button
            disabled={!isValid}
            type="submit"
            className="mt-2 bg-[#FA6162] text-white"
          >
            Iniciar sesión
          </Button>
        </form>
        <p className="pt-2 text-white">
          <b>¿No tienes un usuario?</b>
        </p>
        <Button
          className="bg-[#FA6162] text-white"
          variant="text"
          onClick={() => router.push("/register")}
        >
          Da click aquí
        </Button>
      </div>
    </div>
  );
}
