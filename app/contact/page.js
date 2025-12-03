export default function Contact() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-12">Get In Touch</h1>
        
        <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
          <p className="text-xl text-gray-700 mb-8">
            I&apos;d love to hear from you! Feel free to reach out through any of these channels.
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <span className="text-3xl">📧</span>
              <div>
                <p className="font-bold text-gray-900">Email</p>
                <a href="mailto:developer@example.com" className="text-blue-500 hover:underline">
                  developer@example.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">🔗</span>
              <div>
                <p className="font-bold text-gray-900">LinkedIn</p>
                <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  linkedin.com/in/yourprofile
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">💻</span>
              <div>
                <p className="font-bold text-gray-900">GitHub</p>
                <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  github.com/yourusername
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <span className="text-3xl">🐦</span>
              <div>
                <p className="font-bold text-gray-900">Twitter</p>
                <a href="https://twitter.com/yourhandle" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
                  @yourhandle
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-2 border-blue-200 rounded-lg p-8">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">Let&apos;s Build Something Amazing Together!</h2>
          <p className="text-gray-700 mb-4">
            I&apos;m always interested in hearing about new projects and opportunities. 
            Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </p>
          <div className="flex gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span>📍</span>
              <span>Available for remote work</span>
            </div>
            <div className="flex items-center gap-2">
              <span>⏰</span>
              <span>Response time: 24-48 hours</span>
            </div>
          </div>
        </div>

        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6">
          <h3 className="font-bold text-green-900 mb-2">💡 Optional Enhancements:</h3>
          <ul className="text-green-800 space-y-1">
            <li>• Add a contact form (we'll learn this in Week 4!)</li>
            <li>• Include your location or timezone</li>
            <li>• Add social media icons</li>
            <li>• List your availability for projects</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
