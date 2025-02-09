export default function Tabs({children, buttons, containerComponent = "menu"}){

    // mi appoggio ad una variabile con la maisucola per rendere dinamico un componente passandolo in input.
    // la maiuscola è importante. Potrei anche avere la variabile con maiuscola direttaemente tra le props
    const ContainerComponent = containerComponent;

    return <>
    <ContainerComponent>
        {buttons}
    </ContainerComponent>
    {children}
    </>
}