const AIRTABLE_API_KEY = import.meta.env.VITE_AIRTABLE_API_KEY;
const AIRTABLE_BASE_ID = import.meta.env.VITE_AIRTABLE_BASE_ID;
const TABLE_NAME = import.meta.env.VITE_TABLE_NAME;

export const fetchCompanies = async () => {
  try {
    const response = await fetch(
      `https://api.airtable.com/v0/${AIRTABLE_BASE_ID}/${TABLE_NAME}`,
      {
        headers: {
          Authorization: `Bearer ${AIRTABLE_API_KEY}`
        }
      }
    );
    
    if (!response.ok) {
      throw new Error(`HTTP error ${response.status}`);
    }
    
    const data = await response.json();
    
    // Transform Airtable response to match our schema
    const formattedData = data.records.map(record => ({
      id: record.id,
      ...record.fields
    }));
    
    return formattedData;
  } catch (error) {
    console.error('Error fetching data from Airtable:', error);
    throw error;
  }
};