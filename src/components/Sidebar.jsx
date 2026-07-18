import { Link } from "react-router-dom";
import {
  Home as HomeIcon,
  Bookmark,
  Moon,
  Sun,
  LogIn,
  LogOut,
  UserPlus,
} from "lucide-react";
import { useTheme } from "../hooks/useTheme";

function Sidebar({ activePage, isLoggedIn = false }) {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 hidden h-dvh w-64 shrink-0 flex-col gap-1 border-r border-slate-200 dark:border-slate-800 px-3 py-3 lg:flex">
      <Link to="/" className="mb-2 flex items-center px-3 py-2">
        <span className="text-brand inline-flex items-baseline text-2xl font-extrabold tracking-tight">
          Gündəm
          <span className="bg-brand ml-0.5 inline-block size-1.5 rounded-full"></span>
        </span>
      </Link>

      <nav className="flex flex-1 flex-col gap-1 text-xl">
        <Link
          to="/"
          className={`flex items-center gap-4 rounded-full px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
            activePage === "home" ? "font-bold" : ""
          }`}
        >
          <HomeIcon className="size-6" /> <span>Lent</span>
        </Link>
        <Link
          to="/saved"
          className={`flex items-center gap-4 rounded-full px-4 py-3 transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 ${
            activePage === "saved" ? "font-bold" : ""
          }`}
        >
          <Bookmark className="size-6" />
          <span>Saxlanılanlar</span>
        </Link>
      </nav>

      <div className="mt-auto flex flex-col gap-2">
        <button
          onClick={toggleTheme}
          className="flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
        >
          {theme === "dark" ? <Sun className="size-6" /> : <Moon className="size-6" />}
          <span>Tema</span>
        </button>

        {isLoggedIn ? (
          <button className="flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-800">
            <LogOut className="size-6" /> <span>Çıxış</span>
          </button>
        ) : (
          <>
            <Link
              to="/login"
              className="flex items-center gap-4 rounded-full px-4 py-3 text-base transition-colors hover:bg-slate-100 dark:hover:bg-slate-800"
            >
              <LogIn className="size-6" /> <span>Daxil ol</span>
            </Link>
            <Link
              to="/login"
              className="bg-brand hover:bg-brand-600 flex items-center justify-center gap-2 rounded-full px-4 py-3 text-base font-semibold text-white transition-colors"
            >
              <UserPlus className="size-5" />
              <span>Qeydiyyat</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}

export default Sidebar;