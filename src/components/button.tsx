import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg";
  className?: string;
}

export const Button = (
  { children, size = "md", className }: Props
) => {
  const sizeClassNames = {
    sm: "text-sm px-2 py-1",
    md: "text-md px-5 py-3",
    lg: "text-lg px-8 py-5"
  }

  return (
    <button className={twMerge("bg-white text-textBlack rounded-full px-3 py-1", sizeClassNames[size], className)}>{children}</button>
  )
}