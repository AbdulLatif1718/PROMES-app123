import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PenSquareIcon, X } from "lucide-react";
import { Button } from "../../../components/ui/button";

export const CreateNewModal = () => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<"admin" | "project" | null>(null);
  const navigate = useNavigate();

  const handleCreate = () => {
    if (selected === "admin") {
      navigate("/create-constituency-admin");
    } else if (selected === "project") {
      navigate("/project-registration");
    }
  };

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        className="bg-blue-600 hover:bg-blue-900 text-white flex items-center gap-2 rounded-xl"
      >
        <PenSquareIcon className="w-5 h-5" />
        Create New
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm">
        <div className="relative w-full max-w-lg bg-white rounded-xl shadow-xl p-6">
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 text-gray-500 hover:text-black"
          >
            <X className="w-5 h-5" />
          </button>
      
          {/* Title */}
          <h2 className="text-lg font-semibold text-[#101828] mb-6">
            Select what you want to create
          </h2>
      
          {/* Options */}
          <div className="flex flex-col gap-4">
            <div
              className={`border rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 ${
                selected === "admin"
                  ? "border-[#0047B3] bg-[#F0F7FF]"
                  : "border-[#D0D5DD] bg-white"
              }`}
              onClick={() => setSelected("admin")}
            >
              <h3 className="text-sm font-semibold text-[#101828] mb-1">
                Create Constituency Admin
              </h3>
              <p className="text-xs text-[#667085]">
                Create a new constituency admin with roles and details
              </p>
            </div>
      
            <div
              className={`border rounded-xl px-5 py-4 cursor-pointer transition-all duration-200 ${
                selected === "project"
                  ? "border-[#0047B3] bg-[#F0F7FF]"
                  : "border-[#D0D5DD] bg-white"
              }`}
              onClick={() => setSelected("project")}
            >
              <h3 className="text-sm font-semibold text-[#101828] mb-1">
                Create New Project
              </h3>
              <p className="text-xs text-[#667085]">
                Register a new project to be monitored and managed
              </p>
            </div>
          </div>
      
          {/* Action button */}
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleCreate}
              disabled={!selected}
              className={`px-6 py-2 rounded-lg text-white font-semibold text-sm transition ${
                selected
                  ? "bg-[#0047B3] hover:bg-[#003a91]"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
      
      )}
    </>
  );
};
