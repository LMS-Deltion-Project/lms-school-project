function render( props:any ) {
    const styles = props.styles ? props.styles : "h-full"

    return (<>
        <img src="/logo.png" alt="logo" className={styles}/>
    </>)
}

export default render