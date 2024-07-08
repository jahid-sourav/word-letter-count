import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

function Count() {
  const [text, setText] = useState("");

  const handleTextChange = (event) => {
    setText(event.target.value);
  };

  const wordCount = text.trim() ? text.trim().split(/\s+/).length : 0;
  const letterCount = text.replace(/\s+/g, "").length;

  return (
    <main className="py-10">
      <div className="template-container">
        <h2 className="text-center text-3xl font-bold mb-5">
          {wordCount} <strong>Words</strong>, {letterCount}{" "}
          <strong>Letters</strong>
        </h2>
        <div className="w-full md:w-full lg:w-2/3 mx-auto">
          <Textarea
            className="text-lg"
            placeholder="Write Here..."
            value={text}
            onChange={handleTextChange}
          />
        </div>
      </div>
    </main>
  );
}

export default Count;
