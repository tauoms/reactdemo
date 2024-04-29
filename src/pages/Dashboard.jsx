const Dashboard = ({ user }) => {
  return (
    <div>
      {user === "Someone" ? (
        <h2>Welcome to inner circle, {user}</h2>
      ) : (
        <h2>You must be new on here, {user}</h2>
      )}
    </div>
  );
};

export default Dashboard;
