import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './assets/css/admin.module.css';
import { Link } from "react-router-dom";

function Admin() {
  const [hallDetails, setHallDetails] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/admin")
      .then(response => {
        const sortedHallDetails = response.data.sort((a, b) => {
          const dateA = new Date(a.date + ' ' + a.time);
          const dateB = new Date(b.date + ' ' + b.time);
          return dateA - dateB;
        });
        setHallDetails(sortedHallDetails);
      })
      .catch(error => {
        console.error("Error fetching hall details:", error);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/admin/${id}`);
      setHallDetails(hallDetails.filter(hall => hall._id !== id));
    } catch (error) {
      console.error("Error deleting hall detail:", error);
    }
  };

  const formatTime = (time) => {
    const [hours, minutes] = time.split(':');
    let formattedHours = parseInt(hours, 10);
    const suffix = formattedHours >= 12 ? 'PM' : 'AM';
    formattedHours = formattedHours % 12 || 12;
    return `${formattedHours}:${minutes} ${suffix}`;
  };

  return (
    <div className={styles.fullScreenContainer}>
      <p className={styles.hall}>Hall Details | <Link style={{ color: "#069C54" }} to={'/'}>Logout</Link></p>
      <div className={styles.container}>
        <table className={styles.neumorphic}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>  
              <th>Phone</th>
              <th>Place</th>
              <th>Event Name</th>
              <th>Date</th>
              <th>Time</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {hallDetails.map((hall, index) => (
              <tr key={index}>
                <td>{hall.name}</td>
                <td>{hall.email}</td>
                <td>{hall.phone}</td>
                <td>{hall.place}</td>
                <td>{hall.eventName}</td>
                <td>{hall.date}</td>
                <td>{formatTime(hall.time)}</td>
                <td>
                  <button onClick={() => handleDelete(hall._id)}>Delete</button>
                </td> 
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Admin;
