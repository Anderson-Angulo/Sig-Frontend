import  {UserService}  from 'features/configuration/services/UserService';
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
  const {email,firstName,lastName}=editUser.data
  const [userData, setUserData] = useState({email,firstName,lastName})

  const [srcAvatar, setSrcAvatar] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [statusName, setStatusName] = useState('');
  const [locationIds, setLocationIds] = useState([]);
  const [roleIds, setRoleIds] = useState([]);
  
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
      data?.roles?.length + data?.status?.length + data?.company?.length;
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

      const locationsIDS = data?.companies?.map(({ locations }) => {
        return locations.map((location) => location.id);
      })[0];

      const RolesIDS = data?.roles?.map(role => role.id);

      setLocationIds(locationsIDS);
      setRoleIds(RolesIDS);
    }
  }, [editUser]);

  const onSelectedImage = ({ target }) => {
    const file = target.files[0];

    if (!file) {
      setSrcAvatar(usuarioInformation?.avatar);
      return;
    }
    const fr = new FileReader();
    console.log(fr)
    fr.onloadend = () => setSrcAvatar(fr.result);
    fr.readAsDataURL(file);
  };

  

  const isCheckedLocation = ({ id }) => {
    if (isUserNew && locationIds.length === 0) return false;
    else if (locationIds.length > 0) return locationIds.includes(id);
    return false;
  };

  const cancelSaveUser = () => {
    history.push('/configuracion/usuarios');
  };


  const createOrEditUser=(e)=>{
    e.preventDefault()
    let userId=params.id || null
    userId = userId !== null && parseInt(userId) 
    const {status}=dataManager.data
    const statusId=status.find(s=>s.description === statusName)?.id
    const payload={
      ...userData,
      userId,
      statusId,
      roleIds,
      locationIds,
    }
    
    
    console.log("DATA: ",payload)
    // UserService.saveUser(payload).then(model=>{
    //   console.log(model)
    // })
  }

  return {
    onSelectedImage,
    isUserNew,
    inputFile,
    srcAvatar,
    isAdmin,
    setIsAdmin,
    statusName,
    setStatusName,
    setUserData,
    userData,
    isCheckedLocation,
    cancelSaveUser,
    createOrEditUser
  };
};

export default useUser;
