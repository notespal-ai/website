import Image from "next/image"
import {
  BsMoonStars,
  BsSun,
  BsChevronLeft,
  BsChevronRight,
  BsChevronUp,
  BsChevronDown,
  BsFire,
  BsCheck2,
} from "react-icons/bs"
import {
  AiOutlineEllipsis,
  AiOutlineWarning,
  AiOutlinePlus,
  AiOutlineClose,
  AiOutlineFileSearch,
} from "react-icons/ai"
import { MdDeleteForever, MdOutlineLogout } from "react-icons/md"
import { BiHistory, BiCalendar, BiBarChartAlt } from "react-icons/bi"
import { FaUserAlt, FaSort } from "react-icons/fa"
import { ImSpinner8, ImStatsBars } from "react-icons/im"
import { RxMixerHorizontal } from "react-icons/rx"
import { LuSettings } from "react-icons/lu"

export type IconKeys = keyof typeof icons

type IconsType = {
  [key in IconKeys]: React.ElementType
}

// ** Custom svg or images can be used as icons by returning a JSX **
const icons = {
  // Custom icons
  blank: () => {
    return <></>
  },
  linux: () => {
    return (
      <Image
        src="linux.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={32}
        height={32}
        alt="Card image"
      />
    )
  },
  windows: () => {
    return (
      <Image
        src="windows.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={32}
        height={32}
        alt="Card image"
      />
    )
  },
  mac: () => {
    return (
      <Image
        src="mac.svg"
        className="dark:brightness-0 dark:invert-[1]"
        width={32}
        height={32}
        alt="Card image"
      />
    )
  },

  // Features
  fileSearch: AiOutlineFileSearch,
  barChart: BiBarChartAlt,
  settings: LuSettings,

  // Mode Toggle
  moon: BsMoonStars,
  sun: BsSun,

  // Navigation
  back: BsChevronLeft,
  next: BsChevronRight,
  up: BsChevronUp,
  down: BsChevronDown,
  close: AiOutlineClose,

  // Common
  trash: MdDeleteForever,
  spinner: ImSpinner8,
  userAlt: FaUserAlt,
  ellipsis: AiOutlineEllipsis,
  warning: AiOutlineWarning,
  add: AiOutlinePlus,
  history: BiHistory,
  signout: MdOutlineLogout,
  calendar: BiCalendar,
  sort: FaSort,
  fire: BsFire,
  statsBar: ImStatsBars,
  mixer: RxMixerHorizontal,
  check: BsCheck2,
}

export const Icons: IconsType = icons
