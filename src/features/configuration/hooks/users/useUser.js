import { UsersAction } from 'features/configuration/store/actions/UsersAction';
import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useHistory } from 'react-router-dom';
import useSetTitlePage from 'shared/hooks/useSetTitlePage';
import {useForm} from 'react-hook-form'

const useUser = ({ title }) => {
  const history = useHistory();
  const params = useParams();
  const inputFile = useRef(null);
  const dispatch = useDispatch();
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  const { editUser } = useSelector((state) => state.userReducer);
  const {register,setError,clearErrors,handleSubmit,formState:{errors}}=useForm()
  
  const [isActive,setIsActive]=useState(false)
  const [srcAvatar, setSrcAvatar] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [locationIds, setLocationIds] = useState([]);
  const [roleIds, setRoleIds] = useState([]);
  const [visible, setVisible] = useState(false);
  const [disabledButtonState, setDisabledButtonState] = useState(false);

  const { updateTitle } = useSetTitlePage();

  let isUserNew=title === 'Nuevo Usuario';
  const description = isUserNew ? 'Nuevo Usuario' : 'Editar Usuario';
  const pageTitle = {
    title: 'Configuración',
    subtitle: 'Roles y Privilegios',
    description,
  };

  const {userName, email, firstName, lastName, statusName} = editUser?.data;

  const [userData, setUserData] = useState(null);


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

  useEffect(()=>{
      if(roleIds.length===0){
      setError("role",{
        type:"required",
        message:"Debes seleccionar por lo menos un Rol"
      })
      }else{
        clearErrors("role")
      }
    } ,[roleIds])

  useEffect(()=>{
      if(locationIds.length===0){
        setError("location",{
          type:"required",
          message:"Debes seleccionar por lo menos un Sede"
        })
      }else{
        clearErrors("location")
      }
    },[locationIds])

  useEffect(()=>{
    if(roleIds.indexOf(1) !== -1){
      setIsAdmin(true)
    } else{
      setIsAdmin(false)
    } 
  },[roleIds])

  useEffect(()=>{
    if(isUserNew){
      setIsActive(true)
      setDisabledButtonState(true)
      setIsAdmin(false)
    }else{
      setUserData({userName,email,firstName,lastName})
    }
  },[editUser.data])

  useEffect(() => {
    roleIds.indexOf(1) !== -1 ? setIsAdmin(true) : setIsAdmin(false);
  }, [roleIds]);

  useEffect(() => {
    updateTitle({
      title: 'Configuración',
      subtitle: 'Gestión de Usuarios',
      description: title,
      previousUrl: '/configuracion/usuarios',
    });
  }, []);

  useEffect(() => {
    if (isUserNew) setSrcAvatar(null);
    else setSrcAvatar(editUser.data?.avatar);
  }, [editUser]);

  useEffect(() => {
    const { data } = editUser;
    if (!isUserNew && Object.values(data).length > 0) {
      const roles = data?.roles?.map((role) => role.code.toUpperCase());
      if (roles?.includes('ADMIN')) setIsAdmin(true);
      else setIsAdmin(false);

      const locationsIDs = data?.companies?.map(({ locations }) => {
        return locations.map((location) => location.id);
      })[0];

      const rolesIDs = data?.roles?.map((r) => r.id);
      setLocationIds(locationsIDs);
      setRoleIds(rolesIDs);
    }
  }, [editUser]);

  const handleLocationChange=(e)=>{
    if(e.target.checked) setLocationIds([...locationIds,e.target.name])
    else{
      const newLocationIds = locationIds.filter(l=>l !== e.target.name)
      setLocationIds(newLocationIds)
    }
  }

  const handleRoleChange=(e)=>{
    if(e.target.value && e.target.name!==1 ) setRoleIds([...roleIds,e.target.name])
    else if(e.target.value && e.target.name===1) setRoleIds([e.target.name])
    else{
      const newRoleIds = roleIds.filter(r=>r !== e.target.name)
      setRoleIds(newRoleIds)
    }
  }


  const accept = () => {
    dispatch(UsersAction.saveUserStatus({ status: null }));
    const { description, ...rest } = pageTitle;
    updateTitle(rest);
    history.push('/configuracion/usuarios');
  };

  const reject = () => {
    setVisible(false);
  };
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
    if (isUserNew && roleIds?.length === 0) {
      return false;
    } else if (roleIds?.length > 0) {
      return roleIds.includes(id);
    }
    return false;
  };

  const createOrEditUser = (data) => {
    let formData=new FormData()
    const userId = parseInt(params.id) || null;
    const avatar = srcAvatar;
    const { status } = dataManager.data;
    const statusName = isActive ? 'ACTIVO' : 'INACTIVO';
    const statusId = status.find((s) => s.description === statusName)?.id;

    const payload = {
      ...userData,
      avatar,
      userId,
      statusId,
      roleIds,
      locationIds,
    };

    console.log(payload)

    for(let prop in payload){
      formData.set(prop,payload[prop]) 
    }

    dispatch(UsersAction.saveUserStatus({ status: '' }));
    dispatch(UsersAction.saveUser(formData));
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
    createOrEditUser,
    setSrcAvatar,
    handleLocationChange,
    handleRoleChange,
    register,
    handleSubmit,
    errors,
    visible,
    setVisible,
    accept,
    reject,
    disabledButtonState,
    editUser
  };
};

export default useUser;
