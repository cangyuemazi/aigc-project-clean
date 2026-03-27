import { motion } from 'framer-motion';

export function ContactPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">商业合作</h1>
        <div className="space-y-6 text-gray-600">
          <p>我们欢迎各类商业合作，包括但不限于：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>品牌广告投放</li>
            <li>工具推广合作</li>
            <li>技术合作</li>
            <li>内容合作</li>
            <li>API接口合作</li>
          </ul>
          <div className="bg-blue-50 rounded-xl p-4">
            <h3 className="font-semibold text-blue-600 mb-2">合作联系方式</h3>
            <p className="mb-2">邮箱：contact@smartai00.com</p>
            <p>微信：smart_ai_00</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
