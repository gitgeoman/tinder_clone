import React, { useState } from "react";
import TinderCard from "react-tinder-card";

import "./TinderCards.css";

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "steve jobs",
      url: "https://upload.wikimedia.org/wikipedia/commons/f/f5/Steve_Jobs_Headshot_2010-CROP2.jpg",
    },
    {
      name: "mark zuckerberg",
      url: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg/193px-Mark_Zuckerberg_F8_2019_Keynote_%2832830578717%29_%28cropped%29.jpg",
    },
  ]);

  return (
    <div className="tinderCards">
      <div className="tinderCards_cardContainer">
        {people.map((person) => {
          return (
            <TinderCard className="swipe" key={person.name} preventSwipe={[]}>
              <div
                className="card"
                style={{
                  backgroundImage: `url(${person.url})`,
                }}
              >
                <h3> {person.name}</h3>
              </div>
            </TinderCard>
          );
        })}
      </div>
    </div>
  );
}

export default TinderCards;
