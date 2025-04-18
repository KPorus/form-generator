export interface FormField {
  id: string;
  type: string;
  name: string;
  placeholder?: string;
  required?: boolean;
  defaultValue?: string;
  options?: string[];
}

export interface FormState {
  fields: FormField[];
}
