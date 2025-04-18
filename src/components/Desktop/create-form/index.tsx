"use client";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { addField } from "@/lib/features/formSlice";
import { generateReactCode } from "@/utils/formCodeGenerator";
import FieldEditor from "./form-editor";
import CodeBlockWithCopy from "./copycode";

export default function CreateForm() {
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.form.fields);
  const generatedCode = generateReactCode(fields);
  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-4">Create Your Form</h2>

      <div className="flex space-x-2 mb-4">
        <button
          onClick={() =>
            dispatch(
              addField({
                id: nanoid(),
                type: "text",
                name: "",
                placeholder: "",
              })
            )
          }
          className="bg-green-500 text-white px-4 py-2 rounded"
        >
          Add Input
        </button>
        <button
          onClick={() =>
            dispatch(
              addField({
                id: nanoid(),
                type: "select",
                name: "",
                options: ["Option 1"],
              })
            )
          }
          className="bg-yellow-500 text-white px-4 py-2 rounded"
        >
          Add Select
        </button>
      </div>

      {/* {fields.map((field) => (
        <div key={field.id} className="p-3 border mb-4 rounded">
          <label className="block">Name:</label>
          <input
            value={field.name}
            onChange={(e) =>
              dispatch(
                updateField({
                  id: field.id,
                  newData: { name: e.target.value },
                })
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
                  updateField({
                    id: field.id,
                    newData: { type: e.target.value },
                  })
                )
              }
              className="border p-1 w-full mb-2"
            >
              <option value="text">Text</option>
              <option value="number">Number</option>
              <option value="email">Email</option>
              <option value="password">Password</option>
              <option value="date">Date</option>
            </select>
          )}

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

          {field.type === "text" ||
          field.type === "number" ||
          field.type === "email" ||
          field.type === "password" ||
          field.type === "date" ? (
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
              {field.options?.map((opt, i) => (
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
        </div>
      ))} */}

      {fields.map((field) => (
        <FieldEditor key={field.id} field={field} />
      ))}

      <div className="mt-16">
        <h2 className="text-2xl font-semibold mb-4">Your Generated Code:</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded whitespace-pre-wrap">
          <CodeBlockWithCopy code={generatedCode} />
        </pre>
      </div>
    </div>
  );
}
