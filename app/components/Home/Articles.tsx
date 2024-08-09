"use client";

import { useEffect, useState } from "react";
import { fetchRSS } from "../Actions/Article.actions";
import ArticleItem from "../Common/ArticleItem";

function Articles() {
  const rssURL = "https://blog.yaepublishinghouse.online/rss.xml";

  const [parsedRSSData, setParsedRSSData] = useState<
    | {
        title: string | null;
        link: string | null;
        description: string | null;
        date: string | null;
        cover: string | null;
      }[]
  >([]);

  const getRSS = async () => {
    const rssFeed = await fetchRSS(rssURL);

    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(rssFeed, "text/xml");
    const items = xmlDoc.getElementsByTagName("item");

    const rssData = Array.from(items).map((item) => {
      return {
        title: item.getElementsByTagName("title")[0].textContent,
        link: item.getElementsByTagName("link")[0].textContent,
        description: item.getElementsByTagName("description")[0].textContent,
        date: item.getElementsByTagName("pubDate")[0].textContent,
        cover: item.getElementsByTagName("hashnode:coverImage")[0].textContent,
      };
    });

    setParsedRSSData(rssData);
  };

  useEffect(() => {
    getRSS();
  }, []);

  return (
    <div className="my-10 sm:my-14" id="articles">
      <h2 className="mb-5 font-medium text-gray-800 dark:text-neutral-200">
        Recent Articles
      </h2>
      {/* List */}
      <ul className="space-y-10">
        {parsedRSSData
          .slice(0, parsedRSSData.length >= 3 ? 3 : parsedRSSData.length)
          .map((article, index) => {
            return (
              <li key={index}>
                <ArticleItem
                  title={article.title}
                  link={article.link}
                  description={article.description}
                  date={article.date}
                  cover={article.cover}
                />
              </li>
            );
          })}
      </ul>
      {/* End List */}
    </div>
  );
}

export default Articles;
