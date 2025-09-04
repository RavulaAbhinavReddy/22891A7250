import React, { useState, useEffect } from "react";

function StatsPage() {
  const [stats, setStats] = useState([]);

  useEffect(() => {
    // Mocked stats
    setStats([
      {
        shortUrl: "https://short.ly/abc123",
        expiry: "2025-09-10 12:00",
        clicks: 12,
        created: "2025-09-01 10:00",
        referrer: "Google",
        location: "India",
      },
      {
        shortUrl: "https://short.ly/xyz789",
        expiry: "2025-09-12 18:00",
        clicks: 7,
        created: "2025-09-02 14:30",
        referrer: "Twitter",
        location: "USA",
      },
    ]);
  }, []);

  return (
    <div style={{ padding: 20 }}>
      <h2>URL Statistics</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Short URL</th>
            <th>Expiry</th>
            <th>Clicks</th>
            <th>Created At</th>
            <th>Referrer</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {stats.map((s, i) => (
            <tr key={i}>
              <td>
                <a href={s.shortUrl}>{s.shortUrl}</a>
              </td>
              <td>{s.expiry}</td>
              <td>{s.clicks}</td>
              <td>{s.created}</td>
              <td>{s.referrer}</td>
              <td>{s.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default StatsPage;
