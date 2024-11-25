const styles = {
    container: {
        margin: '0 0 16px 0',
    },
    card: {
        maxWidth: '100%',
        height: 'auto',
        margin: 1,
    },
    title: {
        fontWeight: 'bold',
        fontSize: '1.2rem',
    },
    description: {
        margin: '8px 0',
    },
    author: {
        color: '#757575', 
    },
    hours: {
        display: 'flex',
        alignItems: 'center',
    },
    price: {
        fontWeight: 'bold',
        fontSize: '1rem',
    }, 
    tooltip: {
        backgroundColor: '#ffffff',
        color: '#000000',
        fontSize: '0.875rem',
        border: '2px solid #ccc',
        width: '300px',
        maxWidth: 'none',
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
    }
};
export default styles