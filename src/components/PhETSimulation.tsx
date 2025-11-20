"use client";

import { useState } from "react";

interface Simulation {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
}

const simulations: Simulation[] = [
  // Physics
  {
    id: "balancing-act",
    name: "Balancing Act",
    url: "https://phet.colorado.edu/sims/html/balancing-act/latest/balancing-act_en.html",
    category: "Physics",
    description: "Explore force and torque in a balancing act",
  },
  {
    id: "projectile-motion",
    name: "Projectile Motion",
    url: "https://phet.colorado.edu/sims/html/projectile-motion/latest/projectile-motion_en.html",
    category: "Physics",
    description: "Launch projectiles and study their motion",
  },
  {
    id: "energy-skate-park",
    name: "Energy Skate Park",
    url: "https://phet.colorado.edu/sims/html/energy-skate-park/latest/energy-skate-park_en.html",
    category: "Physics",
    description: "Investigate conservation of energy",
  },
  {
    id: "circuit-construction-kit",
    name: "Circuit Construction Kit",
    url: "https://phet.colorado.edu/sims/html/circuit-construction-kit-dc/latest/circuit-construction-kit-dc_en.html",
    category: "Physics",
    description: "Build and test electrical circuits",
  },
  {
    id: "wave-interference",
    name: "Wave Interference",
    url: "https://phet.colorado.edu/sims/html/wave-interference/latest/wave-interference_en.html",
    category: "Physics",
    description: "Explore wave properties and interference",
  },
  {
    id: "forces-and-motion",
    name: "Forces and Motion",
    url: "https://phet.colorado.edu/sims/html/forces-and-motion-basics/latest/forces-and-motion-basics_en.html",
    category: "Physics",
    description: "Learn about force and motion basics",
  },
  {
    id: "gravity-and-orbits",
    name: "Gravity and Orbits",
    url: "https://phet.colorado.edu/sims/html/gravity-and-orbits/latest/gravity-and-orbits_en.html",
    category: "Physics",
    description: "Explore gravitational forces and orbital motion",
  },
  {
    id: "masses-and-springs",
    name: "Masses and Springs",
    url: "https://phet.colorado.edu/sims/html/masses-and-springs/latest/masses-and-springs_en.html",
    category: "Physics",
    description: "Investigate simple harmonic motion",
  },

  // Chemistry
  {
    id: "acid-base-solutions",
    name: "Acid-Base Solutions",
    url: "https://phet.colorado.edu/sims/html/acid-base-solutions/latest/acid-base-solutions_en.html",
    category: "Chemistry",
    description: "Investigate pH and acid-base chemistry",
  },
  {
    id: "molecule-shapes",
    name: "Molecule Shapes",
    url: "https://phet.colorado.edu/sims/html/molecule-shapes/latest/molecule-shapes_en.html",
    category: "Chemistry",
    description: "Explore molecular geometry and bonding",
  },
  {
    id: "states-of-matter",
    name: "States of Matter",
    url: "https://phet.colorado.edu/sims/html/states-of-matter/latest/states-of-matter_en.html",
    category: "Chemistry",
    description: "Observe phase changes and particle behavior",
  },
  {
    id: "concentration",
    name: "Concentration",
    url: "https://phet.colorado.edu/sims/html/concentration/latest/concentration_en.html",
    category: "Chemistry",
    description: "Learn about solution concentration",
  },
  {
    id: "beers-law-lab",
    name: "Beer's Law Lab",
    url: "https://phet.colorado.edu/sims/html/beers-law-lab/latest/beers-law-lab_en.html",
    category: "Chemistry",
    description: "Explore light absorption and concentration",
  },
  {
    id: "reactants-products-and-leftovers",
    name: "Reactants, Products and Leftovers",
    url: "https://phet.colorado.edu/sims/html/reactants-products-and-leftovers/latest/reactants-products-and-leftovers_en.html",
    category: "Chemistry",
    description: "Explore chemical reactions and stoichiometry",
  },
  {
    id: "build-an-atom",
    name: "Build an Atom",
    url: "https://phet.colorado.edu/sims/html/build-an-atom/latest/build-an-atom_en.html",
    category: "Chemistry",
    description: "Build atoms by adding protons, neutrons, and electrons",
  },

  // Biology
  {
    id: "natural-selection",
    name: "Natural Selection",
    url: "https://phet.colorado.edu/sims/html/natural-selection/latest/natural-selection_en.html",
    category: "Biology",
    description: "Observe evolution through natural selection",
  },
  {
    id: "neuron",
    name: "Neuron",
    url: "https://phet.colorado.edu/sims/html/neuron/latest/neuron_en.html",
    category: "Biology",
    description: "Explore neuron function and action potentials",
  },
  {
    id: "gene-expression-essentials",
    name: "Gene Expression Essentials",
    url: "https://phet.colorado.edu/sims/html/gene-expression-essentials/latest/gene-expression-essentials_en.html",
    category: "Biology",
    description: "Learn about gene expression and protein synthesis",
  },
  {
    id: "food-web",
    name: "Food Web",
    url: "https://phet.colorado.edu/sims/html/food-web/latest/food-web_en.html",
    category: "Biology",
    description: "Explore energy flow in ecosystems",
  },
  {
    id: "membrane-transport",
    name: "Membrane Transport",
    url: "https://phet.colorado.edu/sims/html/membrane-transport/latest/membrane-transport_en.html",
    category: "Biology",
    description: "Explore how substances move across cell membranes",
  },

  // Earth Science
  {
    id: "plate-tectonics",
    name: "Plate Tectonics",
    url: "https://phet.colorado.edu/sims/html/plate-tectonics/latest/plate-tectonics_en.html",
    category: "Earth Science",
    description: "Explore plate tectonics and continental drift",
  },
  {
    id: "greenhouse-effect",
    name: "Greenhouse Effect",
    url: "https://phet.colorado.edu/sims/html/greenhouse-effect/latest/greenhouse-effect_en.html",
    category: "Earth Science",
    description: "Investigate the greenhouse effect and climate",
  },
  {
    id: "wave-on-a-string",
    name: "Wave on a String",
    url: "https://phet.colorado.edu/sims/html/wave-on-a-string/latest/wave-on-a-string_en.html",
    category: "Physics",
    description: "Explore wave properties on a string",
  },
  {
    id: "geometric-optics",
    name: "Geometric Optics",
    url: "https://phet.colorado.edu/sims/html/geometric-optics/latest/geometric-optics_en.html",
    category: "Physics",
    description:
      "Explore how light reflects and refracts using lenses and mirrors",
  },

  // Math
  {
    id: "graphing-lines",
    name: "Graphing Lines",
    url: "https://phet.colorado.edu/sims/html/graphing-lines/latest/graphing-lines_en.html",
    category: "Math",
    description: "Learn about graphing linear equations",
  },
  {
    id: "area-builder",
    name: "Area Builder",
    url: "https://phet.colorado.edu/sims/html/area-builder/latest/area-builder_en.html",
    category: "Math",
    description: "Explore area and perimeter relationships",
  },
  {
    id: "ratio-and-proportion",
    name: "Ratio and Proportion",
    url: "https://phet.colorado.edu/sims/html/ratio-and-proportion/latest/ratio-and-proportion_en.html",
    category: "Math",
    description: "Explore ratios and proportions with visual representations",
  },
];

interface PhETSimulationProps {
  simulationUrl?: string;
}

export default function PhETSimulation({ simulationUrl }: PhETSimulationProps) {
  const [selectedSimulation, setSelectedSimulation] = useState<Simulation>(
    simulations.find((s) => s.url === simulationUrl) || simulations[0]
  );
  const [isLoading, setIsLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const categories = [
    "All",
    ...Array.from(new Set(simulations.map((s) => s.category))),
  ];

  const filteredSimulations =
    selectedCategory === "All"
      ? simulations
      : simulations.filter((s) => s.category === selectedCategory);

  const handleSimulationChange = (simulationId: string) => {
    const simulation = simulations.find((s) => s.id === simulationId);
    if (simulation) {
      setSelectedSimulation(simulation);
      setIsLoading(true);
    }
  };

  return (
    <div className="w-full space-y-6">
      {/* Category Filter */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center">
          <span className="text-2xl mr-2">🏷️</span>
          Filter by Category
        </h3>
        <div className="flex flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                selectedCategory === category
                  ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md border border-gray-200"
              }`}
            >
              {category === "All"
                ? "🌟"
                : category === "Physics"
                ? "⚛️"
                : category === "Chemistry"
                ? "🧪"
                : "🧬"}{" "}
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Simulation Grid */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
        <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">🔬</span>
          Available Simulations ({filteredSimulations.length})
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredSimulations.map((simulation) => (
            <div
              key={simulation.id}
              onClick={() => handleSimulationChange(simulation.id)}
              className={`relative p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                selectedSimulation.id === simulation.id
                  ? "border-blue-500 bg-linear-to-br from-blue-50 to-indigo-50 shadow-lg"
                  : "border-gray-200 bg-white/70 hover:border-blue-300 hover:bg-blue-50/50"
              }`}
            >
              <div className="flex items-start justify-between mb-3">
                <div
                  className={`w-12 h-12 rounded-lg flex items-center justify-center text-xl ${
                    simulation.category === "Physics"
                      ? "bg-blue-100 text-blue-600"
                      : simulation.category === "Chemistry"
                      ? "bg-green-100 text-green-600"
                      : simulation.category === "Biology"
                      ? "bg-purple-100 text-purple-600"
                      : simulation.category === "Earth Science"
                      ? "bg-orange-100 text-orange-600"
                      : "bg-pink-100 text-pink-600"
                  }`}
                >
                  {simulation.category === "Physics"
                    ? "⚛️"
                    : simulation.category === "Chemistry"
                    ? "🧪"
                    : simulation.category === "Biology"
                    ? "🧬"
                    : simulation.category === "Earth Science"
                    ? "🌍"
                    : "🔢"}
                </div>
                {selectedSimulation.id === simulation.id && (
                  <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <h4 className="font-semibold text-gray-900 mb-2 leading-tight">
                {simulation.name}
              </h4>
              <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                {simulation.description}
              </p>
              <div className="flex items-center justify-between">
                <span
                  className={`px-2 py-1 text-xs rounded-full font-medium ${
                    simulation.category === "Physics"
                      ? "bg-blue-100 text-blue-700"
                      : simulation.category === "Chemistry"
                      ? "bg-green-100 text-green-700"
                      : simulation.category === "Biology"
                      ? "bg-purple-100 text-purple-700"
                      : simulation.category === "Earth Science"
                      ? "bg-orange-100 text-orange-700"
                      : "bg-pink-100 text-pink-700"
                  }`}
                >
                  {simulation.category}
                </span>
                <span className="text-xs text-gray-500">Click to select</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Selected Simulation Display */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-gray-800 flex items-center">
            <span className="text-2xl mr-2">🔬</span>
            Interactive Simulation: {selectedSimulation.name}
          </h3>
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span>Live</span>
          </div>
        </div>

        {/* Simulation Description */}
        <div className="mb-6 bg-linear-to-br from-blue-50 to-indigo-50 p-4 rounded-xl border border-blue-200">
          <div className="flex items-center space-x-3 mb-2">
            <span
              className={`px-3 py-1 text-sm rounded-full font-medium ${
                selectedSimulation.category === "Physics"
                  ? "bg-blue-100 text-blue-700"
                  : selectedSimulation.category === "Chemistry"
                  ? "bg-green-100 text-green-700"
                  : selectedSimulation.category === "Biology"
                  ? "bg-purple-100 text-purple-700"
                  : selectedSimulation.category === "Earth Science"
                  ? "bg-orange-100 text-orange-700"
                  : "bg-pink-100 text-pink-700"
              }`}
            >
              {selectedSimulation.category === "Physics"
                ? "⚛️"
                : selectedSimulation.category === "Chemistry"
                ? "🧪"
                : selectedSimulation.category === "Biology"
                ? "🧬"
                : selectedSimulation.category === "Earth Science"
                ? "🌍"
                : "🔢"}{" "}
              {selectedSimulation.category}
            </span>
          </div>
          <p className="text-blue-800 leading-relaxed">
            {selectedSimulation.description}
          </p>
        </div>
        <div className="relative aspect-video bg-linear-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-2xl border border-gray-700">
          {isLoading && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-900/90 backdrop-blur-sm z-10">
              <div className="relative">
                <div className="animate-spin rounded-full h-16 w-16 border-4 border-blue-400 border-t-transparent mb-4"></div>
                <div
                  className="absolute inset-0 rounded-full border-4 border-purple-400 border-t-transparent animate-spin"
                  style={{
                    animationDirection: "reverse",
                    animationDuration: "1.5s",
                  }}
                ></div>
              </div>
              <div className="text-white font-medium text-lg">
                Loading {selectedSimulation.name}...
              </div>
              <div className="text-gray-300 text-sm mt-2">
                Initializing PhET simulation
              </div>
              <div className="mt-4 w-48 bg-gray-700 rounded-full h-2">
                <div className="bg-linear-to-r from-blue-400 to-purple-500 h-2 rounded-full animate-pulse"></div>
              </div>
            </div>
          )}
          <iframe
            src={selectedSimulation.url}
            className="w-full h-full border-0"
            onLoad={() => setIsLoading(false)}
            title={`${selectedSimulation.name} - PhET Simulation`}
            allow="fullscreen"
          />
        </div>
      </div>

      {/* Simulation Info */}
      <div className="bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50 rounded-2xl p-6 border border-blue-200 shadow-lg">
        <h3 className="font-semibold text-blue-900 mb-4 flex items-center text-lg">
          <span className="text-2xl mr-2">💡</span>
          How to Use This Simulation
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-lg">🎮</span>
              <div>
                <h4 className="font-medium text-blue-900">Interact</h4>
                <p className="text-sm text-blue-700">
                  Use controls to explore concepts
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-lg">🤖</span>
              <div>
                <h4 className="font-medium text-blue-900">Get Help</h4>
                <p className="text-sm text-blue-700">
                  Ask AI Tutor for explanations
                </p>
              </div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-lg">📝</span>
              <div>
                <h4 className="font-medium text-blue-900">Record</h4>
                <p className="text-sm text-blue-700">
                  Note observations in Lab Notebook
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <span className="text-blue-500 text-lg">🔄</span>
              <div>
                <h4 className="font-medium text-blue-900">Experiment</h4>
                <p className="text-sm text-blue-700">
                  Try different parameters
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-4 p-3 bg-white/60 rounded-lg border border-blue-300">
          <p className="text-sm text-blue-800">
            <strong>Pro Tip:</strong> Combine this simulation with the AI Tutor
            and Lab Notebook for a complete learning experience!
          </p>
        </div>
      </div>
    </div>
  );
}
