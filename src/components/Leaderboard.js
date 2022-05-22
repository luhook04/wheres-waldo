import { useEffect, useState } from "react";
import {
  query,
  collection,
  limit,
  where,
  getDocs
} from "firebase/firestore";
import { db } from "../firebase/firebase.config";

const Leaderboard = () => {
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
    <div>
      {leaderboard.map((data, index) => {
        return (
          <div key={index}>
            <div>
              <span>{index + 1}</span> {data.username}
            </div>
            <div>{data.timeTaken}</div>
          </div>
        );
      })}
      <button>Home</button>
    </div>
  );
};

export default Leaderboard;
