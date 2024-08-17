import { createClient } from 'contentful';
import { useState, useEffect } from 'react';

const client = createClient({
    space: "n1trhcl7ok3m",
    environment: "master",
    accessToken: import.meta.env.VITE_API_KEY
})


const useFetchProjects = () =>{
    const [loading, setLoading] = useState(true)
    const [project, setProject] = useState([])

    const getData = async () => {
        try {
            const response = await client.getEntries({content_type: "projects"})
            // console.log(response);
            const data = response.items.map(item => {
            const { title, url, image, description} = item.fields;
            const id = item.sys.id
            const img = image?.fields?.file?.url
                return { title, url, id, img, description };
           })
        //    console.log(data);
           setProject(data)
           setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
        
    }, [])
    return {loading, project}
}

// client.getEntries({content_type: "projects"})
// .then((response) => console.log(response))

export default useFetchProjects;
