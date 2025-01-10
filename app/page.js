import { Sparkles, Zap, Trophy, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { AnimatedText } from "./animatedtext.jsx";
export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 text-white">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-800 bg-gray-950/80 px-4 py-4 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <span className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">
            SocialAI
          </span>
        </div>
      </header>

      {/* Hero Section */}
      <section className="flex pt-40 mb-40 flex-col items-center justify-center px-4 pt-20">
        <div className="mx-auto max-w-4xl space-y-8 text-center">
          <AnimatedText />
          <p
            className="text-xl text-gray-400 animate-fadeIn"
            style={{ animationDelay: "0.5s" }}
          >
            Harness the power of artificial intelligence to skyrocket your
            social media performance and engagement.
          </p>
          <a href="/more" rel="noopener noreferrer">
            <Button
              size="lg"
              className="animate-fadeIn bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold py-3 px-8 rounded-full text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ animationDelay: "1s" }}
            >
              Get Started Free
            </Button>
          </a>
        </div>
      </section>

      {/* Features Grid */}
      <section className="left-0 right-0 px-4 py-12 bg-gradient-to-t from-black/90 to-black/40 backdrop-blur-lg">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {/* Growth Analytics */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-600/20 via-purple-500/10 to-purple-400/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-purple-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="rounded-lg bg-purple-500/20 p-3 w-fit">
                  <Sparkles className="h-8 w-8 text-purple-300" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-purple-200">
                  Growth Analytics
                </h3>
                <p className="mt-4 text-base text-purple-100/70">
                  Track your account growth, reach, and engagement rates with
                  AI-powered insights.
                </p>
              </div>
            </div>

            {/* Content Performance */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-600/20 via-blue-500/10 to-blue-400/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 via-blue-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="rounded-lg bg-blue-500/20 p-3 w-fit">
                  <Zap className="h-8 w-8 text-blue-300" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-blue-200">
                  Content Performance
                </h3>
                <p className="mt-4 text-base text-blue-100/70">
                  Analyze which content types drive the most engagement and
                  reach for your audience.
                </p>
              </div>
            </div>

            {/* Competitor Analysis */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-pink-600/20 via-pink-500/10 to-pink-400/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-pink-500/30 via-pink-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="rounded-lg bg-pink-500/20 p-3 w-fit">
                  <Trophy className="h-8 w-8 text-pink-300" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-pink-200">
                  Competitor Analysis
                </h3>
                <p className="mt-4 text-base text-pink-100/70">
                  Benchmark your performance against competitors and identify
                  opportunities.
                </p>
              </div>
            </div>

            {/* Audience Insights */}
            <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-emerald-600/20 via-emerald-500/10 to-emerald-400/5 p-8 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-emerald-500/20">
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/30 via-emerald-400/20 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="rounded-lg bg-emerald-500/20 p-3 w-fit">
                  <Target className="h-8 w-8 text-emerald-300" />
                </div>
                <h3 className="mt-6 text-2xl font-bold text-emerald-200">
                  Audience Insights
                </h3>
                <p className="mt-4 text-base text-emerald-100/70">
                  Understand your follower`s behavior, interests, and peak
                  engagement times.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
