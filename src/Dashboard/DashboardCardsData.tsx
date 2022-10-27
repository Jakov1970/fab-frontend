import { useIntl } from "react-intl"
import guidelineLogo from '../images/guidelineIcon.png'
import moduleLogo from '../images/moduleIcon.png'
import fileLogo from '../images/fileIcon.png'
import { createColumnHelper } from "@tanstack/react-table"


// const intl = useIntl();

export const DashboardCardsData: any = [
    {
      id: 1,
      // title: intl.formatMessage({ id: "LOGIN.BUTTON" }),
      title: "Richtlijnen",
      description: "Een overzicht van alle richtlijnen de je kunt kunt bekijken, wijzigen of toevoegen.",
      image: <img src={guidelineLogo} alt="" />
    },
    {
      id: 2,
      title: "Modules",
      description: "Een overzicht van alle modules de je kunt kunt bekijken, wijzigen of toevoegen.",
      image: <img src={moduleLogo} alt="" />
    },
    {
      id: 3,
      title: "Bestanden",
      description: "Een overzicht van alle figuren, afbeeldingen en documenten de je kunt kunt bekijken, wijzigen of toevoegen.",
      image: <img src={fileLogo} alt="" />
    }
]

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

export type UnitConversion = {
  date: string;
  action: string;
  location: string;
  name: string;
};

export const data: UnitConversion[] = [
  {
    date: "inches",
    action: "millimetres (mm)",
    location: "fsfsfs",
    name: "sssssssss"
  },
  {
    date: "feet",
    action: "centimetres (cm)",
    location: "fsfsfsfs",
    name: "ssssssaaaa"
  },
  {
    date: "yards",
    action: "metres (m)",
    location: "fsfsfsf",
    name: "saaaaaaaaaa"
  }
];

const columnHelper = createColumnHelper<UnitConversion>();

export const columns = [
  columnHelper.accessor("date", {
    cell: (info) => info.getValue(),
    header: "Datum"
  }),
  columnHelper.accessor("location", {
    cell: (info) => info.getValue(),
    header: "Locatie"
  }),
  columnHelper.accessor("action", {
    cell: (info) => info.getValue(),
    header: "Actie",
  }),
  columnHelper.accessor("name", {
    cell: (info) => info.getValue(),
    header: "Wie",
  })
];