import Link from "next/link";

export default function Card({ student }) {
  return (
    <div className="p-6 rounded-2xl bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 shadow-lg transform transition hover:scale-105">
      <h2 className="text-2xl font-extrabold text-glow">{student.name}</h2>
      <p className="mt-2 text-sm opacity-90 text-white text-glow">{student.bio}</p>

      <div className="mt-4 flex flex-wrap gap-2">
        {student.skills.map((skill, i) => (
          <span
            key={i}
            className="bg-black/50 text-white text-sm px-3 py-1 rounded-full shadow-lg text-glow"
          >
            {skill}
          </span>
        ))}
      </div>

      
      <Link
        href={`/student/${student.id}`}
      className="mt-4 inline-block px-4 py-2 rounded-lg bg-white/20 text-white font-semibold hover:bg-white/30 transition shadow-md backdrop-blur-md"
      >
      View Profile →
    </Link>
    </div >
  );
}
 