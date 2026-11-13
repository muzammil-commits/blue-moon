import React from 'react';
import { Trophy, FolderGit2, Globe, Headphones } from 'lucide-react';

export const StatsBar: React.FC = () => {
  return (
    <section className="relative -mt-8 sm:-mt-10 z-20 max-w-6xl mx-auto px-4 sm:px-8">
      <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl border border-slate-100 p-5 sm:p-7 backdrop-blur-sm">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 items-center divide-y lg:divide-y-0 lg:divide-x divide-slate-100">
          
          {/* Stat 1 */}
          <div className="flex items-center gap-4 pt-3 lg:pt-0 lg:px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-blue-50 text-[#0866F5] flex items-center justify-center flex-shrink-0 shadow-sm border border-blue-100/60">
              <Trophy className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                12<span className="text-[#0866F5]">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Years of Experience
              </div>
            </div>
          </div>

          {/* Stat 2 */}
          <div className="flex items-center gap-4 pt-3 lg:pt-0 lg:px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm border border-indigo-100/60">
              <FolderGit2 className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                325<span className="text-indigo-600">+</span>
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Completed Projects
              </div>
            </div>
          </div>

          {/* Stat 3 */}
          <div className="flex items-center gap-4 pt-3 lg:pt-0 lg:px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-cyan-50 text-[#087EFF] flex items-center justify-center flex-shrink-0 shadow-sm border border-cyan-100/60">
              <Globe className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-base sm:text-lg font-extrabold text-slate-900 leading-tight">
                Serving Clients
              </div>
              <div className="text-xs sm:text-sm font-bold text-[#087EFF]">
                Worldwide
              </div>
            </div>
          </div>

          {/* Stat 4 */}
          <div className="flex items-center gap-4 pt-3 lg:pt-0 lg:px-4">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl bg-purple-50 text-[#7936F2] flex items-center justify-center flex-shrink-0 shadow-sm border border-purple-100/60">
              <Headphones className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
            <div>
              <div className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-none">
                24/7
              </div>
              <div className="text-xs sm:text-sm font-semibold text-slate-600 mt-1">
                Dedicated Support
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

