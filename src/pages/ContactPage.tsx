import { motion } from 'framer-motion';
import { Mail, MapPin, MessageSquare, Phone } from 'lucide-react';

export function ContactPage() {
  const contactMethods = [
    {
      icon: Mail,
      title: '邮箱联系',
      content: 'contact@smartai00.com',
      description: '适合商务合作、站点咨询和内容沟通',
    },
    {
      icon: MessageSquare,
      title: '微信联系',
      content: 'smart_ai_00',
      description: '适合快速沟通和实时对接',
    },
    {
      icon: Phone,
      title: '联系电话',
      content: '400-888-8888',
      description: '工作日 9:00 - 18:00',
    },
    {
      icon: MapPin,
      title: '公司地址',
      content: '北京市朝阳区科技园',
      description: '欢迎预约来访与面谈',
    },
  ];

  const cooperationTypes = [
    '品牌广告投放',
    '工具推广合作',
    '技术联合开发',
    '内容合作',
    'API 接口合作',
    '投资合作',
  ];

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-5xl px-6 py-12">
      <div className="mb-12 text-center">
        <p className="text-[11px] uppercase tracking-[0.28em] text-[var(--text-tertiary)]">Contact</p>
        <h1 className="mb-4 mt-4 text-[3rem]">商业合作</h1>
        <p className="text-xl leading-9 text-[var(--text-secondary)]">
          如果你希望在这个目录中获得更好的呈现方式，我们很乐意一起聊。
        </p>
      </div>

      <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {contactMethods.map((method, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="surface-card card-hover rounded-[28px] p-6"
          >
            <div className="flex items-start gap-4">
              <div className="warm-icon-badge flex h-12 w-12 shrink-0 items-center justify-center rounded-[18px]">
                <method.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="mb-2 text-2xl">{method.title}</h3>
                <p className="mb-1 text-lg font-semibold text-[var(--primary-color)]">{method.content}</p>
                <p className="text-sm leading-7 text-[var(--text-secondary)]">{method.description}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="surface-card mb-12 rounded-[32px] p-8">
        <h2 className="mb-6 text-[2.2rem]">合作类型</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {cooperationTypes.map((type, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="surface-card-quiet flex items-center gap-2 rounded-[20px] p-3"
            >
              <div className="h-2 w-2 rounded-full bg-[var(--primary-color)]" />
              <span className="text-sm font-medium text-[var(--text-secondary)]">{type}</span>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="rounded-[32px] bg-[#26211b] p-8 text-center text-[#faf7ef] shadow-[0_20px_48px_rgba(38,33,27,0.18)]">
        <h2 className="mb-4 text-[2.3rem] text-[#faf7ef]">立即开始合作</h2>
        <p className="mb-6 leading-8 text-[#d8c7b2]">
          无论你是 AI 工具开发者、品牌方还是内容团队，都可以用更适合这套站点气质的方式展示自己。
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <a href="mailto:contact@smartai00.com" className="warm-button">
            发送邮件
          </a>
          <a href="/submit" className="warm-button-ghost !border-[#5f5446] !bg-transparent !text-[#faf7ef] hover:!bg-[#342e27]">
            提交工具
          </a>
        </div>
      </div>
    </motion.div>
  );
}
