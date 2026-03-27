import { motion } from 'framer-motion';

export function AboutPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">关于我们</h1>
        <div className="space-y-4 text-gray-600">
          <p>智能零零AI工具是一个专注于AI工具导航的平台，致力于为用户提供优质的AI工具资源。</p>
          <p>我们的使命是：</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>收集和整理全球优质AI工具</li>
            <li>提供简洁直观的用户体验</li>
            <li>帮助用户发现最适合的AI工具</li>
            <li>促进AI技术的普及和应用</li>
          </ul>
          <p>我们团队由热爱AI技术的专业人士组成，持续关注行业动态，为用户提供最新、最有价值的AI工具信息。</p>
        </div>
      </div>
    </motion.div>
  );
}
