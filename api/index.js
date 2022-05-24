import axios from "axios";



const getAllLines = async () => {
    try {
        // change back all trips to lines to get lines
      let lines = [];
      const BusLines = await axios("http://firseat-api.herokuapp.com/trips");
      console.log(BusLines.data.trips)
      for (let line of BusLines.data.trips) {
        lines.push(line);
        console.log(line)
      }
      return lines
    } catch (error) {
      console.log(error);
    }
  };
  const getStation = async () => {
    try {
      let stations = [];
      const stationsFetched = await axios("http://firseat-api.herokuapp.com/stations");
      for (let station of stationsFetched.data.stations) {
        stations.push(station);
        console.log(station)
      }
      return stations
    } catch (error) {
      console.log(error);
    }
  };





export { getAllLines, getStation };