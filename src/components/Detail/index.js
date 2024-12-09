

const styles = {
    box: {
        backgroundColor: 'black',
        height: '400px',
        color: 'white',
        boxShadow: 1,
        marginTop: '20px'
    },
    breadcrumb: {
        paddingTop: '20px',
        fontSize: '20px',
        color: '#ffffff',
    },
    homeLink: {
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        textDecoration: 'none'
    },
    grainText: {
        display: 'flex',
        alignItems: 'center',
    },
    container: {
        height: 'auto',
        backgroundColor: 'white',

        marginTop: '20px',
        marginBottom: '20px',
        padding: '40px'

    },
    contents: {
        height: 'auto',
        minHeight: '110vh',
    },
    title: {
        fontSize: '30px',
        fontWeight: 'bold',
        marginTop: '15px',
    },
    description: {
        marginTop: '15px',
        fontSize: '18px',
        lineHeight: 1.5,
    },
    author: {
        marginTop: '15px',

    },
    star: {
        marginTop: '15px',
        color: 'orange',
        fontSize: '19px',
        fontWeight: 'bolder',
        display: 'flex',
    },
    date: {
        marginTop: '15px',
        display: 'flex'
    },
    learnTitle: {
        fontWeight: 'bolder',
        marginBottom: '18px'
    },

    learnContentBox: {
        border: '1px solid #fff',
        display: 'flex'
    },
    itemContents: {
        border: '1px solid black',
        padding: '40px'
    },
    cart: {
        position: 'absolute',
        top: '16%',
        right: '180px',
        zIndex: 10,
        alignItems: 'center',
        bgcolor: 'white',
        borderRadius: '5px',
        height: '580px',
        width: '350px',
        boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.1)',
        border: '1px solid grey',
    },
    boxImage: {
        display: 'flex', justifyContent: 'center', alignItems: 'center'
    },
    addToCartButton: {
        width: '80%',
        backgroundColor: '#A46AEA',
        color: 'white',
        '&:hover': {
            backgroundColor: '#303f9f',
        },
    },
    buyNowButton: {
        width: '80%',
        color: '#3f51b5',
        borderColor: '#3f51b5',
        '&:hover': {
            borderColor: '#303f9f',
        },
    },
    dialogContentStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 3,
        textAlign: 'center',
    },

    imageStyle: {
        width: '30%',
        maxWidth: '400px',
        height: 'auto',
        borderRadius: '8px',
        marginBottom: '16px',
    },

    titleStyle: {
        fontWeight: 'bold',
        marginBottom: '8px',
        color: '#333',
    },

    paragraphStyle: {
        marginBottom: '12px',
        color: '#555',
        lineHeight: 1.6,
        fontSize: '16px',
    },

    sectionTitleStyle: {
        fontWeight: 'bold',
        marginTop: '20px',
        marginBottom: '8px',
        color: '#333',
    },
}
export default styles