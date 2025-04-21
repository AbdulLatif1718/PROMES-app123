import { SearchIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { JSX } from "react";

export const ProjectsSection = (): JSX.Element => {
  // Data for pagination display
  const paginationData = {
    showing: { from: 1, to: 5 },
    total: 0,
  };

  return (
    <Card className="w-full rounded-lg overflow-hidden">
      <CardHeader className="px-6 py-4 flex flex-row items-center justify-between border-b border-[#f2f4f7]">
        <h2 className="font-bold text-lg text-color-paletheading-color font-['Figtree',Helvetica]">
          Recent Activity
        </h2>

        <div className="w-[293px]">
          <div className="relative flex items-center">
            <SearchIcon className="absolute left-3 w-5 h-5 text-[#7c7c7c]" />
            <Input
              className="pl-10 py-2.5 border border-solid border-[#9b9b9b] font-['Figtree',Helvetica] text-sm"
              placeholder="SearchIcon by name"
            />
          </div>
        </div>
      </CardHeader>

      <CardContent className="flex flex-col items-center justify-center py-16">
        <img
          className="w-[266.49px] h-[286.82px] mb-6"
          alt="Undraw knowledge"
          src="/undraw-knowledge-0ty5--1--1.svg"
        />

        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="font-text-xl-semibold text-global-neutral-grey-1300 text-[length:var(--text-xl-semibold-font-size)] tracking-[var(--text-xl-semibold-letter-spacing)] leading-[var(--text-xl-semibold-line-height)]">
            No Recent Activitiy
          </h3>
          <p className="font-text-lg-regular text-global-neutral-grey-1000 text-[length:var(--text-lg-regular-font-size)] tracking-[var(--text-lg-regular-letter-spacing)] leading-[var(--text-lg-regular-line-height)]">
            No activities yet. They&apos;ll appear here once created.
          </p>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between px-5 py-4 border-t border-solid border-[#f2f4f7]">
        <div className="flex items-center gap-1">
          <span className="font-['Figtree',Helvetica] font-normal text-[#4f4d55] text-sm tracking-[-0.05px] leading-5">
            Showing
          </span>
          <span className="font-['Figtree',Helvetica] font-semibold text-global-neutral-grey-1300 text-sm tracking-[-0.02px] leading-5">
            {paginationData.showing.from}
          </span>
          <span className="font-['Figtree',Helvetica] font-normal text-[#4f4d55] text-sm tracking-[-0.05px] leading-5">
            to
          </span>
          <span className="font-['Figtree',Helvetica] font-semibold text-global-neutral-grey-1300 text-sm tracking-[-0.02px] leading-5">
            {paginationData.showing.to}
          </span>
          <span className="font-['Figtree',Helvetica] font-normal text-[#4f4d55] text-sm tracking-[-0.05px] leading-5">
            of
          </span>
          <span className="font-['Figtree',Helvetica] font-semibold text-global-neutral-grey-1300 text-sm tracking-[-0.02px] leading-5">
            {paginationData.total}
          </span>
          <span className="font-['Figtree',Helvetica] font-normal text-[#4f4d55] text-sm tracking-[-0.05px] leading-5">
            Results
          </span>
        </div>

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            className="h-10 px-3 py-0 bg-[#f2f4f7] rounded-lg opacity-30 text-[#667085] font-['Figtree',Helvetica] font-normal text-sm tracking-[-0.05px] leading-5"
            disabled
          >
            Previous
          </Button>
          <Button className="h-10 px-3 py-0 bg-[#004fbe] rounded-lg text-white font-['Figtree',Helvetica] font-normal text-sm tracking-[-0.05px] leading-5">
            Next
          </Button>
        </div>
      </CardFooter>
    </Card>
  );
};
