const fetchHandler = async (url, options) => {
  try {
    const resp = await fetch(url, options);
    if (!resp.ok) {
      throw new Error(`Error: ${resp.status} ${resp.statusText}`);
    }
    const data = await resp.json();
    return (data);
  } catch (error) {
    console.error(error);
    throw error;
    //Puedo meter un state de errores o lanzar un alert
  }
};

export default fetchHandler;
