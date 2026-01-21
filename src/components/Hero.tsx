import { motion } from 'framer-motion';

interface HeroProps {
  onStart: () => void;
}

export default function Hero({ onStart }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-400/30 via-purple-400/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Where CA minds meet <br />
            <span className="text-blue-600">community power!</span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed">
            Create and grow your professional blog, newsletter, or firm insights effortlessly with CA Monk Blog.
            Level up your writing using powerful AI features.
          </p>

          <motion.button
            onClick={onStart}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-blue-600 text-white px-12 py-4 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg shadow-blue-600/30"
          >
            Get Started
          </motion.button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="relative max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden">
              <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b border-gray-200">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400"></div>
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <div className="w-3 h-3 rounded-full bg-green-400"></div>
                </div>
                <div className="flex-1 mx-4">
                  <div className="bg-white rounded px-3 py-1 text-xs text-slate-500 max-w-xs">
                    cammonkblog.com/dashboard
                  </div>
                </div>
              </div>

              <div className="p-8 bg-gradient-to-br from-slate-50 to-white">
                <div className="flex gap-6">
                  <div className="w-16 bg-slate-900 rounded-xl p-3 space-y-3 h-fit">
                    <div className="w-8 h-8 bg-blue-600 rounded-lg mx-auto"></div>
                    <div className="w-8 h-1 bg-slate-700 rounded mx-auto"></div>
                    <div className="w-8 h-1 bg-slate-700 rounded mx-auto"></div>
                    <div className="w-8 h-1 bg-slate-700 rounded mx-auto"></div>
                  </div>

                  <div className="flex-1 space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-xl p-6 border-2 border-blue-100 shadow-lg cursor-pointer hover:border-blue-300 transition-colors"
                      >
                        <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">Create Blog</h3>
                        <p className="text-sm text-slate-600">Start writing a new post</p>
                      </motion.div>

                      <motion.div
                        whileHover={{ y: -4 }}
                        className="bg-white rounded-xl p-6 border border-slate-200 shadow-lg cursor-pointer hover:border-slate-300 transition-colors"
                      >
                        <div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mb-4">
                          <svg className="w-6 h-6 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 mb-2">View Blogs</h3>
                        <p className="text-sm text-slate-600">Recent Articles</p>
                      </motion.div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-white rounded-lg p-4 border border-slate-200">
                        <div className="text-2xl font-bold text-blue-600">247</div>
                        <div className="text-xs text-slate-500">Total Posts</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200">
                        <div className="text-2xl font-bold text-slate-900">12.4K</div>
                        <div className="text-xs text-slate-500">Views</div>
                      </div>
                      <div className="bg-white rounded-lg p-4 border border-slate-200">
                        <div className="text-2xl font-bold text-slate-900">1.2K</div>
                        <div className="text-xs text-slate-500">Followers</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="absolute -left-12 top-20 hidden lg:block"
            >
              <div className="bg-white rounded-xl p-4 shadow-xl border border-slate-200 w-48">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-blue-400 rounded-full"></div>
                  <div>
                    <div className="text-sm font-semibold text-slate-900">Rajesh Kumar</div>
                    <div className="text-xs text-slate-500">CA, Tax Expert</div>
                  </div>
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  Published 45 articles this month
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -right-12 bottom-20 hidden lg:block"
            >
              <div className="bg-white rounded-xl p-4 shadow-xl border border-slate-200 w-56">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-slate-900">Monthly Analytics</span>
                  <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <div className="flex items-end gap-1 h-16">
                  <div className="flex-1 bg-blue-200 rounded-t" style={{ height: '40%' }}></div>
                  <div className="flex-1 bg-blue-300 rounded-t" style={{ height: '60%' }}></div>
                  <div className="flex-1 bg-blue-400 rounded-t" style={{ height: '80%' }}></div>
                  <div className="flex-1 bg-blue-600 rounded-t" style={{ height: '100%' }}></div>
                </div>
                <div className="text-xs text-slate-500 mt-2">+32% from last month</div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}