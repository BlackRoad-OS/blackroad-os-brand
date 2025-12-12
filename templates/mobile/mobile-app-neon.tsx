import React from "react";
import { Home, Compass, Code2, BookOpen, Sparkles, TerminalSquare, User } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";

// BlackRoad neon palette
// #FF9D00, #FF6B00, #FF0066, #FF006B, #D600AA, #7700FF, #0066FF

const gradientBg =
  "bg-[radial-gradient(circle_at_top,_rgba(255,0,102,0.28),transparent_55%),#000000]";
const pillGradient =
  "bg-[linear-gradient(120deg,#FF9D00,#FF0066,#7700FF,#0066FF)]";

export default function BlackRoadMobileApp() {
  return (
    <div className={`min-h-screen ${gradientBg} text-slate-50 flex justify-center`}>
      <div className="w-full max-w-sm flex flex-col min-h-screen px-4 pt-5 pb-20">
        <AppHeader />
        <MainTabs />
        <BottomNav />
      </div>
    </div>
  );
}

function AppHeader() {
  return (
    <header className="mb-4">
      <div className={`relative rounded-2xl border border-neutral-800 px-4 py-3 flex items-center gap-3 shadow-[0_0_40px_rgba(0,0,0,0.9)] bg-neutral-950/90`}>
        <div
          className={`w-10 h-10 rounded-2xl ${pillGradient} flex items-center justify-center shadow-[0_0_32px_rgba(255,0,102,0.8)]`}
        >
          <span className="text-xs font-semibold tracking-[0.14em] uppercase">
            BR
          </span>
        </div>
        <div className="flex flex-col">
          <span className="text-[0.7rem] uppercase tracking-[0.16em] text-neutral-400">
            BlackRoad OS
          </span>
          <span className="text-sm font-semibold">One road for all your work</span>
        </div>
        <Button
          size="sm"
          className="ml-auto h-8 px-3 rounded-full border border-neutral-700 bg-neutral-950 text-[0.7rem] font-medium hover:bg-neutral-900"
        >
          Open Prism
        </Button>
      </div>
    </header>
  );
}

function MainTabs() {
  return (
    <Tabs defaultValue="overview" className="flex-1 flex flex-col gap-3">
      <TabsList className="grid grid-cols-3 rounded-full bg-neutral-950/90 border border-neutral-800 p-1 mb-3">
        <TabsTrigger
          value="overview"
          className="rounded-full data-[state=active]:text-white data-[state=active]:shadow-[0_0_24px_rgba(255,0,102,0.7)] data-[state=active]:bg-[linear-gradient(120deg,#FF9D00,#FF0066,#7700FF)] text-[0.7rem] tracking-wide"
        >
          Home
        </TabsTrigger>
        <TabsTrigger
          value="create"
          className="rounded-full data-[state=active]:text-white data-[state=active]:shadow-[0_0_24px_rgba(255,0,102,0.7)] data-[state=active]:bg-[linear-gradient(120deg,#FF9D00,#FF0066,#7700FF)] text-[0.7rem] tracking-wide"
        >
          Create
        </TabsTrigger>
        <TabsTrigger
          value="learn"
          className="rounded-full data-[state=active]:text-white data-[state=active]:shadow-[0_0_24px_rgba(0,102,255,0.8)] data-[state=active]:bg-[linear-gradient(120deg,#0066FF,#7700FF,#FF006B)] text-[0.7rem] tracking-wide"
        >
          Learn
        </TabsTrigger>
      </TabsList>

      <TabsContent value="overview" className="flex-1">
        <OverviewScreen />
      </TabsContent>
      <TabsContent value="create" className="flex-1">
        <CreateScreen />
      </TabsContent>
      <TabsContent value="learn" className="flex-1">
        <LearnScreen />
      </TabsContent>
    </Tabs>
  );
}

function OverviewScreen() {
  return (
    <div className="flex flex-col gap-3 pb-4">
      <Card className="border-neutral-800 bg-neutral-950/90 rounded-2xl shadow-[0_14px_32px_rgba(0,0,0,0.9)]">
        <CardContent className="p-3 flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-neutral-900 border border-neutral-700 flex items-center justify-center">
            <Sparkles className="w-4 h-4 text-[#FF0066]" />
          </div>
          <div>
            <p className="text-xs text-neutral-400">Today&apos;s focus</p>
            <p className="text-sm font-medium">Ship one small thing along the road</p>
          </div>
        </CardContent>
      </Card>

      <SectionTitle>Quick actions</SectionTitle>
      <div className="grid grid-cols-2 gap-3">
        <QuickAction
          icon={Compass}
          label="Explore BlackRoad.io"
          sub="Main hub"
          gradient="from-[#FF9D00] via-[#FF0066] to-[#7700FF]"
        />
        <QuickAction
          icon={Code2}
          label="Developer docs"
          sub="blackroad.systems"
          gradient="from-[#0066FF] via-[#7700FF] to-[#FF006B]"
        />
        <QuickAction
          icon={TerminalSquare}
          label="Prism Console"
          sub="Tools / Ops"
          gradient="from-[#FF6B00] via-[#FF0066] to-[#D600AA]"
        />
        <QuickAction
          icon={BookOpen}
          label="Research hub"
          sub="Pain & data"
          gradient="from-[#7700FF] via-[#0066FF] to-[#FF006B]"
        />
      </div>

      <SectionTitle>Domains</SectionTitle>
      <div className="flex flex-col gap-2">
        <DomainRow
          label="blackroad.io"
          tag="Main hub"
          color="#FF9D00"
          desc="Creators, learners, businesses"
        />
        <DomainRow
          label="blackroadinc.us"
          tag="B2B"
          color="#FF6B00"
          desc="Ops Starter & consulting"
        />
        <DomainRow
          label="blackroad.systems"
          tag="Docs"
          color="#0066FF"
          desc="Architecture, API, SDKs"
        />
        <DomainRow
          label="lucidia.earth"
          tag="Agents"
          color="#D600AA"
          desc="Lucidia ecosystem"
        />
      </div>
    </div>
  );
}

function CreateScreen() {
  return (
    <div className="flex flex-col gap-3 pb-4">
      <SectionTitle>Start creating</SectionTitle>
      <p className="text-xs text-neutral-400 mb-1">
        Pick a lane. BlackRoad will keep the road straight while you build.
      </p>
      <div className="flex flex-col gap-3">
        <CreateCard
          title="Video — RoadView Studio"
          desc="Scripts, cuts, and captions from one canvas."
          pill="/create/video"
          gradient="from-[#FF9D00] via-[#FF0066] to-[#7700FF]"
        />
        <CreateCard
          title="Code — Lucidia IDE"
          desc="Agents, packs, and OS logic in one repo view."
          pill="/create/code"
          gradient="from-[#0066FF] via-[#7700FF] to-[#FF006B]"
        />
        <CreateCard
          title="Games — RoadEngine"
          desc="Interactive worlds wired into the OS."
          pill="/create/games"
          gradient="from-[#FF6B00] via-[#FF0066] to-[#D600AA]"
        />
      </div>
    </div>
  );
}

function LearnScreen() {
  return (
    <div className="flex flex-col gap-3 pb-4">
      <SectionTitle>Learn the system</SectionTitle>
      <p className="text-xs text-neutral-400 mb-1">
        For the people who want to understand why this road exists, not just use it.
      </p>
      <div className="flex flex-col gap-3">
        <LearnCard
          title="BlackRoad thesis"
          pill="/learn"
          desc="Context switching, SaaS waste, and why one OS."
        />
        <LearnCard
          title="Research & data book"
          pill="/learn/research"
          desc="The stats that back the story."
        />
        <LearnCard
          title="Architecture map"
          pill="blackroad.systems/docs/architecture"
          desc="Agents, packs, OS layers, and flows."
        />
      </div>
    </div>
  );
}

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="text-[0.7rem] uppercase tracking-[0.18em] text-neutral-500">
      {children}
    </h2>
  );
}

function QuickAction({
  icon: Icon,
  label,
  sub,
  gradient,
}: {
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  label: string;
  sub: string;
  gradient: string;
}) {
  return (
    <button className="group relative rounded-2xl overflow-hidden border border-neutral-800 bg-neutral-950/80 shadow-[0_12px_26px_rgba(0,0,0,0.9)] text-left px-3 py-3">
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none bg-[radial-gradient(circle_at_top,_rgba(255,0,102,0.4),transparent_55%)]`}
      />
      <div className="relative flex items-center gap-2">
        <div
          className={`w-8 h-8 rounded-xl bg-gradient-to-r ${gradient} flex items-center justify-center text-xs shadow-[0_0_26px_rgba(255,0,102,0.7)]`}
        >
          <Icon className="w-4 h-4" />
        </div>
        <div className="flex flex-col">
          <span className="text-[0.78rem] font-medium leading-tight">{label}</span>
          <span className="text-[0.7rem] text-neutral-400">{sub}</span>
        </div>
      </div>
    </button>
  );
}

function DomainRow({
  label,
  tag,
  color,
  desc,
}: {
  label: string;
  tag: string;
  color: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/80 px-3 py-2">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-[0.7rem] font-semibold"
        style={{
          backgroundImage: "linear-gradient(135deg, rgba(0,0,0,0.9), rgba(0,0,0,0.2))",
          boxShadow: `0 0 18px ${color}55`,
          border: `1px solid ${color}AA`,
        }}
      >
        <span className="truncate max-w-[1.7rem]">{label.split(".")[0]}</span>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between gap-2">
          <span className="text-[0.78rem] font-medium truncate">{label}</span>
          <span
            className="text-[0.63rem] uppercase tracking-[0.18em] px-2 py-0.5 rounded-full text-neutral-200"
            style={{
              backgroundColor: `${color}33`,
              border: `1px solid ${color}AA`,
            }}
          >
            {tag}
          </span>
        </div>
        <p className="text-[0.7rem] text-neutral-400 truncate">{desc}</p>
      </div>
    </div>
  );
}

function CreateCard({
  title,
  desc,
  pill,
  gradient,
}: {
  title: string;
  desc: string;
  pill: string;
  gradient: string;
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-950/90 rounded-2xl shadow-[0_14px_32px_rgba(0,0,0,0.9)]">
      <CardContent className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium leading-tight">{title}</p>
          <span
            className={`text-[0.6rem] uppercase tracking-[0.18em] bg-neutral-950 border border-neutral-700 rounded-full px-2 py-0.5 text-neutral-400`}
          >
            {pill}
          </span>
        </div>
        <p className="text-xs text-neutral-400">{desc}</p>
        <div className="flex justify-end mt-1">
          <Button
            size="sm"
            className={`h-7 px-3 rounded-full bg-gradient-to-r ${gradient} border-none text-[0.7rem] shadow-[0_0_24px_rgba(255,0,102,0.8)]`}
          >
            Open lane
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

function LearnCard({
  title,
  pill,
  desc,
}: {
  title: string;
  pill: string;
  desc: string;
}) {
  return (
    <Card className="border-neutral-800 bg-neutral-950/90 rounded-2xl shadow-[0_14px_32px_rgba(0,0,0,0.9)]">
      <CardContent className="p-3 flex flex-col gap-2">
        <div className="flex items-center justify-between gap-2">
          <p className="text-sm font-medium leading-tight">{title}</p>
          <span className="text-[0.6rem] uppercase tracking-[0.18em] bg-neutral-950 border border-neutral-700 rounded-full px-2 py-0.5 text-neutral-400">
            {pill}
          </span>
        </div>
        <p className="text-xs text-neutral-400">{desc}</p>
      </CardContent>
    </Card>
  );
}

function BottomNav() {
  const items: {
    icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
    label: string;
    active?: boolean;
  }[] = [
    { icon: Home, label: "Home", active: true },
    { icon: Compass, label: "Create" },
    { icon: Code2, label: "Docs" },
    { icon: User, label: "Me" },
  ];

  return (
    <nav className="fixed bottom-3 left-0 right-0 flex justify-center pointer-events-none">
      <div className="pointer-events-auto w-full max-w-sm px-4">
        <div className="rounded-2xl bg-neutral-950/95 border border-neutral-800 backdrop-blur-xl flex items-center justify-between px-4 py-2 shadow-[0_18px_40px_rgba(0,0,0,1)]">
          {items.map((item) => (
            <button
              key={item.label}
              className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-xl transition-colors duration-150 ${
                item.active
                  ? "text-white"
                  : "text-neutral-500 hover:text-neutral-300"
              }`}
            >
              <item.icon
                className={`w-4 h-4 mb-0.5 ${
                  item.active
                    ? "text-[#FF0066] drop-shadow-[0_0_14px_rgba(255,0,102,0.9)]"
                    : ""
                }`}
              />
              <span className="text-[0.6rem] tracking-[0.16em] uppercase">
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
}
