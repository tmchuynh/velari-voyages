"use client";

import useMediumScreen from "@/hooks/useMediumScreen";
import useSmallScreen from "@/hooks/useSmallScreen";
import { capitalize } from "@/lib/utils/format.ts";
import { generateRandomString } from "@/lib/utils/sort";
import { usePathname } from "next/navigation";
import { JSX, useMemo } from "react";
import { PiPaperPlaneRightLight } from "react-icons/pi";
import {
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbSeparator,
} from "../ui/breadcrumb";
import { motion } from "framer-motion";

export default function DynamicBreadcrumb(): JSX.Element | null {
  const isSmallScreen = useSmallScreen();
  const isMediumScreen = useMediumScreen();
  const pathname = usePathname();

  const pathSegments = useMemo(
    () =>
      pathname
        .split("/")
        .filter(Boolean)
        .map((segment) => decodeURIComponent(segment)),
    [pathname]
  );

  // Detect if this is a 404 page based on known structure
  const isNotFoundPage = pathSegments.includes("not-found");

  const capitalizedSegments = useMemo(
    () =>
      pathSegments.map((segment, index) =>
        index === pathSegments.length - 1 && isNotFoundPage
          ? "Not Found"
          : segment.length === 2
            ? segment.toUpperCase()
            : capitalize(segment)
      ),
    [pathSegments, isNotFoundPage]
  );

  const breadcrumbItems = useMemo(() => {
    if (pathname === "/") return null;

    const items: JSX.Element[] = [];

    const renderItem = (
      href: string,
      segment: string,
      index: number,
      isLast: boolean
    ) => {
      const r = generateRandomString(5);

      return (
        <motion.div
          key={`${href}-${segment}-${index}-${isLast}=${r}`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BreadcrumbItem className="mx-1">
            <span className="hover:bg-white/10 px-2 py-1 rounded-md text-white/90 hover:text-blue-300 transition-colors">
              {segment}
            </span>
          </BreadcrumbItem>
        </motion.div>
      );
    };

    if (isSmallScreen) {
      items.push(
        <BreadcrumbItem key="dots" className="-mx-1">
          <span className="px-2 py-1 rounded-md text-white/60">...</span>
        </BreadcrumbItem>
      );

      const currentHref = `/${pathSegments.join("/")}`;
      const currentSegment = capitalizedSegments[pathSegments.length - 1];

      items.push(
        <BreadcrumbSeparator
          key={`sep-${currentHref}`}
          className="ml-1 text-blue-400"
        >
          <PiPaperPlaneRightLight />
        </BreadcrumbSeparator>
      );

      items.push(
        renderItem(currentHref, currentSegment, pathSegments.length - 1, true)
      );
    } else if (isMediumScreen && !isSmallScreen) {
      items.push(
        <motion.div
          key="home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BreadcrumbItem className="mx-1">
            <BreadcrumbLink
              href="/"
              className="hover:bg-white/10 px-2 py-1 rounded-md text-white/90 hover:text-blue-300 underline-offset-4 hover:underline transition-colors hover:decoration-blue-300"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </motion.div>
      );

      if (pathSegments.length > 2) {
        const href = `/${pathSegments.slice(0, 2).join("/")}`;
        const segment = capitalizedSegments[1];

        items.push(
          <BreadcrumbSeparator key="sep-2" className="ml-1 text-blue-400">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(renderItem(href, segment, 1, false));
      } else if (pathSegments.length > 1) {
        const href = `/${pathSegments.join("/")}`;
        const lastSegment = capitalizedSegments[capitalizedSegments.length - 1];

        items.push(
          <BreadcrumbSeparator key="sep-last" className="ml-1 text-blue-400">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, lastSegment, pathSegments.length - 1, true)
        );
      }

      if (pathSegments.length > 0) {
        const href = `/${pathSegments.join("/")}`;
        const lastSegment = capitalizedSegments[capitalizedSegments.length - 1];
        items.push(
          <BreadcrumbSeparator key="sep-1" className="ml-1 text-blue-400">
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, lastSegment, pathSegments.length - 1, true)
        );
      }
    } else {
      items.push(
        <motion.div
          key="home"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <BreadcrumbItem className="mx-1">
            <BreadcrumbLink
              href="/"
              className="hover:bg-white/10 px-2 py-1 rounded-md text-white/90 hover:text-blue-300 underline-offset-4 hover:underline transition-colors hover:decoration-blue-300"
            >
              Home
            </BreadcrumbLink>
          </BreadcrumbItem>
        </motion.div>
      );

      pathSegments.forEach((_, index) => {
        const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
        const segment = capitalizedSegments[index];

        items.push(
          <BreadcrumbSeparator
            key={`sep-${href}`}
            className="mx-4 text-blue-400"
          >
            <PiPaperPlaneRightLight />
          </BreadcrumbSeparator>
        );

        items.push(
          renderItem(href, segment, index, index === pathSegments.length - 1)
        );
      });
    }

    return items;
  }, [
    pathname,
    pathSegments,
    capitalizedSegments,
    isSmallScreen,
    isMediumScreen,
    isNotFoundPage,
  ]);

  if (!breadcrumbItems) return null;

  return (
    <motion.div
      className="mx-auto pt-3 md:pt-5 lg:pt-9 w-10/12 md:w-11/12"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.1 }}
    >
      <nav
        aria-label="Breadcrumb"
        className="flex flex-row items-center gap-2 bg-white/5 backdrop-blur-sm px-4 py-2 border border-white/10 rounded-lg w-full text-xs lg:text-sm"
      >
        <ul className="flex flex-row items-center gap-2 font-[EncodeSans]">
          {breadcrumbItems}
        </ul>
      </nav>
    </motion.div>
  );
}
