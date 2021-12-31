import {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UsersAction } from 'features/configuration/store/actions/UsersAction';

const useUserFilter=()=>{
  const dataManager = useSelector((state) => state.userReducer.dataManager);
  const dispatch = useDispatch()
  const [valueSearch, setValueSearch] = useState(null);
  const { data } = dataManager;
  

  const [values,setValues]=useState({
    locationId:null,
    companyId:null,
    roleId:null
  })

  const initialState={
      page:0,
      pageSize:0,
      columnOrder:null,	
      order:null,
      fromDate:null,	
      toDate:null,
      companyId:null,
      locationId:null,
      roleId:null	
  }

  const [valuesAvancedSearch,setValuesAvancedSearch]=useState(initialState)

  useEffect(() => {
    const cantList =
      data?.roles?.length + data?.status?.length + data?.company?.length;
    if (cantList === 0) dispatch(UsersAction.getDataMaster());
  }, []);


  const getIdForCompany=(name)=>{
    const companies=data.company
    const companyId=companies.find(c=>c.businessName===name)?.id
    return companyId
  }
  const getIdForLocation=(name)=>{
    const companies=data.company
    let locationId
    companies.find(c=>{
        locationId=c.locations.find(l=>l.name===name)?.id
    })
    return locationId
  }
  const getIdForRole=(name)=>{
    const companies=data.roles
    const roleId=companies.find(c=>c.description===name)?.id
    return roleId
  }

  const setValue=(e)=>{
    const name=e.target.name
    if(name==="companyId"){
      return getIdForCompany(e.value?.company)
    }
    else if(name==="locationId"){
      return getIdForLocation(e.value?.location)
    }
    else if(name==="roleId"){
      return getIdForRole(e.value?.role)
    }
    return e.target.value
  }

  const handlerChangeModalFilter=(e)=>{
      setValues({
        ...values,
        [e.target.name]:e.value
      })
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
    console.log("Busqueda Avanzada")  
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
    values
  }
}


export default useUserFilter;