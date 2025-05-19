import AdminNav from "../../../components/Shared/AdminNav";
import { useState, ChangeEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Card, CardHeader, CardContent, CardFooter } from "../../../components/ui/card";
import { Input } from "../../../components/ui/input";
import { Select, SelectTrigger, SelectContent, SelectItem, SelectValue } from "../../../components/ui/select";
import { Button } from "../../../components/ui/button";
import { CameraIcon } from "lucide-react";

export const CreateConstituencyAdminForm = () => {
  const navigate = useNavigate();

  const [photo, setPhoto] = useState<File | null>(null);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    constituencyName: "",
    dateOfCreation: "",
    numberOfLocalities: "",
    officePhone: "",
    officeEmail: "",
    officeAddress: "",
    emergencyPhone: "",
  });

  const constituencies = ["Tarkwa Nsuaem", "Kumasi Central", "Accra West"];
  const localityOptions = ["1", "2", "3", "4", "5+"];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSelect = (field: string) => (value: string) => {
    setForm((f) => ({ ...f, [field]: value }));
  };
  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) setPhoto(e.target.files[0]);
  };
  const allRequiredFilled =
    form.firstName &&
    form.lastName &&
    form.constituencyName &&
    form.dateOfCreation &&
    form.numberOfLocalities &&
    form.officePhone &&
    form.officeEmail &&
    form.officeAddress;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting:", { photo, ...form });
    navigate(-1);
  };

  return (
    <Card className="mt-8 flex flex-col w-full max-w-[1408px] mx-auto gap-6 px-8 py-8">
        <AdminNav />
      <CardHeader className="flex items-center gap-4 px-6 py-4">
        <button onClick={() => navigate(-1)} className="text-gray-600 hover:text-gray-800">
          ←
        </button>
        <h1 className="text-xl font-semibold text-gray-800">Constituency Admin</h1>
      </CardHeader>

      <form onSubmit={handleSubmit}>
        <CardContent className="px-6 py-8 space-y-8 bg-gray-50">
          {/* Personal Information */}
          <section className="space-y-6">
            <h2 className="text-lg font-medium text-gray-700">Personal Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
              {/* Photo upload */}
              <div className="flex flex-col items-center space-y-2">
                <div className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-full flex items-center justify-center text-gray-300">
                  {photo ? (
                    <img
                      src={URL.createObjectURL(photo)}
                      alt="upload"
                      className="w-full h-full object-cover rounded-full"
                    />
                  ) : (
                    <CameraIcon className="w-8 h-8" />
                  )}
                </div>
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handlePhoto}
                  className="hidden"
                  id="photo-upload"
                />
                <label htmlFor="photo-upload" className="inline-flex">
                  <Button variant="outline" className="px-4 py-2">
                    Upload Photo
                  </Button>
                </label>
              </div>

              {/* Name fields */}
              <div className="md:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <Input
                    name="firstName"
                    value={form.firstName}
                    onChange={handleChange}
                    placeholder="Enter first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <Input
                    name="lastName"
                    value={form.lastName}
                    onChange={handleChange}
                    placeholder="Enter last name"
                  />
                </div>
              </div>

              {/* Constituency & Date */}
              <div className="md:col-span-3 grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Constituency Name
                  </label>
                  <Select
                    value={form.constituencyName}
                    onValueChange={handleSelect("constituencyName")}
                  >
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select constituency" />
                    </SelectTrigger>
                    <SelectContent>
                      {constituencies.map((c) => (
                        <SelectItem key={c} value={c}>
                          {c}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Creation
                  </label>
                  <Input
                    type="date"
                    name="dateOfCreation"
                    value={form.dateOfCreation}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* Number of Localities */}
              <div className="md:col-span-3">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Number Of Localities
                </label>
                <Select
                  value={form.numberOfLocalities}
                  onValueChange={handleSelect("numberOfLocalities")}
                >
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    {localityOptions.map((n) => (
                      <SelectItem key={n} value={n}>
                        {n}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
          </section>

          {/* Contact Information */}
          <section className="space-y-6">
            <h2 className="text-lg font-medium text-gray-700">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office Phone Number
                </label>
                <Input
                  name="officePhone"
                  value={form.officePhone}
                  onChange={handleChange}
                  placeholder="e.g. 0248294789"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office Email
                </label>
                <Input
                  name="officeEmail"
                  type="email"
                  value={form.officeEmail}
                  onChange={handleChange}
                  placeholder="e.g. name@domain.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Office Address
                </label>
                <Input
                  name="officeAddress"
                  value={form.officeAddress}
                  onChange={handleChange}
                  placeholder="e.g. 123 Main Street"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Emergency Phone Number <span className="text-gray-400">(Optional)</span>
                </label>
                <Input
                  name="emergencyPhone"
                  value={form.emergencyPhone}
                  onChange={handleChange}
                  placeholder="e.g. 0248294789"
                />
              </div>
            </div>
          </section>
        </CardContent>

        <CardFooter className="px-6 py-4 flex justify-end gap-3 bg-gray-50">
          <Button variant="outline" onClick={() => navigate(-1)}>
            Cancel
          </Button>
          <Button type="submit" disabled={!allRequiredFilled}>
            Finish
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};
