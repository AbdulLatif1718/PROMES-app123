import { CreateNewModal } from "../dialogs/CreateNewModal";
import { CalendarIcon} from "lucide-react";
import { Button } from "../../../components/ui/button";
import { JSX } from "react";

export const TopButtonsSection = (): JSX.Element => {
  // Data for date range
  const dateRange = "Jan 12, 2024 – Jan 18, 2024";

  return (
    <div className="flex w-full justify-between items-start py-6">
      <div className="flex items-center gap-4">
        <CreateNewModal />
      </div>

      <div className="flex items-center gap-4">
        <Button
          variant="outline"
          className="h-10 gap-1 px-3.5 py-2.5 bg-white rounded-xl flex items-center"
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
