import { motion } from 'framer-motion';

export function AdSlot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-8 shadow-card mb-8 border border-blue-100"
    >
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1">
          <div className="inline-block px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full mb-3">
            推广位
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">
            在这里展示您的AI工具
          </h3>
          <p className="text-gray-600 mb-4">
            获得更多曝光，触达精准用户群体
          </p>
          <a
            href="/contact"
            className="inline-block px-6 py-2.5 bg-blue-600 text-white font-semibold rounded-xl hover:bg-blue-700 transition-colors"
          >
            了解更多
          </a>
        </div>
        <div className="w-48 h-48 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl flex items-center justify-center text-white text-6xl font-bold shadow-xl">
          AD
        </div>
      </div>
    </motion.div>
  );
}
