'use client';

import { useFormStatus } from 'react-dom';
import { ComponentProps } from 'react';

type FormSubmitButtonProps = {
  children: React.ReactNode;
  className: string;
} & ComponentProps<'button'>;

const FormSubmitButton = ({
  children,
  className,
  ...props
}: FormSubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      {...props}
      type='submit'
      className={` btn btn-success text-white ${className}`}
      disabled={pending}
    >
      {pending && <span className=' loading loading-spinner'> </span>}
      {children}
    </button>
  );
};

export default FormSubmitButton;
