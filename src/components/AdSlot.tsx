import { motion } from 'framer-motion';

export function AdSlot() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="surface-card relative mb-8 w-full overflow-hidden rounded-[32px] p-8"
    >
      <div className="pointer-events-none absolute -right-8 top-0 h-40 w-40 rounded-full bg-[rgba(201,100,66,0.08)] blur-3xl" />
      <div className="pointer-events-none absolute left-8 top-8 h-24 w-24 rounded-full bg-[rgba(214,190,154,0.16)] blur-2xl" />

      <div className="relative grid items-center gap-8 lg:grid-cols-[1.3fr_0.8fr]">
        <div>
          <span className="warm-chip">合作展示位</span>
          <h3 className="mt-5 max-w-2xl text-[2.2rem] sm:text-[2.6rem]">
            让你的 AI 产品以更克制、更高级的方式被看见。
          </h3>
          <p className="mt-4 max-w-xl text-base leading-8 text-[var(--text-secondary)]">
            这次主题更新把页面改成了更接近 Claude 设计文档的暖纸张风格，也更适合品牌露出、专题推荐和高质量工具推荐。
          </p>
          <a href="/contact" className="warm-button mt-6">
            了解合作方式
          </a>
        </div>

        <div className="hidden lg:block">
          <div className="rounded-[30px] bg-[#26211b] p-8 text-[#faf7ef] shadow-[0_20px_48px_rgba(38,33,27,0.18)]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[#d8c7b2]">Featured placement</p>
            <div className="mt-10 flex items-end justify-between">
              <div>
                <p className="font-display text-6xl leading-none text-[#faf7ef]">AI</p>
                <p className="mt-3 max-w-[12rem] text-sm leading-7 text-[#d8c7b2]">
                  Quiet confidence beats noisy gradients.
                </p>
              </div>
              <div className="h-14 w-14 rounded-full bg-[rgba(201,100,66,0.92)]" />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
