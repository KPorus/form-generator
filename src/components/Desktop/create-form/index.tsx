"use client";
import { useDispatch, useSelector } from "react-redux";
import { nanoid } from "@reduxjs/toolkit";
import { RootState } from "@/lib/store";
import { addField } from "@/lib/features/formSlice";
import { generateReactCode } from "@/utils/formCodeGenerator";
import FieldEditor from "./form-editor";
import CodeBlockWithCopy from "./copycode";
import { Flex } from "@chakra-ui/react";
import IconsInput from "@/icons/input";
import IconSelect from "@/icons/select";
import { Tooltip } from "@/components/ui/tooltip";

export default function CreateForm() {
  const dispatch = useDispatch();
  const fields = useSelector((state: RootState) => state.form.fields);
  const generatedCode = generateReactCode(fields);
  return (
    <Flex className="p-6 relative" gap={"20"} alignContent={"center"}>
      <div className="w-full">
        <h2 className="text-2xl font-semibold mb-4">Create Your Form</h2>
        <div className="flex space-x-2 mb-4">
          <Tooltip
            content="Add Input"
            showArrow={true}
            openDelay={1}
            closeDelay={1}
          >
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
              <IconsInput />
            </button>
          </Tooltip>
          <Tooltip
            content="Add Select"
            showArrow={true}
            openDelay={1}
            closeDelay={1}
          >
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
              {/* Add Select */}
              <IconSelect />
            </button>
          </Tooltip>
        </div>

        {fields.map((field) => (
          <FieldEditor key={field.id} field={field} />
        ))}
      </div>

      <div className="sticky w-full">
        <h2 className="text-2xl font-semibold mb-4">Your Generated Code:</h2>
        <pre className="bg-gray-800 text-green-400 p-4 rounded whitespace-pre-wrap">
          <CodeBlockWithCopy code={generatedCode} />
        </pre>
      </div>
    </Flex>
  );
}
