const isValideURL = (urlString: string) => {
  try {
    new URL(urlString);
    return true;
  } catch (error) {
    return false;
  }
};

export default isValideURL;
