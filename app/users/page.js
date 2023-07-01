import axios from "axios";
import Link from "next/link";
export const metadata={
    title:"User page"
}

async function fetchUsers() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    //   console.log(response);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
const Page=async()=>{
    const data= await fetchUsers();
    // console.log("Page: ",data) //It will show data on server not in console
    return(
        <>
        <h2>Users</h2>
        {
            data.map(user=>{
                return(
                    <div key={user.id}>
                     <Link href={"/userdetail/"+user.id}>
                     <p> {user.name}</p>
                     </Link>  
                    </div>
                )
            })
        }
        </>

    )
}
export default Page