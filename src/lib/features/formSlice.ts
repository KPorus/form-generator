import { FormField, FormState } from "@/types/form";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState: FormState = { fields: [] };

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    addField: (state, action: PayloadAction<FormField>) => {
      state.fields.push(action.payload);
    },
    deleteField: (state, action) => {
      state.fields = state.fields.filter(
        (field) => field.id !== action.payload
      );
    },
    updateField: (
      state,
      action: PayloadAction<{ id: string; newData: Partial<FormField> }>
    ) => {
      const field = state.fields.find((f) => f.id === action.payload.id);
      if (field) Object.assign(field, action.payload.newData);
    },
    clearForm: (state) => {
      state.fields = [];
    },
  },
});

export const { addField, updateField, deleteField, clearForm } =
  formSlice.actions;
export default formSlice.reducer;
