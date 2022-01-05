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
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  let { editUser } = useSelector((state) => state.userReducer);

  
  const [isActive,setIsActive]=useState(false)
  const [srcAvatar, setSrcAvatar] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [locationIds, setLocationIds] = useState([]);
  const [roleIds, setRoleIds] = useState([]);

  const { updateTitle } = useSetTitlePage();

  let isUserNew=title === 'Nuevo Usuario';

  const { email, firstName, lastName, statusName} = editUser?.data;

  let initialUserData={
    email:  null,
    firstName: null,
    lastName:null ,
  }

  const [userData, setUserData] = useState(initialUserData);


  const handleLocationChange=(e)=>{
    if(e.target.checked) setLocationIds([...locationIds,e.target.name])
    else{
      const newLocationIds = locationIds.filter(l=>l !== e.target.name)
      setLocationIds(newLocationIds)
    }
  }

  const handleRoleChange=(e)=>{
    if(e.target.value) setRoleIds([...roleIds,e.target.name])
    else{
      const newRoleIds = roleIds.filter(r=>r !== e.target.name)
      setRoleIds(newRoleIds)
    }
  }

  useEffect(()=>{
    roleIds.indexOf(1) !== -1 ? setIsAdmin(true) : setIsAdmin(false)
  },[roleIds])

  useEffect(()=>{
    if(isUserNew){
      setIsActive(false)
      setIsAdmin(false)
    }else{
      setUserData({email,firstName,lastName})
    }
  },[])

  useEffect(()=>{
    !isUserNew && setIsActive(statusName === "ACTIVO")
  },[statusName])


  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Gestión de Usuarios',
      description: title,
    });
  }, []);

  useEffect(() => {
    if (isUserNew) setSrcAvatar(null);
    else setSrcAvatar(editUser.data?.avatar);
  }, [editUser]);

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
      if (roles?.includes('ADMIN')) setIsAdmin(true);
      else setIsAdmin(false);

      const locationsIDs = data?.companies?.map(({ locations }) => {
        return locations.map((location) => location.id);
      })[0];

      const rolesIDs=data?.roles?.map(r=>r.id)
      setLocationIds(locationsIDs);
      setRoleIds(rolesIDs)
    }
  }, [editUser]);


  const onSelectedImage = ({ target }) => {
    const file = target.files[0];
    if (!file) {
      setSrcAvatar(editUser?.data?.avatar);
      return;
    }
    const fr = new FileReader();
    fr.onloadend = () => setSrcAvatar(fr.result);
    fr.readAsDataURL(file);
  };

  const isCheckedLocation = ({ id }) => {
    if (isUserNew && locationIds?.length === 0) return false;
    else if (locationIds?.length > 0) return locationIds.includes(id);
    return false;
  };
  
  const isCheckedRole = ({ id }) => {
    if (isUserNew && roleIds?.length === 0){
      return false
    }  
    else if (roleIds?.length > 0){
      return roleIds.includes(id);
    }
    return false;
  };
  

  const cancelSaveUser = () => {
    history.push('/configuracion/usuarios');
  };

  const createOrEditUser = (e) => {
    e.preventDefault();
    const userId = parseInt(params.id) || null;
    const avatar=srcAvatar
    const { status } = dataManager.data;
    const statusName= isActive ? "ACTIVO" : "INACTIVO"
    const statusId = status.find((s) => s.description === statusName)?.id;

    const payload = {
      ...userData,
      avatar,
      userId,
      statusId,
      roleIds,
      locationIds,
    };

    console.log('DATA: ', payload);
    UsersAction.saveUser(payload)
  };

  return {
    onSelectedImage,
    isUserNew,
    inputFile,
    srcAvatar,
    isAdmin,
    setIsAdmin,
    setUserData,
    userData,
    isActive,
    setIsActive,
    isCheckedLocation,
    isCheckedRole,
    cancelSaveUser,
    createOrEditUser,
    setSrcAvatar,
    handleLocationChange,
    handleRoleChange
  };
};

export default useUser;
