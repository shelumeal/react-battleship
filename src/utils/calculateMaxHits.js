import { masterData } from "../utils/masterData";

export const calculateMaxHits = () => {
  let maximumHits = 0;
  masterData.forEach((ship) => {
    maximumHits += ship.hitPoints;
  });
  return maximumHits;
};
