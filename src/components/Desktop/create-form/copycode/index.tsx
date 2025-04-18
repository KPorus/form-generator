import { useState } from "react";

export default function CodeBlockWithCopy({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <div className="relative bg-gray-800 text-white p-4 rounded shadow">
      <pre className="overflow-auto text-sm">
        <code>{code}</code>
      </pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 hover:bg-blue-600 text-white text-xs px-2 py-1 rounded"
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}
