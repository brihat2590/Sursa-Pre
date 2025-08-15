import { TrendingUp, BarChart, Clock, Users } from "lucide-react";

interface AnalyticsProps {
  className?: string;
}

export default function Analytics({ className = "" }: AnalyticsProps) {
  return (
    <div className={`w-full h-full flex flex-col items-center justify-center p-6 ${className}`}>
      {/* Professional Data Visualization */}
      <div className="relative w-64 h-48 flex items-end justify-center space-x-1">
        {/* Animated data bars */}
        {[12, 28, 40, 34, 58, 45, 32].map((height, i) => (
          <div 
            key={i}
            className="w-6 bg-gradient-to-t from-primary to-primary/70 rounded-t-md relative overflow-hidden group"
            style={{ height: `${height}px` }}
          >
            <div className="absolute inset-0 bg-primary/10 animate-pulse" 
                 style={{ 
                   animationDelay: `${i * 0.1}s`,
                   height: `${Math.min(100, height + 20)}px`,
                   transform: 'translateY(-10px)'
                 }}>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-primary/80"></div>
            
            {/* Hover effect */}
            <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 
                            bg-foreground text-background text-xs px-2 py-1 rounded-md
                            opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {height}%
            </div>
          </div>
        ))}

        {/* Central metrics visualization */}
        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <div className="relative">
            {/* Activity rings */}
            <div className="absolute -inset-4 border-2 border-primary/10 rounded-full animate-ping" 
                 style={{ animationDuration: '3s' }}></div>
            <div className="absolute -inset-6 border border-primary/5 rounded-full"></div>
            
            {/* Metrics icons */}
            <div className="relative grid grid-cols-2 gap-3 z-10">
              <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                <Clock className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                <Users className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                <TrendingUp className="w-4 h-4 text-primary" />
              </div>
              <div className="w-8 h-8 bg-primary/10 rounded-md flex items-center justify-center">
                <BarChart className="w-4 h-4 text-primary" />
              </div>
            </div>
          </div>
        </div>

        {/* Floating data points */}
        <div className="absolute top-10 left-8 w-2 h-2 bg-primary rounded-full animate-float" 
             style={{ animationDelay: '0.2s' }}></div>
        <div className="absolute top-16 right-10 w-3 h-3 bg-primary/80 rounded-full animate-float" 
             style={{ animationDelay: '0.7s' }}></div>
        <div className="absolute bottom-20 left-12 w-2 h-2 bg-primary/60 rounded-full animate-float" 
             style={{ animationDelay: '1.3s' }}></div>
      </div>

      {/* Professional description */}
      <div className="text-center mt-10 max-w-md space-y-3">
        <h2 className="text-lg font-medium text-foreground/90">
          Advanced Time & Resource Analytics
        </h2>
        <p className="text-sm text-foreground/60 leading-relaxed">
          Track development efficiency, team productivity, and resource utilization
          with AI-powered insights 
        </p>
      </div>
    </div>
  );
}