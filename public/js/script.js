
const fetchBusData = async () => {
   try {
     const response = await fetch("next-departure");
 
     if (!response.ok) {
       throw new Error(`HTTP error! status: ${response.status}`);
     }
 
     return response.json();
   } catch (error) {
     console.error(`Error fetching bus data: ${error}`);
   }
 };
 
 const formateDate = (date) => date.toISOString().split('T')[0];
 const formateTime = (date) => date.toTimeString().split(' ')[0].slice(0, 5);

const renderBusData = (buses) => {
   const tableBody = document.querySelector('#bus-table tbody');
   tableBody.textContent = '';

   buses.forEach(bus => {
    const row = document.createElement('tr');

    const nextDepartureDateTimeUTC = new Date(`${bus.nextDeparture.date}T${bus.nextDeparture.time}Z`)
console.log(nextDepartureDateTimeUTC);
    row.innerHTML = `
      <td>${bus.busNumber}</td>
      <td>${bus.startPoint} - ${bus.endPoint}</td>
      <td>${formateDate(nextDepartureDateTimeUTC)}</td>
      <td>${formateTime(nextDepartureDateTimeUTC)}</td>
    `
    tableBody.append(row);
   })
}

const init = async () => {
   const buses = await fetchBusData();
   renderBusData(buses);
}


init()