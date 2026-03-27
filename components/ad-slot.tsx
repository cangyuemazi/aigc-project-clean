import { motion } from "framer-motion";

export function AdSlot() {
  return (
    <section className="mb-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[2.5rem] bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-blue-500/20"
      >
        <div className="rounded-[2.35rem] bg-white p-8 sm:p-16">
          <div className="flex flex-col items-center justify-between gap-8 sm:flex-row">
            <div className="text-center sm:text-left">
              <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">Premium Tool</h2>
              <p className="mt-4 text-xl text-slate-600">
                为您的品牌提供专属展示空间，触达海量AI爱好者
              </p>
            </div>
            <div className="flex gap-4">
              <button className="rounded-2xl bg-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-blue-500/25 transition-all duration-300 hover:bg-blue-700 hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105">
                立即合作
              </button>
              <button className="rounded-2xl bg-slate-100 px-8 py-4 text-base font-semibold text-slate-700 transition-all duration-300 hover:bg-slate-200 hover:scale-105">
                了解方案
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
