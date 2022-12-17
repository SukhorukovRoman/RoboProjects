import Project from "./project/project";
import {Tabs} from "./tabs/tabs";
import TabNavItem from "./tabs/tabNavItem";
import Special from "./special/special";
import TabContent from "./tabs/tabContent";
import {Window} from "./window/window";
import {useHttp} from "../hooks/http.hook";
import Button from "./button/button";
import {cloneElement} from "react";
import {HOST} from "../config";

const AllProjects = function(props) {
    const {loading, request} = useHttp();
    const {projects, isAdmin, onProjectChanged} = props;

    const deleteProject = function(config) {
        const {id, name, student} = config;
        const confirmMsg = window.confirm(`Действительно удалить проект: ${name} ученик: ${student}`);
        if (confirmMsg) {
            request(`${HOST}/api/project/delete.php`, 'POST', JSON.stringify({id}))
                .then(() => {
                    if (typeof onProjectChanged === 'function') {
                        onProjectChanged();
                    }
                })
        }
    }

    const onProjectClick = function(id) {
        if (sessionStorage.getItem(`project${id}`) !== 'true') {
            request(`${HOST}/api/project/visit.php`, 'POST', JSON.stringify({id: id}))
        }
        sessionStorage.setItem(`project${id}`, 'true');
    }

    //В начале проект с наибольшим кол-вом посещений
    const sortProjects = (projArr) => {
        if (projArr?.length) {
            return projArr.sort(function (a, b) {
                if (a?.props?.visits > b?.props?.visits) {
                    return -1;
                }
                if (a?.props?.visits < b?.props?.visits) {
                    return 1;
                }
                // a должно быть равным b
                return 0;
            })
        } else {
            return projArr;
        }
    }

    const gameEl = projects?.filter(project => project.type === 'game')?.map(game => {
        const {id, name = "", student, visits} = game;
        const deleteBtn = isAdmin ? cloneElement(<Button.Delete action={deleteProject} loading={loading}/>, {
            data: {
                id,
                name,
                student
            }
        }) : null;
        return (
            <Project.Game
                key={id}
                gameSrc={`${HOST}/projects/${id}`}
                title={name}
                imgSrc={`${HOST}/projects/${id}/logo.jpg`}
                author={student}
                visits={visits}
                onClick={() => onProjectClick(id)}
            >
                {deleteBtn}
            </Project.Game>
        )
    })
    const videoEl = projects?.filter(project => project.type === 'video')?.map(video => {
        const {id, name = "", student, iframe} = video;
        const deleteBtn = isAdmin ? cloneElement(<Button.Delete action={deleteProject} loading={loading}/>, {
            data: {
                id,
                name,
                student
            }
        }) : null;

        return (
            <Project.Video
                key={id}
                author={student}
                title={name}
                iframe = {iframe}
                onClick={() => onProjectClick(id)}
            >
                {deleteBtn}
            </Project.Video>
        );
    })
    const siteEl = projects?.filter(project => project.type === 'site')?.map(site => {
        const {id, student} = site;
        const deleteBtn = isAdmin ? cloneElement(<Button.Delete action={deleteProject} loading={loading}/>, {
            data: {
                id,
                name: "Сайт",
                student
            }
        }) : null;

        return (
            <Project.Website
                key={id}
                author={student}
                siteSrc={`${HOST}/projects/${id}`}
                imgSrc={`${HOST}/projects/${id}/logo.jpg`}
                onClick={() => onProjectClick(id)}
            >
                {deleteBtn}
            </Project.Website>
        );
    })

    return (
        <Tabs
            tabNavs={
                <>
                    <TabNavItem>
                        <Special.Folder text="Игры" color="#4D7BFF">
                            <svg width="100%" height="100%" viewBox="0 0 18 12" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 7.99999H7V8.99999H6V7.99999Z" fill="black"/>
                                <path d="M11 7.99999H12V8.99999H11V7.99999Z" fill="black"/>
                                <path d="M2 4H3V5H2V4Z" fill="black"/>
                                <path d="M6 7.99999H7V8.99999H6V7.99999Z" fill="black"/>
                                <path d="M1 1H2V2H1V1Z" fill="black"/>
                                <path d="M16 1H17V2H16V1Z" fill="black"/>
                                <path d="M11 7.99999H12V8.99999H11V7.99999Z" fill="black"/>
                                <path d="M14 5H15V6H14V5Z" fill="black"/>
                                <path d="M15 4H16V5H15V4Z" fill="black"/>
                                <path d="M16 10H17V11H16V10Z" fill="black"/>
                                <path d="M1 10H2V11H1V10Z" fill="black"/>
                                <path d="M3 3H4V4H3V3Z" fill="black"/>
                                <path d="M4 4H5V5H4V4Z" fill="black"/>
                                <path d="M3 5H4V6H3V5Z" fill="black"/>
                                <path d="M13 4.00001H14L14 5L13 5.00001V4.00001Z" fill="black"/>
                                <path d="M14 3H15L15 4L14 4.00001L14 3Z" fill="black"/>
                                <path d="M7 7V7.99999H11L11 7H7Z" fill="black"/>
                                <path d="M5 11L6 11L6 8.99999L5 9L5 11Z" fill="black"/>
                                <path d="M5 12V11L2 11V12L5 12Z" fill="black"/>
                                <path d="M1 2H0V10H1V2Z" fill="black"/>
                                <path d="M2 0V1H6V0H2Z" fill="black"/>
                                <path d="M12 2V1H6V2H12Z" fill="black"/>
                                <path d="M16 1V0H12V1H16Z" fill="black"/>
                                <path d="M18 2H17V10H18V2Z" fill="black"/>
                                <path d="M13 11L13 12L16 12V11L13 11Z" fill="black"/>
                                <path d="M12 11H13V9L12 8.99999L12 11Z" fill="black"/>
                            </svg>
                        </Special.Folder>
                    </TabNavItem>
                    <TabNavItem>
                        <Special.Folder text="Видео" color="#FF5C5C">
                            <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M18 11V10H17V9H15V7H13V5H11V3H5V21H11V20V19H13V17H15V15H17V14H18V13H19V11H18ZM13 13V15H11V17H9V19H7V5H9V7H11V9H13V11H15V13H13Z"
                                    fill="black"/>
                            </svg>
                        </Special.Folder>
                    </TabNavItem>
                    <TabNavItem>
                        <Special.Folder text="Сайты" color="#7FFF5B">
                            <svg width="100%" height="100%" viewBox="0 0 34 34" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd" clipRule="evenodd"
                                      d="M29 5H2H1V6V26H2V28H30H33V25V7H32V6V5H29ZM29 25H2V6H29V25ZM5 8H3V10V13V14H5H13H14V13V10V8H13H5ZM13 13V10H5V13H13ZM5 22H3V20V17V16H5H13H14V17V20V22H13H5ZM13 17V20H5V17H13ZM28 8H26H18H17V10V13V14H18H26H28V13V10V8ZM18 10V13H26V10H18ZM26 22H28V20V17V16H26H18H17V17V20V22H18H26ZM18 17V20H26V17H18Z"
                                      fill="black"/>
                            </svg>
                        </Special.Folder>
                    </TabNavItem>

                </>
            }
            tabContent={
                <>
                    <TabContent>
                        <Window
                            title="Игры"
                            icon={
                                <svg width="100%" height="100%" viewBox="0 0 16 15" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M4 2H1V6H2V7H4V8H5V9H6V10H7V11H6V12H5V13H4V14H12V13H11V12H10V11H9V10H10V9H11V8H12V7H14V6H15V2H12V1H4V2Z"
                                        fill="white"/>
                                    <path d="M15 7H14V6H15V7Z" fill="black"/>
                                    <path d="M12 9H11V8H12V9Z" fill="black"/>
                                    <path d="M11 10H10V9H11V10Z" fill="black"/>
                                    <path d="M11 12H10V11H11V12Z" fill="black"/>
                                    <path d="M12 13H11V12H12V13Z" fill="black"/>
                                    <path d="M13 14H12V13H13V14Z" fill="black"/>
                                    <path d="M4 14H3V13H4V14Z" fill="black"/>
                                    <path d="M5 13H4V12H5V13Z" fill="black"/>
                                    <path d="M6 12H5V11H6V12Z" fill="black"/>
                                    <path d="M6 10H5V9H6V10Z" fill="black"/>
                                    <path d="M5 9H4V8H5V9Z" fill="black"/>
                                    <path d="M2 7H1V6H2V7Z" fill="black"/>
                                    <path d="M6 11H7V10H6V11Z" fill="black"/>
                                    <path d="M9 11H10V10H9V11Z" fill="black"/>
                                    <path d="M4 0V1H12V0H4Z" fill="black"/>
                                    <path d="M1 1V2H4V1H1Z" fill="black"/>
                                    <path d="M2 3H3V5H2V3Z" fill="black"/>
                                    <path d="M1 2H0V6H1V2Z" fill="black"/>
                                    <path d="M14 5H13V3H14V5Z" fill="black"/>
                                    <path d="M12 1V2H15V1H12Z" fill="black"/>
                                    <path d="M16 2H15V6H16V2Z" fill="black"/>
                                    <path d="M14 8V7H12V8H14Z" fill="black"/>
                                    <path d="M4 8V7H2V8H4Z" fill="black"/>
                                    <path d="M12 15V14H4V15H12Z" fill="black"/>
                                </svg>
                            }
                            style={{
                                background: "#4D7BFF"
                            }}
                        >
                            <div className="flex-container">
                                {sortProjects(gameEl)}
                            </div>
                        </Window>
                    </TabContent>
                    <TabContent>
                        <Window
                            title="Видео"
                            icon={
                                <svg width="100%" height="100%" viewBox="0 0 16 12" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 2V1H14V2H15V10H14V11H2V10H1V2H2Z" fill="white"/>
                                    <path d="M14 1H15V2H14V1Z" fill="black"/>
                                    <path d="M1 10H2V11H1V10Z" fill="black"/>
                                    <path d="M1 1H2V2H1V1Z" fill="black"/>
                                    <path d="M14 10H15V11H14V10Z" fill="black"/>
                                    <path d="M8 9V8H6V4H8V3H5V9H8Z" fill="black"/>
                                    <path d="M8 4V5H10V4H8Z" fill="black"/>
                                    <path d="M11 5H10V7H11V5Z" fill="black"/>
                                    <path d="M8 7V8H10V7H8Z" fill="black"/>
                                    <path d="M2 0V1H14V0H2Z" fill="black"/>
                                    <path d="M15 10H16V2H15V10Z" fill="black"/>
                                    <path d="M0 10H1V2H0V10Z" fill="black"/>
                                    <path d="M2 11V12H14V11H2Z" fill="black"/>
                                </svg>
                            }
                            style={{
                                background: "#FF5C5C"
                            }}
                        >
                            <div className="flex-container">
                                {videoEl}
                            </div>
                        </Window>
                    </TabContent>
                    <TabContent>
                        <Window
                            title="Сайты"
                            icon={
                                <svg width="100%" height="100%" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd" d="M9 0.00012207H15V1.00012H18V2.00012H19V3.00012H20V4.00012H21V5.00012H22V6.00012H23V8.00012V9.00012H24V11.0001V12.0001V13.0001V15.0001H23V16.0001V18.0001H22V19.0001H21V20.0001H20V21.0001H19V22.0001H18V23.0001H15V24.0001H9V23.0001H6V22.0001H5V21.0001H4V20.0001H3V19.0001H2V18.0001H1V16.0001V15.0001H0V13.0001V12.0001V11.0001V9.00012H1V8.00012V6.00012H2V5.00012H3V4.00012H4V3.00012H5V2.00012H6V1.00012H9V0.00012207ZM6 13.0001V16.0001H3V15.0001H2V13.0001H6ZM8 13.0001H16V16.0001H8V13.0001ZM18 13.0001V16.0001H21V15.0001H22V13.0001H18ZM6 8.00012V11.0001H2V9.00012H3V8.00012H6ZM8 11.0001H16V8.00012H8V11.0001ZM22 9.00012V11.0001H18V8.00012H21V9.00012H22ZM20 18.0001H17V19.0001V20.0001H16V21.0001H15V22.0001H17V21.0001H18V20.0001H19V19.0001H20V18.0001ZM15 18.0001H9V19.0001V20.0001H10V21.0001H11V22.0001H13V21.0001H14V20.0001H15V19.0001V18.0001ZM7 18.0001H4V19.0001H5V20.0001H6V21.0001H7V22.0001H9V21.0001H8V20.0001H7V19.0001V18.0001ZM7 6.00012H4V5.00012H5V4.00012H6V3.00012H7V2.00012H9V3.00012H8V4.00012H7V5.00012V6.00012ZM15 6.00012H9V5.00012V4.00012H10V3.00012H11V2.00012H13V3.00012H14V4.00012H15V5.00012V6.00012ZM20 6.00012H17V5.00012V4.00012H16V3.00012H15V2.00012H17V3.00012H18V4.00012H19V5.00012H20V6.00012Z" fill="white"/>
                                </svg>

                            }
                            style={{
                                background: "#7FFF5B"
                            }}
                        >
                            <div className="flex-container">
                                {sortProjects(siteEl)}
                            </div>
                        </Window>
                    </TabContent>
                </>
            }
        />
    )
}

export default AllProjects;