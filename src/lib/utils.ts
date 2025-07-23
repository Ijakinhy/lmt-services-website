import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export type ContactFormData = {
  firstName: string;
  lastName: string;
  companyName?: string,
  visitorEmail: string;
  phoneNumber: string;
  message: string;
};