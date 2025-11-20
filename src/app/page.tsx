"use client";

import { useState } from "react";
import PhETSimulation from "../components/PhETSimulation";
import AITutor from "../components/AITutor";
import LabNotebook from "../components/LabNotebook";

type Tab = "simulations" | "notebook" | "ict";

export default function Home() {
  const [activeTab, setActiveTab] = useState<Tab>("simulations");

  const tabs = [
    {
      id: "simulations" as Tab,
      label: "Simulations",
      icon: "🧪",
      color: "blue",
    },
    {
      id: "notebook" as Tab,
      label: "Lab Notebook",
      icon: "📝",
      color: "green",
    },
    { id: "ict" as Tab, label: "ICT Tools", icon: "🧮", color: "purple" },
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-xl border-b border-white/30 shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-linear-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">VL</span>
              </div>
              <div>
                <h1 className="text-2xl font-bold bg-linear-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Virtual Lab
                </h1>
                <p className="text-sm text-gray-600">
                  AI-Powered Science Learning
                </p>
              </div>
            </div>
            <nav className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                    activeTab === tab.id
                      ? `bg-${tab.color}-500 text-white shadow-lg`
                      : `bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md`
                  }`}
                >
                  <span className="text-lg">{tab.icon}</span>
                  <span className="hidden sm:inline">{tab.label}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>
      </header>
      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="w-full">
          {/* Main Area */}
          <div className="w-full">
            <div className="bg-white/70 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/30 transition-all duration-300 hover:shadow-3xl">
              <div className="mb-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-4xl font-bold bg-linear-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    {tabs.find((tab) => tab.id === activeTab)?.label}
                  </h2>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 bg-white/60 px-3 py-1 rounded-full">
                    <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                    <span>Active</span>
                  </div>
                </div>
                <p className="text-gray-600 text-lg leading-relaxed">
                  {activeTab === "simulations" &&
                    "Explore interactive science simulations and experiments powered by PhET"}
                  {activeTab === "notebook" &&
                    "Record your observations and experimental data with intelligent tagging"}
                  {activeTab === "ict" &&
                    "Access calculators, graph plotters, and analysis tools for data visualization"}
                </p>
              </div>

              <div className="transition-all duration-500 ease-in-out">
                {activeTab === "simulations" && <PhETSimulation />}
                {activeTab === "notebook" && <LabNotebook />}
                {activeTab === "ict" && (
                  <div className="space-y-8">
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        🧮 Interactive Tools
                      </h3>
                      <p className="text-gray-600">
                        Coming soon - Advanced calculation and visualization
                        tools
                      </p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                      <div className="bg-linear-to-br from-blue-50 via-blue-100 to-indigo-100 p-8 rounded-2xl border border-blue-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        <div className="text-5xl mb-4 group-hover:animate-bounce">
                          🧮
                        </div>
                        <h3 className="font-bold text-blue-900 mb-3 text-xl">
                          Scientific Calculator
                        </h3>
                        <p className="text-blue-700 mb-4 leading-relaxed">
                          Advanced calculations for physics and chemistry with
                          unit conversions
                        </p>
                        <button className="w-full px-6 py-3 bg-linear-to-r from-blue-500 to-blue-600 text-white rounded-xl hover:from-blue-600 hover:to-blue-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                          <span className="font-medium">Coming Soon</span>
                        </button>
                      </div>
                      <div className="bg-linear-to-br from-green-50 via-green-100 to-emerald-100 p-8 rounded-2xl border border-green-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        <div className="text-5xl mb-4 group-hover:animate-bounce">
                          📊
                        </div>
                        <h3 className="font-bold text-green-900 mb-3 text-xl">
                          Graph Plotter
                        </h3>
                        <p className="text-green-700 mb-4 leading-relaxed">
                          Plot functions and analyze data visually with
                          interactive charts
                        </p>
                        <button className="w-full px-6 py-3 bg-linear-to-r from-green-500 to-green-600 text-white rounded-xl hover:from-green-600 hover:to-green-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                          <span className="font-medium">Coming Soon</span>
                        </button>
                      </div>
                      <div className="bg-linear-to-br from-purple-50 via-purple-100 to-pink-100 p-8 rounded-2xl border border-purple-200 hover:shadow-xl transition-all duration-300 transform hover:scale-105 group">
                        <div className="text-5xl mb-4 group-hover:animate-bounce">
                          📏
                        </div>
                        <h3 className="font-bold text-purple-900 mb-3 text-xl">
                          Unit Converter
                        </h3>
                        <p className="text-purple-700 mb-4 leading-relaxed">
                          Convert between different units of measurement with
                          smart suggestions
                        </p>
                        <button className="w-full px-6 py-3 bg-linear-to-r from-purple-500 to-purple-600 text-white rounded-xl hover:from-purple-600 hover:to-purple-700 transition-all duration-200 transform hover:scale-105 shadow-lg">
                          <span className="font-medium">Coming Soon</span>
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* AI Tutor Floating Button */}
      <AITutor />

      {/* Footer */}
      <footer className="bg-white/50 backdrop-blur-md border-t border-white/30 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center text-gray-600">
            <p>
              &copy; 2025 Virtual Lab. Enhancing science education through
              interactive learning.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
