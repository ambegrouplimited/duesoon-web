import { PiFeatherBold, PiWarningOctagonBold } from "react-icons/pi";
import { HiOutlineScale } from "react-icons/hi";

export const feelings = [
  {
    id: "gentle",
    icon: PiFeatherBold,
    label: "Gentle.",
    message:
      "Hi! Just checking in, when are you thinking of sending payment?",
  },
  {
    id: "neutral",
    icon: HiOutlineScale,
    label: "Neutral.",
    message:
      "Hello, this is a reminder regarding the outstanding payment. Please let me know when it will be completed.",
  },
  {
    id: "firm",
    icon: PiWarningOctagonBold,
    label: "Firm.",
    message:
      "This is a follow-up on the pending payment. Kindly ensure it is settled as soon as possible.",
  },
];
