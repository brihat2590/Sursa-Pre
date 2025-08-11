import type React from "react"
import { Search } from "lucide-react"

interface MultiLanguageSupportProps {
  className?: string
}

const languages = [
  { name: "JavaScript / TypeScript", key: "ts",  },
  { name: "Python", key: "py",  },
  { name: "Go", key: "go",  },
  { name: "Rust", key: "rs",  },
  { name: "Java", key: "java",  },
  
]

function StatusBadge({ status }: { status: "Enabled" | "Beta" | "Preview" }) {
  const styleMap: Record<typeof status, React.CSSProperties> = {
    Enabled: {
      background: "hsl(var(--primary) / 0.10)",
      color: "hsl(var(--primary))",
    },
    Beta: {
      background: "hsl(var(--foreground) / 0.08)",
      color: "hsl(var(--foreground))",
    },
    Preview: {
      background: "hsl(var(--muted-foreground) / 0.10)",
      color: "hsl(var(--muted-foreground))",
    },
  } as any

  return (
    <div
      style={{
        ...styleMap[status],
        padding: "2px 8px",
        borderRadius: "6px",
        fontSize: "11px",
        lineHeight: "16px",
        fontWeight: 500,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {status}
    </div>
  )
}

export default function MultiLanguageSupport({ className = "" }: MultiLanguageSupportProps) {
  return (
    <div
      className={`w-full h-full flex items-center justify-center p-4 relative ${className}`}
      role="img"
      aria-label="Multi-language support illustration showing a searchable list of languages and their support status"
    >
      {/* Main Panel */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, calc(-50% + 20px))",
          width: "345px",
          height: "277px",
          background: "linear-gradient(180deg, hsl(var(--background)) 0%, transparent 100%)",
          backdropFilter: "blur(16px)",
          borderRadius: "10px",
          border: "0.8px solid hsl(var(--border))",
          overflow: "hidden",
        }}
      >
        {/* Header with search
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12.8px",
            padding: "9px 12.8px",
            borderBottom: "0.8px solid hsl(var(--border))",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          <Search className="w-[14.4px] h-[14.4px] text-muted-foreground" />
          <span
            style={{
              fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
              fontSize: "12.8px",
              lineHeight: "19.25px",
              color: "hsl(var(--muted-foreground))",
              fontWeight: 400,
              whiteSpace: "nowrap",
            }}
          >
            Search languages
          </span>
        </div> */}

        {/* List */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            height: "calc(100% - 42px)",
            overflow: "hidden",
            
          }}

          className="flex flex-col justify-center "
        >
          {languages.map((lang, i) => (
            <div
              key={lang.key}
              style={{
                display: "flex",
                alignItems: "start",
                justifyContent: "between",
                
                padding: "9px 12.8px",
                borderBottom: i < languages.length - 1 ? "0.5px solid hsl(var(--border))" : "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              <div style={{ display: "flex",justifyContent: "center", alignItems: "center", gap: "10px" }}>
                {/* Small rounded tile with initials */}
                <div
                  style={{
                    width: "24px",
                    height: "24px",
                    borderRadius: "6px",
                    background: "hsl(var(--foreground) / 0.08)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "0.5px solid hsl(var(--border))",
                    fontFamily: "'Geist Mono','SF Mono',Menlo,monospace",
                    fontSize: "10px",
                    color: "hsl(var(--foreground))",
                    letterSpacing: "-0.2px",
                  }}
                >
                  {lang.key.toUpperCase()}
                </div>
                <span
                  style={{
                    fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                    fontSize: "12.8px",
                    lineHeight: "19.25px",
                    color: "hsl(var(--muted-foreground))",
                    fontWeight: 400,
                    whiteSpace: "nowrap",
                  }}
                >
                  {lang.name}
                </span>
              </div>

              
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
