"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import {
  ArrowLeft,
  Sparkles,
  Brain,
  Rocket,
  Send,
  ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";

export default function WelcomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      {/* Header */}
      <header className="p-4 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-2">
          <Sparkles className="w-6 h-6 text-purple-500" />
          <h1 className="text-xl font-semibold">
            <a href="/">SocialAI</a>
          </h1>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="text-slate-400 hover:text-white"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
      </header>

      {/* Main Content */}
      <main className="container max-w-2xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-400 to-pink-500 text-transparent bg-clip-text">
            Transform Your Content Game
          </h2>
          <p className="text-slate-400">
            Unleash creativity with AI-powered content suggestions and analytics
          </p>
        </motion.div>

        <div className="grid gap-6 mb-12">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
            >
              <Card className="bg-slate-800/50 border-slate-700">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 text-purple-400">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-slate-400">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Input Area */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="flex gap-3"
        >
          <Button variant="outline" className="text-slate-400 hover:text-white">
            <ImageIcon className="w-4 h-4 mr-2" />
            Media
          </Button>
          <Input
            placeholder="Share your content idea..."
            className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500"
          />
          <Button className="bg-purple-600 hover:bg-purple-700">
            <Send className="w-4 h-4" />
          </Button>
        </motion.div>
      </main>
    </div>
  );
}

const features = [
  {
    icon: <Brain className="w-6 h-6" />,
    title: "AI-Powered Analysis",
    description:
      "Get deep insights into your content performance with advanced AI algorithms",
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    title: "Content Strategy",
    description: "Develop winning strategies with data-driven recommendations",
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "Creative Enhancement",
    description:
      "Transform good content into great content with AI-powered suggestions",
  },
];
