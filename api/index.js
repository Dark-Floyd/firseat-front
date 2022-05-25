import axios from 'axios'

const getAllLines = async () => {
  try {
    // change back all trips to lines to get lines
    let lines = []
    const BusLines = await axios('http://firseat-api.herokuapp.com/trips')
    
    for (let line of BusLines.data.trips) {
      lines.push(line)
     
    }
    return lines
  } catch (error) {
    console.log(error)
  }
}
const getStation = async () => {
  try {
    const stationsFetched = await axios(
      'http://firseat-api.herokuapp.com/stations',
    )
   
    return stationsFetched.data.stations[0]
  } catch (error) {
    console.log(error)
  }
}

export { getAllLines, getStation }
