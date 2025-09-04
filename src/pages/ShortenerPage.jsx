import React, { useState } from "react";

function ShortenerPage() {
  const [urls, setUrls] = useState([
    { longUrl: "", validity: 30, shortcode: "" },
  ]);
  const [results, setResults] = useState([]);

  const handleChange = (i, field, value) => {
    const newUrls = [...urls];
    newUrls[i][field] = value;
    setUrls(newUrls);
  };

  const addField = () => {
    if (urls.length < 5) {
      setUrls([...urls, { longUrl: "", validity: 30, shortcode: "" }]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    for (let u of urls) {
      if (!u.longUrl.startsWith("http")) {
        alert("Long URL must start with http or https");
        return;
      }
      if (u.shortcode && !/^[a-zA-Z0-9]+$/.test(u.shortcode)) {
        alert("Shortcode must be alphanumeric only");
        return;
      }
    }

    // Mock shortener
    const newResults = urls.map((u, i) => ({
      longUrl: u.longUrl,
      shortUrl:
        "https://short.ly/" +
        (u.shortcode || Math.random().toString(36).substring(2, 7)),
      validity: u.validity,
    }));
    setResults(newResults);
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>URL Shortener</h2>
      <form onSubmit={handleSubmit}>
        {urls.map((u, i) => (
          <div key={i} style={{ marginBottom: 10 }}>
            <input
              type="text"
              placeholder="Enter Long URL"
              value={u.longUrl}
              onChange={(e) => handleChange(i, "longUrl", e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Validity (minutes)"
              value={u.validity}
              onChange={(e) => handleChange(i, "validity", e.target.value)}
            />
            <input
              type="text"
              placeholder="Custom Shortcode"
              value={u.shortcode}
              onChange={(e) => handleChange(i, "shortcode", e.target.value)}
            />
          </div>
        ))}
        {urls.length < 5 && (
          <button type="button" onClick={addField}>
            + Add more
          </button>
        )}
        <br />
        <button type="submit">Shorten</button>
      </form>

      {results.length > 0 && (
        <div style={{ marginTop: 20 }}>
          <h3>Results</h3>
          <ul>
            {results.map((r, i) => (
              <li key={i}>
                {r.longUrl} →{" "}
                <a href={r.shortUrl} target="_blank" rel="noreferrer">
                  {r.shortUrl}
                </a>{" "}
                (valid {r.validity} mins)
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default ShortenerPage;
