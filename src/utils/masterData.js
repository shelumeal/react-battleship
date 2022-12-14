import aircraftIcon from "../asset/images/Aircraft Shape.png";
import battleShipIcon from "../asset/images/Battleship Shape.png";
import carrierIcon from "../asset/images/Carrier Shape.png";
import cruiserIcon from "../asset/images/Cruiser Shape.png";
import submarineIcon from "../asset/images/Submarine Shape.png";

export const masterData = [
  {
    id: 1,
    name: "Aircraft",
    size: 5,
    count: 1,
    position: {},
    icon: aircraftIcon,
    hitPoints: 5,
    hits: 0,
  },
  {
    id: 2,
    name: "Battleship",
    size: 4,
    count: 1,
    position: {},
    icon: battleShipIcon,
    hitPoints: 4,
    hits: 0,
  },
  {
    id: 3,
    name: "Cruiser",
    size: 3,
    count: 1,
    position: {},
    icon: cruiserIcon,
    hitPoints: 3,
    hits: 0,
  },
  {
    id: 4,
    name: "Submarine",
    size: 3,
    count: 1,
    position: {},
    icon: submarineIcon,
    hitPoints: 3,
    hits: 0,
  },
  {
    id: 5,
    name: "Carrier",
    size: 2,
    count: 1,
    position: {},
    icon: carrierIcon,
    hitPoints: 2,
    hits: 0,
  },
];
