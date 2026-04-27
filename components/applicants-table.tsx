"use client"

import { Badge } from "@/components/ui/badge"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { CheckCircle2, XCircle, ArrowRight } from "lucide-react"

interface Applicant {
  id: string
  name: string
  location: string
  loanAmount: string
  creditScore: number
  legacyDecision: "Approved" | "Denied"
  equiguardDecision: "Approved" | "Denied"
}

const applicants: Applicant[] = [
  {
    id: "APP-001",
    name: "Arjun Sharma",
    location: "Mumbai, Maharashtra",
    loanAmount: "₹8,50,000",
    creditScore: 720,
    legacyDecision: "Approved",
    equiguardDecision: "Approved",
  },
  {
    id: "APP-002",
    name: "Priya Kumari",
    location: "Tumakuru, Karnataka",
    loanAmount: "₹5,25,000",
    creditScore: 715,
    legacyDecision: "Denied",
    equiguardDecision: "Approved",
  },
  {
    id: "APP-003",
    name: "Rajesh Patel",
    location: "Ahmedabad, Gujarat",
    loanAmount: "₹12,00,000",
    creditScore: 780,
    legacyDecision: "Approved",
    equiguardDecision: "Approved",
  },
  {
    id: "APP-004",
    name: "Sneha Reddy",
    location: "Hyderabad, Telangana",
    loanAmount: "₹6,75,000",
    creditScore: 695,
    legacyDecision: "Denied",
    equiguardDecision: "Approved",
  },
  {
    id: "APP-005",
    name: "Mohammed Irfan",
    location: "Bengaluru, Karnataka",
    loanAmount: "₹9,00,000",
    creditScore: 735,
    legacyDecision: "Approved",
    equiguardDecision: "Approved",
  },
]

function DecisionBadge({ decision, variant }: { decision: "Approved" | "Denied"; variant: "legacy" | "equiguard" }) {
  if (decision === "Approved") {
    return (
      <Badge className="bg-accent/20 text-accent hover:bg-accent/30 border-0 gap-1.5">
        <CheckCircle2 className="h-3.5 w-3.5" />
        Approved
      </Badge>
    )
  }
  return (
    <Badge className="bg-destructive/20 text-destructive hover:bg-destructive/30 border-0 gap-1.5">
      <XCircle className="h-3.5 w-3.5" />
      Denied
    </Badge>
  )
}

export function ApplicantsTable() {
  return (
    <div className="rounded-xl border border-border bg-card overflow-hidden">
      <Table>
        <TableHeader>
          <TableRow className="border-border hover:bg-transparent">
            <TableHead className="text-muted-foreground font-medium">Applicant ID</TableHead>
            <TableHead className="text-muted-foreground font-medium">Name</TableHead>
            <TableHead className="text-muted-foreground font-medium">Location</TableHead>
            <TableHead className="text-muted-foreground font-medium text-right">Loan Amount</TableHead>
            <TableHead className="text-muted-foreground font-medium text-center">Credit Score</TableHead>
            <TableHead className="text-muted-foreground font-medium text-center">Legacy AI</TableHead>
            <TableHead className="text-muted-foreground font-medium text-center"></TableHead>
            <TableHead className="text-muted-foreground font-medium text-center">EquiGuard AI</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants.map((applicant, index) => {
            const hasBiasCorrection = applicant.legacyDecision === "Denied" && applicant.equiguardDecision === "Approved"
            return (
              <TableRow 
                key={applicant.id} 
                className={`border-border transition-colors ${hasBiasCorrection ? "bg-accent/5" : ""}`}
              >
                <TableCell className="font-mono text-sm text-muted-foreground">{applicant.id}</TableCell>
                <TableCell className="font-medium text-foreground">{applicant.name}</TableCell>
                <TableCell className="text-muted-foreground">{applicant.location}</TableCell>
                <TableCell className="text-right font-medium text-foreground">{applicant.loanAmount}</TableCell>
                <TableCell className="text-center">
                  <span className={`font-medium ${applicant.creditScore >= 720 ? "text-accent" : applicant.creditScore >= 700 ? "text-chart-4" : "text-muted-foreground"}`}>
                    {applicant.creditScore}
                  </span>
                </TableCell>
                <TableCell className="text-center">
                  <DecisionBadge decision={applicant.legacyDecision} variant="legacy" />
                </TableCell>
                <TableCell className="text-center">
                  {hasBiasCorrection ? (
                    <ArrowRight className="h-5 w-5 text-accent mx-auto animate-pulse" />
                  ) : (
                    <span className="text-muted-foreground/40">—</span>
                  )}
                </TableCell>
                <TableCell className="text-center">
                  <DecisionBadge decision={applicant.equiguardDecision} variant="equiguard" />
                </TableCell>
              </TableRow>
            )
          })}
        </TableBody>
      </Table>
    </div>
  )
}
