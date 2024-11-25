const styles = {
    cardMedia: {
        height: '150px',
        width: '100%',
        maxHeight: '300',
        objectFit: 'cover',
        transition: 'filter 0.3s ease',
        '&:hover': {
            filter: 'brightness(0.7)',
        },
    },
    card: {
        maxWidth: '100%',
        height: 340,
        margin: 1
    },
    starContainer: {
        display: 'flex',
        alignItems: 'center',
        fontWeight: 'bold'
    },
    courseName: {
        fontWeight: 'bold',
        fontSize: '1.2rem'
    },
    price: {
        fontWeight: 'bold', color: 'text.primary'
    },
    sectionTitle: {
        fontWeight: 'bold',
        marginTop: 3,
        marginBottom: 2,
    },
    courseAuthor: {
        color: '#757575',
        fontSize: '0.875rem',
    },
    tooltip: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '0.875rem',
        border: '2px solid #ccc',
        ul: {
            listStyleType: 'none',
            padding: 0,
            margin: 0,
        },
        li: {
            display: 'flex',
            alignItems: 'center',
            marginBottom: '8px',
            paddingLeft: '16px',
        },
    },
    date: {
        color: 'green'
    }
};
export default styles;