import React from "react";
import { Button, Input } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import axios from "axios";

const register = () => {
  const router = useRouter();
  const {
    control,
    reset,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
      nombres: "",
      apellidos: "",
      password: "",
      telefono: "",
      cargo: "",
      nombre_empresa: "",
      fecha_origen: "",
      numero_de_empleado: "",
    },
    mode: "onChange",
  });
  const register =(data)=>{
    return axios.post("https://tusitioweb.dev/awards/wp-json/wp/v2/registro/participante", data)
  }
  const onSubmit = (data) => {
    register(data)
    .then((res)=>{
      console.log(res.data);
    })
    .catch((error)=> console.log(error))
  };

  
  return (
    <div className="bg-blue-gray-100 m-20 text-center p-3 w-[280px]">
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first section */}
        <div>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "This is required.",
              pattern: {
                value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,}$/,
                message: "Ingresa un email valido",
              },
            }}
            render={({ field }) => (
              <Input type="text" label="Email" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="email" errors={errors} />
          <Controller
            name="nombres"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="nombres" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="nombres" errors={errors} />
          <Controller
            name="apellidos"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="apellidos" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="apellidos" errors={errors} />
          <Controller
            name="password"
            control={control}
            rules={{
              required: "This is required.",
              pattern: {
                value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8}$/,
                message: "Ingresa una contraseña valida",
              },
            }}
            render={({ field }) => (
              <Input type="text" label="Password" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="password" errors={errors} />
        </div>
        {/* second section */}
        <div>
          <Controller
            name="telefono"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="Telefono" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="celular" errors={errors} />
          <Controller
            name="celular"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="Celular" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="celular" errors={errors} />

          <Controller
            name="cargo"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="Cargo" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="cargo" errors={errors} />
          <Controller
            name="nombre_empresa"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Nombre Empresa"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="nombre_empresa" errors={errors} />
        </div>
        {/* third section */}
        <div>
          <Controller
            name="fecha_origen"
            control={control}
            rules={{
              required: "This is required.",
              pattern: {
                value: /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/\d{4}$/,
                message: "Ingrese (dia/mes/año)",
              },
            }}
            render={({ field }) => (
              <Input type="text" label="Fecha origen" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="fecha_origen" errors={errors} />
          <Controller
            name="numero_de_empleados"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input
                type="number"
                label="Numero de empleados"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="numero_de_empleados" errors={errors} />
        </div>
        <Button disabled={!isValid} type="submit" className="mt-2">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default register;
