'use client';
import Game from './components/Game';
import { useState } from "react";

export default function Home() {
  const [theme, setTheme] = useState("garden");

  const toggleTheme = () => {
    setTheme(theme === "garden" ? "dark" : "garden");
    document.documentElement.setAttribute("data-theme", theme === "garden" ? "dark" : "garden");
  };

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <header className="relative flex w-full justify-center items-center h-full flex-col sm:flex-row"> {/* Add flex-col for mobile */}
        <button onClick={toggleTheme} className="btn btn-secondary mt-4 mb-4 z-10">Toggle Theme</button> {/* Add z-10 here */}
        
        <div className="absolute top-10 left-0 w-full flex flex-col items-center sm:top-20"> {/* Adjust top positioning */}
          <div className="divider text-xl sm:text-4xl">GAME</div> {/* Adjust text size */}
        </div>
        
      </header>
      <main className="flex w-full flex-col items-center h-full">
        <div className="flex w-full justify-center h-full flex-col sm:flex-row"> {/* Add flex-col for mobile */}
          <Game />
        </div>
      </main>
    </div>
  );
}
