import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BreadcrumpAction } from 'core/store/actions/BreadcrumpAction';

const MyAccountPage = () => {
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);

  /*   useEffect(() => {
    dispatch(
      BreadcrumpAction.setTitlePage(
        'PERFI',
        usuarioInformation.menuAdministrador
      )
    );
  }, []); */

  return <div>MI CUENTA</div>;
};

export default MyAccountPage;
