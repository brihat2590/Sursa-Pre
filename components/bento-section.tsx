import AiCodeReviews from "./bento/ai-code-reviews"

import OneClickIntegrationsIllustration from "./bento/one-click-integrations-illustration"

import EasyDeployment from "./bento/easy-deployment"

import MultiLanguageSupport from "./bento/mcp-connectivity-illustration"
import SecureEnvironments from "./bento/secure-environments"
import OneTimeConfigWorkspaces from "./bento/one-time-config"
import Analytics from "./ui/analytics"

type bentoType={
  title:string,
  description:string,
  Component:React.FC
}

const BentoCard:React.FC<bentoType> = ({ title, description, Component }) => (
  <div className="overflow-hidden rounded-2xl border border-white/20 flex flex-col justify-start items-start relative">
    {/* Background with blur effect */}
    <div
      className="absolute inset-0 rounded-2xl"
      style={{
        background: "rgba(231, 236, 235, 0.08)",
        backdropFilter: "blur(4px)",
        WebkitBackdropFilter: "blur(4px)",
      }}
    />
    {/* Additional subtle gradient overlay */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent rounded-2xl" />

    <div className="self-stretch p-6 flex flex-col justify-start items-start gap-2 relative z-10">
      <div className="self-stretch flex flex-col justify-start items-start gap-1.5">
        <p className="self-stretch text-foreground text-xl font-normal leading-7 p-2">
          {title} <br />
          <span className="text-muted-foreground text-lg">{description}</span>
        </p>
      </div>
    </div>
    <div className="self-stretch h-72 relative -mt-0.5 z-10">
      <Component />
    </div>
  </div>
)

export function BentoSection() {
  const cards = [
    {
      title: "AI-powered code assistance",
      description: "Inline suggestions, refactors, and completions right when you need them",
      Component: AiCodeReviews,
    },
    {
      title: "One-time configuration workspaces",
      description: "Standardize environments once, then spin up consistent workspaces in seconds",
      Component: OneTimeConfigWorkspaces,
    },
    {
      title: "Instant Environment Sync",
      description: "Your workspace,dependencies, and file sync across devices in real-time just login and continue coding",
      Component: OneClickIntegrationsIllustration,
    },
    {
      title: "Analytics",
      description: "Track time spent, monitor team activity, and measure productivity effortlessly",
      Component: Analytics, // Updated component
    },
    {
      title: "Secure Cloud Workspaces", // Swapped position
      description: " Access your development environment from anywhere with enterprise-grade security.",
      Component: SecureEnvironments, // Updated component
    },
    {
      title: "Deployment made easy", // Swapped position
      description: "Go from code to live deployment on  instantly.",
      Component: EasyDeployment,
    },
  ]

  return (
    <section className="w-full pt-50  px-5 flex flex-col justify-center items-center overflow-visible bg-transparent ">
      <div className="w-full py-8 md:py-16 relative flex flex-col justify-start items-start gap-6">
        <div className="w-[547px] h-[938px] absolute top-[614px] left-[80px] origin-top-left rotate-[-33.39deg] bg-primary/10 blur-[130px] z-0" />
        <div className="self-stretch py-8 md:py-14 flex flex-col justify-center items-center gap-2 z-10">
          <div className="flex flex-col justify-start items-center gap-4">
            <h2 className="w-full max-w-[655px] text-center text-foreground text-4xl md:text-6xl font-semibold leading-tight md:leading-[66px] mt-10">
              Empower Your Workflow with AI
            </h2>
            <p className="w-full max-w-[600px] text-center text-muted-foreground text-lg md:text-xl font-medium leading-relaxed">
            SursaKit is an AI-powered cloud-based code editor that enables real-time collaboration, offers seamless integrations, and delivers actionable insights to streamline your development workflow.
            </p>
          </div>
        </div>
        <div className="self-stretch grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10">
          {cards.map((card) => (
            <BentoCard key={card.title} {...card} />
          ))}
        </div>
      </div>
    </section>
  )
}
