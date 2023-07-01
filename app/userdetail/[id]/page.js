import axios from "axios";
export const metadata={
    title: "Detail of user"
}

async function fetcgUser(id){
    try{
        const response = await axios.get("https://jsonplaceholder.typicode.com/users/"+id);
        return response.data;
    }
    catch(error){
        console.error(error);
    }
}
const Page=async({params})=>{
    const data = await fetcgUser(params.id);
    console.log("Single: ", data);
    return(
        <>
        <h2>User Detail : {params.id}</h2>
        <div>
            <h4>{data.name}</h4>
            <p>{data.email} <br></br>
            {data.website} <br />
            {data.username} <br />
            {data.phone}
            </p>
        </div>
        </>
    )
}
export default Page