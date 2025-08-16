import Link from 'next/link'
export default async function UsersPage(){
    let res = await fetch('https://jsonplaceholder.typicode.com/todos');
    console.log(res);
    let users = await res.json();
    console.log(users);
  return (
    <>
        <div>UsersPage</div>
        <Link href='/users/new'>go to new page</Link>
        <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
          <table className='table'>
            <thead>
              <tr>
                <th>title</th>
                <th>completed</th>
              </tr>
            </thead>
            <tbody>
                {users.map(user=><tr key={user.id}>
                  <td>{user.title}</td>
                  <td>{String(user.completed)}</td>
                </tr>)}
            </tbody>
          </table>
        </div>
    </>
  )
}