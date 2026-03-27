import { motion } from 'framer-motion';

export function SubmitPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">提交资料</h1>
        <div className="space-y-6 text-gray-600">
          <p>您可以通过以下方式提交AI工具信息：</p>
          <div className="bg-green-50 rounded-xl p-4">
            <h3 className="font-semibold text-green-600 mb-2">提交要求</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>工具名称、描述、官网链接</li>
              <li>工具分类和子分类</li>
              <li>工具标签（3-5个）</li>
              <li>工具Logo（可选）</li>
            </ul>
          </div>
          <p>提交邮箱：submit@smartai00.com</p>
          <p>我们会在3个工作日内审核并处理您的提交。</p>
        </div>
      </div>
    </motion.div>
  );
}
