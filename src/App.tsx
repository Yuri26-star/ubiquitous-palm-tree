import { motion, AnimatePresence } from "motion/react";
import React, { useEffect } from "react";
import { 
  ExternalLink, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Briefcase, 
  Code, 
  Camera, 
  Coffee,
  ArrowRight,
  ChevronRight,
  Phone,
  ArrowLeft
} from "lucide-react";
import { BrowserRouter, Routes, Route, Link, useParams, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const PROJECTS = [
  {
    id: "yoga-app",
    title: "面部瑜伽 App 改版项目",
    category: "UI/UX设计",
    period: "2025.07 - 2025.12",
    description: "深度参与用户调研，优化链路与视觉动线，提升用户决策效率 14.4% 及会员转化率 10%。",
    image: "https://picsum.photos/seed/yoga/800/600",
    tags: ["竞品分析", "用户调研", "AIGC辅助"],
    fullContent: `
      ### 项目背景
      面部瑜伽是一款通过面部按摩提拉，帮助用户改善面部状态的健康类软件。本次推出项目改版的设计目标是提升用户的跟课体验，提升会员的转化率。通过将图形，楼层和视觉进行优化，提升用户在使用过程中的体验。

      1. **原型与高保真**: 负责部分功能模块界面的原型图，产出高保真设计与细节打磨，经过内部测试关键决策页面信息清晰，用户决策效率提升 14.4%。
      2. **链路优化**: 负责信息填写链路与会员中心视觉表现，通过优化链路与视觉动线，将信息填写完成率提升 28%，平均填写时长缩短 9.3%，会员转化率提升 10%。
      3. **品牌升级**: 参与品牌视觉风格的优化升级，根据产品定位及使用场景输出符合新视觉界面设计方案，利用 AIGC 工具辅助生成主 KV 素材，绘制图标、整理组件。

      参与交互设计规范和 UI 设计风格统一，把控整体设计质量，建立高效、通用性强的设计语言与设计规范。
    `
  },
  {
    id: "pupu-market",
    title: "朴朴超市运营活动项目",
    category: "视觉设计",
    period: "2025.01 - 2025.03",
    description: "负责核心模块 UI 设计，利用 AIGC 工具产出 3D 素材，促使活动期间下单率提升 30%。",
    image: "https://picsum.photos/seed/pupu/800/600",
    tags: ["运营设计", "AI生图"],
    fullContent: `
      ### 项目背景
      参与项目需求和玩法讨论以及相关竞品分析，制定视觉草图，支撑活动方案落地。

      1. **UI与视觉设计**: 参与主会场、抽奖机等核心模块的 UI 设计与视觉设计，优化信息层级与用户引导路径，用户点击率提升 25%。
      2. **AIGC赋能**: 根据视觉设定与活动主题，使用 Liblib AI、即梦、Comfy UI 等主流 AI 生图工具产出 3D 素材、IP 形象、图标等，并运用 PS 等设计工具进行精细化视觉打磨，保障物料质量与上线时效。

      活动期间促使下单率提升 30%，并结合业务数据反馈，提炼 AI 辅助设计的实战经验，输出可复用设计流程。
    `
  }
];

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-[#050505] text-white selection:bg-brand-purple selection:text-white overflow-x-hidden relative">
      <div className="grain" />
      
      {/* Background Gradients */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-purple/20 blur-[120px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-brand-glow/30 blur-[150px] rounded-full" />
        <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-indigo-500/10 blur-[100px] rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/20 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-12">
            <Link to="/" className="font-bold text-2xl tracking-tighter">KUNYU.</Link>
            <div className="hidden md:flex items-center gap-1 text-sm font-medium text-white/50">
              <Link to="/#about" className="px-4 py-2 hover:text-white transition-colors">关于</Link>
              <span className="opacity-20">|</span>
              <Link to="/#work" className="px-4 py-2 hover:text-white transition-colors">经历</Link>
              <span className="opacity-20">|</span>
              <Link to="/#projects" className="px-4 py-2 hover:text-white transition-colors">项目</Link>
              <span className="opacity-20">|</span>
              <Link to="/#beyond" className="px-4 py-2 hover:text-white transition-colors">生活</Link>
              <span className="opacity-20">|</span>
              <Link to="/#contact" className="px-4 py-2 hover:text-white transition-colors">联系</Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-sm font-medium text-white/70 hover:text-white transition-colors flex items-center gap-2">
              <Mail className="w-4 h-4" />
              2943398587@qq.com
            </button>
            <Button className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-6 h-10">
              Let's Talk
            </Button>
          </div>
        </div>
      </nav>

      <main className="relative z-10 max-w-7xl mx-auto px-6 pt-40 pb-24">
        {children}
      </main>

      <footer className="max-w-7xl mx-auto px-6 py-16 border-t border-white/5 flex flex-col items-center gap-8 text-sm text-white/20">
        <div className="flex gap-12 mb-4">
          <a href="#" className="hover:text-white transition-colors">隐私政策</a>
          <a href="#" className="hover:text-white transition-colors">服务条款</a>
          <a href="#" className="hover:text-white transition-colors">作品集说明</a>
        </div>
        <p className="tracking-widest uppercase text-[10px] font-bold">© 2026 阎坤妤 个人作品集. All rights reserved.</p>
      </footer>
    </div>
  );
};

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.substring(1);
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location]);

  return (
    <div className="space-y-40">
      {/* Hero Section */}
      <motion.section 
        id="hero"
        className="flex flex-col items-center text-center space-y-12"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="space-y-4">
          <p className="text-xs font-bold tracking-[0.4em] uppercase text-brand-purple">UX / UI Designer</p>
          <h1 className="text-6xl md:text-9xl font-bold tracking-tight leading-[1.0] max-w-5xl mx-auto relative">
            <span className="relative z-10">阎坤妤</span> <br />
            <span className="inline-flex items-center gap-6 relative z-10">
              探索
              <span className="inline-flex items-center gap-2 bg-gradient-to-r from-[#f8c8d3] to-[#f9e8b3] text-black px-8 py-4 rounded-full scale-75 md:scale-100 shadow-[0_0_40px_rgba(248,200,211,0.3)] border border-white/20">
                <ArrowRight className="w-8 h-8 -rotate-45" />
                <ArrowRight className="w-8 h-8 rotate-45" />
                <ArrowRight className="w-8 h-8 -rotate-45" />
              </span>
            </span>
            <span className="relative z-10">设计边界</span>
            <div className="absolute inset-0 bg-brand-purple/20 blur-[100px] -z-10 rounded-full opacity-50" />
          </h1>
        </motion.div>
        
        <motion.p variants={fadeIn} className="text-xl text-white/60 max-w-2xl mx-auto leading-relaxed">
          专注于打造具有卓越体验的数字产品。擅长 UI 界面设计、AIGC 辅助设计及动效呈现。
          目前致力于通过创新设计为用户创造价值。
        </motion.p>

        <motion.div variants={fadeIn} className="flex gap-4">
          <Button size="lg" className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8 group" onClick={() => navigate('/#projects')}>
            查看作品集
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button size="lg" variant="ghost" className="text-white hover:bg-white/5 rounded-full px-8" onClick={() => navigate('/#contact')}>
            联系我
          </Button>
        </motion.div>

        {/* Decorative Stars */}
        <div className="absolute top-20 left-20 opacity-20 animate-pulse">
          <Sparkle className="w-6 h-6 text-white" />
        </div>
        <div className="absolute top-40 right-40 opacity-30 animate-bounce delay-700">
          <Sparkle className="w-4 h-4 text-white" />
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section 
        id="about"
        className="grid md:grid-cols-2 gap-20 items-center"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <motion.div variants={fadeIn} className="relative group">
          <div className="absolute inset-0 bg-brand-purple/20 blur-3xl rounded-full group-hover:bg-brand-purple/30 transition-all" />
          <div className="relative aspect-[3/4] rounded-[40px] overflow-hidden border border-white/10">
            <img 
              src="https://picsum.photos/seed/kunyu/600/800" 
              alt="阎坤妤" 
              className="object-cover w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
        
        <motion.div variants={fadeIn} className="space-y-8">
          <h2 className="text-5xl font-bold tracking-tight">关于我</h2>
          <div className="space-y-6 text-white/60 leading-relaxed text-lg">
            <p>
              我是阎坤妤，一名热衷于探索设计可能性的 UX/UI 设计师。毕业于青岛农业大学视觉传达设计专业。
            </p>
            <p>
              我擅长将用户体验、界面设计与 AIGC 工具相结合，提升设计效率与视觉表现力。在校期间多次获得奖学金及创新创业大赛奖项，具备良好的执行力与团队协作意识。
            </p>
          </div>
          <div className="flex flex-wrap gap-3 pt-4">
            {["用户体验", "界面设计", "视觉设计", "动效设计", "AIGC", "运营设计"].map((skill) => (
              <Badge key={skill} variant="secondary" className="bg-white/5 hover:bg-white/10 text-white border-white/10 rounded-full px-4 py-2 text-sm">
                {skill}
              </Badge>
            ))}
          </div>
        </motion.div>
      </motion.section>

      {/* Work Experience Section */}
      <motion.section 
        id="work"
        className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-[40px] p-12 md:p-20 relative overflow-hidden"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="absolute top-0 right-0 w-64 h-64 bg-brand-purple/10 blur-[80px] rounded-full -mr-32 -mt-32" />
        
        <div className="space-y-16 relative z-10">
          <motion.div variants={fadeIn} className="space-y-4">
            <p className="text-xs font-bold tracking-widest text-white/40 uppercase">#Work_Experience</p>
            <h2 className="text-4xl md:text-5xl font-bold">工作经历</h2>
          </motion.div>

          <div className="space-y-12">
            {[
              { 
                company: "棒糖科技(杭州)股份有限公司", 
                role: "UI设计师", 
                period: "2025.04 - 2026.03",
                desc: [
                  "全程参与产品规划和创意过程，输出可用设计方案，保证产品具有良好的体验；",
                  "参与团队讨论明确设计方向，与产品经理和研发紧密合作，沟通对接，保证 UI 设计在实际中呈现的效果完美；",
                  "负责产品视觉风格制定与迭代，完成 UI 相关的界面设计和图标绘制，产出高品质的设计组件，持续优化细节，有效提升团队整体设计能效。"
                ]
              },
              { 
                company: "朴朴电子商务有限公司", 
                role: "视觉设计实习", 
                period: "2024.11 - 2025.03",
                desc: [
                  "负责完成团队的设计需求及内宣创意设计，包括项目的主 KV、主视觉活动；",
                  "参与创意洞察及视觉设计的研究讨论，协助整体品牌视觉形象把控，进行视觉风格定义和活动创新；",
                  "参与运营设计体验标准、设计组件规范制定，在实际项目中不断总结，及时沉淀设计方法，构建可复用的设计资产。"
                ]
              }
            ].map((item, i) => (
              <motion.div key={i} variants={fadeIn} className="flex flex-col md:flex-row gap-6 md:gap-20 group">
                <div className="md:w-1/3 space-y-2">
                  <p className="text-brand-purple font-bold text-lg">{item.period}</p>
                  <h3 className="text-2xl font-bold">{item.company}</h3>
                  <p className="text-white/40 font-medium">{item.role}</p>
                </div>
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    {item.desc.map((bullet, idx) => (
                      <li key={idx} className="text-white/60 text-lg leading-relaxed flex gap-3">
                        <span className="text-brand-purple mt-2">•</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Projects Section */}
      <motion.section 
        id="projects"
        className="space-y-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="flex items-end justify-between">
          <motion.h2 variants={fadeIn} className="text-5xl font-bold tracking-tight">项目经历</motion.h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div key={index} variants={fadeIn}>
              <Link to={`/project/${project.id}`}>
                <Card className="overflow-hidden border border-white/10 bg-white/5 hover:bg-white/10 transition-all duration-500 group cursor-pointer rounded-[32px] h-full">
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <CardHeader className="px-8 pt-8 pb-0 space-y-1">
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-3xl font-bold">{project.title}</CardTitle>
                      <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-y-2 group-hover:translate-y-0">
                        <ExternalLink className="h-5 w-5 text-white" />
                      </div>
                    </div>
                    <CardDescription className="text-brand-purple text-lg text-left">{project.category} | {project.period}</CardDescription>
                  </CardHeader>
                  <CardContent className="px-8 pb-8 pt-2 space-y-3">
                    <p className="text-white/50 leading-relaxed text-lg">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-3">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-xs uppercase tracking-widest font-bold text-white/30 bg-white/5 px-3 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Beyond Design Section */}
      <motion.section 
        id="beyond"
        className="space-y-20"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
      >
        <div className="text-left space-y-4">
          <h2 className="text-5xl font-bold tracking-tight">设计之外</h2>
          <p className="text-white/40 text-lg">在像素与网格之外，我也热爱生活中的每一个瞬间。</p>
        </div>

        <div className="space-y-12">
          <motion.div variants={fadeIn} className="space-y-10">
            <div className="space-y-8">
              {[
                { id: 'photo1', seed: 'urban', aspect: 'aspect-[3/4]' },
                { id: 'photo2', seed: 'nature', aspect: 'aspect-[3/4]' },
                { id: 'photo3', seed: 'street', aspect: 'aspect-[3/4]' }
              ].map((photo) => (
                <div 
                  key={photo.id} 
                  className={`rounded-[40px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/50 group ${photo.aspect}`}
                >
                  <img 
                    src={`https://picsum.photos/seed/${photo.seed}/900/1200`} 
                    alt="Photography Record" 
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-[1.02]"
                    referrerPolicy="no-referrer"
                  />
                </div>
              ))}
            </div>
            <p className="text-white/40 text-lg max-w-2xl leading-relaxed pl-4 border-l-2 border-brand-purple/30">
              捕捉生活中的光影瞬间，记录不期而遇的美好。通过镜头观察世界，发现平凡生活中的不凡之处。
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section 
        id="contact"
        className="py-40 border-t border-white/10"
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        variants={staggerContainer}
      >
        <div className="flex flex-col items-center text-center space-y-24 max-w-4xl mx-auto">
          <motion.div variants={fadeIn} className="space-y-12 flex flex-col items-center">
            <div className="space-y-6">
              <h2 className="text-7xl md:text-8xl font-bold tracking-tight leading-[1.1]">
                期待与你 <br />
                <span className="text-white">共同创造价值</span>
              </h2>
              <p className="text-white/50 text-2xl max-w-2xl mx-auto leading-relaxed">
                目前正在寻找新的工作机会，欢迎随时联系。无论是项目合作还是设计交流，我都非常期待。
              </p>
            </div>
            
            <div className="flex gap-8 justify-center">
              {[
                { icon: Github, label: "Github" },
                { icon: Linkedin, label: "Linkedin" },
                { icon: Mail, label: "Email" }
              ].map((item, i) => (
                <Button key={i} variant="outline" size="icon" className="w-16 h-16 rounded-full border-white/10 bg-white/5 hover:bg-brand-purple hover:border-brand-purple transition-all duration-500 group">
                  <item.icon className="h-7 w-7 text-white group-hover:scale-110 transition-transform" />
                </Button>
              ))}
            </div>
          </motion.div>
          
          <motion.div variants={fadeIn} className="grid md:grid-cols-2 gap-12 md:gap-40 items-center justify-center w-full pt-12 border-t border-white/5">
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/20">电话 / 微信</p>
              <p className="text-3xl font-medium flex items-center gap-4 justify-center md:justify-start">
                <Phone className="h-7 w-7 text-brand-purple" />
                134-5317-0782
              </p>
            </div>
            <div className="space-y-6">
              <p className="text-sm font-bold uppercase tracking-[0.4em] text-white/20">电子邮箱</p>
              <p className="text-3xl font-bold hover:text-brand-purple transition-colors cursor-pointer underline decoration-brand-purple/30 underline-offset-[12px] decoration-2">
                2943398587@qq.com
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

const ProjectDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <div className="flex flex-col items-center justify-center py-40 space-y-8">
        <h2 className="text-4xl font-bold">项目未找到</h2>
        <Button onClick={() => navigate('/')} className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-8">
          返回首页
        </Button>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="space-y-24 pb-40"
    >
      {/* Header & Title */}
      <motion.div variants={fadeIn} initial="initial" animate="animate" className="space-y-12">
        <Button 
          variant="ghost" 
          onClick={() => navigate('/#projects')} 
          className="text-white/50 hover:text-white hover:bg-white/5 rounded-full px-6 group"
        >
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          返回项目经历
        </Button>
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Badge variant="secondary" className="bg-brand-purple/20 text-brand-purple border-brand-purple/20 rounded-full px-4 py-1 text-sm uppercase tracking-wider">
              {project.category}
            </Badge>
            <Badge variant="outline" className="border-white/10 text-white/40 rounded-full px-4 py-1 text-sm">
              {project.period}
            </Badge>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold tracking-tight leading-[1.1] max-w-5xl">{project.title}</h1>
        </div>
      </motion.div>

      {/* Project Background */}
      <motion.div 
        variants={fadeIn} 
        initial="initial" 
        animate="animate"
        className="max-w-4xl space-y-16"
      >
        <div className="prose prose-invert max-w-none">
          {project.fullContent.split('\n\n').map((paragraph, i) => {
            if (paragraph.trim().startsWith('###')) {
              return (
                <div key={i} className="space-y-6 mt-20 mb-10">
                  <h3 className="text-4xl font-bold text-white flex items-center gap-4">
                    <span className="w-8 h-[2px] bg-brand-purple rounded-full" />
                    {paragraph.replace('### ', '')}
                  </h3>
                </div>
              );
            }
            return <p key={i} className="text-white/60 text-xl leading-relaxed mb-8 pl-12 border-l border-white/5">{paragraph.trim()}</p>;
          })}
        </div>
      </motion.div>

      {/* Long Image Display */}
      <motion.div 
        variants={fadeIn} 
        initial="initial" 
        animate="animate"
        className="space-y-16"
      >
        <div className="space-y-10">
          <div className="flex items-center gap-4">
            <h3 className="text-sm font-bold uppercase tracking-[0.4em] text-white/20">项目展示 / Project Showcase</h3>
            <div className="flex-1 h-[1px] bg-white/5" />
          </div>
          <div className="rounded-[48px] overflow-hidden border border-white/10 bg-white/5 shadow-2xl shadow-black/50">
            <img 
              src={project.image} 
              alt={`${project.title} - 1`} 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            {/* Simulating a long image with multiple sections or a very tall image */}
            <img 
              src={`https://picsum.photos/seed/${project.id}-2/1200/1800`} 
              alt={`${project.title} - 2`} 
              className="w-full h-auto border-t border-white/10"
              referrerPolicy="no-referrer"
            />
            <img 
              src={`https://picsum.photos/seed/${project.id}-3/1200/1800`} 
              alt={`${project.title} - 3`} 
              className="w-full h-auto border-t border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 pt-32">
          <p className="text-white/30 font-medium">感谢阅读</p>
          <Button 
            onClick={() => navigate('/#projects')}
            size="lg"
            className="bg-brand-purple hover:bg-brand-purple/90 text-white rounded-full px-16 h-20 text-xl font-bold shadow-xl shadow-brand-purple/20 group"
          >
            返回项目经历板块
            <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Layout>
        <AnimatePresence mode="wait">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </AnimatePresence>
      </Layout>
    </BrowserRouter>
  );
}

const Sparkle = ({ className }: { className?: string }) => (
  <svg 
    viewBox="0 0 24 24" 
    fill="currentColor" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);
