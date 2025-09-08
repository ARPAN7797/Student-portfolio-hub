import { useRouter } from "next/router";
import students from "../../data/dummyData";

export default function StudentProfile() {
  const router = useRouter();
  const { id } = router.query;
  const student = students.find(s => s.id === parseInt(id));

  if (!student) return <p className="p-6">Student not found.</p>;

  return (
    <div className="min-h-screen bg-gradient-to-r from-indigo-500 via-purple-600 to-pink-500 flex items-center justify-center px-4 py-10">
      <div className="bg-white/20 backdrop-blur-md rounded-2xl shadow-2xl p-8 w-full max-w-3xl text-white">
        <h1 className="text-4xl font-extrabold text-glow">{student.name}</h1>
        <p className="text-white/90 mt-2 text-glow">{student.bio}</p>
        <div className="mt-6">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">🌟Skills</h2>
          <div className="flex flex-wrap gap-2 mt-3">
            {student.skills.map((skill, i) => (
              <span
                key={i}
                className="bg-black/50 text-white text-sm px-3 py-1 rounded-full shadow-lg text-glow"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">📂 Projects</h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            {student.projects.map((proj, i) => (
              <li key={i}>{proj}</li>
            ))}
          </ul>
        </div>

        <div className="mt-6">
          <h2 className="text-2xl font-bold">🏆 Certificates</h2>
          <ul className="list-disc pl-6 mt-3 space-y-1">
            {student.certificates.map((cert, i) => (
              <li key={i}>{cert}</li>
            ))}
          </ul>
        </div>

        <button
          onClick={() => router.back()}
          className="mt-8 w-full bg-yellow-400 text-black py-3 rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          ⬅ Back
        </button>
      </div>
    </div>
  );
}
