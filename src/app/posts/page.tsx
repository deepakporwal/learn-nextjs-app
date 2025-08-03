'use client';

import { useState } from "react"

export default function Page() {
  // Don't await the data fetching function
  const [posts, setPosts] = useState('')

  function onBtnclick(){
    setPosts('hello world');
  }
  
  return (
    <div>
      <main className="flex flex-col gap-10 items-center w-full">
        <div className="flex flex-col items-center gap-2">
          <h1>Posts Page</h1>
          <input value={posts} />
          <button
            className="bg-gradient-to-r from-blue-500 via-pink-400 to-yellow-400 text-white font-bold rounded-xl p-3 mt-2 shadow-lg hover:from-blue-600 hover:via-pink-500 hover:to-yellow-500 transition-all duration-200"
            type="button"
            onClick={onBtnclick}
          >
            Click me
          </button>
        </div>
      </main>
    </div>
  );
}