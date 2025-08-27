import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div className="min-h-screen bg-white text-blue-900 flex flex-col items-center justify-center px-4 py-12">
      <div className="bg-blue-100 rounded-3xl p-6 shadow-xl w-full max-w-3xl">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
            <img
              src="../../public/images/dev.jpg"
              alt="daksh"
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex-1">
            <h1 className="text-3xl font-bold mb-4">Hi, I'm Daksh 👋</h1>
            <p className="text-lg mb-4">
              I'm the developer of this site — passionate about building intuitive and
              powerful web apps. With a strong focus on JavaScript, React, Next.js,
              and backend tools like Supabase & Node.js, I strive to blend
              performance with great UI.
            </p>
            <p className="text-md mb-4">
              I love learning, sharing, and pushing the boundaries of what's possible
              on the web. If you're into tech, design, or just cool ideas — let's
              connect!
            </p>

            <div className="flex gap-6 mt-6 text-blue-700 text-xl">
              <a
                href="https://github.com/iamdakshsainii"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-900 transition"
              >
                <FaGithub />
              </a>
              <a
                href="https://linkedin.com/in/daksh-saini"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-900 transition"
              >
                <FaLinkedin />
              </a>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
