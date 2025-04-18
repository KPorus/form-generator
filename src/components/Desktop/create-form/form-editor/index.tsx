import { useDispatch } from "react-redux";
import { updateField, deleteField } from "@/lib/features/formSlice";
import { FormField } from "@/types/form";
import styles from "./formEditor.module.scss";
import { Box } from "@chakra-ui/react";

export default function FieldEditor({ field }: { field: FormField }) {
  const dispatch = useDispatch();

  return (
    <Box
      boxShadow="lg"
      className={`p-3 border mb-4 rounded bg-white ${styles.fieldEditor}`}
    >
      <div className="flex justify-between items-center mb-2">
        <label className="font-bold">
          Edit {field.type !== "select" ? "Input" : "Select"}
        </label>
        <button
          onClick={() => dispatch(deleteField(field.id))}
          className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>

      <label className="block">Name:</label>
      <input
        value={field.name}
        onChange={(e) =>
          dispatch(
            updateField({ id: field.id, newData: { name: e.target.value } })
          )
        }
        className="border p-1 w-full mb-2"
        placeholder="Field Name"
      />

      <label className="block">Type:</label>
      {field.type === "select" ? (
        <p className="italic mb-2">Type: select (fixed)</p>
      ) : (
        <select
          value={field.type}
          onChange={(e) =>
            dispatch(
              updateField({ id: field.id, newData: { type: e.target.value } })
            )
          }
          className="border p-1 w-full mb-2 bg-white"
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
          <option value="email">Email</option>
          <option value="password">Password</option>
          <option value="date">Date</option>
        </select>
      )}

      {field.type !== "select" && (
        <>
          <label className="block">Required:</label>
          <input
            type="checkbox"
            checked={field.required || false}
            onChange={(e) =>
              dispatch(
                updateField({
                  id: field.id,
                  newData: { required: e.target.checked },
                })
              )
            }
            className="mb-2"
          />

          <label className="block">Default Value:</label>
          <input
            value={field.defaultValue || ""}
            onChange={(e) =>
              dispatch(
                updateField({
                  id: field.id,
                  newData: { defaultValue: e.target.value },
                })
              )
            }
            className="border p-1 w-full mb-2"
            placeholder="Default Value"
          />
        </>
      )}

      {["text", "number", "email", "password", "date"].includes(field.type) ? (
        <>
          <label className="block">Placeholder:</label>
          <input
            value={field.placeholder}
            onChange={(e) =>
              dispatch(
                updateField({
                  id: field.id,
                  newData: { placeholder: e.target.value },
                })
              )
            }
            className="border p-1 w-full"
            placeholder="Placeholder"
          />
        </>
      ) : (
        <>
          <label className="block">Options:</label>
          {field.options?.map((opt: string, i: number) => (
            <input
              key={i}
              value={opt}
              onChange={(e) => {
                const newOptions = [...field.options!];
                newOptions[i] = e.target.value;
                dispatch(
                  updateField({
                    id: field.id,
                    newData: { options: newOptions },
                  })
                );
              }}
              className="border p-1 w-full mb-1"
            />
          ))}
          <button
            onClick={() =>
              dispatch(
                updateField({
                  id: field.id,
                  newData: {
                    options: [
                      ...(field.options || []),
                      // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
                      `Option ${field.options?.length! + 1}`,
                    ],
                  },
                })
              )
            }
            className="bg-blue-500 text-white px-2 py-1 mt-1 rounded"
          >
            Add Option
          </button>
        </>
      )}
    </Box>
  );
}
