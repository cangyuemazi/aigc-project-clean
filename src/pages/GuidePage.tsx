import { motion } from 'framer-motion';

export function GuidePage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-4xl mx-auto px-6 py-12"
    >
      <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-8 shadow-card">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">使用指南</h1>
        <div className="space-y-6 text-gray-600">
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">如何浏览工具</h3>
            <ol className="list-decimal pl-6 space-y-2">
              <li>点击左侧分类菜单筛选工具</li>
              <li>使用搜索框搜索特定工具</li>
              <li>悬停在工具卡片上查看详细介绍</li>
              <li>点击"立即体验"按钮访问工具官网</li>
            </ol>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">功能说明</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>分类筛选：按AI工具类型筛选</li>
              <li>搜索功能：支持按名称、描述搜索</li>
              <li>标签系统：快速识别工具特点</li>
              <li>浏览量显示：查看工具受欢迎程度</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
