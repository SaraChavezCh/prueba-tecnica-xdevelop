const { ErrorMessage } = require("@hookform/error-message");
const { Controller } = require("react-hook-form");

import React from 'react'

const Input = (name, label, type) => {
  return (
    <div>
      <Controller
            name={name}
            control={control}
            rules={{
              required: "This is required."
            }}
            render={({ field }) => (
              <Input
                type={type}
                label={label}
                color="blue"
                {...field}
              />
            )}
          />
          <ErrorMessage name={name} errors={errors} />
    </div>
  )
}

export default Input

