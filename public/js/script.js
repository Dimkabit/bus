
const fetchBusData = async () => {
   try {
      const response = fetch("/next-departure");


      if(!response.ok) {
         throw new Error(`HTTP error! status: ${response.status}`);
      }



      return response.json();
   } catch (error) {
      console.error(`Error fething bus data: ${error}`);
   }
}

const renderBusData = (buses) => {
   const tableBody = document.querySelector('#bus-table tbody');
   tableBody.textContent = '';

   console.log(buses);
}

const initSchedule = async () => {
   const buses = await fetchBusData();
   renderBusData(buses);
}


initSchedule()