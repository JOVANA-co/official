import styled from "styled-components";

import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const InputWrapper = styled.input`
  width: 100%;
  max-width: 400px;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 12px;
  background: ${({ theme }) => theme.white};
  color: ${({ theme }) => theme.gray[900]};
  font-size: 1rem;
  font-family: var(--exo-2);
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  outline: none;

  &::placeholder {
    color: ${({ theme }) => theme.gray[500]};
    font-weight: 400;
  }

  &:focus {
    box-shadow: 0 6px 25px rgba(0, 0, 0, 0.15);
  }

  &:hover {
    box-shadow: 0 5px 22px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 0.875rem 1.25rem;
    font-size: 0.9rem;
  }
`;

export default function Input(props: InputProps) {
  return (
    <InputWrapper
      data-component="Input"
      placeholder="Enter your email"
      {...props}
    />
  );
}
