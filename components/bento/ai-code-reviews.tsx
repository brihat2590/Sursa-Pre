import type React from "react"

const AiCodeReviews: React.FC = () => {
  const themeVars = {
    "--ai-primary-color": "hsl(var(--primary))",
    "--ai-background-color": "hsl(var(--background))",
    "--ai-text-color": "hsl(var(--foreground))",
    "--ai-text-dark": "hsl(var(--primary-foreground))",
    "--ai-border-color": "hsl(var(--border))",
    "--ai-border-main": "hsl(var(--foreground) / 0.1)",
    "--ai-highlight-primary": "hsl(var(--primary) / 0.12)",
    "--ai-highlight-header": "hsl(var(--accent) / 0.2)",
    // VS Code-like code colors
    "--ai-code-keyword": "#569CD6",
    "--ai-code-type": "#DCDCAA",
    "--ai-code-string": "#CE9178",
    "--ai-code-comment": "#6A9955",
    "--ai-code-muted": "hsl(var(--muted-foreground))",
    // Ghost suggestion style (like VS Code IntelliSense ghost text)
    "--ai-code-ghost": "hsl(var(--foreground) / 0.45)",
  }

  return (
    <div
      style={
        {
          width: "100%",
          height: "100%",
          position: "relative",
          background: "transparent",
          ...themeVars,
        } as React.CSSProperties
      }
      role="img"
      aria-label="AI Code Reviews interface showing code suggestions with apply buttons"
    >
      {/* Background Message Box (Blurred) */}
      {/* <div
        style={{
          position: "absolute",
          top: "30px",
          left: "50%",
          transform: "translateX(-50%) scale(0.9)",
          width: "340px",
          height: "205.949px",
          background: "linear-gradient(180deg, var(--ai-background-color) 0%, transparent 100%)",
          opacity: 0.6,
          borderRadius: "8.826px",
          border: "0.791px solid var(--ai-border-color)",
          overflow: "hidden",
          backdropFilter: "blur(16px)",
        }}
      >
        <div
          className="border rounded-lg bg-card"
          style={{
            padding: "7.355px 8.826px",
            height: "100%",
            boxSizing: "border-box",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              fontFamily: "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
              fontSize: "9.562px",
              lineHeight: "14.711px",
              letterSpacing: "-0.2942px",
              color: "hsl(var(--muted-foreground))",
              width: "100%",
              maxWidth: "320px",
              margin: 0,
            }}
          >
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>switch (type) {"{"}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> case 'success':</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> return {"{"}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {"          border: theme === 'dark' ? 'border-[rgba(34,197,94,0.4)]' : 'border-green-200',"}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> icon: (</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {'            <svg className={\'baseIconClasses\'} fill="none" viewBox="0 0 14 14">'}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> &lt;path</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {'                d="M3.85156 7.875L6.47656 10.5L10.8516 3.5"'}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {'                stroke="var(--ai-primary-color)"'}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {'                strokeLinecap="round"'}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
              {'                strokeLinejoin="round"'}
            </p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>{'                strokeWidth="1.5"'}</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> /&gt;</p>
            <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> &lt;/svg&gt;</p>
          </div>
        </div>
      </div> */}

      {/* Foreground Message Box (Main) */}
      <div
        style={{
          position: "absolute",
          top: "51.336px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "340px",
          height: "221.395px",
          background: "var(--ai-background-color)",
          backdropFilter: "blur(16px)",
          borderRadius: "9.488px",
          border: "1px solid var(--ai-border-main)",
          overflow: "hidden",
        }}
      >
        <div
          className="bg-card border border-border"
          style={{
            padding: "9.488px",
            height: "100%",
            boxSizing: "border-box",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
  style={{
    fontFamily:
      "'Geist Mono', 'SF Mono', Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
    fontSize: "10.279px",
    lineHeight: "15.814px",
    letterSpacing: "-0.3163px",
    color: "var(--ai-text-color)",
    width: "100%",
    maxWidth: "320px",
    position: "relative",
    zIndex: 2,
    margin: 0,
  }}
>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    <span style={{ color: "var(--ai-code-keyword)" }}>interface</span>{" "}
    <span style={{ color: "var(--ai-code-type)" }}>User</span>{" {"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  id: "}
    <span style={{ color: "var(--ai-code-type)" }}>number</span>{";"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  name: "}
    <span style={{ color: "var(--ai-code-type)" }}>string</span>{";"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  status: "}
    <span style={{ color: "var(--ai-code-string)" }}>'active'</span>{" | "}
    <span style={{ color: "var(--ai-code-string)" }}>'inactive'</span>{" | "}
    <span style={{ color: "var(--ai-code-string)" }}>'pending'</span>{";"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>{"}"}</p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    <span style={{ color: "var(--ai-code-keyword)" }}>function</span>{" "}
    <span style={{ color: "var(--ai-text-color)" }}>filterAndSortUsers</span>
    <span>{"("}</span>
    <span>users: </span>
    <span style={{ color: "var(--ai-code-type)" }}>User</span>
    <span>{"[], status: "}</span>
    <span style={{ color: "var(--ai-code-type)" }}>User</span>
    <span>{"["}</span>
    <span style={{ color: "var(--ai-code-string)" }}>'status'</span>
    <span>{"]) : "}</span>
    <span style={{ color: "var(--ai-code-type)" }}>User</span>
    <span>{"[] {"}</span>
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400, color: "var(--ai-code-ghost)", fontStyle: "italic" }}>
    {"  return users"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400, color: "var(--ai-code-ghost)", fontStyle: "italic" }}>
    {"    .filter(user => user.status === status)"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400, color: "var(--ai-code-ghost)", fontStyle: "italic" }}>
    {"    .sort((a, b) => a.name.localeCompare(b.name));"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"}"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    <span style={{ color: "var(--ai-code-comment)" }}>// Example usage:</span>
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    <span style={{ color: "var(--ai-code-keyword)" }}>const</span>{" users: "}
    <span style={{ color: "var(--ai-code-type)" }}>User</span>
    {"[] = ["}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  { id: 1, name: "}
    <span style={{ color: "var(--ai-code-string)" }}>'Alice'</span>
    {", status: "}
    <span style={{ color: "var(--ai-code-string)" }}>'active'</span>
    {" },"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  { id: 2, name: "}
    <span style={{ color: "var(--ai-code-string)" }}>'Bob'</span>
    {", status: "}
    <span style={{ color: "var(--ai-code-string)" }}>'pending'</span>
    {" },"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"  { id: 3, name: "}
    <span style={{ color: "var(--ai-code-string)" }}>'Charlie'</span>
    {", status: "}
    <span style={{ color: "var(--ai-code-string)" }}>'active'</span>
    {" },"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    {"];"}
  </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}> </p>
  <p style={{ margin: 0, whiteSpace: "pre-wrap", fontWeight: 400 }}>
    <span style={{ color: "var(--ai-code-keyword)" }}>const</span>{" activeUsers = filterAndSortUsers(users, "}
    <span style={{ color: "var(--ai-code-string)" }}>'active'</span>
    {" );"}
  </p>
</div>

          {/* <button
            style={{
              position: "absolute",
              top: "calc(50% + 29.745px)",
              right: "20px",
              transform: "translateY(-50%)",
              zIndex: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "3.953px",
              background: "var(--ai-primary-color)",
              color: "var(--ai-text-dark)",
              border: "none",
              cursor: "pointer",
              fontWeight: 500,
              whiteSpace: "nowrap",
              transition: "all 0.2s ease",
              padding: "3.163px 6.326px",
              borderRadius: "5.535px",
              fontSize: "10.279px",
              lineHeight: "15.814px",
              letterSpacing: "-0.3163px",
              boxShadow:
                "0px 26.093px 7.116px rgba(0, 0, 0, 0), 0px 16.605px 6.326px rgba(0, 0, 0, 0.01), 0px 9.488px 5.535px rgba(0, 0, 0, 0.05), 0px 3.953px 3.953px rgba(0, 0, 0, 0.09), 0px 0.791px 2.372px rgba(0, 0, 0, 0.1)",
            }}
          >
            <span
              style={{
                fontFamily: "'Geist', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
                fontWeight: 500,
              }}
            >
              Apply changes
            </span>
            <span
              style={{
                fontFamily: "'SF Pro', -apple-system, BlinkMacSystemFont, system-ui, sans-serif",
                fontWeight: 500,
              }}
            >
              ⌘Y
            </span>
          </button> */}
        </div>
      </div>
    </div>
  )
}

export default AiCodeReviews

