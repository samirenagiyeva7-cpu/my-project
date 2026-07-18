import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

function Login() {
  const [activeTab, setActiveTab] = useState("login");

  return (
    <div className="flex min-h-full items-center justify-center bg-slate-50 dark:bg-slate-950 px-4">
      <div className="w-full max-w-sm">
        <Link to="/" className="mb-8 flex items-center justify-center">
          <span className="text-brand inline-flex items-baseline text-3xl font-extrabold tracking-tight">
            Gündəm
            <span className="bg-brand ml-0.5 inline-block size-2 rounded-full"></span>
          </span>
        </Link>

        <div className="rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm">
          <div className="mb-5 flex border-b border-slate-200 dark:border-slate-800">
            <button
              onClick={() => setActiveTab("login")}
              className={`tab flex-1 border-b-2 pb-2.5 text-sm font-semibold ${
                activeTab === "login"
                  ? "border-brand text-brand"
                  : "border-transparent text-slate-500 dark:text-slate-400"
              }`}
            >
              Daxil ol
            </button>
            <button
              onClick={() => setActiveTab("register")}
              className={`tab flex-1 border-b-2 pb-2.5 text-sm font-semibold ${
                activeTab === "register"
                  ? "border-brand text-brand"
                  : "border-transparent text-slate-500 dark:text-slate-400"
              }`}
            >
              Qeydiyyat
            </button>
          </div>

          {activeTab === "login" && (
            <form className="flex flex-col gap-3">
              <div className="bg-brand/10 text-brand-600 rounded-xl px-3 py-2 text-xs">
                Demo: <b>test@gundem.az</b> / <b>gundem1234</b>
              </div>
              <div>
                <label htmlFor="login-email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="login-email"
                  type="email"
                  defaultValue="test@gundem.az"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="login-password" className="mb-1 block text-sm font-medium">
                  Parol
                </label>
                <input
                  id="login-password"
                  type="password"
                  defaultValue="gundem1234"
                  className="field"
                />
              </div>
              <button
                type="button"
                className="bg-brand hover:bg-brand-600 mt-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                Daxil ol
              </button>
            </form>
          )}

          {activeTab === "register" && (
            <form className="flex flex-col gap-3">
              <div>
                <label htmlFor="reg-name" className="mb-1 block text-sm font-medium">
                  Ad
                </label>
                <input id="reg-name" type="text" placeholder="Adın" className="field" />
              </div>
              <div>
                <label htmlFor="reg-email" className="mb-1 block text-sm font-medium">
                  Email
                </label>
                <input
                  id="reg-email"
                  type="email"
                  placeholder="ornek@mail.com"
                  className="field"
                />
              </div>
              <div>
                <label htmlFor="reg-password" className="mb-1 block text-sm font-medium">
                  Parol
                </label>
                <input
                  id="reg-password"
                  type="password"
                  placeholder="Ən az 8 simvol"
                  className="field"
                />
              </div>
              <button
                type="button"
                className="bg-brand hover:bg-brand-600 mt-1 rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition-colors"
              >
                Qeydiyyatdan keç
              </button>
            </form>
          )}
        </div>

        <Link
          to="/"
          className="mt-6 flex items-center justify-center gap-1 text-sm text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
        >
          <ArrowLeft className="size-4" /> Lentə qayıt
        </Link>
      </div>
    </div>
  );
}

export default Login; 