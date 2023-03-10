import React from "react";
import { Button, Input, Option, Select } from "@material-tailwind/react";
import { useForm, Controller } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import { useRouter } from "next/router";
import axios from "axios";
import { formValues } from "@/helpers/formValues";


const register = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: formValues,
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
        alert("Se ha creado el registro correctamente")
        router.push("/")
      })
      .catch((error) => alert("Ocurrio un error, no se pudo generar el registro"));
  };

  return (
    <>
      <h1 className=" text-center font-extrabold text-2xl text-black">
        Registro de usuario
      </h1>
      <p className="text-center">
        Ingresa tus datos personales y empresariales
      </p>
      <div className="text-center mb-5">
        <p className="inline">¿Ya tienes cuenta?,</p>
        <Button
          className="text-[#FA6162] p-2"
          variant="text"
          onClick={() => router.push("/")}
        >
          Inicia sesion aquí
        </Button>
      </div>

      <div className="bg-white text-center p-6 m-auto rounded-2xl w-[800px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* first section "datos personales"*/}
          <h2 className=" text-[#FA6162] text-lg font-semibold m-2">Información personal</h2>
          <section className="flex flex-row gap-2 w-[100%] mb-4">
            <div className=" flex flex-col gap-2 w-1/2">
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
                  <Input
                    type="text"
                    label="apellidos"
                    color="blue"
                    {...field}
                  />
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
            {/* first section "telefonos y formas" */}
            <div className="flex flex-col gap-2 w-1/2">
              <Controller
                name="telefono"
                control={control}
                rules={{
                  required: "This is required.",
                  pattern:{ value: /^[0-9]{10}$/ ,
                  message:"El numero de celular debe tener  10 digitos "
                }
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
                  pattern:{ value: /^[0-9]{10}$/,
                  message:"El numero de celular debe tener  10 digitos "
                }
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
          </section>
          <h2 className=" text-[#FA6162] text-lg font-semibold m-2">Información de la Empresa</h2>
          <section className="flex flex-row gap-2 w-[100%] mb-4">
            {/* second section "datos empresa" */}
            <div className=" flex flex-col gap-2 w-1/2">
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
                    value:
                      /^(0?[1-9]|[1-2][0-9]|3[0-1])\/(0?[1-9]|1[0-2])\/\d{4}$/,
                    message: "Ingrese (dia/mes/año)",
                  },
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Fecha origen"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="fecha_origen" errors={errors} />
              {/* <Controller
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
              <ErrorMessage name="numero_de_empleados" errors={errors} /> */}
              <Controller
                name="hombres"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="number"
                    label="Hombres"
                    color="blue"
                    {...field}
                  />
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
                  <Input
                    type="number"
                    label="Mujeres"
                    color="blue"
                    {...field}
                  />
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
                  <Input
                    type="number"
                    label="No binario"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="no_binario" errors={errors} />
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
            </div>
            {/* second section "ubicación" */}
            <div className=" flex flex-col gap-2 w-1/2">
              <Controller
                name="razon_social"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Razon social"
                    color="blue"
                    {...field}
                  />
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
                  <Input
                    type="text"
                    label="URL empresa"
                    color="blue"
                    {...field}
                  />
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
                  <Input type="text" label="CP" color="blue" {...field} />
                )}
              />
              <ErrorMessage name="cp" errors={errors} />
              <Controller
                name="calle_numero"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Calle numero"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="calle_numero" errors={errors} />
              <Controller
                name="colonia"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input type="text" label="Colonia" color="blue" {...field} />
                )}
              />
              <ErrorMessage name="colonia" errors={errors} />
              <Controller
                name="delegacion_municipio"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Delegación"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="delegacion_municipio" errors={errors} />
              <Controller
                name="ciudad"
                control={control}
                rules={{
                  required: "This is required.",
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
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input type="text" label="País" color="blue" {...field} />
                )}
              />
              <ErrorMessage name="pais" errors={errors} />
            </div>
          </section>
          {/* fifth section "acerca de la empresa" */}
            <h2 className=" text-[#FA6162] text-lg font-semibold m-2">Información extra</h2>
          <section className="flex flex-row gap-2 w-[100%] mb-4">
            <div className=" flex flex-col gap-2 w-1/2">
              <Controller
                name="vision"
                control={control}
                rules={{
                  required: "This is required.",
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
                  required: "This is required.",
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
                  required: "This is required.",
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
                  required: "This is required.",
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
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input type="text" label="Aliados" color="blue" {...field} />
                )}
              />
              <ErrorMessage name="aliados" errors={errors} />
            </div>
            {/* section third "mas información" */}
            
            <div className=" flex flex-col gap-2 w-1/2">
              <Controller
                name="grupos_de_interes"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Grupos de interes"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="grupos_de_interes" errors={errors} />
              <Controller
                name="competencia"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Competencia"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="competencia" errors={errors} />
              <Controller
                name="participado_en_programas_de_aceleracion"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Participado en programas de aceleracion"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage
                name="participado_en_programas_de_aceleracion"
                errors={errors}
              />
              <Controller
                name="cual_programa"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                    type="text"
                    label="Cuál programa"
                    color="blue"
                    {...field}
                  />
                )}
              />
              <ErrorMessage name="cual_programa" errors={errors} />
              <h3>Nivel de ventas</h3>
              <Controller
                name="nivel_de_ventas.anio_1"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                  type="text"
                  label="Año 1"
                  {...field}
                  />
                  
                )}
              />
              <ErrorMessage name="nivel_de_ventas.anio_1" errors={errors} />
              <Controller
                name="nivel_de_ventas.anio_2"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                  type="text"
                  label="Año 2"
                  {...field}/>
                  
                )}
              />
              <ErrorMessage name="nivel_de_ventas.anio_2" errors={errors} />
              <Controller
                name="nivel_de_ventas.anio_3"
                control={control}
                rules={{
                  required: "This is required.",
                }}
                render={({ field }) => (
                  <Input
                  type="text"
                  label="Año 3"
                  {...field}/>
                  
                )}
              />
              <ErrorMessage name="nivel_de_ventas.anio_3" errors={errors} />
            </div>
          </section>
          <Button disabled={!isValid}  type="submit" className="mt-2 bg-[#FA6162] shadow-none hover:shadow-[#FA6162]">
            Registrarse
          </Button>
        </form>
      </div>
    </>
  );
};

export default register;
