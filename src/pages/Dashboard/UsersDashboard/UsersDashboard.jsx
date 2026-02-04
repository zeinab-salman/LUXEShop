import "./UsersDashboard.css";
import UserDashboardItem from "../../../components/UserDashboardItem/UserDashboardItem";
import Title from "../../../components/Title/Title";
import MenuComponent from "../../../components/MenuComponent/MenuComponent";
import { useEffect, useState } from "react";
const DEFAULT_IMG = "https://via.placeholder.com/150";
export default function UsersDashboard() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    try {
      const storedData = JSON.parse(localStorage.getItem("all-users")) || [];
      if (Array.isArray(storedData)) {
        setUsers(storedData);
      } else {
        console.error("Stored data is not an array");
      }
    } catch (error) {
      console.error("Error reading users:", error);
    }
  }, []);
  console.log(users);
  return (
    <section className="users-dash-section flex-center">
      <MenuComponent />
      <Title
        title="All Users"
        line="line-sec"
        type="sections-description"
        type2="title-dash2"
      />
      {users.length > 0 ? (
        users.map((user, index) => {
          const { id, name, email, img, data, address, status1 } = user;
          return (
            <UserDashboardItem
              key={id || index}
              id={id}
              date={data}
              email={email}
              name={name}
              img={img || DEFAULT_IMG}
              address={address}
              status1={status1}
            />
          );
        })
      ) : (
        <p className="no-users-message empty-sec">No users available.</p>
      )}
    </section>
  );
}
