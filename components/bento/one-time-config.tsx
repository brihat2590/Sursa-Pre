"use client"

import { Settings, CheckCircle2 } from "lucide-react"

interface OneTimeConfigWorkspacesProps {
  className?: string
}

export default function OneTimeConfigWorkspaces({ className = "" }: OneTimeConfigWorkspacesProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center p-6 ${className}`}
      role="img"
      aria-label="One-time configuration workspaces"
    >
      <div className="relative">
        {/* Configuration cards stack */}
        <div className="space-y-3">
          {[
            { label: "Environment Setup", status: "complete" },
            { label: "Dependencies Install", status: "complete" },
            { label: "Workspace Ready", status: "active" },
          ].map((item, i) => (
            <div
              key={i}
              className={`
                flex items-center gap-3 px-4 py-3 rounded-lg border
                ${item.status === "active" ? "bg-primary/5 border-primary/20" : "bg-muted/30 border-border/50"}
                transition-all duration-300
              `}
              style={{
                transform: `translateX(${i * 8}px)`,
                animation: `slideIn 0.5s ease-out ${i * 0.2}s both`,
              }}
            >
              {item.status === "active" ? (
                <Settings size={16} className="text-primary animate-spin" style={{ animationDuration: "3s" }} />
              ) : (
                <CheckCircle2 size={16} className="text-white" />
              )}
              <span className="text-sm font-medium text-foreground/80">{item.label}</span>
            </div>
          ))}
        </div>

        {/* Simple title */}
        <div className="text-center mt-6">
          <p className="text-xs font-medium text-muted-foreground">Set up once, code anywhere</p>
        </div>

        <style jsx>{`
          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateX(${20}px) translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateX(${0}px) translateY(0px);
            }
          }
        `}</style>
      </div>
    </div>
  )
}
