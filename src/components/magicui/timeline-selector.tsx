"use client";
import { cn } from "@/lib/utils";
import { ComponentPropsWithoutRef, useEffect, useState } from "react";

export interface YearSelectorItem {
  year: number;
  count?: number;
}

interface YearSelectorArcProps extends ComponentPropsWithoutRef<"div"> {
  className?: string;
  years: YearSelectorItem[];
  onYearSelect: (year: number) => void;
  selectedYear?: number;
  arcConfig?: {
    circleWidth?: number;
    angleBetweenMinorSteps?: number;
    lineCountFillBetweenSteps?: number;
    boundaryPlaceholderLinesCount?: number;
  };
}

export function YearSelectorArc(props: YearSelectorArcProps) {
  const {
    className,
    years,
    onYearSelect,
    selectedYear,
    arcConfig = {},
    ...restProps
  } = props;

  const {
    circleWidth = 4000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 7,
    boundaryPlaceholderLinesCount = 70,
  } = arcConfig;

  // Initialize rotation to center the selected year or middle year
  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(
    () => {
      const initialYearIndex = selectedYear
        ? years.findIndex(y => y.year === selectedYear)
        : Math.floor(years.length / 2);
      return (
        -1 *
          initialYearIndex *
          angleBetweenMinorSteps *
          (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      );
    }
  );

  const [activeYear, setActiveYear] = useState<number>(
    selectedYear || years[Math.floor(years.length / 2)]?.year
  );

  // Update active year when rotation changes
  useEffect(() => {
    const normalizedRotation = Math.abs(
      circleContainerRotateDeg +
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    );
    const targetIndex = Math.round(
      normalizedRotation /
        (angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1))
    );

    if (years[targetIndex]) {
      const newYear = years[targetIndex].year;
      if (newYear !== activeYear) {
        setActiveYear(newYear);
        onYearSelect(newYear);
      }
    }
  }, [
    circleContainerRotateDeg,
    years,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    onYearSelect,
    activeYear,
  ]);

  return (
    <div
      {...restProps}
      className={cn("relative h-[200px] w-full overflow-hidden", className)}
    >
      <div
        style={{
          transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
          width: `${circleWidth}px`,
        }}
        className="absolute top-28 left-1/2 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
      >
        {years.map((yearItem, yearIndex) => {
          const angle =
            angleBetweenMinorSteps *
              (lineCountFillBetweenSteps + 1) *
              yearIndex +
            angleBetweenMinorSteps * boundaryPlaceholderLinesCount;
          const isLastYear = yearIndex === years.length - 1;
          const isFirstYear = yearIndex === 0;
          const isActive = yearItem.year === activeYear;

          return (
            <div key={yearItem.year}>
              {/* Placeholder lines before the first year */}
              {isFirstYear && (
                <PlaceholderLines
                  isFirstYear={true}
                  isLastYear={false}
                  angle={angle}
                  angleBetweenMinorSteps={angleBetweenMinorSteps}
                  lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                  boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                  yearIndex={yearIndex}
                  circleWidth={circleWidth}
                  circleContainerRotateDeg={circleContainerRotateDeg}
                />
              )}

              {/* Year marker */}
              <div
                className={cn(
                  "absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-200",
                  isActive ? "h-[80px] w-[2px]" : "h-16 w-[1.5px]"
                )}
                style={{
                  transformOrigin: `50% ${circleWidth / 2}px`,
                  transform: `rotate(${angle}deg)`,
                }}
                onClick={() => {
                  setCircleContainerRotateDeg(-1 * angle);
                  setActiveYear(yearItem.year);
                  onYearSelect(yearItem.year);
                }}
              >
                <div
                  className={cn(
                    "h-full w-full transition-colors duration-200",
                    isActive
                      ? "bg-[var(--step-line-active-color,#146939)] dark:bg-[var(--step-line-active-color,#fcd83d)]"
                      : "bg-[var(--step-line-inactive-color,#888)] dark:bg-[var(--step-line-inactive-color,#aaa)]"
                  )}
                />
                <div
                  className={cn(
                    "absolute top-0 left-7 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
                    isActive
                      ? "font-bold text-[var(--time-active-color,#146939)] dark:text-[var(--time-active-color,#fcd83d)]"
                      : "text-[var(--time-inactive-color,#888)] dark:text-[var(--time-inactive-color,#aaa)]"
                  )}
                  style={{
                    transform: `translate(-50%, calc(-100% - 24px)) rotate(${-1 * angle - circleContainerRotateDeg}deg)`,
                  }}
                >
                  {yearItem.year}
                  {yearItem.count !== undefined && (
                    <span className="ml-1 text-xs opacity-70">
                      ({yearItem.count})
                    </span>
                  )}
                </div>
              </div>

              {/* Fill lines between years, in the last year, fill the placeholder lines */}
              <PlaceholderLines
                isFirstYear={false}
                isLastYear={isLastYear}
                angle={angle}
                angleBetweenMinorSteps={angleBetweenMinorSteps}
                lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                boundaryPlaceholderLinesCount={boundaryPlaceholderLinesCount}
                yearIndex={yearIndex}
                circleWidth={circleWidth}
                circleContainerRotateDeg={circleContainerRotateDeg}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

interface PlaceholderLinesProps {
  isFirstYear: boolean;
  angleBetweenMinorSteps: number;
  angle: number;
  lineCountFillBetweenSteps: number;
  boundaryPlaceholderLinesCount: number;
  isLastYear: boolean;
  yearIndex: number;
  circleWidth: number;
  circleContainerRotateDeg: number;
}

function PlaceholderLines(props: PlaceholderLinesProps) {
  const {
    isFirstYear,
    isLastYear,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    yearIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props;

  const getAngle = (index: number) => {
    if (isFirstYear) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  return (
    <>
      {Array(
        isLastYear || isFirstYear
          ? boundaryPlaceholderLinesCount
          : lineCountFillBetweenSteps
      )
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${yearIndex}-${fillIndex}`}
              className="absolute top-0 left-1/2 h-[34px] w-[1px] -translate-x-1/2"
              style={{
                transformOrigin: `50% ${circleWidth / 2}px`,
                transform: `rotate(${fillAngle}deg)`,
              }}
            >
              <div
                className="h-full w-full bg-[var(--placeholder-line-color,#888)] dark:bg-[var(--placeholder-line-color,#aaa)]"
                style={{
                  transformOrigin: "center top",
                  transform: `rotate(${
                    -1 * fillAngle - circleContainerRotateDeg
                  }deg)`,
                }}
              />
            </div>
          );
        })}
    </>
  );
}
