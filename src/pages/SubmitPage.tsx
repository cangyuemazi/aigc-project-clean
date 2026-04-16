import { useState, type ChangeEvent, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Send } from 'lucide-react';

export function SubmitPage() {
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    category: '',
    tags: '',
    email: '',
    logo: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log('Submitted:', formData);

    setIsSubmitting(false);
    setSubmitStatus('success');

    setTimeout(() => {
      setFormData({
        name: '',
        url: '',
        description: '',
        category: '',
        tags: '',
        email: '',
        logo: '',
      });
      setSubmitStatus('idle');
    }, 3000);
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="mx-auto max-w-3xl px-6 py-12">
      <div className="surface-card rounded-[32px] p-8">
        <p className="text-[11px] uppercase tracking-[0.24em] text-[var(--text-tertiary)]">Submit a tool</p>
        <h1 className="mb-2 mt-4 text-[2.75rem]">提交 AI 工具</h1>
        <p className="mb-8 text-[var(--text-secondary)]">
          欢迎提交优质 AI 产品。我们会尽快审核，并按新的视觉风格整理进目录。
        </p>

        {submitStatus === 'success' && (
          <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-6 flex items-center gap-3 rounded-[22px] border border-green-200 bg-green-50 p-4">
            <CheckCircle className="h-5 w-5 text-green-600" />
            <span className="text-green-700">提交成功，我们会在 3 个工作日内完成审核。</span>
          </motion.div>
        )}

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              工具名称 <span className="text-[var(--primary-color)]">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              placeholder="例如：ChatGPT"
              className="warm-input"
            />
          </div>

          <div>
            <label htmlFor="url" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              官网链接 <span className="text-[var(--primary-color)]">*</span>
            </label>
            <input
              type="url"
              id="url"
              name="url"
              value={formData.url}
              onChange={handleChange}
              required
              placeholder="https://example.com"
              className="warm-input"
            />
          </div>

          <div>
            <label htmlFor="description" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              工具描述 <span className="text-[var(--primary-color)]">*</span>
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              required
              rows={3}
              placeholder="简要描述工具解决的问题、适用人群和主要功能"
              className="warm-input resize-none"
            />
          </div>

          <div>
            <label htmlFor="category" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              工具分类 <span className="text-[var(--primary-color)]">*</span>
            </label>
            <select id="category" name="category" value={formData.category} onChange={handleChange} required className="warm-input">
              <option value="">请选择分类</option>
              <option value="writing">AI 写作工具</option>
              <option value="ppt">AI PPT 生成</option>
              <option value="image">AI 图片工具</option>
              <option value="video">AI 视频工具</option>
              <option value="office">AI 办公套件</option>
              <option value="programming">AI 编程工具</option>
              <option value="design">AI 设计工具</option>
              <option value="audio">AI 音频工具</option>
            </select>
          </div>

          <div>
            <label htmlFor="tags" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              标签
            </label>
            <input
              type="text"
              id="tags"
              name="tags"
              value={formData.tags}
              onChange={handleChange}
              placeholder="用逗号分隔，例如：AI 写作，内容生成，营销"
              className="warm-input"
            />
            <p className="mt-1 text-xs text-[var(--text-tertiary)]">最多 5 个标签，用逗号分隔</p>
          </div>

          <div>
            <label htmlFor="logo" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              Logo 链接
            </label>
            <input
              type="url"
              id="logo"
              name="logo"
              value={formData.logo}
              onChange={handleChange}
              placeholder="https://example.com/logo.png"
              className="warm-input"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-[var(--text-secondary)]">
              联系邮箱 <span className="text-[var(--primary-color)]">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="your@email.com"
              className="warm-input"
            />
          </div>

          <button type="submit" disabled={isSubmitting} className="warm-button w-full disabled:cursor-not-allowed disabled:opacity-50">
            {isSubmitting ? (
              <>
                <div className="h-5 w-5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                提交中...
              </>
            ) : (
              <>
                <Send className="h-5 w-5" />
                提交审核
              </>
            )}
          </button>
        </form>

        <div className="surface-card-quiet mt-8 rounded-[24px] p-5">
          <h3 className="mb-2 text-2xl">审核说明</h3>
          <ul className="space-y-1 text-sm leading-7 text-[var(--text-secondary)]">
            <li>我们会在 3 个工作日内完成审核。</li>
            <li>审核结果会通过邮件同步给你。</li>
            <li>请确保提交的工具真实可用，且链接有效。</li>
            <li>如有问题，可发送邮件至 submit@smartai00.com。</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
