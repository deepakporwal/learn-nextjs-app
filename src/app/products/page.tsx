export default function Products() {
    return (
        <div style={{ maxWidth: 400, margin: "2rem auto", padding: "2rem", background: "#f9fafb", borderRadius: "1rem", boxShadow: "0 4px 24px rgba(0,0,0,0.08)" }}>
            <h2 style={{ textAlign: "center", color: "#2563eb", marginBottom: "1.5rem" }}>Our Products</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
            <li style={{ background: "#fff", margin: "0.5rem 0", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", fontWeight: 500 }}>
                Product 1
            </li>
            <li style={{ background: "#fff", margin: "0.5rem 0", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", fontWeight: 500 }}>
                Product 2
            </li>
            <li style={{ background: "#fff", margin: "0.5rem 0", padding: "1rem", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)", fontWeight: 500 }}>
                Product 3
            </li>
            </ul>
        </div>
    );
}