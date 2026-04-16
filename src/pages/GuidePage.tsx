import { motion } from 'framer-motion';

export function GuidePage() {
  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-4xl px-6 py-12">
      <div className="surface-card rounded-[32px] p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Guide</p>
        <h1 className="mb-6 mt-4 text-[2.75rem]">使用指南</h1>
        <div className="space-y-8 text-[var(--text-secondary)]">
          <div className="surface-card-quiet rounded-[24px] p-6">
            <h3 className="mb-3 text-2xl">如何浏览工具</h3>
            <ol className="list-decimal space-y-2 pl-6 leading-8">
              <li>点击左侧分类快速缩小范围。</li>
              <li>通过搜索框按工具名、标签或描述查找。</li>
              <li>在首页卡片里先看简介，再进入详情页做判断。</li>
              <li>点击“立即体验”即可前往官方站点。</li>
            </ol>
          </div>

          <div className="surface-card-quiet rounded-[24px] p-6">
            <h3 className="mb-3 text-2xl">页面功能说明</h3>
            <ul className="list-disc space-y-2 pl-6 leading-8">
              <li>分类筛选帮助你快速定位具体场景。</li>
              <li>排序支持热门、最新和名称三种视角。</li>
              <li>收藏功能会保存在本地浏览器中，方便回看。</li>
              <li>详情页会展示标签、描述和相关推荐。</li>
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
