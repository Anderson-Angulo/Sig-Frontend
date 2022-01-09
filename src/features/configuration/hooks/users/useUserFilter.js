import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';

const useUserFilter=()=>{
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  const dispatch = useDispatch()
  const [valueSearch, setValueSearch] = useState(null);
  const [companyIdValue, setCompanyIdValue] = useState(null);
  const { data } = dataManager;
   const { loading } = useSelector((state) => state.userReducer.users);

  const [values,setValues]=useState({
    locationId:null,
    companyId:null,
    roleId:null,
    statusId:null
  })

  const [valuesAvancedSearch,setValuesAvancedSearch]=useState({})

  useEffect(() => {
    const cantList =
      data?.roles?.length + data?.status?.length + data?.company?.length;
    if (cantList === 0) dispatch(UsersAction.getDataMaster());
  }, []);




  const getIdForCompany=(name)=>{
    const companies=data.company
    const companyId=companies.find(c=>c.businessName===name)?.id
    return companyId || null
  } 
  const getIdForLocation=(name,companyId)=>{
    const companies=data.company
    const company=companies.find(c=>{
        return c?.id===companyId
    })
    const locationId=company?.locations.find(l=>l.name===name)?.id
    return locationId || null
  }
  const getIdForRole=(name)=>{
    const companies=data.roles
    const roleId=companies.find(c=>c.description===name)?.id
    return roleId || null
  }

  const getIdForState=(name)=>{
    const status=data?.status
    const statusId=status?.find(s=>s?.description?.toUpperCase()===name?.toUpperCase())?.id
    return statusId || null
  } 

  const setValue=(e)=>{
    const target=e.target
    if(target.name==="companyId"){
      const companyIdValue=getIdForCompany(e.value?.company)
      setCompanyIdValue(companyIdValue)
      return companyIdValue
    }
    else if(target.name==="locationId"){
      return getIdForLocation(e.value?.location,companyIdValue)
    }
    else if(target.name==="roleId"){
      return getIdForRole(e.value?.role)
    }
    else if(target.name==="statusId"){
      return getIdForState( target.value === values.statusId ? null : target.value)
    }
    return e.target.value
  }

  const handlerChangeModalFilter=(e)=>{
      setValues(prevValues=>({
        ...prevValues,
        [e.target.name]: e.value === prevValues.statusId ? null : e.value
      }))
      setValuesAvancedSearch({
        ...valuesAvancedSearch,
        [e.target.name]:setValue(e)
      })
  }



  const rolesValues=data?.roles?.map(r=>r.description)
  const companiesValues=data?.company?.map(c=>c.businessName)
  const locationsValues=data?.company?.find(c=>c.id===valuesAvancedSearch?.companyId)?.locations?.map(l=>l.name)
  // Variables a exportar hacia UsersModalFilterComponent.js
  const companiesOptions=companiesValues?.map(value=>({company:value}))
  const locationsOptions=locationsValues?.map(value=>({location:value}))
  const rolesOptions=rolesValues?.map(value=>({role:value}))


  const advancedfilter=(e)=>{
    e.preventDefault()
    dispatch(UsersAction.getUsers({ change: true, fields: valuesAvancedSearch }));
  }

  const simpleFilter=()=>{
    console.log("Busqueda Simple")
  }
  
  
  
  
  return {
    valueSearch,
    setValueSearch,
    rolesOptions,
    locationsOptions,
    companiesOptions,
    valuesAvancedSearch,
    handlerChangeModalFilter,
    advancedfilter,
    simpleFilter,
    values,
    setValues,
    loading
  }
}


export default useUserFilter;