
import React, { useState, useEffect } from 'react';

const App: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [textSize, setTextSize] = useState('standard');
  const [isWide, setIsWide] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const getTextClass = () => {
    switch(textSize) {
      case 'small': return 'text-sm';
      case 'large': return 'text-lg';
      default: return 'text-base';
    }
  };

  return (
    <div className={`min-h-screen flex flex-col ${getTextClass()}`}>
      {/* Header */}
      <header className="border-b border-wiki-border-light dark:border-wiki-border-dark px-4 py-2 flex items-center justify-between sticky top-0 bg-background-light dark:bg-background-dark z-50">
        <div className="flex items-center gap-4">
          <span className="material-icons cursor-pointer text-gray-600 dark:text-gray-400">menu</span>
          <div className="flex items-center gap-2">
             <div className="w-8 h-8 bg-gray-200 dark:bg-gray-700 rounded-full flex items-center justify-center">
                <span className="material-icons text-sm text-gray-500">public</span>
             </div>
             <div className="hidden md:block leading-none">
                <span className="font-serif text-xl font-medium tracking-tight">WIKIPEDIA</span>
                <span className="text-[10px] block tracking-tighter text-gray-500">The Free Encyclopedia</span>
             </div>
          </div>
        </div>

        <div className="flex-grow max-w-2xl px-8 hidden sm:block">
          <div className="relative flex items-center">
            <span className="material-icons absolute left-3 text-gray-400 text-sm">search</span>
            <input 
              type="text" 
              placeholder="Search Wikipedia" 
              className="w-full pl-9 pr-4 py-1.5 border border-wiki-border-light dark:border-wiki-border-dark bg-wiki-gray-light dark:bg-wiki-gray-dark rounded-sm focus:outline-none focus:ring-1 focus:ring-primary text-sm"
            />
            <button className="ml-2 px-4 py-1.5 bg-gray-100 dark:bg-gray-800 border border-wiki-border-light dark:border-wiki-border-dark rounded-sm text-sm font-bold">Search</button>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs whitespace-nowrap">
          <a href="#" className="wiki-link">Create account</a>
          <a href="#" className="wiki-link">Log in</a>
          <span className="material-icons text-gray-400 cursor-pointer">more_vert</span>
        </div>
      </header>

      <div className={`flex flex-grow ${isWide ? 'max-w-full' : 'max-w-[1400px]'} mx-auto w-full`}>
        {/* Left Sidebar */}
        <aside className="hidden lg:block w-64 p-6 border-r border-transparent">
          <div className="sticky top-20">
            <div className="mb-8">
              <div className="flex items-center justify-between border-b border-wiki-border-light dark:border-wiki-border-dark pb-1 mb-2">
                <h2 className="font-bold text-sm">Contents</h2>
                <button className="text-[10px] wiki-link uppercase font-bold">hide</button>
              </div>
              <nav className="mt-4 flex flex-col gap-1 text-sm">
                <a href="#top" className="sidebar-item font-bold bg-blue-50 dark:bg-blue-900/20 border-l-4 border-primary">(Top)</a>
                <a href="#history" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800">1 History</a>
                <a href="#core-concept" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800">2 Core concept</a>
                <a href="#features" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800 pl-6 text-xs text-gray-600 dark:text-gray-400">2.1 Restrictive Sessioning</a>
                <a href="#features" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800 pl-6 text-xs text-gray-600 dark:text-gray-400">2.2 Failure Logging</a>
                <a href="#reception" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800">3 Reception</a>
                <a href="#references" className="sidebar-item hover:bg-gray-100 dark:hover:bg-gray-800">4 References</a>
              </nav>
            </div>

            <div className="text-[11px] text-gray-500 dark:text-gray-400 space-y-2">
              <p className="font-bold border-b border-wiki-border-light dark:border-wiki-border-dark pb-1 mb-2 uppercase tracking-wider">Tools</p>
              <p><a href="#" className="wiki-link">What links here</a></p>
              <p><a href="#" className="wiki-link">Related changes</a></p>
              <p><a href="#" className="wiki-link">Upload file</a></p>
              <p><a href="#" className="wiki-link">Special pages</a></p>
              <p><a href="#" className="wiki-link">Permanent link</a></p>
              <p><a href="#" className="wiki-link">Page information</a></p>
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-grow p-6 md:p-10 lg:px-12 max-w-5xl">
          <div className="flex justify-between items-end mb-1">
            <h1 className="text-3xl font-serif" id="top">FocusForge</h1>
            <div className="text-xs space-x-4">
              <span className="material-icons text-sm align-middle mr-1 text-gray-500">language</span>
              <a href="#" className="wiki-link font-bold">35 languages</a>
            </div>
          </div>
          <div className="h-[1px] bg-wiki-border-light dark:bg-wiki-border-dark mb-4"></div>

          <div className="text-xs mb-6 flex justify-between items-center text-gray-600 dark:text-gray-400 border-b border-wiki-border-light dark:border-wiki-border-dark pb-0.5">
            <div className="flex gap-4">
              <span className="font-bold border-b-2 border-primary pb-2 text-gray-900 dark:text-gray-100 px-1">Article</span>
              <span className="pb-2 cursor-pointer hover:text-primary px-1">Talk</span>
            </div>
            <div className="flex gap-4">
              <span className="font-bold border-b-2 border-transparent pb-2 text-gray-900 dark:text-gray-100 px-1">Read</span>
              <span className="pb-2 cursor-pointer hover:text-primary px-1">Edit</span>
              <span className="pb-2 cursor-pointer hover:text-primary px-1">View history</span>
              <div className="relative group cursor-pointer pb-2 px-1">
                <span>Tools <span className="text-[8px]">▼</span></span>
              </div>
            </div>
          </div>

          <p className="text-xs mb-6 italic text-gray-500">From Wikipedia, the free encyclopedia</p>

          <div className="float-right ml-6 mb-6 w-full md:w-80 border border-wiki-border-light dark:border-wiki-border-dark bg-wiki-gray-light dark:bg-wiki-gray-dark p-2 text-sm">
            <table className="w-full">
              <thead>
                <tr>
                  <th className="py-2 text-base font-bold bg-blue-100/30 dark:bg-blue-900/10 mb-2 font-serif" colSpan={2}>FocusForge</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-6 text-center" colSpan={2}>
                    <div className="w-28 h-28 bg-gray-200 dark:bg-gray-800 mx-auto rounded flex items-center justify-center mb-2 border border-wiki-border-light/20 shadow-inner">
                      <span className="material-icons text-7xl text-gray-600 dark:text-gray-400">gavel</span>
                    </div>
                    <span className="text-xs italic text-gray-500">The "Forge Anvil" logo</span>
                  </td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold w-1/3 text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">Developer</th>
                  <td className="py-2 px-2">ForgeLabs Int.</td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">Initial release</th>
                  <td className="py-2 px-2">November 14, 2023</td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">Platform</th>
                  <td className="py-2 px-2"><a href="#" className="wiki-link">Web</a>, Desktop</td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">Category</th>
                  <td className="py-2 px-2"><a href="#" className="wiki-link">Productivity software</a></td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">License</th>
                  <td className="py-2 px-2">Proprietary (SaaS)</td>
                </tr>
                <tr className="border-t border-wiki-border-light/50 dark:border-wiki-border-dark">
                  <th className="text-left py-2 px-2 align-top font-bold text-xs uppercase tracking-tight text-gray-600 dark:text-gray-400">Website</th>
                  <td className="py-2 px-2"><a href="#" className="wiki-link">focusforge.io</a></td>
                </tr>
              </tbody>
            </table>
          </div>

          <article className="prose dark:prose-invert max-w-none font-sans">
            <p className="mb-4">
              <span className="font-bold">FocusForge</span> is a deliberately restrictive <a href="#" className="wiki-link">productivity software</a> platform developed by ForgeLabs. Launched in late 2023, it distinguishes itself from traditional <a href="#" className="wiki-link">time management</a> tools through its philosophy of "negative reinforcement" and forced accountability. Unlike competitors that focus on gamification and positive rewards, FocusForge utilizes a confrontational brand tone and rigid work structures to ensure user compliance with self-imposed deadlines<sup>[1][2]</sup>.
            </p>
            <p className="mb-4">
              The platform is designed primarily for knowledge workers and students who struggle with chronic <a href="#" className="wiki-link">procrastination</a>. It operates on a <a href="#" className="wiki-link">SaaS</a> model and has gained notoriety in the technology community for its uncompromising approach to task management.
            </p>

            <h2 className="text-2xl content-section font-serif mt-10 mb-4" id="history">History</h2>
            <p className="mb-4">
              FocusForge was conceived by software engineer and behavioral psychologist Elias Thorne in early 2022. Thorne, who had previously worked on attention-retention algorithms for social media platforms, pivoted to develop a tool that would "reverse the damage" of the attention economy<sup>[3]</sup>. 
            </p>
            <p className="mb-4">
              The initial beta release, codenamed "Ironclad," was limited to a closed group of 500 users. Following a viral thread on <a href="#" className="wiki-link">Hacker News</a>, the platform saw a surge in interest, leading to its public release in November 2023.
            </p>

            <h2 className="text-2xl content-section font-serif mt-10 mb-4" id="core-concept">Core concept</h2>
            <p className="mb-4">
              The central tenet of FocusForge is that contemporary productivity tools are "too soft." The developers argue that providing users with "streaks" and "badges" fails to address the underlying psychological barriers to work. Instead, FocusForge treats work as a "contractual obligation" between the user and the software.
            </p>

            <h2 className="text-2xl content-section font-serif mt-10 mb-4" id="features">Features</h2>
            <h3 className="text-lg font-bold mb-3">Restrictive Sessioning</h3>
            <p className="mb-4">
              Users must commit to a "Session" ranging from 25 to 120 minutes. Once a session begins, FocusForge utilizes system-level hooks to block all non-essential applications. Unlike other site blockers, FocusForge requires a "break penalty" if the user attempts to exit the session early, which involves a manual five-minute typing exercise of a "statement of failure"<sup>[4]</sup>.
            </p>

            <h3 className="text-lg font-bold mb-3">Failure Logging</h3>
            <p className="mb-4">
              A core component of the interface is the <span className="italic">Failure Log</span>. Rather than archiving completed tasks, the system prominently displays tasks that were missed or abandoned. The interface employs a "confrontational" tone, using copy such as "You let yourself down again" or "Is this who you wanted to be today?" to highlight missed goals<sup>[5]</sup>.
            </p>

            <h2 className="text-2xl content-section font-serif mt-10 mb-4" id="reception">Reception</h2>
            <p className="mb-4">
              Reception to FocusForge has been polarized. Tech critics have described it as "masochistic productivity" and "the digital equivalent of a drill sergeant." A review in <span className="italic">Wired</span> praised its effectiveness for those with severe <a href="#" className="wiki-link">ADHD</a>, while others have criticized its tone as potentially harmful to mental health<sup>[6]</sup>.
            </p>
            <p className="mb-4">
              As of mid-2024, the platform reports over 100,000 active monthly users, with a significant concentration in the software development and academic sectors.
            </p>

            <h2 className="text-2xl content-section font-serif mt-10 mb-4" id="references">References</h2>
            <ol className="text-sm list-decimal pl-8 space-y-2 text-gray-700 dark:text-gray-400">
              <li><span className="text-[10px] text-primary">^</span> "The Rise of Hostile Software", <span className="italic">TechJournal</span>, Jan 2024.</li>
              <li><span className="text-[10px] text-primary">^</span> "ForgeLabs: Why we made the anvil", Company Blog.</li>
              <li><span className="text-[10px] text-primary">^</span> Interview with Elias Thorne, <span className="italic">The Modern Work Podcast</span>, Episode 45.</li>
              <li><span className="text-[10px] text-primary">^</span> "User Manual - Section 4: The Failure Statement", FocusForge Documentation.</li>
              <li><span className="text-[10px] text-primary">^</span> "Why your apps should be meaner to you", <span className="italic">Productivity Weekly</span>.</li>
              <li><span className="text-[10px] text-primary">^</span> "Review: FocusForge is the kick in the pants you didn't know you needed", <span className="italic">Wired</span>.</li>
            </ol>
          </article>

          <div className="mt-12 pt-4 border-t border-wiki-border-light dark:border-wiki-border-dark flex flex-wrap gap-4 text-xs text-gray-500">
            <span className="font-bold text-gray-700 dark:text-gray-300">Categories:</span> 
            <a href="#" className="wiki-link">2023 software</a> 
            <span className="text-gray-300">|</span> 
            <a href="#" className="wiki-link">Productivity software</a> 
            <span className="text-gray-300">|</span> 
            <a href="#" className="wiki-link">Time management</a>
          </div>

          <footer className="mt-16 pb-20 text-xs text-gray-500 space-y-6">
            <p className="border-t border-wiki-border-light dark:border-wiki-border-dark pt-4">This page was last edited on 12 June 2024, at 14:32 (UTC).</p>
            <p>
              Text is available under the <a href="#" className="wiki-link">Creative Commons Attribution-ShareAlike License 4.0</a>; additional terms may apply. 
              By using this site, you agree to the <a href="#" className="wiki-link">Terms of Use</a> and <a href="#" className="wiki-link">Privacy Policy</a>. 
              Wikipedia® is a registered trademark of the <a href="#" className="wiki-link">Wikimedia Foundation, Inc.</a>, a non-profit organization.
            </p>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-primary font-medium">
              <a href="#" className="hover:underline">Privacy policy</a>
              <a href="#" className="hover:underline">About Wikipedia</a>
              <a href="#" className="hover:underline">Disclaimers</a>
              <a href="#" className="hover:underline">Contact Wikipedia</a>
              <a href="#" className="hover:underline">Code of Conduct</a>
              <a href="#" className="hover:underline">Developers</a>
              <a href="#" className="hover:underline">Statistics</a>
              <a href="#" className="hover:underline">Cookie statement</a>
              <a href="#" className="hover:underline">Mobile view</a>
            </div>
            
            <div className="flex gap-8 pt-4 grayscale opacity-60 dark:invert">
              <img src="https://picsum.photos/seed/wiki1/120/40" alt="Wikimedia Foundation" className="h-10 border border-gray-200" />
              <img src="https://picsum.photos/seed/wiki2/120/40" alt="Powered by MediaWiki" className="h-10 border border-gray-200" />
            </div>
          </footer>
        </main>

        {/* Right Sidebar - Appearance */}
        <aside className="hidden xl:block w-72 p-6 border-l border-wiki-border-light dark:border-wiki-border-dark text-xs">
          <div className="sticky top-20">
            <div className="flex justify-between items-center mb-6 border-b border-wiki-border-light dark:border-wiki-border-dark pb-2">
              <span className="font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">Appearance</span>
              <button className="wiki-link font-bold uppercase text-[10px]">hide</button>
            </div>
            
            <div className="space-y-8">
              <div>
                <p className="font-bold mb-3 text-gray-600 dark:text-gray-400">Text</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="text-size" checked={textSize === 'small'} onChange={() => setTextSize('small')} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${textSize === 'small' ? 'font-bold' : ''}`}>Small</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="text-size" checked={textSize === 'standard'} onChange={() => setTextSize('standard')} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${textSize === 'standard' ? 'font-bold' : ''}`}>Standard</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="text-size" checked={textSize === 'large'} onChange={() => setTextSize('large')} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${textSize === 'large' ? 'font-bold' : ''}`}>Large</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="font-bold mb-3 text-gray-600 dark:text-gray-400">Width</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="width" checked={!isWide} onChange={() => setIsWide(false)} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${!isWide ? 'font-bold' : ''}`}>Standard</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="width" checked={isWide} onChange={() => setIsWide(true)} className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${isWide ? 'font-bold' : ''}`}>Wide</span>
                  </label>
                </div>
              </div>

              <div>
                <p className="font-bold mb-3 text-gray-600 dark:text-gray-400">Color (beta)</p>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input type="radio" name="theme" className="text-primary focus:ring-primary w-4 h-4" />
                    <span className="group-hover:text-primary">Automatic</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsDarkMode(false)}>
                    <input type="radio" name="theme" checked={!isDarkMode} readOnly className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${!isDarkMode ? 'font-bold' : ''}`}>Light</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group" onClick={() => setIsDarkMode(true)}>
                    <input type="radio" name="theme" checked={isDarkMode} readOnly className="text-primary focus:ring-primary w-4 h-4" />
                    <span className={`group-hover:text-primary ${isDarkMode ? 'font-bold' : ''}`}>Dark</span>
                  </label>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default App;
