"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Scan, CheckCircle2, Loader2 } from "lucide-react"

export function BiasCheckButton() {
  const [state, setState] = useState<"idle" | "scanning" | "complete">("idle")

  const handleClick = () => {
    setState("scanning")
    setTimeout(() => {
      setState("complete")
      setTimeout(() => {
        setState("idle")
      }, 3000)
    }, 2500)
  }

  return (
    <Button
      onClick={handleClick}
      disabled={state === "scanning"}
      size="lg"
      className="relative h-14 px-8 text-lg font-semibold bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 text-primary-foreground shadow-lg shadow-primary/25 transition-all duration-300 hover:shadow-xl hover:shadow-primary/30 hover:scale-[1.02] disabled:opacity-100"
    >
      <div className="flex items-center gap-3">
        {state === "idle" && (
          <>
            <Scan className="h-5 w-5" />
            <span>Check for Bias</span>
          </>
        )}
        {state === "scanning" && (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            <span>Analyzing Model...</span>
          </>
        )}
        {state === "complete" && (
          <>
            <CheckCircle2 className="h-5 w-5 text-accent" />
            <span className="text-accent">No Bias Detected</span>
          </>
        )}
      </div>
      {state === "idle" && (
        <div className="absolute inset-0 rounded-lg overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full animate-[shimmer_2s_infinite]" />
        </div>
      )}
    </Button>
  )
}
