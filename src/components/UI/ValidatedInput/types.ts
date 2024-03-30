import { InputProps } from "../Input/types";

type Pattern = {
  email: RegExp;
  phone: RegExp;
  default: RegExp;
  none: RegExp;
};

export const patterns: Pattern = {
  email: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/,
  phone: /^(?:(?:\d{1,2}-)?\(?\d{3}\)?[-. ]?)?\d{3}[-. ]?\d{4}(?:\s*(?:x|ext)\s*\d+)?$/,
  default: /.+/,
  none: /^.*/,
};

export interface ValidatedInputProps extends InputProps {
  pattern: keyof Pattern;
}
