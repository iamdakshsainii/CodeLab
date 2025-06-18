import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import ThemeButton from "./ThemeButton";
import ProfilePanel from "./ProfilePanel";

const Header = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuth);
  const isLoading = useSelector((state) => state.auth.isLoading);
  const darkMode = useSelector((state) => state.theme.darkMode);
  const user = useSelector((state) => state.auth.userData);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showProfilePanel, setShowProfilePanel] = useState(false);

  const handleProfilePanelToggle = (value) => {
    setShowProfilePanel(value);
    if (value && isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <>
      {/* Header Container */}
      <header
  className={`flex justify-between items-center px-4 py-3 shadow-sm border-b backdrop-blur-md transition-all ${
    darkMode
      ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 border-gray-800 text-white"
      : "bg-gradient-to-br from-white via-blue-50 to-indigo-100 border-gray-200 text-gray-800"
  }`}
>
  {/* Left - Logo */}
  <NavLink to="/" className="flex items-center">
    <motion.img
      src="/Logo/3.png"
      alt="Logo"
      className="h-12 drop-shadow-md"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
    />
  </NavLink>

  {/* Right - Desktop Nav */}
  <div className="hidden md:flex items-center space-x-3">
    <ThemeButton />

    <NavLink
      to="/join"
      className={`px-4 py-1.5 rounded-lg font-medium shadow-sm transition-all ${
        darkMode
          ? "bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white"
          : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
      }`}
    >
      Join
    </NavLink>

    <NavLink
      to="/host"
      className={`px-4 py-1.5 rounded-lg font-medium shadow-sm transition-all ${
        darkMode
          ? "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white"
          : "bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white"
      }`}
    >
      Host
    </NavLink>

    {isAuthenticated && (
      <motion.img
        src={
          user?.profileImage
            ? `https://codelab-wvno.onrender.com/${user.profileImage}`
            : "../../public/images/man.png"
        }
        alt="Profile"
        className="w-9 h-9 rounded-full cursor-pointer shadow-md border-2 border-cyan-400 object-cover"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => handleProfilePanelToggle(true)}
      />
    )}

    {isLoading && (
      <div
        className={`w-9 h-9 rounded-full shadow-md border-2 border-cyan-400 flex items-center justify-center ${
          darkMode ? "bg-slate-800" : "bg-gray-100"
        }`}
      >
        <motion.div
          className="w-5 h-5 border-t-2 border-cyan-400 rounded-full"
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
        />
      </div>
    )}
  </div>

  {/* Mobile Menu Toggle */}
  <button
    className={`md:hidden p-2 rounded-md shadow-sm transition ${
      darkMode ? "bg-slate-800 hover:bg-slate-700" : "bg-white hover:bg-gray-100"
    }`}
    onClick={() => setIsMenuOpen(!isMenuOpen)}
  >
    {isMenuOpen ? <X size={22} /> : <Menu size={22} />}
  </button>
</header>

{/* Mobile Nav Menu */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      className={`md:hidden flex flex-col items-center space-y-3 p-4 transition ${
        darkMode
          ? "bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-900 text-white"
          : "bg-gradient-to-br from-white via-blue-50 to-indigo-100 text-gray-800"
      }`}
    >
      <ThemeButton />
      <NavLink
        to="/join"
        className={`w-full text-center py-2 rounded-lg font-medium transition-all ${
          darkMode
            ? "bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white"
            : "bg-gradient-to-r from-cyan-500 to-teal-500 hover:from-cyan-600 hover:to-teal-600 text-white"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Join
      </NavLink>
      <NavLink
        to="/host"
        className={`w-full text-center py-2 rounded-lg font-medium transition-all ${
          darkMode
            ? "bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 text-white"
            : "bg-gradient-to-r from-sky-500 to-cyan-500 hover:from-sky-600 hover:to-cyan-600 text-white"
        }`}
        onClick={() => setIsMenuOpen(false)}
      >
        Host
      </NavLink>

      {isAuthenticated && (
        <motion.img
          src={
            user?.profileImage
              ? `https://codelab-wvno.onrender.com/${user.profileImage}`
              : "/images/man.png"
          }
          alt="Profile"
          className="w-10 h-10 rounded-full cursor-pointer shadow-md border-2 border-cyan-400 object-cover"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            handleProfilePanelToggle(true);
            setIsMenuOpen(false);
          }}
        />
      )}

      {isLoading && (
        <div
          className={`w-10 h-10 rounded-full shadow-md border-2 border-cyan-400 flex items-center justify-center ${
            darkMode ? "bg-slate-800" : "bg-gray-100"
          }`}
        >
          <motion.div
            className="w-5 h-5 border-t-2 border-cyan-400 rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
      )}
    </motion.div>
  )}
</AnimatePresence>

<AnimatePresence>
  <ProfilePanel
    panelOpen={showProfilePanel}
    onClose={() => handleProfilePanelToggle(false)}
  />
</AnimatePresence>

    </>
  );
};

export default Header;
