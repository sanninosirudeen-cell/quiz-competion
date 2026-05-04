export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      fontFamily: "Arial",
      background: "#0f172a",
      color: "white",
      padding: "20px"
    }}>
      <div style={{
        maxWidth: "500px",
        width: "100%",
        background: "#1e293b",
        padding: "30px",
        borderRadius: "15px"
      }}>
        <h1>Quiz Competition 2026</h1>
        <p><b>Date:</b> 4th May 2026</p>
        <p><b>Venue:</b> KAHOOT APP</p>
        <p><b>Max Participants:</b> 80</p>

        <hr style={{margin: "20px 0"}} />

        <input placeholder="Name" style={{width:"100%",padding:"10px",marginBottom:"10px"}} />
        <input placeholder="Email" style={{width:"100%",padding:"10px",marginBottom:"10px"}} />

        <button style={{
          width:"100%",
          padding:"12px",
          background:"gold",
          border:"none",
          fontWeight:"bold"
        }}>
          Register
        </button>
      </div>
    </div>
  );
    }
