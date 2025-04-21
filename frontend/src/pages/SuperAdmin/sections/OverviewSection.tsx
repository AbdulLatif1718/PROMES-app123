import {
    BarChart3Icon,
    DollarSignIcon,
    TrendingUpIcon,
    UsersIcon,
  } from "lucide-react";
  import { Card, CardContent } from "../../../components/ui/card";
  import { JSX } from "react";
  
  // Dummy overview data (to be replaced with fetched data later)
  const overviewData = [
    {
      title: "Total Projects",
      value: "128",
      percentage: "↑ 12%",
      icon: <BarChart3Icon className="text-white" />,
      bgClass:
        "[background:linear-gradient(1deg,rgba(20,101,214,0.75)_3%,rgba(20,101,214,1)_50%,rgba(21,98,205,1)_100%)]",
    },
    {
      title: "Total Constituencies",
      value: "52",
      percentage: "↑ 8%",
      icon: <UsersIcon className="text-white" />,
      bgClass:
        "bg-blend-multiply [background:linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.24)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] bg-linearblack",
    },
    {
      title: "Expenses",
      value: "₵1.25M",
      percentage: "↓ 3%",
      icon: <DollarSignIcon className="text-white" />,
      bgClass:
        "[background:linear-gradient(180deg,rgba(21,98,205,1)_0%,rgba(20,101,214,1)_47%,rgba(20,101,214,0.75)_100%)]",
    },
    {
      title: "Revenue Generated",
      value: "₵2.78M",
      percentage: "↑ 21%",
      icon: <TrendingUpIcon className="text-white" />,
      bgClass:
        "bg-blend-multiply [background:linear-gradient(180deg,rgba(255,255,255,0.03)_0%,rgba(255,255,255,0.24)_100%),linear-gradient(0deg,rgba(0,0,0,0.2)_0%,rgba(0,0,0,0.2)_100%),linear-gradient(0deg,rgba(0,0,0,1)_0%,rgba(0,0,0,1)_100%)] bg-linearblack",
    },
  ];
  
  export const OverviewSection = (): JSX.Element => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
        {overviewData.map((card, index) => (
          <Card
            key={index}
            className={`w-full rounded-3xl ${card.bgClass} border-none`}
          >
            <CardContent className="p-6 flex flex-col gap-2">
              <div className="flex items-center justify-between w-full rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <div className="font-16-regular text-white text-[length:var(--16-regular-font-size)] tracking-[var(--16-regular-letter-spacing)] leading-[var(--16-regular-line-height)]">
                    {card.title}
                  </div>
                </div>
                {card.icon}
              </div>
  
              <div className="flex items-center justify-between w-full rounded-lg">
                <div className="flex flex-col items-start justify-center">
                  <div className="font-32-semibold text-white text-[length:var(--32-semibold-font-size)] tracking-[var(--32-semibold-letter-spacing)] leading-[var(--32-semibold-line-height)]">
                    {card.value}
                  </div>
                </div>
                <div className="flex flex-col items-end justify-center">
                  <div className="font-18-regular text-white text-[length:var(--18-regular-font-size)] tracking-[var(--18-regular-letter-spacing)] leading-[var(--18-regular-line-height)] whitespace-nowrap">
                    {card.percentage}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    );
  };
  