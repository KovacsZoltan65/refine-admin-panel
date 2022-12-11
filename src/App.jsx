import { 
    ErrorComponent, 
    Layout, 
    notificationProvider, 
    ReadyPage
} from "@pankod/refine-antd";

import { Refine } from "@pankod/refine-core";

import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-simple-rest";
import "@pankod/refine-antd/dist/styles.min.css";

import {
    PostList,PostShow,PostCreate,PostEdit,
    UserList,UserShow,UserCreate,UserEdit,
    CategoryList,CategoryShow,CategoryCreate,CategoryEdit
} from "pages";

import { Footer } from "components/footer";

const API_URL = "https://api.fake-rest.refine.dev";

function App(){

    return (
        <Refine 
            dataProvider={dataProvider(API_URL)} 
            notificationProvider={notificationProvider}
            Layout={Layout}
            ReadyPage={ReadyPage}
            routerProvider={routerProvider}
            catchAll={<ErrorComponent />}
            Footer={Footer}
            resources={[
                {
                    name: "posts",
                    options: {route: "posts"},
                    list: PostList,
                    show: PostShow,
                    create: PostCreate,
                    edit: PostEdit
                },
                {
                    name: "users",
                    options: {route: "users"},
                    list: UserList,
                    show: UserShow,
                    create: UserCreate,
                    edit: UserEdit
                },
                {
                    name: "categories",
                    options: {route: "categories"},
                    list: CategoryList,
                    show: CategoryShow,
                    create: CategoryCreate,
                    edit: CategoryEdit
                }
            ]}/>
    );
}

export default App;