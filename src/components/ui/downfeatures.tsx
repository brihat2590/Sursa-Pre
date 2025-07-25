import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconBug,
  IconCloud,
  
  IconEaseInOut,
  
  IconHelp,
  IconRouteAltLeft,
  IconShieldLock,
  IconTerminal2,
} from "@tabler/icons-react";

export function DownFeatures() {
    const features = [
        {
          title: "AI-Powered Code Assistance",
          description: "Get intelligent code completions, bug detection, and optimizations powered by advanced machine learning models.",
          icon: <IconTerminal2 />,
        },
        {
          title: "Real-Time Cloud Collaboration",
          description: "Edit simultaneously with your team from anywhere. See changes instantly with shared cloud environments.",
          icon: <IconCloud />,
        },
        {
          title: "Zero-Configuration Workspaces",
          description: "Launch fully-configured dev environments in seconds – no setup required. Focus on code, not infrastructure.",
          icon: <IconEaseInOut />,
        },
        {
          title: "Intelligent Refactoring",
          description: "AI-driven code restructuring that maintains functionality while improving readability and performance.",
          icon: <IconAdjustmentsBolt />,
        },
        {
          title: "Multi-Language Support",
          description: "Edit 30+ languages with framework-specific assistance. Context-aware AI understands your stack.",
          icon: <IconRouteAltLeft />,
        },
        {
          title: "Secure Cloud Environments",
          description: "Enterprise-grade security with isolated sandboxes. Your code never leaves our encrypted servers.",
          icon: <IconShieldLock />,
        },
        {
          title: "AI Documentation Generator",
          description: "Automatically create comprehensive documentation from your codebase with smart comment analysis.",
          icon: <IconHelp />,
        },
        {
          title: "Predictive Debugging",
          description: "AI identifies potential errors before execution and suggests targeted fixes.",
          icon: <IconBug />,
        }
      ];
  
  return (
    <div className="grid animate-fade-in-up grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-10 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}
    >
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-neutral-600 dark:text-neutral-400">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
