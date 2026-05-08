import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Anchor,
  User, 
  Map, 
  Briefcase, 
  GraduationCap, 
  Award, 
  Globe, 
  ExternalLink,
  ChevronDown,
  Plane,
  DollarSign,
  Calendar,
  MapPin,
  PlayCircle
} from 'lucide-react';

const personalData = {
  name: "李宥杰",
  title: "國立高雄科技大學 航運技術系",
  intro: "我叫李宥杰，就讀於國立高雄科技大學航運技術系。自從進入大學後，我對海上事業產生了濃厚的興趣，對船舶的運作與航行過程充滿了好奇與熱情。大海的廣闊與航海工作的挑戰性，讓我立志未來可以成為一名專業且值得信任的船長。\n\n在學期間，我積極修習航海學，海事法規與船舶管理等課程，並已取得四小證，為將來從事海上工作奠定了良好基礎。透過課堂學習與模擬實作，我體會到航海工作不僅需要專業技能，更需要冷靜的判斷力，嚴謹的紀律與強烈的責任感。\n\n我認為，一位優秀的航海人員必須在面對各種狀況時保持穩定心態，並與團隊密切合作。未來我希望能進公司實習、工作，親身體驗傳達運作及航線管理，學習專業技術與團隊合作的經驗，朝成為優秀船員與船長的目標邁進。",
  links: [
    { label: "個人 Google 協作網頁", url: "https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81", icon: ExternalLink },
    { label: "個人 3D 公仔", url: "https://studio.tripo3d.ai/3d-model/fd90f45d-3399-4280-a807-7ad03702df9b?invite_code=NPJXC9", icon: ExternalLink }
  ],
  experience: [
    { period: "2025 ~ 現在", role: "御風輪實習", description: "船舶觀摩、航行間上課、理貨員、整理貨物" }
  ],
  education: [
    { period: "2022-09 ~ 現在", school: "國立高雄科技大學", department: "航運技術系 (就學中)" },
    { period: "2019-09 ~ 2022-06", school: "正興國中", department: "" },
    { period: "2013-09 ~ 2019-06", school: "民族國小", department: "" }
  ],
  languages: "英文略懂 (TOEIC 470)、中文",
  certs: [
    { category: "四小證", items: "基本安全、進階滅火、救生艇筏、人員求生" },
    { category: "其他證照", items: "保全職責" }
  ]
};

const travelData = {
  title: "洛杉磯奢華假期",
  subtitle: "2026 清明連假六天五夜 ‧ 專屬尊榮行程",
  videoUrl: "https://www.youtube.com/embed/oAheUqNinm0",
  pdfUrl: "https://sites.google.com/nkust.edu.tw/bababoy/%E9%A6%96%E9%A0%81/%E6%97%85%E9%81%8A%E7%B0%A1%E5%A0%B1",
  itinerary: [
    { day: "4/2 (四)", time: "10:00 - 15:00", activity: "抵達 LAX 機場，專車接送至飯店 Check-in", location: "The Beverly Hills Hotel", note: "天氣晴。機場周邊車流正常。" },
    { day: "4/2 (四)", time: "16:00 - 20:00", activity: "聖塔莫尼卡碼頭散步看夕陽", location: "Santa Monica", note: "人潮中等。傍晚海風較大。" },
    { day: "4/3 (五)", time: "10:00 - 14:00", activity: "馬里布海岸慢跑與奢華早午餐", location: "Malibu", note: "警示：週五下午聯外公路極塞，建議留在西邊。" },
    { day: "4/3 (五)", time: "18:00 - 21:00", activity: "晚餐：Nobu Malibu", location: "Malibu", note: "需提前 3 個月訂位。全球最美景觀餐廳之一" },
    { day: "4/4 (六)", time: "09:00 - 13:00", activity: "Getty Center 欣賞世界級藝術與建築", location: "Getty Center", note: "LA 華人區車流多，此區較安靜。" },
    { day: "4/4 (六)", time: "16:00 - 20:00", activity: "格里斐斯天文台看 LA 夜景", location: "Griffith Observatory", note: "人流極多，建議搭乘 Uber 避免停車位地獄。" },
    { day: "4/5 (日)", time: "10:00 - 12:00", activity: "自駕前往「美國里維埃拉」聖塔芭芭拉", location: "Ritz-Carlton Bacara", note: "走 PCH 1 號公路，風景無敵。" },
    { day: "4/5 (日)", time: "14:00 - 18:00", activity: "飯店 Spa 或 State Street 購物", location: "Santa Barbara", note: "氛圍慵懶，人流適中。" },
    { day: "4/6 (一)", time: "10:00 - 14:00", activity: "前往 Solvang (丹麥村) 感受北歐風情", location: "Beverly Hills Waldorf", note: "回程避開 16:00 尖峰。" },
    { day: "4/6 (一)", time: "18:00 - 21:00", activity: "晚餐：Spago Beverly Hills", location: "Beverly Hills", note: "天氣穩定，米其林經典餐廳。" },
    { day: "4/7 (二)", time: "10:00 - 13:00", activity: "Rodeo Drive 最後血拼/精品採購", location: "Rodeo Drive", note: "市區車流量大，預留 3 小時前往機場。" },
    { day: "4/7 (二)", time: "14:00 -", activity: "前往 LAX 辦理登機，結束旅程", location: "LAX", note: "" },
  ],
  budget: [
    { item: "國際機票", cost: "$100,000", desc: "2026 清明旺季之豪經艙/早鳥商務艙" },
    { item: "奢華飯店 (5晚)", cost: "$120,000", desc: "平均一晚 $24,000，體驗頂級住宿服務" },
    { item: "餐飲美食", cost: "$45,000", desc: "含 2 頓米其林/高級餐廳與日常精緻餐點" },
    { item: "交通 (Uber)", cost: "$15,000", desc: "租賃敞篷車或 SUV + 專車接送" },
    { item: "門票與雜支", cost: "$20,000", desc: "蓋蒂中心、購物消費、Spa、旅遊保險" }
  ],
  totalBudget: "$300,000"
};

export default function App() {
  const [activeTab, setActiveTab] = useState<'profile' | 'travel'>('profile');

  return (
    <div className="min-h-screen bg-[#050505] text-[#e5e5e5] font-sans selection:bg-cyan-500/30">
      {/* Navigation */}
      <nav className="fixed top-0 inset-x-0 z-50 glass border-b-0">
        <div className="max-w-5xl mx-auto px-4 md:px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2 text-cyan-400 font-bold text-lg tracking-tight accent-glow">
            <Anchor className="h-5 w-5" />
            <span className="uppercase">{personalData.name}</span>
          </div>
          <div className="flex bg-zinc-900/50 p-1 rounded-full border border-zinc-800">
            <button
              onClick={() => setActiveTab('profile')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'profile' 
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-500/30' 
                  : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
              }`}
            >
              <User className="w-4 h-4" /> 個人介紹
            </button>
            <button
              onClick={() => setActiveTab('travel')}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
                activeTab === 'travel' 
                  ? 'bg-cyan-500/20 text-cyan-400 shadow-sm border border-cyan-500/30' 
                  : 'text-zinc-400 hover:text-zinc-200 border border-transparent'
              }`}
            >
              <Map className="w-4 h-4" /> 旅遊規劃
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 pt-24 pb-20">
        <AnimatePresence mode="wait">
          {activeTab === 'profile' ? (
            <motion.div
              key="profile"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              {/* Hero Section */}
              <div className="relative overflow-hidden rounded-3xl glass p-8 md:p-12">
                <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
                  {/* Subtle pattern / background element */}
                  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                        <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#ffffff" strokeWidth="1" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                  </svg>
                </div>
                
                <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center md:items-start justify-between">
                  <div className="max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-bold tracking-tighter mb-4 text-cyan-400 accent-glow uppercase">
                      {personalData.name}
                    </h1>
                    <p className="text-zinc-500 text-sm md:text-base tracking-widest uppercase mb-6 flex items-center gap-2">
                      <Anchor className="w-4 h-4 flex-shrink-0" />
                      {personalData.title}
                    </p>
                    <div className="space-y-4 text-zinc-300 leading-relaxed text-left text-sm md:text-base">
                      {personalData.intro.split('\n\n').map((paragraph, i) => (
                        <p key={i}>{paragraph}</p>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-3 w-full md:w-auto shrink-0 mt-4 md:mt-0">
                    {personalData.links.map((link, i) => (
                      <a 
                        key={i} 
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        className="nav-btn px-6 py-3 rounded-full flex items-center justify-between gap-4 text-cyan-400 font-medium"
                      >
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                          <span className="text-sm">{link.label}</span>
                        </div>
                        <link.icon className="w-3.5 h-3.5 opacity-70" />
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Resume Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Experience & Certs Column */}
                <div className="space-y-6">
                  {/* Experience */}
                  <div className="glass p-6 md:p-8 rounded-2xl flex flex-col min-h-0">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-4 bg-cyan-500 rounded-full"></span>
                      <h2 className="text-lg font-bold text-[#e5e5e5]">工作與實習經歷</h2>
                    </div>
                    <div className="relative pl-6">
                      <div className="timeline-line"></div>
                      <div className="space-y-6">
                        {personalData.experience.map((exp, idx) => (
                          <div key={idx} className="relative">
                            <div className="absolute -left-[23px] top-1 w-3 h-3 rounded-full bg-cyan-500 ring-4 ring-black"></div>
                            <span className="inline-block mb-1 text-xs font-bold text-cyan-400 uppercase tracking-widest">
                              {exp.period}
                            </span>
                            <h3 className="text-sm font-bold text-[#e5e5e5] mb-1">{exp.role}</h3>
                            <p className="text-xs text-zinc-400">{exp.description}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Certifications */}
                  <div className="glass p-6 md:p-8 rounded-2xl flex flex-col min-h-0">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-4 bg-cyan-500 rounded-full"></span>
                      <h2 className="text-lg font-bold text-[#e5e5e5]">專業證照</h2>
                    </div>
                    <div className="space-y-4">
                      {personalData.certs.map((cert, idx) => (
                        <div key={idx} className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                          <h3 className="text-xs font-bold text-zinc-500 uppercase tracking-widest mb-3">{cert.category}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-zinc-300">
                            {cert.items.split('、').map((item, id) => (
                              <div key={id} className="flex items-center gap-2">
                                <div className="w-1.5 h-1.5 rounded-full bg-cyan-400"></div>
                                {item}
                              </div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Education & Language Column */}
                <div className="space-y-6">
                  {/* Education */}
                  <div className="glass p-6 md:p-8 rounded-2xl flex flex-col min-h-0">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-4 bg-cyan-500 rounded-full"></span>
                      <h2 className="text-lg font-bold text-[#e5e5e5]">學歷背景</h2>
                    </div>
                    <div className="space-y-4">
                      {personalData.education.map((edu, idx) => (
                        <div key={idx} className="flex gap-3">
                          <div className="w-1 h-8 bg-zinc-800 rounded"></div>
                          <div className="-mt-1">
                            <p className="text-[10px] text-zinc-500 leading-tight">{edu.period}</p>
                            <h3 className={`text-sm tracking-wide ${idx === 0 ? 'font-bold text-[#e5e5e5]' : 'text-zinc-300'}`}>{edu.school}</h3>
                            {edu.department && (
                              <p className="text-xs text-cyan-400 mt-0.5">{edu.department}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Languages */}
                  <div className="glass p-6 md:p-8 rounded-2xl flex flex-col min-h-0">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-4 bg-cyan-500 rounded-full"></span>
                      <h2 className="text-lg font-bold text-[#e5e5e5]">語言能力</h2>
                    </div>
                    <div className="bg-zinc-900/50 p-4 rounded-xl border border-zinc-800">
                      <p className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-widest">能力指標</p>
                      <div className="space-y-4">
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-end">
                            <p className="text-sm font-medium">English</p>
                            <span className="text-cyan-400 font-mono text-xs">TOEIC 470</span>
                          </div>
                          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 w-[47%]"></div>
                          </div>
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="flex justify-between items-end">
                            <p className="text-sm font-medium">中文</p>
                            <span className="text-zinc-500 font-mono text-[10px] tracking-widest">NATIVE</span>
                          </div>
                          <div className="h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                            <div className="h-full bg-cyan-500 w-[95%]"></div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Goal Block */}
                  <div className="bg-cyan-900/10 border border-cyan-500/20 rounded-2xl p-5 flex items-center justify-between">
                    <div>
                      <p className="text-[10px] text-cyan-400 uppercase tracking-widest mb-1.5">現階段目標</p>
                      <p className="text-sm font-medium italic text-zinc-300">"持續精進航海技術<br/>探索世界每一個港口"</p>
                    </div>
                    <div className="text-right shrink-0 ml-4">
                      <p className="text-[10px] text-zinc-500 tracking-widest">LOCATION</p>
                      <p className="text-sm text-zinc-300 font-medium">KAOHSIUNG, TW</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          ) : (
            <motion.div
              key="travel"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="space-y-8"
            >
              {/* Travel Header */}
              <div className="text-center space-y-2 mb-8 pt-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter text-orange-400 uppercase drop-shadow-[0_0_15px_rgba(251,146,60,0.5)]">
                  {travelData.title}
                </h1>
                <p className="text-sm md:text-base text-zinc-500 font-medium tracking-widest uppercase">
                  {travelData.subtitle}
                </p>
              </div>

              {/* Video & Links Section */}
              <div className="space-y-4">
                <div className="glass rounded-3xl p-3 relative overflow-hidden">
                  <div className="relative group aspect-video bg-black rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl flex items-center justify-center">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent pointer-events-none z-0"></div>
                    <iframe 
                      src={travelData.videoUrl} 
                      title="Travel Planning Video"
                      className="w-full h-full absolute inset-0 z-10"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                    </iframe>
                    <div className="absolute bottom-4 left-4 right-4 z-20 pointer-events-none">
                      <p className="text-sm font-bold text-white">規劃亮點</p>
                      <p className="text-[10px] text-zinc-400">整合行程流暢度、在地化深度探訪與高效率交通對接。</p>
                    </div>
                  </div>
                  <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-500/10 rounded-full blur-3xl pointer-events-none"></div>
                </div>
                
                {/* PDF Link Button */}
                <div className="flex justify-center">
                  <a 
                    href={travelData.pdfUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="nav-btn px-6 py-3 rounded-full flex items-center justify-center gap-3 text-orange-400 font-medium hover:bg-orange-500/10 border border-orange-500/30 transition-all hover:border-orange-400"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span className="text-sm">查看旅遊規劃簡報 (PDF)</span>
                  </a>
                </div>
              </div>

              {/* Travel Details Grid */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12">
                
                {/* Itinerary Timeline */}
                <div className="lg:col-span-2 glass rounded-3xl p-6 md:p-8">
                  <div className="flex items-center gap-2 mb-8">
                    <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                    <h2 className="text-lg font-bold text-[#e5e5e5]">行程總覽</h2>
                  </div>
                  
                  <div className="space-y-8 relative pl-8 md:pl-0">
                    <div className="absolute left-[7px] md:left-[111px] top-0 bottom-0 w-[1px] bg-orange-500/30"></div>
                    {travelData.itinerary.map((item, idx) => {
                      const isNewDay = idx === 0 || travelData.itinerary[idx - 1].day !== item.day;
                      return (
                        <div key={idx} className="relative flex flex-col md:flex-row gap-2 md:gap-6 group z-10">
                          {/* Timeline dot */}
                          <div className={`absolute -left-[31px] md:left-[106px] w-3 h-3 rounded-full mt-1.5 md:mt-2 transition-colors ${isNewDay ? 'bg-orange-500 ring-4 ring-black z-20' : 'bg-zinc-700 z-10 group-hover:bg-orange-400'}`} />
                          
                          {/* Time/Day column */}
                          <div className="md:w-24 shrink-0 md:pt-1 text-left md:text-right md:pr-4 relative">
                            {isNewDay && (
                              <div className="font-bold text-orange-400 block mb-1 text-[13px]">{item.day}</div>
                            )}
                            <div className="text-xs font-mono text-zinc-500">
                              {item.time}
                            </div>
                          </div>
                          
                          {/* Content card */}
                          <div className="flex-1 mt-1 md:mt-0">
                            <div className="bg-zinc-900/50 hover:bg-zinc-800/80 transition-colors border border-zinc-800 rounded-2xl p-4 md:p-5">
                              <h3 className="text-sm font-bold text-[#e5e5e5] leading-snug mb-2">
                                {item.activity}
                              </h3>
                              <div className="space-y-2">
                                {item.location && (
                                  <div className="flex items-start gap-1.5 text-xs font-medium text-zinc-400">
                                    <MapPin className="w-3.5 h-3.5 shrink-0 mt-0.5" />
                                    <span>{item.location}</span>
                                  </div>
                                )}
                                {item.note && (
                                  <div className="bg-black/30 px-3 py-2 rounded-xl text-xs text-zinc-400 border border-zinc-800/50 flex items-start gap-2">
                                    <div className="w-1.5 h-1.5 rounded-full bg-zinc-600 mt-1 shrink-0" />
                                    <span>{item.note}</span>
                                  </div>
                                )}
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Sidebar */}
                <div className="lg:col-span-1 space-y-6">
                  <div className="glass rounded-3xl p-6 md:p-8 sticky top-24">
                    <div className="flex items-center gap-2 mb-6">
                      <span className="w-1.5 h-4 bg-orange-500 rounded-full"></span>
                      <h2 className="text-lg font-bold text-[#e5e5e5]">預算評估</h2>
                    </div>

                    <div className="space-y-4 mb-8">
                      {travelData.budget.map((item, idx) => (
                        <div key={idx} className="border-b border-zinc-800 last:border-0 pb-4 last:pb-0">
                          <div className="flex justify-between items-end mb-1">
                            <span className="font-bold text-sm text-[#e5e5e5]">{item.item}</span>
                            <span className="font-mono font-bold text-orange-400 text-sm">{item.cost}</span>
                          </div>
                          <p className="text-[11px] text-zinc-500 leading-relaxed">{item.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="bg-orange-500/10 rounded-2xl p-5 border border-orange-500/20 text-center flex flex-col items-center justify-center">
                      <p className="text-orange-400/80 text-[10px] font-bold uppercase tracking-widest mb-1">專案總計預算</p>
                      <p className="text-2xl font-black tracking-tight text-orange-400">{travelData.totalBudget}</p>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Footer */}
      <footer className="border-t border-zinc-800/50 bg-[#050505] py-8 text-center text-zinc-600 text-[10px] uppercase tracking-widest z-10 relative">
        <p>© 2026 {personalData.name} - 國立高雄科技大學 航運技術系</p>
      </footer>
    </div>
  );
}
