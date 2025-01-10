"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import ReactMarkdown from "react-markdown";
import {
  ArrowLeft,
  Sparkles,
  Brain,
  Rocket,
  Send,
  ImageIcon,
} from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function WelcomePage() {
  const [textInp, setTextInp] = useState("Reel");
  const [responseText, setResponseText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!textInp.trim()) return;

    try {
      const res = await fetch(
        "https://tan4585-langflow-social-media.hf.space/api/v1/run/e8f14da3-dd8d-46df-a403-053f0b497f33?stream=false",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer <TOKEN>",
            "Content-Type": "application/json",
            "x-api-key": "sk-I7jRcbJ_rXWCJYEpzq6iBf9pwmhKZOXWhgpHxxQgvdo",
          },
          body: JSON.stringify({
            input_value: textInp,
            output_type: "chat",
            input_type: "chat",
            tweaks: {
              "AstraDBToolComponent-rLAUY": {},
              "ParseData-OP00Z": {},
              "GroqModel-Ea1Q4": {},
              "ChatInput-kwiJ3": {},
              "ChatOutput-2hfcf": {},
              "CombineText-yA5Rk": {},
            },
          }),
        }
      );

      const data = await res.json();
      const extractedText =
        data.outputs?.[0]?.outputs?.[0]?.results?.message?.text ||
        "No response text available.";
      setResponseText(extractedText);
    } catch (error) {
      console.error("Error:", error);
      setResponseText("Error fetching response. Please try again.");
    }
  };

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
        <form>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex gap-3"
          >
            <Button
              variant="outline"
              className="text-slate-400 hover:text-white"
            >
              <ImageIcon className="w-4 h-4 mr-2" />
              Media
            </Button>

            <input
              type="text"
              onChange={(e) => setTextInp(e.target.value)}
              className="bg-slate-800/50 border-slate-700 text-white placeholder:text-slate-500 flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
            />
            <Button
              onClick={handleSubmit}
              className="bg-purple-600 hover:bg-purple-700"
            >
              <Send className="w-4 h-4" />
            </Button>
          </motion.div>
        </form>
      </main>
      {responseText && (
        <div className="flex items-center justify-center w-full ">
          <ReactMarkdown className="w-3/4 rounded-sm bg-slate-800/50 border-2 border-slate-700 px-8 py-4 mb-10">
            {responseText}
          </ReactMarkdown>
        </div>
      )}
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
