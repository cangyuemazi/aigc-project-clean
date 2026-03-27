import { Github, Mail, Twitter } from 'lucide-react';

export function Footer() {
  return (
    <footer className="bg-white/80 backdrop-blur-xl border-t border-gray-200/50 mt-16">
      <div className="max-w-[1600px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white shadow-lg">
                <span className="text-lg font-bold">AI</span>
              </div>
              <span className="text-xl font-bold text-gray-900">智能零零AI工具</span>
            </div>
            <p className="text-sm text-gray-600">
              专注于AI工具导航，为用户提供优质的AI工具资源
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/" className="hover:text-blue-600 transition-colors">首页</a></li>
              <li><a href="/about" className="hover:text-blue-600 transition-colors">关于我们</a></li>
              <li><a href="/contact" className="hover:text-blue-600 transition-colors">商业合作</a></li>
              <li><a href="/submit" className="hover:text-blue-600 transition-colors">提交资料</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">热门分类</h3>
            <ul className="space-y-2 text-sm text-gray-600">
              <li><a href="/?category=writing" className="hover:text-blue-600 transition-colors">AI写作工具</a></li>
              <li><a href="/?category=image" className="hover:text-blue-600 transition-colors">AI图片工具</a></li>
              <li><a href="/?category=video" className="hover:text-blue-600 transition-colors">AI视频工具</a></li>
              <li><a href="/?category=programming" className="hover:text-blue-600 transition-colors">AI编程工具</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">联系我们</h3>
            <div className="flex gap-4 mb-4">
              <a href="mailto:contact@smartai00.com" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-gray-100 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
            <p className="text-sm text-gray-600">
              邮箱：contact@smartai00.com
            </p>
          </div>
        </div>
        
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 智能零零AI工具. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <a href="/privacy" className="hover:text-blue-600 transition-colors">隐私政策</a>
            <a href="/terms" className="hover:text-blue-600 transition-colors">服务条款</a>
            <a href="/sitemap" className="hover:text-blue-600 transition-colors">网站地图</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
