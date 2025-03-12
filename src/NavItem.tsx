import {NavLink} from "react-router-dom";

export default function NavItem({ props } : {props: {
    to: string,
    title: string
}} ) {
    const navClassName = "font-medium mr-8 underline underline-offset-8 decoration-8 hover:decoration-20 decoration-red-100 text-gray-800"
    const { to, title } = props

    return (<NavLink
        className={ ({isActive}) => isActive ? navClassName + ' active' : navClassName}
        viewTransition
        to={ to }
        title={ title }
    >
        { title }
    </NavLink>)
}