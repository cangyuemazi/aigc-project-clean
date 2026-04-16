import { Github, Heart, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="surface-panel mt-auto border-t border-[var(--border-color)]">
      <div className="mx-auto max-w-[1600px] px-6 py-12">
        <div className="mb-8 grid grid-cols-1 gap-8 md:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-3">
              <div className="warm-brand-mark flex h-11 w-11 items-center justify-center rounded-[18px]">
                <span className="font-display text-lg">AI</span>
              </div>
              <span className="text-xl">智能零零 AI 工具</span>
            </div>
            <p className="mb-4 text-sm leading-7 text-[var(--text-secondary)]">
              一个更像编辑刊物、而不是传统科技站的 AI 工具目录。现在整站都统一到了暖色纸感、衬线标题和克制按钮的设计语言上。
            </p>
            <div className="flex gap-3">
              <a href="mailto:contact@smartai00.com" className="surface-card-quiet rounded-2xl p-2.5 warm-link" aria-label="邮箱">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="surface-card-quiet rounded-2xl p-2.5 warm-link" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="surface-card-quiet rounded-2xl p-2.5 warm-link" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="mb-4 text-xl">快速链接</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li><a href="/" className="warm-link">首页</a></li>
              <li><a href="/about" className="warm-link">关于我们</a></li>
              <li><a href="/contact" className="warm-link">商业合作</a></li>
              <li><a href="/submit" className="warm-link">提交工具</a></li>
              <li><a href="/guide" className="warm-link">使用指南</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl">热门分类</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li><a href="/?category=writing" className="warm-link">AI 写作工具</a></li>
              <li><a href="/?category=image" className="warm-link">AI 图片工具</a></li>
              <li><a href="/?category=video" className="warm-link">AI 视频工具</a></li>
              <li><a href="/?category=programming" className="warm-link">AI 编程工具</a></li>
              <li><a href="/?category=design" className="warm-link">AI 设计工具</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 text-xl">联系我们</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>邮箱：contact@smartai00.com</li>
              <li>微信：smart_ai_00</li>
              <li className="pt-2">
                <a href="/contact" className="warm-button !px-4 !py-2.5 !text-sm">
                  商务合作
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-4 border-t border-[var(--border-color)] pt-8 md:flex-row">
          <p className="flex items-center gap-1 text-sm text-[var(--text-tertiary)]">
            © 2024 智能零零 AI 工具. Made with <Heart className="h-4 w-4 fill-current text-[var(--primary-color)]" /> in China
          </p>
          <div className="flex gap-6 text-sm text-[var(--text-tertiary)]">
            <a href="/privacy" className="warm-link">隐私政策</a>
            <a href="/terms" className="warm-link">服务条款</a>
            <a href="/sitemap" className="warm-link">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
