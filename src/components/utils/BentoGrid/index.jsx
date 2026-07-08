"use client";

import { cn } from "@/lib/utils";
import { BentoGridItem } from "@/components/ui/bento-grid-items";

export const BentoGrid = ({ className, items = [] }) => {
  return (
    <div className={cn("grid grid-cols-1 md:grid-cols-4 gap-4", className)}>
      {items.map((item, index) => (
        <BentoGridItem
          key={index}
          title={item.title}
          description={item.description}
          role={item.role}
          header={item.header}
          icons={item.icons}
          className={item.className}
        />
      ))}
    </div>
  );
};
