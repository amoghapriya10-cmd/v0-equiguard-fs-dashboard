"use client"

import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, AlertTriangle, Shield } from "lucide-react"

const stats = [
  {
    label: "Total Applications",
    value: "12,847",
    change: "+8.2%",
    icon: Users,
    trend: "up",
  },
  {
    label: "Bias Corrections",
    value: "342",
    change: "2.7%",
    icon: AlertTriangle,
    trend: "neutral",
  },
  {
    label: "Model Accuracy",
    value: "98.4%",
    change: "+1.2%",
    icon: TrendingUp,
    trend: "up",
  },
  {
    label: "Protected Groups",
    value: "8",
    change: "Active",
    icon: Shield,
    trend: "up",
  },
]

export function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <Card key={stat.label} className="bg-card border-border hover:border-primary/30 transition-colors">
          <CardContent className="p-5">
            <div className="flex items-start justify-between">
              <div className="space-y-2">
                <p className="text-sm text-muted-foreground font-medium">{stat.label}</p>
                <p className="text-2xl font-bold text-foreground tracking-tight">{stat.value}</p>
                <p className={`text-sm font-medium ${stat.trend === "up" ? "text-accent" : "text-muted-foreground"}`}>
                  {stat.change}
                </p>
              </div>
              <div className="p-2.5 rounded-lg bg-primary/10">
                <stat.icon className="h-5 w-5 text-primary" />
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
