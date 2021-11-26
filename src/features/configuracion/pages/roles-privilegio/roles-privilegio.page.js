import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { breadcrumpAction } from 'core/store/actions/breadcrump.action';
import 'shared/styles/components/tablas.scss';

const RolesPrivilegioPage = () => {
  const dispatch = useDispatch();

  const usuarioInformation = useSelector((state) => state.authReducer.user);
  useEffect(() => {
    dispatch(
      breadcrumpAction.setTitlePage(
        'ROLPRI',
        usuarioInformation.menuAdministrador
      )
    );
  }, []);

  return <Fragment>-</Fragment>;
};

export default RolesPrivilegioPage;
