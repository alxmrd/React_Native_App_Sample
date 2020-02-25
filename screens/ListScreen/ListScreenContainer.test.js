import { sortPoisByAddress } from "./ListScreenContainer";

describe("Sort points of interest", () => {
  const pois = [
    {
      id: "8472",
      latitude: "37.160931",
      address: "Colorando",
      longitude: "22.867281"
    },
    {
      id: "157",
      latitude: "37.919683",
      address: "Athens",
      longitude: "23.74405"
    },
    {
      id: "8872",
      latitude: "37.821415",
      address: "Belgrade",
      longitude: "22.66082"
    }
  ];

  it("should return the points of interest sorted by address alphabetically", () => {
    const sortedPois = sortPoisByAddress(pois);
    expect(sortedPois).toEqual([
      {
        id: "157",
        latitude: "37.919683",
        address: "Athens",
        longitude: "23.74405"
      },
      {
        id: "8872",
        latitude: "37.821415",
        address: "Belgrade",
        longitude: "22.66082"
      },
      {
        id: "8472",
        latitude: "37.160931",
        address: "Colorando",
        longitude: "22.867281"
      }
    ]);
  });
});
