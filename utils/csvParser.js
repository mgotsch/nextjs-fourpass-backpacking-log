import Papa from 'papaparse';

// Function to fetch and parse CSV file
export async function fetchCSV() {
  const response = await fetch('/picturePairing.csv');
  const csvText = await response.text();

  return new Promise((resolve, reject) => {
    Papa.parse(csvText, {
      header: true,
      dynamicTyping: true,
      complete: function(results) {
        resolve(results.data);
      },
      error: function(error) {
        reject(error);
      }
    });
  });
}