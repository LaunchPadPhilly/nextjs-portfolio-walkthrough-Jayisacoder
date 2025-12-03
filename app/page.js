import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl text-center">
        <h1 className="text-6xl font-bold mb-6 text-gray-900">
          Welcome to my Portfolio!
        </h1>
        
        <p className="text-xl text-gray-600 mb-8">
          Great projects come with tenacity and patience. Welcome to my portfolio!
        </p>

        <div className="flex gap-4 justify-center mb-8">
          <Link href="/about" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition">
            About Me
          </Link>
          <Link href="/projects" className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-3 px-6 rounded-lg transition">
            View Projects
          </Link>
          <Link href="/contact" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition">
            Contact
          </Link>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6 text-left">
          <h2 className="text-2xl font-bold mb-4 text-blue-900">
            My name is Jose
          </h2>
          <ul className="space-y-2 text-blue-800">
            
            
            <li>✏️ I'm a tech enthusiast from Philadelphia and a graduate of ASPIRA Bilingual Charter Cyber School.
               I'm currently expanding my skills in React 19, Python, JavaScript, building computers and building robots, building a strong foundation for a future career in Cybersecurity.
                My goal is to develop secure, efficient systems that protect information, prevent threats, and contribute positively to the tech community.</li>
            
            
            
            
          </ul>
        </div>
    
        <div className="mt-8 p-4 bg-yellow-50 border-2 border-yellow-200 rounded-lg">
          
          <p className="text-yellow-900 font-semibold">
            💡 Tip: Check the README.md for detailed instructions and examples!
          </p>
        </div>
      </div>
    </div>
  )
}
