"use client"

import { PieChart, Pie, Cell, ResponsiveContainer, Label } from "recharts"

const data = [
  { name: "Fairness Score", value: 95 },
  { name: "Remaining", value: 5 },
]

const COLORS = ["oklch(0.55 0.22 165)", "oklch(0.25 0.03 250)"]

export function FairnessChart() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-[280px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={80}
              outerRadius={110}
              startAngle={90}
              endAngle={-270}
              paddingAngle={0}
              dataKey="value"
              strokeWidth={0}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
              <Label
                value="95%"
                position="center"
                className="fill-foreground text-4xl font-bold"
                style={{ fontSize: "3rem", fontWeight: 700 }}
              />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="mt-2 text-center">
        <p className="text-lg font-semibold text-foreground">Fairness Score</p>
        <p className="text-sm text-muted-foreground">EquiGuard AI achieves 95% fairness across all demographics</p>
      </div>
    </div>
  )
}
