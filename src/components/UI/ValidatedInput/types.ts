import { InputProps } from "../Input/types";

type Pattern = {
  email: RegExp;
  phone: RegExp;
  id: RegExp;
  default: RegExp;
  none: RegExp;
};

export const patterns: Pattern = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  phone: /^[\d-]+$/,
  id: /^\d+$/,
  default: /.+/,
  none: /^.*/,
};

export interface ValidatedInputProps extends InputProps {
  pattern: keyof Pattern;
}
