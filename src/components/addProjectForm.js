import Form from "./form/form";
import Input from "./input/input";
import {useState} from "react";
import {useHttp} from "../hooks/http.hook";
import {HOST} from "../config";

const AddProjectForm = (props) => {
    const {onProjectAdd} = props;
    const [projectType, setProjectType] = useState();

    const onSelect = value => {
        setProjectType(value);
    };

    const renderAddProjectForm = () => {
        switch (projectType) {
            case 'game':
                return (
                    <FormEl onProjectAdd={onProjectAdd}>
                        <Input.Text text="Ученик" name="student" mandatory={true}/>
                        <Input.Text text="Название проекта" name="name" mandatory={true}/>
                        <Input.File text="Архив проекта" name="archive" mandatory={true} types=".zip" icon="archive"/>
                        <Input.File text="Картинка проекта" name="img" mandatory={true} types=".jpg" icon="img"/>
                        <Input.Select text="Тип" name="type" mandatory={true} store={[
                            {
                                id: 'game',
                                value: 'Игры'
                            },
                            {
                                id: 'video',
                                value: 'Видео'
                            },
                            {
                                id: 'site',
                                value: 'Сайт'
                            }
                        ]}
                                      onSelect={onSelect}/>
                    </FormEl>
                )
            case 'video':
                return (
                    <FormEl onProjectAdd={onProjectAdd}>
                        <Input.Text text="Ученик" name="student" mandatory={true}/>
                        <Input.Text text="Название проекта" name="name" mandatory={true}/>
                        <Input.Text text="Iframe" name="iframe" mandatory={true}/>
                        <Input.Select text="Тип" name="type" mandatory={true} store={[
                            {
                                id: 'game',
                                value: 'Игры'
                            },
                            {
                                id: 'video',
                                value: 'Видео'
                            },
                            {
                                id: 'site',
                                value: 'Сайт'
                            }
                        ]}
                                      onSelect={onSelect}/>
                    </FormEl>
                )
            case 'site':
                return (
                    <FormEl onProjectAdd={onProjectAdd}>
                        <Input.Text text="Ученик" name="student" mandatory={true}/>
                        <Input.File text="Картинка проекта" name="img" mandatory={true} types=".jpg" icon="img"/>
                        <Input.File text="Архив проекта" name="archive" mandatory={true} types=".zip" icon="archive"/>
                        <Input.Select text="Тип" name="type" mandatory={true} store={[
                            {
                                id: 'game',
                                value: 'Игры'
                            },
                            {
                                id: 'video',
                                value: 'Видео'
                            },
                            {
                                id: 'site',
                                value: 'Сайт'
                            }
                        ]}
                                      onSelect={onSelect}/>
                    </FormEl>
                )
            default:
                return (
                    <FormEl onProjectAdd={onProjectAdd}>
                        <Input.Text text="Ученик" name="student" mandatory={true}/>
                        <Input.Select text="Тип" name="type" mandatory={true} store={[
                            {
                                id: 'game',
                                value: 'Игры'
                            },
                            {
                                id: 'video',
                                value: 'Видео'
                            },
                            {
                                id: 'site',
                                value: 'Сайт'
                            }
                        ]}
                                      onSelect={onSelect}/>
                    </FormEl>
                )
        }
    }

    return (
        renderAddProjectForm()
    );
}

export default AddProjectForm;

const FormEl = (props) => {
    const {onProjectAdd} = props;
    const {loading, request, error} = useHttp();
    return (
        <Form
            title="Добавить проект"
            submitState={{loading}}
            onSubmit={(formData) => {
                request(`${HOST}/api/project/create.php`, 'POST', JSON.stringify(formData.data))
                    .then(response => {
                        const formFiles = new FormData();
                        for (let file in formData.files) {
                            formFiles.set(file, formData.files[file])
                        }
                        if (response.id) {
                            formFiles.set('id', response.id)
                        }
                        const isEmpty = function(obj) {
                            for (let key in obj) {
                                // если тело цикла начнет выполняться - значит в объекте есть свойства
                                return false;
                            }
                            return true;
                        }
                        if (!isEmpty(formData.files)) {
                            request(`${HOST}/api/project/save.php`, 'POST', formFiles, {})
                        }
                    })
                    .then(() => {
                        if (typeof onProjectAdd === 'function') {
                            onProjectAdd();
                        }
                    })
            }}>
            {props.children}
        </Form>
    )
}