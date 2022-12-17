import {useHttp} from "./hooks/http.hook";
import {useEffect, useState} from "react";
import Main from "./components/main";
import {HOST} from "./config";

function App() {
    const {loading, request, error} = useHttp();
    const [projects, setProjects] = useState([]);
    //Домен window.location.hostname
    const getAllPrejects = () => {
        request(`${HOST}/api/project/read.php`, 'POST')
            .then(response => {
                setProjects(response.project)
            })
    }

    useEffect(() => {
        getAllPrejects();
    }, []);

    return (
        <div className="App">
            <Main
                projects={projects}
                loading={loading}
                error={error}
                onProjectChanged={getAllPrejects}
            />
        </div>
    );
}

export default App;
