import { cn } from "@/lib/utils";

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icons,
  role,
}) => {
  return (
    <div
      className={cn(
        "shadow-input flex flex-col justify-between space-y-4 rounded-xl border border-neutral-200 bg-white p-4 transition duration-200 hover:shadow-xl dark:border-white/[0.2] dark:bg-black dark:shadow-none",
        className,
      )}
    >
      {header}
      <div className="transition duration-200 group-hover/bento:translate-x-2">
        <div className="flex gap-2 mt-2 flex-wrap">
          {icons.map((Icon, index) => (
            <div
              key={index}
              className="p-1 rounded-md transition hover:scale-110 hover:shadow-lg hover:shadow-blue-500/50 dark:hover:shadow-blue-400/50"
            >
              {Icon}
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-2 mt-2">
          <div className="font-sans font-bold text-neutral-600 dark:text-neutral-200">
            {title}
          </div>

          <div className="font-sans text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {description}
          </div>

          <div className="border-1 px-2 py-1 rounded-md font-sans w-fit text-xs font-normal text-neutral-600 dark:text-neutral-300">
            {role}
          </div>
        </div>
      </div>
    </div>
  );
};
