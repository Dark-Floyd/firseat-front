import axios from "axios";



const getAllLines = async () => {
    try {
        // change back all trips to lines to get lines
      let lines = [];
      const BusLines = await axios("https://firseat-api.herokuapp.com/trips");
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



export { getAllLines };