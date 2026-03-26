"use client";

import { useMemo, useState } from "react";
import { z } from "zod";
import categoriesData from "@/src/data/categories.json";
import type { CategoryItem, SubCategoryItem, ToolItem } from "@/src/types";

type ValidatorType = "categories" | "tools";

const categoryNodeSchema: z.ZodType<{ id: string; name: string; categoryId?: string; subCategories?: unknown[] }> =
  z.lazy(() =>
    z.object({
      id: z.string().min(1),
      name: z.string().min(1),
      categoryId: z.string().optional(),
      subCategories: z.array(categoryNodeSchema).optional()
    })
  );

const categoriesSchema = z.array(
  z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    icon: z.string().optional(),
    subCategories: z.array(categoryNodeSchema).optional()
  })
);

const toolsSchema = z.array(
  z.object({
    id: z.string().min(1),
    name: z.string().min(1),
    description: z.string().min(1),
    url: z.string().url(),
    categoryId: z.string().min(1),
    subCategoryId: z.string().optional(),
    tags: z.array(z.string()),
    views: z.number(),
    logo: z.string().optional()
  })
);

interface ValidateResult {
  ok: boolean;
  passCount: number;
  errors: string[];
}

function flattenSubIds(nodes: SubCategoryItem[], result: Set<string>) {
  nodes.forEach((node) => {
    result.add(node.id);
    if (node.subCategories?.length) {
      flattenSubIds(node.subCategories, result);
    }
  });
}

export function JsonValidator() {
  const [type, setType] = useState<ValidatorType>("categories");
  const [input, setInput] = useState("");
  const [result, setResult] = useState<ValidateResult | null>(null);

  const categoryMap = useMemo(() => {
    const source = categoriesData as CategoryItem[];
    const map = new Map<string, Set<string>>();
    source.forEach((category) => {
      const subSet = new Set<string>();
      if (category.subCategories?.length) {
        flattenSubIds(category.subCategories, subSet);
      }
      map.set(category.id, subSet);
    });
    return map;
  }, []);

  const example = useMemo(() => {
    if (type === "categories") {
      return `[
  {
    "id": "writing",
    "name": "AI写作工具",
    "subCategories": [{ "id": "paper", "name": "论文写作", "categoryId": "writing" }]
  }
]`;
    }
    return `[
  {
    "id": "tool-1",
    "name": "ChatGPT",
    "description": "通用AI助手",
    "url": "https://chatgpt.com",
    "categoryId": "writing",
    "subCategoryId": "paper",
    "tags": ["热门", "免费"],
    "views": 12345,
    "logo": "/icons/chatgpt.png"
  }
]`;
  }, [type]);

  const onValidate = () => {
    const errors: string[] = [];
    try {
      const parsed = JSON.parse(input);
      if (type === "categories") {
        const result = categoriesSchema.safeParse(parsed);
        if (!result.success) {
          result.error.issues.forEach((issue) => {
            errors.push(`${issue.path.join(".") || "root"}: ${issue.message}`);
          });
        } else {
          setResult({ ok: true, passCount: result.data.length, errors: [] });
          return;
        }
      } else {
        const result = toolsSchema.safeParse(parsed);
        if (!result.success) {
          result.error.issues.forEach((issue) => {
            errors.push(`${issue.path.join(".") || "root"}: ${issue.message}`);
          });
        } else {
          const list = result.data as ToolItem[];
          list.forEach((tool, index) => {
            if (!categoryMap.has(tool.categoryId)) {
              errors.push(`第 ${index + 1} 项: categoryId "${tool.categoryId}" 不存在于分类数据`);
            }
            if (tool.subCategoryId) {
              const subSet = categoryMap.get(tool.categoryId);
              if (!subSet || !subSet.has(tool.subCategoryId)) {
                errors.push(
                  `第 ${index + 1} 项: subCategoryId "${tool.subCategoryId}" 不属于分类 "${tool.categoryId}"`
                );
              }
            }
          });
          if (errors.length === 0) {
            setResult({ ok: true, passCount: list.length, errors: [] });
            return;
          }
        }
      }
    } catch (error) {
      errors.push(`JSON 解析失败: ${(error as Error).message}`);
    }
    setResult({ ok: false, passCount: 0, errors });
  };

  const onUpload = async (file: File) => {
    const text = await file.text();
    setInput(text);
  };

  return (
    <section className="space-y-4 rounded-3xl bg-white p-6 shadow-[0_10px_25px_-5px_rgba(0,0,0,0.05)]">
      <div>
        <h1 className="text-2xl font-semibold">JSON 数据校验器</h1>
        <p className="mt-2 text-sm text-slate-600">上传或粘贴 JSON，检查格式和关联关系是否正确。</p>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <select
          value={type}
          onChange={(event) => setType(event.target.value as ValidatorType)}
          className="rounded-lg border border-slate-200 px-3 py-2 text-sm"
        >
          <option value="categories">分类数据</option>
          <option value="tools">工具数据</option>
        </select>

        <label className="cursor-pointer rounded-lg border border-slate-200 px-3 py-2 text-sm hover:bg-slate-50">
          上传 JSON 文件
          <input
            type="file"
            accept=".json,application/json"
            className="hidden"
            onChange={(event) => {
              const file = event.target.files?.[0];
              if (file) onUpload(file);
            }}
          />
        </label>
      </div>

      <textarea
        value={input}
        onChange={(event) => setInput(event.target.value)}
        placeholder="在此粘贴 JSON 内容"
        className="min-h-64 w-full rounded-xl border border-slate-200 p-3 font-mono text-xs outline-none ring-blue-200 focus:ring-2"
      />

      <div className="flex flex-wrap gap-2">
        <button onClick={onValidate} className="rounded-lg bg-blue-600 px-4 py-2 text-sm text-white">
          开始校验
        </button>
        <button
          onClick={() => {
            setInput("");
            setResult(null);
          }}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
        >
          重置
        </button>
        {result?.errors.length ? (
          <button
            onClick={() => navigator.clipboard.writeText(result.errors.join("\n"))}
            className="rounded-lg border border-slate-200 px-4 py-2 text-sm"
          >
            复制错误信息
          </button>
        ) : null}
      </div>

      {result ? (
        result.ok ? (
          <div className="rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-700">
            校验通过，共 {result.passCount} 项。数据有效，可以安全上传到服务器。
          </div>
        ) : (
          <div className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-700">
            <p className="mb-2 font-medium">校验失败，请修复以下问题：</p>
            <details open>
              <summary>展开错误详情（{result.errors.length} 条）</summary>
              <ul className="mt-2 list-disc space-y-1 pl-5">
                {result.errors.map((error, idx) => (
                  <li key={`${error}-${idx}`}>{error}</li>
                ))}
              </ul>
            </details>
          </div>
        )
      ) : (
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600">
          请选择校验类型，上传或粘贴 JSON 后点击“开始校验”。
        </div>
      )}

      <div className="rounded-xl border border-slate-200 bg-slate-50 p-4">
        <p className="mb-2 text-sm font-medium text-slate-700">示例格式</p>
        <pre className="overflow-x-auto text-xs text-slate-600">{example}</pre>
      </div>
    </section>
  );
}
