
export const filterSearchString = (searchString: string) => {

  const urlRegex = /\[include-url: \[(https?:\/\/[^\s]+)\]/;
  
  // Regular expression to extract key-value pairs like max_execution_time, filter, store
  const keyValueRegex = /(\w+):(\d+|true|false)/g;

  // Extract the URL
  const urlMatch = searchString.match(urlRegex);
  const url = urlMatch ? urlMatch[1] : null;

  // Extract the key-value pairs
  let max_execution_time: number | null = null;
  let filter: boolean | null = null;
  let store: boolean | null = null;

  let match;
  while ((match = keyValueRegex.exec(searchString)) !== null) {
    const key = match[1];
    const value = match[2] === 'true' ? true : match[2] === 'false' ? false : parseInt(match[2], 10);

    if (key === 'max_execution_time') {
      max_execution_time = value as number;
    } else if (key === 'filter') {
      filter = value as boolean;
    } else if (key === 'store') {
      store = value as boolean;
    }
  }

  const result = {  url, max_execution_time,  filter, store };

  return result;
};



