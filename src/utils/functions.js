function parseError(error, res) {
    console.error(error);
    let status = 500;
    let errorMessage = "Error interno del servidor";
    if (error.errorCode) {
        status = error.errorCode;
        errorMessage = error.message;
    }
    res.status(status).json({ error: errorMessage });
}

export {
    parseError
}