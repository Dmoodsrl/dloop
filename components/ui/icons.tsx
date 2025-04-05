import {
  Loader2,
  LucideProps,
  Moon,
  SunMedium,
  Twitter,
  type LucideIcon,
} from "lucide-react"

export const Icons = {
  sun: SunMedium,
  moon: Moon,
  twitter: Twitter,
  spinner: Loader2,
  google: ({ ...props }: LucideProps) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" {...props}>
      <path fill="currentColor" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137q-1.35-1.35-2.137-3.175T2 12q0-2.075.788-3.9t2.137-3.175q1.35-1.35 3.175-2.137T12 2q2.075 0 3.9.788t3.175 2.137q1.35 1.35 2.138 3.175T22 12q0 2.075-.788 3.9t-2.137 3.175q-1.35 1.35-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12q0-3.35-2.325-5.675T12 4Q8.65 4 6.325 6.325T4 12q0 3.35 2.325 5.675T12 20m0-8q0-.825.588-1.413T14 10q.825 0 1.413.588T16 12q0 .825-.588 1.413T14 14q-.825 0-1.413-.588T12 12" />
    </svg>
  ),
  logo: ({ ...props }: LucideProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke="currentColor"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="7" cy="15" r="2" />
      <circle cx="17" cy="15" r="2" />
      <path d="M3 9a2 1 0 0 0 2 1h14a2 1 0 0 0 2 -1" />
    </svg>
  ),
}