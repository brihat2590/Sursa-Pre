"use client"

import type React from "react"

import { Lock, ShieldCheck, KeyRound, EyeOff } from "lucide-react"

interface SecureEnvironmentsProps {
  className?: string
}

export default function SecureEnvironments({ className = "" }: SecureEnvironmentsProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center ${className}`}
      role="img"
      aria-label="Circular security badge with animated rings and security status pills"
    >
      <div className="relative" style={{ width: 260, height: 260 }}>
        {/* Ambient glow */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: -20,
            borderRadius: "50%",
            background: "radial-gradient(ellipse at center, hsl(var(--primary) / 0.18) 0%, transparent 60%)",
            filter: "blur(30px)",
          }}
        />

        {/* SVG badge with animated rings */}
        <svg
          width="260"
          height="260"
          viewBox="0 0 260 260"
          xmlns="http://www.w3.org/2000/svg"
          style={{ position: "absolute", inset: 0 }}
        >
          <defs>
            <radialGradient id="badgeFill" cx="50%" cy="50%" r="60%">
              <stop offset="0%" stopColor="hsl(var(--background))" />
              <stop offset="100%" stopColor="hsl(var(--background))" />
            </radialGradient>
            <linearGradient id="ringStroke" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--primary))" stopOpacity="0.8" />
              <stop offset="100%" stopColor="hsl(var(--primary))" stopOpacity="0.2" />
            </linearGradient>
            <linearGradient id="innerStroke" x1="1" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="hsl(var(--foreground) / 0.5)" />
              <stop offset="100%" stopColor="hsl(var(--foreground) / 0.1)" />
            </linearGradient>
          </defs>

          {/* Core circle */}
          <circle cx="130" cy="130" r="78" fill="url(#badgeFill)" />

          {/* Static thin ring */}
          <circle
            cx="130"
            cy="130"
            r="95"
            fill="none"
            stroke="hsl(var(--border))"
            strokeOpacity="0.6"
            strokeWidth="1"
          />

          {/* Animated dashed ring (outer) */}
          <g className="rotate-slow">
            <circle
              cx="130"
              cy="130"
              r="110"
              fill="none"
              stroke="url(#ringStroke)"
              strokeWidth="2"
              strokeDasharray="8 10"
              strokeLinecap="round"
            />
          </g>

          {/* Animated dashed ring (inner, opposite direction) */}
          <g className="rotate-reverse">
            <circle
              cx="130"
              cy="130"
              r="88"
              fill="none"
              stroke="url(#innerStroke)"
              strokeWidth="2"
              strokeDasharray="4 12"
              strokeLinecap="round"
            />
          </g>

          {/* Center outline */}
          <circle
            cx="130"
            cy="130"
            r="78"
            fill="none"
            stroke="hsl(var(--border))"
            strokeWidth="1"
            strokeOpacity="0.6"
          />
        </svg>

        {/* Center icon and text */}
        <div className="absolute inset-0 flex flex-col items-center justify-center" style={{ gap: 10 }}>
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "hsl(var(--foreground) / 0.06)",
              border: "1px solid hsl(var(--border))",
              color: "hsl(var(--primary))",
            }}
          >
            <Lock size={22} />
          </div>
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: 16.5,
              fontWeight: 600,
              color: "hsl(var(--foreground))",
              letterSpacing: "-0.2px",
            }}
          >
            100% secure environments
          </div>
          <div
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: 12.5,
              color: "hsl(var(--muted-foreground))",
            }}
          >
            Isolated • Encrypted • No egress
          </div>
        </div>

        {/* Status pills around the badge */}
        <Pill
          icon={<ShieldCheck size={12} />}
          label="Encrypted at rest"
          style={{
            top: -6,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
        <Pill
          icon={<KeyRound size={12} />}
          label="Secrets sealed"
          style={{
            right: -10,
            top: "50%",
            transform: "translateY(-50%)",
          }}
        />
        <Pill
          icon={<EyeOff size={12} />}
          label="Zero egress"
          style={{
            bottom: -6,
            left: "50%",
            transform: "translateX(-50%)",
          }}
        />
      </div>

      {/* Animations */}
      <style jsx>{`
        .rotate-slow {
          transform-origin: 130px 130px;
          animation: spin 12s linear infinite;
        }
        .rotate-reverse {
          transform-origin: 130px 130px;
          animation: spin-rev 16s linear infinite;
        }
        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }
        @keyframes spin-rev {
          to {
            transform: rotate(-360deg);
          }
        }
      `}</style>
    </div>
  )
}

function Pill({
  icon,
  label,
  style,
}: {
  icon: React.ReactNode
  label: string
  style?: React.CSSProperties
}) {
  return (
    <div
      style={{
        position: "absolute",
        padding: "6px 10px",
        borderRadius: 999,
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        background: "hsl(var(--primary) / 0.12)",
        color: "hsl(var(--primary))",
        border: "1px solid hsl(var(--border))",
        fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        fontSize: 12,
        fontWeight: 500,
        ...style,
      }}
    >
      <span
        style={{
          display: "inline-flex",
          alignItems: "center",
          justifyContent: "center",
          width: 16,
          height: 16,
          color: "hsl(var(--primary))",
        }}
        aria-hidden
      >
        {icon}
      </span>
      <span>{label}</span>
    </div>
  )
}
