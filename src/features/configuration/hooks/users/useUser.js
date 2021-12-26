import { UsersAction } from 'features/configuration/store/actions/UsersAction';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
// import { useHistory } from 'react-router-dom';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';

const useUser = ({ title }) => {
  const history = useHistory();
  const params = useParams();
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const usuarioInformation = useSelector((state) => state.authReducer.user);
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  const { editUser } = useSelector((state) => state.userReducer);

  const [srcAvatar, setSrcAvatar] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [statusName, setStatusName] = useState('');
  const [locationsIds, setLocationsIds] = useState([]);

  const { updateTitle } = useSetTitlePage();
  const isUserNew = title === 'Nuevo Usuario';
  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Gestión de Usuarios',
      description: title,
    });
  }, []);

  useEffect(() => {
    if (isUserNew) setSrcAvatar('');
    else setSrcAvatar(usuarioInformation?.avatar);
  }, [usuarioInformation]);

  useEffect(() => {
    const { data } = dataManager;

    const cantList =
      data.roles.length + data.status.length + data.company.length;
    if (cantList === 0) dispatch(UsersAction.getDataMaster());
  }, []);

  useEffect(() => {
    document.getElementById('content-main').scroll({
      top: 0,
      behavior: 'smooth',
    });
    if (!isUserNew) dispatch(UsersAction.getUser(params.id));
  }, []);

  useEffect(() => {
    const { data } = editUser;
    if (!isUserNew && Object.values(data).length > 0) {
      const roles = data?.roles?.map((role) => role.code.toUpperCase());
      if (roles.includes('ADMIN')) setIsAdmin(true);
      else setIsAdmin(false);
      setStatusName(data.statusName);

      const locationsIDS = [];
      data?.companies.forEach(({ locations }) => {
        locations.forEach(({ id }) => locationsIDS.push(id));
      });

      setLocationsIds(locationsIDS);
    }
  }, [editUser]);

  const onSelectedImage = ({ target }) => {
    const file = target.files[0];

    if (!file) {
      setSrcAvatar(usuarioInformation?.avatar);
      return;
    }
    const fr = new FileReader();
    fr.onloadend = () => setSrcAvatar(fr.result);
    fr.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const isCheckedLocation = ({ id }) => {
    if (isUserNew && locationsIds.length === 0) return false;
    else if (locationsIds.length > 0) return locationsIds.includes(id);
    return false;
  };

  const cancelSaveUser = () => {
    history.push('/configuracion/usuarios');
  };
  return {
    onSelectedImage,
    isUserNew,
    inputFile,
    srcAvatar,
    isAdmin,
    statusName,
    handleSubmit,
    setStatusName,
    isCheckedLocation,
    cancelSaveUser,
  };
};

export default useUser;
