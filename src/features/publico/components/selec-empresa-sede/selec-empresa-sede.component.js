import { useDispatch, useSelector, useStore } from 'react-redux';
import { useEffect, useState } from 'react';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';
import { Dropdown } from 'primereact/dropdown';
import { selecEmpresaSedeAction } from 'features/publico/store/actions/selec-empresa-sede.action';
const SeleccionarEmpresaSedeComponent = ({ isOpen }) => {

    const dispatch = useDispatch();

    const [mostrarEmpresa, setMostrarEmpresa] = useState(true);
    const [empresas, setEmpresas] = useState([]);
    const [sedes, setSedes] = useState([]);
    const [currentEmpresa, setCurrentEmpresa] = useState(null);
    const [currentSede, setCurrentSede] = useState(null);

    const usuarioInformation = useSelector(state => state.authReducer.user);
    // const empresas = useSelector(state => state.selecEmpresaSedeReducer.empresas);

    useEffect(() => validarVisibilidad(), [usuarioInformation]);

    function validarVisibilidad() {

        if (usuarioInformation?.empresas !== null && usuarioInformation?.empresas !== undefined) {

            setEmpresas(usuarioInformation.empresas);
            if (usuarioInformation.empresas.length > 1)
                setMostrarEmpresa(true);
            else {
                setMostrarEmpresa(false);
                setSedes(usuarioInformation.empresas[0].sedes)
            }
        }
    }

    const onSelectSede = (e) => {
        setCurrentSede(e.value);
    }

    const onSelectEmpresa = (e) => {
        const currentEmpresa = empresas.filter(c => { return c.id === e.value.id });
        setCurrentEmpresa(currentEmpresa[0]);
        setSedes(currentEmpresa[0].sedes);
    }

    const onHide = () => {
        dispatch(selecEmpresaSedeAction.ocultar());
    };

    const onContinuar = () => {
        usuarioInformation.empresas = null;
        currentEmpresa.sedes = null;
        currentEmpresa.sedes = [currentSede];
        usuarioInformation.empresas = [currentEmpresa];
        dispatch(selecEmpresaSedeAction.seleccionar(usuarioInformation));
    }

    return (
        <Dialog
            visible={isOpen}
            onHide={onHide}
            style={{ width: '24vw' }}
            className="modal-custom"
            breakpoints={{ '1200px': '45vw', '640px': '80vw' }}
        >
            <div className="form-modal">
                <header className="header">
                    <div className="title">
                        <h3 className="mb-2 font-bold">SELECCIONE</h3>
                    </div>
                </header>

                <div className="fields flex flex-col gap-4 mt-4">

                    {mostrarEmpresa && <Dropdown
                        options={empresas}
                        optionLabel="nombre"
                        filter
                        showClear
                        filterBy="nombre"
                        className="w-full"
                        onChange={onSelectEmpresa}
                        placeholder="Seleccione una empresa"
                    />}

                    <Dropdown
                        options={sedes}
                        optionLabel="nombre"
                        filter
                        showClear
                        filterBy="nombre"
                        className="w-full"
                        onChange={onSelectSede}
                        placeholder="Seleccione una sede"
                    />
                </div>

                <div className="flex gap-2 mt-6 justify-center">
                    <Button label="Cancelar" onClick={() => onHide()} className="btn btn-secondary" />
                    <Button label="Continuar" onClick={() => onContinuar()} className="btn btn-primary" />
                </div>
            </div>
        </Dialog>
    );
};

export default SeleccionarEmpresaSedeComponent;
