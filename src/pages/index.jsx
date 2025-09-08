import { useState } from "react";
import { motion } from "framer-motion";
import Card from "../components/Card";
import SearchBar from "../components/SearchBar";
import Filter from "../components/Filter";
import students from "../data/dummyData";

export default function Home() {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("");

  const filtered = students.filter(s =>
    (s.name.toLowerCase().includes(query.toLowerCase()) ||
      s.skills.some(skill => skill.toLowerCase().includes(query.toLowerCase()))) &&
    (filter ? s.skills.includes(filter) : true)
  );

  const allSkills = [...new Set(students.flatMap(s => s.skills))];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-500 via-purple-600 to-blue-500 text-white">
      
      <nav className="bg-black/30 backdrop-blur-md py-4 px-6 flex justify-between items-center shadow-lg">
        <h1 className="text-2xl font-extrabold">✨ Skill Gallery</h1>
        
      </nav>

      
      <header className="text-center py-16 px-6">
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold bg-gradient-to-r from-yellow-300 via-pink-300 to-green-300 bg-clip-text text-transparent drop-shadow-lg"
        >
          🚀 Showcase Your Skills Platfrom
        </motion.h2>
        <p className="mt-4 text-lg text-white/90">
          A Professional hub to explore <span className="text-yellow-300">Skills</span>,{" "}
          <span className="text-green-300">projects</span>, and{" "}
          <span className="text-pink-300">certificates</span>.
        </p>
      </header>

      
      <div className="max-w-5xl mx-auto px-6">
        <SearchBar query={query} setQuery={setQuery} />
        <Filter skills={allSkills} setFilter={setFilter} />
      </div>

      
      <main className="max-w-6xl mx-auto px-6 pb-12">
        {filtered.length > 0 ? (
          <motion.div
            className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: { staggerChildren: 0.2 }
              }
            }}
          >
            {filtered.map(student => (
              <Card key={student.id} student={student} />
            ))}
          </motion.div>
        ) : (
          <p className="text-center text-white mt-12 text-lg">No students found ❌</p>
        )}
      </main>
    </div>
  );
}