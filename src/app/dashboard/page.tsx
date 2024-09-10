


"use client"; 

import * as React from "react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

// export const description = "An interactive bar chart";

const chartData = [
   
   { date: "2024-02-05", desktop: 167, mobile: 120 },
   { date: "2024-02-12", desktop: 243, mobile: 180 },
   { date: "2024-02-19", desktop: 293, mobile: 310 },
   { date: "2024-02-26", desktop: 335, mobile: 270 },
   { date: "2024-03-04", desktop: 385, mobile: 320 },
   { date: "2024-03-11", desktop: 420, mobile: 460 },
   { date: "2024-03-18", desktop: 381, mobile: 310 },
   { date: "2024-03-25", desktop: 398, mobile: 290 },
   { date: "2024-05-13", desktop: 409, mobile: 160 },
   { date: "2024-05-14", desktop: 395, mobile: 490 },
   { date: "2024-05-15", desktop: 418, mobile: 380 },
   { date: "2024-05-16", desktop: 430, mobile: 400 },
   
 ]


const chartConfig = {
  views: {
    label: "Page Views",
  },
  desktop: {
    label: "Desktop",
    color: "hsl(var(--chart-1))",
  },
  mobile: {
    label: "Mobile",
    color: "hsl(var(--chart-2))",
  },
};

export default function Page() {
  const [activeChart, setActiveChart] = React.useState<keyof typeof chartConfig>(
    "desktop"
  );

  const total = React.useMemo(
    () => ({
      desktop: chartData.reduce((acc, curr) => acc + curr.desktop, 0),
      mobile: chartData.reduce((acc, curr) => acc + curr.mobile, 0),
    }),
    []
  );

  return (
    <Card>
      <CardHeader className="flex flex-col items-stretch space-y-0 border-b p-0 sm:flex-row">
        <div className="flex flex-1 flex-col justify-center gap-1 px-6 py-5 sm:py-6">
          <CardTitle>Average score, week on week</CardTitle>
        </div>
        <div className="flex">
          {["desktop", "mobile"].map((key) => {
            const chart = key as keyof typeof chartConfig;
            return (
              <button
                key={chart}
                data-active={activeChart === chart}
                className="relative z-30 flex flex-1 flex-col justify-center gap-1 border-t px-6  text-left even:border-l data-[active=true]:bg-muted/50 sm:border-l sm:border-t-0 "
                onClick={() => setActiveChart(chart)}
              >
                <span className="text-xs text-muted-foreground">
                  {chartConfig[chart].label}
                </span>
                <span className="text-lg font-bold leading-none sm:text-3xl">
                  {total[key as keyof typeof total].toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      </CardHeader>
      <CardContent className="px-2 sm:p-6">
        <ChartContainer
          config={chartConfig}
          className="aspect-auto h-[250px] w-full"
        >
          <BarChart 
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid className="bg-[black]
            " vertical={false} />
            <XAxis 
              dataKey="date"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              minTickGap={32}
              tickFormatter={(value) => {
                const date = new Date(value);
                return date.toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                });
              }}
            />
            <ChartTooltip
              content={
                <ChartTooltipContent
                  className="w-[150px] "
                  nameKey="views"
                  labelFormatter={(value) => {
                    return new Date(value).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    });
                  }}
                />
              }
            />
            <Bar dataKey={activeChart} fill={`var(--color-${activeChart})`} />
          </BarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
