"use client";
import { cn } from "@/lib/utils";
import {
  ComponentPropsWithoutRef,
  ReactNode,
  useEffect,
  useState,
} from "react";
import Image from "next/image";
import { Particles } from "./particles";
import { useTheme } from "next-themes";

export interface ArcTimelineItem {
  time: ReactNode;
  steps: Array<{
    icon: ReactNode;
    content: ReactNode;
  }>;
  fullContent?: ReactNode | string;
}
interface ArcTimelineProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Optional CSS class name to apply custom styles
   */
  className?: string;
  /**
   * The data of the arc timeline
   */
  data: ArcTimelineItem[];
  /**
   * The configuration of the arc timeline
   */
  arcConfig?: {
    /**
     * The width of the circle, default is 5000
     */
    circleWidth?: number;
    /**
     * The angle between minor steps, default is 0.35
     */
    angleBetweenMinorSteps?: number;
    /**
     * The number of lines to fill between steps, default is 10
     */
    lineCountFillBetweenSteps?: number;
    /**
     * The number of lines to fill in before the first step and after the last step
     */
    boundaryPlaceholderLinesCount?: number;
  };
  /**
   * The default active step
   */
  defaultActiveStep?: {
    /**
     * The time of the default active step
     */
    time?: string;
    /**
     * The index of the default active step
     */
    stepIndex?: number;
  };
}

export function ArcTimeline(props: ArcTimelineProps) {
  const { theme } = useTheme();
  const {
    className,
    data,
    arcConfig = {},
    defaultActiveStep = {},
    ...restProps
  } = props;

  const {
    circleWidth = 4000,
    angleBetweenMinorSteps = 0.35,
    lineCountFillBetweenSteps = 7,
    boundaryPlaceholderLinesCount = 70,
  } = arcConfig;

  const {
    time: defaultActiveTime = data[0].time,
    stepIndex: defaultActiveStepIndex = 0,
  } = defaultActiveStep || {};

  const [circleContainerRotateDeg, setCircleContainerRotateDeg] = useState(
    () => {
      let count = 0;
      for (const timelineItem of data) {
        if (timelineItem.time === defaultActiveTime) {
          count += defaultActiveStepIndex;
          break;
        } else {
          count += timelineItem.steps.length;
        }
      }
      return (
        -1 * count * angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1) -
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
      );
    }
  );

  const [activeLine, setActiveLine] = useState<ArcTimelineItem | null>(
    () => data.find(item => item.time === defaultActiveTime) || null
  );

  // Update active line when rotation changes
  useEffect(() => {
    let accumulatedSteps = 0;
    const normalizedRotation = Math.abs(
      circleContainerRotateDeg +
        angleBetweenMinorSteps * boundaryPlaceholderLinesCount
    );
    const targetStep = Math.round(
      normalizedRotation /
        (angleBetweenMinorSteps * (lineCountFillBetweenSteps + 1))
    );

    for (const line of data) {
      if (
        targetStep >= accumulatedSteps &&
        targetStep < accumulatedSteps + line.steps.length
      ) {
        setActiveLine(line);
        break;
      }
      accumulatedSteps += line.steps.length;
    }
  }, [
    circleContainerRotateDeg,
    data,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
  ]);

  return (
    <div className="relative">
      <div className="absolute top-0 z-1 h-20 w-full overflow-hidden lg:hidden">
        <Particles color={theme === "dark" ? "#fcd83d" : "#146939"} />
      </div>
      <div
        {...restProps}
        className={cn(
          "bg-secondary dark:bg-primary relative h-[380px] w-full overflow-hidden",
          className
        )}
      >
        <Image
          src="/logo/Wireframe Logo.png"
          alt="Background wireframe"
          width={500}
          height={500}
          priority
          className="absolute top-[50%] left-1/2 h-auto w-full -translate-x-1/2 opacity-10 brightness-900 filter sm:top-[10%] lg:top-[30%] lg:w-1/3 dark:opacity-5 dark:brightness-50"
        />
        <div
          style={{
            transform: `translateX(-50%) rotate(${circleContainerRotateDeg}deg)`,
            width: `${circleWidth}px`,
          }}
          className="absolute top-28 left-1/2 z-2 aspect-square origin-center rounded-full transition-all duration-500 ease-in-out"
        >
          {data.map((line, lineIndex) => {
            return (
              <div key={`${lineIndex}`}>
                {line.steps.map((step, stepIndex) => {
                  // calc the angle of the step
                  const angle =
                    angleBetweenMinorSteps *
                      (lineCountFillBetweenSteps + 1) *
                      (data
                        .slice(0, lineIndex)
                        .map(item => item.steps.length)
                        .reduce((prev, current) => prev + current, 0) +
                        stepIndex) +
                    angleBetweenMinorSteps * boundaryPlaceholderLinesCount;
                  const isLastStep =
                    lineIndex === data.length - 1 &&
                    stepIndex === line.steps.length - 1;
                  const isFirstStep = lineIndex === 0 && stepIndex === 0;
                  // check if the step is active
                  const isActive =
                    Math.abs(angle + circleContainerRotateDeg) < 0.01;
                  return (
                    <div key={`${lineIndex}-${stepIndex}`}>
                      {/* placeholder lines before the first step */}
                      {isFirstStep && (
                        <PlaceholderLines
                          isFirstStep={true}
                          isLastStep={false}
                          angle={angle}
                          angleBetweenMinorSteps={angleBetweenMinorSteps}
                          lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                          boundaryPlaceholderLinesCount={
                            boundaryPlaceholderLinesCount
                          }
                          lineIndex={lineIndex}
                          stepIndex={stepIndex}
                          circleWidth={circleWidth}
                          circleContainerRotateDeg={circleContainerRotateDeg}
                        />
                      )}
                      <div
                        className={cn(
                          "absolute top-0 left-1/2 -translate-x-1/2 cursor-pointer transition-all duration-200",
                          isActive ? "h-[120px] w-[2px]" : "h-16 w-[1.5px]"
                        )}
                        style={{
                          transformOrigin: `50% ${circleWidth / 2}px`,
                          transform: `rotate(${angle}deg)`,
                        }}
                        onClick={() => {
                          setCircleContainerRotateDeg(-1 * angle);
                          setActiveLine(line);
                        }}
                      >
                        <div
                          className={cn(
                            "h-full w-full transition-colors duration-200",
                            isActive
                              ? "bg-[var(--step-line-active-color,#146939)] dark:bg-[var(--step-line-active-color,#fcd83d)]"
                              : "bg-[var(--step-line-inactive-color,#888)] dark:bg-[var(--step-line-inactive-color,#aaa)]"
                          )}
                          style={{
                            transformOrigin: "center top",
                            transform: `rotate(${
                              -1 * angle - circleContainerRotateDeg
                            }deg)`,
                          }}
                        >
                          <div
                            className={cn(
                              "absolute bottom-0 left-1/2 aspect-square -translate-x-1/2",
                              isActive
                                ? "translate-y-[calc(100%_+_14px)] scale-[1.2] text-[var(--icon-active-color,#146939)] dark:text-[var(--icon-active-color,#fcd83d)]"
                                : "translate-y-[calc(100%_+_4px)] scale-100 text-[var(--icon-inactive-color,#888)] dark:text-[var(--icon-inactive-color,#aaa)]"
                            )}
                          >
                            {step.icon}
                          </div>
                          <p
                            className={cn(
                              "absolute bottom-0 left-1/2 line-clamp-3 flex w-[240px] -translate-x-1/2 translate-y-[calc(100%_+_42px)] items-center justify-center text-center text-sm transition-opacity duration-300 ease-in",
                              "text-[var(--description-color,#146939)] dark:text-[var(--description-color,#fcd83d)]",
                              isActive ? "opacity-100" : "opacity-0"
                            )}
                          >
                            {step.content}
                          </p>
                        </div>
                        {stepIndex === 0 && (
                          <div
                            className={cn(
                              "absolute top-0 left-1/2 z-10 -translate-x-1/2 translate-y-[calc(-100%-24px)] whitespace-nowrap",
                              isActive
                                ? "font-bold text-[var(--time-active-color,#146939)] dark:text-[var(--time-active-color,#fcd83d)]"
                                : "text-[var(--time-inactive-color,#888)] dark:text-[var(--time-inactive-color,#aaa)]"
                            )}
                          >
                            {line.time}
                          </div>
                        )}
                      </div>

                      {/* fill lines between steps, in the last step, fill the placeholder lines */}
                      <PlaceholderLines
                        isFirstStep={false}
                        isLastStep={isLastStep}
                        angle={angle}
                        angleBetweenMinorSteps={angleBetweenMinorSteps}
                        lineCountFillBetweenSteps={lineCountFillBetweenSteps}
                        boundaryPlaceholderLinesCount={
                          boundaryPlaceholderLinesCount
                        }
                        lineIndex={lineIndex}
                        stepIndex={stepIndex}
                        circleWidth={circleWidth}
                        circleContainerRotateDeg={circleContainerRotateDeg}
                      />
                    </div>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
      {activeLine?.fullContent && (
        <div
          key={activeLine.time?.toString()}
          className="animate-in fade-in mt-4 duration-500"
        >
          <h5 className="text-muted-foreground mb-2 font-bold">
            {activeLine.time}
          </h5>
          <p className="xs:text-base text-justify text-sm">
            {activeLine.fullContent}
          </p>
        </div>
      )}
    </div>
  );
}

interface PlaceholderLinesProps {
  isFirstStep: boolean;
  angleBetweenMinorSteps: number;
  angle: number;
  lineCountFillBetweenSteps: number;
  boundaryPlaceholderLinesCount: number;
  isLastStep: boolean;
  lineIndex: number;
  stepIndex: number;
  circleWidth: number;
  circleContainerRotateDeg: number;
}
function PlaceholderLines(props: PlaceholderLinesProps) {
  const {
    isFirstStep,
    isLastStep,
    angle,
    angleBetweenMinorSteps,
    lineCountFillBetweenSteps,
    boundaryPlaceholderLinesCount,
    lineIndex,
    stepIndex,
    circleWidth,
    circleContainerRotateDeg,
  } = props;

  const getAngle = (index: number) => {
    if (isFirstStep) {
      return index * angleBetweenMinorSteps;
    } else {
      return angle + (index + 1) * angleBetweenMinorSteps;
    }
  };

  return (
    <>
      {Array(
        isLastStep || isFirstStep
          ? boundaryPlaceholderLinesCount
          : lineCountFillBetweenSteps
      )
        .fill("")
        .map((_, fillIndex) => {
          const fillAngle = getAngle(fillIndex);
          return (
            <div
              key={`${lineIndex}-${stepIndex}-${fillIndex}`}
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
              ></div>
            </div>
          );
        })}
    </>
  );
}
