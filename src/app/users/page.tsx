export default async function Users(){
    const data = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await data.json();
    return (
        <div>
        <h1>Users Page</h1>
        <p>This is the users page content.</p>
        <table style={{ borderCollapse: 'collapse', width: '100%' }}>
            <thead>
            <tr>
                <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>ID</th>
                <th style={{ border: '1px solid #ddd', padding: '8px', background: '#f2f2f2' }}>Name</th>
            </tr>
            </thead>
            <tbody>
            {users.map((user: { id: number; name: string }) => (
                <tr key={user.id}>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.id}</td>
                <td style={{ border: '1px solid #ddd', padding: '8px' }}>{user.name}</td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}