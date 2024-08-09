"use server";

const fetchRSS = async (rssURL: string) => {
  const data = await fetch(rssURL).then((res) => res.text());

  return data;
};

export { fetchRSS };
