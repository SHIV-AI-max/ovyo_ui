"use client";

export default function SidebarToggle({ open, setOpen }) {
  return (
    <button
      className="sidebar-toggle"
      onClick={() => setOpen(!open)}
    >
      {open ? "✕" : "☰"}
    </button>
  );
}