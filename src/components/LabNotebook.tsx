"use client";

import { useState } from "react";

interface Note {
  id: string;
  title: string;
  content: string;
  timestamp: Date;
  tags: string[];
}

export default function LabNotebook() {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: "1",
      title: "Initial Observations",
      content:
        "Started exploring the Virtual Lab. The interface looks promising with multiple simulation options.",
      timestamp: new Date("2025-11-20T10:00:00"), // Fixed timestamp
      tags: ["setup", "interface"],
    },
  ]);
  const [currentNote, setCurrentNote] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteTags, setNoteTags] = useState("");
  const [filterTag, setFilterTag] = useState("");

  const addNote = () => {
    if (!currentNote.trim()) return;

    const newNote: Note = {
      id: Date.now().toString(),
      title: noteTitle || `Observation ${notes.length + 1}`,
      content: currentNote,
      timestamp: new Date(),
      tags: noteTags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    setNotes((prev) => [newNote, ...prev]);
    setCurrentNote("");
    setNoteTitle("");
    setNoteTags("");
  };

  const deleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  const allTags = Array.from(new Set(notes.flatMap((note) => note.tags)));
  const filteredNotes = filterTag
    ? notes.filter((note) => note.tags.includes(filterTag))
    : notes;

  return (
    <div className="space-y-6">
      {/* New Note Input */}
      <div className="bg-linear-to-br from-green-50 via-emerald-50 to-teal-50 p-6 rounded-2xl border border-green-200 shadow-lg animate-slide-in-right">
        <h3 className="text-lg font-semibold text-green-900 mb-4 flex items-center">
          <span className="text-2xl mr-2">📝</span>
          Add New Observation
        </h3>
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
              placeholder="Observation title..."
              className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 text-sm">
              ✨
            </span>
          </div>
          <div className="relative">
            <textarea
              value={currentNote}
              onChange={(e) => setCurrentNote(e.target.value)}
              placeholder="Record your observations, measurements, and insights..."
              className="w-full h-32 px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm resize-none transition-all duration-200"
            />
            <span className="absolute right-3 bottom-3 text-green-400 text-sm">
              {currentNote.length}/500
            </span>
          </div>
          <div className="relative">
            <input
              type="text"
              value={noteTags}
              onChange={(e) => setNoteTags(e.target.value)}
              placeholder="Tags (comma-separated): experiment, physics, chemistry..."
              className="w-full px-4 py-3 border border-green-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent bg-white/80 backdrop-blur-sm transition-all duration-200"
            />
            <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-green-400 text-sm">
              🏷️
            </span>
          </div>
          <button
            onClick={addNote}
            disabled={!currentNote.trim()}
            className="w-full px-6 py-3 bg-linear-to-r from-green-500 to-emerald-500 text-white rounded-xl hover:from-green-600 hover:to-emerald-600 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2 animate-glow"
          >
            <span className="font-medium">Add Observation</span>
            <span className="text-lg">✨</span>
          </button>
        </div>
      </div>

      {/* Filter by Tags */}
      {allTags.length > 0 && (
        <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-4 border border-white/40 shadow-lg animate-slide-in-right">
          <h4 className="text-sm font-semibold text-gray-800 mb-3 flex items-center">
            <span className="text-lg mr-2">🏷️</span>
            Filter by Tags
          </h4>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterTag("")}
              className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                filterTag === ""
                  ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                  : "bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md border border-gray-200"
              }`}
            >
              🌟 All Notes
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setFilterTag(tag)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 transform hover:scale-105 ${
                  filterTag === tag
                    ? "bg-linear-to-r from-blue-500 to-blue-600 text-white shadow-lg"
                    : "bg-white/70 text-gray-700 hover:bg-white/90 hover:shadow-md border border-gray-200"
                }`}
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Notes List */}
      <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 border border-white/40 shadow-lg animate-slide-in-right">
        <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
          <span className="text-2xl mr-2">📚</span>
          Your Observations ({filteredNotes.length})
        </h4>
        <div className="space-y-4 max-h-96 overflow-y-auto">
          {filteredNotes.map((note) => (
            <div
              key={note.id}
              className="bg-white rounded-xl p-5 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02] animate-fade-in"
            >
              <div className="flex justify-between items-start mb-3">
                <h4 className="text-lg font-semibold text-gray-900 flex items-center">
                  <span className="text-xl mr-2">🔬</span>
                  {note.title}
                </h4>
                <button
                  onClick={() => deleteNote(note.id)}
                  className="text-red-500 hover:text-red-700 transition-all duration-200 transform hover:scale-110 p-1 rounded-full hover:bg-red-50"
                  title="Delete observation"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                </button>
              </div>
              <p className="text-gray-700 mb-4 leading-relaxed">
                {note.content}
              </p>
              <div className="flex flex-wrap items-center justify-between gap-3">
                <div className="flex flex-wrap gap-2">
                  {note.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-linear-to-r from-blue-100 to-indigo-100 text-blue-800 text-xs rounded-full border border-blue-200 flex items-center"
                    >
                      <span className="mr-1">#</span>
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <span className="mr-2">🕒</span>
                  {note.timestamp.toLocaleString()}
                </div>
              </div>
            </div>
          ))}
          {filteredNotes.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4 animate-bounce">📝</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                No observations yet
              </h3>
              <p className="text-gray-600 mb-4">
                Start recording your scientific observations and insights!
              </p>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-700 rounded-full text-sm">
                <span className="mr-2">💡</span>
                Try adding your first observation above
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
