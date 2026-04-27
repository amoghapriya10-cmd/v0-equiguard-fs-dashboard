import { Shield, Activity, Bell, Settings } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FairnessChart } from "@/components/fairness-chart"
import { ApplicantsTable } from "@/components/applicants-table"
import { BiasCheckButton } from "@/components/bias-check-button"
import { StatsCards } from "@/components/stats-cards"

export default function Dashboard() {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-lg bg-primary/20">
                <Shield className="h-6 w-6 text-primary" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground tracking-tight">EquiGuard-FS</h1>
                <p className="text-xs text-muted-foreground">AI Bias Detection Platform</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Activity className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground relative">
                <Bell className="h-5 w-5" />
                <span className="absolute top-1.5 right-1.5 h-2 w-2 rounded-full bg-accent" />
              </Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-foreground">
                <Settings className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Title */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <h2 className="text-3xl font-bold text-foreground tracking-tight text-balance">
                Loan Application Bias Analysis
              </h2>
              <p className="text-muted-foreground mt-1">
                Monitor and detect algorithmic bias in lending decisions across Indian banks
              </p>
            </div>
            <BiasCheckButton />
          </div>
        </div>

        {/* Stats Overview */}
        <div className="mb-8">
          <StatsCards />
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Fairness Score Chart */}
          <Card className="lg:col-span-1 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground flex items-center gap-2">
                <div className="p-1.5 rounded-md bg-accent/20">
                  <Shield className="h-4 w-4 text-accent" />
                </div>
                Model Fairness
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Real-time fairness metrics across protected groups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <FairnessChart />
            </CardContent>
          </Card>

          {/* Bias Metrics */}
          <Card className="lg:col-span-2 bg-card border-border">
            <CardHeader>
              <CardTitle className="text-foreground">Bias Metrics by Category</CardTitle>
              <CardDescription className="text-muted-foreground">
                Disparate impact analysis across demographic groups
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                {[
                  { label: "Geographic Location", score: 97, description: "Urban vs Rural applicants" },
                  { label: "Gender", score: 94, description: "Male vs Female applicants" },
                  { label: "Age Group", score: 96, description: "Young vs Senior applicants" },
                  { label: "Income Source", score: 92, description: "Salaried vs Self-employed" },
                ].map((metric) => (
                  <div key={metric.label} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium text-foreground">{metric.label}</p>
                        <p className="text-sm text-muted-foreground">{metric.description}</p>
                      </div>
                      <span className="text-lg font-bold text-accent">{metric.score}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-accent to-accent/70 rounded-full transition-all duration-500"
                        style={{ width: `${metric.score}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Applicants Table */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-xl font-semibold text-foreground">Recent Applications</h3>
              <p className="text-sm text-muted-foreground">
                Comparing Legacy AI decisions with EquiGuard AI corrections
              </p>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <div className="flex items-center gap-2">
                <div className="h-3 w-3 rounded-full bg-accent/20 border border-accent" />
                <span className="text-muted-foreground">Bias Corrected</span>
              </div>
            </div>
          </div>
          <ApplicantsTable />
        </div>

        {/* Footer Info */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <p>Powered by EquiGuard AI • Ensuring fair lending for all Indians</p>
            <p>Last model update: April 2026 • RBI Compliant</p>
          </div>
        </div>
      </main>
    </div>
  )
}
