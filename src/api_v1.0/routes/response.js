const success = (res, data, status) => {
    res.status(status || 200).send({
        'error': '',
        'data': data
    })
}

const error = (res, message, status) => {
    res.status(status || 500).send({
        'error': {
            error: true,
            message: message
        },
        'data': ''
    })
}

module.exports = { success, error };