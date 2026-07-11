import { Link } from "react-router-dom";
import { Home as HomeIcon, Bookmark, Moon, LogIn, UserPlus } from "lucide-react";

function MobileNav({ activePage, isLoggedIn = false }) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-40 flex items-center justify-around border-t border-slate-200 bg-white/95 px-2 py-1.5 backdrop-blur lg:hidden">
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
      <button className="rounded-full p-2">
        <Moon className="size-6" />
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