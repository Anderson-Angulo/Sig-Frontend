import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { breadcrumpAction } from 'core/store/actions/breadcrump.action';


const MiCuentaPage = (props) => {
    const dispatch = useDispatch();
    const usuarioInformation = useSelector(state => state.authReducer.user);

    useEffect(() => { dispatch(breadcrumpAction.setTitlePage('PERFI', usuarioInformation.menuAdministrador)); }, []);

    return <div>MI CUENTA</div>;
};

export default MiCuentaPage;