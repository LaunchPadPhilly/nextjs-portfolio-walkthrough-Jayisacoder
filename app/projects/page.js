export default function Projects() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">My Projects</h1>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {/* Project 1 */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
            <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
              <p className="text-white font-bold text-xl">Portfolio Website</p>
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold mb-2">Portfolio Website</h3>
              <p className="text-gray-600 mb-4">
                A responsive personal portfolio built with Next.js and Tailwind CSS to showcase my projects and skills.
              </p>
              <div className="flex gap-2 flex-wrap">
                <span className="text-sm bg-blue-100 text-blue-800 px-3 py-1 rounded">Next.js</span>
                <span className="text-sm bg-green-100 text-green-800 px-3 py-1 rounded">React</span>
                <span className="text-sm bg-purple-100 text-purple-800 px-3 py-1 rounded">Tailwind</span>
              </div>
            </div>
          </div>

          {/* TODO: Add 2 more project cards */}
          <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition">
  {/* Project image */}
  <div className="h-48 bg-gradient-to-r from-blue-400 to-blue-600 flex items-center justify-center">
    <p className="text-white font-bold">Project Screenshot</p>
  </div>
  
  {/* Project details */}
  <div className="p-6">
    <h3 className="text-2xl font-bold mb-2">Project Name</h3>
    <p className="text-gray-600 mb-4">
      Brief description of what this project does.
    </p>
    <div className="flex gap-2">
      <span className="text-sm bg-gray-200 px-3 py-1 rounded">HTML</span>
      <span className="text-sm bg-gray-200 px-3 py-1 rounded">CSS</span>
    </div>
  </div>
</div>
        </div>

        <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
          <h3 className="font-bold text-blue-900 mb-2">🚀 More Projects Coming Soon!</h3>
          <p className="text-blue-800">
            I&apos;m constantly working on new projects and learning new technologies. 
            Check back regularly to see what I&apos;m building next!
          </p>
        </div>
      </div>
    </div>
  )
}
