"use client";

import { useEffect, useMemo, useState } from "react";

const prefix = "I am a web ";
const roles = ["developer", "specialist"];

export default function TypingRoleInput() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [phase, setPhase] = useState<"typing" | "pause" | "deleting">("typing");

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (phase === "typing") {
      if (typedRole.length < currentRole.length) {
        timeout = setTimeout(() => {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        }, 90);
      } else {
        timeout = setTimeout(() => setPhase("pause"), 1000);
      }
    } else if (phase === "pause") {
      timeout = setTimeout(() => setPhase("deleting"), 500);
    } else {
      if (typedRole.length > 0) {
        timeout = setTimeout(() => {
          setTypedRole(typedRole.slice(0, -1));
        }, 55);
      } else {
        timeout = setTimeout(() => {
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setPhase("typing");
        }, 250);
      }
    }

    return () => clearTimeout(timeout);
  }, [phase, roleIndex, typedRole]);

  const value = useMemo(() => `${prefix}${typedRole}`, [typedRole]);

  return (
    <div className="relative w-full max-w-[190px] mx-auto">
      <input
        readOnly
        aria-label="Current role"
        value={value}
        className="w-full rounded-xl border border-cyan-400/45 bg-slate-900/90 px-4 py-2.5 text-sm font-medium text-cyan-100 shadow-lg shadow-cyan-950/40 focus:outline-none"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-0.5 -translate-y-1/2 bg-cyan-300 animate-pulse"
      />
    </div>
  );
}
