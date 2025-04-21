import { CalendarIcon, PenSquareIcon } from "lucide-react";
import { Button } from "../../../components/ui/button";
import { JSX } from "react";

export const TopButtonsSection = (): JSX.Element => {
  // Data for date range
  const dateRange = "Jan 12, 2024 – Jan 18, 2024";

  return (
    <div className="flex w-full justify-between items-start py-6">
      <div className="flex items-center gap-4">
        <Button className="h-10 gap-2 px-3 py-0 bg-foundation-bluenormal text-globalbasewhite rounded-[7px] flex items-center">
          <PenSquareIcon className="w-5 h-5" />
          <span className="font-medium-14 font-[number:var(--medium-14-font-weight)] text-[length:var(--medium-14-font-size)] tracking-[var(--medium-14-letter-spacing)] leading-[var(--medium-14-line-height)]">
            Create New
          </span>
        </Button>
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-10 gap-1 px-3.5 py-2.5 bg-white border-[#004fbe] rounded-lg flex items-center"
        >
          <CalendarIcon className="w-5 h-5 text-[#344054]" />
          <span className="font-text-sm-semibold font-[number:var(--text-sm-semibold-font-weight)] text-[#344054] text-[length:var(--text-sm-semibold-font-size)] tracking-[var(--text-sm-semibold-letter-spacing)] leading-[var(--text-sm-semibold-line-height)]">
            {dateRange}
          </span>
        </Button>
      </div>
    </div>
  );
};
