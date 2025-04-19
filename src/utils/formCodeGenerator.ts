import { RootState } from "@/lib/store";

export const generateReactCode = (fields: RootState["form"]["fields"]) => {
  return `
export default function GeneratedForm() {
  return (
    <form>
${fields
  .map((field) => {
    if (field.type === "select") {
      return `      <select name="${field.name}">
${field.options
  ?.map((opt) => `        <option value="${opt}">${opt}</option>`)
  .join("\n")}
      </select>`;
    }
    return `      <input 
        type="${field.type}"
        name="${field.name}"
        placeholder="${field.placeholder || ""}"
        ${field.required ? "required" : ""}
        ${field.defaultValue ? `defaultValue="${field.defaultValue}"` : ""}
      />`;
  })
  .join("\n")}
    </form>
  );
}
`;
};
