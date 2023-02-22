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
  const register = (data) => {
    return axios.post(
      "https://tusitioweb.dev/awards/wp-json/wp/v2/registro/participante",
      data
    );
  };
  const onSubmit = (data) => {
    register(data)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => console.log(error));
  };

  return (
    <div className="bg-blue-gray-100 m-20 text-center p-3 w-[280px]">
      <h1>Registro de usuario</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* first section "datos personales"*/}
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
        {/* second section "telefonos y formas" */}
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
            name="forma_enterado"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Forma enterado"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="forma_enterado" errors={errors} />
          <Controller
            name="otro_forma_enterado"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Otro forma enterado"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="otro_forma_enterado" errors={errors} />
        </div>
        {/* third section "datos empresa" */}
        <div>
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
                type="text"
                label="Numero de empleados"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="numero_de_empleados" errors={errors} />
          <Controller
            name="hombres"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="number" label="Hombres" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="hombres" errors={errors} />
          <Controller
            name="mujeres"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="number" label="Mujeres" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="mujeres" errors={errors} />
          <Controller
            name="no_binario"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="number" label="No binario" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="no_binario" errors={errors} />
        </div>
        {/* fourth section "ubicación" */}
        <div>
          <Controller
            name="geografia_intervencion"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input
                type="text"
                label="Geografia intervencion"
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name="geografia_intervencion" errors={errors} />
          <Controller
            name="razon_social"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="Razon social" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="razon_social" errors={errors} />
          <Controller
            name="url_empresa"
            control={control}
            rules={{
              required: "This is required.",
            }}
            render={({ field }) => (
              <Input type="text" label="url empresa" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="url_empresa" errors={errors} />
          <Controller
            name="cp"
            control={control}
            rules={{
              required: "This is required.",
              pattern: {
                value: /^\d{5}$/,
                message: "Ingrese CP correcto",
              },
            }}
            render={({ field }) => (
              <Input type="text" label="cp" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="cp" errors={errors} />
          <Controller
            name="calle_numero"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Calle numero" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="calle_numero" errors={errors} />
          <Controller
            name="colonia"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Colonia" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="colonia" errors={errors} />
          <Controller
            name="delegación"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Delegación" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="delegación" errors={errors} />
          <Controller
            name="ciudad"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Ciudad" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="ciudad" errors={errors} />
          <Controller
            name="pais"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="País" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="pais" errors={errors} />
        </div>
        {/* fifth section "acerca de la empresa" */}
        <div>
        <Controller
            name="vision"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Vision" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="vision" errors={errors} />
          <Controller
            name="mision"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Misión" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="mision" errors={errors} />
          <Controller
            name="clientes"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Clientes" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="clientes" errors={errors} />
          <Controller
            name="usuarios"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Usuarios" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="usuarios" errors={errors} />
          <Controller
            name="aliados"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Aliados" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="aliados" errors={errors} />
        </div>
        {/* section sixth "mas información" */}
        <div>
        <Controller
            name="grupos_de_interes"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Grupos de interes" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="grupos_de_interes" errors={errors} />
          <Controller
            name="competencia"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Competencia" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="competencia" errors={errors} />
          <Controller
            name="participado_en_programas_de_aceleracion"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Participado en programas de aceleracion" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="participado_en_programas_de_aceleracion" errors={errors} />
          <Controller
            name="cual_programa"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input type="text" label="Cuál programa" color="blue" {...field} />
            )}
          />
          <ErrorMessage name="cual_programa" errors={errors} />
          <Controller
            name="nivel_de_ventas"
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <>
              <label>Nivel de ventas</label>
              <select  name="nivel_de_ventas" label="Nivel de ventas" color="blue" {...field} >
                <option>100</option>
                <option>200</option>
                <option>300</option>
              </select>
              </>
            )}
          />
          <ErrorMessage name="nivel_de_ventas" errors={errors} />
          
        </div>
        <Button disabled={!isValid} type="submit" className="mt-2">
          Registrarse
        </Button>
      </form>
    </div>
  );
};

export default register;
