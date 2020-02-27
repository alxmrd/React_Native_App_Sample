import { sortPoisByAddress, sortPoisByLocation } from "./ListScreenContainer";

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
      address: "2Belgrade",
      longitude: "22.66082"
    }
  ];

  it("should return the points of interest sorted by address alphabetically but firstly numbers", () => {
    const sortedPoisWithNumber = sortPoisByAddress(pois);
    expect(sortedPoisWithNumber).toEqual([
      {
        id: "8872",
        latitude: "37.821415",
        address: "2Belgrade",
        longitude: "22.66082"
      },
      {
        id: "157",
        latitude: "37.919683",
        address: "Athens",
        longitude: "23.74405"
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

describe("Sort points of interest", () => {
  const pois = [
    {
      id: "8472",
      latitude: "37.160931",
      address: "AthensA",
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

  it("should return the points of interest sorted by address alphabetically ", () => {
    const sortedPoisWithSameName = sortPoisByAddress(pois);
    expect(sortedPoisWithSameName).toEqual([
      {
        id: "157",
        latitude: "37.919683",
        address: "Athens",
        longitude: "23.74405"
      },
      {
        id: "8472",
        latitude: "37.160931",
        address: "AthensA",
        longitude: "22.867281"
      },

      {
        id: "8872",
        latitude: "37.821415",
        address: "Belgrade",
        longitude: "22.66082"
      }
    ]);
  });
});

describe("Sort points of interest by distance from current location", () => {
  const location = {
    latitude: 40.30357877106961,

    longitude: 21.795253574229353
  };

  const pois = [
    {
      id: "8472",
      latitude: 37.160931,
      address: "ΕΠ.Ο. ΛΕΩΝΙΔΙΟΥ-ΠΛΑΚΑΣ, ΛΕΩΝΙΔΙΟ ΑΡΚΑΔΙΑΣ",
      longitude: 22.867281
    },
    {
      id: "157",
      latitude: 37.919683,
      address: "Λ. ΒΟΥΛΙΑΓΜΕΝΗΣ 548",
      longitude: 23.74405
    }
  ];

  it("should return the points of interest sorted by address distance", () => {
    const sortedPoisByLocation = sortPoisByLocation(location, pois);
    expect(sortedPoisByLocation).toEqual([
      {
        id: "157",
        latitude: 37.919683,
        address: "Λ. ΒΟΥΛΙΑΓΜΕΝΗΣ 548",
        longitude: 23.74405
      },
      {
        id: "8472",
        latitude: 37.160931,
        address: "ΕΠ.Ο. ΛΕΩΝΙΔΙΟΥ-ΠΛΑΚΑΣ, ΛΕΩΝΙΔΙΟ ΑΡΚΑΔΙΑΣ",
        longitude: 22.867281
      }
    ]);
  });
});
