export interface Location {
    CityID: string;
    CityName: string;
    District: {
      DistrictID: string;
      DistrictName: string;
      Ward: {
        WardID: string;
        WardName: string;
      }[]
    }[]
  }
  