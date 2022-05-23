import { useEffect, useState } from "react";
import {
  query,
  collection,
  limit,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const Leaderboard = ({ handleHomeClick }) => {
  const [ leaderboard, setLeaderboard ] = useState([]);

  useEffect(() => {
    const getLeaderboard = async () => {
      const resultsRef = query(
        collection(db, "timing"),
        limit(10),
        where("endTime", "!=", null)
      );
      const resultDocs = await getDocs(resultsRef);
      const resultsArray = [];
      resultDocs.forEach((doc) => {
        const { username, endTime, startTime } = doc.data();
        resultsArray.push({
          username  : username,
          timeTaken : (endTime - startTime).toFixed(2)
        });
      });
      const topTenArray = resultsArray.sort(
        (a, b) => a.timeTaken - b.timeTaken
      );

      setLeaderboard(topTenArray);
    };
    getLeaderboard();
  }, []);

  return (
    <div className="leaderboard-data">
      <table>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Time (seconds)</th>
          </tr>
        </thead>
        <tbody>
          {leaderboard.map((data, index) => {
            return (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{data.username}</td>
                <td>{data.timeTaken}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <button onClick={handleHomeClick}>Home</button>
    </div>
  );
};

export default Leaderboard;
