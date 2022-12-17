import Header from "./header/header";
import {Container} from "./container/container";
import AddProjectForm from "./addProjectForm";
import Modal from "./modal/modal";
import Form from "./form/form";
import Input from "./input/input";
import {Footer} from "./footer/footer";
import ErrorMessage from "./errorMessage/ErrorMessage";
import Skeleton from "./skeleton/skeleton";
import AllProjects from "./allProjects";
import {useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {HOST} from "../config";

const Main = function(props) {
    const {request} = useHttp();
    const {projects, loading, error, onProjectChanged} = props;

    const [isAdmin, setIsAdmin] = useState(sessionStorage.getItem('admin'));
    const [checkPasswordMod, setCheckPasswordMod] = useState(false);

    const checkAdmin = () => {
        setCheckPasswordMod(true);
    };

    const errorMessage = error ? <ErrorMessage/> : null;
    const skeleton = loading ? <Skeleton/> : null;
    const content = !(loading || error) ? <AllProjects projects={projects} isAdmin={isAdmin} onProjectChanged={onProjectChanged}/> : null;
    return (
        <>
            <Header checkAdmin={checkAdmin}/>
            <Container>
                {isAdmin ? <AddProjectForm onProjectAdd={onProjectChanged}/> : null}
                {checkPasswordMod ? <Modal
                    title="Подтвердите, что вы администратор"
                    size={{height: 245}}
                    content={(
                        <Form
                            onSubmit={(formData) => {
                                request(`${HOST}/api/password/check.php`, 'POST', JSON.stringify(formData.data))
                                    .then(response => {
                                        setIsAdmin(response.result);
                                        sessionStorage.setItem('admin', response.result);
                                        if (response.result) {
                                            setCheckPasswordMod(false);
                                        }
                                    })
                            }}
                        >
                            <Input.Password name={"password"} mandatory={true}/>
                        </Form>
                    )}
                    afterClose={() => {setCheckPasswordMod(false)}}
                /> : null}
                {errorMessage}
                {skeleton}
                {content}
            </Container>
            <Footer/>
        </>
    )
}

export default Main;