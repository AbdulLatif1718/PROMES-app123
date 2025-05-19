import AdminNav from "../../../components/Shared/AdminNav";
import { useState, ChangeEvent, DragEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { CalendarIcon } from "lucide-react";

export const ProjectRegistrationForm = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    projectName: "",
    constituency: "",
    startDate: "",
    endDate: "",
    description: "",
    assignedAdmin: "",
    department: "",
    contractor: "",
  });
  const [files, setFiles] = useState<File[]>([]);

  const constituencies = ["Tarkwa Nsuaem", "Kumasi Central", "Accra West"];

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSelect = (field: string) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };

  const onDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (e.dataTransfer.files.length) {
      setFiles(Array.from(e.dataTransfer.files));
    }
  };
  const onBrowse = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) setFiles(Array.from(e.target.files));
  };

  const allRequired =
    form.projectName &&
    form.constituency &&
    form.startDate &&
    form.endDate &&
    form.description &&
    form.assignedAdmin &&
    form.department &&
    form.contractor;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting project:", form, files);
    navigate(-1);
  };

  return (
    <Card className="max-w-4xl mx-auto mt-8">
        <AdminNav />
    
        {/* Header */}
      <CardHeader className="flex items-center gap-4 px-6 py-4 border-b">
        <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-800">
          ←
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Project Registration</h1>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="px-6 py-8 space-y-8 bg-gray-50">
          {/* Project Information */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700">Project Information</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Project Name</label>
                <Input
                  name="projectName"
                  value={form.projectName}
                  onChange={handleChange}
                  placeholder="e.g. Kwame"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Constituency</label>
                <Select value={form.constituency} onValueChange={handleSelect("constituency")}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an Option" />
                  </SelectTrigger>
                  <SelectContent>
                    {constituencies.map((c) => (
                      <SelectItem key={c} value={c}>{c}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Start Date</label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="date"
                    name="startDate"
                    value={form.startDate}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  End Date / Estimation
                </label>
                <div className="relative">
                  <CalendarIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
                  <Input
                    type="date"
                    name="endDate"
                    value={form.endDate}
                    onChange={handleChange}
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Project description</label>
                <textarea
                  name="description"
                  value={form.description}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Write your description here …"
                  className="w-full p-3 border border-gray-200 rounded-lg resize-none text-sm text-gray-700"
                />
              </div>
            </div>
          </section>

          {/* Administrative Details */}
          <section className="space-y-4">
            <h2 className="text-lg font-medium text-gray-700">Administrative Details</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Assigned Admin</label>
                <Input
                  name="assignedAdmin"
                  value={form.assignedAdmin}
                  onChange={handleChange}
                  placeholder="e.g. 0248294789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Department Handling</label>
                <Input
                  name="department"
                  value={form.department}
                  onChange={handleChange}
                  placeholder="e.g. Infrastructure"
                />
              </div>
              <div className="md:col-span-2">
                <label className="block text-sm font-medium text-gray-700 mb-1">Contractor Name</label>
                <Input
                  name="contractor"
                  value={form.contractor}
                  onChange={handleChange}
                  placeholder="e.g. ABC Construction"
                />
              </div>
            </div>
          </section>

          {/* Attach Documents */}
          <section className="space-y-2">
            <h2 className="text-lg font-medium text-gray-700">Attach Documents & Permits</h2>
            <div
              onDrop={onDrop}
              onDragOver={(e) => e.preventDefault()}
              className="border-2 border-dashed border-gray-300 rounded-lg h-24 flex flex-col items-center justify-center text-gray-500 cursor-pointer"
            >
              <input
                type="file"
                multiple
                accept=".jpg,.png,.gif"
                onChange={onBrowse}
                className="hidden"
                id="file-upload"
              />
              <label htmlFor="file-upload" className="cursor-pointer">
                Drag & drop files or <span className="text-blue-600 underline">browse files</span>
              </label>
              <p className="text-xs text-gray-400">JPG, PNG or GIF — Max file size 2MB</p>
            </div>
          </section>
        </CardContent>

        <CardFooter className="px-6 py-4 flex justify-end gap-3 bg-gray-50">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit" disabled={!allRequired}>
            Continue
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
