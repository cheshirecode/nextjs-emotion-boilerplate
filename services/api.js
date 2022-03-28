export const getSamples = async () => {
  const response = await fetch('http://shibe.online/api/shibes?count=10&urls=true&httpsUrls=true');
  return await response.json();
};
