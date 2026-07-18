import { Link } from "react-router-dom";
import { Home as HomeIcon, Bookmark, Moon, Sun, LogIn, UserPlus } from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function MobileNav({ activePage, isLoggedIn = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-950/95 px-2 py-1.5 backdrop-blur lg:hidden">
      <Link
        to="/"
        className={`rounded-full p-2 ${activePage === "home" ? "text-brand" : ""}`}
      >
        <HomeIcon className="size-6" />
      </Link>
      <Link
        to="/saved"
        className={`rounded-full p-2 ${activePage === "saved" ? "text-brand" : ""}`}
      >
        <Bookmark className="size-6" />
      </Link>
      <button onClick={toggleTheme} className="rounded-full p-2">
        {theme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
      </button>

      {!isLoggedIn && (
        <>
          <Link to="/login" className="rounded-full p-2">
            <LogIn className="size-6" />
          </Link>
          <Link to="/login" className="text-brand rounded-full p-2">
            <UserPlus className="size-6" />
          </Link>
        </>
      )}
    </nav>
  );
}

export default MobileNav;