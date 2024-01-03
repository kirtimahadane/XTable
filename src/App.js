import { useState } from "react";
import "./styles.css";
const data = [
  { date: "2022-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-01", views: 100, article: "Article 1" },

  { date: "2023-09-02", views: 150, article: "Article 2" },

  { date: "2023-09-02", views: 120, article: "Article 3" },

  { date: "2020-09-03", views: 200, article: "Article 4" },
];

export default function App() {
  const [posts, setPosts] = useState(data);
  const sortByDate = (posts) => {
    let sortedPosts = [...posts].sort((a, b) => {
      if (new Date(a.date) === new Date(b.date)) {
        return b.views - a.views;
      }
      return new Date(b.date) - new Date(a.date);
    });
    setPosts(sortedPosts);
  };
  // const handleSortByViews = () => {
  //   const sortedData = [...data].sort((a, b) => {
  //     if (a.views === b.views) {
  //       return new Date(b.date) - new Date(a.date); // If views are the same, sort by date
  //     }
  //     return b.views - a.views; // Sort by views
  //   });

  //   setData(sortedData);
  //   setSortOrder("views");
  // };
  const sortByViews = (posts) => {
    let sortedPosts = [...posts].sort((a, b) => {
      if (a.views === b.views) {
        return new Date(b.date) - new Date(a.date); // If views are the same, sort by date
      }
      return b.views - a.views;
    });
    setPosts(sortedPosts);
  };
  return (
    <div className="App">
      <h1>Date and Views Table</h1>
      <table>
        <tbody>
          <tr>
            <td>
              <button onClick={() => sortByDate(posts)}>Sort by Date</button>
            </td>
            <td>
              <button onClick={() => sortByViews(posts)}>Sort by Views</button>
            </td>
          </tr>

          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>

          {posts.map((item) => {
            return (
              <tr>
                <td>{item.date}</td>
                <td>{item.views}</td>
                <td>{item.article}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
