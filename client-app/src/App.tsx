import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { Header, List } from "semantic-ui-react";

function App() {
  const [activites, setActivites] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/Activities").then(res => {
      console.log(res);
      setActivites(res.data);
    });
  }, []);

  return (
    <div>
      <Header as="h2" icon="users" />
      <List>
        {activites.map((activity: any) => (
          <List.Item key={activity.id}>{activity.title}</List.Item>
        ))}
      </List>
    </div>
  );
}

export default App;
