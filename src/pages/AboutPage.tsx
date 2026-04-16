import { motion } from 'framer-motion';
import { Globe, Target, Users, Zap } from 'lucide-react';

export function AboutPage() {
  const features = [
    {
      icon: Target,
      title: '精准推荐',
      description: '围绕真实需求来组织工具，不靠堆量，而靠筛选质量。',
    },
    {
      icon: Users,
      title: '体验优先',
      description: '让用户更快看懂每个工具的价值，而不是被信息噪音淹没。',
    },
    {
      icon: Zap,
      title: '快速更新',
      description: '持续跟进 AI 工具变化，把真正值得关注的产品及时带进目录。',
    },
    {
      icon: Globe,
      title: '全球视野',
      description: '同时关注国内外优质产品，帮助用户比较和发现更好的选择。',
    },
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-16 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-tertiary)]">About us</p>
        <h1 className="mt-4 text-[3rem]">关于智能零零 AI 工具</h1>
        <p className="mx-auto mt-5 max-w-2xl text-xl leading-9 text-[var(--text-secondary)]">
          我们想做的不是另一个“信息很多”的工具站，而是一个看起来克制、用起来清楚、能真正帮你做选择的 AI 工具目录。
        </p>
      </div>

      <div className="surface-card mb-12 rounded-[32px] p-8">
        <h2 className="mb-6 text-[2.2rem]">我们的使命</h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="surface-card-quiet flex items-start gap-4 rounded-[24px] p-5"
            >
              <div className="warm-icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px]">
                <feature.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl">{feature.title}</h3>
                <p className="text-sm leading-7 text-[var(--text-secondary)]">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="mb-12 grid grid-cols-2 gap-6 md:grid-cols-4">
        {[
          { number: '50+', label: 'AI 工具' },
          { number: '8', label: '工具分类' },
          { number: '1000+', label: '活跃用户' },
          { number: '99%', label: '满意度' },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="surface-card rounded-[28px] p-6 text-center"
          >
            <div className="mb-2 text-4xl text-[var(--primary-color)]">{stat.number}</div>
            <div className="text-sm uppercase tracking-[0.18em] text-[var(--text-tertiary)]">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      <div className="surface-card rounded-[32px] p-8">
        <h2 className="mb-6 text-[2.2rem]">关于团队</h2>
        <p className="mb-4 leading-8 text-[var(--text-secondary)]">
          团队成员长期关注 AI 产品、设计系统和内容整理方式。我们相信，一个好的目录不只是把链接堆在一起，而是通过视觉层级、筛选逻辑和文案节奏，帮助用户更快建立判断。
        </p>
        <p className="leading-8 text-[var(--text-secondary)]">
          这次改版也是同样的想法延伸出来的结果：用更像 Claude 参考页的暖色纸感、衬线标题和轻层次组件，让网站从“工具集合”更进一步，变成一个更有审美判断力的产品。
        </p>
      </div>
    </motion.div>
  );
}
