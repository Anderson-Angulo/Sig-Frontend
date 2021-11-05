import React from 'react'
import './default.component.css';
import FooterComponent from './footer/footer.component';
import HeaderComponent from './header/header.component';
import SidebarComponent from './sidebar/sidebar.component';
import {
    BrowserRouter as Router,
    Switch,
    useLocation,
    useRouteMatch
} from "react-router-dom";
export default function DefaultComponent({ children }) {
    //debugger;
    // children = children?.props?.children[0];

    console.log(children);
    return (
        <>
            <HeaderComponent />
            <SidebarComponent />
            <main>{children}</main>
            <FooterComponent />
        </>

    )
}
// export default class DefaultComponent extends React.Component<any, {}> {
//     render() {
//       console.log(this.props.children);
//         return (
//             <div>


//                 {this.props.children}

//             </div>
//         )
//     }
// }
// const DefaultComponent = ({ children }) => {

//     console.log(children)
//     debugger;
//     //children = children?.props?.children[0];
//     return (
//         <>
//             {children}
//             {/* <HeaderComponent />
//             <SidebarComponent />

//             <FooterComponent /> */}
//         </>
//     )
// }
// export default DefaultComponent;