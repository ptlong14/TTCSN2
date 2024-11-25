const styles={
    beforeArrow:{
        position: 'absolute',
        left: -17,
        top: '22%',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        fontSize: 45,
        color: 'white',
        transition: 'background-color 0.3s',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }
    },
    afterArrow:{
        position: 'absolute',
        right: -15,
        top: '22%',
        zIndex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)',
        borderRadius: '50%',
        padding: '10px',
        cursor: 'pointer',
        fontSize: 45,
        color: 'white',
        transition: 'background-color 0.3s',
        '&:hover': { backgroundColor: 'rgba(0,0,0,0.5)', color: 'white' }
    }
}
export default styles