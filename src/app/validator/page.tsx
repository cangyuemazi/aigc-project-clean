import type { Metadata } from "next";
import { JsonValidator } from "@/src/components/JsonValidator";

export const metadata: Metadata = {
  title: "数据校验",
  description: "校验 categories.json 与 tools.json 的格式与关联关系。"
};

export default function ValidatorPage() {
  return (
    <div className="mx-auto w-full max-w-[980px] p-4 md:p-6">
      <JsonValidator />
    </div>
  );
}
