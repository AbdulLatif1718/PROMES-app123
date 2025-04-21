import AdminNav from "../../components/Shared/AdminNav";
import { ProjectsSection } from "./sections/ProjectsSection";
import { OverviewSection } from "./sections/OverviewSection";
import { ProjectSummarySection } from "./sections/ProjectSummarySection";
import { RecentActivity } from "./sections/RecentActivitySection";
import { TopButtonsSection } from "./sections/TopButtonsSection";
import { JSX } from "react";

export default function SuperDashboardPage(): JSX.Element {
  return (
    <main className="flex flex-col w-full max-w-[1408px] mx-auto gap-6 px-8 py-8">
      <AdminNav />
      <TopButtonsSection />
      <OverviewSection />
      <ProjectSummarySection />
      <RecentActivity />
      <ProjectsSection />
    </main>
  );
}
